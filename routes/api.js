const express = require('express');

const router = express.Router();

router.get('/', (req, res) =>
    res.json({
        ipaddress: req.ip,
        language: req.headers['accept-language'].match(/([^,]+)/)[1],
        software: req.headers['user-agent'].match(/\(([^\)]+)\){1}/)[1]
    })
);

module.exports = router;
