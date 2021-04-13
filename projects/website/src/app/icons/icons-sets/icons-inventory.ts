/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CoreShapes } from '@clr/icons/shapes/core-shapes';
import { CommerceShapes } from '@clr/icons/shapes/commerce-shapes';
import { EssentialShapes } from '@clr/icons/shapes/essential-shapes';
import { MediaShapes } from '@clr/icons/shapes/media-shapes';
import { SocialShapes } from '@clr/icons/shapes/social-shapes';
import { TravelShapes } from '@clr/icons/shapes/travel-shapes';
import { TechnologyShapes } from '@clr/icons/shapes/technology-shapes';
import { ChartShapes } from '@clr/icons/shapes/chart-shapes';
import { TextEditShapes } from '@clr/icons/shapes/text-edit-shapes';

import { ICONS_TAGS } from './icons-tags';

const ALL_ALIASES = {
  house: 'home',
  settings: 'cog',
  success: 'check',
  close: 'times',
  warning: 'exclamation-triangle',
  error: 'exclamation-circle',
  info: 'info-circle',
  menu: 'bars',
  avatar: 'user',
  caret: 'angle',
  directory: 'folder',
  notification: 'bell',
  edit: 'pencil',
  'note-edit': 'note',
  group: 'users',
  collapse: 'angle-double',
  document: 'file',
  add: 'plus',
  cancel: 'ban',
  remove: 'times-circle',
  'eye-show': 'eye',
  'sign-in': 'login',
  'sign-out': 'logout',
  lightning: 'bolt',
  'flow-chart': 'organization',
  alert: 'bubble-exclamation',
  pinned: 'pinboard',
  favorite: 'star',
  email: 'envelope',
  date: 'calendar',
  analytics: 'line-chart',
  server: 'host',
  command: 'terminal',
  'mobile-phone': 'mobile',
  license: 'certificate',
  disconnected: 'no-wifi',
  receiver: 'phone-handset',
  design: 'ruler-pencil',
  plane: 'airplane',
  auto: 'car',
};

function reverseAliases(originalKeyValue: any) {
  const reversed = {};

  for (const key in originalKeyValue) {
    if (originalKeyValue.hasOwnProperty(key)) {
      if (reversed[originalKeyValue[key]]) {
        reversed[originalKeyValue[key]].push(key);
      } else {
        reversed[originalKeyValue[key]] = [key];
      }
    }
  }

  return reversed;
}

function makeSetSearchable(set: any, defaultTags: string[] = [], hideIcons: string[] = []): any[] {
  const reversedAliases = reverseAliases(ALL_ALIASES);

  const shapesNames = Object.keys(set);

  const searchableSet = shapesNames
    .map((name: string) => {
      // only return icons that are not aliases

      if (!ALL_ALIASES[name]) {
        const aliases = reversedAliases[name] || [];
        const tags = ICONS_TAGS[name] || [];

        return {
          name: name,
          template: set[name],
          tags: aliases.concat(tags).concat(defaultTags),
          aliases: aliases,
        };
      }
      return {};
    })
    .filter((searchableIcon: any) => {
      if (searchableIcon) {
        return searchableIcon;
      }
    })
    .filter((visibleIcon: any) => {
      if (hideIcons.indexOf(visibleIcon.name) === -1) {
        return visibleIcon;
      }
    });

  return searchableSet;
}

export const ICONS_INVENTORY = {
  'core-shapes': {
    searchableIcons: makeSetSearchable(CoreShapes, [], ['vm-bug']),
  },
  'commerce-shapes': {
    searchableIcons: makeSetSearchable(CommerceShapes, []),
  },
  'essential-shapes': {
    searchableIcons: makeSetSearchable(EssentialShapes, [], ['angle-double']),
  },
  'media-shapes': {
    searchableIcons: makeSetSearchable(MediaShapes, [], ['wand']),
  },
  'social-shapes': {
    searchableIcons: makeSetSearchable(SocialShapes, [], ['calendar', 'event']),
  },
  'travel-shapes': {
    searchableIcons: makeSetSearchable(TravelShapes, []),
  },
  'chart-shapes': {
    searchableIcons: makeSetSearchable(ChartShapes, []),
  },
  'text-edit-shapes': {
    searchableIcons: makeSetSearchable(TextEditShapes, []),
  },
  'technology-shapes': {
    searchableIcons: makeSetSearchable(TechnologyShapes, [], ['process-on-vm', 'bar-chart', 'line-chart']),
  },
};
