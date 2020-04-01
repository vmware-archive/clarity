/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement } from 'lit-element';
import { registerElementSafely } from '../utils/register.js';
import { componentIsStable, createTestElement, removeTestElement, waitForComponent } from './../../test/utils.js';
import { applyMixins } from './apply-mixins.js';
import { CssHelpers } from './css-helpers.js';

class CssHelpersTestBaseElement extends LitElement {}

applyMixins(CssHelpersTestBaseElement, [CssHelpers]);

class CssHelpersTestElement extends CssHelpersTestBaseElement {
  render() {
    return html`ohai`;
  }
}
interface CssHelpersTestElement extends CssHelpersTestBaseElement, CssHelpers {}
registerElementSafely('css-helpers-test-element', CssHelpersTestElement);

describe('CssHelpers mixin - ', () => {
  let testElement: HTMLElement;
  let component: CssHelpersTestElement;
  const testClassname = 'i-have-this-class';
  const failClassname = 'jabberwocky';

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `
      <css-helpers-test-element class="${testClassname}">
      </css-helpers-test-element>
    `;
    await waitForComponent('css-helpers-test-element');
    component = testElement.querySelector<CssHelpersTestElement>('css-helpers-test-element');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should have the helper methods on the component', async () => {
    await componentIsStable(component);
    expect(component.hasClassname).toBeTruthy();
    expect(component.addClassname).toBeTruthy();
    expect(component.removeClassname).toBeTruthy();
    expect(component.removeClassnames).toBeTruthy();
    expect(component.removeClassnamesUnless).toBeTruthy();
    expect(component.updateEquilateralStyles).toBeTruthy();
    expect(component.removeEquilateralStyles).toBeTruthy();
    expect(component.addEquilateralStyles).toBeTruthy();
  });

  describe('hasClassname: ', () => {
    it('should say if the element has a classname', async () => {
      await componentIsStable(component);
      expect(component.hasClassname(testClassname)).toEqual(true);
      expect(component.hasClassname(failClassname)).toEqual(false);
    });
  });

  describe('addClassname: ', () => {
    it('should add classnames to the element', async () => {
      await componentIsStable(component);
      const addedClassname = 'ohai';
      component.addClassname(addedClassname);
      expect(component.classList.contains(addedClassname)).toEqual(true);
    });
  });

  describe('removeClassname: ', () => {
    it('should remove classnames from the element', async () => {
      await componentIsStable(component);
      component.removeClassname(testClassname);
      expect(component.classList.contains(testClassname)).toEqual(false);
    });
  });

  const classname1 = 'ohai';
  const classname2 = 'kthxbye';

  describe('removeClassnames: ', () => {
    it('should remove classnames from the element', async () => {
      component.addClassname(classname1);
      component.addClassname(classname2);
      component.removeClassnames([testClassname, classname1, classname2]);
      await componentIsStable(component);
      expect(component.classList.contains(testClassname)).toEqual(false);
      expect(component.classList.contains(classname1)).toEqual(false);
      expect(component.classList.contains(classname2)).toEqual(false);
    });
    it('should not remove classnames unless told to', async () => {
      component.addClassname(classname1);
      component.addClassname(classname2);
      component.removeClassnames([classname1, classname2]);
      await componentIsStable(component);
      expect(component.classList.contains(testClassname)).toEqual(true);
      expect(component.classList.contains(classname1)).toEqual(false);
      expect(component.classList.contains(classname2)).toEqual(false);
    });
  });

  describe('removeClassnamesUnless: ', () => {
    beforeEach(async () => {
      component.addClassname(classname1);
      component.addClassname(classname2);
      await componentIsStable(component);
    });
    it('should not remove any classnames if all specified classnames are in the exclusion array', async () => {
      const expected = component.classList;
      component.removeClassnamesUnless([classname1, classname2], [classname1, classname2]);
      await componentIsStable(component);
      expect(component.classList).toEqual(expected);
    });
    it('should not remove classnames unless told to', async () => {
      component.removeClassnamesUnless([classname1, classname2], [testClassname]);
      await componentIsStable(component);
      expect(component.classList.contains(testClassname)).toEqual(true);
      expect(component.classList.contains(classname1)).toEqual(false);
      expect(component.classList.contains(classname2)).toEqual(false);
    });
    it('should gracefully handle unknown classnames', async () => {
      component.removeClassnamesUnless([classname1, failClassname], [testClassname]);
      await componentIsStable(component);
      expect(component.classList.contains(testClassname)).toEqual(true);
      expect(component.classList.contains(classname1)).toEqual(false);
      component.removeClassnamesUnless([classname2], [testClassname, failClassname]);
      await componentIsStable(component);
      expect(component.classList.contains(testClassname)).toEqual(true);
      expect(component.classList.contains(classname2)).toEqual(false);
    });
  });

  describe('updateEquilateralStyles: ', () => {
    it('should add passed string value to width and height and remove height and width if passed null', async () => {
      const expectedVal = '49px';
      component.updateEquilateralStyles('49px');
      await componentIsStable(component);
      expect(component.style.width).toEqual(expectedVal);
      expect(component.style.height).toEqual(expectedVal);
      component.updateEquilateralStyles(null);
      await componentIsStable(component);
      expect(component.style.width).toEqual('');
      expect(component.style.height).toEqual('');
    });
  });
});
