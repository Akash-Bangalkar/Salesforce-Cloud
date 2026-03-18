'use strict';

var server = require('server');

server.get('Show', function (req, res, next) {

    res.render('home', {
        message: 'Hello from SFCC'
    });

    next();
});

module.exports = server.exports();
