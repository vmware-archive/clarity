/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/navigation/register.js';
import { getElementStorybookArgTypes } from '@cds/core/internal';
import customElements from '../../dist/core/custom-elements.json';
import { html } from 'lit-html';

export default {
  title: 'Stories/Navigation',
  component: 'cds-navigation',
  argTypes: getElementStorybookArgTypes('cds-navigation', customElements),
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=0%3A548',
    },
  },
};

// export function API() {
//   return html`
//     <cds-navigation>
//       hello nav
//     </cds-navigation>
//   `;
// }

export function basicVertical() {
  return html`
    <div cds-layout="vertical gap:md">
      <div cds-layout="horizontal wrap:none gap:md" style="height: 50vh; box-shadow: 0 0 0 4px deeppink">
        <cds-navigation expanded>
          <!--          <cds-navigation-header>-->
          <!--            Nav Header-->
          <!--            <cds-icon shape="link" direction="left" size="md"></cds-icon>-->
          <!--          </cds-navigation-header>-->
          <cds-navigation-item>
            <cds-icon shape="home" size="md"></cds-icon>
            <a href="#">no header, no footer</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">
              <span>desktop</span>
              <cds-icon shape="home" size="md"></cds-icon>
            </a>
          </cds-navigation-item>
          <cds-navigation-item slot="cds-navigation-footer" cds-layout="align:bottom">
            <a href="#">align:bottom link (no footer)</a>
          </cds-navigation-item>
        </cds-navigation>
        <cds-navigation layout="vertical" expanded>
          <cds-navigation-header>
            Header, no footer
          </cds-navigation-header>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item cds-layout="align:bottom">
            <a href="#">align:bottom link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">last link</a>
          </cds-navigation-item>
        </cds-navigation>
        <cds-navigation layout="vertical" expanded>
          <cds-navigation-item>
            <a href="#">footer no header</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item cds-layout="align:bottom">
            <a href="#">align:bottom link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item slot="cds-navigation-footer">
            <a href="#">footer link</a>
          </cds-navigation-item>
          <cds-navigation-item slot="cds-navigation-footer">
            <a href="#">Footer link</a>
          </cds-navigation-item>
        </cds-navigation>
        <cds-navigation expanded>
          <cds-navigation-header>
            Header & footer
            <cds-icon shape="link" direction="left" size="md"></cds-icon>
          </cds-navigation-header>
          <cds-navigation-item>
            <a href="#">link <cds-icon shape="home" size="md"></cds-icon></a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link <cds-icon shape="home" size="md"></cds-icon></a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <cds-icon shape="home" size="md"></cds-icon>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <cds-icon shape="home" size="md"></cds-icon>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <cds-icon shape="home" size="md"></cds-icon>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <cds-icon shape="home" size="md"></cds-icon>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <cds-icon shape="home" size="md"></cds-icon>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <cds-icon shape="home" size="md"></cds-icon>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <cds-icon shape="home" size="md"></cds-icon>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <cds-icon shape="home" size="md"></cds-icon>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <cds-icon shape="home" size="md"></cds-icon>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <cds-icon shape="home" size="md"></cds-icon>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <cds-icon shape="home" size="md"></cds-icon>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <cds-icon shape="home" size="md"></cds-icon>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item slot="cds-navigation-footer">
            <a href="#">footer link</a>
          </cds-navigation-item>
          <cds-navigation-item slot="cds-navigation-footer">
            <a href="#">Footer link</a>
          </cds-navigation-item>
        </cds-navigation>
      </div>
      <div cds-layout="vertical wrap:none gap:md" style="height: 30vh; box-shadow: 0 0 0 4px deeppink">
        <cds-navigation layout="horizontal">
          <cds-navigation-item>
            <a href="#">
              <cds-icon shape="home" size="md" cds-layout="m-x:lg"></cds-icon>
              no header, no footer
            </a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>

          <cds-navigation-item cds-layout="align:right">
            <a href="#" style="width: 100%">
              align:right
              <cds-icon shape="cog" size="md" cds-layout="m-x:md"></cds-icon>
            </a>
          </cds-navigation-item>
        </cds-navigation>
        <cds-navigation layout="horizontal">
          <cds-navigation-header>
            Header, no footer
          </cds-navigation-header>
          <cds-navigation-item>
            <a href="#">
              <cds-icon shape="home" size="md" cds-layout="m-x:lg"></cds-icon>
              link
            </a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>

          <cds-navigation-item cds-layout="align:right">
            <a href="#" style="width: 100%">
              last link
              <cds-icon shape="cog" size="md" cds-layout="m-x:md"></cds-icon>
            </a>
          </cds-navigation-item>
        </cds-navigation>
        <cds-navigation layout="horizontal">
          <cds-navigation-item>
            <a href="#">
              <cds-icon shape="home" size="md" cds-layout="m-x:lg"></cds-icon>
              Footer, no header
            </a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item slot="cds-navigation-footer">
            <a href="#" style="width: 100%">
              footer here
              <cds-icon shape="cog" size="md" cds-layout="m-x:md"></cds-icon>
            </a>
          </cds-navigation-item>
        </cds-navigation>
        <cds-navigation layout="horizontal">
          <cds-navigation-header>
            Header & footer
            <cds-icon shape="link" direction="left" size="md"></cds-icon>
          </cds-navigation-header>
          <cds-navigation-item>
            <a href="#">
              <cds-icon shape="home" size="md" cds-layout="m-x:lg"></cds-icon>
              link
            </a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <cds-icon shape="home" size="md"></cds-icon>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <cds-icon shape="home" size="md"></cds-icon>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <cds-icon shape="home" size="md"></cds-icon>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <cds-icon shape="home" size="md"></cds-icon>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <cds-icon shape="home" size="md"></cds-icon>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <cds-icon shape="home" size="md"></cds-icon>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <cds-icon shape="home" size="md"></cds-icon>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <cds-icon shape="home" size="md"></cds-icon>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">link</a>
          </cds-navigation-item>
          <cds-navigation-item slot="cds-navigation-footer" cds-layout="align:right">
            <a href="#" style="width: 100%">
              footer link
              <cds-icon shape="cog" size="md" cds-layout="m-x:md"></cds-icon>
            </a>
          </cds-navigation-item>
        </cds-navigation>
      </div>
    </div>
  `;
}

export function collapsedVertical() {
  return html`
    <cds-navigation>
      <cds-navigation-header>
        Header
      </cds-navigation-header>
      <cds-navigation-item>item</cds-navigation-item>
      <cds-navigation-item>item</cds-navigation-item>
      <cds-navigation-item>item</cds-navigation-item>
      <cds-navigation-item>item</cds-navigation-item>
    </cds-navigation>
  `;
}

export function basicHorizontal() {
  return html`
    <cds-navigation layout="horizontal">
      <cds-navigation-header>
        Header
      </cds-navigation-header>
      <cds-navigation-item>item</cds-navigation-item>
      <cds-navigation-item>item</cds-navigation-item>
      <cds-navigation-item>item</cds-navigation-item>
      <cds-navigation-item>item</cds-navigation-item>
    </cds-navigation>
  `;
}
