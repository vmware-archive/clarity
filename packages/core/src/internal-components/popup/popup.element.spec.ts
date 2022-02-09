/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement, PropertyValues } from 'lit';
import { query } from 'lit/decorators/query.js';
import { customElement } from 'lit/decorators/custom-element.js';
import '@cds/core/internal-components/popup/register.js';
import '@cds/core/internal-components/close-button/register.js';
import { CdsInternalPopup } from './popup.element.js';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';

@customElement('popup-test-default')
class PopupTestDefault extends LitElement {
  @query('cds-internal-popup') popup: CdsInternalPopup;

  render() {
    return html`<cds-internal-popup>hallo</cds-internal-popup>`;
  }
}

@customElement('popup-test-basic')
class PopupTestBasic extends LitElement {
  @query('cds-internal-popup') popup: CdsInternalPopup;
  @query('.testAnchor') anchor: HTMLElement;

  testAnchorId = 'my-anchor';

  firstUpdated(props: PropertyValues<this>) {
    super.firstUpdated(props);
    this.popup.container = this;
  }

  render() {
    return html`<div class="testAnchor" id="${this.testAnchorId}" style="width: 150px; height: 30px;">ohai</div>
      <cds-internal-popup>hallo</cds-internal-popup>`;
  }
}

@customElement('popup-test-anchors')
class PopupTestAnchors extends LitElement {
  @query('cds-internal-popup') popup: CdsInternalPopup;
  @query('.testAnchor-1') anchorOne: HTMLElement;
  @query('.testAnchor-2') anchorTwo: HTMLElement;

  testAnchorOneId = 'anchor-one';
  testAnchorTwoId = 'anchor-two';

  firstUpdated(props: PropertyValues<this>) {
    super.firstUpdated(props);
    this.popup.container = this;
  }

  render() {
    return html` <div class="testAnchor-1" id="${this.testAnchorOneId}">ohai</div>
      <div class="testAnchor-2" id="${this.testAnchorTwoId}">howdy</div>
      <cds-internal-popup anchor="${this.testAnchorOneId}">hallo</cds-internal-popup>`;
  }
}

