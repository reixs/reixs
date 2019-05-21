
module.exports = function(config) {
    config.set({
        browsers: ['Chrome'],
        frameworks: ['browserify', 'jasmine'],
        files: ['src/**/*.js', 'test/*.js'],
        preprocessors: {
            'src/**/*.js': ['sourcemap', 'browserify', 'coverage'],
            'test/**/*.js': ['sourcemap', 'browserify']
        },
        browserify: {
            debug: true,
            transform: ['babelify', 'browserify-versionify']
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