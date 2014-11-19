'use strict';

var gulp = require('gulp');

gulp.task('watch', ['styles', 'scripts'] , function () {
  gulp.watch('src/**/*.scss', ['styles']);
  gulp.watch('src/**/*.{js,coffee}', ['scripts']);
  gulp.watch('src/assets/images/**/*', ['images']);
  gulp.watch('bower.json', ['wiredep']);
});
