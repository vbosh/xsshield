const expect = require('chai').expect;
const xsscleaner = require('../src');

describe('BODY PARAMS', () => {
    describe('Test body params', () => {
        it('should clean all body params', () => {
            var req = {
                body: {
                    username: '""',
                    password: '   <script></script>   '
                }
            };

            xsscleaner()(req, null, () => {});

            expect(req).to.deep.equal({
                body: {
                    username: '\"\"',
                    password: '&lt;script>&lt;/script>'
                }
            });
        });

        it('should clean all body params except password and email', () => {
            var req = {
                body: {
                    username: '""',
                    password: ' <script></script> '
                }
            };

            xsscleaner(['password'])(req, null, () => {});

            expect(req).to.deep.equal({
                body: {
                    username: '\"\"',
                    password: '<script></script>'
                }
            });
        });
    });
});

describe('QUERY PARAMS', () => {

});

describe('URL PARAMS', () => {

});
