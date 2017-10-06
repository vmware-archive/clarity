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
    SHAPE_SETS.forEach((setName) => {
        shell.exec(`zip -r dist/clarity-icons/shapes/svg-source/${setName}.zip dist/clarity-icons/shapes/svg-source/${setName}`);
    });
});
