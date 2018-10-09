// see https://realpython.com/the-ultimate-flask-front-end/#react-round-one
/* global require */
const gulp = require("gulp");
const del = require("del");

gulp.task("del", function () {
  return del(["./dist/**/*"]);
});

gulp.task("transform", function () {
  // do webpack stuffs here
});

gulp.task(
  "default",
  ["del"]
  // function () {
  //   gulp.watch("./src/**/*", ["transform"]);
  // }
);