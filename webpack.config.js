var webpack = require('webpack');
const path = require('path');

module.exports = {
    // Don't attempt to continue if there are any errors.
    bail: true,
    entry: './src',
    output: {
        path: './dist',
        filename: 'dist.bundle.js'
    },
    module: {
        loaders: [
            // Process JS with Babel.
            {
                test: /\.(js|jsx)$/,
                include: [path.join(__dirname, './src')],
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({'process.env': {NODE_ENV: 'producton'}}),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        // Minify the code.
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true, // React doesn't support IE8
                warnings: false
            },
            mangle: {
                screw_ie8: true
            },
            output: {
                comments: false,
                screw_ie8: true
            }
        })
    ],
    // Some libraries import Node modules but don't use them in the browser.
    // Tell Webpack to provide empty mocks for them so importing them works.
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};
