/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { IconAlias, IconShapeTuple } from '../interfaces/icon.interfaces';

export const dummyIconShape = '<path d="..."/><path d="..."/><path d="..."/>';

export const testIcons: any = {
  badgedIcon: [
    'badged',
    {
      outline: dummyIconShape,
      outlineBadged: dummyIconShape,
    },
  ] as IconShapeTuple,

  badgedIcon2: [
    'badgedToo',
    {
      solid: dummyIconShape,
      solidBadged: dummyIconShape,
    },
  ] as IconShapeTuple,

  nonBadgedIcon: [
    'non-badged',
    {
      outline: dummyIconShape,
      outlineAlerted: dummyIconShape,
    },
  ] as IconShapeTuple,

  alertedIcon: [
    'alerted',
    {
      outline: dummyIconShape,
      outlineAlerted: dummyIconShape,
    },
  ] as IconShapeTuple,

  alertedIcon2: [
    'alertedToo',
    {
      solid: dummyIconShape,
      solidAlerted: dummyIconShape,
    },
  ] as IconShapeTuple,

  nonAlertedIcon: [
    'non-alerted',
    {
      outline: dummyIconShape,
      outlineBadged: dummyIconShape,
    },
  ] as IconShapeTuple,

  solidIcon: [
    'solid',
    {
      outline: dummyIconShape,
      solid: dummyIconShape,
    },
  ] as IconShapeTuple,

  solidIcon2: [
    'solidToo',
    {
      solidAlerted: dummyIconShape,
    },
  ] as IconShapeTuple,

  solidIcon3: [
    'solidThree',
    {
      solidBadged: dummyIconShape,
    },
  ] as IconShapeTuple,

  justOutline: [
    'not-solid',
    {
      outline: dummyIconShape,
    },
  ] as IconShapeTuple,

  allIcon: [
    'all',
    {
      outline: dummyIconShape,
      outlineAlerted: dummyIconShape,
      outlineBadged: dummyIconShape,
      solid: dummyIconShape,
      solidAlerted: dummyIconShape,
      solidBadged: dummyIconShape,
    },
  ] as IconShapeTuple,
};

// function for tests; highly coupled to mock icons
export function getCollectionFromTestIcons(): { icons: IconShapeTuple[]; aliases: IconAlias[] } {
  let counter = 998;
  const labelPrefix = 'colltest';
  const iconCollection = [[labelPrefix + counter++, 'ohai']];
  const aliasCollection = [];
  const iconsToCollect = ['solidIcon', 'justOutline', 'allIcon'];
  // colltest999 to colltest 1002

  for (const testIcon in <any>testIcons) {
    if (testIcons.hasOwnProperty(testIcon) && iconsToCollect.indexOf(testIcon) > -1) {
      const [, shape] = testIcons[testIcon];
      const label = labelPrefix + counter++;
      const aliasObj = {} as any;
      iconCollection.push([label, shape]);
      if (testIcon === 'allIcon') {
        aliasObj[label] = ['allIcon', 'everything', 'the-works'];
        aliasCollection.push(aliasObj);
      }
      if (testIcon === 'justOutline') {
        aliasObj[label] = ['outline', 'just-lines'];
        aliasCollection.push(aliasObj);
      }
    }
  }

  return {
    icons: iconCollection as IconShapeTuple[],
    aliases: aliasCollection,
  };
}
