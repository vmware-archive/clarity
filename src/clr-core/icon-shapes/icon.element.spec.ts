/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
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
  let idcomponent: CwcIcon;
  let updaterObject: CwcIcon;
  let updaterValue: string;

  function updateIconSizeMock(obj: CwcIcon, val: string) {
    updaterObject = obj;
    updaterValue = val;
  }

  beforeAll(() => {
    ClarityIcons.add({ testing: testIcon });
  });

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `
      <cwc-icon class="no-id"></cwc-icon>
      <cwc-icon id="ohai"></cwc-icon>
    `;

    updaterObject = void 0;
    updaterValue = void 0;

    await waitForComponent('cwc-icon');
    component = testElement.querySelector<CwcIcon>('cwc-icon.no-id');
    idcomponent = testElement.querySelector<CwcIcon>('cwc-icon#ohai');
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

  describe('ariaId: ', () => {
    it('ariaId should return an aria prefixed id for use by labelled by', async () => {
      // only shape in registry is 'unknown'
      await componentIsStable(idcomponent);
      expect(idcomponent.shadowRoot.innerHTML.includes('aria-ohai')).toBe(true);
    });
    it('ariaId should default to a defined id', async () => {
      await componentIsStable(component);
      expect(component.shadowRoot.innerHTML.includes('aria-undefined')).toBe(false);
      expect(component.shadowRoot.innerHTML.includes('aria-cwc-icon-0')).toBe(false);
    });
  });

  describe('id: ', () => {
    it('should set an id if one is not given', async () => {
      await componentIsStable(component);
      const tagNameInId = component.tagName.toLowerCase();
      expect(component.getAttribute('id')).toContain(tagNameInId);
      expect(component.shadowRoot.innerHTML.includes('id="aria-' + tagNameInId)).toBe(true);
      expect(component.shadowRoot.innerHTML.includes('aria-labelledby="aria-' + tagNameInId)).toBe(true);
    });

    it('should not overwrite id if one is given', async () => {
      await componentIsStable(idcomponent);
      const expectedId = 'ohai';
      expect(idcomponent.shadowRoot.innerHTML.includes('id="aria-' + expectedId)).toBe(true);
      expect(idcomponent.shadowRoot.innerHTML.includes('aria-labelledby="aria-' + expectedId)).toBe(true);
      expect(idcomponent.id).toBe(expectedId);
    });

    it('should update id if it is changed', async () => {
      const newId = 'kthxbye';
      await componentIsStable(idcomponent);
      idcomponent.setAttribute('id', newId);
      await componentIsStable(idcomponent);
      expect(idcomponent.shadowRoot.innerHTML.includes('id="aria-' + newId)).toBe(true);
      expect(idcomponent.shadowRoot.innerHTML.includes('aria-labelledby="aria-' + newId)).toBe(true);
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

  describe('title: ', () => {
    it('should generate a title consisting of "[shape] icon" in the sr-only element if no title is given', async () => {
      const shape = 'testing';
      let srOnlyEl: HTMLElement;
      await componentIsStable(component);
      component.setAttribute('shape', shape);
      await componentIsStable(component);
      srOnlyEl = component.shadowRoot.querySelector('.sr-only');
      expect(srOnlyEl.innerHTML).toContain(shape + ' icon');
    });
  });

  describe('render(): ', () => {
    it('should render icon', async () => {
      await componentIsStable(idcomponent);
      const iconHtml = idcomponent.shadowRoot.innerHTML;
      const iconHtmlPaths = iconHtml
        .split('<')
        .map((val, index, arry) => {
          if (index !== 0 && index < arry.length - 1) {
            return val;
          }
        })
        .join('<');
      expect(idcomponent.shadowRoot.innerHTML.includes('aria-' + idcomponent.id)).toBe(true);
      expect(idcomponent.shadowRoot.innerHTML.includes(iconHtmlPaths)).toBe(true);
    });
  });

  describe('Behavior: ', () => {
    it('should reflect changes in id', async () => {
      await componentIsStable(component);
      component.id = 'howdy';
      await componentIsStable(component);
      expect(component.getAttribute('id')).toEqual(component.id);
      component.setAttribute('id', 'kthxbye');
      await componentIsStable(component);
      expect(component.getAttribute('id')).toEqual(component.id);
    });

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
