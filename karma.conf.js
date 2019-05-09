
module.exports = function(config) {
    config.set({
        browsers: ['Chrome'],
        frameworks: ['browserify', 'jasmine'],
        files: ['src/**/*.js', 'test/*.js'],
        preprocessors: {
            'src/**/*.js': ['browserify', 'coverage'],
            'test/**/*.spec.js': ['browserify']
        },
        browserify: {
            debug: true,
            entries: 'index.js',
            standalone: 'reixs',
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