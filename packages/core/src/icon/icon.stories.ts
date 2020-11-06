/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/icon/register.js';
import { ClarityIcons, imageIcon, userIcon } from '@cds/core/icon';
import { boolean, select, text } from '@storybook/addon-knobs';
import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map';
import customElements from '../../dist/core/custom-elements.json';

import {
  chartCollectionAliases,
  chartCollectionIcons,
  commerceCollectionAliases,
  commerceCollectionIcons,
  coreCollectionAliases,
  coreCollectionIcons,
  essentialCollectionAliases,
  essentialCollectionIcons,
  loadChartIconSet,
  loadCommerceIconSet,
  loadCoreIconSet,
  loadEssentialIconSet,
  loadMediaIconSet,
  loadMiniIconSet,
  loadSocialIconSet,
  loadTechnologyIconSet,
  loadTextEditIconSet,
  loadTravelIconSet,
  mediaCollectionAliases,
  mediaCollectionIcons,
  miniCollectionAliases,
  miniCollectionIcons,
  socialCollectionAliases,
  socialCollectionIcons,
  technologyCollectionAliases,
  technologyCollectionIcons,
  textEditCollectionAliases,
  textEditCollectionIcons,
  travelCollectionAliases,
  travelCollectionIcons,
} from '@cds/core/icon';
import { propertiesGroup, getElementStorybookArgTypes, spreadProps, getElementStorybookArgs } from '@cds/core/internal';
import { ifDefined } from 'lit-html/directives/if-defined';

loadChartIconSet();
loadCommerceIconSet();
loadCoreIconSet();
loadEssentialIconSet();
loadMediaIconSet();
loadMiniIconSet();
loadSocialIconSet();
loadTechnologyIconSet();
loadTextEditIconSet();
loadTravelIconSet();

// here for testing
ClarityIcons.addIcons(userIcon, imageIcon);

export default {
  title: 'Stories/Icon',
  component: 'cds-icon',
  argTypes: getElementStorybookArgTypes('cds-icon', customElements),
  parameters: {
    options: { showPanel: true },
    a11y: { disable: true }, // disabled for performance
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=0%3A2700',
    },
  },
};

export const all = () => {
  const search = text('search', '', propertiesGroup);
  const size = select(
    'size',
    { 'sm (default)': 'sm', md: 'md', lg: 'lg', xl: 'xl', xxl: 'xxl' },
    'lg',
    propertiesGroup
  );
  const dir = select(
    'direction',
    { 'up (default)': undefined, down: 'down', left: 'left', right: 'right' },
    undefined,
    propertiesGroup
  );
  const fl = select(
    'flip',
    { 'none (default)': undefined, vertical: 'vertical', horizontal: 'horizontal' },
    undefined,
    propertiesGroup
  );
  const badge = select(
    'badge',
    {
      'none (default)': '',
      info: 'info',
      success: 'success',
      warning: 'warning',
      danger: 'danger',
      inherit: 'inherit',
      'warning-triangle': 'warning-triangle',
      'inherit-triangle': 'inherit-triangle',
    },
    '',
    propertiesGroup
  );
  const iconStatus = select(
    'status',
    { 'none (default)': '', info: 'info', success: 'success', warning: 'warning', danger: 'danger' },
    '',
    propertiesGroup
  );
  const inverse = boolean('inverse', false, propertiesGroup);
  const solid = boolean('solid', false, propertiesGroup);

  function createIconIndices(icons: [string, string][], aliases: [string, string[]][]): string[] {
    const iconsMap = icons.map(iconTuple => iconTuple[0]);
    const aliasMap = aliases.map(aliasTuple => aliasTuple[1]).reduce((acc, val) => acc.concat(val), []);
    return iconsMap.concat(aliasMap).sort();
  }

  const iconIndex: { [key: string]: string[] } = {
    Chart: createIconIndices(chartCollectionIcons, chartCollectionAliases),
    Commerce: createIconIndices(commerceCollectionIcons, commerceCollectionAliases),
    Core: createIconIndices(coreCollectionIcons, coreCollectionAliases),
    Essential: createIconIndices(essentialCollectionIcons, essentialCollectionAliases),
    Media: createIconIndices(mediaCollectionIcons, mediaCollectionAliases),
    Mini: createIconIndices(miniCollectionIcons, miniCollectionAliases),
    Social: createIconIndices(socialCollectionIcons, socialCollectionAliases),
    Technology: createIconIndices(technologyCollectionIcons, technologyCollectionAliases),
    'Text-Edit': createIconIndices(textEditCollectionIcons, textEditCollectionAliases),
    Travel: createIconIndices(travelCollectionIcons, travelCollectionAliases),
  };

  const iconSets = Object.keys(iconIndex);

  return html`
    <style>
      .dc-icon-set {
        max-width: 60rem;
      }

      .dc-icon-boxes {
        padding: 1.2rem 0.4rem 0;
        background: #f4f4f4;
        display: grid;
        grid-gap: 16px;
        grid-template-columns: repeat(12, 1fr);
      }

      .dc-icon-boxes.inverse {
        background: #565656;
      }

      .dc-icon-boxes.inverse .dc-icon-name {
        color: #fff;
      }

      .dc-icon-box {
        text-align: center;
        grid-column: span 2 / span 2;
      }

      .dc-icon-box p {
        margin: 0;
        padding: 0.2rem 0 1.2rem;
      }
    </style>
    ${iconSets.map(
      k => html`
        <section class="dc-icon-set">
          <h2>${k}</h2>

          <div class="dc-icon-boxes ${classMap({ inverse: inverse })}">
            ${iconIndex[k].map(
              i => html`
                <div class="dc-icon-box" .hidden=${!i.includes(search)}>
                  <cds-icon
                    aria-label="This is an example of an icon using the ${i} shape"
                    badge=${badge}
                    status=${iconStatus}
                    ?solid=${solid}
                    size=${size}
                    shape=${i}
                    direction=${ifDefined(dir)}
                    ?inverse=${inverse}
                    flip=${ifDefined(fl)}
                  >
                  </cds-icon>
                  <span cds-layout="display:screen-reader-only"
                    >${'The shape needed to display this icon is ' + i}</span
                  >
                  <p class="dc-icon-name" aria-hidden="true">${i}</p>
                </div>
              `
            )}
          </div>
        </section>
      `
    )}
  `;
};