describe('default: ', () => {
  let testElement: HTMLElement;
  let popupWrapper: PopupTestDefault;
  let popup: CdsInternalPopup;

  beforeEach(async () => {
    testElement = await createTestElement(html`<popup-test-default></popup-test-default>`);
    popupWrapper = testElement.querySelector<PopupTestDefault>('popup-test-default');
    await componentIsStable(popupWrapper);
    popup = popupWrapper.popup;
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('cdsMotion', () => {
    expect(popup.cdsMotion).toBe('on');
  });

  it('anchorAlign', () => {
    expect(popup.anchorAlign).toBe('start');
  });

  it('pointerAlign', () => {
    expect(popup.pointerAlign).toBe('start');
  });

  it('host wrapper', () => {
    expect(popup.hostWrapper).not.toBeNull();
  });

  it('popup container', () => {
    expect(popup.popupWrapper).not.toBeNull();
  });

  it('popup content', () => {
    expect(popup.contentWrapper).not.toBeNull();
  });

  it('anchor', () => {
    expect(popup.anchor).toBeUndefined('anchor string property should default to undefined');
  });

  it('anchorElement', () => {
    expect(popup.anchorElement).toBeUndefined(
      'anchorElement falls through with default, undefined anchor string property'
    );
  });

  it('container', () => {
    expect(popup.container).not.toBeDefined();
  });
});

describe('anchor: ', () => {
  let testElement: HTMLElement;
  let popupWrapper: PopupTestAnchors;
  let popup: CdsInternalPopup;

  beforeEach(async () => {
    testElement = await createTestElement(
      html`<popup-test-anchors></popup-test-anchors>
        <div id="hallo">ohai</div>`
    );
    popupWrapper = testElement.querySelector<PopupTestAnchors>('popup-test-anchors');
    popup = popupWrapper.popup;
    await componentIsStable(popup);
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('anchorElement should be set', async () => {
    await componentIsStable(popup);
    expect(popup.anchorElement).toBe(popupWrapper.anchorOne);
  });

  it('should allow for an anchor to be set directly', async () => {
    popup.anchor = popupWrapper.anchorTwo;
    await componentIsStable(popup);
    popup.hidden = false;
    await componentIsStable(popup);
    expect(popup.anchorElement).toEqual(popupWrapper.anchorTwo);
    expect(popup.anchor.id as string).toEqual(popupWrapper.testAnchorTwoId);
  });

  it('should handle an id to be sent', async () => {
    const otherId = 'hallo';
    const otherAnchorElement = testElement.querySelector('#' + otherId);
    popup.setAttribute('anchor', otherId);
    await componentIsStable(popup);
    expect(popup.anchor).toBe(otherId, 'the id is set');
    expect(popup.anchorElement).toBe((otherAnchorElement as unknown) as HTMLElement, 'the anchor element is set too');
  });
});

describe('anchorRect: ', () => {
  let testElement: HTMLElement;
  let popupWrapper: PopupTestBasic;
  let popup: CdsInternalPopup;

  beforeEach(async () => {
    testElement = await createTestElement(html`<popup-test-basic></popup-test-basic>`);
    popupWrapper = testElement.querySelector<PopupTestBasic>('popup-test-basic');
    popup = popupWrapper.popup;
    await componentIsStable(popup);
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should return bounding rect if has anchor', async () => {
    popup.anchor = popupWrapper.testAnchorId;
    await componentIsStable(popup);
    const anchorRect = popup.anchorRect;

    expect(popup.anchorElement).not.toBeNull('we have an anchor element');

    // test out the anchor's DOMRect
    expect(anchorRect.width).toBe(150, 'test width');
    expect(anchorRect.height).toBe(30, 'test height');
  });

  it('should return zeroed out bounding rect if no anchor rect', () => {
    expect(popup.anchorElement).toBeUndefined('there is no anchor element');
    expect(popup.anchorRect).toEqual(new DOMRect(), 'returns zeroed out DOMRect');
  });
});

describe('closable: ', () => {
  let testElement: HTMLElement;
  let popup: CdsInternalPopup;

  beforeEach(async () => {
    testElement = await createTestElement(html`<cds-internal-popup closable>ohai</cds-internal-popup>`);
    popup = testElement.querySelector<CdsInternalPopup>('cds-internal-popup');
    await componentIsStable(popup);
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should only have one close button despite closable being toggled', async () => {
    const root = popup.shadowRoot;
    expect(popup.hasAttribute('closable')).toBe(true, 'popup is closable');
    const firstTest = root.querySelectorAll('cds-internal-close-button');
    expect(firstTest.length).toBe(1, 'has only one close button (1 of 3)');

    popup.hidden = true;
    await componentIsStable(popup);
    const secondTest = root.querySelectorAll('cds-internal-close-button');
    expect(secondTest.length).toBe(1, 'has only one close button (2 of 3)');

    popup.hidden = false;
    await componentIsStable(popup);
    const thirdTest = root.querySelectorAll('cds-internal-close-button');
    expect(thirdTest.length).toBe(1, 'has only one close button (3 of 3)');
  });

  it('should only have one close button despite hidden being toggled', async () => {
    expect(popup.hasAttribute('closable')).toBe(true, 'popup is closable');

    popup.hidden = true;
    await componentIsStable(popup);

    popup.hidden = false;
    await componentIsStable(popup);

    popup.hidden = true;
    await componentIsStable(popup);

    const test = popup.shadowRoot.querySelectorAll('cds-internal-close-button');
    expect(test.length).toBe(1, 'has only one close button');
  });

  it('should always have a close button if responsive', async () => {
    const root = popup.shadowRoot;
    expect(popup.hasAttribute('closable')).toBe(true, 'popup is closable');

    popup.closable = false; // remove close button
    await componentIsStable(popup);
    popup.hidden = false;
    await componentIsStable(popup);

    const firstTest = root.querySelectorAll('cds-internal-close-button');
    expect(firstTest.length).toBe(0, 'should have no close buttons');

    popup.hidden = true;
    await componentIsStable(popup);

    popup.closable = false;
    popup.orientation = 'none'; // forces responsive
    await componentIsStable(popup);
    popup.hidden = false;
    await componentIsStable(popup);

    const test = root.querySelectorAll('cds-internal-close-button');
    expect(test.length).toBe(1, 'has only one close button');
  });
});
