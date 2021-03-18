/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/internal-components/overlay/register.js';
import '@cds/core/button/register.js';
import { ClarityMotion, AnimationHingeConfig, AnimationHingeName } from '@cds/core/internal';

import { getElementStorybookArgTypes, spreadProps, getElementStorybookArgs } from '@cds/core/internal';
import { html } from 'lit-html';
import customElements from '../../../dist/core/custom-elements.json';

import { CdsInternalOverlay } from '@cds/core/internal-components/overlay/index.js';

ClarityMotion.add(AnimationHingeName, AnimationHingeConfig);

export default {
  title: 'Internal Stories/Overlay',
  component: 'cds-internal-overlay',
  argTypes: getElementStorybookArgTypes('cds-internal-overlay', customElements),
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=51%3A673',
    },
  },
};

export const API = (args: any) => {
  let initted = false;
  const overlayId = 'api-overlay';

  return html`
    <cds-demo popover>
      <cds-button status="primary" type="button" @click=${showApiOverlay}>Show Overlay</cds-button>
      <cds-internal-overlay ...="${spreadProps(getElementStorybookArgs(args))}" hidden id="${overlayId}">
        <div cds-layout="p:lg" style="background: white">${args.default}</div>
      </cds-internal-overlay>
    </cds-demo>
  `;

  function showApiOverlay() {
    const myOverlay = document.getElementById(overlayId) as CdsInternalOverlay;
    myOverlay.removeAttribute('hidden');

    if (!initted) {
      myOverlay.addEventListener('closeChange', () => {
        myOverlay.setAttribute('hidden', '');
      });
      initted = true;
    }
  }
};

/** @website */
export const basic = () => {
  return html` <style>
      .my-overlay {
        background: white;
        border: 1px solid #565656;
        width: 240px;
        height: auto;
      }
    </style>
    <cds-demo popover>
      <cds-internal-overlay _demo-mode>
        <div cds-layout="vertical gap:lg p:lg align:stretch" class="my-overlay">
          <h3 cds-text="section">An overlay demo</h3>
          <p cds-text="body">I am an overlay.</p>
          <cds-button block status="danger" type="button">Button</cds-button>
        </div>
      </cds-internal-overlay>
    </cds-demo>`;
};

export const interactive = () => {
  let initted = false;
  const overlayId = 'overlay-test-overlay';

  function showOverlay() {
    const myOverlay = document.getElementById(overlayId) as CdsInternalOverlay;
    myOverlay.removeAttribute('hidden');

    if (!initted) {
      myOverlay.addEventListener('closeChange', () => {
        myOverlay.setAttribute('hidden', '');
      });
      myOverlay.addEventListener('cdsMotionChange', (e: any) => {
        console.log(e.detail);
      });
      initted = true;
    }
  }

  function hideOverlay() {
    const myOverlay = document.getElementById(overlayId) as CdsInternalOverlay;
    myOverlay.closeOverlay();
  }

  return html` <style>
      .my-overlay {
        background: white;
        border: 1px solid #565656;
        width: 240px;
        height: auto;
      }
    </style>
    <cds-button status="primary" type="button" @click=${showOverlay}>Show Overlay Demo</cds-button>
    <cds-internal-overlay hidden id="${overlayId}">
      <div cds-layout="vertical gap:lg p:lg align:stretch" class="my-overlay" tabindex="-1">
        <h1 cds-text="section">An overlay demo</h1>
        <p cds-text="body">I am an overlay.</p>
        <cds-button block status="danger" type="button" @click=${hideOverlay}>Close Overlay Demo</cds-button>
      </div>
    </cds-internal-overlay>`;
};

