/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/icon/register.js';

import { html } from 'lit';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { CdsIcon } from '@cds/core/icon/icon.element.js';
import { renderIcon } from '../icon.renderer.js';

import {
  getIconSizeStylesToUpdate,
  getSizeValue,
  getUpdateSizeStrategy,
  SizeUpdateStrategies,
  updateIconSizeStyle,
} from './icon.classnames.js';

describe('Icon classname helpers: ', () => {
  describe('getSizeValue', () => {
    it('should handle empty strings', () => {
      expect(getSizeValue('')).toEqual('');
    });
    it('should handle nil values', () => {
      expect(getSizeValue(void 0)).toEqual('');
    });
    it('should remove "fit" values', () => {
      expect(getSizeValue('fit')).toEqual('');
      expect(getSizeValue('xxl fit')).toEqual('xxl');
      expect(getSizeValue('bad value fit')).toEqual('bad value');
      expect(getSizeValue('2020 fit')).toEqual('2020');
    });
    it('return number or t-shirt values', () => {
      expect(getSizeValue('10')).toEqual('10');
      expect(getSizeValue('md')).toEqual('md');
    });
  });

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

    it('should update size styles if passed a numeric string', async () => {
      const expectedSize = 'calc((15 / var(--cds-global-base)) * 1rem)';
      updateIconSizeStyle(component, '81 fit');
      await componentIsStable(component);
      updateIconSizeStyle(component, '15');
      await componentIsStable(component);
      expect(component.style.width).toEqual(expectedSize);
      expect(component.style.minWidth).toEqual(expectedSize);
      expect(component.style.height).toEqual(expectedSize);
      expect(component.style.minHeight).toEqual(expectedSize);
    });
    it('should update minimum size styles if passed a numeric string (fit sized)', async () => {
      updateIconSizeStyle(component, '15');
      await componentIsStable(component);
      updateIconSizeStyle(component, '81 fit');
      await componentIsStable(component);
      expect(component.style.width).toEqual('auto');
      expect(component.style.height).toEqual('auto');
      expect(component.style.minWidth).toEqual('calc((81 / var(--cds-global-base)) * 1rem)');
      expect(component.style.minHeight).toEqual('calc((81 / var(--cds-global-base)) * 1rem)');
    });
    it('should remove size styles if passed a t-shirt size', async () => {
      await componentIsStable(component);
      component.size = '30';
      await componentIsStable(component);
      expect(component.style.height).toEqual('calc((30 / var(--cds-global-base)) * 1rem)');
      expect(component.style.width).toEqual('calc((30 / var(--cds-global-base)) * 1rem)');
      updateIconSizeStyle(component, 'xl');
      await componentIsStable(component);
      expect(component.style.width).toEqual('');
      expect(component.style.minWidth).toEqual('');
      expect(component.style.height).toEqual('');
      expect(component.style.minHeight).toEqual('');
    });
    it('should remove size styles if passed a t-shirt size (fit sized)', async () => {
      await componentIsStable(component);
      component.size = '30';
      await componentIsStable(component);
      expect(component.style.height).toEqual('calc((30 / var(--cds-global-base)) * 1rem)');
      expect(component.style.width).toEqual('calc((30 / var(--cds-global-base)) * 1rem)');
      updateIconSizeStyle(component, 'xl fit');
      await componentIsStable(component);
      expect(component.style.width).toEqual('');
      expect(component.style.minWidth).toEqual('');
      expect(component.style.height).toEqual('');
      expect(component.style.minHeight).toEqual('');
    });
    it('should remove size styles if passed a nil value', async () => {
      await componentIsStable(component);
      updateIconSizeStyle(component, 'lg fit');
      await componentIsStable(component);
      updateIconSizeStyle(component, null);
      await componentIsStable(component);
      expect(component.style.width).toEqual('');
      expect(component.style.height).toEqual('');
      updateIconSizeStyle(component, '48');
      await componentIsStable(component);
      const expectedSize = 'calc((48 / var(--cds-global-base)) * 1rem)';
      expect(component.style.width).toEqual(expectedSize);
      expect(component.style.minWidth).toEqual(expectedSize);
      expect(component.style.height).toEqual(expectedSize);
      expect(component.style.minHeight).toEqual(expectedSize);
      updateIconSizeStyle(component, void 0);
      await componentIsStable(component);
      expect(component.style.width).toEqual('');
      expect(component.style.minWidth).toEqual('');
      expect(component.style.height).toEqual('');
      expect(component.style.minHeight).toEqual('');
    });
    it('should remove size styles if passed an empty string value', async () => {
      await componentIsStable(component);
      updateIconSizeStyle(component, 'xl');
      await componentIsStable(component);
      updateIconSizeStyle(component, '');
      await componentIsStable(component);
      expect(component.style.width).toEqual('');
      expect(component.style.height).toEqual('');
      updateIconSizeStyle(component, '48 fit');
      await componentIsStable(component);
      expect(component.style.width).toEqual('auto');
      expect(component.style.minWidth).toEqual('calc((48 / var(--cds-global-base)) * 1rem)');
      expect(component.style.height).toEqual('auto');
      expect(component.style.minHeight).toEqual('calc((48 / var(--cds-global-base)) * 1rem)');
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
      const expectedSize = 'calc((24 / var(--cds-global-base)) * 1rem)';
      expect(component.style.width).toEqual(expectedSize);
      expect(component.style.minWidth).toEqual(expectedSize);
      expect(component.style.height).toEqual(expectedSize);
      expect(component.style.minHeight).toEqual(expectedSize);
      updateIconSizeStyle(component, '4d9rs');
      await componentIsStable(component);
      expect(component.style.width).toEqual(expectedSize);
      expect(component.style.minWidth).toEqual(expectedSize);
      expect(component.style.height).toEqual(expectedSize);
      expect(component.style.minHeight).toEqual(expectedSize);
    });
  });

  describe('getIconSizeStylesToUpdate: ', () => {
    const myRem = '4rem';

    function testStyles(stylesArray: [string, string][], expectAuto = false) {
      stylesArray.forEach(tup => {
        const [style, value] = tup;
        if (expectAuto && (style === 'width' || style === 'height')) {
          expect(value).toBe('auto', `${style} is set to auto as expected`);
        } else {
          expect(value).toBe(myRem, `${style} is set to rem as expected`);
        }
      });
    }

    it('should set width and height to auto if size is "fit"', () => {
      const testme = getIconSizeStylesToUpdate('fit', myRem);
      testStyles(testme, true);
    });

    it('should set width and height to rem value if size is undefined', () => {
      const testme = getIconSizeStylesToUpdate(void 0, myRem);
      testStyles(testme);
    });

    it('should set width and height to rem value if size is null', () => {
      const testme = getIconSizeStylesToUpdate(null, myRem);
      testStyles(testme);
    });

    it('should set width and height to rem value if size is not "fit" or nil', () => {
      const testme = getIconSizeStylesToUpdate('500', myRem);
      testStyles(testme);
    });

    it('should set width and height to rem value even if size is empty', () => {
      const testme = getIconSizeStylesToUpdate('', myRem);
      testStyles(testme);
    });
  });
});
