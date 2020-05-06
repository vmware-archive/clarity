/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@clr/core/icon';
import { CdsIcon, ClarityIcons, imageIcon, userIcon } from '@clr/core/icon-shapes';
import { action } from '@storybook/addon-actions';
import { boolean, color as colorKnob, select, text } from '@storybook/addon-knobs';
import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map';

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
} from '@clr/core/icon-shapes';
import { cssGroup, propertiesGroup, registerElementSafely, setStyles } from '@clr/core/internal';

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
  title: 'Components/Icon/Stories',
  component: 'cds-icon',
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
    'dir',
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
      'none (default)': undefined,
      info: 'info',
      success: 'success',
      warning: 'warning',
      danger: 'danger',
      inherit: 'inherit',
      'warning-triangle': 'warning-triangle',
      'inherit-triangle': 'inherit-triangle',
    },
    undefined,
    propertiesGroup
  );
  const iconStatus = select(
    'status',
    { 'none (default)': undefined, info: 'info', success: 'success', warning: 'warning', danger: 'danger' },
    undefined,
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
              .badge=${badge}
              .status=${iconStatus}
              .solid=${solid}
              .size=${size}
              .shape=${i}
              .direction=${dir}
              .inverse=${inverse}
              .flip=${fl}>
            </cds-icon>
            </cds-icon>
              <p class="dc-icon-name">${i}</p>
            </div>
          `
            )}
          </div>
        </section>
      `
    )}
  `;
};

export const API = () => {
  const shape = select('shape', { default: undefined, user: 'user', image: 'image' }, 'user', propertiesGroup);
  const size = select(
    'size',
    { 'sm (default)': 'sm', md: 'md', lg: 'lg', xl: 'xl', xxl: 'xxl' },
    'lg',
    propertiesGroup
  );
  const dir = select(
    'dir',
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
      'none (default)': undefined,
      info: 'info',
      success: 'success',
      warning: 'warning',
      danger: 'danger',
      inherit: 'inherit',
      'warning-triangle': 'warning-triangle',
      'inherit-triangle': 'inherit-triangle',
    },
    undefined,
    propertiesGroup
  );
  const iconStatus = select(
    'status',
    { 'none (default)': undefined, info: 'info', success: 'success', warning: 'warning', danger: 'danger' },
    undefined,
    propertiesGroup
  );
  const inverse = boolean('inverse', false, propertiesGroup);
  const solid = boolean('solid', false, propertiesGroup);
  const color = colorKnob('--color', undefined, cssGroup);
  const badgeColor = colorKnob('--badge-color', undefined, cssGroup);

  return html`
    <cds-demo ?inverse=${inverse} inline-block>
      <style>
        cds-icon {
          ${setStyles({
          '--color': color,
          '--badge-color': badgeColor,
        })}
      </style>
      <cds-icon
        .badge=${badge}
        .status=${iconStatus}
        .solid=${solid}
        .size=${size}
        .shape=${shape}
        .direction=${dir}
        .inverse=${inverse}
        .flip=${fl}
        @click=${action('click')}
      >
      </cds-icon>
    </cds-demo>
  `;
};

export const icon = () => {
  return html`<cds-icon shape="user"></cds-icon>`;
};

export const sizes = () => {
  return html`
    <cds-icon size="sm"></cds-icon>
    <cds-icon size="md"></cds-icon>
    <cds-icon size="lg"></cds-icon>
    <cds-icon size="xl"></cds-icon>
    <cds-icon size="xxl"></cds-icon>

    <cds-icon size="16"></cds-icon>
    <cds-icon size="24"></cds-icon>
    <cds-icon size="48"></cds-icon>
    <cds-icon size="64"></cds-icon>
    <cds-icon size="128"></cds-icon>
  `;
};

export const badges = () => {
  return html`
    <cds-icon shape="user" size="lg" badge="info"></cds-icon>
    <cds-icon shape="user" size="lg" badge="success"></cds-icon>
    <cds-icon shape="user" size="lg" badge="danger"></cds-icon>
    <cds-icon shape="user" size="lg" badge="warning"></cds-icon>
    <cds-icon shape="user" size="lg" badge="warning-triangle"></cds-icon>
    <cds-demo inverse inline-block>
      <cds-icon shape="user" size="lg" badge="inherit-triangle" inverse></cds-icon>
    </cds-demo>
  `;
};

export const status = () => {
  return html`
    <cds-icon shape="user" size="lg"></cds-icon>
    <cds-icon shape="user" status="info" size="lg"></cds-icon>
    <cds-icon shape="user" status="success" size="lg"></cds-icon>
    <cds-icon shape="user" status="warning" size="lg"></cds-icon>
    <cds-icon shape="user" status="danger" size="lg"></cds-icon>

    <cds-icon shape="user" size="lg" solid></cds-icon>
    <cds-icon shape="user" status="info" size="lg" solid></cds-icon>
    <cds-icon shape="user" status="success" size="lg" solid></cds-icon>
    <cds-icon shape="user" status="warning" size="lg" solid></cds-icon>
    <cds-icon shape="user" status="danger" size="lg" solid></cds-icon>
  `;
};

export const statusInverse = () => {
  return html`
    <cds-demo inverse inline-block>
      <cds-icon shape="user" inverse size="lg"></cds-icon>
      <cds-icon shape="user" inverse status="info" size="lg"></cds-icon>
      <cds-icon shape="user" inverse status="success" size="lg"></cds-icon>
      <cds-icon shape="user" inverse status="warning" size="lg"></cds-icon>
      <cds-icon shape="user" inverse status="danger" size="lg"></cds-icon>

      <cds-icon shape="user" inverse size="lg" solid></cds-icon>
      <cds-icon shape="user" inverse status="info" size="lg" solid></cds-icon>
      <cds-icon shape="user" inverse status="success" size="lg" solid></cds-icon>
      <cds-icon shape="user" inverse status="warning" size="lg" solid></cds-icon>
      <cds-icon shape="user" inverse status="danger" size="lg" solid></cds-icon>
    </cds-demo>
  `;
};

export const direction = () => {
  return html`
    <cds-icon size="lg" direction="up"></cds-icon>
    <cds-icon size="lg" direction="left"></cds-icon>
    <cds-icon size="lg" direction="down"></cds-icon>
    <cds-icon size="lg" direction="right"></cds-icon>
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
        content: 'B';
        font-size: 14px;
        position: absolute;
        display: block;
        top: 0;
        left: 4px;
        color: white;
      }

      .custom-icon-colors:first-child::before {
        content: 'A';
      }

      .custom-icon-colors:last-child::before {
        content: 'C';
        color: inherit;
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
      }

      .icon-c {
        --badge-color: yellow;
      }
    </style>
    <div class="custom-icon-colors">
      <cds-icon shape="user" badge class="icon-a"></cds-icon>
    </div>
    <div class="custom-icon-colors">
      <cds-icon shape="user" class="icon-b"></cds-icon>
    </div>
    <div class="custom-icon-colors">
      <cds-icon shape="user" badge class="icon-c"></cds-icon>
    </div>
    <p>
      <i>A should be green with a pink badge</i><br />
      <i>B should be all pink</i><br />
      <i>C should be default gray with a yellow badge</i>
    </p>
  `;
};

export const flip = () => {
  return html`
    <cds-icon size="lg" shape="image"></cds-icon>
    <cds-icon size="lg" flip="vertical" shape="image"></cds-icon>
    <cds-icon size="lg" flip="horizontal" shape="image"></cds-icon>
  `;
};

class LegacyIcon extends CdsIcon {}
registerElementSafely('clr-icon', LegacyIcon);

export const legacy = () => {
  return html`
    <h2>Size</h2>
    <clr-icon shape="info-circle" size="12"></clr-icon>
    <clr-icon shape="info-circle" size="16"></clr-icon>
    <clr-icon shape="info-circle" size="36"></clr-icon>
    <clr-icon shape="info-circle" size="48"></clr-icon>
    <clr-icon shape="info-circle" size="64"></clr-icon>
    <clr-icon shape="info-circle" size="72"></clr-icon>
    <clr-icon shape="info-circle" style="width: 12px; height: 12px;"></clr-icon>
    <clr-icon shape="info-circle" style="width: 16px; height: 16px;"></clr-icon>
    <clr-icon shape="info-circle" style="width: 36px; height: 36px;"></clr-icon>
    <clr-icon shape="info-circle" style="width: 48px; height: 48px;"></clr-icon>
    <clr-icon shape="info-circle" style="width: 64px; height: 64px;"></clr-icon>
    <clr-icon shape="info-circle" style="width: 72px; height: 72px;"></clr-icon>

    <h2>Direction</h2>
    <clr-icon shape="caret" dir="up"></clr-icon>
    <clr-icon shape="caret" dir="right"></clr-icon>
    <clr-icon shape="caret" dir="down"></clr-icon>
    <clr-icon shape="caret" dir="left"></clr-icon>
    <clr-icon shape="caret" style="transform: rotate(0deg);"></clr-icon>
    <clr-icon shape="caret" style="transform: rotate(90deg);"></clr-icon>
    <clr-icon shape="caret" style="transform: rotate(180deg);"></clr-icon>
    <clr-icon shape="caret" style="transform: rotate(270deg);"></clr-icon>

    <h2>Flip</h2>
    <clr-icon shape="floppy"></clr-icon>
    <clr-icon shape="floppy" flip="horizontal"></clr-icon>
    <clr-icon shape="floppy" flip="vertical"></clr-icon>

    <h2>Color</h2>
    <clr-icon shape="info-circle"></clr-icon>
    <clr-icon shape="info-circle" class="is-highlight"></clr-icon>
    <clr-icon shape="info-circle" class="is-error"></clr-icon>
    <clr-icon shape="info-circle" class="is-warning"></clr-icon>
    <clr-icon shape="info-circle" class="is-success"></clr-icon>
    <clr-icon shape="info-circle" class="is-info"></clr-icon>
    <clr-icon shape="info-circle" class="is-inverse"></clr-icon>

    <h2>Badge</h2>
    <clr-icon shape="user"></clr-icon>
    <clr-icon shape="user" class="has-alert"></clr-icon>
    <clr-icon shape="user" class="has-badge"></clr-icon>
    <clr-icon shape="user" class="is-solid"></clr-icon>
    <clr-icon shape="user" class="is-solid has-alert"></clr-icon>
    <clr-icon shape="user" class="is-solid has-badge"></clr-icon>
    <clr-icon shape="user" class="is-solid has-badge--success"></clr-icon>
  `;
};