export const multiple = () => {
  let initted = false;
  const multiOverlayId = 'multi-overlay-test-overlay';
  const multiChildOverlayId = 'multi-overlay-test-overlay-2';

  function showMultiOverlay(childOrParent = 'parent') {
    const toggleChild = childOrParent === 'child';
    const myOverlay = document.getElementById(toggleChild ? multiChildOverlayId : multiOverlayId);
    myOverlay.removeAttribute('hidden');

    if (!initted) {
      const parentOverlay = document.getElementById(multiOverlayId) as CdsInternalOverlay;
      parentOverlay.addEventListener('closeChange', () => {
        parentOverlay.setAttribute('hidden', '');
      });

      const childOverlay = document.getElementById(multiChildOverlayId) as CdsInternalOverlay;
      childOverlay.addEventListener('closeChange', () => {
        childOverlay.setAttribute('hidden', '');
      });

      initted = true;
    }
  }

  function hideParentOverlay() {
    const parentOverlay = document.getElementById(multiOverlayId) as CdsInternalOverlay;
    parentOverlay.closeOverlay();
  }

  function hideChildOverlay() {
    const childOverlay = document.getElementById(multiChildOverlayId) as CdsInternalOverlay;
    childOverlay.closeOverlay();
  }

  return html`
    <style>
      .my-multi-overlay {
        background: white;
        border: 1px solid #565656;
        width: 480px;
        height: auto;
      }
    </style>
    <cds-button status="primary" type="button" @click=${showMultiOverlay}>Show Layered Overlays</cds-button>
    <cds-internal-overlay hidden id="${multiOverlayId}">
      <div cds-layout="vertical gap:lg p:lg align:stretch" class="my-multi-overlay" tabindex="-1">
        <h1 cds-text="section" tabindex="-1">A demo of layered overlays</h1>
        <p cds-text="body">
          I am a demo showing how overlays can be placed or layered on top of one another. I am the overlay on the
          bottom layer.
        </p>
        <div cds-layout="horizontal gap:md wrap:none align:stretch">
          <cds-button block action="outline" type="button" @click=${hideParentOverlay}>Close Bottom Overlay</cds-button>
          <cds-button
            block
            type="button"
            @click=${() => {
              showMultiOverlay('child');
            }}
            >Show Child Overlay</cds-button
          >
        </div>
      </div>
    </cds-internal-overlay>
    <cds-internal-overlay hidden id="${multiChildOverlayId}">
      <div cds-layout="vertical gap:lg p:lg align:stretch" class="my-multi-overlay" style="width: 300px" tabindex="-1">
        <h1 cds-text="section" tabindex="-1">An overlay on top of another overlay</h1>
        <p cds-text="body">I am a demo of an overlay layered over another overlay!</p>
        <cds-button block status="danger" type="button" @click=${hideChildOverlay}>Close Top Overlay</cds-button>
      </div>
    </cds-internal-overlay>
  `;
};

export const firstFocus = () => {
  let initted = false;
  const overlayId = 'overlay-test-focus';

  function showOverlay() {
    const myOverlay = document.getElementById(overlayId) as CdsInternalOverlay;
    myOverlay.removeAttribute('hidden');

    if (!initted) {
      myOverlay.addEventListener('closeChange', () => {
        myOverlay.setAttribute('hidden', '');
      });
      initted = true;
    }
  }

  function hideOverlay() {
    const myOverlay = document.getElementById(overlayId) as CdsInternalOverlay;
    myOverlay.closeOverlay();
  }

  return html` <style>
      .my-overlay {
        background: white;
        border: 1px solid #565656;
        width: 480px;
        height: auto;
      }
    </style>
    <cds-button status="primary" type="button" @click=${showOverlay}>Show Overlay With Managed Focus</cds-button>
    <cds-internal-overlay hidden id="${overlayId}">
      <div cds-layout="vertical gap:lg p:lg align:stretch" class="my-overlay" tabindex="-1">
        <h1 cds-text="section">Overlay with <span tabindex="-1" cds-first-focus>first-focus</span></h1>
        <p cds-text="body">
          I am an overlay with focus assigned to an element inside me. I assigned first focus to my header. It is
          assigned focus when I am opened.
        </p>
        <cds-button block status="danger" type="button" @click=${hideOverlay}>Close Overlay</cds-button>
      </div>
    </cds-internal-overlay>`;
};

export const custom = () => {
  let initted = false;
  const purpleOverlayId = 'purple-overlay';
  const whiteOverlayId = 'white-overlay';
  const orangeOverlayId = 'orange-overlay';

  return html`
    <style>
      .my-multi-overlay {
        background: white;
        border: 1px solid #565656;
        width: 480px;
        height: auto;
      }

      .purple-overlay {
        --backdrop-background: purple;
      }

      .white-overlay {
        --layered-backdrop-background: hsla(0, 0%, 100%, 0.94);
      }

      .orange-overlay {
        --layered-backdrop-background: orange;
      }
    </style>

    <cds-demo popover>
      <cds-internal-overlay _demo-mode id="${purpleOverlayId}" class="purple-overlay">
        <div
          cds-layout="vertical gap:lg p:lg align:stretch"
          class="my-multi-overlay"
          style="width: 480px"
          tabindex="-1"
        >
          <h1 cds-text="section">I am a purple overlay</h1>
          <p cds-text="body">Hello, I am an overlay with a purple backdrop.</p>
          <div cds-layout="horizontal gap:md wrap:none align:stretch">
            <cds-button
              block
              type="button"
              @click=${() => {
                showCustomOverlay('white');
              }}
              >Show Next Overlay</cds-button
            >
          </div>
        </div>
      </cds-internal-overlay>
      <cds-internal-overlay _demo-mode hidden id="${whiteOverlayId}" class="white-overlay">
        <div cds-layout="vertical gap:lg p:lg align:stretch" class="my-multi-overlay" tabindex="-1">
          <h1 cds-text="section">I am whitish</h1>
          <p cds-text="body">Hello, I am an overlay with a mostly opaque white backdrop!</p>
          <div cds-layout="horizontal gap:md wrap:none align:stretch">
            <cds-button
              block
              action="outline"
              type="button"
              @click=${() => {
                hideCustomOverlay('white');
              }}
              >Hide This Overlay</cds-button
            >
            <cds-button
              block
              type="button"
              @click=${() => {
                showCustomOverlay('orange');
              }}
              >Show Next Overlay</cds-button
            >
          </div>
        </div>
      </cds-internal-overlay>
      <cds-internal-overlay _demo-mode hidden id="${orangeOverlayId}" class="orange-overlay">
        <div cds-layout="vertical gap:lg p:lg align:stretch" class="my-multi-overlay" tabindex="-1">
          <h1 cds-text="section" id="custom-demo-3-title">I am orange</h1>
          <p cds-text="body">Hello, I am an overlay with an opaque orange backdrop!</p>
          <cds-button
            block
            status="danger"
            type="button"
            @click=${() => {
              closeAllCustomOverlays();
            }}
            >Hide Top Two Overlays</cds-button
          >
        </div>
      </cds-internal-overlay>
    </cds-demo>
  `;

  function getOverlayByColor(color = 'purple'): HTMLElement {
    return document.getElementById(`${color}-overlay`);
  }

  function showCustomOverlay(overlayColor = 'purple') {
    getOverlayByColor(overlayColor).removeAttribute('hidden');

    if (!initted) {
      const whiteOverlay = document.getElementById(whiteOverlayId) as CdsInternalOverlay;
      whiteOverlay.shadowRoot.querySelector('.overlay-backdrop').classList.add('layered');
      whiteOverlay.addEventListener('closeChange', () => {
        whiteOverlay.setAttribute('hidden', '');
      });

      const orangeOverlay = document.getElementById(orangeOverlayId) as CdsInternalOverlay;
      orangeOverlay.shadowRoot.querySelector('.overlay-backdrop').classList.add('layered');
      orangeOverlay.addEventListener('closeChange', () => {
        orangeOverlay.setAttribute('hidden', '');
      });

      initted = true;
    }
  }

  function hideCustomOverlay(overlayColor = 'white') {
    (getOverlayByColor(overlayColor) as CdsInternalOverlay).closeOverlay();
  }

  function closeAllCustomOverlays() {
    const overlayColors = ['orange', 'white'];
    overlayColors.forEach(color => {
      (getOverlayByColor(color) as CdsInternalOverlay).closeOverlay();
    });
  }
};

