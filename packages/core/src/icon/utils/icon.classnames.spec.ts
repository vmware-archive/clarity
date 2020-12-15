/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/icon/register.js';

import { html } from 'lit-html';
import { CdsIcon } from '@cds/core/icon';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test/utils';
import { renderIcon } from '../icon.renderer.js';
import { ClarityIcons } from '../icon.service.js';

import { getUpdateSizeStrategy, SizeUpdateStrategies, updateIconSizeStyle } from './icon.classnames.js';

describe('Icon classname helpers: ', () => {
  describe('getUpdateSizeStrategy', () => {
    it('should return "value-is-string" if passed a string that is also a recognized t-shirt size', () => {
      expect(getUpdateSizeStrategy('xs')).toEqual(SizeUpdateStrategies.ValidSizeString);
      expect(getUpdateSizeStrategy('sm')).toEqual(SizeUpdateStrategies.ValidSizeString);
      expect(getUpdateSizeStrategy('md')).toEqual(SizeUpdateStrategies.ValidSizeString);
      expect(getUpdateSizeStrategy('lg')).toEqual(SizeUpdateStrategies.ValidSizeString);
      expect(getUpdateSizeStrategy('xl')).toEqual(SizeUpdateStrategies.ValidSizeString);
      expect(getUpdateSizeStrategy('xxl')).toEqual(SizeUpdateStrategies.ValidSizeString);
    });
    it('should return "value-is-nil" if passed an empty string as the size', () => {
      expect(getUpdateSizeStrategy('')).toEqual(SizeUpdateStrategies.NilSizeValue);
    });
    it('should return "value-is-nil" if passed null or undefined as the size', () => {
      expect(getUpdateSizeStrategy(null)).toEqual(SizeUpdateStrategies.NilSizeValue);
      expect(getUpdateSizeStrategy(void 0)).toEqual(SizeUpdateStrategies.NilSizeValue);
    });
    it('should return "value-is-numeric" if passed a string that is also a number', () => {
      expect(getUpdateSizeStrategy('10')).toEqual(SizeUpdateStrategies.ValidNumericString);
    });
    it('should return "bad-value" if passed a string that is not a number and not a t-shirt size', () => {
      expect(getUpdateSizeStrategy('jabberwocky')).toEqual(SizeUpdateStrategies.BadSizeValue);
      expect(getUpdateSizeStrategy('xxxs')).toEqual(SizeUpdateStrategies.BadSizeValue);
      expect(getUpdateSizeStrategy('4d9rs')).toEqual(SizeUpdateStrategies.BadSizeValue); // test regex as this will pass parseInt
    });
  });

  describe('updateIconSizeStyleOrClassnames', () => {
    const testIcon = renderIcon('test');
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

    it('should remove classnames and update size styles if passed a numeric string', async () => {
      updateIconSizeStyle(component, '15');
      await componentIsStable(component);
      expect(component.style.width).toEqual('0.75rem');
      expect(component.style.height).toEqual('0.75rem');
    });
    it('should remove size styles and add classname if passed a t-shirt size', async () => {
      await componentIsStable(component);
      component.size = '30';
      await componentIsStable(component);
      expect(component.style.height).toEqual('1.5rem');
      expect(component.style.width).toEqual('1.5rem');
      updateIconSizeStyle(component, 'xl');
      await componentIsStable(component);
      expect(component.style.width).toEqual('');
      expect(component.style.height).toEqual('');
    });
    it('should replace size styles if passed a new t-shirt size', async () => {
      await componentIsStable(component);
      updateIconSizeStyle(component, 'lg');
      await componentIsStable(component);
      updateIconSizeStyle(component, 'sm');
      await componentIsStable(component);
      expect(component.style.width).toEqual('');
      expect(component.style.height).toEqual('');
    });
    it('should remove classnames and size styles if passed a nil value', async () => {
      await componentIsStable(component);
      updateIconSizeStyle(component, 'lg');
      await componentIsStable(component);
      updateIconSizeStyle(component, null);
      await componentIsStable(component);
      expect(component.style.width).toEqual('');
      expect(component.style.height).toEqual('');
      updateIconSizeStyle(component, '48');
      await componentIsStable(component);
      expect(component.style.width).toEqual('2.4rem');
      expect(component.style.height).toEqual('2.4rem');
      updateIconSizeStyle(component, void 0);
      await componentIsStable(component);
      expect(component.style.width).toEqual('');
      expect(component.style.height).toEqual('');
    });
    it('should remove classnames and size styles if passed an empty string value', async () => {
      await componentIsStable(component);
      updateIconSizeStyle(component, 'xl');
      await componentIsStable(component);
      updateIconSizeStyle(component, '');
      await componentIsStable(component);
      expect(component.style.width).toEqual('');
      expect(component.style.height).toEqual('');
      updateIconSizeStyle(component, '48');
      await componentIsStable(component);
      expect(component.style.width).toEqual('2.4rem');
      expect(component.style.height).toEqual('2.4rem');
      updateIconSizeStyle(component, '');
      await componentIsStable(component);
      expect(component.style.width).toEqual('');
      expect(component.style.height).toEqual('');
    });
    it('should do nothing if passed a string that is not a t-shirt size and is non-numeric', async () => {
      await componentIsStable(component);
      updateIconSizeStyle(component, 'sm');
      await componentIsStable(component);
      updateIconSizeStyle(component, 'jabberwocky');
      await componentIsStable(component);
      updateIconSizeStyle(component, '24');
      await componentIsStable(component);
      expect(component.style.width).toEqual('1.2rem');
      expect(component.style.height).toEqual('1.2rem');
      updateIconSizeStyle(component, '4d9rs');
      await componentIsStable(component);
      expect(component.style.width).toEqual('1.2rem');
      expect(component.style.height).toEqual('1.2rem');
    });
  });
});
