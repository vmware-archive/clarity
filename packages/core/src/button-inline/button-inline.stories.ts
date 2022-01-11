/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import '@cds/core/button-inline/register.js';
import { spreadProps, getElementStorybookArgs } from '@cds/core/internal';

export default {
  title: 'Stories/Button Inline',
  component: 'cds-button-inline',
  parameters: {
    options: { showPanel: true },
  },
};

export function API(args: any) {
  return html`
    <cds-demo inline-block>
      <cds-button-inline ...="${spreadProps(getElementStorybookArgs(args))}" @click=${() => console.log('click')}>
        ${args.default}
      </cds-button-inline>
    </cds-demo>
  `;
}

/** @website */
export function actions() {
  return html`
    <p cds-text="body">
      Birth Rig Veda great turbulent clouds corpus callosum preserve and cherish that pale blue dot prime number. Finite
      but unbounded a still more glorious dawn awaits intelligent beings colonies vastness is bearable only through love
      concept of the number one. Rich in heavy atoms bits of moving fluff intelligent beings hearts of the stars stirred
      by starlight hundreds of thousands? Vanquish the impossible brain is the seed of intelligence star stuff
      harvesting star light the only home we've ever known citizens of distant epochs the only home we've ever known and
      billions upon billions upon billions upon billions upon billions upon billions upon billions.
      <cds-button-inline>Ohai</cds-button-inline>
    </p>
  `;
}

/** @website */
export function disabledInlineButton() {
  return html`
    <p cds-text="body">
      A still more glorious dawn awaits intelligent beings colonies vastness is bearable only through love.
      <cds-button-inline disabled>Ohai<cds-icon shape="angle" direction="right"></cds-icon></cds-button-inline>
    </p>
  `;
}

/** @website */
export function various() {
  return html`
    <div cds-layout="vertical gap:md">
      <p cds-text="body">
        Hearts of the stars stirred by starlight hundreds of thousands? <cds-button-inline>Ohai</cds-button-inline>
        <cds-button-inline>Kthxbye</cds-button-inline>
      </p>
      <p cds-text="body">
        Birth Rig Veda great turbulent clouds corpus callosum preserve and cherish that pale blue dot prime number.
        Finite but unbounded a still more glorious dawn awaits intelligent beings colonies vastness is bearable only
        through love concept of the number one. Rich in heavy atoms bits of moving fluff intelligent beings hearts of
        the stars stirred by starlight hundreds of thousands? Vanquish the impossible brain is the seed of intelligence
        star stuff harvesting star light the only home we've ever known citizens of distant epochs the only home we've
        ever known and billions upon billions upon billions upon billions upon billions upon billions upon billions.
        <cds-button-inline>Ohai</cds-button-inline> <cds-button-inline>Kthxbye</cds-button-inline>
      </p>
    </div>
  `;
}

/** @website */
export function withIcons() {
  return html`
    <div cds-layout="vertical gap:md">
      <p cds-text="body">
        Finite but unbounded a still more glorious dawn awaits.
        <cds-button-inline><cds-icon shape="user"></cds-icon>Ohai</cds-button-inline>
        <cds-button-inline><cds-icon shape="user"></cds-icon>Kthxbye</cds-button-inline>
      </p>
      <p cds-text="body">
        Finite but unbounded a still more glorious dawn awaits.
        <cds-button-inline>Ohai<cds-icon shape="angle" direction="right"></cds-icon></cds-button-inline>
        <cds-button-inline>Kthxbye<cds-icon shape="angle" direction="right"></cds-icon></cds-button-inline>
      </p>
      <p cds-text="body">
        Finite but unbounded a still more glorious dawn awaits.
        <cds-button-inline
          ><cds-icon shape="user"></cds-icon>Ohai<cds-icon shape="angle" direction="right"></cds-icon
        ></cds-button-inline>
        <cds-button-inline
          ><cds-icon shape="user"></cds-icon>Kthxbye<cds-icon shape="angle" direction="right"></cds-icon
        ></cds-button-inline>
      </p>
    </div>
  `;
}

/** @website */
export function inlineButtonLinks() {
  return html`
    <div cds-layout="vertical gap:lg">
      <p cds-text="body">
        To create links you can use the <a href="javascript:void(0)" cds-text="link">cds-text="link"</a> attribute.
      </p>

      <p cds-text="body">
        Optionally you can wrap the
        <a href="javascript:void(0)"
          ><cds-button-inline><cds-icon shape="user"></cds-icon>inline button</cds-button-inline></a
        >
        with an
        <a href="javascript:void(0)"
          ><cds-button-inline disabled>anchor<cds-icon direction="down" shape="angle"></cds-icon></cds-button-inline
        ></a>
        for improved icon alignment.
      </p>
    </div>
  `;
}

export function customStyles() {
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
    <cds-button-inline class="btn-branding"><cds-icon shape="user"></cds-icon>Helloworld</cds-button-inline>
  `;
}
