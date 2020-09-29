/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { arrayToObject } from './array.js';
import { setPropStyles } from './string.js';

export function getElementStorybookArgTypes(tagName: string, customElementsMetadata: any) {
  const meta = arrayToObject(customElementsMetadata.tags, 'name')[tagName];
  return { ...getPropOptionsStorybookArgs(meta), ...getCustomPropsStorybookArgs(meta), ...getSlotStorybookArgs(meta) };
}

export function getElementStorybookArgs(args: any) {
  return { ...args, style: setPropStyles(args) };
}

function getCustomPropsStorybookArgs(customElementMetadata: any) {
  return customElementMetadata.cssProperties?.reduce((obj: any, prop: { name: string }) => {
    const type = prop?.name?.includes('color') || prop?.name?.endsWith('background') ? 'color' : 'text';
    return { ...obj, [prop.name]: { control: { type } } };
  }, {});
}

function getPropOptionsStorybookArgs(customElementMetadata: any) {
  return customElementMetadata.properties
    ?.filter((prop: any) => prop?.type?.includes(' | '))
    .reduce((obj: any, prop: { name: string; type: string }) => {
      const options = prop.type.split('|').map(p => p.replace(/"/g, '').replace(/\s/g, ''));
      return {
        ...obj,
        [prop.name]: {
          control: { type: 'select', options },
          defaultValue: options[0],
        },
      };
    }, {});
}

function getSlotStorybookArgs(customElementMetadata: any) {
  return customElementMetadata.slots?.reduce((obj: any, prop: { name: string }) => {
    return { ...obj, [prop.name]: { control: { type: 'text' }, defaultValue: `${prop.name}` } };
  }, {});
}
