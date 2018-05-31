/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const cheerio = require('cheerio');

const targetFileType = 'svg';

let getFileName = name => {
  return name + '.' + targetFileType;
};

let createContainerDir = dirPath => {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(dirPath)) {
      reject(new Error(`${dirPath} already exists!`));
    }

    mkdirp(dirPath, err => {
      if (err) reject(err);

      resolve(dirPath);
    });
  });
};

let writeToFile = (fiePath, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(fiePath, content, err => {
      if (err) reject(err);

      resolve(fiePath);
    });
  });
};

/*
 * @desc Parses the inside svg graphic elements in the icon template, break them up,
 * and assign them to the corresponding object property by their variant class names.
 * @param {string} shapeName: The name to be used for the property names and variant class name suffixes.
 * @param {string} shapeTemplate: The icon template to be parsed and consumed.
 * @return {Object} Object containing variants of the same icon in its property.
 *
 * */

let breakUpShapeTemplate = (shapeName, shapeTemplate) => {
  let expandedShape = {};

  $ = cheerio.load(shapeTemplate);

  let childWrapper = $('<div class="svg-child-element"></div>');

  //each svg graphic elements inside will be wrapped with the markup above.
  $('svg')
    .children()
    .wrap(childWrapper);

  //the elements with the same class name suffix goes into the same property
  $('svg')
    .children()
    .each((index, element) => {
      if (
        $(element)
          .children()
          .first()
          .hasClass('clr-i-outline')
      ) {
        if (expandedShape[shapeName + '-line']) {
          expandedShape[shapeName + '-line'] += $(element).html();
        } else {
          expandedShape[shapeName + '-line'] = $(element).html();
        }
      } else if (
        $(element)
          .children()
          .first()
          .hasClass('clr-i-outline--badged')
      ) {
        if (expandedShape[shapeName + '-outline-badged']) {
          expandedShape[shapeName + '-outline-badged'] += $(element).html();
        } else {
          expandedShape[shapeName + '-outline-badged'] = $(element).html();
        }
      } else if (
        $(element)
          .children()
          .first()
          .hasClass('clr-i-outline--alerted')
      ) {
        if (expandedShape[shapeName + '-outline-alerted']) {
          expandedShape[shapeName + '-outline-alerted'] += $(element).html();
        } else {
          expandedShape[shapeName + '-outline-alerted'] = $(element).html();
        }
      } else if (
        $(element)
          .children()
          .first()
          .hasClass('clr-i-solid')
      ) {
        if (expandedShape[shapeName + '-solid']) {
          expandedShape[shapeName + '-solid'] += $(element).html();
        } else {
          expandedShape[shapeName + '-solid'] = $(element).html();
        }
      } else if (
        $(element)
          .children()
          .first()
          .hasClass('clr-i-solid--badged')
      ) {
        if (expandedShape[shapeName + '-solid-badged']) {
          expandedShape[shapeName + '-solid-badged'] += $(element).html();
        } else {
          expandedShape[shapeName + '-solid-badged'] = $(element).html();
        }
      } else if (
        $(element)
          .children()
          .first()
          .hasClass('clr-i-solid--alerted')
      ) {
        if (expandedShape[shapeName + '-solid-alerted']) {
          expandedShape[shapeName + '-solid-alerted'] += $(element).html();
        } else {
          expandedShape[shapeName + '-solid-alerted'] = $(element).html();
        }
      } else {
        //DO NOTHING;
      }
    });

  return expandedShape;
};

/*
 * @desc loops through all icons, parses the inside svg graphic elements, break them up
 * and return one big object that contains all the disintegrated icon templates.
 * @param {Object} shapes: shapes to be parsed
 * @return {Object} Object contains all the disintegrated icon templates.
 * */

let breakUpAllShapeTemplates = shapes => {
  let allExpandedShapes = {};

  for (let shapeName in shapes) {
    if (shapes.hasOwnProperty(shapeName)) {
      Object.assign(allExpandedShapes, breakUpShapeTemplate(shapeName, shapes[shapeName]));
    }
  }

  return allExpandedShapes;
};

/*
 * @desc wraps the svg elements with the proper svg element tag and gives it a title
 * @param {string} shapeTitle: The text to be used inside title tag
 * @param {string} shapeContent: The svg elements to be used for creating a svg icon.
 * @return {string} A valid string representation of svg icon.
 * */

let makeSVG = (shapeTitle, shapeContent) => {
  let openingTag = `<svg version="1.1" width="36" height="36"  viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">`;
  let title = `<title>${shapeTitle}</title>`;
  let transparentBG = `<rect x="0" y="0" width="36" height="36" fill-opacity="0"/>`;
  let closingTag = `</svg>`;

  return `${openingTag}
    ${title}
    ${shapeContent}
    ${transparentBG}
${closingTag}`;
};

let convertToCamelCase = kebabCase => {
  // will convert core-shapes into CoreShapes
  return kebabCase
    .split('-')
    .map(splitPart => splitPart.charAt(0).toUpperCase() + splitPart.slice(1))
    .join('');
};

//use shapes from this directory
const SOURCE_PATH = path.join(__dirname, '../dist/clr-icons/shapes');

let makeSVGset = (setName, callback) => {
  let importSet = require(SOURCE_PATH + '/' + setName + '.js');

  let exportedName = convertToCamelCase(setName);

  let setShapes = importSet[exportedName];

  let setShapesContainerDir = path.join(SOURCE_PATH, setName);

  createContainerDir(setShapesContainerDir)
    .then(containerDirPath => {
      let shapes = breakUpAllShapeTemplates(setShapes);
      let shapeNames = Object.keys(shapes);
      return Promise.all(
        shapeNames.map(shapeName => {
          //the path that a new file will be written to
          let filePath = path.join(containerDirPath, getFileName(shapeName));
          return writeToFile(filePath, makeSVG(shapeName, shapes[shapeName]));
        })
      );
    })
    .then(() => {
      console.log(`Completed writing ${setName} svg files`);

      callback();
    })
    .catch(error => {
      callback(error);
    });
};

let writeSVGicons = (sets, callback) => {
  let numOfTasksCompleted = 0;

  sets.forEach(setName => {
    makeSVGset(setName, () => {
      numOfTasksCompleted++;

      if (numOfTasksCompleted === sets.length) {
        callback();
      }
    });
  });
};

module.exports = writeSVGicons;
