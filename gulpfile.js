const gulp = require("gulp");
const runSequence = require("run-sequence");
const clean = require("gulp-clean");
const concat = require("gulp-concat");
const less = require("gulp-less");
// const gutil = require("gulp-util");

// clean the build folder - delete all the files so they can be rebuilt
gulp.task("clean", function () {
  console.log("gulp clean task");
  return gulp
    .src([
      // return acts as sort of a promise, without the return statement, other tasks wont know until the clean task is finished.
      "build/",
    ])
    .pipe(clean());
});

// take the styles in less/styles.less file and convert them to .css and push them to the build/css folder
gulp.task("less", function () {
  console.log("gulp less task");
  return gulp.src("src/styles.less").pipe(less()).pipe(gulp.dest("build/css"));
});

gulp.task(
  "default",
  gulp.series("clean", "less", function seriesRun(done) {
    console.log("series run for clean and less are complete");
    done();
  })
);