export const API = (args: any) => {
  return html`
    <cds-demo inline-block>
      <cds-icon
        ...="${spreadProps(getElementStorybookArgs(args))}"
        aria-label="This is an icon example that can be used to try out the Clarity icon element's API"
      ></cds-icon>
    </cds-demo>
  `;
};

export const icon = () => {
  return html`<cds-icon
    shape="user"
    aria-label="This is an icon example that shows how to use the icon element in an application"
  ></cds-icon>`;
};

export const sizes = () => {
  return html`
    <cds-icon size="sm" aria-label="This is an example of an icon using a pre-defined small size"></cds-icon>
    <cds-icon size="md" aria-label="This is an example of an icon using a pre-defined medium size"></cds-icon>
    <cds-icon size="lg" aria-label="This is an example of an icon using a pre-defined large size"></cds-icon>
    <cds-icon size="xl" aria-label="This is an example of an icon using a pre-defined extra large size"></cds-icon>
    <cds-icon
      size="xxl"
      aria-label="This is an example of an icon using a pre-defined extra extra large size"
    ></cds-icon>

    <cds-icon
      size="16"
      aria-label="This is an example of an icon using a custom size of 16 pixels wide and tall"
    ></cds-icon>
    <cds-icon
      size="24"
      aria-label="This is an example of an icon using a custom size of 24 pixels wide and tall"
    ></cds-icon>
    <cds-icon
      size="48"
      aria-label="This is an example of an icon using a custom size of 48 pixels wide and tall"
    ></cds-icon>
    <cds-icon
      size="64"
      aria-label="This is an example of an icon using a custom size of 64 pixels wide and tall"
    ></cds-icon>
    <cds-icon
      size="128"
      aria-label="This is an example of an icon using a custom size of 128 pixels wide and tall"
    ></cds-icon>
  `;
};

export const badges = () => {
  return html`
    <cds-icon
      shape="user"
      size="lg"
      badge="info"
      aria-label="This is an example of an icon of a user with a blue informational badge"
    ></cds-icon>
    <cds-icon
      shape="user"
      size="lg"
      badge="success"
      aria-label="This is an example of an icon of a user with a green badge indicating success"
    ></cds-icon>
    <cds-icon
      shape="user"
      size="lg"
      badge="danger"
      aria-label="This is an example of an icon of a user with a red badge indicating danger or an error"
    ></cds-icon>
    <cds-icon
      shape="user"
      size="lg"
      badge="warning"
      aria-label="This is an example of an icon of a user with a dark orange badge indicating a warning"
    ></cds-icon>
    <cds-icon
      shape="user"
      size="lg"
      badge="warning-triangle"
      aria-label="This is an example of an icon of a user with a dark orange triangle indicating something may be wrong"
    ></cds-icon>
    <cds-demo inverse inline-block>
      <cds-icon
        shape="user"
        size="lg"
        badge="inherit-triangle"
        inverse
        aria-label="This is an example of an icon of a user on a dark background with a warning triangle that is the same color as the icon"
      ></cds-icon>
    </cds-demo>
  `;
};

