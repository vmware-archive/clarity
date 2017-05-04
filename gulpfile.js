const gulp = require("gulp");
const ghpages = require("gh-pages");
const path = require("path");
const shell = require("gulp-shell");
const watch = require("gulp-watch");

gulp.task("deploy", function () {
    ghpages.publish(path.join(__dirname, "dist"), function (err) {
        if (err) {
            console.log(err);
        }
    });
});

gulp.task('watch', function () {
    // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event
    return watch('src/releases', function () {
        gulp.src('src/releases')
            .pipe(shell([
                "node generate-template.js"
            ]));
    });
});
