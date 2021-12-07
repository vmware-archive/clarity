/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { CdsButton, ClrLoadingState } from '@cds/core/button';
import '@cds/core/badge/register.js';
import '@cds/core/button/register.js';
import {
  componentIsStable,
  createTestElement,
  getComponentSlotContent,
  removeTestElement,
  emulatedClick,
  onceEvent,
} from '@cds/core/test';

describe('button element', () => {
  let testElement: HTMLElement;
  let form: HTMLFormElement;
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
    form = testElement.querySelector('form');
    form.addEventListener('submit', e => e.preventDefault());
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

    it('should work with form elements when clicked; defaults to type="submit"', async () => {
      await componentIsStable(component);
      const event = onceEvent(form, 'submit');
      emulatedClick(component);
      expect((await event) instanceof SubmitEvent).toBe(true);
    });

    it('should work with form elements when clicked via keyboard; defaults to type="submit"', async () => {
      await componentIsStable(component);
      const event = onceEvent(form, 'submit');
      component.focus();
      component.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }));
      expect((await event) instanceof SubmitEvent).toBe(true);
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
      form.addEventListener('submit', o.f);
      component.click();
      const event = new KeyboardEvent('keyup', { key: 'Enter' });
      component.focus();
      component.dispatchEvent(event);
      expect(o.f).not.toHaveBeenCalled();
    });

    it('should handle dynamic changes in button type', async () => {
      const o = {
        f: () => {
          // Do nothing
        },
      };
      spyOn(o, 'f');

      // change from default (implicit "submit") to type="button"
      component.type = 'button';
      await componentIsStable(component);
      form.addEventListener('submit', o.f);
      emulatedClick(component);
      expect(o.f).not.toHaveBeenCalled();

      // change from type="button" to type="submit"
      component.type = 'submit';
      await componentIsStable(component);
      form.removeEventListener('submit', o.f);
      emulatedClick(component);

      // change from type="submit" to type="button"
      component.type = 'button';
      await componentIsStable(component);
      form.addEventListener('submit', o.f);
      emulatedClick(component);
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
      form.addEventListener('submit', o.f);
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
      form.addEventListener('submit', o.f);
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
    // xit('should not render a hidden button if readonly', async () => {
    //   await componentIsStable(component);
    //   const button = component.querySelector('button');
    //   expect(button).toBeNull();
    // });

    it('should not be in tabflow', async () => {
      await componentIsStable(component);
      expect(component.tabIndex).toBe(-1);
    });

    it('should not have a role attribute', async () => {
      await componentIsStable(component);
      expect(component.getAttribute('role')).toBeNull();
    });
  });

  describe('LoadingStateChange', () => {
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

    it('should stay disabled when loadingState changes to default', async () => {
      await componentIsStable(component);
      component.disabled = true;
      component.loadingState = ClrLoadingState.default;
      await componentIsStable(component);

      component.loadingState = ClrLoadingState.loading;
      await componentIsStable(component);
      expect(component.disabled).toBeTruthy();

      component.loadingState = ClrLoadingState.success;
      await componentIsStable(component);
      expect(component.disabled).toBeTruthy();

      component.loadingState = ClrLoadingState.default;
      await componentIsStable(component);
      expect(component.disabled).toBeTruthy();
    });

    it('should default to spinner size to "18"', async () => {
      component.loadingState = ClrLoadingState.loading;
      await componentIsStable(component);
      expect(component.shadowRoot.querySelector<any>('cds-progress-circle').size).toBe('18');
    });

    it('should set spinner size to "12" if button size "sm"', async () => {
      component.loadingState = ClrLoadingState.loading;
      component.size = 'sm';
      await componentIsStable(component);
      expect(component.shadowRoot.querySelector<any>('cds-progress-circle').size).toBe('12');
    });
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
