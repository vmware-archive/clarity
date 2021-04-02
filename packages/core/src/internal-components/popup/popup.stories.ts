/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/button/register.js';
import '@cds/core/internal-components/popup/register.js';
import { CdsInternalPopup } from '@cds/core/internal-components/popup';
import { html } from 'lit';

export default {
  title: 'Internal Stories/Popup',
  component: 'cds-internal-popup',
  parameters: {
    options: { showPanel: true },
  },
};

export const test = () => {
  let initted = false;
  const popupId2 = 'ohai';
  const anchorId = 'yephai';

  function showOverlay() {
    const myAnchor = document.getElementById(anchorId);
    const myPopup = document.getElementById(popupId2) as CdsInternalPopup;

    myPopup.anchor = myAnchor;
    myPopup.removeAttribute('hidden');

    if (!initted) {
      myPopup.addEventListener('closeChange', () => {
        myPopup.setAttribute('hidden', '');
      });
      initted = true;
    }
  }

  return html` <cds-button id="${anchorId}" status="primary" type="button" @click=${showOverlay} popup="${popupId2}"
      >Show</cds-button
    >
    <cds-internal-popup hidden id="${popupId2}" aria-labelledby="${popupId2}-title" anchor="${anchorId}">
      <cds-internal-pointer></cds-internal-pointer>
      <div cds-layout="vertical gap:lg p:lg align:stretch">
        <h1 cds-text="section" id="${popupId2}-title">Popup</h1>
        <p cds-text="body">I am a popup.</p>
      </div>
    </cds-internal-popup>`;
};

export const scrollTest = () => {
  let initted = false;
  const popupId2 = 'scrollhai';
  const anchorId = 'scrollhey';

  function showScrollingPopup() {
    const myAnchor = document.getElementById(anchorId);
    const myPopup = document.getElementById(popupId2) as CdsInternalPopup;

    myPopup.anchor = myAnchor;
    myPopup.removeAttribute('hidden');

    if (!initted) {
      myPopup.addEventListener('closeChange', () => {
        myPopup.setAttribute('hidden', '');
      });
      initted = true;
    }
  }

  return html` <cds-button
      id="${anchorId}"
      status="primary"
      type="button"
      @click=${showScrollingPopup}
      popup="${popupId2}"
      >Show Scrolling Popup</cds-button
    >
    <cds-internal-popup hidden id="${popupId2}" aria-labelledby="${popupId2}-title">
      <div cds-layout="vertical gap:lg p:lg align:stretch">
        <h1 cds-text="section" id="${popupId2}-title">Popup</h1>
        <p cds-text="body">I am a popup.</p>
        <p cds-text="body">I am a popup.</p>
        <p cds-text="body">I am a popup.</p>
        <p cds-text="body">I am a popup.</p>
        <p cds-text="body">I am a popup.</p>
        <p cds-text="body">I am a popup.</p>
        <p cds-text="body">I am a popup.</p>
        <p cds-text="body">I am a popup.</p>
        <p cds-text="body">I am a popup.</p>
        <p cds-text="body">I am a popup.</p>
        <p cds-text="body">I am a popup.</p>
        <p cds-text="body">I am a popup.</p>
        <p cds-text="body">I am a popup.</p>
        <p cds-text="body">I am a popup.</p>
        <p cds-text="body">I am a popup.</p>
        <p cds-text="body">I am a popup.</p>
        <p cds-text="body">I am a popup.</p>
        <p cds-text="body">I am a popup.</p>
        <p cds-text="body">
          I am a popup. I am a popup. I am a popup. I am a popup. I am a popup. I am a popup. I am a popup. I am a
          popup. I am a popup. I am a popup. I am a popup. I am a popup. I am a popup.
        </p>
      </div>
    </cds-internal-popup>`;
};

export const responsiveTest = () => {
  let initted = false;
  const popupId2 = 'resposivehai';
  const anchorId = 'responsivehey';

  function showScrollingPopup() {
    const myAnchor = document.getElementById(anchorId);
    const myPopup = document.getElementById(popupId2) as CdsInternalPopup;

    myPopup.anchor = myAnchor;
    myPopup.removeAttribute('hidden');

    if (!initted) {
      myPopup.addEventListener('closeChange', () => {
        myPopup.setAttribute('hidden', '');
      });
      initted = true;
    }
  }

  return html` <cds-button
      id="${anchorId}"
      status="primary"
      type="button"
      @click=${showScrollingPopup}
      popup="${popupId2}"
      >Show Responsive Popup</cds-button
    >
    <cds-internal-popup hidden id="${popupId2}" aria-labelledby="${popupId2}-title" orientation="none">
      <div cds-layout="vertical gap:lg p:lg align:stretch">
        <h1 cds-text="section" id="${popupId2}-title">Responsive Popup</h1>
        <p cds-text="body">I am a popup.</p>
        <p cds-text="body">I am a popup.</p>
        <p cds-text="body">I am a popup.</p>
        <p cds-text="body">I am a popup.</p>
        <p cds-text="body">I am a popup.</p>
        <p cds-text="body">I am a popup.</p>
        <p cds-text="body">I am a popup.</p>
        <p cds-text="body">I am a popup.</p>
        <p cds-text="body">I am a popup.</p>
        <p cds-text="body">I am a popup.</p>
        <p cds-text="body">I am a popup.</p>
        <p cds-text="body">I am a popup.</p>
        <p cds-text="body">I am a popup.</p>
        <p cds-text="body">I am a popup.</p>
        <p cds-text="body">I am a popup.</p>
        <p cds-text="body">I am a popup.</p>
        <p cds-text="body">I am a popup.</p>
        <p cds-text="body">I am a popup.</p>
        <p cds-text="body">
          I am a popup. I am a popup. I am a popup. I am a popup. I am a popup. I am a popup. I am a popup. I am a
          popup. I am a popup. I am a popup. I am a popup. I am a popup. I am a popup.
        </p>
      </div>
    </cds-internal-popup>`;
};
