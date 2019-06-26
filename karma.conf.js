
const istanbul = require('browserify-istanbul')
module.exports = function(config) {
    config.set({
        browsers: ['Chrome'],
        frameworks: ['browserify', 'jasmine'],
        files: ['test/**/*.js'],
        preprocessors: {
            'test/**/*.js': ['sourcemap', 'browserify']
        },
        browserify: {
            debug: true,
            transform: ['babelify', 'browserify-versionify',
                istanbul({
                    instrumenterConfig: {
                        embedSource: true
                    },
                    ignore: ['**/node_modules/**', 'test/**/*.js']
                })
            ]
        },
        reporters: ['progress', 'coverage'],

        // optionally, configure the reporter
        coverageReporter: {
            reporters: [
                // generates ./coverage/html
                {
                    type: 'html',
                    subdir: './html'
                },
                // generates ./coverage/lcov.info
                {
                    type: 'lcovonly',
                    subdir: '.'
                },
                // generates ./coverage/coverage-final.json
                {
                    type: 'json',
                    subdir: '.'
                }
            ]
        },
        concurrency: Infinity
    })
}