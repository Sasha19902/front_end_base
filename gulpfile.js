const gulp = require('gulp');
const concat = require('gulp-concat');

const path = {
    idx: './src/templates/*.html',
    css: './src/**/*.css',
    build: './build'
};

gulp.task('default', ['concat_css', 'formate_html']);

gulp.task('concat_css', function () {
    return gulp.src(path.css)
        .pipe(concat('main.css'))
        .pipe(gulp.dest(path.build));
});

gulp.task('formate_html', function () {
    return gulp.src(path.idx)
        .pipe(gulp.dest(path.build));
});