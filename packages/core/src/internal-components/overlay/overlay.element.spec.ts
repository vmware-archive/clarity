/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { html, LitElement } from 'lit';
import { query } from 'lit/decorators/query.js';
import '@cds/core/internal-components/overlay/register.js';
import { CdsInternalOverlay, isNestedOverlay, overlayIsActive } from '@cds/core/internal-components/overlay';
import { componentIsStable, createTestElement, emulatedClick, onceEvent, removeTestElement } from '@cds/core/test';
import { customElement, FocusTrapTrackerService, property } from '@cds/core/internal';

describe('Overlay helper functions: ', () => {
  describe('isNestedOverlay() - ', () => {
    it('return true if overlay id is present and it is not the first id', () => {
      expect(isNestedOverlay('ohai_3', 'ohai_', ['ohai_1', 'ohai_2', 'ohai_3'])).toBe(true, 'last one checks');
      expect(isNestedOverlay('ohai_2', 'ohai_', ['ohai_1', 'ohai_2', 'ohai_3'])).toBe(true, 'middle one checks');
    });

    // this situation happens during an update loop when the focus trap list is updated just
    // prior to the rest of the component and the component still needs to think of itself as
    // "nested" or "layered". a good example is running an exit animation asynchronously
    // outside of the update loop.
    it('should return true if id is not present and it was previously present', () => {
      expect(isNestedOverlay('ohai_2', 'ohai_', ['abcd', 'ohai_1', 'efgh', 'ijkl'], true)).toBe(true);
    });

    it('should ignore non-prefixed ids', () => {
      expect(isNestedOverlay('ohai_2', 'ohai_', ['abcd', 'ohai_1', 'efgh', 'ijkl', 'ohai_2'])).toBe(true);
    });

    it('should return false if id is not present', () => {
      expect(isNestedOverlay('ohai_2', 'ohai_', ['abcd', 'ohai_1', 'efgh', 'ijkl'])).toBe(false);
    });

    it('should return false if id is not present and it was previously not present', () => {
      expect(isNestedOverlay('ohai_2', 'ohai_', ['abcd', 'ohai_1', 'efgh', 'ijkl'], false)).toBe(false);
    });

    it('should return false if id is first in the list', () => {
      expect(isNestedOverlay('ohai_1', 'ohai_', ['ohai_1', 'efgh', 'ijkl', 'ohai_2', 'ohai_3'])).toBe(false);
    });

    it('should return false if list has no overlays', () => {
      expect(isNestedOverlay('ohai_1', 'ohai_', ['abcd', 'efgh', 'ijkl'])).toBe(false);
    });

    it('should return false if list is empty', () => {
      expect(isNestedOverlay('ohai_1', 'ohai_', [])).toBe(false);
    });
  });

  describe('overlayIsActive - ', () => {
    let overlayElement: HTMLElement;
    let overlay: CdsInternalOverlay;

    beforeEach(async () => {
      overlayElement = await createTestElement(
        html`<cds-internal-overlay id="rootOverlay"
          >Placeholder<cds-internal-overlay id="secondOverlay">Ohai</cds-internal-overlay
          ><cds-internal-overlay id="thirdOverlay">Kthxbye</cds-internal-overlay></cds-internal-overlay
        >`
      );
      overlay = overlayElement.querySelector<CdsInternalOverlay>('#thirdOverlay');
    });

    afterEach(() => {
      removeTestElement(overlayElement);
    });

    it('identifies top-most overlay', async () => {
      const elements = FocusTrapTrackerService.getTrapElements();
      await componentIsStable(overlay);

      expect(overlayIsActive(elements.pop().focusTrapId)).toBe(true, 'the top overly is active');
      elements.forEach(item => expect(overlayIsActive(item.focusTrapId)).toBe(false, 'a hidden overlay is not active'));
    });
  });
});

