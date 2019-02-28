'use strict'

const del = require('del')
const browserify = require('browserify')
const buffer = require('vinyl-buffer')
const source = require('vinyl-source-stream')
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const eslint = require('gulp-eslint')
const watchify = require('watchify')
const browserSync = require('browser-sync').create()
const {task, src, dest, series} = require('gulp')

// browserify options
const customOpts = {
    entries: 'index.js',
    standalone: 'reixs',
    transform: ['babelify', 'browserify-versionify'],
    debug: true
}

// File modification the observable
const observable = watchify(browserify(customOpts))

// Check the code
function lint() {
    return src(['*.js', 'src/*.js', 'src/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
}

// File do bundle save
function doBundle() {
    return observable.bundle()
        .on('error', console.error.bind(console))
        .pipe(source('reixs.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('./'))
        .pipe(dest('dist'))
        .on('end', series('reload'))
}

// A file update was observed
observable.on('update', function () {
    return doBundle()
})

// Check the code task
task('lint', lint)

// Delete directory
task('clean', function () {
    return del([
        'dist/*'
    ])
})

// Build reixs.js
task('build', function () {
    return browserify(customOpts)
        .bundle()
        .pipe(source('reixs.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('./'))
        .pipe(dest('dist'))
})

// Build reixs.main.js
task('minimize', function () {
    return browserify(customOpts)
        .bundle()
        .pipe(source('reixs.min.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(dest('dist'))
})

// Output dist
task('release', series('lint', 'clean', 'build', 'minimize'))

// Server reload
task('reload', function() {
    return lint().on('end', browserSync.reload
        .bind(browserSync, 'src/reixs.js'))
})

// Listen for js files
task('watch', function() {
    return doBundle().on('end', function () {
        browserSync.init({
            server: {
                baseDir: './',
                index: 'sandbox/client.html'
            },
            port: 8000,
            open: true
        })
    })
})


