/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import img from '../.storybook/public/assets/images/clarity-logo.svg';

export default {
  title: 'Stories/Clarity',
  parameters: {
    options: { showPanel: false },
  },
};

export const core = () => {
  return html`
    <section cds-layout="vertical gap:xl align:center m-t:xxxl p-t:xxl" cds-text="center">
      <img
        src="${img}"
        alt="Clarity Core"
        cds-layout="fill"
        style="max-width: calc(var(--cds-global-layout-space-xxl) * 3)"
      />
      <h1 cds-text="display">
        Clarity Design System
      </h1>
      <div cds-layout="vertical gap:xl container:xs">
        <p cds-text="section center">
          Reusable components, Design Tokens and Themes for any Web framework or standalone UI.
        </p>

        <p cds-text="body left">
          Some of our components and utilities are currently offered as previews. This means that these components and
          utilities are in active development but ready to try out! We are hoping you will share your
          <a href="https://github.com/vmware/clarity/issues/new/choose" cds-text="link">feedback</a> on these new
          components.
        </p>
      </div>
      <div cds-layout="horizontal gap:xs align:horizontal-center">
        <a href="./?path=/docs/documentation-getting-started--page">
          <cds-button status="primary">
            Get Started
          </cds-button>
        </a>
        <a href="https://medium.com/claritydesignsystem/clarity-core-72f6d3a029bc" target="_blank" rel="noopener">
          <cds-button action="outline">Learn More</cds-button>
        </a>
      </div>
    </section>
  `;
};

// empty story is used to trigger the toolbar options for doc only pages
export const themeSwitcher = () => {
  return html`<div></div>`;
};
