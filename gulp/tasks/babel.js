// Dependencies
// Gulp
var gulp = require('gulp');
// Babel
var babel = require('gulp-babel');
var path = require('path')

var paths = {
    es6: ['es6/**/*.js'],
    es5: 'es5',
    // Must be absolute or relative to source map
    sourceRoot: path.join(__dirname, 'es6'),
};
gulp.task('babel', function () { // (A)
    return gulp.src(paths.es6)
        .pipe(sourcemaps.init()) // (B)
        .pipe(babel())
        .pipe(sourcemaps.write('.', // (C)
                  { sourceRoot: paths.sourceRoot }))
        .pipe(gulp.dest(paths.es5));
});
gulp.task('watch-babel', function() { // (D)
    gulp.watch(paths.es6, ['babel']);
});
