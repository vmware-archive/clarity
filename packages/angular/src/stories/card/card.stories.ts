/*
 * Copyright (c) 2016-2020 VMware, Inc.
 * All Rights ReserveThis software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { boolean } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { ClarityModule } from '@clr/angular';
const basicTemplate = require('!!raw-loader!./basic.html'); // eslint-disable-line
const imagesTemplate = require('!!raw-loader!./images.html'); // eslint-disable-line
const mediaBlockTemplate = require('!!raw-loader!./media-block.html'); // eslint-disable-line
const layoutTemplate = require('!!raw-loader!./layout.html'); // eslint-disable-line

import '@cds/core/icon/register.js';
import { ClarityIcons, windowCloseIcon } from '@cds/core/icon';

ClarityIcons.addIcons(windowCloseIcon);

export default {
  title: 'Card',
  decorators: [
    moduleMetadata({
      imports: [ClarityModule],
    }),
  ],
};

export const Basic = () => {
  const clickableCard = boolean('Clickable', false);
  const ddOpen = boolean('Open dropdown', false);
  const showBlockAlert = boolean('Show block alert', false);
  return {
    title: 'Basic',
    template: basicTemplate.default,
    props: {
      clickableCard,
      ddOpen,
      showBlockAlert,
    },
  };
};

export const Images = () => {
  return {
    title: 'Images',
    template: imagesTemplate.default,
  };
};

export const MediaBlock = () => {
  return {
    title: 'Media Block',
    template: mediaBlockTemplate.default,
  };
};

export const Layout = () => {
  return {
    title: 'layout',
    template: layoutTemplate.default,
  };
};
