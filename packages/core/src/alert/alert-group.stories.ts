/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@clr/core/alert';
import '@clr/core/button';
import '@clr/core/internal-components';
import { cssGroup, propertiesGroup, setStyles } from '@clr/core/internal';
import { action } from '@storybook/addon-actions';
import { color as colorKnob, select, text } from '@storybook/addon-knobs';
import { html } from 'lit-html';
import { ClarityIcons, headphonesIcon, nodeGroupIcon, timesCircleIcon } from '@clr/core/icon-shapes';

ClarityIcons.addIcons(headphonesIcon, nodeGroupIcon, timesCircleIcon);

export default {
  title: 'Components/Alert Group/Stories',
  component: 'cds-alert-group',
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/ZvaQGGktjGoW6gz9DqwvrLtz/Clarity-UI-Library---light?node-id=51%3A666',
    },
  },
};

export const API = () => {
  const slot = text(
    'slot',
    "Gathered by gravity a mote of dust suspended in a sunbeam venture with pretty stories for which there's little good.",
    propertiesGroup
  );
  const alertStatus = select(
    'status',
    {
      'none (default info)': undefined,
      info: 'info',
      success: 'success',
      warning: 'warning',
      danger: 'danger',
      loading: 'loading',
      unknown: 'unknown',
    },
    undefined,
    propertiesGroup
  );
  const size = select('size', { '(default)': 'default', sm: 'sm' }, undefined, propertiesGroup);

  const textColor = colorKnob('--color', undefined, cssGroup);
  const iconColor = colorKnob('--icon-color', undefined, cssGroup);
  const iconSize = text('--icon-size', undefined, cssGroup);
  const fontWeight = text('--font-weight', undefined, cssGroup);
  const letterSpacing = text('--letter-spacing', undefined, cssGroup);
  const padding = text('--padding', undefined, cssGroup);
  const background = colorKnob('--background', undefined, cssGroup);
  const borderRadius = text('--border-radius', undefined, cssGroup);
  const borderColor = colorKnob('--border-color', undefined, cssGroup);
  const borderWidth = text('--border-width', undefined, cssGroup);

  return html`
    <style>
      cds-alert-group {
        ${setStyles({
        '--color': textColor,
        '--icon-color': iconColor,
        '--icon-size': iconSize,
        '--font-weight': fontWeight,
        '--letter-spacing': letterSpacing,
        '--padding': padding,
        '--background': background,
        '--border-radius': borderRadius,
        '--border-color': borderColor,
        '--border-width': borderWidth,
      })}
    </style>
    <cds-alert-group .status="${alertStatus}" .size="${size}">
      <cds-alert .closable="${true}" @closeChange=${action('closeChange')}>
        ${slot}
        <cds-alert-actions>
          <cds-button>Button 1</cds-button>
          <cds-button>Button 2</cds-button>
        </cds-alert-actions>
      </cds-alert>
    </cds-alert-group>
  `;
};

