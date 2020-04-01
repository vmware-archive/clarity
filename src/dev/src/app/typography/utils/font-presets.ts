/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export type FontPreset = {
  font: string;
  topGap: number;
  ascender: number;
  xHeight: number;
};

type FontMeasurements = {
  topGap: number;
  ascender: number;
  xHeight: number;
  descenderOverage: number;
};

export const fontPresets: [string, FontMeasurements][] = [
  [
    'Metropolis',
    {
      topGap: 0.147,
      ascender: 0.17,
      xHeight: 0.518,
      descenderOverage: 0.013,
    },
  ],
  [
    'Arial',
    {
      topGap: 0.13,
      ascender: 0.198,
      xHeight: 0.518,
      descenderOverage: 0.057,
    },
  ],
  [
    'Helvetica',
    {
      topGap: 0.127,
      ascender: 0.195,
      xHeight: 0.5225,
      descenderOverage: 0.056,
    },
  ],
  [
    'Gotham',
    {
      topGap: 0.095,
      ascender: 0.188,
      xHeight: 0.517,
      descenderOverage: 0,
    },
  ],
  [
    'Proxima Nova',
    {
      topGap: 0.1435,
      ascender: 0.184,
      xHeight: 0.4835,
      descenderOverage: 0.007,
    },
  ],
  [
    'Open Sans',
    {
      topGap: 0.1705,
      ascender: 0.1815,
      xHeight: 0.5355,
      descenderOverage: 0.128,
    },
  ],
  [
    'Roboto',
    {
      topGap: 0.131,
      ascender: 0.182,
      xHeight: 0.5285,
      descenderOverage: 0.0555,
    },
  ],
  [
    'Source Sans Pro',
    {
      topGap: 0.199,
      ascender: 0.17,
      xHeight: 0.4863,
      descenderOverage: 0.0725,
    },
  ],
  [
    'Lato',
    {
      topGap: 0.17,
      ascender: 0.21,
      xHeight: 0.507,
      descenderOverage: 0.069,
    },
  ],
];

export function getPreset(toCheck: string, presets = fontPresets) {
  const preset = presets.find(p => p[0] === toCheck);

  if (typeof preset === 'undefined') {
    return null;
  }

  const presetName = preset[0];
  const presetObj = preset[1];

  return {
    font: presetName,
    topGap: presetObj.topGap,
    ascender: presetObj.ascender,
    xHeight: presetObj.xHeight,
    descenderOverage: presetObj.descenderOverage,
  };
}

export function checkForExistingPresetName(toCheck: string, presets = fontPresets) {
  return !!presets.find(p => p[0] === toCheck);
}
