'use strict'

const babelify = require('babelify')
const browserify = require('browserify')
const buffer = require('vinyl-buffer')
const gulp = require('gulp')
const source = require('vinyl-source-stream')
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')

gulp.task('build', function () {
    return browserify({
        entries: 'index.js',
        standalone: 'reixs',
        transform: ['babelify', 'browserify-versionify'],
        debug: true
    })
        .transform(babelify)
        .bundle()
        .pipe(source('reixs.min.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'))
})
