/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CdsButton, ClrLoadingState } from '@clr/core/button';
import '@clr/core/button';
import { componentIsStable, createTestElement, removeTestElement, waitForComponent } from '@clr/core/test/utils';

describe('button element', () => {
  let testElement: HTMLElement;
  let component: CdsButton;
  const placeholderText = 'Button Placeholder';

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `
      <form>
        <cds-button>
          <span>${placeholderText}</span>
        </cds-button>
      </form>
    `;

    await waitForComponent('cds-button');
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

    it('should remove button from tab index if disabled', async () => {
      await componentIsStable(component);
      expect(component.getAttribute('tabindex')).toBe('0');

      component.disabled = true;
      await componentIsStable(component);
      expect(component.hasAttribute('disabled')).toBe(true);
      expect(component.getAttribute('tabindex')).toBe('-1');
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

    it('should not interact with form elements if disabled', async () => {
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

    it('should prevent click when readonly or disabled', async () => {
      await componentIsStable(component);
      expect(component.getAttribute('disabled')).toBe(null);

      component.disabled = true;
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
    it('should set default state as expected', async () => {
      await componentIsStable(component);
      component.loadingState = ClrLoadingState.DEFAULT;
      await componentIsStable(component);
      expect(component.hasAttribute('disabled')).toEqual(false);
    });

    it('should set loading state as expected', async () => {
      await componentIsStable(component);
      const size = component.getBoundingClientRect().width;
      component.loadingState = ClrLoadingState.LOADING;
      await componentIsStable(component);

      // I'm getting 152.016px and 152.015625px, so the test fails without rounding
      expect(component.getBoundingClientRect().width.toFixed(3)).toEqual(size.toFixed(3));
      expect(component.hasAttribute('disabled')).toEqual(true);
    });

    it('should set success state as expected', async () => {
      await componentIsStable(component);
      const size = component.getBoundingClientRect().width;

      component.loadingState = ClrLoadingState.SUCCESS;
      await componentIsStable(component);

      expect(component.getBoundingClientRect().width.toFixed(3)).toEqual(size.toFixed(3));
      expect(component.hasAttribute('disabled')).toEqual(true);
    });

    it('should set error state as expected', async () => {
      await componentIsStable(component);
      const size = component.getBoundingClientRect().width;

      component.loadingState = ClrLoadingState.ERROR;
      await componentIsStable(component);

      expect(component.getBoundingClientRect().width.toFixed(3)).toEqual(size.toFixed(3));
      expect(component.hasAttribute('disabled')).toEqual(true);
    });
  });

  describe('Button link', () => {
    let testLinkElement: HTMLElement;
    let componentLink: CdsButton;
    let anchor: HTMLAnchorElement;

    beforeEach(async () => {
      testLinkElement = createTestElement();
      testLinkElement.innerHTML = `<cds-button><a href="about">About</a></cds-button>`;
      await waitForComponent('cds-button');
      componentLink = testLinkElement.querySelector<CdsButton>('cds-button');
      anchor = testLinkElement.querySelector<HTMLAnchorElement>('a');
    });

    afterEach(() => {
      removeTestElement(testLinkElement);
    });

    it('should render a link properly', async () => {
      await componentIsStable(componentLink);
      expect(componentLink).toBeTruthy();
      expect(componentLink.innerText).toBe('ABOUT');
    });

    it('should set button to be readonly', async () => {
      await componentIsStable(componentLink);
      expect(componentLink.readonly).toBe(true);
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

    it('should apply host focus styles when link is in focus', async () => {
      await componentIsStable(componentLink);
      testLinkElement.focus();
      anchor.focus();
      await componentIsStable(componentLink);
      expect(componentLink.getAttribute('focused')).toBe('');
    });
  });
});
