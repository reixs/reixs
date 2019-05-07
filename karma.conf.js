
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
        }
    })
}