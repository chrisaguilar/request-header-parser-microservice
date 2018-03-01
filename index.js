const express = require('express');

const app = express();

app.set('port', parseInt(process.env.PORT, 10));

app.get('/', (req, res) =>
    res.json({
        ipaddress: req.ip,
        language: req.headers['accept-language'].match(/([^,]+)/)[1],
        software: req.headers['user-agent'].match(/\(([^\)]+)\){1}/)[1]
    })
);

if (process.env.SINGLE) {
    app.listen(app.get('port'), () => console.log(`/header-parser listening on ${app.get('port')}`));
} else {
    module.exports = app;
}
