/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@clr/core/button/register.js';
import '@clr/core/icon/register.js';
import { angleIcon, ClarityIcons, userIcon } from '@clr/core/icon';
import { cssGroup, propertiesGroup, setStyles } from '@clr/core/internal';
import { action } from '@storybook/addon-actions';
import { boolean, color, text } from '@storybook/addon-knobs';
import { html } from 'lit-html';

ClarityIcons.addIcons(angleIcon, userIcon);

export default {
  title: 'Components/Inline Button/Stories',
  component: 'cds-inline-button',
  parameters: {
    options: { showPanel: true },
  },
};

export const API = () => {
  const disabled = boolean('disabled', false, propertiesGroup);
  const textColor = color('--color', undefined, cssGroup);
  const fontSize = text('--font-size', undefined, cssGroup);
  const fontWeight = text('--font-weight', undefined, cssGroup);
  const textDecoration = text('--text-decoration', undefined, cssGroup);

  return html`
    <cds-demo inline-block>
      <style>
        cds-inline-button {
          ${setStyles({
          '--color': textColor,
          '--font-size': fontSize,
          '--font-weight': fontWeight,
          '--text-decoration': textDecoration,
        })}
      </style>
      <cds-inline-button .disabled=${disabled} @click=${action('click')}>
        Click Me
      </cds-inline-button>
    </cds-demo>
  `;
};

export const actions = () => {
  return html`
    <p cds-text="body">
      Birth Rig Veda great turbulent clouds corpus callosum preserve and cherish that pale blue dot prime number. Finite
      but unbounded a still more glorious dawn awaits intelligent beings colonies vastness is bearable only through love
      concept of the number one. Rich in heavy atoms bits of moving fluff intelligent beings hearts of the stars stirred
      by starlight hundreds of thousands? Vanquish the impossible brain is the seed of intelligence star stuff
      harvesting star light the only home we've ever known citizens of distant epochs the only home we've ever known and
      billions upon billions upon billions upon billions upon billions upon billions upon billions.
      <cds-inline-button>Ohai</cds-inline-button>
    </p>
  `;
};

export const disabledInlineButton = () => {
  return html`
    <p cds-text="body">
      A still more glorious dawn awaits intelligent beings colonies vastness is bearable only through love.
      <cds-inline-button disabled>Ohai<cds-icon shape="angle" direction="right"></cds-icon></cds-inline-button>
    </p>
  `;
};

export const various = () => {
  return html`
    <div cds-layout="vertical gap:md">
      <p cds-text="body">
        Hearts of the stars stirred by starlight hundreds of thousands? <cds-inline-button>Ohai</cds-inline-button>
        <cds-inline-button>Kthxbye</cds-inline-button>
      </p>
      <p cds-text="body">
        Birth Rig Veda great turbulent clouds corpus callosum preserve and cherish that pale blue dot prime number.
        Finite but unbounded a still more glorious dawn awaits intelligent beings colonies vastness is bearable only
        through love concept of the number one. Rich in heavy atoms bits of moving fluff intelligent beings hearts of
        the stars stirred by starlight hundreds of thousands? Vanquish the impossible brain is the seed of intelligence
        star stuff harvesting star light the only home we've ever known citizens of distant epochs the only home we've
        ever known and billions upon billions upon billions upon billions upon billions upon billions upon billions.
        <cds-inline-button>Ohai</cds-inline-button> <cds-inline-button>Kthxbye</cds-inline-button>
      </p>
    </div>
  `;
};

export const withIcons = () => {
  return html`
    <div cds-layout="vertical gap:md">
      <p cds-text="body">
        Finite but unbounded a still more glorious dawn awaits.
        <cds-inline-button><cds-icon shape="user"></cds-icon>Ohai</cds-inline-button>
        <cds-inline-button><cds-icon shape="user"></cds-icon>Kthxbye</cds-inline-button>
      </p>
      <p cds-text="body">
        Finite but unbounded a still more glorious dawn awaits.
        <cds-inline-button>Ohai<cds-icon shape="angle" direction="right"></cds-icon></cds-inline-button>
        <cds-inline-button>Kthxbye<cds-icon shape="angle" direction="right"></cds-icon></cds-inline-button>
      </p>
      <p cds-text="body">
        Finite but unbounded a still more glorious dawn awaits.
        <cds-inline-button
          ><cds-icon shape="user"></cds-icon>Ohai<cds-icon shape="angle" direction="right"></cds-icon
        ></cds-inline-button>
        <cds-inline-button
          ><cds-icon shape="user"></cds-icon>Kthxbye<cds-icon shape="angle" direction="right"></cds-icon
        ></cds-inline-button>
      </p>
    </div>
  `;
};

export const inlineButtonLinks = () => {
  return html`
    <div cds-layout="vertical gap:md">
      <p cds-text="body">
        Because you know someone is going to try to do this:
        <cds-inline-button
          ><a href="javascript:void(0)"><cds-icon shape="user"></cds-icon>Ohai</a></cds-inline-button
        >. We need to make sure it still works. And still looks okay
        <cds-inline-button disabled
          ><a href="javascript:void(0)">Disabled<cds-icon direction="down" shape="angle"></cds-icon></a
        ></cds-inline-button>
      </p>
    </div>
  `;
};

export const customStyles = () => {
  return html`
    <style>
      .btn-branding {
        --color: #74178b;
        --font-size: 0.9rem;
        --text-decoration: underline;
      }

      .btn-branding:hover {
        --color: red;
        --text-decoration: underline;
      }

      .btn-branding:active {
        --color: black;
        --text-decoration: underline;
      }
    </style>
    <cds-inline-button class="btn-branding"><cds-icon shape="user"></cds-icon>Helloworld</cds-inline-button>
  `;
};
