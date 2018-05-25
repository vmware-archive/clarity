/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { itIgnore } from '../../tests/tests.helpers';

import {
  getErrorShape,
  giveAngleShapeTitle,
  removeWhitespace,
  resetCallbacks,
  resetShapes,
  testAllShapes,
  testAllShapesRequiredAttributes,
} from './helpers.spec';
import { ClarityIcons } from './index';
import { AllShapes } from './shapes/all-shapes';
import { ChartShapes } from './shapes/chart-shapes';
import { CommerceShapes } from './shapes/commerce-shapes';
import { CoreShapes } from './shapes/core-shapes';
import { EssentialShapes } from './shapes/essential-shapes';
import { MediaShapes } from './shapes/media-shapes';
import { SocialShapes } from './shapes/social-shapes';
import { TechnologyShapes } from './shapes/technology-shapes';
import { TextEditShapes } from './shapes/text-edit-shapes';
import { TravelShapes } from './shapes/travel-shapes';
import { changeHandlerCallbacks } from './utils/shape-template-observer';
import { clrIconSVG } from './utils/svg-tag-generator';

// All tests failing here in IE stem from IE rearranging attributes and normalizing the elements, so simple
// innerHTML comparisons don't match these nuances.
// @TODO Fix icons tests so they run in IE by not comparing string literals but actually inspecting element composition

// This is a base test object for all sets
/* tslint:disable:no-string-literal */
const ALL_SETS = [
  { name: 'Commerce shapes', shapes: CommerceShapes, randomShape: { 'e-check': CommerceShapes['e-check'] } },
  { name: 'Essential shapes', shapes: EssentialShapes, randomShape: { pencil: EssentialShapes['pencil'] } },
  { name: 'Social shapes', shapes: SocialShapes, randomShape: { star: SocialShapes['star'] } },
  { name: 'Media shapes', shapes: MediaShapes, randomShape: { play: MediaShapes['play'] } },
  { name: 'Travel shapes', shapes: TravelShapes, randomShape: { car: TravelShapes['car'] } },
  { name: 'Technology shapes', shapes: TechnologyShapes, randomShape: { cpu: TechnologyShapes['cpu'] } },
  { name: 'Chart shapes', shapes: ChartShapes, randomShape: { 'bar-chart': ChartShapes['bar-chart'] } },
  { name: 'Text Edit shapes', shapes: TextEditShapes, randomShape: { bold: TextEditShapes['bold'] } },
];
/* tslint:enable:no-string-literal */

