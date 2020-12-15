/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import '@cds/core/divider/register.js';

export default {
  title: 'Stories/Layout',
  parameters: {
    options: { showPanel: true },
    a11y: { disable: true },
  },
};

/**
 * Horizontal Layout
 */
/** @website */
export function horizontalLayout() {
  return html`
    <cds-demo layout>
      <div cds-layout="horizontal gap:md">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function horizontalLayoutWrap() {
  return html`
    <!-- demonstrates gap is only applied between inline elements even when wrapped without pushing parent container -->
    <cds-demo layout style="max-width: 236px">
      <div cds-layout="horizontal gap:md">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
        <cds-placeholder>4</cds-placeholder>
        <cds-placeholder>5</cds-placeholder>
        <cds-placeholder>6</cds-placeholder>
        <cds-placeholder>7</cds-placeholder>
        <cds-placeholder>8</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function horizontalLayoutNoWrap() {
  return html`
    <cds-demo layout style="max-width: 273px">
      <div cds-layout="horizontal gap:md wrap:none">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
        <cds-placeholder>4</cds-placeholder>
        <cds-placeholder>5</cds-placeholder>
        <cds-placeholder>6</cds-placeholder>
        <cds-placeholder>7</cds-placeholder>
        <cds-placeholder>8</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function horizontalLayoutAlignTop() {
  return html`
    <cds-demo layout tall>
      <div cds-layout="horizontal gap:md align:top">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function horizontalLayoutAlignBottom() {
  return html`
    <cds-demo layout tall>
      <div cds-layout="horizontal gap:md align:bottom">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function horizontalLayoutAlignLeft() {
  return html`
    <cds-demo layout wide>
      <div cds-layout="horizontal gap:md align:left">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function horizontalLayoutAlignRight() {
  return html`
    <cds-demo layout wide>
      <div cds-layout="horizontal gap:md align:right">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function horizontalLayoutAlignVerticalCenter() {
  return html`
    <cds-demo layout tall>
      <div cds-layout="horizontal gap:md align:vertical-center">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function horizontalLayoutAlignHorizontalCenter() {
  return html`
    <cds-demo layout wide>
      <div cds-layout="horizontal gap:md align:horizontal-center">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function horizontalLayoutAlignCenter() {
  return html`
    <cds-demo layout wide tall>
      <div cds-layout="horizontal gap:md align:center">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function horizontalLayoutAlignVerticalStretch() {
  return html`
    <cds-demo layout wide tall>
      <div cds-layout="horizontal gap:md align:vertical-stretch">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function horizontalLayoutAlignFill() {
  return html`
    <cds-demo layout wide tall>
      <div cds-layout="horizontal gap:sm align:fill">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>Lorem ipsum dolor sit amet, consectetur adipiscing elit</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function horizontalLayoutAlignHorizontalStretch() {
  return html`
    <cds-demo layout wide tall>
      <div cds-layout="horizontal gap:md align:horizontal-stretch">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>Lorem ipsum dolor sit amet, consectetur adipiscing elit</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function horizontalLayoutAlignStretch() {
  return html`
    <cds-demo layout wide tall>
      <div cds-layout="horizontal gap:md align:stretch">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function horizontalLayoutAlignResponsive() {
  return html`
    <cds-demo layout wide>
      <div cds-layout="horizontal gap:md align@md:right align@lg:center">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function horizontalLayoutItemStretch() {
  return html`
    <cds-demo layout wide>
      <div cds-layout="horizontal gap:md">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder cds-layout="align:stretch">2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function horizontalLayoutItemShrink() {
  return html`
    <cds-demo layout wide>
      <div cds-layout="horizontal gap:md align:horizontal-stretch">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder cds-layout="align:shrink">2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function horizontalLayoutItemAlignCenter() {
  return html`
    <cds-demo layout wide tall>
      <div cds-layout="horizontal gap:md align:vertical-stretch">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder cds-layout="align:center">2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function horizontalLayoutItemAlignVerticalCenter() {
  return html`
    <cds-demo layout tall>
      <div cds-layout="horizontal gap:md align:vertical-stretch">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder cds-layout="align:vertical-center">2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function horizontalLayoutItemAlignHorizontalCenter() {
  return html`
    <cds-demo layout wide>
      <div cds-layout="horizontal gap:md">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder cds-layout="align:horizontal-center">2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function horizontalLayoutItemAlignTop() {
  return html`
    <cds-demo layout tall>
      <div cds-layout="horizontal gap:md align:vertical-stretch">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder cds-layout="align:top">2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function horizontalLayoutItemAlignBottom() {
  return html`
    <cds-demo layout tall>
      <div cds-layout="horizontal gap:md align:vertical-stretch">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder cds-layout="align:bottom">2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function horizontalLayoutItemAlignRight() {
  return html`
    <cds-demo layout wide>
      <div cds-layout="horizontal gap:md">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder cds-layout="align:right">2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function horizontalLayoutItemAlignLeft() {
  return html`
    <cds-demo layout wide>
      <div cds-layout="horizontal gap:md align:right">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder cds-layout="align:left">2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function horizontalLayoutItemAlignResponsive() {
  return html`
    <cds-demo layout wide>
      <div cds-layout="horizontal gap:md">
        <cds-placeholder cds-layout="align@md:right align@lg:center">1</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function horizontalGap() {
  return html`
    <div cds-layout="vertical gap:lg">
      <cds-demo layout>
        <div cds-layout="horizontal gap:md">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
          <cds-placeholder>3</cds-placeholder>
        </div>
      </cds-demo>

      <cds-demo layout>
        <div cds-layout="horizontal gap:xxs">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
          <cds-placeholder>3</cds-placeholder>
        </div>
      </cds-demo>

      <cds-demo layout>
        <div cds-layout="horizontal gap:xxxs">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
          <cds-placeholder>3</cds-placeholder>
        </div>
      </cds-demo>

      <cds-demo layout>
        <div cds-layout="horizontal gap:xxs">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
          <cds-placeholder>3</cds-placeholder>
        </div>
      </cds-demo>

      <cds-demo layout>
        <div cds-layout="horizontal gap:xs">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
          <cds-placeholder>3</cds-placeholder>
        </div>
      </cds-demo>

      <cds-demo layout>
        <div cds-layout="horizontal gap:sm">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
          <cds-placeholder>3</cds-placeholder>
        </div>
      </cds-demo>

      <cds-demo layout>
        <div cds-layout="horizontal gap:md">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
          <cds-placeholder>3</cds-placeholder>
        </div>
      </cds-demo>

      <cds-demo layout>
        <div cds-layout="horizontal gap:lg">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
          <cds-placeholder>3</cds-placeholder>
        </div>
      </cds-demo>

      <cds-demo layout>
        <div cds-layout="horizontal gap:xl">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
          <cds-placeholder>3</cds-placeholder>
        </div>
      </cds-demo>

      <cds-demo layout>
        <div cds-layout="horizontal gap:xxl">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
          <cds-placeholder>3</cds-placeholder>
        </div>
      </cds-demo>
    </div>
  `;
}

/** @website */
export function horizontalGapResponsive() {
  return html`
    <cds-demo layout>
      <div cds-layout="horizontal gap@sm:lg">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/**
 * Vertical Layout
 */

/** @website */
export function verticalLayout() {
  return html`
    <cds-demo layout>
      <div cds-layout="vertical gap:md">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function verticalLayoutWrap() {
  return html`
    <!-- demonstrates gap is only applied between stacked elements without pushing parent container -->
    <cds-demo layout style="width: 50px">
      <div cds-layout="vertical gap:md">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
        <cds-placeholder>4</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function verticalLayoutAlignTop() {
  return html`
    <cds-demo layout tall>
      <div cds-layout="vertical gap:md align:top">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function verticalLayoutAlignBottom() {
  return html`
    <cds-demo layout tall>
      <div cds-layout="vertical gap:md align:bottom">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function verticalLayoutAlignLeft() {
  return html`
    <cds-demo layout wide>
      <div cds-layout="vertical gap:md align:left">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function verticalLayoutAlignRight() {
  return html`
    <cds-demo layout wide>
      <div cds-layout="vertical gap:md align:right">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function verticalLayoutAlignVerticalCenter() {
  return html`
    <cds-demo layout tall>
      <div cds-layout="vertical gap:md align:vertical-center">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function verticalLayoutAlignHorizontalCenter() {
  return html`
    <cds-demo layout wide>
      <div cds-layout="vertical gap:md align:horizontal-center">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function verticalLayoutAlignCenter() {
  return html`
    <cds-demo layout wide tall>
      <div cds-layout="vertical gap:md align:center">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function verticalLayoutAlignFill() {
  return html`
    <cds-demo layout wide tall>
      <div cds-layout="vertical gap:sm align:fill">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder style="height: 150px">3</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function verticalLayoutAlignVerticalStretch() {
  return html`
    <cds-demo layout wide tall>
      <div cds-layout="vertical gap:md align:vertical-stretch">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder style="height: 150px">3</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function verticalLayoutAlignHorizontalStretch() {
  return html`
    <cds-demo layout wide>
      <div cds-layout="vertical gap:md align:horizontal-stretch">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function verticalLayoutAlignStretch() {
  return html`
    <cds-demo layout wide tall>
      <div cds-layout="vertical gap:md align:stretch">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function verticalLayoutAlignResponsive() {
  return html`
    <cds-demo layout tall>
      <div cds-layout="vertical gap:md align@md:bottom align@lg:center">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function verticalLayoutItemStretch() {
  return html`
    <cds-demo layout tall>
      <div cds-layout="vertical gap:md">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder cds-layout="align:stretch">2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function verticalLayoutItemShrink() {
  return html`
    <cds-demo layout tall>
      <div cds-layout="vertical gap:md align:vertical-stretch">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder cds-layout="align:shrink">2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function verticalLayoutItemAlignCenter() {
  return html`
    <cds-demo layout tall wide>
      <div cds-layout="vertical">
        <cds-placeholder cds-layout="align:top">1</cds-placeholder>
        <cds-placeholder cds-layout="align:center">2</cds-placeholder>
        <cds-placeholder cds-layout="align:bottom">3</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function verticalLayoutItemAlignVerticalCenter() {
  return html`
    <cds-demo layout tall>
      <div cds-layout="vertical">
        <cds-placeholder cds-layout="align:top">1</cds-placeholder>
        <cds-placeholder cds-layout="align:vertical-center">2</cds-placeholder>
        <cds-placeholder cds-layout="align:bottom">3</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function verticalLayoutItemAlignHorizontalCenter() {
  return html`
    <cds-demo layout wide>
      <div cds-layout="vertical">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder cds-layout="align:horizontal-center">2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function verticalLayoutItemAlignTop() {
  return html`
    <cds-demo layout tall>
      <div cds-layout="vertical gap:md align:bottom">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder cds-layout="align:top">2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function verticalLayoutItemAlignBottom() {
  return html`
    <cds-demo layout tall>
      <div cds-layout="vertical gap:md">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder cds-layout="align:bottom">2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function verticalLayoutItemAlignRight() {
  return html`
    <cds-demo layout wide>
      <div cds-layout="vertical gap:md">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder cds-layout="align:right">2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function verticalLayoutItemAlignLeft() {
  return html`
    <cds-demo layout wide>
      <div cds-layout="vertical gap:md align:right">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder cds-layout="align:left">2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function verticalLayoutItemAlignResponsive() {
  return html`
    <cds-demo layout tall>
      <div cds-layout="vertical gap:md">
        <cds-placeholder cds-layout="align@md:bottom align@lg:center">1</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function verticalGap() {
  return html`
    <div cds-layout="horizontal gap:lg">
      <cds-demo layout>
        <div cds-layout="vertical gap:md">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
          <cds-placeholder>3</cds-placeholder>
        </div>
      </cds-demo>

      <cds-demo layout>
        <div cds-layout="vertical gap:xxs">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
          <cds-placeholder>3</cds-placeholder>
        </div>
      </cds-demo>

      <cds-demo layout>
        <div cds-layout="vertical gap:xxxs">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
          <cds-placeholder>3</cds-placeholder>
        </div>
      </cds-demo>

      <cds-demo layout>
        <div cds-layout="vertical gap:xxs">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
          <cds-placeholder>3</cds-placeholder>
        </div>
      </cds-demo>

      <cds-demo layout>
        <div cds-layout="vertical gap:xs">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
          <cds-placeholder>3</cds-placeholder>
        </div>
      </cds-demo>

      <cds-demo layout>
        <div cds-layout="vertical gap:sm">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
          <cds-placeholder>3</cds-placeholder>
        </div>
      </cds-demo>

      <cds-demo layout>
        <div cds-layout="vertical gap:md">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
          <cds-placeholder>3</cds-placeholder>
        </div>
      </cds-demo>

      <cds-demo layout>
        <div cds-layout="vertical gap:lg">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
          <cds-placeholder>3</cds-placeholder>
        </div>
      </cds-demo>

      <cds-demo layout>
        <div cds-layout="vertical gap:xl">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
          <cds-placeholder>3</cds-placeholder>
        </div>
      </cds-demo>

      <cds-demo layout>
        <div cds-layout="vertical gap:xxl">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
          <cds-placeholder>3</cds-placeholder>
        </div>
      </cds-demo>
    </div>
  `;
}

/** @website */
export function verticalGapResponsive() {
  return html`
    <cds-demo layout>
      <div cds-layout="vertical gap@sm:lg">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function nestedLayouts() {
  return html`
    <div cds-layout="vertical gap:md">
      <p cds-text="content">
        vertical<br />
          - horizontal<br />
          - horizontal
      </p>

      <cds-demo layout>
        <div cds-layout="vertical gap:lg">
          <div cds-layout="horizontal gap:sm">
            <cds-placeholder>1</cds-placeholder>
            <cds-placeholder>2</cds-placeholder>
            <cds-placeholder>3</cds-placeholder>
          </div>

          <div cds-layout="horizontal gap:sm">
            <cds-placeholder>1</cds-placeholder>
            <cds-placeholder>2</cds-placeholder>
            <cds-placeholder>3</cds-placeholder>
          </div>

          <div cds-layout="horizontal gap:sm">
            <cds-placeholder>1</cds-placeholder>
            <cds-placeholder>2</cds-placeholder>
            <cds-placeholder>3</cds-placeholder>
          </div>
        </div>
      </cds-demo>

      <p cds-text="content">
        horizontal<br />
          - vertical<br />
          - vertical<br />
          - vertical
      </p>

      <cds-demo layout>
        <div cds-layout="horizontal gap:lg">
          <div cds-layout="vertical gap:sm">
            <cds-placeholder>1</cds-placeholder>
            <cds-placeholder>2</cds-placeholder>
            <cds-placeholder>3</cds-placeholder>
          </div>

          <div cds-layout="vertical gap:sm">
            <cds-placeholder>1</cds-placeholder>
            <cds-placeholder>2</cds-placeholder>
            <cds-placeholder>3</cds-placeholder>
          </div>
        </div>
      </cds-demo>

      <p cds-text="content">
        horizontal<br />
          - horizontal (wrapper)<br />
          - horizontal (wrapper)<br />
          - horizontal (wrapper)
      </p>

      <cds-demo layout>
        <div cds-layout="horizontal gap:lg">
          <div cds-layout="horizontal gap:sm">
            <cds-placeholder>1</cds-placeholder>
            <cds-placeholder>2</cds-placeholder>
            <cds-placeholder>3</cds-placeholder>
          </div>

          <div cds-layout="horizontal gap:sm">
            <cds-placeholder>1</cds-placeholder>
            <cds-placeholder>2</cds-placeholder>
            <cds-placeholder>3</cds-placeholder>
          </div>
        </div>
      </cds-demo>

      <p cds-text="content">
        vertical<br />
          - vertical<br />
          - vertical
      </p>

      <cds-demo layout>
        <div cds-layout="vertical gap:lg">
          <div cds-layout="vertical gap:sm">
            <cds-placeholder>1</cds-placeholder>
            <cds-placeholder>2</cds-placeholder>
            <cds-placeholder>3</cds-placeholder>
          </div>

          <div cds-layout="vertical gap:sm">
            <cds-placeholder>1</cds-placeholder>
            <cds-placeholder>2</cds-placeholder>
            <cds-placeholder>3</cds-placeholder>
          </div>
        </div>
      </cds-demo>

<pre cds-text="content">
horizontal
  - horizontal
    - vertical
    - vertical
    - vertical
  - horizontal
    - vertical
    - vertical
    - vertical
  - horizontal
    - vertical
    - vertical
    - vertical
</pre>

      <div cds-layout="horizontal gap:lg">
          <div cds-layout="horizontal gap:sm">
            <div cds-layout="vertical gap:sm">
              <cds-placeholder>1</cds-placeholder>
              <cds-placeholder>2</cds-placeholder>
              <cds-placeholder>3</cds-placeholder>
            </div>
            <div cds-layout="vertical gap:sm">
              <cds-placeholder>1</cds-placeholder>
              <cds-placeholder>2</cds-placeholder>
              <cds-placeholder>3</cds-placeholder>
            </div>
            <div cds-layout="vertical gap:sm">
              <cds-placeholder>1</cds-placeholder>
              <cds-placeholder>2</cds-placeholder>
              <cds-placeholder>3</cds-placeholder>
            </div>
          </div>
          <div cds-layout="horizontal gap:md">
            <div cds-layout="vertical gap:md">
              <cds-placeholder>1</cds-placeholder>
              <cds-placeholder>2</cds-placeholder>
              <cds-placeholder>3</cds-placeholder>
            </div>
            <div cds-layout="vertical gap:md">
              <cds-placeholder>1</cds-placeholder>
              <cds-placeholder>2</cds-placeholder>
              <cds-placeholder>3</cds-placeholder>
            </div>
            <div cds-layout="vertical gap:md">
              <cds-placeholder>1</cds-placeholder>
              <cds-placeholder>2</cds-placeholder>
              <cds-placeholder>3</cds-placeholder>
            </div>
          </div>
          <div cds-layout="horizontal gap:lg">
            <div cds-layout="vertical gap:lg">
              <cds-placeholder>1</cds-placeholder>
              <cds-placeholder>2</cds-placeholder>
              <cds-placeholder>3</cds-placeholder>
            </div>
            <div cds-layout="vertical gap:lg">
              <cds-placeholder>1</cds-placeholder>
              <cds-placeholder>2</cds-placeholder>
              <cds-placeholder>3</cds-placeholder>
            </div>
            <div cds-layout="vertical gap:lg">
              <cds-placeholder>1</cds-placeholder>
              <cds-placeholder>2</cds-placeholder>
              <cds-placeholder>3</cds-placeholder>
            </div>
          </div>
        </div>
      </cds-demo>
    </div>
  `;
}
/**
 * Grid Layout
 */

/** @website */ export function gridLayout() {
  return html`
    <cds-demo layout tall wide>
      <div cds-layout="grid gap:md">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
        <cds-placeholder>4</cds-placeholder>
        <cds-placeholder>5</cds-placeholder>
        <cds-placeholder>6</cds-placeholder>
        <cds-placeholder>7</cds-placeholder>
        <cds-placeholder>8</cds-placeholder>
        <cds-placeholder>9</cds-placeholder>
        <cds-placeholder>10</cds-placeholder>
        <cds-placeholder>11</cds-placeholder>
        <cds-placeholder>12</cds-placeholder>

        <cds-placeholder cds-layout="col:2">2</cds-placeholder>
        <cds-placeholder cds-layout="col:2">2</cds-placeholder>
        <cds-placeholder cds-layout="col:2">2</cds-placeholder>
        <cds-placeholder cds-layout="col:2">2</cds-placeholder>
        <cds-placeholder cds-layout="col:2">2</cds-placeholder>
        <cds-placeholder cds-layout="col:2">2</cds-placeholder>

        <cds-placeholder cds-layout="col:3">3</cds-placeholder>
        <cds-placeholder cds-layout="col:3">3</cds-placeholder>
        <cds-placeholder cds-layout="col:3">3</cds-placeholder>
        <cds-placeholder cds-layout="col:3">3</cds-placeholder>

        <cds-placeholder cds-layout="col:4">4</cds-placeholder>
        <cds-placeholder cds-layout="col:4">4</cds-placeholder>
        <cds-placeholder cds-layout="col:4">4</cds-placeholder>

        <cds-placeholder cds-layout="col:6">6</cds-placeholder>
        <cds-placeholder cds-layout="col:6">6</cds-placeholder>

        <cds-placeholder cds-layout="col:12">12</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function gridLayoutColumns() {
  return html`
    <cds-demo layout wide>
      <div cds-layout="grid cols:6 gap:md">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function gridLayoutColumnsExplicit() {
  return html`
    <cds-demo layout wide>
      <div cds-layout="grid gap:md">
        <cds-placeholder cds-layout="col:4">1</cds-placeholder>
        <cds-placeholder cds-layout="col:8">2</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function gridLayoutColumnsAuto() {
  return html`
    <cds-demo layout wide>
      <div cds-layout="grid cols:auto gap:md">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function gridLayoutColumnsResponsive() {
  return html`
    <cds-demo layout wide>
      <div cds-layout="grid cols@sm:6 cols@md:3 gap:md">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
        <cds-placeholder>4</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function gridLayoutColumnsResponsiveExplicit() {
  return html`
    <cds-demo layout wide>
      <div cds-layout="grid gap:md">
        <cds-placeholder cds-layout="col@sm:4">1</cds-placeholder>
        <cds-placeholder cds-layout="col@sm:8">2</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function gridLayoutColumnsWrap() {
  return html`
    <cds-demo layout wide>
      <div cds-layout="grid cols:6 gap:md">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
        <cds-placeholder>4</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function gridLayoutColumnsStartEnd() {
  return html`
    <cds-demo layout wide>
      <div cds-layout="grid gap:md">
        <cds-placeholder cds-layout="col:start-3 col:8">1</cds-placeholder>
        <cds-placeholder cds-layout="col:start-1 col:end-5">2</cds-placeholder>
        <cds-placeholder cds-layout="col:4 col:end-13">3</cds-placeholder>
        <cds-placeholder cds-layout="col:start-1 col:end-13">4</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function gridLayoutColumnsStartEndResponsive() {
  return html`
    <cds-demo layout wide>
      <div cds-layout="grid cols@sm:6 cols@md:4 gap:md">
        <cds-placeholder cds-layout="col@md:start-2">1</cds-placeholder>
        <cds-placeholder cds-layout="col@md:end-12">2</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function gridLayoutRows() {
  return html`
    <cds-demo layout tall wide>
      <div cds-layout="grid cols:6 rows:8 gap:md align:stretch">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder cds-layout="col:12 row:4">3</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function gridLayoutRowsResponsive() {
  return html`
    <cds-demo layout tall wide>
      <div cds-layout="grid cols:6 rows:4 rows@sm:8 gap:md align:stretch">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder cds-layout="col:12 row:8 row@sm:4">3</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function gridLayoutRowsStartEnd() {
  return html`
    <cds-demo layout tall wide>
      <div cds-layout="grid cols:4 gap:md align:stretch">
        <cds-placeholder cds-layout="row:4 row:start-6">1</cds-placeholder>
        <cds-placeholder cds-layout="row:3 row:start-4">2</cds-placeholder>
        <cds-placeholder cds-layout="row:12">3</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function gridLayoutRowsStartEndResponsive() {
  return html`
    <cds-demo layout tall wide>
      <div cds-layout="grid cols@md:12 rows@sm:4 gap:md align:stretch">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder cds-layout="row@sm:start-10">2</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function gridLayoutAlignTop() {
  return html`
    <cds-demo layout tall wide>
      <div cds-layout="grid gap:md">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
        <cds-placeholder>4</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function gridLayoutAlignBottom() {
  return html`
    <cds-demo layout tall wide>
      <div cds-layout="grid gap:md align:bottom">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
        <cds-placeholder>4</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function gridLayoutAlignLeft() {
  return html`
    <cds-demo layout wide>
      <div cds-layout="grid cols:auto gap:md align:left">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
        <cds-placeholder>4</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function gridLayoutAlignRight() {
  return html`
    <cds-demo layout wide>
      <div cds-layout="grid cols:auto gap:md align:right">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
        <cds-placeholder>4</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function gridLayoutAlignVerticalCenter() {
  return html`
    <cds-demo layout tall wide>
      <div cds-layout="grid gap:md align:vertical-center">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
        <cds-placeholder>4</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function gridLayoutAlignHorizontalCenter() {
  return html`
    <cds-demo layout wide>
      <div cds-layout="grid cols:auto gap:md align:horizontal-center">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
        <cds-placeholder>4</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function gridLayoutAlignCenter() {
  return html`
    <cds-demo layout tall wide>
      <div cds-layout="grid cols:auto gap:md align:center">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
        <cds-placeholder>4</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function gridLayoutAlignVerticalStretch() {
  return html`
    <cds-demo layout tall wide>
      <div cds-layout="grid gap:md align:vertical-stretch">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
        <cds-placeholder>4</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function gridLayoutAlignHorizontalStretch() {
  return html`
    <cds-demo layout tall wide>
      <div cds-layout="grid cols:3 gap:md align:horizontal-stretch">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
        <cds-placeholder>4</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function gridLayoutAlignStretch() {
  return html`
    <cds-demo layout tall wide>
      <div cds-layout="grid cols:auto gap:md align:stretch">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
        <cds-placeholder>4</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function gridGap() {
  return html`
    <div cds-layout="vertical gap:lg">
      <cds-demo layout>
        <div cds-layout="grid gap:md cols:6">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
          <cds-placeholder>3</cds-placeholder>
          <cds-placeholder>4</cds-placeholder>
        </div>
      </cds-demo>

      <cds-demo layout>
        <div cds-layout="grid gap:xxs cols:6">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
          <cds-placeholder>3</cds-placeholder>
          <cds-placeholder>4</cds-placeholder>
        </div>
      </cds-demo>

      <cds-demo layout>
        <div cds-layout="grid gap:xs cols:6">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
          <cds-placeholder>3</cds-placeholder>
          <cds-placeholder>4</cds-placeholder>
        </div>
      </cds-demo>

      <cds-demo layout>
        <div cds-layout="grid gap:sm cols:6">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
          <cds-placeholder>3</cds-placeholder>
          <cds-placeholder>4</cds-placeholder>
        </div>
      </cds-demo>

      <cds-demo layout>
        <div cds-layout="grid gap:md cols:6">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
          <cds-placeholder>3</cds-placeholder>
          <cds-placeholder>4</cds-placeholder>
        </div>
      </cds-demo>

      <cds-demo layout>
        <div cds-layout="grid gap:lg cols:6">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
          <cds-placeholder>3</cds-placeholder>
          <cds-placeholder>4</cds-placeholder>
        </div>
      </cds-demo>

      <cds-demo layout>
        <div cds-layout="grid gap:xl cols:6">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
          <cds-placeholder>3</cds-placeholder>
          <cds-placeholder>4</cds-placeholder>
        </div>
      </cds-demo>

      <cds-demo layout>
        <div cds-layout="grid gap:xxl cols:6">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
          <cds-placeholder>3</cds-placeholder>
          <cds-placeholder>4</cds-placeholder>
        </div>
      </cds-demo>
    </div>
  `;
}

/** @website */
export function gridGapResponsive() {
  return html`
    <cds-demo layout>
      <div cds-layout="grid gap@sm:lg cols:6">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
        <cds-placeholder>4</cds-placeholder>
      </div>
    </cds-demo>
  `;
}
/**
 * Spacing
 */

/** @website */ export function spacingPadding() {
  return html`
    <cds-demo spacing-padding cds-layout="vertical gap:xl">
      <div cds-layout="p:none"><cds-placeholder>p:none</cds-placeholder></div>
      <div cds-layout="p:xxs"><cds-placeholder>p:xxs</cds-placeholder></div>
      <div cds-layout="p:xs"><cds-placeholder>p:xs</cds-placeholder></div>
      <div cds-layout="p:sm"><cds-placeholder>p:sm</cds-placeholder></div>
      <div cds-layout="p:md"><cds-placeholder>p:md</cds-placeholder></div>
      <div cds-layout="p:lg"><cds-placeholder>p:lg</cds-placeholder></div>
      <div cds-layout="p:xl"><cds-placeholder>p:xl</cds-placeholder></div>
      <div cds-layout="p:xxl"><cds-placeholder>p:xxl</cds-placeholder></div>
    </cds-demo>
  `;
}

/** @website */
export function spacingPaddingSides() {
  return html`
    <cds-demo spacing-padding cds-layout="vertical gap:xl">
      <div cds-layout="p-t:xxs"><cds-placeholder>p-t:xxs</cds-placeholder></div>
      <div cds-layout="p-t:xs"><cds-placeholder>p-t:xs</cds-placeholder></div>
      <div cds-layout="p-t:sm"><cds-placeholder>p-t:sm</cds-placeholder></div>
      <div cds-layout="p-r:md"><cds-placeholder>p-r:md</cds-placeholder></div>
      <div cds-layout="p-b:lg"><cds-placeholder>p-b:lg</cds-placeholder></div>
      <div cds-layout="p-l:xl"><cds-placeholder>p-l:xl</cds-placeholder></div>
      <div cds-layout="p-b:xxl"><cds-placeholder>p-b:xxl</cds-placeholder></div>

      <div cds-layout="p-x:md"><cds-placeholder>p-x:md</cds-placeholder></div>
      <div cds-layout="p-y:md"><cds-placeholder>p-y:md</cds-placeholder></div>
      <div cds-layout="p:sm p-t:lg p-b:none"><cds-placeholder>p:sm p-t:lg p-b:none</cds-placeholder></div>
    </cds-demo>
  `;
}

/** @website */
export function spacingPaddingResponsive() {
  return html`
    <cds-demo spacing-padding cds-layout="vertical gap:xl">
      <div cds-layout="p@sm:md"><cds-placeholder>p@sm:md</cds-placeholder></div>
      <div cds-layout="p-l@sm:lg"><cds-placeholder>p-l@sm:lg</cds-placeholder></div>
    </cds-demo>
  `;
}

/** @website */
export function spacingMargin() {
  return html`
    <cds-demo spacing-margin cds-layout="vertical gap:xl">
      <div><cds-placeholder cds-layout="m:none">m:none</cds-placeholder></div>
      <div><cds-placeholder cds-layout="m:xxs">m:xxs</cds-placeholder></div>
      <div><cds-placeholder cds-layout="m:xs">m:xs</cds-placeholder></div>
      <div><cds-placeholder cds-layout="m:sm">m:sm</cds-placeholder></div>
      <div><cds-placeholder cds-layout="m:md">m:md</cds-placeholder></div>
      <div><cds-placeholder cds-layout="m:lg">m:lg</cds-placeholder></div>
      <div><cds-placeholder cds-layout="m:xl">m:xl</cds-placeholder></div>
      <div><cds-placeholder cds-layout="m:xxl">m:xxl</cds-placeholder></div>
    </cds-demo>
  `;
}

/** @website */
export function spacingMarginSides() {
  return html`
    <cds-demo spacing-margin cds-layout="vertical gap:xl">
      <div><cds-placeholder cds-layout="m-t:xxs">m-t:xxs</cds-placeholder></div>
      <div><cds-placeholder cds-layout="m-t:xs">m-t:xs</cds-placeholder></div>
      <div><cds-placeholder cds-layout="m-t:sm">m-t:sm</cds-placeholder></div>
      <div><cds-placeholder cds-layout="m-r:md">m-r:md</cds-placeholder></div>
      <div><cds-placeholder cds-layout="m-b:lg">m-b:lg</cds-placeholder></div>
      <div><cds-placeholder cds-layout="m-l:xl">m-l:xl</cds-placeholder></div>
      <div><cds-placeholder cds-layout="m-l:xxl">m-l:xxl</cds-placeholder></div>

      <div><cds-placeholder cds-layout="m-x:md">m-x:md</cds-placeholder></div>
      <div><cds-placeholder cds-layout="m-y:md">m-y:md</cds-placeholder></div>
      <div><cds-placeholder cds-layout="m:sm m-t:lg m-b:none">m:sm m-t:lg m-b:none</cds-placeholder></div>
    </cds-demo>
  `;
}

/** @website */
export function spacingMarginResponsive() {
  return html`
    <cds-demo spacing-margin cds-layout="vertical gap:xl">
      <div><cds-placeholder cds-layout="m@sm:md">m@sm</cds-placeholder></div>
      <div><cds-placeholder cds-layout="m-l@sm:lg">m-l@sm:lg</cds-placeholder></div>
    </cds-demo>
  `;
}

/** @website */
export function utilitiesDisplay() {
  return html`
    <cds-demo layout wide>
      <div cds-layout="vertical gap:lg align:stretch" cds-text="body">
        <cds-placeholder cds-layout="display:none display@sm:flex">display:none display@sm:flex</cds-placeholder>
        <cds-placeholder
          >...<span cds-layout="display:none display@md:inline">display:none display@md:inline</span
          >...</cds-placeholder
        >
        <cds-placeholder cds-layout="display:none display@lg:block">display:none display@lg:block</cds-placeholder>
        <cds-placeholder cds-layout="display@lg:none">display@lg:none</cds-placeholder>
      </div>
    </cds-demo>
  `;
}

/** @website */
export function utilitiesDisplayScreenReaderOnly() {
  return html`
    <p>
      There is text in this content that is only available via a screen reader.
      <span cds-layout="display:screen-reader-only">Hello there!</span>
    </p>
  `;
}

/** @website */
export function utilitiesContainers() {
  return html`
    <div cds-layout="vertical gap:lg">
      <cds-demo layout cds-layout="container:xs">container:xs (576px)</cds-demo>
      <cds-demo layout cds-layout="container:sm">container:sm (768px)</cds-demo>
      <cds-demo layout cds-layout="container:md">container:md (992px)</cds-demo>
      <cds-demo layout cds-layout="container:lg">container:lg (1200px)</cds-demo>
      <cds-demo layout cds-layout="container:xl">container:xl (1440px)</cds-demo>
      <cds-demo layout cds-layout="container:fill">'container:fill' or 'fill' (width 100%)</cds-demo>
      <cds-demo layout cds-layout="container:xs container:center">container:xs container:center</cds-demo>
    </div>
  `;
}

function buildScrollableContent() {
  const text = html`<p cds-text="p1">scrollable content</p>`;
  const filler = html`<p cds-text="p1">...</p>
    <p cds-text="p1">...</p>`;
  const returnHtml = [];

  returnHtml.push(text);

  for (let i = 0; i < 15; i++) {
    returnHtml.push(filler);
    returnHtml.push(text);
  }

  return returnHtml;
}

const scrollableContent = buildScrollableContent();

const scrollableContentHtml = html`${scrollableContent}`;

/**
 * Patterns
 */

/** @website */
export function patternsApplicationVerticalLayout() {
  return html`
    <div class="demo-layout demo-app-layout" cds-layout="vertical align:stretch">
      <header class="demo-header" cds-layout="p:md p@md:lg">
        header
      </header>
      <div cds-layout="horizontal align:vertical-stretch wrap:none">
        <nav class="demo-sidenav" cds-layout="p:md p@md:lg">sidebar</nav>
        <cds-divider class="demo-divider" orientation="vertical"></cds-divider>
        <div cds-layout="vertical align:stretch">
          <div class="demo-content demo-scrollable-content">
            <div cds-layout="vertical gap:md p:lg">
              ${scrollableContentHtml}
            </div>
          </div>
          <cds-divider class="demo-divider"></cds-divider>
          <footer class="demo-footer" cds-layout="p-y:md p-x:lg">footer</footer>
        </div>
      </div>
    </div>
  `;
}

/** @website */
export function patternsApplicationVerticalLayoutSubnav() {
  return html`
    <div class="demo-layout demo-app-layout" cds-layout="vertical align:horizontal-stretch">
      <header class="demo-header" cds-layout="p:md p@md:lg">
        header
      </header>
      <div class="demo-subnav" cds-layout="p:md">subnav</div>
      <cds-divider class="demo-divider"></cds-divider>
      <div cds-layout="horizontal align:vertical-stretch">
        <nav class="demo-sidenav" cds-layout="p:md p@md:lg">sidebar</nav>
        <cds-divider class="demo-divider" orientation="vertical"></cds-divider>
        <div class="demo-content demo-scrollable-content" cds-layout="vertical gap:md p:lg align:stretch">
          ${scrollableContentHtml}
        </div>
      </div>
      <cds-divider class="demo-divider"></cds-divider>
      <footer class="demo-footer" cds-layout="p:md p@md:lg align:shrink">footer</footer>
    </div>
  `;
}

/** @website */
export function patternsApplicationVerticalIconLayout() {
  return html`
    <div class="demo-layout demo-app-layout" cds-layout="horizontal wrap:none align:vertical-stretch">
      <header class="demo-header demo-alt-header" cds-layout="vertical gap:lg p:md">
        <cds-icon shape="applications" size="lg"></cds-icon>
        <cds-icon shape="blocks-group" size="lg"></cds-icon>
        <cds-icon shape="bundle" size="lg"></cds-icon>
        <cds-icon shape="building" size="lg"></cds-icon>
        <cds-icon shape="cog" size="lg" cds-layout="align:bottom"></cds-icon>
      </header>
      <div cds-layout="horizontal gap:none align:vertical-stretch wrap:none">
        <nav class="demo-sidenav" cds-layout="p:md align:shrink">
          <p cds-text="section">sidebar</p>
        </nav>
        <cds-divider class="demo-divider" orientation="vertical"></cds-divider>
        <div cds-layout="vertical align:stretch">
          <div class="demo-header demo-alt-content-header" cds-layout="p:md">header</div>
          <cds-divider class="demo-divider"></cds-divider>
          <div class="demo-content demo-scrollable-content demo-alt-content" cds-layout="vertical gap:md p:lg">
            ${scrollableContentHtml}
          </div>
          <cds-divider class="demo-divider"></cds-divider>
          <footer class="demo-footer" cds-layout="p:md align:shrink">footer</footer>
        </div>
      </div>
    </div>
  `;
}

/** @website */
export function patternsApplicationVerticalIconLayoutHybrid() {
  return html`
    <div class="demo-layout demo-app-layout" cds-layout="horizontal wrap:none align:vertical-stretch">
      <header class="demo-header demo-alt-header-2" cds-layout="p:md vertical gap:lg">
        <cds-icon shape="applications" size="lg"></cds-icon>
        <cds-icon shape="blocks-group" size="lg"></cds-icon>
        <cds-icon shape="bundle" size="lg"></cds-icon>
        <cds-icon shape="building" size="lg"></cds-icon>
        <cds-icon shape="cog" size="lg" cds-layout="align:bottom"></cds-icon>
      </header>
      <div cds-layout="vertical align:stretch">
        <header class="demo-header" cds-layout="p:md p@md:lg">
          header
        </header>
        <div cds-layout="horizontal align:vertical-stretch">
          <nav class="demo-sidenav" cds-layout="p:md p@md:lg">sidebar</nav>
          <cds-divider class="demo-divider" orientation="vertical"></cds-divider>
          <div class="demo-content demo-scrollable-content" cds-layout="vertical gap:md p:lg align:stretch">
            ${scrollableContentHtml}
          </div>
        </div>
        <cds-divider class="demo-divider"></cds-divider>
        <footer class="demo-footer" cds-layout="p:md p@md:lg">footer</footer>
      </div>
    </div>
  `;
}

/** @website */
export function patternsContentSiteThreeColumn() {
  return html`
    <div class="demo-layout" cds-layout="vertical align:horizontal-stretch" style="height: 100vh">
      <header class="demo-header" cds-layout="p:md p@md:lg">
        header
      </header>
      <div cds-layout="horizontal align:vertical-stretch" class="demo-content">
        <nav class="demo-sidenav" cds-layout="p:md p@md:lg">sidebar</nav>
        <cds-divider class="demo-divider" orientation="vertical"></cds-divider>
        <div class="demo-content" cds-layout="p:md p@md:lg align:stretch">content</div>
        <cds-divider class="demo-divider" orientation="vertical"></cds-divider>
        <section class="demo-sidebar" cds-layout="p:md p@md:lg">sidebar</section>
      </div>
      <cds-divider class="demo-divider"></cds-divider>
      <footer class="demo-footer" cds-layout="p:md p@md:lg">footer</footer>
    </div>
  `;
}

/** @website */
export function patternsContentSiteSingleRail() {
  return html`
    <div class="demo-layout">
      <header class="demo-header" cds-layout="p:md p@sm:lg">
        header
      </header>
      <div cds-layout="grid gap:md gap@md:xl p:lg p@sm:xl p-y@lg:xxl container:xl container:center">
        <div cds-layout="vertical gap:lg gap@md:xl col@sm:7">
          <h3 cds-text="display">Title</h3>
          <p cds-text="message">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
          <p cds-text="message">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
        </div>
        <img
          cds-layout="col@sm:5 container:fill"
          src="https://dummyimage.com/600x400/000/fff"
          alt="placeholder image"
        />
      </div>
      <div class="demo-content">
        <div cds-layout="grid cols@sm:4 gap:lg p:lg p@md:xxl container:xl container:center" cds-text="center">
          <cds-card cds-layout="p:xl p@md:xxl">card</cds-card>
          <cds-card cds-layout="p:xl p@md:xxl">card</cds-card>
          <cds-card cds-layout="p:xl p@md:xxl">card</cds-card>
        </div>
      </div>
      <footer cds-layout="grid cols@sm:4 gap:md gap@md:xl p:md p@sm:xl container:lg container:center" cds-text="center">
        <div>
          footer links<br />
          footer links<br />
          footer links
        </div>
        <div>
          footer links<br />
          footer links<br />
          footer links
        </div>
        <div>
          footer links<br />
          footer links<br />
          footer links
        </div>
      </footer>
    </div>
  `;
}

/** @website */
export function patternsResponsiveImageGallery() {
  return html`
    <div class="demo-layout" cds-layout="vertical align:horizontal-stretch">
      <header class="demo-header" cds-layout="p:md p@md:lg">
        header
      </header>
      <div cds-layout="grid cols@sm:6 cols@md:4 cols@lg:3 cols@xl:2 p:lg gap:md" class="demo-content">
        <img src="https://dummyimage.com/600x400/000/fff" alt="placeholder image" cds-layout="fill" />
        <img src="https://dummyimage.com/600x400/000/fff" alt="placeholder image" cds-layout="fill" />
        <img src="https://dummyimage.com/600x400/000/fff" alt="placeholder image" cds-layout="fill" />
        <img src="https://dummyimage.com/600x400/000/fff" alt="placeholder image" cds-layout="fill" />
        <img src="https://dummyimage.com/600x400/000/fff" alt="placeholder image" cds-layout="fill" />
        <img src="https://dummyimage.com/600x400/000/fff" alt="placeholder image" cds-layout="fill" />
        <img src="https://dummyimage.com/600x400/000/fff" alt="placeholder image" cds-layout="fill" />
        <img src="https://dummyimage.com/600x400/000/fff" alt="placeholder image" cds-layout="fill" />
        <img src="https://dummyimage.com/600x400/000/fff" alt="placeholder image" cds-layout="fill" />
        <img src="https://dummyimage.com/600x400/000/fff" alt="placeholder image" cds-layout="fill" />
        <img src="https://dummyimage.com/600x400/000/fff" alt="placeholder image" cds-layout="fill" />
        <img src="https://dummyimage.com/600x400/000/fff" alt="placeholder image" cds-layout="fill" />
      </div>
      <cds-divider class="demo-divider"></cds-divider>
      <footer class="demo-footer" cds-layout="p:md p@md:lg">footer</footer>
    </div>
  `;
}

/** @website */
export function layoutTypes() {
  return html`
    <div cds-layout="grid cols@sm:4 gap:xl">
      <div cds-layout="vertical gap:lg align:horizontal-center">
        <h3 cds-text="section center">Horizontal (Inline)</h3>
        ${horizontalLayout()}
      </div>

      <div cds-layout="vertical gap:lg align:horizontal-center">
        <h3 cds-text="section center">Vertical (Stack)</h3>
        ${verticalLayout()}
      </div>

      <div cds-layout="vertical gap:lg">
        <h3 cds-text="section center">Grid (Columns/Responsive)</h3>
        <cds-demo layout wide>
          <div cds-layout="grid cols@sm:6 gap:md">
            <cds-placeholder>1</cds-placeholder>
            <cds-placeholder>2</cds-placeholder>
            <cds-placeholder>3</cds-placeholder>
            <cds-placeholder>4</cds-placeholder>
          </div>
        </cds-demo>
      </div>
    </div>
  `;
}
