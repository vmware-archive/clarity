var gulp = require("gulp");
var ghpages = require('gh-pages');
var path = require('path');

gulp.task('deploy', function() {
    ghpages.publish(path.join(__dirname, 'dist'), function(err) {
        if (err) {
            console.log(err);
        }
    });
});
