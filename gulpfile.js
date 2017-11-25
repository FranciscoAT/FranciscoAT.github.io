'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minify = require('gulp-clean-css');
var prefixer = require('gulp-autoprefixer');

gulp.task('compile-sass', function() {
    return gulp.src('css/*.scss')
        .pipe(sass())
        .pipe(concat('styles.min.css'))
        .pipe(prefixer())
        .pipe(minify({compatibility:'*'}))
        .pipe(gulp.dest('css/'))
});

gulp.task('watch', function() {
    gulp.watch('css/*.scss', ['compile-sass'])
});