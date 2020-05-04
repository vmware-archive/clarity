/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export const dummyIconShape = '<path d="..."/><path d="..."/><path d="..."/>';

export const testIcons: any = {
  badgedIcon: [
    'badged',
    {
      outline: dummyIconShape,
      outlineBadged: dummyIconShape,
    },
  ],

  badgedIcon2: [
    'badgedToo',
    {
      solid: dummyIconShape,
      solidBadged: dummyIconShape,
    },
  ],

  nonBadgedIcon: [
    'non-badged',
    {
      outline: dummyIconShape,
      outlineAlerted: dummyIconShape,
    },
  ],

  alertedIcon: [
    'alerted',
    {
      outline: dummyIconShape,
      outlineAlerted: dummyIconShape,
    },
  ],

  alertedIcon2: [
    'alertedToo',
    {
      solid: dummyIconShape,
      solidAlerted: dummyIconShape,
    },
  ],

  nonAlertedIcon: [
    'non-alerted',
    {
      outline: dummyIconShape,
      outlineBadged: dummyIconShape,
    },
  ],

  solidIcon: [
    'solid',
    {
      outline: dummyIconShape,
      solid: dummyIconShape,
    },
  ],

  solidIcon2: [
    'solidToo',
    {
      solidAlerted: dummyIconShape,
    },
  ],

  solidIcon3: [
    'solidThree',
    {
      solidBadged: dummyIconShape,
    },
  ],

  justOutline: [
    'not-solid',
    {
      outline: dummyIconShape,
    },
  ],

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
  ],
};
