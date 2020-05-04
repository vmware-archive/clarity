/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ClarityIcons } from '@clr/core/icon-shapes';
import { betaIcon } from '@clr/core/icon-shapes/';
import { html } from 'lit-html';

ClarityIcons.addIcons(betaIcon);

export default {
  title: 'Welcome/Clarity',
  parameters: {
    options: { showPanel: false },
    a11y: { disable: true }, // disabled for welcome doc to prevent page jump
  },
};

export const core = () => {
  return html`
    <style>
      .welcome-intro {
        max-width: 550px;
      }

      .welcome-img {
        width: 100%;
        max-width: 7rem;
      }
    </style>
    <section cds-layout="vertical gap:lg align:center m-t:xl" cds-text="center">
      <img src="./assets/images/clarity-logo.svg" alt="Clarity Core" class="welcome-img" />
      <h1 cds-text="display">
        Clarity Core
        <clr-icon
          shape="beta"
          size="xl"
          solid
          status="info"
          style="transform: translate3d(-0.3em, -0.4em, 0)"
        ></clr-icon>
      </h1>
      <h2 cds-text="section">Web Component Implementation of the Clarity Design System</h2>

      <div cds-layout="vertical gap:md" cds-text="body left" class="welcome-intro">
        <p cds-text="body">
          Clarity Core is a Web Component implementation of the
          <a href="https://clarity.design">Clarity Design System</a>. Clarity Core provides a set of reusable UI
          components that work in any JavaScript framework or no framework at all.
        </p>

        <p cds-text="body">
          Core is currently in a beta state but is ready to try out. We are actively looking for
          <a href="https://github.com/vmware/clarity/issues/new/choose">feedback</a> from teams on their experiences.
          You can read more about Core and its goals in our
          <a href="https://medium.com/claritydesignsystem/clarity-core-72f6d3a029bc" target="_blank" rel="noopener"
            >Medium blog post</a
          >.
        </p>
      </div>
      <div cds-layout="horizontal gap:xs align:center">
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
