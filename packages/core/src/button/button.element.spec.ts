/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import { CdsButton, ClrLoadingState } from '@clr/core/button';
import '@clr/core/badge/register.js';
import '@clr/core/button/register.js';
import { componentIsStable, createTestElement, getComponentSlotContent, removeTestElement } from '@clr/core/test/utils';

describe('button element', () => {
  let testElement: HTMLElement;
  let component: CdsButton;
  const placeholderText = 'Button Placeholder';

  beforeEach(async () => {
    testElement = await createTestElement(html`
      <form>
        <cds-button>
          <span>${placeholderText}</span>
        </cds-button>
      </form>
    `);

    component = testElement.querySelector<CdsButton>('cds-button');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create the component', async () => {
    await componentIsStable(component);
    expect(component.innerText).toBe(placeholderText.toUpperCase());
  });

  describe('Button Behaviors', () => {
    it('should render a hidden button', async () => {
      await componentIsStable(component);
      const button = component.querySelector('button');
      expect(button).toBeDefined();
      expect(button.hasAttribute('aria-hidden')).toBe(true);
      expect(button.getAttribute('aria-hidden')).toBe('true');
    });

    it('should have a tab index of 0 to be able to focus', async () => {
      expect(component.getAttribute('tabindex')).toBe('0');
    });

    it('should have a role of type button', async () => {
      await componentIsStable(component);
      expect(component.getAttribute('role')).toBe('button');
    });

    it('should remove button from tab index and set aria-disabled if disabled', async () => {
      await componentIsStable(component);
      expect(component.getAttribute('tabindex')).toBe('0');
      expect(component.getAttribute('aria-disabled')).toBe('false');

      component.disabled = true;
      await componentIsStable(component);
      expect(component.hasAttribute('disabled')).toBe(true);
      expect(component.getAttribute('tabindex')).toBe('-1');
      expect(component.getAttribute('aria-disabled')).toBe('true');
    });

    it('should work with form elements when clicked', async done => {
      await componentIsStable(component);
      testElement.querySelector('form').addEventListener('submit', e => {
        e.preventDefault();
        expect(true).toBe(true);
        done();
      });

      component.click();
    });

    it('should work with form elements when clicked via keyboard', async done => {
      await componentIsStable(component);
      testElement.querySelector('form').addEventListener('submit', e => {
        e.preventDefault();
        expect(true).toBe(true);
        done();
      });

      const event = new KeyboardEvent('keydown', { key: 'Enter' });
      component.focus();
      component.dispatchEvent(event);
    });

    it('should not interact with form elements if disabled (1)', async () => {
      component.disabled = true;
      await componentIsStable(component);
      const o = {
        f: () => {
          // Do nothing
        },
      };
      spyOn(o, 'f');
      testElement.querySelector('form').addEventListener('submit', o.f);
      expect(o.f).not.toHaveBeenCalled();
    });

    it('should not interact with form elements if disabled (2)', async () => {
      component.ariaDisabled = 'true';
      await componentIsStable(component);
      const o = {
        f: () => {
          // Do nothing
        },
      };
      spyOn(o, 'f');
      testElement.querySelector('form').addEventListener('submit', o.f);
      expect(o.f).not.toHaveBeenCalled();
    });

    it('should prevent click when readonly or disabled (1)', async () => {
      await componentIsStable(component);
      expect(component.getAttribute('disabled')).toBe(null);

      component.disabled = true;
      await componentIsStable(component);
      expect(component.getAttribute('disabled')).toBe('');
    });

    it('should prevent click when readonly or disabled (2)', async () => {
      await componentIsStable(component);
      expect(component.getAttribute('aria-disabled')).toBe('false');

      component.ariaDisabled = 'true';
      await componentIsStable(component);
      expect(component.getAttribute('disabled')).toBe('');
    });
  });

  describe('Readonly Button Behaviors', () => {
    beforeEach(async () => {
      component.readonly = true;
    });

    afterEach(() => {
      component.readonly = false;
    });

    // todo fix, the button does not get removed properly
    // when not within an Angular zone context
    xit('should not render a hidden button if readonly', async () => {
      await componentIsStable(component);
      const button = component.querySelector('button');
      expect(button).toBeNull();
    });

    it('should not have a tabIndex attribute', async () => {
      await componentIsStable(component);
      expect(component.getAttribute('tabindex')).toBeNull();
    });

    it('should not have a role attribute', async () => {
      await componentIsStable(component);
      expect(component.getAttribute('role')).toBeNull();
    });
  });

  describe('LoadingStateChange', () => {
    it('should fallback to default state as expected', async () => {
      await componentIsStable(component);
      component.loadingState = null;
      await componentIsStable(component);
      expect(component.loadingState).toEqual(ClrLoadingState.DEFAULT);
      expect(component.hasAttribute('disabled')).toEqual(false);
      expect(component.style.getPropertyValue('width')).toBe('');
    });

    it('should set default state as expected', async () => {
      await componentIsStable(component);
      component.loadingState = ClrLoadingState.DEFAULT;
      await componentIsStable(component);
      expect(component.hasAttribute('disabled')).toEqual(false);
      expect(component.getAttribute('aria-disabled')).toEqual('false');
      expect(component.style.getPropertyValue('width')).toBe('');
    });

    it('should set loading state as expected', async () => {
      await componentIsStable(component);
      const size = component.getBoundingClientRect().width;
      component.loadingState = ClrLoadingState.LOADING;
      await componentIsStable(component);

      // I'm getting 152.016px and 152.015625px, so the test fails without rounding
      expect(component.getBoundingClientRect().width.toFixed(3)).toEqual(size.toFixed(3));
      expect(component.hasAttribute('disabled')).toEqual(true);
      expect(component.getAttribute('aria-disabled')).toEqual('true');
    });

    it('should set success state as expected', async () => {
      await componentIsStable(component);
      const size = component.getBoundingClientRect().width;

      component.loadingState = ClrLoadingState.SUCCESS;
      await componentIsStable(component);

      expect(component.getBoundingClientRect().width.toFixed(3)).toEqual(size.toFixed(3));
      expect(component.hasAttribute('disabled')).toEqual(true);
      expect(component.getAttribute('aria-disabled')).toEqual('true');
    });

    it('should set error state as expected', async () => {
      await componentIsStable(component);
      const size = component.getBoundingClientRect().width;

      component.loadingState = ClrLoadingState.ERROR;
      await componentIsStable(component);

      expect(component.getBoundingClientRect().width.toFixed(3)).toEqual(size.toFixed(3));
      expect(component.hasAttribute('disabled')).toEqual(true);
      expect(component.getAttribute('aria-disabled')).toEqual('true');
    });
  });

  describe('Button link', () => {
    let testLinkElement: HTMLElement;
    let componentLink: CdsButton;
    let componentButton: CdsButton;
    let anchor: HTMLAnchorElement;
    let anchorButton: HTMLAnchorElement;

    beforeEach(async () => {
      testLinkElement = await createTestElement(html`
        <cds-button><a href="about">About</a></cds-button>
        <!-- deprecated 4.0 in favor of wrapping -->
        <cds-button>About</cds-button>
        <a href="about"><cds-button>About</cds-button></a>
      `);

      componentLink = testLinkElement.querySelectorAll<CdsButton>('cds-button')[0];
      componentButton = testLinkElement.querySelectorAll<CdsButton>('cds-button')[1];
      anchor = componentLink.querySelector<HTMLAnchorElement>('a');
      anchorButton = testLinkElement.querySelectorAll<HTMLAnchorElement>('a')[1];
    });

    afterEach(() => {
      removeTestElement(testLinkElement);
    });

    it('should render a link properly', async () => {
      await componentIsStable(componentLink);
      expect(componentLink).toBeTruthy();
      expect(componentLink.innerText).toBe('ABOUT');

      expect(anchorButton.style.lineHeight).toBe('0');
      expect(anchorButton.style.textDecoration).toBe('none');
    });

    it('should set button to be readonly', async () => {
      await componentIsStable(componentLink);
      expect(componentLink.readonly).toBe(true);
      expect(anchorButton.querySelector('cds-button').readonly).toBe(true);
    });

    it('should apply host focus styles when link is in focus', async () => {
      anchor.dispatchEvent(new Event('focusin'));
      await componentIsStable(componentLink);
      expect(componentLink.getAttribute('focused')).toBe('');

      anchor.dispatchEvent(new Event('focusout'));
      await componentIsStable(componentLink);
      expect(componentLink.getAttribute('focused')).toBe(null);
    });

    it('should not trigger button click if link', async () => {
      await componentIsStable(componentLink);
      const o = {
        f: () => {
          // Do nothing
        },
      };
      spyOn(o, 'f');
      componentLink.addEventListener('click', o.f);

      testLinkElement.focus();
      testLinkElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));

      expect(o.f).not.toHaveBeenCalled();
    });

    it('should render link same size as regular button', async () => {
      await componentIsStable(componentLink);
      await componentIsStable(componentButton);
      const borderWidth = 2; // 1px on each side
      expect(componentLink.querySelector('a').getBoundingClientRect().width).toBe(
        componentButton.getBoundingClientRect().width - borderWidth
      );
    });
  });
});

describe('buttonSlots: ', () => {
  let elem: HTMLElement;

  beforeEach(async () => {
    elem = await createTestElement(html`<cds-button>Text slot</cds-button>`);
  });

  afterEach(() => {
    removeTestElement(elem);
  });

  it('should project content into the slot', async () => {
    const component = elem.querySelector<CdsButton>('cds-button');
    const slots = getComponentSlotContent(component);
    expect(slots.default).toContain('Text slot');
  });
});