describe('Overlay element: ', () => {
  let testElement: HTMLElement;
  let component: CdsInternalOverlay;
  const placeholderText = 'Placeholder';

  beforeEach(async () => {
    testElement = await createTestElement(html`<cds-internal-overlay>${placeholderText}</cds-internal-overlay>`);
    component = testElement.querySelector<CdsInternalOverlay>('cds-internal-overlay');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  describe('the basics - ', () => {
    it('should create the component', async () => {
      await componentIsStable(component);
      expect(component.innerText.includes(placeholderText)).toBe(true);
    });

    it('should have a focusTrapId', async () => {
      await componentIsStable(component);
      expect(component.getFocusTrapId()).toBeDefined();
    });

    it('should have its focusTrapId prefixed', async () => {
      await componentIsStable(component);
      expect(component.getFocusTrapId().indexOf('_overlay-') > -1).toBe(true);
    });

    it('inner panel should exist', async () => {
      await componentIsStable(component);
      const innerPanel = component.shadowRoot.querySelector('.private-host');
      expect(innerPanel).toBeTruthy('inner panel should exist');
    });
  });

  describe('the backdrop - ', () => {
    it('should have a backdrop and backdrop should have aria-hidden true', async () => {
      await componentIsStable(component);
      const backdrop = component.shadowRoot.querySelector('.overlay-backdrop');
      expect(backdrop).not.toBeNull('backdrop exists!');
      expect(backdrop.getAttribute('aria-hidden')).toBe('true', 'backdrop has aria-hidden set');
    });
  });
});

describe('Overlay behaviors: ', () => {
  let testElement: HTMLElement;
  let component: CdsInternalOverlay;
  const placeholderText = 'Placeholder';

  beforeEach(async () => {
    testElement = await createTestElement(html`<cds-internal-overlay>${placeholderText}</cds-internal-overlay>`);
    component = testElement.querySelector<CdsInternalOverlay>('cds-internal-overlay');
    await componentIsStable(component);
    component.closable = true;
    component.hidden = false;
    await componentIsStable(component);
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  describe('closeOverlay() - ', () => {
    it('should default to a value of "custom"', async () => {
      const eventPromise = onceEvent(component, 'closeChange');
      component.closeOverlay();
      await componentIsStable(component);
      const event = await eventPromise;
      expect(event.detail).toBe('custom');
    });
  });

  describe('escape key - ', () => {
    it('should alert if escape key pressed', async () => {
      const eventPromise = onceEvent(component, 'closeChange');
      component.dispatchEvent(new KeyboardEvent('keyup', { code: 'Escape' }));
      await componentIsStable(component);
      const event = await eventPromise;
      expect(event.detail).toBe('escape-keypress');
    });
  });

  describe('backdrop click - ', () => {
    it('should alert if the backdrop was clicked', async () => {
      const eventPromise = onceEvent(component, 'closeChange');
      const backdrop = component.shadowRoot.querySelector<HTMLElement>('.overlay-backdrop');
      emulatedClick(backdrop);
      await componentIsStable(component);
      const event = await eventPromise;
      expect(event.detail).toBe('backdrop-click');
    });
  });
});

@customElement('nested-overlay-test-component')
class NestedOverlayTestComponent extends LitElement {
  @query('cds-internal-overlay') overlay: CdsInternalOverlay;

  @property({ type: String })
  overlayId: string;

  firstUpdated(props: Map<string, any>) {
    super.firstUpdated(props);
    this.overlay.addEventListener<any>('closeChange', () => {
      this.overlay.hidden = true;
    });
  }

  render() {
    return html`<cds-internal-overlay id=${this.overlayId}><slot></slot></cds-internal-overlay>`;
  }
}

describe('Nested overlays: ', () => {
  let testElement: HTMLElement;
  let firstOverlay: CdsInternalOverlay;
  let secondOverlay: CdsInternalOverlay;
  let thirdOverlay: CdsInternalOverlay;
  const placeholderText = 'Placeholder';

  beforeEach(async () => {
    testElement = await createTestElement(
      html`<nested-overlay-test-component id="root" overlay-id="rootOverlay"
        >${placeholderText}<nested-overlay-test-component id="second" overlay-id="secondOverlay"
          >Ohai</nested-overlay-test-component
        ><nested-overlay-test-component id="third" overlay-id="thirdOverlay"
          >Kthxbye</nested-overlay-test-component
        ></nested-overlay-test-component
      >`
    );
    firstOverlay = testElement.querySelector<NestedOverlayTestComponent>('#root').overlay;
    secondOverlay = testElement.querySelector<NestedOverlayTestComponent>('#second').overlay;
    thirdOverlay = testElement.querySelector<NestedOverlayTestComponent>('#third').overlay;
    await componentIsStable(thirdOverlay);

    // open overlays sequentially
    firstOverlay.hidden = false;
    await componentIsStable(firstOverlay);

    secondOverlay.hidden = false;
    await componentIsStable(secondOverlay);

    thirdOverlay.hidden = false;
    await componentIsStable(thirdOverlay);
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  describe('backdrops - ', () => {
    it('non-root overlays should have "layered" classnames on backdrops', () => {
      const rootBackdrop = firstOverlay.shadowRoot.querySelector('.overlay-backdrop');
      const secondBackdrop = secondOverlay.shadowRoot.querySelector('.overlay-backdrop');
      const thirdBackdrop = thirdOverlay.shadowRoot.querySelector('.overlay-backdrop');
      expect(rootBackdrop.classList.contains('layered')).toBe(false, 'root does NOT have layered classname');
      expect(secondBackdrop.classList.contains('layered')).toBe(true, 'has layered classname (1)');
      expect(thirdBackdrop.classList.contains('layered')).toBe(true, 'has layered classname (2)');
    });

    it('clicks should only apply to topmost overlay', async () => {
      let thirdOverlayCheck = 'a';
      let secondOverlayCheck = 'a';
      thirdOverlay.addEventListener('closeChange', () => {
        thirdOverlayCheck = 'b';
      });
      await componentIsStable(thirdOverlay);
      secondOverlay.addEventListener('closeChange', () => {
        secondOverlayCheck = 'b';
      });
      await componentIsStable(secondOverlay);

      const secondBackdrop = secondOverlay.shadowRoot.querySelector<HTMLElement>('.overlay-backdrop');
      const thirdBackdrop = thirdOverlay.shadowRoot.querySelector<HTMLElement>('.overlay-backdrop');

      const eventPromiseOne = onceEvent(thirdOverlay, 'closeChange');
      emulatedClick(thirdBackdrop);
      await componentIsStable(thirdOverlay);
      const eventOne = await eventPromiseOne;
      expect(eventOne.detail).toBe('backdrop-click');
      expect(thirdOverlayCheck).toBe('b', 'top backdrop clicked');
      expect(secondOverlayCheck).toBe('a', 'other overlay not affected by top backdrop click');
      const eventPromiseTwo = onceEvent(secondOverlay, 'closeChange');
      emulatedClick(secondBackdrop);
      await componentIsStable(secondOverlay);
      const eventTwo = await eventPromiseTwo;
      expect(eventTwo.detail).toBe('backdrop-click');
      expect(secondOverlayCheck).toBe('b', 'next backdrop clicked');
    });
  });

  describe('escape key - ', () => {
    it('should only apply to topmost overlay', async () => {
      let thirdOverlayCheck = 'a';
      let secondOverlayCheck = 'a';
      let firstOverlayCheck = 'a';
      thirdOverlay.addEventListener('closeChange', () => {
        thirdOverlayCheck = 'b';
      });
      await componentIsStable(thirdOverlay);
      secondOverlay.addEventListener('closeChange', () => {
        secondOverlayCheck = 'b';
      });
      await componentIsStable(secondOverlay);
      firstOverlay.addEventListener('closeChange', () => {
        firstOverlayCheck = 'b';
      });
      await componentIsStable(firstOverlay);
      const eventPromise = onceEvent(thirdOverlay, 'closeChange');
      thirdOverlay.dispatchEvent(new KeyboardEvent('keyup', { code: 'Escape' }));
      await componentIsStable(thirdOverlay);
      const event = await eventPromise;
      expect(event.detail).toBe('escape-keypress');
      expect(thirdOverlayCheck).toBe('b');
      expect(secondOverlayCheck).toBe('a');
      expect(firstOverlayCheck).toBe('a');
    });
  });

  describe('dismissing - ', () => {
    it('escape key should walk down the layers', async () => {
      const eventPromiseOne = onceEvent(thirdOverlay, 'closeChange');
      thirdOverlay.dispatchEvent(new KeyboardEvent('keyup', { code: 'Escape' }));
      await componentIsStable(thirdOverlay);
      const eventOne = await eventPromiseOne;
      expect(eventOne.detail).toBe('escape-keypress');
      expect(firstOverlay.hasAttribute('hidden')).toBe(false, 'only top-most overlay is removed (A1)');
      expect(secondOverlay.hasAttribute('hidden')).toBe(false, 'only top-most overlay is removed (A2)');
      expect(thirdOverlay.hasAttribute('hidden')).toBe(true, 'only top-most overlay is removed (A3)');
      const eventPromiseTwo = onceEvent(secondOverlay, 'closeChange');
      secondOverlay.dispatchEvent(new KeyboardEvent('keyup', { code: 'Escape' }));
      await componentIsStable(secondOverlay);
      const eventTwo = await eventPromiseTwo;
      expect(eventTwo.detail).toBe('escape-keypress');
      expect(firstOverlay.hasAttribute('hidden')).toBe(false, 'only top-most overlay is removed (B1)');
      expect(secondOverlay.hasAttribute('hidden')).toBe(true, 'only top-most overlay is removed (B2)');
      expect(thirdOverlay.hasAttribute('hidden')).toBe(true, 'only top-most overlay is removed (B3)');
      const eventPromiseThree = onceEvent(firstOverlay, 'closeChange');
      firstOverlay.dispatchEvent(new KeyboardEvent('keyup', { code: 'Escape' }));
      await componentIsStable(firstOverlay);
      const eventThree = await eventPromiseThree;
      expect(eventThree.detail).toBe('escape-keypress');
      expect(firstOverlay.hasAttribute('hidden')).toBe(true, 'only top-most overlay is removed (C1)');
      expect(secondOverlay.hasAttribute('hidden')).toBe(true, 'only top-most overlay is removed (C2)');
      expect(thirdOverlay.hasAttribute('hidden')).toBe(true, 'only top-most overlay is removed (C3)');
    });

    it('backdrop click should walk down the layers', async () => {
      await componentIsStable(firstOverlay);
      const rootBackdrop = firstOverlay.shadowRoot.querySelector<HTMLElement>('.overlay-backdrop');
      const secondBackdrop = secondOverlay.shadowRoot.querySelector<HTMLElement>('.overlay-backdrop');
      const thirdBackdrop = thirdOverlay.shadowRoot.querySelector<HTMLElement>('.overlay-backdrop');

      function backdropClick(e: CustomEvent) {
        (e.target as HTMLElement).setAttribute('hidden', 'true');
      }

      firstOverlay.addEventListener<any>('closeChange', backdropClick);
      secondOverlay.addEventListener<any>('closeChange', backdropClick);
      thirdOverlay.addEventListener<any>('closeChange', backdropClick);

      emulatedClick(rootBackdrop);
      await componentIsStable(firstOverlay);
      emulatedClick(secondBackdrop);
      await componentIsStable(secondOverlay);
      emulatedClick(thirdBackdrop);
      await componentIsStable(thirdOverlay);

      expect(firstOverlay.hasAttribute('hidden')).toBe(false, 'only top-most overlay is removed (A1)');
      expect(secondOverlay.hasAttribute('hidden')).toBe(false, 'only top-most overlay is removed (A2)');
      expect(thirdOverlay.hasAttribute('hidden')).toBe(true, 'only top-most overlay is removed (A3)');

      emulatedClick(rootBackdrop);
      await componentIsStable(firstOverlay);
      emulatedClick(secondBackdrop);
      await componentIsStable(secondOverlay);

      expect(firstOverlay.hasAttribute('hidden')).toBe(false, 'only top-most overlay is removed (B1)');
      expect(secondOverlay.hasAttribute('hidden')).toBe(true, 'only top-most overlay is removed (B2)');
      expect(thirdOverlay.hasAttribute('hidden')).toBe(true, 'only top-most overlay is removed (B3)');

      emulatedClick(rootBackdrop);
      await componentIsStable(firstOverlay);
      emulatedClick(secondBackdrop);
      await componentIsStable(secondOverlay);
      emulatedClick(thirdBackdrop);
      await componentIsStable(thirdOverlay);

      expect(firstOverlay.hasAttribute('hidden')).toBe(true, 'only top-most overlay is removed (C1)');
      expect(secondOverlay.hasAttribute('hidden')).toBe(true, 'only top-most overlay is removed (C2)');
      expect(thirdOverlay.hasAttribute('hidden')).toBe(true, 'only top-most overlay is removed (C3)');
    });
  });
});