export const alertGroup = () => {
  return html`
    <div cds-layout="vertical gap:sm">
      <cds-alert-group status="info">
        <cds-alert closable>
          This example is a closable alert inside an alert group with a status of "info".
        </cds-alert>
        <cds-alert closable>
          <cds-icon shape="node-group" aria-hidden="true"></cds-icon>
          This example is a closable alert with a custom icon shape inside an alert group with a status of "info".
        </cds-alert>
        <cds-alert status="loading" closable>
          This example is an alert with a "loading" status and alert action buttons inside an alert group with a status
          of "info".
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
            <cds-button>Button 2</cds-button>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group status="success">
        <cds-alert closable>
          This example is a closable alert inside an alert group with a status of "success".
        </cds-alert>
        <cds-alert closable>
          This example is a closable alert with alert action buttons inside an alert group with a status of "success".
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
            <cds-button>Button 2</cds-button>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group status="warning">
        <cds-alert closable>
          This example is a closable alert inside an alert group with a status of "warning".
        </cds-alert>
        <cds-alert closable>
          This example is a closable alert with alert action buttons inside an alert group with a status of "warning".
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
            <cds-button>Button 2</cds-button>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group status="danger">
        <cds-alert closable>
          This example is a closable alert inside an alert group with a status of "danger".
        </cds-alert>
        <cds-alert closable>
          This example is a closable alert with alert action buttons inside an alert group with a status of "danger".
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
            <cds-button>Button 2</cds-button>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group>
        <cds-alert>
          This example is an alert inside an alert group.
        </cds-alert>
        <cds-alert closable>
          This example is a closable alert inside an alert group.
        </cds-alert>
        <cds-alert>
          <cds-icon shape="headphones" aria-hidden="true"></cds-icon>
          This example is an alert with alert action buttons and a custom icon shape inside an alert group.
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
            <cds-button>Button 2</cds-button>
          </cds-alert-actions>
        </cds-alert>
        <cds-alert closable>
          This example is a closable alert with alert action buttons and multiple lines of text inside an alert group. A
          block of lorem ipsum sample text follows: Drake Equation take root and flourish culture rings of Uranus quasar
          hundreds of thousands? Cambrian explosion gathered by gravity of brilliant syntheses vanquish the impossible
          finite but unbounded not a sunrise but a galaxyrise. Intelligent beings two ghostly white figures in coveralls
          and helmets are soflty dancing something incredible is waiting to be known vanquish the impossible vastness is
          bearable only through love concept of the number one and billions upon billions upon billions upon billions
          upon billions upon billions upon billions.
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>
    </div>
  `;
};

export const bannerGroupStatus = () => {
  return html`
    <div cds-layout="vertical gap:sm">
      <cds-alert-group type="banner">
        <cds-alert closable status="info">
          This example is a closable banner alert inside a banner alert group with a status of "info".
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group type="banner">
        <cds-alert status="success" closable>
          This example is a closable alert with a status of "success" inside a banner alert group.
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group type="banner">
        <cds-alert status="warning" closable>
          This example is a closable alert with alert action buttons and a status of "warning" inside a banner alert
          group.
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
            <cds-button>Button 2</cds-button>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group type="banner">
        <cds-alert status="danger" closable>
          This example is a closable alert with a status of "danger" inside a banner alert group.
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
            <cds-button>Button 2</cds-button>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group type="banner">
        <cds-alert status="unknown">
          This example is a non-closable alert with alert actions and a status of "unknown" inside a banner alert group.
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
            <cds-button>Button 2</cds-button>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group type="banner">
        <cds-alert status="loading">
          This example is an alert with alert actions and a status of "loading" inside a banner alert group.
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>
    </div>
  `;
};

export const bannerGroup = () => {
  return html`
    <div cds-layout="vertical gap:sm">
      <cds-alert-group type="banner">
        <cds-alert closable>
          <cds-icon shape="node-group" aria-hidden="true"></cds-icon>
          This example is a closable alert with a custom icon shape inside a banner alert group.
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group type="banner">
        <cds-alert closable>
          <cds-icon shape="headphones" aria-hidden="true"></cds-icon>
          This example is a closable alert with alert action buttons, a custom icon, and multiple lines of text inside a
          banner alert group. A block of lorem ipsum sample text follows: Drake Equation take root and flourish culture
          rings of Uranus quasar hundreds of thousands? Cambrian explosion gathered by gravity of brilliant syntheses
          vanquish the impossible finite but unbounded not a sunrise but a galaxyrise. Intelligent beings two ghostly
          white figures in coveralls and helmets are soflty dancing something incredible is waiting to be known vanquish
          the impossible vastness is bearable only through love concept of the number one and billions upon billions
          upon billions upon billions upon billions upon billions upon billions.
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group size="sm" type="banner">
        <cds-alert>
          This example shows that a banner alert group should ignore compact sizing.
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
            <cds-button>Button 2</cds-button>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>
    </div>
  `;
};