export const overrideAnimation = () => {
  let initted = false;
  const overlayId = 'overlay-motion-override';

  function showOverrideOverlay() {
    const myOverlay = document.getElementById(overlayId) as CdsInternalOverlay;
    myOverlay.removeAttribute('hidden');

    if (!initted) {
      myOverlay.addEventListener('closeChange', () => {
        myOverlay.setAttribute('hidden', '');
      });
      myOverlay.addEventListener('cdsMotionChange', (e: any) => {
        console.log(e.detail);
      });
      initted = true;
    }
  }

  function hideOverrideOverlay() {
    const myOverlay = document.getElementById(overlayId) as CdsInternalOverlay;
    myOverlay.closeOverlay();
  }

  return html` <style>
      .my-overlay {
        background: white;
        border: 1px solid #565656;
        width: 480px;
        height: auto;
      }
    </style>
    <cds-button status="primary" type="button" @click=${showOverrideOverlay}>Show Custom Exit</cds-button>
    <cds-internal-overlay hidden id="${overlayId}" cds-motion='{ "hidden": { "true": "cds-modal-hinge-exit" } }'>
      <div cds-layout="vertical gap:lg p:lg align:stretch" class="my-overlay" tabindex="-1">
        <h1 cds-text="section">An overlay demo</h1>
        <p cds-text="body">I am an overlay.</p>
        <cds-button block status="danger" type="button" @click=${hideOverrideOverlay}>Close Overlay Demo</cds-button>
      </div>
    </cds-internal-overlay>`;
};

export const lowMotion = () => {
  let initted = false;
  const overlayId = 'overlay-low-motion';

  function showLowMotionOverlay() {
    const myOverlay = document.getElementById(overlayId) as CdsInternalOverlay;
    myOverlay.removeAttribute('hidden');

    if (!initted) {
      myOverlay.addEventListener('closeChange', () => {
        myOverlay.setAttribute('hidden', '');
      });
      myOverlay.addEventListener('cdsMotionChange', (e: any) => {
        console.log(e.detail);
      });
      initted = true;
    }
  }

  function hideLowMotionOverlay() {
    const myOverlay = document.getElementById(overlayId) as CdsInternalOverlay;
    myOverlay.closeOverlay();
  }

  return html` <style>
      .my-overlay {
        background: white;
        border: 1px solid #565656;
        width: 480px;
        height: auto;
      }
    </style>
    <div cds-theme="low-motion">
      <cds-button status="primary" type="button" @click=${showLowMotionOverlay}>Show Low Motion</cds-button>
      <cds-internal-overlay hidden id="${overlayId}" cds-motion="on">
        <div cds-layout="vertical gap:lg p:lg align:stretch" class="my-overlay" tabindex="-1">
          <h1 cds-text="section">An overlay demo</h1>
          <p cds-text="body">I am an overlay.</p>
          <cds-button block status="danger" type="button" @click=${hideLowMotionOverlay}
            >Close Low Motion Demo</cds-button
          >
        </div>
      </cds-internal-overlay>
    </div>`;
};
