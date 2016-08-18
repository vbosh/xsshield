const xssFilters = require('xss-filters');

module.exports = skipXSS => {
    skipXSS = skipXSS || [];

    return (req, res, next) => {
        if (req.body) {
            for (var i in req.body) {
                req.body[i] = req.body[i].trim();

                if (skipXSS.indexOf(i) === -1) {
                    req.body[i] = xssFilters.inHTMLData(req.body[i]);
                }
            }
        }

        if (req.query) {
            for (var j in req.query) {
                req.query[j] = req.query[i].trim();

                if (skipXSS.indexOf(i) === -1) {
                    req.query[j] = xssFilters.inHTMLData(req.query[i]).trim();
                }
            }
        }

        if (req.params) {
            for (var k in req.params) {
                req.params[k] = req.params[k].trim();

                if (skipXSS.indexOf(i) === -1) {
                    req.params[k] = xssFilters.inHTMLData(req.params[k]);
                }
            }
        }

        next();
    };
};
