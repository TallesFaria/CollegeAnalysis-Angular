var gulp = require('gulp')
var jshint = require('gulp-jshint')
var clean = require('gulp-clean')
var concat = require('gulp-concat')
var concat = require('gulp-uglify')
var es = require('event-stream')
var cleanCSS = require('gulp-clean-css')
var htmlmin = require('gulp-htmlmin')
var runSequence = require('run-sequence')
var rename = require('gulp-rename')

gulp.task('clean', function(){
    return gulp.src('dist/')
    .pipe(clean())
})

gulp.task('jshint', function(){
    return gulp.src('js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
})

gulp.task('uglify', ['clean'], function(){
    return es.merge([
        gulp.src(['bower_components/angular/angular.min.js','bower_components/angular-route/angular-route.min.js','bower_components/angular-messages/angular-messages.min.js']),
        gulp.src('lib/**/*.js','js/**/*.js').pipe(uglify())
    ])
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest('dist/js'))
})

gulp.task('htmlmin', function(){
    return gulp.src('view/*.js')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/view'))
})

gulp.task('cssmin', function(){
    return gulp.src(['css/**/*.css', 'bower_components/bootstrap/dist/css/bootstrap.min.css'])
    .pipe(cleanCSS())
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest('dist/css'))
})

gulp.task('copy', function(){
    return gulp.src('index-prod.html')
    .pipe(rename('index.html'))
    .pipe(gulp.dest('dist/'))
})

gulp.task('default', function(){
    return runSequence('clean', ['jshint', 'uglify', 'cssmin', 'htmlmin', 'copy'], cb)
})