/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';

export default {
  title: 'Stories/Clarity',
  parameters: {
    options: { showPanel: false },
    a11y: { disable: true }, // disabled for welcome doc to prevent page jump
  },
};

export const core = () => {
  return html`
    <section cds-layout="vertical gap:xl align:center m-t:xxl" cds-text="center">
      <img src="./assets/images/clarity-logo.svg" alt="Clarity Core" cds-layout="fill" style="max-width: 8rem" />
      <h1 cds-text="display">
        Clarity Core
      </h1>
      <h2 cds-text="section">Web Component Implementation of the Clarity Design System</h2>

      <div cds-layout="vertical gap:lg container:xs" cds-text="left">
        <p cds-text="body">
          Clarity Core is a Web Component implementation of the
          <a href="https://clarity.design">Clarity Design System</a>. Clarity Core provides a set of reusable UI
          components that work in any JavaScript framework or no framework at all.
        </p>

        <p cds-text="body">
          Some of our components and utilities are currently offered as previews. This means that these components and
          utilities are in active development but ready to try out! We are hoping you will share your
          <a href="https://github.com/vmware/clarity/issues/new/choose">feedback</a> on these new components. You can
          read more about Core and its goals in our
          <a href="https://medium.com/claritydesignsystem/clarity-core-72f6d3a029bc" target="_blank" rel="noopener"
            >Medium blog post</a
          >.
        </p>
      </div>
      <div cds-layout="horizontal gap:xs align:horizontal-center">
        <cds-button status="primary">
          <a href="./?path=/docs/documentation-getting-started--page">Get Started</a>
        </cds-button>
        <cds-button action="outline">
          <a href="https://medium.com/claritydesignsystem/clarity-core-72f6d3a029bc" target="_blank" rel="noopener"
            >Learn More</a
          >
        </cds-button>
      </div>
    </section>
  `;
};