/*
export const bannerGroupWithPager = () => {
  return html`
    <div cds-layout="vertical gap:sm">
      <cds-alert-group type="banner">
        <div class="pager">Pager Here</div>
        <cds-alert closable status="info">
          This example banner alert group with a pager.
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group type="banner">
        <div class="pager">Pager Here</div>
        <cds-alert closable status="success">
          This example banner alert group with a pager.
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group type="banner">
        <div class="pager">Pager Here</div>
        <cds-alert closable status="warning">
          This example banner alert group with a pager.
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group type="banner">
        <div class="pager">Pager Here</div>
        <cds-alert closable status="danger">
          This example banner alert group with a pager.
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group type="banner">
        <div class="pager">Pager Here</div>
        <cds-alert closable status="unknown">
          This example banner alert group with a pager.
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>
    </div>
  `;
};
*/

export const lightweightAlertGroup = () => {
  return html`
    <cds-alert-group type="light">
      <cds-alert status="info">
        This example is an alert with a status of "info" inside a lightweight alert group.
      </cds-alert>
      <cds-alert status="danger">
        This example is an alert with a status of "danger" and inline action buttons inside a lightweight alert group.
        <cds-inline-button>Clickable Action</cds-inline-button>
      </cds-alert>
      <cds-alert status="loading">
        This example is an alert with a status of "loading" inside a lightweight alert group.
        <cds-alert-actions>
          <cds-button>Alert actions should not be viewable in lightweight alerts</cds-button>
          <cds-button>Alert actions should not be viewable in lightweight alerts</cds-button>
        </cds-alert-actions>
      </cds-alert>
      <cds-alert status="unknown">
        This example is a multi-line alert with a status of "unknown" inside a lightweight alert group. A block of lorem
        ipsum sample text follows: Drake Equation take root and flourish culture rings of Uranus quasar hundreds of
        thousands? Cambrian explosion gathered by gravity of brilliant syntheses vanquish the impossible finite but
        unbounded not a sunrise but a galaxyrise. Intelligent beings two ghostly white figures in coveralls and helmets
        are soflty dancing something incredible is waiting to be known vanquish the impossible vastness is bearable only
        through love concept of the number one and billions upon billions upon billions upon billions upon billions upon
        billions upon billions.
        <cds-alert-actions>
          <cds-button>Button 1</cds-button>
        </cds-alert-actions>
      </cds-alert>
    </cds-alert-group>
  `;
};

