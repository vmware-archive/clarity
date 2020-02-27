/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { boolean, select } from '@storybook/addon-knobs';
import { html } from 'lit-html';

export default {
  title: 'Documentation|Layout (Experimental)',
  parameters: {
    options: { showPanel: true },
    a11y: { disable: true },
  },
};

export const API = () => {
  const type = select('type', ['horizontal', 'vertical', 'grid'], 'horizontal');
  const gap = select('gap', ['none', 'xs', 'sm', 'md', 'lg', 'xl'], 'none');
  const xAlign = select('x-align', ['left', 'right', 'center', 'stretch'], 'left');
  const yAlign = select('y-align', ['top', 'bottom', 'center', 'stretch'], 'top');
  const columns = select('columns (grid only)', ['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 'auto');
  const rows = select('rows (grid only)', ['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 'auto');
  const debug = boolean('debug', false);

  return html`
    <cds-layout type="vertical" gap="md">
      <h1 cds-heading="1">Layout System (Experimental)</h1>

      <div class="cds-layout-demo">
        <cds-layout type="${type}" gap="${gap}" columns="${columns}" rows="${rows}" x-align="${xAlign}" y-align="${yAlign}" ?debug="${debug}">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
          <cds-placeholder>3</cds-placeholder>
          <cds-placeholder>4</cds-placeholder>
        </cds-layout>
      </div>
    </cds-layout>
  `;
};

export const horizontal = () => {
  return html`
    <cds-layout type="vertical" gap="lg">
      <h1 cds-heading="1">Horizontal Layout</h1>

      <div class="cds-layout-demo">
        <cds-layout type="horizontal" gap="sm">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
          <cds-placeholder>3</cds-placeholder>
        </cds-layout>
      </div>

      <h2 cds-heading="2">Align Right</h2>
      <div class="cds-layout-demo">
        <cds-layout type="horizontal" gap="sm" x-align="right" demo>
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
          <cds-placeholder>3</cds-placeholder>
        </cds-layout>
      </div>

      <h2 cds-heading="2">Align Left</h2>
      <div class="cds-layout-demo">
        <cds-layout type="horizontal" gap="sm" x-align="left">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
          <cds-placeholder>3</cds-placeholder>
        </cds-layout>
      </div>

      <h2 cds-heading="2">Align Horizontal Center</h2>
      <div class="cds-layout-demo">
        <cds-layout type="horizontal" gap="sm" x-align="center">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
          <cds-placeholder>3</cds-placeholder>
        </cds-layout>
      </div>

      <h2 cds-heading="2">Align Horizontal Stretch</h2>
      <div class="cds-layout-demo">
        <cds-layout type="horizontal" gap="sm" x-align="stretch">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
          <cds-placeholder>3</cds-placeholder>
        </cds-layout>
      </div>

      <h2 cds-heading="2">Horizontal Item Stretch</h2>
      <div class="cds-layout-demo">
        <cds-layout type="horizontal" gap="sm">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder cds-layout="stretch">2</cds-placeholder>
          <cds-placeholder>3</cds-placeholder>
        </cds-layout>
      </div>

      <h2 cds-heading="2">Horizontal Item Shrink</h2>
      <div class="cds-layout-demo">
        <cds-layout type="horizontal" gap="sm" x-align="stretch">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder cds-layout="shrink">2</cds-placeholder>
          <cds-placeholder>3</cds-placeholder>
        </cds-layout>
      </div>

      <h2 cds-heading="2">Align Top</h2>
      <div class="cds-layout-demo">
        <cds-layout type="horizontal" gap="sm" y-align="top">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
          <cds-placeholder>3</cds-placeholder>
        </cds-layout>
      </div>

      <h2 cds-heading="2">Align Bottom</h2>
      <div class="cds-layout-demo">
        <cds-layout type="horizontal" gap="sm" y-align="bottom">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
          <cds-placeholder>3</cds-placeholder>
        </cds-layout>
      </div>

      <h2 cds-heading="2">Align Vertical Center</h2>
      <div class="cds-layout-demo">
        <cds-layout type="horizontal" gap="sm" y-align="center">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
          <cds-placeholder>3</cds-placeholder>
        </cds-layout>
      </div>

      <h2 cds-heading="2">Align Vertical Stretch</h2>
      <div class="cds-layout-demo">
        <cds-layout type="horizontal" gap="sm" y-align="stretch">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
          <cds-placeholder>3</cds-placeholder>
        </cds-layout>
      </div>
    </cds-layout>
  `;
};

export const vertical = () => {
  return html`
    <cds-layout type="vertical" gap="lg">
      <h1 cds-heading="1">Vertical Layout</h1>

      <div class="cds-layout-demo">
        <cds-layout type="vertical" gap="sm">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
        </cds-layout>
      </div>

      <h2 cds-heading="2">Align Left</h2>
      <div class="cds-layout-demo">
        <cds-layout type="vertical" gap="sm" x-align="left">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
        </cds-layout>
      </div>

      <h2 cds-heading="2">Align Right</h2>
      <div class="cds-layout-demo">
        <cds-layout type="vertical" gap="sm" x-align="right">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
        </cds-layout>
      </div>

      <h2 cds-heading="2">Align Horizontal Center</h2>
      <div class="cds-layout-demo">
        <cds-layout type="vertical" gap="sm" x-align="center">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
        </cds-layout>
      </div>

      <h2 cds-heading="2">Align Horizontal Stretch</h2>
      <div class="cds-layout-demo">
        <cds-layout type="vertical" gap="sm" x-align="stretch">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
        </cds-layout>
      </div>

      <h2 cds-heading="2">Align Top</h2>
      <div class="cds-layout-demo">
        <cds-layout type="vertical" gap="sm" y-align="top">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
        </cds-layout>
      </div>

      <h2 cds-heading="2">Align Bottom</h2>
      <div class="cds-layout-demo">
        <cds-layout type="vertical" gap="sm" y-align="bottom">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
        </cds-layout>
      </div>

      <h2 cds-heading="2">Align Vertical Center</h2>
      <div class="cds-layout-demo">
        <cds-layout type="vertical" gap="sm" y-align="center">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
        </cds-layout>
      </div>

      <h2 cds-heading="2">Align Vertical Stretch</h2>
      <div class="cds-layout-demo">
        <cds-layout type="vertical" gap="sm" y-align="stretch">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
        </cds-layout>
      </div>

      <h2 cds-heading="2">Vertical Item Stretch</h2>
      <div class="cds-layout-demo">
        <cds-layout type="vertical" gap="sm">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder cds-layout="stretch">2</cds-placeholder>
          <cds-placeholder>3</cds-placeholder>
        </cds-layout>
      </div>

      <h2 cds-heading="2">Vertical Item Shrink</h2>
      <div class="cds-layout-demo">
        <cds-layout type="vertical" gap="sm" y-align="stretch">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder cds-layout="shrink">2</cds-placeholder>
          <cds-placeholder>3</cds-placeholder>
        </cds-layout>
      </div>
    </cds-layout>
  `;
};

export const grid = () => {
  return html`
    <cds-layout type="vertical" gap="lg">
      <h1 cds-heading="1">Layout Grid</h1>

      <cds-layout type="grid" columns="12" gap="sm">
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

        <cds-placeholder cds-layout="col-span-2">2</cds-placeholder>
        <cds-placeholder cds-layout="col-span-2">2</cds-placeholder>
        <cds-placeholder cds-layout="col-span-2">2</cds-placeholder>
        <cds-placeholder cds-layout="col-span-2">2</cds-placeholder>
        <cds-placeholder cds-layout="col-span-2">2</cds-placeholder>
        <cds-placeholder cds-layout="col-span-2">2</cds-placeholder>

        <cds-placeholder cds-layout="col-span-3">3</cds-placeholder>
        <cds-placeholder cds-layout="col-span-3">3</cds-placeholder>
        <cds-placeholder cds-layout="col-span-3">3</cds-placeholder>
        <cds-placeholder cds-layout="col-span-3">3</cds-placeholder>

        <cds-placeholder cds-layout="col-span-4">4</cds-placeholder>
        <cds-placeholder cds-layout="col-span-4">4</cds-placeholder>
        <cds-placeholder cds-layout="col-span-4">4</cds-placeholder>

        <cds-placeholder cds-layout="col-span-6">6</cds-placeholder>
        <cds-placeholder cds-layout="col-span-6">6</cds-placeholder>

        <cds-placeholder cds-layout="col-span-12">12</cds-placeholder>
      </cds-layout>
    </cds-layout>
  `;
};

export const gridColumns = () => {
  return html`
    <cds-layout type="vertical" gap="lg">
      <h1 cds-heading="1">Columns</h1>
      <cds-layout type="grid" columns="2" gap="sm">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
      </cds-layout>

      <h2 cds-heading="2">Explicit Columns</h2>
      <cds-layout type="grid" gap="sm">
        <cds-placeholder cds-layout="col-span-4">1</cds-placeholder>
        <cds-placeholder cds-layout="col-span-8">2</cds-placeholder>
      </cds-layout>

      <h2 cds-heading="2">Auto Columns</h2>
      <cds-layout type="grid" columns="auto" gap="sm">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
      </cds-layout>

      <h2 cds-heading="2">Responsive Columns</h2>
      <cds-layout type="grid" columns="2@sm 4@md" gap="sm">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
        <cds-placeholder>4</cds-placeholder>
      </cds-layout>

      <h2 cds-heading="2">Explicit Responsive Columns</h2>
      <cds-layout type="grid" gap="sm">
        <cds-placeholder cds-layout="col-span-4@sm">1</cds-placeholder>
        <cds-placeholder cds-layout="col-span-8@sm">2</cds-placeholder>
      </cds-layout>
    </cds-layout>
  `;
};

export const gridRows = () => {
  return html`
    <cds-layout type="vertical" gap="lg">
      <h1 cds-heading="1">Rows</h1>

      <cds-layout type="grid" columns="3" rows="3" gap="sm">
        <cds-placeholder cds-layout="row-span-3">1</cds-placeholder>
        <cds-placeholder cds-layout="row-span-1 col-span-2">2</cds-placeholder>
        <cds-placeholder cds-layout="row-span-2 col-span-2">3</cds-placeholder>
      </cds-layout>

      <cds-layout type="grid" columns="12" rows="6" gap="sm" style="height: 400px">
        <cds-placeholder cds-layout="row-span-6 col-span-4">1</cds-placeholder>
        <cds-placeholder cds-layout="row-span-3 col-span-4">2</cds-placeholder>
        <cds-placeholder cds-layout="row-span-3 col-span-4">3</cds-placeholder>
        <cds-placeholder cds-layout="row-span-3 col-span-4">4</cds-placeholder>
        <cds-placeholder cds-layout="row-span-3 col-span-4">5</cds-placeholder>
      </cds-layout>
    </cds-layout>
  `;
};

export const gridStartEnd = () => {
  return html`
    <cds-layout type="vertical" gap="lg">
      <h2 cds-heading="2">Start/End Columns</h2>
      <cds-layout type="grid" columns="6" rows="3" gap="sm">
        <cds-placeholder cds-layout="col-start-2 col-span-4">1</cds-placeholder>
        <cds-placeholder cds-layout="col-start-1 col-end-3">2</cds-placeholder>
        <cds-placeholder cds-layout="col-end-7 col-span-2">3</cds-placeholder>
        <cds-placeholder cds-layout="col-start-1 col-end-7">4</cds-placeholder>
      </cds-layout>

      <h2 cds-heading="2">Start/End Rows</h2>
      <cds-layout type="grid" columns="3" rows="3" gap="sm" style="height:300px">
        <cds-placeholder cds-layout="row-start-2 row-span-2">1</cds-placeholder>
        <cds-placeholder cds-layout="row-end-3 row-span-2">2</cds-placeholder>
        <cds-placeholder cds-layout="row-start-1 row-end-4">3</cds-placeholder>
      </cds-layout>

      <h2 cds-heading="2">Start/End Responsive</h2>
      <cds-layout type="grid" columns="6" rows="3" gap="sm">
        <cds-placeholder cds-layout="col-start-2 col-span-4@md">1</cds-placeholder>
        <cds-placeholder cds-layout="col-start-1 col-end-3">2</cds-placeholder>
        <cds-placeholder cds-layout="col-end-7 col-span-2 row-span-2@md">3</cds-placeholder>
        <cds-placeholder cds-layout="col-start-1 col-end-12 col-end-5@md">4</cds-placeholder>
      </cds-layout>
    </cds-layout>
  `;
};

export const gridAlign = () => {
  return html`
    <cds-layout type="vertical" gap="lg">
      <h1 cds-heading="1">Grid Align</h1>

      <h2 cds-heading="2">Align Top (Default)</h2>
      <cds-layout type="grid" columns="auto" gap="sm">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
        <cds-placeholder style="height:300px">4</cds-placeholder>
      </cds-layout>

      <h2 cds-heading="2">Align Vertical Center</h2>
      <cds-layout type="grid" columns="auto" gap="sm" y-align="center">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
        <cds-placeholder style="height:300px">4</cds-placeholder>
      </cds-layout>

      <h2 cds-heading="2">Align Vertical Bottom</h2>
      <cds-layout type="grid" columns="auto" gap="sm" y-align="bottom">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
        <cds-placeholder style="height:300px">4</cds-placeholder>
      </cds-layout>

      <h2 cds-heading="2">Align Vertical Stretch</h2>
      <cds-layout type="grid" columns="auto" gap="sm" y-align="stretch">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
        <cds-placeholder style="height:300px">4</cds-placeholder>
      </cds-layout>
    </cds-layout>
  `;
};

export const textAlign = () => {
  return html`
  <cds-layout type="vertical" gap="md" x-align="stretch">
    <h1 cds-heading="1">Text Align</h1>
    <cds-placeholder cds-layout="text-left block">Item 1</cds-placeholder>
    <cds-placeholder cds-layout="text-right block">Item 2</cds-placeholder>
    <cds-placeholder cds-layout="text-center block">Item 3</cds-placeholder>
  </cds-layout>
  `;
};

export const spacing = () => {
  return html`
    <style>
      .spacing-demos span {
        background: hsl(0, 0%, 100%);
      }

      .spacing-demos cds-placeholder {
        margin: 0;
        padding: 0;
        background: hsl(31, 81%, 75%);
      }

      .spacing-demos cds-placeholder[cds-layout],
      .spacing-demos cds-layout {
        background: hsl(92, 46%, 74%);
      }
    </style>
    <cds-layout type="vertical" gap="lg" class="spacing-demos">
      <h1 cds-heading="1">Spacing</h1>

      <h2 cds-heading="2">Padding</h2>
      <cds-placeholder pad="none"><span>pad="none"</span></cds-placeholder>
      <cds-placeholder pad="xs"><span>pad="xs"</span></cds-placeholder>
      <cds-placeholder pad="sm"><span>pad="sm"</span></cds-placeholder>
      <cds-placeholder pad="md"><span>pad="md"</span></cds-placeholder>
      <cds-placeholder pad="lg"><span>pad="lg"</span></cds-placeholder>
      <cds-placeholder pad="xl"><span>pad="xl"</span></cds-placeholder>
      <cds-placeholder pad="[md,none]"><span>pad="[md,none]"</span></cds-placeholder>
      <cds-placeholder pad="[xs,xl]"><span>pad="[xs,xl]"</span></cds-placeholder>
      <cds-placeholder pad="[lg,sm]"><span>pad="[xs,xl]"</span></cds-placeholder>

      <!-- <h2 cds-heading="2">Margin</h2>
      <cds-placeholder><span cds-layout="m-xs">m-xs</span></cds-placeholder>
      <cds-placeholder><span cds-layout="m-sm">m-sm</span></cds-placeholder>
      <cds-placeholder><span cds-layout="m-md">m-md</span></cds-placeholder>
      <cds-placeholder><span cds-layout="m-lg">m-lg</span></cds-placeholder>
      <cds-placeholder><span cds-layout="m-xl">m-xl</span></cds-placeholder> -->

      <h2 cds-heading="2">Padding cds-layout</h2>
      <cds-layout type="horizontal" pad="xs" x-align="center">
        <span>pad='xs'</span>
      </cds-layout>
      <cds-layout type="horizontal" pad="sm" x-align="center">
        <span>pad='sm'</span>
      </cds-layout>
      <cds-layout type="horizontal" pad="md" x-align="center">
        <span>pad='md'</span>
      </cds-layout>
      <cds-layout type="horizontal" pad="lg" x-align="center">
        <span>pad='lg'</span>
      </cds-layout>
      <cds-layout type="horizontal" pad="xl" x-align="center">
        <span>pad='xl'</span>
      </cds-layout>
      <cds-layout type="horizontal" pad="[none,md]" x-align="center">
        <span>pad='[none,md]'</span>
      </cds-layout>
      <cds-layout type="horizontal" pad="[sm,xs]" x-align="center">
        <span>pad='[sm,xs]'</span>
      </cds-layout>
      <cds-layout type="horizontal" pad="[xl,lg]" x-align="center">
        <span>pad='[xl,lg]'</span>
      </cds-layout>
    </cds-layout>
  `;
};

export const contain = () => {
  return html`
    <style>
      cds-layout[contain='xs'] {
        max-width: 480px;
      }

      cds-layout[contain='sm'] {
        max-width: 720px;
      }

      cds-layout[contain='md'] {
        max-width: 1024px;
      }

      cds-layout[contain='lg'] {
        max-width: 1200px;
      }
    </style>

    <h1 cds-heading="1">Contain</h1>
    <cds-layout type="vertical" gap="lg" x-align="center">
      <cds-layout type="horizontal" col="auto" contain="xs">
        <cds-card>contain xs</cds-card>
      </cds-layout>

      <cds-layout type="horizontal" col="auto" contain="sm">
        <cds-card>contain sm</cds-card>
      </cds-layout>

      <cds-layout type="horizontal" col="auto" contain="md">
        <cds-card>contain md</cds-card>
      </cds-layout>

      <cds-layout type="horizontal" col="auto" contain="lg">
        <cds-card>contain lg</cds-card>
      </cds-layout>
    </cds-layout>
  `;
};

export const applicationLayout = () => {
  return html`
    <style>
      /* temp styles for prototyping */
      cds-header,
      cds-content,
      cds-footer,
      cds-side-nav,
      cds-sub-nav {
        padding: 12px;
      }

      cds-header {
        background: hsl(214, 20%, 31%);
        color: hsl(0, 0%, 100%);
        padding: 16px 24px;
      }

      cds-footer {
        background: hsl(0, 0%, 89%);
      }

      cds-sub-nav {
        border-bottom: 1px solid hsl(0, 0%, 91%);
        margin: 0 12px;
      }

      cds-side-nav {
        background: hsl(0, 0%, 91%);
      }
    </style>
    <cds-layout type="vertical" gap="xl">
      <h1 cds-heading="1">Application Layout</h1>
      <cds-layout type="application-1">
        <cds-header>header</cds-header>
        <cds-sub-nav>sub nav</cds-sub-nav>
        <cds-side-nav>side nav</cds-side-nav>
        <cds-content>
          <cds-layout type="grid" columns="2" gap="sm" y-align="stretch" style="min-height: 400px">
            <cds-card></cds-card>
            <cds-card></cds-card>
            <cds-card></cds-card>
            <cds-card></cds-card>
          </cds-layout>
        </cds-content>
      </cds-layout>

      <h2 cds-heading="2">Content Layout</h2>
      <cds-layout type="content-1">
        <cds-header>header</cds-header>
        <cds-sub-nav>sub nav</cds-sub-nav>
        <cds-content>
          <h1 cds-heading="1">Blog Post</h1>
          <cds-layout type="horizontal" gap="xs" x-align="right">
            <cds-tag>Design Systems</cds-tag> <cds-tag>Clarity</cds-tag> <cds-tag>VMware</cds-tag>
          </cds-layout>
          <p cds-text="1">
            Blog post content...
          </p>
        </cds-content>
        <cds-footer>footer</cds-footer>
      </cds-layout>
    </cds-layout>
  `;
};

// export const box = () => {
//   return html`
//     <style>
//       cds-box {
//         border: 1px solid #ccc;
//       }
//     </style>
//     <cds-box padding="xs">padding xs</cds-box>
//     <cds-box padding="sm">padding sm</cds-box>
//     <cds-box padding="md">padding md</cds-box>
//     <cds-box padding="lg">padding lg</cds-box>
//     <cds-box padding="xl">padding xl</cds-box>
//   `;
// };
