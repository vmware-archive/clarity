const writeSVGIcons = require('./write-svg-icons');
const shell = require("shelljs");

const SHAPE_SETS = [
    "core-shapes",
    "commerce-shapes",
    "essential-shapes",
    "media-shapes",
    "social-shapes",
    "technology-shapes",
    "travel-shapes"
];

writeSVGIcons(SHAPE_SETS, () => {
    shell.exec("cd dist/clr-icons/shapes; zip -r all-shapes.zip ./**/*");
    SHAPE_SETS.forEach((setName) => {
        shell.exec(`cd dist/clr-icons/shapes; zip -r ${setName}.zip ./${setName}/*; rm -r ./${setName}`);
    });
});
