/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import '@clr/core/icon';
import { CwcIcon } from '@clr/core/icon-shapes';
import { componentIsStable, createTestElement, removeTestElement, waitForComponent } from '@clr/core/test/utils';
import { renderIcon } from './icon.renderer';
import { ClarityIcons } from './icon.service';

const testIcon = renderIcon('test');

describe('icon element', () => {
  let testElement: HTMLElement;
  let component: CwcIcon;

  beforeAll(() => {
    ClarityIcons.add({ testing: testIcon });
  });

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `
      <cwc-icon></cwc-icon>
    `;

    await waitForComponent('cwc-icon');
    component = testElement.querySelector<CwcIcon>('cwc-icon');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  describe('shape: ', () => {
    it('shape should default to unknown if one is not given', async () => {
      // only shape in registry is 'unknown'
      await componentIsStable(component);
      expect(component.shape).toBe('unknown');
    });

    it('shape should get shape if it is in the registry', async () => {
      // only shape in registry is 'unknown'
      await componentIsStable(component);
      component.shape = 'testing';
      await componentIsStable(component);
      expect(component.shape).toBe('testing');
    });

    it('shape should return unknown if the shape is not in the registry', async () => {
      // only shape in registry is 'unknown'
      await componentIsStable(component);
      component.shape = 'jabberwocky';
      await componentIsStable(component);
      expect(component.shape).toBe('unknown');
    });

    it('shape should not run an update if the shape is assigned the value it already has', async () => {
      // only shape in registry is 'unknown'
      await componentIsStable(component);
      component.shape = 'testing';
      await componentIsStable(component);
      spyOn(component, 'requestUpdate').and.callThrough();
      component.shape = 'testing';
      await componentIsStable(component);
      expect(component.requestUpdate).not.toHaveBeenCalled();
    });
  });

  describe('size: ', () => {
    it('should update if assigned a new value', async () => {
      await componentIsStable(component);
      component.size = 'xl';
      await componentIsStable(component);
      spyOn(component, 'requestUpdate').and.callThrough();
      component.size = 'md';
      await componentIsStable(component);
      expect(component.requestUpdate).toHaveBeenCalled();
    });
    it('should not run an update if assigned the value it already has', async () => {
      // only shape in registry is 'unknown'
      await componentIsStable(component);
      component.size = 'md';
      await componentIsStable(component);
      spyOn(component, 'requestUpdate').and.callThrough();
      component.size = 'md';
      await componentIsStable(component);
      expect(component.requestUpdate).not.toHaveBeenCalled();
    });
  });

  describe('title and aria label: ', () => {
    it('should set aria label when a icon title is provided', async () => {
      await componentIsStable(component);
      expect(component.shadowRoot.querySelector('svg').getAttribute('aria-labelledby')).toBe(null);
      expect(component.shadowRoot.querySelector('span')).toBe(null);

      component.title = 'test';
      await componentIsStable(component);

      const id = component.shadowRoot.querySelector('span').getAttribute('id');
      expect(id.includes('aria-cwc-icon')).toBe(true);
      expect(component.shadowRoot.querySelector('svg').getAttribute('aria-labelledby')).toBe(id);
    });
  });

  describe('size: ', () => {
    it('should add classname if passed a t-shirt size', async () => {
      await componentIsStable(component);
      expect(component.classList.contains('clr-i-size-xl')).toBe(false);
      component.setAttribute('size', 'xl');
      await componentIsStable(component);
      expect(component.classList.contains('clr-i-size-xl')).toBe(true);
    });
    it('should add width/height styles if passed numerical value', async () => {
      await componentIsStable(component);
      expect(component.style.width).toBe('');
      expect(component.style.height).toBe('');
      component.setAttribute('size', '43');
      await componentIsStable(component);
      expect(component.style.width).toBe('43px');
      expect(component.style.height).toBe('43px');
    });
    it('should do nothing if passed neither a t-shirt size or numerical value', async () => {
      await componentIsStable(component);
      component.setAttribute('size', 'xl');
      await componentIsStable(component);
      expect(component.classList.contains('clr-i-size-xl')).toBe(true);
      component.setAttribute('size', 'jabberwocky');
      await componentIsStable(component);
      expect(component.classList.contains('clr-i-size-xl')).toBe(true);
    });
  });

  describe('sr-only: ', () => {
    it('should contain the sr-only element for screen readers', async () => {
      let srOnlyEl: HTMLElement;
      await componentIsStable(component);
      srOnlyEl = component.shadowRoot.querySelector('.sr-only');
      expect(srOnlyEl).toBeDefined();
    });

    it('should update sr-only element if title is changed', async () => {
      const testTitle = 'Title Me';
      let srOnlyEl: HTMLElement;
      await componentIsStable(component);
      component.setAttribute('title', testTitle);
      await componentIsStable(component);
      srOnlyEl = component.shadowRoot.querySelector('.sr-only');
      expect(srOnlyEl.innerHTML).toContain(testTitle);
    });
  });

  describe('render(): ', () => {
    it('should render icon', async () => {
      await componentIsStable(component);
      const iconHtml = component.shadowRoot.innerHTML;
      const iconHtmlPaths = iconHtml
        .split('<')
        .map((val, index, arry) => {
          if (index !== 0 && index < arry.length - 1) {
            return val;
          }
        })
        .join('<');
      expect(component.shadowRoot.innerHTML.includes(iconHtmlPaths)).toBe(true);
    });
  });

  describe('Behavior: ', () => {
    it('should reflect changes in shape', async () => {
      await componentIsStable(component);
      component.shape = 'testing';
      await componentIsStable(component);
      expect(component.getAttribute('shape')).toEqual(component.shape);
      component.setAttribute('shape', 'testing');
      await componentIsStable(component);
      expect(component.getAttribute('shape')).toEqual(component.shape);
    });

    it('should reflect changes in size', async () => {
      await componentIsStable(component);
      component.size = 'md';
      await componentIsStable(component);
      expect(component.getAttribute('size')).toEqual(component.size);
      component.setAttribute('size', 'sm');
      await componentIsStable(component);
      expect(component.getAttribute('size')).toEqual(component.size);
    });

    it('should reflect changes in flip', async () => {
      await componentIsStable(component);
      component.flip = 'horizontal';
      await componentIsStable(component);
      expect(component.getAttribute('flip')).toEqual(component.flip);
      component.setAttribute('flip', 'vertical');
      await componentIsStable(component);
      expect(component.getAttribute('flip')).toEqual(component.flip);
    });

    it('should reflect changes in direction', async () => {
      await componentIsStable(component);
      component.direction = 'up';
      await componentIsStable(component);
      expect(component.getAttribute('direction')).toEqual(component.direction);
      component.setAttribute('direction', 'down');
      await componentIsStable(component);
      expect(component.getAttribute('direction')).toEqual(component.direction);
    });

    it('should reflect changes in title', async () => {
      await componentIsStable(component);
      component.title = 'hallo';
      await componentIsStable(component);
      expect(component.getAttribute('title')).toEqual(component.title);
      component.setAttribute('title', 'goodday');
      await componentIsStable(component);
      expect(component.getAttribute('title')).toEqual(component.title);
    });
  });
});
