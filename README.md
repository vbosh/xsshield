# XSShield. Trim and Clean all user data.
Clean POST/PUT/GET body/params.

- [How to Use](#use)
- [License](#license)

<a name="use"></a>
## How to Use
```bash
npm install xsshield --save
```

```bash
var restify = require('restify');
var xsshield = require('xsshield');

var app = restify.createServer();

app.use(restify.bodyParser());

/* make sure this comes before any routes and after the bodyParser middleware */
/* clean all params except the password and email */
app.use(xsshield(['password', 'email']));

/* or clean all params without exception */
app.use(xsshield());

app.listen(8080);
```

<a name="license"></a>
## License

[MIT](LICENSE) © [Vasil Boshnakov](https://github.com/vbosh)