export const status = () => {
  return html`
    <cds-icon
      shape="user"
      size="lg"
      aria-label="This is an example of an icon of a user with the default color of the surrounding text"
    ></cds-icon>
    <cds-icon
      shape="user"
      status="info"
      size="lg"
      aria-label="This is an example of a blue, informational icon of a user"
    ></cds-icon>
    <cds-icon
      shape="user"
      status="success"
      size="lg"
      aria-label="This is an example of a green icon of a user indicating success"
    ></cds-icon>
    <cds-icon
      shape="user"
      status="warning"
      size="lg"
      aria-label="This is an example of a dark orange icon of a user indicating a warning"
    ></cds-icon>
    <cds-icon
      shape="user"
      status="danger"
      size="lg"
      aria-label="This is an example of a red icon of a user indicating danger or an error"
    ></cds-icon>

    <cds-icon
      shape="user"
      size="lg"
      solid
      aria-label="This is an example of an icon of a user completely filled in with the default color of the surrounding text"
    ></cds-icon>
    <cds-icon
      shape="user"
      status="info"
      size="lg"
      solid
      aria-label="This is an example of an icon of a user completely filled in with the blue, informational color"
    ></cds-icon>
    <cds-icon
      shape="user"
      status="success"
      size="lg"
      solid
      aria-label="This is an example of an icon of a user completely filled in with a green color indicating success"
    ></cds-icon>
    <cds-icon
      shape="user"
      status="warning"
      size="lg"
      solid
      aria-label="This is an example of an icon of a user completely filled in with a dark orange color indicating warning"
    ></cds-icon>
    <cds-icon
      shape="user"
      status="danger"
      size="lg"
      solid
      aria-label="This is an example of an icon of a user completely filled in with a red color indicating danger or an error"
    ></cds-icon>
  `;
};

export const statusInverse = () => {
  return html`
    <cds-demo inverse inline-block>
      <cds-icon shape="user" inverse size="lg" aria-label="This is an example of an icon of a user on a dark background with the default color of the surrounding text"></cds-icon>
      <cds-icon shape="user" inverse status="info" size="lg" aria-label="This is an example of a blue, informational icon of a user on a dark background"></cds-icon>
      <cds-icon shape="user" inverse status="success" size="lg" aria-label="This is an example of a green icon of a user on a dark background indicating success"></cds-icon>
      <cds-icon shape="user" inverse status="warning" size="lg" aria-label="This is an example of a dark orange icon of a user on a dark background indicating a warning"></cds-icon>
      <cds-icon shape="user" inverse status="danger" size="lg" aria-label="This is an example of a red icon of a user on a dark background indicating danger or an error"></cds-icon>

      <cds-icon shape="user" inverse size="lg" solid aria-label="This is an example of an icon of a user completely filled in with the default color of the surrounding text on a dark background"></cds-icon>
      <cds-icon shape="user" inverse status="info" size="lg" solid aria-label="This is an example of an icon of a user completely filled in with the blue, informational color on a dark background"></cds-icon>
      <cds-icon shape="user" inverse status="success" size="lg" solid aria-label="This is an example of an icon of a user on a dark background completely filled in with a green color indicating success"></cds-icon>
      <cds-icon shape="user" inverse status="warning" size="lg" solid aria-label="This is an example of an icon of a user on a dark background completely filled in with a dark orange color indicating warning"></cds-icon>
      <cds-icon shape="user" inverse status="danger" size="lg" solid aria-label="This is an example of an icon of a user on a dark background completely filled in with a red color indicating danger or an error"></cds-icon>></cds-icon>
    </cds-demo>
  `;
};

