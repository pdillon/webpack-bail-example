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
                // @remove-on-eject-end
            }
        ]
    },
    plugins: [
        // Makes some environment variables available to the JS code, for example:
        // if (process.env.NODE_ENV === 'production') { ... }. See `./env.js`.
        // It is absolutely essential that NODE_ENV was set to production here.
        // Otherwise React will be compiled in the very slow development mode.
        new webpack.DefinePlugin({'process.env': {NODE_ENV: 'producton'}}),
        // This helps ensure the builds are consistent if source hasn't changed:
        new webpack.optimize.OccurrenceOrderPlugin(),
        // Try to dedupe duplicated modules, if any:
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
