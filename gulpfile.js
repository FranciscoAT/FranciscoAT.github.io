'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minify = require('gulp-clean-css');
var prefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var image = require('gulp-image');

gulp.task('compile-sass', function() {
    return gulp.src('css/*.scss')
        .pipe(concat('styles.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(rename('styles.min.css'))
        .pipe(prefixer())
        .pipe(minify({compatibility:'*'}))
        .pipe(gulp.dest('css/'))
});

gulp.task('compress-image', function() {
    gulp.src('./assets/sourceImages/*')
        .pipe(image())
        .pipe(gulp.dest('./assets'));
});

gulp.task('watch', function() {
    gulp.watch('css/*.scss', ['compile-sass'])
});