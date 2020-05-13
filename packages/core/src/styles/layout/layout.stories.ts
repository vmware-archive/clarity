/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';

export default {
  title: 'Experimental/Layout/Stories',
  parameters: {
    options: { showPanel: true },
    a11y: { disable: true },
  },
};

/**
 * Horizontal Layout
 */
export const horizontalLayout = () => {
  return html`
    <cds-demo layout>
      <div cds-layout="horizontal gap:md">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const horizontalLayoutWrap = () => {
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
};

export const horizontalLayoutNoWrap = () => {
  return html`
    <cds-demo layout style="max-width: 273px">
      <div cds-layout="horizontal gap:md no-wrap">
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
};

export const horizontalLayoutAlignTop = () => {
  return html`
    <cds-demo layout tall>
      <div cds-layout="horizontal gap:md align:top">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const horizontalLayoutAlignBottom = () => {
  return html`
    <cds-demo layout tall>
      <div cds-layout="horizontal gap:md align:bottom">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const horizontalLayoutAlignLeft = () => {
  return html`
    <cds-demo layout wide>
      <div cds-layout="horizontal gap:md align:left">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const horizontalLayoutAlignRight = () => {
  return html`
    <cds-demo layout wide>
      <div cds-layout="horizontal gap:md align:right">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const horizontalLayoutAlignVerticalCenter = () => {
  return html`
    <cds-demo layout tall>
      <div cds-layout="horizontal gap:md align:vertical-center">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const horizontalLayoutAlignHorizontalCenter = () => {
  return html`
    <cds-demo layout wide>
      <div cds-layout="horizontal gap:md align:horizontal-center">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const horizontalLayoutAlignCenter = () => {
  return html`
    <cds-demo layout wide tall>
      <div cds-layout="horizontal gap:md align:center">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const horizontalLayoutAlignVerticalStretch = () => {
  return html`
    <cds-demo layout wide tall>
      <div cds-layout="horizontal gap:md align:vertical-stretch">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const horizontalLayoutAlignHorizontalStretch = () => {
  return html`
    <cds-demo layout wide tall>
      <div cds-layout="horizontal gap:md align:horizontal-stretch">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const horizontalLayoutAlignStretch = () => {
  return html`
    <cds-demo layout wide tall>
      <div cds-layout="horizontal gap:md align:stretch">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const horizontalLayoutItemStretch = () => {
  return html`
    <cds-demo layout wide>
      <div cds-layout="horizontal gap:md">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder cds-layout="align:stretch">2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const horizontalLayoutItemShrink = () => {
  return html`
    <cds-demo layout wide>
      <div cds-layout="horizontal gap:md align:horizontal-stretch">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder cds-layout="align:shrink">2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const horizontalLayoutItemAlignCenter = () => {
  return html`
    <cds-demo layout wide tall>
      <div cds-layout="horizontal gap:md align:vertical-stretch">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder cds-layout="align:center">2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const horizontalLayoutItemAlignVerticalCenter = () => {
  return html`
    <cds-demo layout tall>
      <div cds-layout="horizontal gap:md align:vertical-stretch">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder cds-layout="align:vertical-center">2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const horizontalLayoutItemAlignHorizontalCenter = () => {
  return html`
    <cds-demo layout wide>
      <div cds-layout="horizontal gap:md">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder cds-layout="align:horizontal-center">2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const horizontalLayoutItemAlignTop = () => {
  return html`
    <cds-demo layout tall>
      <div cds-layout="horizontal gap:md align:vertical-stretch">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder cds-layout="align:top">2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const horizontalLayoutItemAlignBottom = () => {
  return html`
    <cds-demo layout tall>
      <div cds-layout="horizontal gap:md align:vertical-stretch">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder cds-layout="align:bottom">2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const horizontalLayoutItemAlignRight = () => {
  return html`
    <cds-demo layout wide>
      <div cds-layout="horizontal gap:md">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder cds-layout="align:right">2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const horizontalLayoutItemAlignLeft = () => {
  return html`
    <cds-demo layout wide>
      <div cds-layout="horizontal gap:md align:right">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder cds-layout="align:left">2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const horizontalGap = () => {
  return html`
    <div cds-layout="vertical gap:lg">
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
};

export const horizontalGapResponsive = () => {
  return html`
    <cds-demo layout>
      <div cds-layout="horizontal gap@sm:lg">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

/**
 * Vertical Layout
 */

export const verticalLayout = () => {
  return html`
    <cds-demo layout>
      <div cds-layout="vertical gap:md">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const verticalLayoutWrap = () => {
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
};

export const verticalLayoutAlignTop = () => {
  return html`
    <cds-demo layout tall>
      <div cds-layout="vertical gap:md align:top">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const verticalLayoutAlignBottom = () => {
  return html`
    <cds-demo layout tall>
      <div cds-layout="vertical gap:md align:bottom">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const verticalLayoutAlignLeft = () => {
  return html`
    <cds-demo layout wide>
      <div cds-layout="vertical gap:md align:left">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const verticalLayoutAlignRight = () => {
  return html`
    <cds-demo layout wide>
      <div cds-layout="vertical gap:md align:right">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const verticalLayoutAlignVerticalCenter = () => {
  return html`
    <cds-demo layout tall>
      <div cds-layout="vertical gap:md align:vertical-center">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const verticalLayoutAlignHorizontalCenter = () => {
  return html`
    <cds-demo layout wide>
      <div cds-layout="vertical gap:md align:horizontal-center">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const verticalLayoutAlignCenter = () => {
  return html`
    <cds-demo layout wide tall>
      <div cds-layout="vertical gap:md align:center">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const verticalLayoutAlignVerticalStretch = () => {
  return html`
    <cds-demo layout tall>
      <div cds-layout="vertical gap:md align:vertical-stretch">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const verticalLayoutAlignHorizontalStretch = () => {
  return html`
    <cds-demo layout wide>
      <div cds-layout="vertical gap:md align:horizontal-stretch">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const verticalLayoutAlignStretch = () => {
  return html`
    <cds-demo layout wide tall>
      <div cds-layout="vertical gap:md align:stretch">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const verticalLayoutItemStretch = () => {
  return html`
    <cds-demo layout tall>
      <div cds-layout="vertical gap:md">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder cds-layout="align:stretch">2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const verticalLayoutItemShrink = () => {
  return html`
    <cds-demo layout tall>
      <div cds-layout="vertical gap:md align:vertical-stretch">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder cds-layout="align:shrink">2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const verticalLayoutItemAlignCenter = () => {
  return html`
    <cds-demo layout tall wide>
      <div cds-layout="vertical gap:md">
        <cds-placeholder cds-layout="align:top">1</cds-placeholder>
        <cds-placeholder cds-layout="align:center">2</cds-placeholder>
        <cds-placeholder cds-layout="align:bottom">3</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const verticalLayoutItemAlignVerticalCenter = () => {
  return html`
    <cds-demo layout tall>
      <div cds-layout="vertical gap:md">
        <cds-placeholder cds-layout="align:top">1</cds-placeholder>
        <cds-placeholder cds-layout="align:vertical-center">2</cds-placeholder>
        <cds-placeholder cds-layout="align:bottom">3</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const verticalLayoutItemAlignHorizontalCenter = () => {
  return html`
    <cds-demo layout wide>
      <div cds-layout="vertical gap:md">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder cds-layout="align:horizontal-center">2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const verticalLayoutItemAlignTop = () => {
  return html`
    <cds-demo layout tall>
      <div cds-layout="vertical gap:md align:bottom">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder cds-layout="align:top">2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const verticalLayoutItemAlignBottom = () => {
  return html`
    <cds-demo layout tall>
      <div cds-layout="vertical gap:md">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder cds-layout="align:bottom">2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const verticalLayoutItemAlignRight = () => {
  return html`
    <cds-demo layout wide>
      <div cds-layout="vertical gap:md">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder cds-layout="align:right">2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const verticalLayoutItemAlignLeft = () => {
  return html`
    <cds-demo layout wide>
      <div cds-layout="vertical gap:md align:right">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder cds-layout="align:left">2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const verticalGap = () => {
  return html`
    <div cds-layout="horizontal gap:lg">
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
};

export const verticalGapResponsive = () => {
  return html`
    <cds-demo layout>
      <div cds-layout="vertical gap@sm:lg">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

/**
 * Grid Layout
 */
export const gridLayout = () => {
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
};

export const gridLayoutColumns = () => {
  return html`
    <cds-demo layout wide>
      <div cds-layout="grid cols:6 gap:md">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const gridLayoutColumnsExplicit = () => {
  return html`
    <cds-demo layout wide>
      <div cds-layout="grid gap:md">
        <cds-placeholder cds-layout="col:4">1</cds-placeholder>
        <cds-placeholder cds-layout="col:8">2</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const gridLayoutColumnsAuto = () => {
  return html`
    <cds-demo layout wide>
      <div cds-layout="grid cols:auto gap:md">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const gridLayoutColumnsResponsive = () => {
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
};

export const gridLayoutColumnsResponsiveExplicit = () => {
  return html`
    <cds-demo layout wide>
      <div cds-layout="grid gap:md">
        <cds-placeholder cds-layout="col@sm:4">1</cds-placeholder>
        <cds-placeholder cds-layout="col@sm:8">2</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const gridLayoutColumnsWrap = () => {
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
};

export const gridLayoutColumnsStartEnd = () => {
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
};

export const gridLayoutColumnsStartEndResponsive = () => {
  return html`
    <cds-demo layout wide>
      <div cds-layout="grid cols@sm:6 cols@md:4 gap:md">
        <cds-placeholder cds-layout="col@md:start-2">1</cds-placeholder>
        <cds-placeholder cds-layout="col@md:end-12">2</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const gridLayoutRows = () => {
  return html`
    <cds-demo layout tall wide>
      <div cds-layout="grid cols:6 rows:8 gap:md align:stretch">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder cds-layout="col:12 row:4">3</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const gridLayoutRowsResponsive = () => {
  return html`
    <cds-demo layout tall wide>
      <div cds-layout="grid cols:6 rows:4 rows@sm:8 gap:md align:stretch">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder cds-layout="col:12 row:8 row@sm:4">3</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const gridLayoutRowsStartEnd = () => {
  return html`
    <cds-demo layout tall wide>
      <div cds-layout="grid cols:4 gap:md align:stretch">
        <cds-placeholder cds-layout="row:4 row:start-6">1</cds-placeholder>
        <cds-placeholder cds-layout="row:3 row:start-4">2</cds-placeholder>
        <cds-placeholder cds-layout="row:12">3</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const gridLayoutRowsStartEndResponsive = () => {
  return html`
    <cds-demo layout tall wide>
      <div cds-layout="grid cols@md:12 rows@sm:4 gap:md align:stretch">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder cds-layout="row@sm:start-10">2</cds-placeholder>
      </div>
    </cds-demo>
  `;
};

export const gridLayoutAlignTop = () => {
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
};

export const gridLayoutAlignBottom = () => {
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
};

export const gridLayoutAlignLeft = () => {
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
};

export const gridLayoutAlignRight = () => {
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
};

export const gridLayoutAlignVerticalCenter = () => {
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
};

export const gridLayoutAlignHorizontalCenter = () => {
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
};

export const gridLayoutAlignCenter = () => {
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
};

export const gridLayoutAlignVerticalStretch = () => {
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
};

export const gridLayoutAlignHorizontalStretch = () => {
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
};

export const gridLayoutAlignStretch = () => {
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
};

export const gridGap = () => {
  return html`
    <div cds-layout="vertical gap:lg">
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
};

export const gridGapResponsive = () => {
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
};

/**
 * Spacing
 */
export const spacingPadding = () => {
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
};

export const spacingPaddingSides = () => {
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
};

export const spacingPaddingResponsive = () => {
  return html`
    <cds-demo spacing-padding cds-layout="vertical gap:xl">
      <div cds-layout="p@sm:md"><cds-placeholder>p@sm:md</cds-placeholder></div>
      <div cds-layout="p-l@sm:lg"><cds-placeholder>p-l@sm:lg</cds-placeholder></div>
    </cds-demo>
  `;
};

export const spacingMargin = () => {
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
};

export const spacingMarginSides = () => {
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
};

export const spacingMarginResponsive = () => {
  return html`
    <cds-demo spacing-margin cds-layout="vertical gap:xl">
      <div><cds-placeholder cds-layout="m@sm:md">m@sm:md</cds-placeholder></div>
      <div><cds-placeholder cds-layout="m-l@sm:lg">m-l@sm:lg</cds-placeholder></div>
    </cds-demo>
  `;
};

export const utilitiesDisplay = () => {
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
};

export const utilitiesDisplayScreenReaderOnly = () => {
  return html`
    <p>
      There is text in this content that is only available via a screen reader.
      <span cds-layout="display:screen-reader-only">Hello there!</span>
    </p>
  `;
};

export const utilitiesContainers = () => {
  return html`
    <div cds-layout="vertical gap:lg">
      <cds-demo layout cds-layout="container:xs">container:xs (576px)</cds-demo>
      <cds-demo layout cds-layout="container:sm">container:sm (768px)</cds-demo>
      <cds-demo layout cds-layout="container:md">container:md (992px)</cds-demo>
      <cds-demo layout cds-layout="container:lg">container:lg (1200px)</cds-demo>
      <cds-demo layout cds-layout="container:xl">container:xl (1440px)</cds-demo>
      <cds-demo layout cds-layout="container:xs container:center">container:xs container:center</cds-demo>
    </div>
  `;
};

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

export const patternsApplicationVerticalLayout = () => {
  return html`
    <div class="demo-layout demo-app-layout" cds-layout="vertical align:stretch">
      <header class="demo-header" cds-layout="p:md p@md:lg">
        header
      </header>
      <div cds-layout="horizontal align:stretch no-wrap">
        <nav class="demo-sidenav" cds-layout="p:md p@md:lg">sidebar</nav>
        <div cds-layout="vertical align:stretch">
          <div class="demo-content demo-scrollable-content">
            <div cds-layout="vertical gap:md p:lg">
              ${scrollableContentHtml}
            </div>
          </div>
          <footer class="demo-footer" cds-layout="p-y:md p-x:lg">footer</footer>
        </div>
      </div>
    </div>
  `;
};

export const patternsApplicationVerticalLayoutSubnav = () => {
  return html`
    <div class="demo-layout demo-app-layout" cds-layout="vertical align:stretch">
      <header class="demo-header" cds-layout="p:md p@md:lg align:shrink">
        header
      </header>
      <div class="demo-subnav" cds-layout="p-y:sm p-x:md p-x@md:lg align:shrink">subnav</div>
      <div cds-layout="horizontal align:stretch">
        <nav class="demo-sidenav" cds-layout="p:md p@md:lg align:shrink">sidebar</nav>
        <div class="demo-content demo-scrollable-content" cds-layout="align:stretch">
          <div cds-layout="vertical gap:md p:lg">
            ${scrollableContentHtml}
          </div>
        </div>
      </div>
      <footer class="demo-footer" cds-layout="p:md p@md:lg align:shrink">footer</footer>
    </div>
  `;
};

export const patternsApplicationVerticalIconLayout = () => {
  return html`
    <div class="demo-layout demo-app-layout" cds-layout="horizontal no-wrap">
      <header class="demo-header demo-alt-header" cds-layout="p:md vertical gap:lg">
        <cds-icon shape="applications" size="lg" inverse></cds-icon>
        <cds-icon shape="blocks-group" size="lg" inverse></cds-icon>
        <cds-icon shape="bundle" size="lg" inverse></cds-icon>
        <cds-icon shape="building" size="lg" inverse></cds-icon>
        <cds-icon shape="cog" size="lg" inverse cds-layout="align:bottom"></cds-icon>
      </header>
      <div cds-layout="horizontal gap:none align:stretch no-wrap">
        <nav class="demo-sidenav" cds-layout="p:md">
          <p cds-text="section">sidebar</p>
        </nav>
        <div cds-layout="vertical align:stretch">
          <div class="demo-header demo-alt-content-header" cds-layout="p:md align:shrink">header</div>
          <div class="demo-content demo-scrollable-content demo-alt-content" cds-layout="align:stretch">
            <div cds-layout="vertical gap:md p:lg">
              ${scrollableContentHtml}
            </div>
          </div>
          <footer class="demo-footer" cds-layout="p:md align:shrink">footer</footer>
        </div>
      </div>
    </div>
  `;
};

export const patternsApplicationVerticalIconLayoutHybrid = () => {
  return html`
    <div class="demo-layout demo-app-layout" cds-layout="horizontal no-wrap">
      <header class="demo-header demo-alt-header-2" cds-layout="p:md vertical gap:lg">
        <cds-icon shape="applications" size="lg" inverse></cds-icon>
        <cds-icon shape="blocks-group" size="lg" inverse></cds-icon>
        <cds-icon shape="bundle" size="lg" inverse></cds-icon>
        <cds-icon shape="building" size="lg" inverse></cds-icon>
        <cds-icon shape="cog" size="lg" inverse cds-layout="align:bottom"></cds-icon>
      </header>
      <div cds-layout="vertical align:stretch">
        <header class="demo-header" cds-layout="p:md p@md:lg">
          header
        </header>
        <div cds-layout="horizontal align:stretch">
          <nav class="demo-sidenav" cds-layout="p:md p@md:lg align:shrink">sidebar</nav>
          <div class="demo-content demo-scrollable-content" cds-layout="align:stretch">
            <div cds-layout="vertical gap:md p:lg">
              ${scrollableContentHtml}
            </div>
          </div>
        </div>
        <footer class="demo-footer" cds-layout="p:md p@md:lg align:shrink">footer</footer>
      </div>
    </div>
  `;
};

export const patternsContentSiteThreeColumn = () => {
  return html`
    <div class="demo-layout" cds-layout="vertical align:stretch" style="height: 100vh">
      <header class="demo-header" cds-layout="p:md p@md:lg align:shrink">
        header
      </header>
      <div cds-layout="horizontal align:vertical-stretch" class="demo-content">
        <nav class="demo-sidenav" cds-layout="p:md p@md:lg">sidebar</nav>
        <div class="demo-content" cds-layout="p:md p@md:lg align:stretch">content</div>
        <section class="demo-sidebar" cds-layout="p:md p@md:lg">sidebar</section>
      </div>
      <footer class="demo-footer" cds-layout="p:md p@md:lg align:shrink">footer</footer>
    </div>
  `;
};

export const patternsContentSiteSingleRail = () => {
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
};

export const patternsResponsiveImageGallery = () => {
  return html`
    <div class="demo-layout" cds-layout="vertical align:horizontal-stretch">
      <header class="demo-header" cds-layout="p:md p@md:lg">
        header
      </header>
      <div
        cds-layout="grid cols@sm:6 cols@md:4 cols@lg:3 cols@xl:2 p:lg gap:md align:horizontal-stretch"
        class="demo-content"
      >
        <img src="https://dummyimage.com/600x400/000/fff" alt="placeholder image" cds-layout="container:fill" />
        <img src="https://dummyimage.com/600x400/000/fff" alt="placeholder image" cds-layout="container:fill" />
        <img src="https://dummyimage.com/600x400/000/fff" alt="placeholder image" cds-layout="container:fill" />
        <img src="https://dummyimage.com/600x400/000/fff" alt="placeholder image" cds-layout="container:fill" />
        <img src="https://dummyimage.com/600x400/000/fff" alt="placeholder image" cds-layout="container:fill" />
        <img src="https://dummyimage.com/600x400/000/fff" alt="placeholder image" cds-layout="container:fill" />
        <img src="https://dummyimage.com/600x400/000/fff" alt="placeholder image" cds-layout="container:fill" />
        <img src="https://dummyimage.com/600x400/000/fff" alt="placeholder image" cds-layout="container:fill" />
        <img src="https://dummyimage.com/600x400/000/fff" alt="placeholder image" cds-layout="container:fill" />
        <img src="https://dummyimage.com/600x400/000/fff" alt="placeholder image" cds-layout="container:fill" />
        <img src="https://dummyimage.com/600x400/000/fff" alt="placeholder image" cds-layout="container:fill" />
        <img src="https://dummyimage.com/600x400/000/fff" alt="placeholder image" cds-layout="container:fill" />
      </div>
      <footer class="demo-footer" cds-layout="p:md p@md:lg">footer</footer>
    </div>
  `;
};
