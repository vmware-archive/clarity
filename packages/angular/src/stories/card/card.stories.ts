/*
 * Copyright (c) 2016-2020 VMware, Inc.
 * All Rights ReserveThis software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { moduleMetadata } from '@storybook/angular';
import { withDesign } from 'storybook-addon-designs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { boolean, select } from '@storybook/addon-knobs';
const basicTemplate = require('!!raw-loader!./basic.html');
const imagesTemplate = require('!!raw-loader!./images.html');
const mediaBlockTemplate = require('!!raw-loader!./media-block.html');
const layoutTemplate = require('!!raw-loader!./layout.html');

export default {
  title: 'Card',
  decorators: [
    withDesign,
    moduleMetadata({
      imports: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
  ],
  parameters: {
    design: [
      {
        name: 'Figma Light',
        type: 'figma',
        url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=51%3A671',
      },
      {
        name: 'Figma Dark',
        type: 'figma',
        url: 'https://www.figma.com/file/wRYSrWSffZXcdQuiolwkym/Clarity-UI-Library---dark-2.2.0?node-id=15%3A5833',
      },
    ],
  },
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