describe('ClarityIcons', () => {
  afterEach(() => {
    resetShapes();
  });

  describe('Global object for the API', () => {
    it('should set a global object', () => {
      expect(window.ClarityIcons).not.toBeUndefined();
    });
  });

  describe('ClarityIconsApi.get()', () => {
    it('should return all icons when no argument is passed in', () => {
      for (const shapeSet of ALL_SETS) {
        ClarityIcons.add(shapeSet.shapes);
      }

      const currentAllShapes = Object.assign({}, CoreShapes, ...ALL_SETS.map(set => set.shapes));
      testAllShapes(ClarityIcons, currentAllShapes);
    });

    it('should return all shapes from CoreShapes and few selected shapes from other sets if shapes are individually added in.', () => {
      for (const shapeSet of ALL_SETS) {
        ClarityIcons.add(shapeSet.randomShape);
      }
      const currentAllShapes = Object.assign({}, CoreShapes, ...ALL_SETS.map(set => set.randomShape));

      testAllShapes(ClarityIcons, currentAllShapes);
    });

    for (const shapeSet of ALL_SETS) {
      it(`should return shapes from ${shapeSet.name} and Core shapes if ${
        shapeSet.name
      } set is individually added in.`, () => {
        ClarityIcons.add(shapeSet.shapes);
        const currentAllShapes = Object.assign({}, CoreShapes, shapeSet.shapes);
        testAllShapes(ClarityIcons, currentAllShapes);
      });
    }

    it('should return all icons from all sets if the AllShapes set is added in', () => {
      ClarityIcons.add(AllShapes);
      const currentAllShapes = Object.assign({}, CoreShapes, ...ALL_SETS.map(set => set.shapes));
      testAllShapes(ClarityIcons, currentAllShapes);
    });

    it("should return EssentialShapes['pencil'] when 'pencil' is passed in after including EssentialShapes", () => {
      ClarityIcons.add(EssentialShapes);

      const expected = clrIconSVG(
        `<path class="clr-i-outline clr-i-outline-path-1" d="M33.87,8.32,28,2.42a2.07,2.07,0,0,0-2.92,0L4.27,23.2l-1.9,8.2a2.06,2.06,0,0,0,2,2.5,2.14,2.14,0,0,0,.43,0L13.09,32,33.87,11.24A2.07,2.07,0,0,0,33.87,8.32ZM12.09,30.2,4.32,31.83l1.77-7.62L21.66,8.7l6,6ZM29,13.25l-6-6,3.48-3.46,5.9,6Z"/>
                    <path class="clr-i-solid clr-i-solid-path-1" d="M4.22,23.2l-1.9,8.2a2.06,2.06,0,0,0,2,2.5,2.14,2.14,0,0,0,.43,0L13,32,28.84,16.22,20,7.4Z"/>
                    <path class="clr-i-solid clr-i-solid-path-2" d="M33.82,8.32l-5.9-5.9a2.07,2.07,0,0,0-2.92,0L21.72,5.7l8.83,8.83,3.28-3.28A2.07,2.07,0,0,0,33.82,8.32Z"/>`
      );
      expect(removeWhitespace(expected)).toEqual(removeWhitespace(ClarityIcons.get('pencil')));
    });
  });

  describe('ClarityIconsApi.add()', () => {
    it('should throw an error if the argument is not a valid object literal', () => {
      const expectedErrorMessage = `The argument must be an object literal passed in the following pattern: 
                { "shape-name": "shape-template" }`;

      expect(() => {
        ClarityIcons.add();
      }).toThrowError(expectedErrorMessage);
    });

    it('should throw an error if an empty string is set for a shape name.', () => {
      const expectedErrorMessage = `Shape name or alias must be a non-empty string!`;
      expect(() => {
        ClarityIcons.add({ '': '' });
      }).toThrowError(expectedErrorMessage);
    });

    it('should throw an error if a shape name contains a white space.', () => {
      const expectedErrorMessage = `Shape name or alias must not contain any whitespace characters!`;
      expect(() => {
        ClarityIcons.add({ 'invalid shapename': '' });
      }).toThrowError(expectedErrorMessage);
      expect(() => {
        ClarityIcons.add({ ' invalidShapename': '' });
      }).toThrowError(expectedErrorMessage);
      expect(() => {
        ClarityIcons.add({ 'invalidShapename ': '' });
      }).toThrowError(expectedErrorMessage);
    });

    it('should allow non-SVG to be assigned to ClarityIcons', () => {
      const anImgTag = '<img src="../assets/logo.png">';
      const aDivTag = '<div class="div-with-bgimg"></div>';
      const aFaIcon = '<span class="fa-icon fa-target"></span>';

      expect(() => {
        ClarityIcons.add({ 'an-img': anImgTag });
      }).not.toThrowError();

      expect(() => {
        ClarityIcons.add({ 'a-bgimg': aDivTag });
      }).not.toThrowError();

      expect(() => {
        ClarityIcons.add({ 'fa-icon': aFaIcon });
      }).not.toThrowError();

      expect(ClarityIcons.get('an-img')).toEqual(anImgTag);
      expect(ClarityIcons.get('a-bgimg')).toEqual(aDivTag);
      expect(ClarityIcons.get('fa-icon')).toEqual(aFaIcon);
    });

    it('should throw an error if an empty string is set for a shape name.', () => {
      const expectedErrorMessage = `Shape name or alias must be a non-empty string!`;
      expect(() => {
        ClarityIcons.add({ '': '' });
      }).toThrowError(expectedErrorMessage);
    });

    it('should add a new shape if a new shape name and template is passed in', () => {
      const currentShapeNumber = Object.keys(ClarityIcons.get()).length;

      const shapeName = 'shape-name';
      const shapeTemplate = '<svg><title>shape template</title></svg>';
      const shape = { [shapeName]: shapeTemplate };

      ClarityIcons.add(shape);

      expect(currentShapeNumber).toBe(Object.keys(ClarityIcons.get()).length - 1);
      expect(ClarityIcons.get(shapeName)).toBe(shapeTemplate);
    });

    it('should add new shapes if multiple shape names and templates are passed in one by one', () => {
      const currentShapeNumber = Object.keys(ClarityIcons.get()).length;

      const shapeName1 = 'shape-name-1';
      const shapeTemplate1 = '<svg><title>shape template 1</title></svg>';
      const shape1 = { [shapeName1]: shapeTemplate1 };

      const shapeName2 = 'shape-name-2';
      const shapeTemplate2 = '<svg><title>shape template 2</title></svg>';
      const shape2 = { [shapeName2]: shapeTemplate2 };

      const shapeName3 = 'shape-name-3';
      const shapeTemplate3 = '<svg><title>shape template 3</title></svg>';
      const shape3 = { [shapeName3]: shapeTemplate3 };

      ClarityIcons.add(shape1);
      ClarityIcons.add(shape2);
      ClarityIcons.add(shape3);

      expect(currentShapeNumber).toBe(Object.keys(ClarityIcons.get()).length - 3);
      expect(ClarityIcons.get(shapeName1)).toBe(shapeTemplate1);
      expect(ClarityIcons.get(shapeName2)).toBe(shapeTemplate2);
      expect(ClarityIcons.get(shapeName3)).toBe(shapeTemplate3);
    });

    it('should add new shapes if multiple shape names and templates are passed in one object', () => {
      const currentShapeNumber = Object.keys(ClarityIcons.get()).length;

      const shapeNameA = 'shape-name-a';
      const shapeTemplateA = '<svg><title>shape template A</title></svg>';
      const shapeA = { [shapeNameA]: shapeTemplateA };

      const shapeNameB = 'shape-name-b';
      const shapeTemplateB = '<svg><title>shape template B</title></svg>';
      const shapeB = { [shapeNameB]: shapeTemplateB };

      const shapeNameC = 'shape-name-c';
      const shapeTemplateC = '<svg><title>shape template C</title></svg>';
      const shapeC = { [shapeNameC]: shapeTemplateC };

      const multipleShapes = Object.assign({}, shapeA, shapeB, shapeC);

      ClarityIcons.add(multipleShapes);

      expect(currentShapeNumber).toBe(Object.keys(ClarityIcons.get()).length - 3);
      expect(ClarityIcons.get(shapeNameA)).toBe(shapeTemplateA);
      expect(ClarityIcons.get(shapeNameB)).toBe(shapeTemplateB);
      expect(ClarityIcons.get(shapeNameC)).toBe(shapeTemplateC);
    });

    it('should allow override', () => {
      const currentShapeNumber = Object.keys(ClarityIcons.get()).length;

      const shapeNameA = 'shape-name-same';
      const shapeTemplateA = '<svg><title>shape template A</title></svg>';
      const shapeA = { [shapeNameA]: shapeTemplateA };

      const shapeNameB = 'shape-name-same';
      const shapeTemplateB = '<svg><title>shape template B</title></svg>';
      const shapeB = { [shapeNameB]: shapeTemplateB };

      ClarityIcons.add(shapeA);
      ClarityIcons.add(shapeB);

      // Even though ClarityIcons.add() is called twice, only one more property should be added in
      // as the former one is replaced by the latter one.

      expect(currentShapeNumber).toBe(Object.keys(ClarityIcons.get()).length - 1);
      expect(ClarityIcons.get(shapeNameA)).toBe(shapeTemplateB);
    });
  });

  describe('ClarityIconsApi.alias()', () => {
    it('should throw an error if the argument is not a valid object literal', () => {
      const expectedErrorMessage = `The argument must be an object literal passed in the following pattern: 
                { "shape-name": ["alias-name", ...] }`;

      expect(() => {
        ClarityIcons.alias();
      }).toThrowError(expectedErrorMessage);
    });

    it("should throw an error if the shape name doesn't exist", () => {
      const shapeName = 'pen';
      const expectedErrorMessage = `An icon "${shapeName}" you are trying to set aliases to doesn't exist in the Clarity Icons sets!`;
      expect(() => {
        ClarityIcons.alias({ [shapeName]: ['write'] });
      }).toThrowError(expectedErrorMessage);
    });

    it('should allow aliases if the shape name exists', () => {
      ClarityIcons.add(CoreShapes);
      const currentShapeNumber = Object.keys(ClarityIcons.get()).length;

      ClarityIcons.alias({ check: ['check-mark', 'success-mark'] });

      expect(currentShapeNumber).toBe(Object.keys(ClarityIcons.get()).length - 2);
      expect(ClarityIcons.get('check-mark')).toBe(ClarityIcons.get('check'));
      expect(ClarityIcons.get('success-mark')).toBe(ClarityIcons.get('check'));
    });

    it('should allow to create an alias from another alias name', () => {
      ClarityIcons.add(CoreShapes);
      ClarityIcons.alias({ check: ['success-mark'] });

      const currentShapeNumber = Object.keys(ClarityIcons.get()).length;

      ClarityIcons.alias({ 'success-mark': ['ok-mark'] });

      expect(currentShapeNumber).toBe(Object.keys(ClarityIcons.get()).length - 1);
      expect(ClarityIcons.get('success-mark')).toBe(ClarityIcons.get('check'));
      expect(ClarityIcons.get('ok-mark')).toBe(ClarityIcons.get('check'));
    });

    it('should allow to create a new shape by overriding existing alias name', () => {
      ClarityIcons.add(CoreShapes);
      ClarityIcons.alias({ check: ['success-mark'] });

      const currentShapeNumber = Object.keys(ClarityIcons.get()).length;
      const shapeTemplateOverrideAlias = '<svg><title>shape template override alias</title></svg>';
      ClarityIcons.add({ 'success-mark': shapeTemplateOverrideAlias });

      // Even though ClarityIcons.add() is called once, no new shapes should be added in
      // as the existing icons's template is replaced by a new template only.

      expect(currentShapeNumber).toBe(Object.keys(ClarityIcons.get()).length);
      expect(ClarityIcons.get('success-mark')).toBe(shapeTemplateOverrideAlias);
    });
  });

  describe('ClarityIcon Custom Element', () => {
    beforeEach(() => {
      resetCallbacks();
    });

    it('should insert the SVG markup', () => {
      const clarityIcon = document.createElement('clr-icon');
      clarityIcon.setAttribute('shape', 'home');

      const divSampleElement = document.createElement('div');
      divSampleElement.innerHTML = ClarityIcons.get('home');

      const clarityIconInnerHTML = clarityIcon.innerHTML;

      expect(clarityIconInnerHTML).toBe(divSampleElement.innerHTML);
    });

    it('should control a size of an icon through size attribute', () => {
      const clarityIcon = document.createElement('clr-icon');
      clarityIcon.setAttribute('shape', 'home');
      clarityIcon.setAttribute('size', '25');

      expect(clarityIcon.style.width).toBe('25px');
      expect(clarityIcon.style.height).toBe('25px');
    });

    it('should be able to use non-svg template', () => {
      const testShape = `<img src="arrow-icon.png" alt="arrow-icon" width="42" height="42">`;
      ClarityIcons.add({ 'test-shape': testShape });

      const clarityIcon = document.createElement('clr-icon');
      clarityIcon.setAttribute('shape', 'test-shape');

      expect(clarityIcon.innerHTML).toContain(`src="arrow-icon.png"`);
      expect(clarityIcon.innerHTML).toContain(`width="42"`);
      expect(clarityIcon.innerHTML).toContain(`height="42"`);
      expect(clarityIcon.innerHTML).toContain(`alt="arrow-icon"`);
    });

    it('should append title text after non-svg template if title attribute is specified', () => {
      const clarityIcon = document.createElement('clr-icon') as ClarityIconElement;
      const testShape = `<img src="arrow-icon.png" alt="arrow-icon" width="42" height="42">`;
      ClarityIcons.add({ 'test-shape': testShape });

      clarityIcon.setAttribute('shape', 'test-shape');
      clarityIcon.setAttribute('title', 'my-custom-title');

      const clrIconUniqId = clarityIcon.clrIconUniqId;

      expect(clarityIcon.innerHTML).toContain(`src="arrow-icon.png"`);
      expect(clarityIcon.innerHTML).toContain(`width="42"`);
      expect(clarityIcon.innerHTML).toContain(`height="42"`);
      expect(clarityIcon.innerHTML).toContain(`alt="arrow-icon"`);
      expect(clarityIcon.innerHTML).toContain(
        `<span class="is-off-screen" id="${clrIconUniqId}">my-custom-title</span>`
      );
    });

    itIgnore(['ie'], 'should not inject anything if the custom title is not given', () => {
      const testShape = `<svg><g></g></svg>`;
      ClarityIcons.add({ 'test-shape': testShape });

      const clarityIcon = document.createElement('clr-icon');
      clarityIcon.setAttribute('shape', 'test-shape');

      expect(clarityIcon.hasAttribute('aria-labelledby')).toBeFalsy();
      expect(removeWhitespace(clarityIcon.innerHTML)).toBe(removeWhitespace(testShape));
    });

    itIgnore(['ie'], 'should inject a custom title into the template if title attribute is present', () => {
      const clarityIcon = document.createElement('clr-icon') as ClarityIconElement;
      const customTitle = 'my-custom-title';

      const timeStart = performance.now();
      clarityIcon.setAttribute('shape', 'angle');
      const settingShapeAttr = performance.now() - timeStart;

      clarityIcon.setAttribute('title', customTitle);
      const settingTitleAttr = performance.now() - timeStart;

      console.log('Icon shape attr setting took: ' + settingShapeAttr);
      console.log('Icon title attr setting took: ' + settingTitleAttr);

      const clrIconUniqId = clarityIcon.clrIconUniqId;
      const testShape = giveAngleShapeTitle(clrIconUniqId, customTitle);

      expect(removeWhitespace(clarityIcon.innerHTML)).toBe(removeWhitespace(testShape));
    });

    itIgnore(['ie'], "should inject custom title if given and template doesn't contain title tag", () => {
      const customTitle = 'my-custom-title';
      const shapeBeforeTitleAttrChange = `<svg><g></g></svg>`;

      ClarityIcons.add({ 'test-shape': shapeBeforeTitleAttrChange });

      const clarityIcon = document.createElement('clr-icon') as ClarityIconElement;

      clarityIcon.setAttribute('shape', 'test-shape');
      clarityIcon.setAttribute('title', customTitle);

      const clrIconUniqId = clarityIcon.clrIconUniqId;
      const shapeAfterTitleAttrChange = `<svg><g></g></svg><span class="is-off-screen" id="${clrIconUniqId}">${customTitle}</span>`;
      expect(removeWhitespace(clarityIcon.innerHTML)).toBe(removeWhitespace(shapeAfterTitleAttrChange));
    });

    itIgnore(['ie'], "should inject a custom title if it's is specified before the shape attribute specified", () => {
      const clarityIcon = document.createElement('clr-icon') as ClarityIconElement;
      const customTitle = 'my-custom-title';

      clarityIcon.setAttribute('title', customTitle);
      clarityIcon.setAttribute('shape', 'angle');

      const clrIconUniqId = clarityIcon.clrIconUniqId;
      const testShape = giveAngleShapeTitle(clrIconUniqId, customTitle);

      expect(removeWhitespace(clarityIcon.innerHTML)).toBe(removeWhitespace(testShape));
    });

    it('should update existing title if custom title is specified', () => {
      const clarityIcon = document.createElement('clr-icon') as ClarityIconElement;

      const oldCustomTitle = 'my-old-custom-title';
      const newCustomTitle = 'my-new-custom-title';

      clarityIcon.setAttribute('shape', 'angle');
      clarityIcon.setAttribute('title', oldCustomTitle);
      const clrIconUniqId = clarityIcon.clrIconUniqId;

      expect(clarityIcon.querySelector(`#${clrIconUniqId}`).textContent).toBe(oldCustomTitle); // existing title
      clarityIcon.setAttribute('title', newCustomTitle);

      expect(clarityIcon.querySelector(`#${clrIconUniqId}`).textContent).toBe(newCustomTitle);
    });

    it('should remove existing title if title attribute is removed', () => {
      const clarityIcon = document.createElement('clr-icon') as ClarityIconElement;

      const customTitle = 'my-custom-title';

      clarityIcon.setAttribute('shape', 'angle');
      clarityIcon.setAttribute('title', customTitle);
      const clrIconUniqId = clarityIcon.clrIconUniqId;

      expect(clarityIcon.querySelector(`#${clrIconUniqId}`).textContent).toBe(customTitle); // existing title
      clarityIcon.removeAttribute('title');

      expect(clarityIcon.querySelector(`#${clrIconUniqId}`)).toBeNull();
    });

    it('should remove existing title if title attribute is empty', () => {
      const clarityIcon = document.createElement('clr-icon') as ClarityIconElement;

      const customTitle = 'my-custom-title';

      clarityIcon.setAttribute('shape', 'angle');
      clarityIcon.setAttribute('title', customTitle);
      const clrIconUniqId = clarityIcon.clrIconUniqId;

      expect(clarityIcon.querySelector(`#${clrIconUniqId}`).textContent).toBe(customTitle); // existing title
      clarityIcon.setAttribute('title', '');

      expect(clarityIcon.querySelector(`#${clrIconUniqId}`)).toBeNull();
    });

    itIgnore(['ie'], 'should persist title even after shape attribute update', () => {
      const clarityIcon = document.createElement('clr-icon') as ClarityIconElement;
      const customTitle = 'my-custom-title';

      clarityIcon.setAttribute('shape', 'angle');
      clarityIcon.setAttribute('title', customTitle);

      const clrIconUniqId = clarityIcon.clrIconUniqId;
      const arrowShapeAfterTitleAttrChange = giveAngleShapeTitle(clrIconUniqId, customTitle);

      expect(removeWhitespace(clarityIcon.innerHTML)).toBe(removeWhitespace(arrowShapeAfterTitleAttrChange));

      const testShape = `<svg><title>test-shape</title><g></g></svg>`;
      ClarityIcons.add({ 'test-shape': testShape });

      const testShapeAfterShapeAttrChange = `<svg><title>test-shape</title><g></g></svg><span class="is-off-screen" id="${clrIconUniqId}">${customTitle}</span>`;

      clarityIcon.setAttribute('shape', 'test-shape');
      expect(removeWhitespace(clarityIcon.innerHTML)).toBe(removeWhitespace(testShapeAfterShapeAttrChange));
    });

    it('should add aria-labelledby attribute if title attribute is present', () => {
      const clarityIcon = document.createElement('clr-icon') as ClarityIconElement;

      const customTitle = 'my-custom-title';

      clarityIcon.setAttribute('shape', 'angle');
      clarityIcon.setAttribute('title', customTitle);

      const clrIconUniqId = clarityIcon.clrIconUniqId;
      expect(clarityIcon.getAttribute('aria-labelledby')).toBe(clrIconUniqId);
    });

    itIgnore(['ie'], 'should inject error shape if icon is not found', () => {
      const clarityIcon = document.createElement('clr-icon') as ClarityIconElement;
      const nonExistingShape = 'non-existing-icon';

      clarityIcon.setAttribute('shape', nonExistingShape);
      expect(removeWhitespace(clarityIcon.innerHTML)).toBe(removeWhitespace(getErrorShape()));
    });

    itIgnore(['ie'], 'should inject error shape with title if icon is not found', () => {
      const clarityIcon = document.createElement('clr-icon') as ClarityIconElement;
      const nonExistingShape = 'non-existing-icon';
      const customTitle = 'my-custom-title';

      clarityIcon.setAttribute('shape', nonExistingShape);
      clarityIcon.setAttribute('title', customTitle);

      const clrIconUniqId = clarityIcon.clrIconUniqId;

      expect(removeWhitespace(clarityIcon.innerHTML)).toBe(removeWhitespace(getErrorShape(clrIconUniqId, customTitle)));
    });

    itIgnore(['ie'], 'should reflect the updated shape template in injected icon', () => {
      const clarityIcon = document.createElement('clr-icon') as ClarityIconElement;
      const nonExistingShape = 'non-existing-icon';
      clarityIcon.setAttribute('shape', nonExistingShape);
      document.body.appendChild(clarityIcon);

      expect(removeWhitespace(clarityIcon.innerHTML)).toBe(removeWhitespace(getErrorShape()));

      let testShape = `<svg><g><title>first</title></g></svg>`;
      ClarityIcons.add({ 'non-existing-icon': testShape });
      expect(removeWhitespace(clarityIcon.innerHTML)).toBe(removeWhitespace(testShape));

      // testing multiple template changes
      testShape = `<svg><g><title>second</title></g></svg>`;
      ClarityIcons.add({ 'non-existing-icon': testShape });
      expect(removeWhitespace(clarityIcon.innerHTML)).toBe(removeWhitespace(testShape));
    });

    itIgnore(['ie'], 'should update template if template change before injected', () => {
      const testIcon = document.createElement('clr-icon') as ClarityIconElement;
      testIcon.setAttribute('shape', 'user');
      const testShape = `<svg><g><title>first</title></g></svg>`;
      ClarityIcons.add({ user: testShape });
      document.body.appendChild(testIcon);
      expect(removeWhitespace(testIcon.innerHTML)).toBe(removeWhitespace(testShape));
    });

    it('should add template change handler callbacks', () => {
      const userAttrName = 'user';
      const homeAttrName = 'home';
      const userIcon1 = document.createElement('clr-icon') as ClarityIconElement;
      userIcon1.setAttribute('shape', userAttrName);
      const userIcon2 = document.createElement('clr-icon') as ClarityIconElement;
      userIcon2.setAttribute('shape', userAttrName);
      const homeIcon = document.createElement('clr-icon') as ClarityIconElement;
      homeIcon.setAttribute('shape', homeAttrName);
      document.body.appendChild(userIcon1);
      document.body.appendChild(userIcon2);
      document.body.appendChild(homeIcon);

      expect(changeHandlerCallbacks[userAttrName].length).toBe(2);
      expect(changeHandlerCallbacks[homeAttrName].length).toBe(1);
    });

    it('should transfer change handler callback to updated shape name key', () => {
      const userAttrName = 'user';
      const homeAttrName = 'home';

      const testIcon = document.createElement('clr-icon') as ClarityIconElement;
      testIcon.setAttribute('shape', userAttrName);
      document.body.appendChild(testIcon);
      expect(changeHandlerCallbacks[userAttrName].length).toBe(1);
      testIcon.setAttribute('shape', homeAttrName);
      expect(changeHandlerCallbacks[userAttrName]).toBeUndefined();
      expect(changeHandlerCallbacks[homeAttrName].length).toBe(1);
      document.body.removeChild(testIcon);
      expect(changeHandlerCallbacks[homeAttrName]).toBeUndefined();
    });

    it('should remove template change handler callbacks when icon removed from the DOM', () => {
      const userAttrName = 'user';
      const homeAttrName = 'home';
      const userIcon1 = document.createElement('clr-icon') as ClarityIconElement;
      userIcon1.setAttribute('shape', userAttrName);
      const userIcon2 = document.createElement('clr-icon') as ClarityIconElement;
      userIcon2.setAttribute('shape', userAttrName);
      const homeIcon = document.createElement('clr-icon') as ClarityIconElement;
      homeIcon.setAttribute('shape', homeAttrName);
      document.body.appendChild(userIcon1);
      document.body.appendChild(userIcon2);
      document.body.appendChild(homeIcon);

      document.body.removeChild(userIcon1);
      document.body.removeChild(homeIcon);

      expect(changeHandlerCallbacks[userAttrName].length).toBe(1);
      expect(changeHandlerCallbacks[homeAttrName]).toBeUndefined();
      document.body.removeChild(userIcon2);
      expect(changeHandlerCallbacks[userAttrName]).toBeUndefined();
    });

    itIgnore(['ie'], 'should persist title when shape template gets updated', () => {
      const clarityIcon = document.createElement('clr-icon') as ClarityIconElement;
      const nonExistingShape = 'non-existing-icon';
      const customTitle = 'my-custom-title';
      const clrIconUniqId = clarityIcon.clrIconUniqId;

      clarityIcon.setAttribute('shape', nonExistingShape);
      clarityIcon.setAttribute('title', customTitle);
      document.body.appendChild(clarityIcon);

      expect(removeWhitespace(clarityIcon.innerHTML)).toBe(removeWhitespace(getErrorShape(clrIconUniqId, customTitle)));

      const testShape = `<svg><g></g></svg>`;
      ClarityIcons.add({ 'non-existing-icon': testShape });

      const testShapeAfterTemplateChange = `<svg><g></g></svg><span class="is-off-screen" id="${clrIconUniqId}">${customTitle}</span>`;
      expect(removeWhitespace(clarityIcon.innerHTML)).toBe(removeWhitespace(testShapeAfterTemplateChange));
    });
  });

  describe('SVG Icon Markups', () => {
    const testIconStyles = (shapes: any, exceptions?: string[]) => {
      let allShapes = Object.keys(shapes);

      if (exceptions && exceptions.length > 0) {
        allShapes = allShapes.filter(shape => {
          if (exceptions.indexOf(shape) === -1) {
            return shape;
          }
        });
      }

      for (const shapeName in allShapes) {
        if (allShapes.hasOwnProperty(shapeName)) {
          const template: string = allShapes[shapeName];

          expect(template.includes('fill=')).toBe(false);
          expect(template.includes('style=')).toBe(false);
        }
      }
    };

    it('CoreShapes should not include fill attribute', () => {
      testIconStyles(CoreShapes, ['vm-bug']);
    });

    for (const shapeSet of ALL_SETS) {
      it(`${shapeSet.name} should not include fill attribute`, () => {
        testIconStyles(shapeSet.name);
      });
    }

    it('No two shapes should have the same name unless their templates are identical', () => {
      const allShapeSets: any = [CoreShapes].concat(ALL_SETS.map(set => set.shapes));
      const shapesTested: any = {};
      const duplicatesFound: string[] = [];

      allShapeSets.map((shapeSet: any) => {
        for (const shapeName in shapeSet) {
          if (shapeSet.hasOwnProperty(shapeName)) {
            if (!shapesTested.hasOwnProperty(shapeName)) {
              shapesTested[shapeName] = shapeSet[shapeName];
            } else {
              duplicatesFound.push(shapeName);
              expect(removeWhitespace(shapeSet[shapeName])).toBe(removeWhitespace(shapesTested[shapeName]));
            }
          }
        }
      });

      if (duplicatesFound.length > 0) {
        console.log('Duplicated Icons: ' + duplicatesFound);
      }
    });

    it('each icons should have the required attributes only once in their templates', () => {
      const currentAllShapes = Object.assign({}, CoreShapes, ...ALL_SETS.map(set => set.shapes));
      testAllShapesRequiredAttributes(currentAllShapes);
    });
  });
});
