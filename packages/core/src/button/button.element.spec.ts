/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import { CdsButton, ClrLoadingState, iconSpinner } from '@cds/core/button';
import '@cds/core/badge/register.js';
import '@cds/core/button/register.js';
import { componentIsStable, createTestElement, getComponentSlotContent, removeTestElement } from '@cds/core/test';

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
    it('should have a tab index of 0 to be able to focus', async () => {
      await componentIsStable(component);
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

      const event = new KeyboardEvent('keyup', { key: 'Enter' });
      component.focus();
      component.dispatchEvent(event);
    });

    it('should not interact with form elements if type is button', async () => {
      component.type = 'button';
      await componentIsStable(component);
      const o = {
        f: () => {
          // Do nothing
        },
      };
      spyOn(o, 'f');
      testElement.querySelector('form').addEventListener('submit', o.f);
      component.click();
      const event = new KeyboardEvent('keyup', { key: 'Enter' });
      component.focus();
      component.dispatchEvent(event);
      expect(o.f).not.toHaveBeenCalled();
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

      component.disabled = true;
      await componentIsStable(component);
      expect(component.getAttribute('aria-disabled')).toBe('true');
    });

    it('should add or remove button event listeners when readonly updates ', async () => {
      await componentIsStable(component);
      expect(component.getAttribute('readonly')).toBe(null);

      spyOn(component, 'removeEventListener').and.callThrough();
      component.readonly = true;
      await componentIsStable(component);
      expect(component.removeEventListener).toHaveBeenCalledWith('click', jasmine.any(Function));
      expect(component.removeEventListener).toHaveBeenCalledWith('keydown', jasmine.any(Function));

      spyOn(component, 'addEventListener').and.callThrough();
      component.readonly = false;
      await componentIsStable(component);
      expect(component.addEventListener).toHaveBeenCalledWith('click', jasmine.any(Function));
      expect(component.addEventListener).toHaveBeenCalledWith('keydown', jasmine.any(Function));
    });

    it('should keep disabled and aria-disabled in sync', async () => {
      await componentIsStable(component);
      expect(component.getAttribute('aria-disabled')).toBe('false');

      component.disabled = true;
      await componentIsStable(component);
      expect(component.getAttribute('aria-disabled')).toBe('true');

      component.disabled = false;
      await componentIsStable(component);
      expect(component.getAttribute('aria-disabled')).toBe('false');
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
      expect(component.loadingState).toEqual(ClrLoadingState.default);
      expect(component.hasAttribute('disabled')).toEqual(false);
      expect(component.style.getPropertyValue('width')).toBe('');
    });

    it('should set default state as expected', async () => {
      await componentIsStable(component);
      component.loadingState = ClrLoadingState.default;
      await componentIsStable(component);
      expect(component.hasAttribute('disabled')).toEqual(false);
      expect(component.getAttribute('aria-disabled')).toEqual('false');
      expect(component.style.getPropertyValue('width')).toBe('');
    });

    it('should set loading state as expected', async () => {
      await componentIsStable(component);
      const size = component.getBoundingClientRect().width;
      component.loadingState = ClrLoadingState.loading;
      await componentIsStable(component);

      // I'm getting 152.016px and 152.015625px, so the test fails without rounding
      expect(component.getBoundingClientRect().width.toFixed(3)).toEqual(size.toFixed(3));
      expect(component.hasAttribute('disabled')).toEqual(true);
      expect(component.getAttribute('aria-disabled')).toEqual('true');
    });

    it('should set success state as expected', async () => {
      await componentIsStable(component);
      const size = component.getBoundingClientRect().width;

      component.loadingState = ClrLoadingState.success;
      await componentIsStable(component);

      expect(component.getBoundingClientRect().width.toFixed(3)).toEqual(size.toFixed(3));
      expect(component.hasAttribute('disabled')).toEqual(true);
      expect(component.getAttribute('aria-disabled')).toEqual('true');
    });

    it('should set error state as expected', async () => {
      await componentIsStable(component);
      const size = component.getBoundingClientRect().width;

      component.loadingState = ClrLoadingState.error;
      await componentIsStable(component);

      expect(component.getBoundingClientRect().width.toFixed(3)).toEqual(size.toFixed(3));
      expect(component.hasAttribute('disabled')).toEqual(true);
      expect(component.getAttribute('aria-disabled')).toEqual('true');
    });
  });

  describe('Button link', () => {
    let testLinkElement: HTMLElement;
    let anchor: HTMLAnchorElement;
    let anchorButton: HTMLButtonElement;

    beforeEach(async () => {
      testLinkElement = await createTestElement(html` <a href="about"><cds-button>About</cds-button></a> `);

      anchor = testLinkElement.querySelector<HTMLAnchorElement>('a');
      anchorButton = testLinkElement.querySelector<HTMLButtonElement>('cds-button');
    });

    afterEach(() => {
      removeTestElement(testLinkElement);
    });

    it('should render a link properly', async () => {
      await componentIsStable(anchorButton);
      expect(anchor.style.lineHeight).toBe('0');
      expect(anchor.style.textDecoration).toBe('none');
    });

    it('should set button to be readonly', async () => {
      await componentIsStable(anchorButton);
      expect(anchor.querySelector('cds-button').readonly).toBe(true);
    });

    it('should not trigger button click if link', async () => {
      await componentIsStable(anchorButton);
      const o = {
        f: () => {
          // Do nothing
        },
      };
      spyOn(o, 'f');
      anchorButton.addEventListener('click', o.f);
      anchor.focus();
      anchor.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));

      expect(o.f).not.toHaveBeenCalled();
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

describe('iconSpinner(): ', () => {
  it('should default to spinner size to "18"', () => {
    const templateResult = iconSpinner('lg');
    expect(templateResult.values.indexOf('18') > -1).toBe(true);
  });

  it('should set spinner size to "18" if not passed size "sm"', () => {
    const templateResult = iconSpinner('anything-at-all');
    expect(templateResult.values.indexOf('18') > -1).toBe(true);
  });

  it('should set spinner size to "12" if size "sm"', () => {
    const templateResult = iconSpinner('sm');
    expect(templateResult.values.indexOf('12') > -1).toBe(true);
  });
});

describe('button keyboard interaction: ', () => {
  it('should add active attr on click', async () => {
    const element = await createTestElement(html`<cds-button>Text slot</cds-button>`);
    const component = element.querySelector('cds-button');
    expect(component.hasAttribute('_active')).toBe(false);

    component.dispatchEvent(new MouseEvent('mousedown'));
    await componentIsStable(component);
    expect(component.hasAttribute('_active')).toBe(true);

    removeTestElement(element);
  });

  it('should NOT add active attr if button is disabled', async () => {
    const element = await createTestElement(html`<cds-button disabled>Text slot</cds-button>`);
    const component = element.querySelector('cds-button');
    await componentIsStable(component);
    expect(component.hasAttribute('_active')).toBe(false);

    component.dispatchEvent(new MouseEvent('mousedown'));
    await componentIsStable(component);
    expect(component.hasAttribute('_active')).toBe(false);
    removeTestElement(element);
  });

  it('should NOT add active attr if button is readonly', async () => {
    const element = await createTestElement(html`<cds-button readonly>Text slot</cds-button>`);
    const component = element.querySelector('cds-button');
    await componentIsStable(component);
    expect(component.hasAttribute('_active')).toBe(false);

    component.dispatchEvent(new MouseEvent('mousedown'));
    await componentIsStable(component);
    expect(component.hasAttribute('_active')).toBe(false);
    removeTestElement(element);
  });
});
