/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@clr/core/icon';
import { CdsIcon } from '@clr/core/icon-shapes';
import { getEnumValues } from '@clr/core/internal';
import { componentIsStable, createTestElement, removeTestElement, waitForComponent } from '@clr/core/test/utils';
import { renderIcon } from '../icon.renderer.js';
import { ClarityIcons } from '../icon.service.js';

import { IconShapeCollection } from '../interfaces/icon.interfaces.js';
import {
  getIconSvgClasses,
  getIconTshirtSizeClassname,
  getUpdateSizeStrategy,
  IconSvgClassnames,
  iconTshirtSizeClassnamePrefix,
  IconTshirtSizes,
  isIconTshirtSizeClassname,
  SizeUpdateStrategies,
  updateIconSizeStyleOrClassnames,
} from './icon.classnames.js';
import { testIcons } from './test-icons.js';

describe('Icon classname helpers: ', () => {
  describe('getIconSvgClasses: ', () => {
    const stringHasClassname = (classnames: string) => (stringToTest: string) => {
      return classnames.indexOf(stringToTest) > -1;
    };
    it('should not add classes to only outline shape', () => {
      const [, testShape] = testIcons.justOutline;
      const test = stringHasClassname(getIconSvgClasses(testShape as IconShapeCollection));
      expect(test(IconSvgClassnames.Alerted)).toEqual(false);
      expect(test(IconSvgClassnames.Badged)).toEqual(false);
      expect(test(IconSvgClassnames.Solid)).toEqual(false);
    });
    it('should add solid class when expected', () => {
      const [, testShape] = testIcons.solidIcon;
      const test = stringHasClassname(getIconSvgClasses(testShape as IconShapeCollection));
      expect(test(IconSvgClassnames.Alerted)).toEqual(false);
      expect(test(IconSvgClassnames.Badged)).toEqual(false);
      expect(test(IconSvgClassnames.Solid)).toEqual(true);
    });
    it('should add badged class when expected', () => {
      const [, testShape] = testIcons.nonAlertedIcon;
      const test = stringHasClassname(getIconSvgClasses(testShape as IconShapeCollection));
      expect(test(IconSvgClassnames.Alerted)).toEqual(false);
      expect(test(IconSvgClassnames.Badged)).toEqual(true);
      expect(test(IconSvgClassnames.Solid)).toEqual(false);
    });
    it('should add alerted class when expected', () => {
      const [, testShape] = testIcons.nonBadgedIcon;
      const test = stringHasClassname(getIconSvgClasses(testShape as IconShapeCollection));
      expect(test(IconSvgClassnames.Alerted)).toEqual(true);
      expect(test(IconSvgClassnames.Badged)).toEqual(false);
      expect(test(IconSvgClassnames.Solid)).toEqual(false);
    });
    it('should be able to add all three', () => {
      const [, testShape] = testIcons.allIcon;
      const test = stringHasClassname(getIconSvgClasses(testShape as IconShapeCollection));
      expect(test(IconSvgClassnames.Alerted)).toEqual(true);
      expect(test(IconSvgClassnames.Badged)).toEqual(true);
      expect(test(IconSvgClassnames.Solid)).toEqual(true);
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
    });
  });

  describe('updateIconSizeStyleOrClassnames', () => {
    const testIcon = renderIcon('test');
    let testElement: HTMLElement;
    let component: CdsIcon;

    beforeAll(() => {
      ClarityIcons.add({ testing: testIcon });
    });

    beforeEach(async () => {
      testElement = createTestElement();
      testElement.innerHTML = `
        <cds-icon></cds-icon>
      `;

      await waitForComponent('cds-icon');
      component = testElement.querySelector<CdsIcon>('cds-icon');
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('should remove classnames and update size styles if passed a numeric string', async () => {
      await componentIsStable(component);
      component.classList.add(iconTshirtSizeClassnamePrefix + 'lg');
      await componentIsStable(component);
      expect(component.classList.toString().indexOf(iconTshirtSizeClassnamePrefix) > -1).toBe(true);
      updateIconSizeStyleOrClassnames(component, '15');
      await componentIsStable(component);
      expect(component.style.width).toEqual('15px');
      expect(component.style.height).toEqual('15px');
      expect(component.classList.toString().indexOf(iconTshirtSizeClassnamePrefix) > -1).toBe(false);
    });
    it('should remove size styles and add classname if passed a t-shirt size', async () => {
      const myDims = '30px';
      await componentIsStable(component);
      component.addEquilateralStyles(myDims);
      await componentIsStable(component);
      expect(component.style.height).toEqual(myDims);
      expect(component.style.width).toEqual(myDims);
      updateIconSizeStyleOrClassnames(component, 'xl');
      await componentIsStable(component);
      expect(component.style.width).toEqual('');
      expect(component.style.height).toEqual('');
      expect(component.classList.contains(iconTshirtSizeClassnamePrefix + 'xl')).toBe(true);
    });
    it('should replace size styles if passed a new t-shirt size', async () => {
      await componentIsStable(component);
      updateIconSizeStyleOrClassnames(component, 'lg');
      await componentIsStable(component);
      updateIconSizeStyleOrClassnames(component, 'sm');
      await componentIsStable(component);
      expect(component.style.width).toEqual('');
      expect(component.style.height).toEqual('');
      expect(component.classList.contains(iconTshirtSizeClassnamePrefix + 'sm')).toBe(true);
      expect(component.classList.contains(iconTshirtSizeClassnamePrefix + 'lg')).toBe(false);
    });
    it('should remove classnames and size styles if passed a nil value', async () => {
      await componentIsStable(component);
      updateIconSizeStyleOrClassnames(component, 'lg');
      await componentIsStable(component);
      expect(component.classList.contains(iconTshirtSizeClassnamePrefix + 'lg')).toBe(true);
      updateIconSizeStyleOrClassnames(component, null);
      await componentIsStable(component);
      expect(component.style.width).toEqual('');
      expect(component.style.height).toEqual('');
      expect(component.classList.toString().indexOf(iconTshirtSizeClassnamePrefix) > -1).toBe(false);
      updateIconSizeStyleOrClassnames(component, '48');
      await componentIsStable(component);
      expect(component.style.width).toEqual('48px');
      expect(component.style.height).toEqual('48px');
      updateIconSizeStyleOrClassnames(component, void 0);
      await componentIsStable(component);
      expect(component.style.width).toEqual('');
      expect(component.style.height).toEqual('');
      expect(component.classList.toString().indexOf(iconTshirtSizeClassnamePrefix) > -1).toBe(false);
    });
    it('should remove classnames and size styles if passed an empty string value', async () => {
      await componentIsStable(component);
      updateIconSizeStyleOrClassnames(component, 'xl');
      await componentIsStable(component);
      expect(component.classList.contains(iconTshirtSizeClassnamePrefix + 'xl')).toBe(true);
      updateIconSizeStyleOrClassnames(component, '');
      await componentIsStable(component);
      expect(component.style.width).toEqual('');
      expect(component.style.height).toEqual('');
      expect(component.classList.toString().indexOf(iconTshirtSizeClassnamePrefix) > -1).toBe(false);
      updateIconSizeStyleOrClassnames(component, '48');
      await componentIsStable(component);
      expect(component.style.width).toEqual('48px');
      expect(component.style.height).toEqual('48px');
      updateIconSizeStyleOrClassnames(component, '');
      await componentIsStable(component);
      expect(component.style.width).toEqual('');
      expect(component.style.height).toEqual('');
      expect(component.classList.toString().indexOf(iconTshirtSizeClassnamePrefix) > -1).toBe(false);
    });
    it('should do nothing if passed a string that is not a t-shirt size and is non-numeric', async () => {
      await componentIsStable(component);
      updateIconSizeStyleOrClassnames(component, 'sm');
      await componentIsStable(component);
      expect(component.classList.contains(iconTshirtSizeClassnamePrefix + 'sm')).toBe(true);
      updateIconSizeStyleOrClassnames(component, 'jabberwocky');
      await componentIsStable(component);
      expect(component.classList.contains(iconTshirtSizeClassnamePrefix + 'sm')).toBe(true);
      updateIconSizeStyleOrClassnames(component, '24');
      await componentIsStable(component);
      expect(component.style.width).toEqual('24px');
      expect(component.style.height).toEqual('24px');
      expect(component.classList.contains(iconTshirtSizeClassnamePrefix + 'sm')).toBe(false);
      updateIconSizeStyleOrClassnames(component, '4d9rs');
      await componentIsStable(component);
      expect(component.style.width).toEqual('24px');
      expect(component.style.height).toEqual('24px');
    });
  });

  describe('getIconTshirtSizeClassname', () => {
    it('should have last two arguments default', () => {
      expect(getIconTshirtSizeClassname('xs')).toEqual(iconTshirtSizeClassnamePrefix + 'xs');
    });
    it('should return an empty string if passed a string that is not a t-shirt size', () => {
      expect(getIconTshirtSizeClassname('xxxs')).toEqual('');
      expect(getIconTshirtSizeClassname('')).toEqual('');
    });
    it('should return properly prefixed t-shirt sizes if passed a valid t-shirt size', () => {
      (getEnumValues(IconTshirtSizes) as any[]).forEach(size => {
        expect(getIconTshirtSizeClassname(size)).toEqual(iconTshirtSizeClassnamePrefix + size);
      });
    });
  });

  describe('isIconTshirtSizeClassname', () => {
    it('should return true for known t-shirt sizes', () => {
      (getEnumValues(IconTshirtSizes) as any[]).forEach(size => {
        expect(isIconTshirtSizeClassname(size)).toBe(true);
      });
    });
    it('should return false if passed something unexpected', () => {
      expect(isIconTshirtSizeClassname('jabberwocky')).toBe(false);
      expect(isIconTshirtSizeClassname('xxxs')).toBe(false);
    });
  });
});
