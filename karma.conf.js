
module.exports = function(config) {
    config.set({
        browsers: ['Chrome'],
        frameworks: ['browserify', 'jasmine'],
        files: ['test/*.js'],
        preprocessors: {
            'test/*.js': ['browserify']
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
            // generates ./coverage/lcov.info
                {type: 'lcovonly',
                    subdir: '.'},
                // generates ./coverage/coverage-final.json
                {type: 'json',
                    subdir: '.'}
            ]
        },
        concurrency: Infinity
    })
}