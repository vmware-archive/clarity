/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { createTestElement, removeTestElement } from '@cds/core/test';

import { CdsNavigation, CdsNavigationGroup, CdsNavigationItem, CdsNavigationStart } from '@cds/core/navigation';
import '@cds/core/navigation/register.js';
import {
  FocusableElement,
  getNextFocusElement,
  getPreviousFocusElement,
  getToggleIconDirection,
  manageScreenReaderElements,
  removeFocus,
  setFocus,
  visibleElement,
} from './utils.js';

describe('navigation internal utilities', () => {
  let groupElement: CdsNavigationGroup;
  let groupItem: CdsNavigationItem;
  let groupInvisibleItem: CdsNavigationItem;
  let groupStart: CdsNavigationStart;
  let rootItem: CdsNavigationItem;
  let rootStart: CdsNavigationStart;
  let testElement: HTMLElement;
  let component: CdsNavigation;
  const testTemplate = html`
    <cds-navigation id="rootNavigation" expanded>
      <cds-navigation-start id="rootStart">Root start element</cds-navigation-start>
      <cds-navigation-group id="groupElement" expanded>
        <cds-navigation-start id="groupStart">Group start element</cds-navigation-start>
        <cds-navigation-item id="groupItem">Group item one</cds-navigation-item>
        <cds-navigation-item>Group item two</cds-navigation-item>
      </cds-navigation-group>
      <cds-navigation-group expanded>
        <cds-navigation-start>Group start element</cds-navigation-start>
        <cds-navigation-item id="invisibleItem">Group item one</cds-navigation-item>
        <cds-navigation-item>Group item two</cds-navigation-item>
      </cds-navigation-group>
      <cds-navigation-item id="rootItem"><a>Root item one</a></cds-navigation-item>
      <cds-navigation-item>Root item two</cds-navigation-item>
    </cds-navigation>
  `;

  beforeEach(async () => {
    testElement = await createTestElement(testTemplate);
    component = testElement.querySelector<CdsNavigation>('cds-navigation');
    groupElement = component.querySelector<CdsNavigationGroup>('cds-navigation-group#groupElement');
    groupItem = component.querySelector<CdsNavigationItem>('cds-navigation-item#groupItem');
    groupInvisibleItem = component.querySelector<CdsNavigationItem>('cds-navigation-item#groupInvisibleItem');
    groupStart = component.querySelector<CdsNavigationStart>('cds-navigation-start#groupStart');
    rootItem = component.querySelector<CdsNavigationItem>('cds-navigation-item#rootItem');
    rootStart = component.querySelector<CdsNavigationStart>('cds-navigation-start#rootStart');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  describe('manage FocusableElements', () => {
    it('and get the previous focusable element', () => {
      const focusableElements: FocusableElement[] = [rootStart, rootItem, groupStart, groupItem];
      expect(getPreviousFocusElement(rootStart, focusableElements)).toBe(groupItem, 'with head call previous behavior');

      expect(getPreviousFocusElement(groupStart, focusableElements)).toBe(rootItem, 'with standard previous behavior');
    });

    it('and get the next focusable element', () => {
      const focusableElements: FocusableElement[] = [rootStart, rootItem, groupStart, groupItem];

      expect(getNextFocusElement(rootItem, focusableElements)).toBe(groupStart, 'with standard next behavior');

      expect(getNextFocusElement(groupItem, focusableElements)).toBe(rootStart, 'with tail call next behavior');
    });

    it('by identifying visible group start elements', async () => {
      // group starts
      expect(visibleElement(groupStart)).toBe(true);
      groupElement.addEventListener('expandedChange', () => {
        expect(visibleElement(groupStart)).toBe(false);
      });
      groupElement.removeAttribute('expanded');
    });

    it('determines elements that are not visible', () => {
      expect(visibleElement(groupInvisibleItem)).toBe(false);
    });

    it('by identifying visible group item elements', () => {
      // group starts
      expect(visibleElement(groupItem)).toBe(true);
      groupElement.addEventListener('expandedChange', () => {
        expect(visibleElement(groupItem)).toBeNull();
      });
      groupElement.removeAttribute('expanded');
    });

    it('by setting and removing focus', async () => {
      // Start elements implement FocusableElement interface
      setFocus(rootStart);
      expect(rootStart.hasFocus).toBeTruthy('cds-navigation-start hasFocus state is broken');
      removeFocus(rootStart);
      expect(rootStart.hasFocus).toBeFalsy('cds-navigation-start element is not focused');

      // Item elements implement FocusableElement interface
      setFocus(rootItem);
      expect(rootItem.hasFocus).toBeTruthy('cds-navigation-item hasFocus state is broken');
      removeFocus(rootItem);
      expect(rootItem.hasFocus).toBeFalsy('cds-navigation-item element is still focusable');
    });
  });

  describe('will getToggleIconDirections', () => {
    it('when cds-navigation-group element is collapsed', () => {
      groupStart.expanded = false;
      expect(getToggleIconDirection(groupStart)).toBe('right');
    });

    it('when cds-navigation-group element is expanded', () => {
      groupStart.expanded = true;
      expect(getToggleIconDirection(groupStart)).toBe('down');
    });

    it('when cds-navigation element is expanded', () => {
      rootStart.expandedRoot = true;
      expect(getToggleIconDirection(rootStart)).toBe('left');
    });

    it('when cds-navigation element is collapsed', () => {
      rootStart.expandedRoot = false;
      expect(getToggleIconDirection(rootStart)).toBe('right');
    });
  });

  describe('manageScreenReaderElements', () => {
    let testSpan: HTMLSpanElement;
    let wrapperElement: HTMLDivElement;

    beforeEach(() => {
      wrapperElement = document.createElement('div');
      testSpan = document.createElement('span');
      testSpan.textContent = 'hello wrapper';
      wrapperElement.append(testSpan);
    });

    afterEach(() => {
      removeTestElement(testSpan);
    });

    it('by adding and removing the screen reader only token', () => {
      expect(testSpan.getAttribute('cds-layout')).toBeNull();
      manageScreenReaderElements(wrapperElement, false);
      expect(testSpan.getAttribute('cds-layout')).toBe('display:screen-reader-only');
      manageScreenReaderElements(wrapperElement, true);
      expect(testSpan.getAttribute('cds-layout')).toBeNull();
    });
  });
});
