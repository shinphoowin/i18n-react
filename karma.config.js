// Karma configuration

module.exports = function(config) {
    config.set({
        // ... normal karma configuration
        basePath: '',
        frameworks: ['jasmine'],

        files: [
           'tests/PhantomJS_bind-polyfill.js',
           "https://cdnjs.cloudflare.com/ajax/libs/react/15.2.0/react.js",
           "https://cdnjs.cloudflare.com/ajax/libs/react/15.2.0/react-dom.js",
           "https://cdnjs.cloudflare.com/ajax/libs/react/15.2.0/react-dom-server.js",
            // all files ending in "_test"
            'tests/*_test.*',
            'tests/**/*_test.*'
            // each file acts as entry point for the webpack configuration
        ],

        preprocessors: {
            // add webpack as preprocessor
            'tests/*_test.*': ['webpack', 'sourcemap'],
            'tests/**/*_test.*': ['webpack', 'sourcemap']
        },

        port: 8055,
        logLevel: config.LOG_INFO,
        colors: true,
        autoWatch: true,

        browsers: ['Chrome'],
        reporters: ['progress'],
        captureTimeout: 60000,
        singleRun: false,

        webpack: {
          cache: true,
          devtool: 'inline-source-map',

          resolve: {
                extensions: ['', '.js', '.jsx', '.ts', '.tsx']
          },

          externals: {
            "react": "React",
            "react-dom": "ReactDOM",
            "react-dom-server": "ReactDOMServer",
          },

          module: {
            loaders: [
              { test: /\.tsx?$/, loader: 'ts' },
              { test: /\.jsx?$/, loader: 'jsx?harmony' }
            ]
          },
          noInfo: true
        },

        webpackMiddleware: {
            noInfo: true
        },

        devServer: {
          noInfo: true
        }
    });
};
