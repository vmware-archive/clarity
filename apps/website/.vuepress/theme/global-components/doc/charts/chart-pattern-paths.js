/**
 * @file
 * SVG paths for chart fill textures.
 * Copied from highcharts source code.
 * @see https://github.com/highcharts/highcharts/blob/cc1adf69558e1aea9b731c27e7c46d0a17911981/js/Extensions/PatternFill.js#L135-L144
 */

/** @type {Highcharts.PatternOptionsObject} */
export const patternSvgPaths = [
  'M 0 0 L 10 10 M 9 -1 L 11 1 M -1 9 L 1 11',
  'M 0 10 L 10 0 M -1 1 L 1 -1 M 9 11 L 11 9',
  'M 3 0 L 3 10 M 8 0 L 8 10',
  'M 0 3 L 10 3 M 0 8 L 10 8',
  'M 0 3 L 5 3 L 5 0 M 5 10 L 5 7 L 10 7',
  'M 3 3 L 8 3 L 8 8 L 3 8 Z',
  'M 5 5 m -4 0 a 4 4 0 1 1 8 0 a 4 4 0 1 1 -8 0',
  'M 10 3 L 5 3 L 5 0 M 5 10 L 5 7 L 0 7',
  'M 2 5 L 5 2 L 8 5 L 5 8 Z',
  'M 0 0 L 5 10 L 10 0',
  'M 0 0 L 5 10 L 10 0', // need to replace with custom one (so that we have 12 - one per color)
  'M 0 0 L 5 10 L 10 0', // also need to replace with the custom one
];