export const compactAlertGroup = () => {
  return html`
    <div cds-layout="vertical gap:sm">
      <cds-alert-group status="info" size="sm">
        <cds-alert closable>
          This example is a closable alert inside a compact alert group with a status of "info".
        </cds-alert>
        <cds-alert closable>
          <cds-icon shape="node-group" aria-hidden="true"></cds-icon>
          This example is a closable alert with alert actions and a custom icon shape inside a compact alert group with
          a status of "info".
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
            <cds-button>Button 2</cds-button>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group status="success" size="sm">
        <cds-alert closable>
          This example is a closable alert inside a compact alert group with a status of "success".
        </cds-alert>
        <cds-alert closable>
          This example is a closable alert with alert actions and a custom icon shape inside a compact alert group with
          a status of "success".
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
            <cds-button>Button 2</cds-button>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group status="warning" size="sm">
        <cds-alert closable>
          This example is a closable alert inside a compact alert group with a status of "warning".
        </cds-alert>
        <cds-alert closable>
          <cds-icon shape="headphones" aria-hidden="true"></cds-icon>
          This example is a closable alert with alert actions and a custom icon shape inside a compact alert group with
          a status of "warning".
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
            <cds-button>Button 2</cds-button>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group status="danger" size="sm">
        <cds-alert status="loading" closable>
          This example is a closable alert with a status of "loading" inside a compact alert group with a status of
          "danger".
        </cds-alert>
        <cds-alert closable>
          This example is a closable alert with alert actions inside a compact alert group with a status of "warning".
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
            <cds-button>Button 2</cds-button>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group size="sm">
        <cds-alert>
          This example is an alert inside a compact alert group.
        </cds-alert>
        <cds-alert closable>
          This example is a closable alert inside a compact alert group.
        </cds-alert>
        <cds-alert>
          This example is an alert with alert actions inside a compact alert group.
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
            <cds-button>Button 2</cds-button>
          </cds-alert-actions>
        </cds-alert>
        <cds-alert closable>
          This example is a closable alert with multiple lines of text and an alert action inside a compact alert group.
          A block of lorem ipsum sample text follows: Drake Equation take root and flourish culture rings of Uranus
          quasar hundreds of thousands? Cambrian explosion gathered by gravity of brilliant syntheses vanquish the
          impossible finite but unbounded not a sunrise but a galaxyrise. Intelligent beings two ghostly white figures
          in coveralls and helmets are soflty dancing something incredible is waiting to be known vanquish the
          impossible vastness is bearable only through love concept of the number one and billions upon billions upon
          billions upon billions upon billions upon billions upon billions.
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>
      <cds-alert-group type="light" size="sm">
        <cds-alert status="info">
          This example is an alert with a status of "info" inside a compact, lightweight alert group.
        </cds-alert>
        <cds-alert status="danger">
          This example is an alert with a status of "danger" and an inline action inside a compact, lightweight alert
          group.<cds-inline-button>Clickable Action</cds-inline-button>
        </cds-alert>
        <cds-alert status="loading">
          This example is an alert with a status of "loading" inside a compact, lightweight alert group.
          <cds-alert-actions>
            <cds-button>Alert actions should not be viewable in lightweight alerts</cds-button>
            <cds-button>Alert actions should not be viewable in lightweight alerts</cds-button>
          </cds-alert-actions>
        </cds-alert>
        <cds-alert status="unknown">
          This example is a multi-line alert with a status of "unknown" and two inline actions inside a compact,
          lightweight alert group. A block of lorem ipsum sample text follows: Drake Equation take root and flourish
          culture rings of Uranus quasar hundreds of thousands? Cambrian explosion gathered by gravity of brilliant
          syntheses vanquish the impossible finite but unbounded not a sunrise but a galaxyrise. Intelligent beings two
          ghostly white figures in coveralls and helmets are soflty dancing something incredible is waiting to be known
          vanquish the impossible vastness is bearable only through love concept of the number one and billions upon
          billions upon billions upon billions upon billions upon billions upon billions.<cds-inline-button
            >Clickable Action 1</cds-inline-button
          ><cds-inline-button>Clickable Action 2</cds-inline-button>
          <cds-alert-actions>
            <cds-button>Alert actions should not be viewable in lightweight alerts</cds-button>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>
    </div>
  `;
};

export const customStyles = () => {
  return html`
    <style>
      .alert-group-custom,
      .alert-custom {
        --color: midnightblue;
        --icon-color: white;
        --background: mediumpurple;
        --border-radius: 0;
        --font-size: 1rem;
        --icon-size: 1.2rem;
        --border-width: 0.1rem;
        --border-color: midnightblue;
        --letter-spacing: normal;
      }

      .alert-custom-link {
        --color: yellow;
      }
    </style>
    <cds-alert-group class="alert-group-custom">
      <cds-alert class="alert-custom" closable>
        This example is an alert with a status of "info" inside a compact, lightweight alert group.
        <cds-internal-close-button
          icon-shape="times-circle"
          icon-size="24"
          aria-label="Example override of default close-button in an alert"
        ></cds-internal-close-button>
      </cds-alert>
      <cds-alert class="alert-custom" closable>
        This example is an alert with a status of "danger" and an inline action inside a compact, lightweight alert
        group.<cds-inline-button class="alert-custom-link">Clickable Action</cds-inline-button>
        <cds-internal-close-button
          icon-shape="times-circle"
          icon-size="24"
          aria-label="Another example override of default close-button in an alert"
        ></cds-internal-close-button>
      </cds-alert>
    </cds-alert-group>
  `;
};
