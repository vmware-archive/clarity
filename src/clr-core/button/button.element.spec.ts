/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ClrLoadingState, CwcButton } from '@clr/core/button';
import '@clr/core/button';
import { componentIsStable, createTestElement, removeTestElement, waitForComponent } from '@clr/core/test/utils';
describe('button element', () => {
  let testElement: HTMLElement;
  let component: CwcButton;
  const placeholderText: string = 'Button Placeholder';

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `<cwc-button>${placeholderText}</cwc-button>`;

    await waitForComponent('cwc-button');
    component = testElement.querySelector<CwcButton>('cwc-button');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create the component', async () => {
    await componentIsStable(component);
    expect(component.innerText).toBe(placeholderText.toUpperCase());
  });

  it('should render a hidden button', async () => {
    await componentIsStable(component);
    const button = component.shadowRoot.querySelector('button');
    expect(button).toBeDefined();
    expect(button.hasAttribute('aria-hidden')).toBe(true);
    expect(button.getAttribute('aria-hidden')).toBe('true');
  });

  it('should have a tab index of 0 to be able to focus', () => {
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

  describe('LoadingStateChange', () => {
    const expectedTransform = 'translateZ(0px)';

    it('should set default state as expected', async () => {
      await componentIsStable(component);
      component.loadingState = ClrLoadingState.DEFAULT;
      await componentIsStable(component);
      expect(component.style.width).toEqual('');
      expect(component.style.transform).toEqual('');
      expect(component.hasAttribute('disabled')).toEqual(false);
    });

    it('should set loading state as expected', async () => {
      await componentIsStable(component);
      const size = component.getBoundingClientRect().width;
      component.loadingState = ClrLoadingState.LOADING;
      await componentIsStable(component);

      // I'm getting 152.016px and 152.015625px, so the test fails without rounding
      expect(parseFloat(component.style.width).toFixed(3)).toEqual(size.toFixed(3));
      expect(component.style.transform).toEqual(expectedTransform);
      expect(component.hasAttribute('disabled')).toEqual(true);
    });

    it('should set success state as expected', async () => {
      await componentIsStable(component);
      const size = component.getBoundingClientRect().width;
      component.loadingState = ClrLoadingState.SUCCESS;
      await componentIsStable(component);
      expect(parseFloat(component.style.width).toFixed(3)).toEqual(size.toFixed(3));
      expect(component.style.transform).toEqual(expectedTransform);
      expect(component.hasAttribute('disabled')).toEqual(true);
    });

    it('should set to default state after success', async () => {
      // will throw the following error without the uninstall() call:
      // "Jasmine Clock was unable to install over custom global timer functions. Is the clock already installed?"
      // See: https://github.com/gruntjs/grunt-contrib-jasmine/issues/213
      jasmine.clock().uninstall();
      jasmine.clock().install();

      await componentIsStable(component);
      const size = component.getBoundingClientRect().width;
      component.loadingState = ClrLoadingState.SUCCESS;
      await componentIsStable(component);
      expect(parseFloat(component.style.width).toFixed(3)).toEqual(size.toFixed(3));
      expect(component.style.transform).toEqual(expectedTransform);
      expect(component.hasAttribute('disabled')).toEqual(true);

      jasmine.clock().tick(1000);
      await componentIsStable(component);

      expect(component.style.width).toEqual('');
      expect(component.style.transform).toEqual('');
      expect(component.hasAttribute('disabled')).toEqual(false);

      // uninstall to clean up
      jasmine.clock().uninstall();
    });
  });
});
