/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import '@cds/core/icon/register.js';
import { CdsIcon } from '@cds/core/icon';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test/utils';
import { renderIcon } from './icon.renderer.js';
import { ClarityIcons } from './icon.service.js';

const testIcon = renderIcon('test');

describe('icon element', () => {
  let testElement: HTMLElement;
  let component: CdsIcon;

  beforeAll(() => {
    ClarityIcons.addIcons(['testing', testIcon]);
  });

  beforeEach(async () => {
    testElement = await createTestElement(html`<cds-icon></cds-icon>`);
    component = testElement.querySelector<CdsIcon>('cds-icon');
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

    it('shape should not run an update if the shape is assigned a nil or empty value', async () => {
      const testShape = 'testing';
      await componentIsStable(component);
      component.shape = testShape;
      await componentIsStable(component);
      spyOn(component, 'requestUpdate').and.callThrough();

      component.shape = '';
      await componentIsStable(component);
      expect(component.requestUpdate).not.toHaveBeenCalled();
      expect(component.getAttribute('shape')).toEqual(testShape);

      component.shape = null;
      await componentIsStable(component);
      expect(component.requestUpdate).not.toHaveBeenCalled();
      expect(component.getAttribute('shape')).toEqual(testShape);

      component.shape = void 0;
      await componentIsStable(component);
      expect(component.requestUpdate).not.toHaveBeenCalled();
      expect(component.getAttribute('shape')).toEqual(testShape);
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
    it('should add width/height styles if passed numerical value', async () => {
      await componentIsStable(component);
      expect(component.style.width).toBe('');
      expect(component.style.height).toBe('');
      component.setAttribute('size', '43');
      await componentIsStable(component);
      expect(component.style.width).toBe('43px');
      expect(component.style.height).toBe('43px');
    });
    it('should remove the size attribute if set to undefined', async () => {
      await componentIsStable(component);
      component.size = void 0;
      await componentIsStable(component);
      expect(component.hasAttribute('size')).toBe(false);
    });
    it('should remove the size attribute if set to null', async () => {
      await componentIsStable(component);
      component.size = null;
      await componentIsStable(component);
      expect(component.hasAttribute('size')).toBe(false);
    });
  });

  describe('solid: ', () => {
    it('should default to false', async () => {
      await componentIsStable(component);
      expect(component.hasAttribute('solid')).toBe(false);
    });
    it('should update if assigned a new value', async () => {
      await componentIsStable(component);
      component.solid = true;
      await componentIsStable(component);
      expect(component.hasAttribute('solid')).toBe(true);
    });
  });

  describe('status: ', () => {
    it('should default to empty string', async () => {
      await componentIsStable(component);
      expect(component.getAttribute('status')).toEqual(null);
    });
    it('should update if assigned a new value', async () => {
      await componentIsStable(component);
      component.status = 'info';
      await componentIsStable(component);
      expect(component.getAttribute('status')).toEqual('info');
    });
  });

  describe('inverse: ', () => {
    it('should default to false', async () => {
      await componentIsStable(component);
      expect(component.hasAttribute('inverse')).toBe(false);
    });
    it('should update if assigned a new value', async () => {
      await componentIsStable(component);
      component.inverse = true;
      await componentIsStable(component);
      expect(component.hasAttribute('inverse')).toBe(true);
    });
  });

  describe('badge: ', () => {
    it('should default to false', async () => {
      await componentIsStable(component);
      expect(component.badge).toBe(undefined);
      expect(component.hasAttribute('badge')).toBe(false);
    });
    it('should update if assigned a new value', async () => {
      await componentIsStable(component);
      component.badge = 'warning';
      await componentIsStable(component);
      expect(component.hasAttribute('badge')).toBe(true);
    });
    it('should update if assigned a new value', async () => {
      await componentIsStable(component);
      component.badge = 'info';
      await componentIsStable(component);
      expect(component.hasAttribute('badge')).toBe(true);
      await componentIsStable(component);
      expect(component.getAttribute('badge')).toEqual('info');
    });
    it('should be removed if set to null', async () => {
      await componentIsStable(component);
      component.badge = 'danger';
      await componentIsStable(component);
      expect(component.hasAttribute('badge')).toBe(true);
      component.badge = null;
      await componentIsStable(component);
      expect(component.hasAttribute('badge')).toBe(false);
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
          } else {
            return void 0;
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
      expect(component.shape).toEqual('testing');
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
