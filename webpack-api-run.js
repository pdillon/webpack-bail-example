// Run webpack api

var webpack = require('webpack');
var config = require('./webpack.config');

webpack(config).run(function(err, stats) {
    if (err) {
        console.error(err.message || err);
    }
    if (stats.compilation.errors) {
        console.error('Bail was never called!');
        console.error(stats.compilation.errors);
    }
});
