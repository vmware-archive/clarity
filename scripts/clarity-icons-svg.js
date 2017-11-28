/*jshint esversion: 6 */

const writeSVGIcons = require('./write-svg-icons');
const shell = require("shelljs");
const bestzip = require('bestzip');

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
    shell.pushd("./dist/clarity-icons/shapes");
    shell.exec(`bestzip all-shapes.zip ${SHAPE_SETS.join(' ')}`);
    SHAPE_SETS.forEach((setName) => {
        shell.exec(`bestzip ${setName}.zip ${setName}/*`);
        shell.rm('-rf', `${setName}`);
    });
});