export const direction = () => {
  return html`
    <cds-icon
      size="lg"
      direction="up"
      aria-label="This is an example of an icon whose glyph is directed with its top to point upward. This is the default icon direction."
    ></cds-icon>
    <cds-icon
      size="lg"
      direction="left"
      aria-label="This is an example of an icon whose glyph is directed with its top to point to the left."
    ></cds-icon>
    <cds-icon
      size="lg"
      direction="down"
      aria-label="This is an example of an icon whose glyph is directed with its top to point downward."
    ></cds-icon>
    <cds-icon
      size="lg"
      direction="right"
      aria-label="This is an example of an icon whose glyph is directed with its top to point to the right."
    ></cds-icon>
  `;
};

export const customStyles = () => {
  return html`
    <style>
      .custom-icon-colors {
        background: black;
        padding: 8px 12px;
        border-radius: 3px;
        display: inline-block;
        margin-left: 12px;
        position: relative;
      }

      .custom-icon-colors::before {
        content: 'X';
        font-size: 14px;
        position: absolute;
        display: block;
        top: 0;
        left: 4px;
        color: white;
      }

      .custom-icon-colors.a::before {
        content: 'A';
      }

      .custom-icon-colors.b::before {
        content: 'B';
      }

      .custom-icon-colors.c::before {
        content: 'C';
      }

      .custom-icon-colors cds-icon {
        height: 36px;
        width: 36px;
      }

      .icon-a {
        --color: limegreen;
        --badge-color: fuchsia;
      }

      .icon-b {
        --color: fuchsia;
        --badge-color: fuchsia;
      }

      .icon-c {
        --badge-color: yellow;
      }
    </style>
    <div class="custom-icon-colors a">
      <cds-icon
        shape="user"
        badge
        class="icon-a"
        aria-label="This is an example of how an icon can be visually customized."
      ></cds-icon>
    </div>
    <div class="custom-icon-colors b">
      <cds-icon
        shape="user"
        class="icon-b"
        badge="warning-triangle"
        aria-label="This is another example of how an icon can be visually customized."
      ></cds-icon>
    </div>
    <div class="custom-icon-colors c">
      <cds-icon
        shape="user"
        badge
        class="icon-c"
        aria-label="This is a third example of how an icon can be visually customized."
      ></cds-icon>
    </div>
    <p>
      <i>The first icon should be green with a pink badge</i><br />
      <i>The second icon should be all pink (even the warning triangle should be pink)</i><br />
      <i>The third icon should be default gray color with a custom yellow badge</i>
    </p>
  `;
};

export const flip = () => {
  return html`
    <cds-icon
      size="lg"
      shape="image"
      aria-label="This is an example of an icon whose glyph is positioned upright. This is the default."
    ></cds-icon>
    <cds-icon
      size="lg"
      flip="vertical"
      shape="image"
      aria-label="This is an example of an icon whose glyph is flipped vertically."
    ></cds-icon>
    <cds-icon
      size="lg"
      flip="horizontal"
      shape="image"
      aria-label="This is an example of an icon whose glyph is flipped horizontally."
    ></cds-icon>
  `;
};

export const darkTheme = () => {
  return html`
    <div cds-layout="vertical gap:sm" cds-theme="dark">
      <div cds-layout="horizontal gap:sm">
        <cds-icon shape="user" size="lg" badge="info"></cds-icon>
        <cds-icon shape="user" size="lg" badge="success"></cds-icon>
        <cds-icon shape="user" size="lg" badge="danger"></cds-icon>
        <cds-icon shape="user" size="lg" badge="warning"></cds-icon>
        <cds-icon shape="user" size="lg" badge="warning-triangle"></cds-icon>
      </div>

      <div cds-layout="horizontal gap:sm">
        <cds-icon shape="user" size="lg"></cds-icon>
        <cds-icon shape="user" status="info" size="lg"></cds-icon>
        <cds-icon shape="user" status="success" size="lg"></cds-icon>
        <cds-icon shape="user" status="warning" size="lg"></cds-icon>
        <cds-icon shape="user" status="danger" size="lg"></cds-icon>
      </div>

      <div cds-layout="horizontal gap:sm">
        <cds-icon shape="user" inverse size="lg" solid></cds-icon>
        <cds-icon shape="user" inverse status="info" size="lg" solid></cds-icon>
        <cds-icon shape="user" inverse status="success" size="lg" solid></cds-icon>
        <cds-icon shape="user" inverse status="warning" size="lg" solid></cds-icon>
        <cds-icon shape="user" inverse status="danger" size="lg" solid></cds-icon>
      </div>
    </div>
  `;
};
