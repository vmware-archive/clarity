/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import '@cds/core/tree-view/register.js';
import { CdsTree } from '@cds/core/tree-view';
import { componentIsStable, createTestElement, onceEvent, removeTestElement } from '@cds/core/test';

describe('tree element', () => {
  let testElement: HTMLElement;
  let component: CdsTree;
  const placeholderText = 'Tree Placeholder';

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create the component', async () => {
    testElement = await createTestElement(html`<cds-tree>${placeholderText}</cds-tree>`);
    component = testElement.querySelector<CdsTree>('cds-tree');

    await componentIsStable(component);
    expect(component.innerText).toBe(placeholderText);
  });

  it('should have role tree', async () => {
    testElement = await createTestElement(html`<cds-tree>${placeholderText}</cds-tree>`);
    component = testElement.querySelector<CdsTree>('cds-tree');

    await componentIsStable(component);
    expect(component.getAttribute('role')).toBe('tree');
  });

  it('should sync aria-multiselectable when multiSelect changes', async () => {
    testElement = await createTestElement(html`<cds-tree>${placeholderText}</cds-tree>`);
    component = testElement.querySelector<CdsTree>('cds-tree');

    await componentIsStable(component);
    expect(component.getAttribute('aria-multiselectable')).toBe('false');

    component.multiSelect = true;
    await componentIsStable(component);
    expect(component.getAttribute('aria-multiselectable')).toBe('true');
  });

  it('should sync its multiSelect prop to its children', async () => {
    testElement = await createTestElement(html`
      <cds-tree>
        <cds-tree-item>1</cds-tree-item>
        <cds-tree-item>2</cds-tree-item>
        <cds-tree-item>3</cds-tree-item>
      </cds-tree>
    `);
    component = testElement.querySelector<CdsTree>('cds-tree');

    await componentIsStable(component);
    let treeItemChildren = testElement.querySelectorAll('cds-tree-item');
    expect(treeItemChildren[0].multiSelect).toBe(false);
    expect(treeItemChildren[1].multiSelect).toBe(false);
    expect(treeItemChildren[2].multiSelect).toBe(false);

    component.multiSelect = true;
    await componentIsStable(component);
    treeItemChildren = testElement.querySelectorAll('cds-tree-item');
    expect(treeItemChildren[0].multiSelect).toBe(true);
    expect(treeItemChildren[1].multiSelect).toBe(true);
    expect(treeItemChildren[2].multiSelect).toBe(true);
  });

  it('should make the first tree item child focusable on focus', async () => {
    testElement = await createTestElement(html`
      <cds-tree>
        <cds-tree-item>1</cds-tree-item>
        <cds-tree-item>2</cds-tree-item>
        <cds-tree-item>3</cds-tree-item>
      </cds-tree>
    `);
    component = testElement.querySelector<CdsTree>('cds-tree');
    component.focus();
    await componentIsStable(component);
    const treeItemChildren = testElement.querySelectorAll('cds-tree-item');
    expect(component.ariaActiveDescendant).toBeDefined();
    expect(component.ariaActiveDescendant).toEqual(treeItemChildren[0].id);
  });

  it('should make the first selected tree item child focusable if available', async () => {
    testElement = await createTestElement(html`
      <cds-tree>
        <cds-tree-item>1</cds-tree-item>
        <cds-tree-item selected>2</cds-tree-item>
        <cds-tree-item>3</cds-tree-item>
      </cds-tree>
    `);
    component = testElement.querySelector<CdsTree>('cds-tree');
    component.focus();
    await componentIsStable(component);
    const treeItemChildren = testElement.querySelectorAll('cds-tree-item');
    expect(component.ariaActiveDescendant).toBeDefined();
    expect(component.ariaActiveDescendant).toEqual(treeItemChildren[1].id);
  });

  it('should update aria-activedescendant when an item is clicked', async () => {
    testElement = await createTestElement(html`
      <cds-tree>
        <cds-tree-item>1</cds-tree-item>
        <cds-tree-item>2</cds-tree-item>
        <cds-tree-item>3</cds-tree-item>
      </cds-tree>
    `);
    component = testElement.querySelector<CdsTree>('cds-tree');

    await componentIsStable(component);
    const treeItemChildren = testElement.querySelectorAll('cds-tree-item');

    treeItemChildren[2].click();

    await componentIsStable(component);
    expect(component.ariaActiveDescendant).toBeDefined();
    expect(component.ariaActiveDescendant).toEqual(treeItemChildren[2].id);
  });
});

describe('keyboard navigation', () => {
  let testElement: HTMLElement;
  let component: CdsTree;

  beforeEach(async () => {
    testElement = await createTestElement(html`
      <cds-tree>
        <cds-tree-item expanded>
          1
          <cds-tree-item>
            1-1
            <cds-tree-item>
              1-1-1
            </cds-tree-item>
          </cds-tree-item>
          <cds-tree-item>1-2</cds-tree-item>
        </cds-tree-item>
        <cds-tree-item>2</cds-tree-item>
        <cds-tree-item>3</cds-tree-item>
      </cds-tree>
    `);
    component = testElement.querySelector<CdsTree>('cds-tree');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  describe('arrow-left key - ', () => {
    it('should emit expandedChange event if expanded', async () => {
      await componentIsStable(component);
      const treeItemChildren = testElement.querySelectorAll('cds-tree-item');
      component.focus();

      await componentIsStable(component);
      const event = onceEvent(treeItemChildren[0], 'expandedChange');

      component.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft' }));
      expect((await event).detail).toBe(false);
    });

    it('should move focus to parent if not expanded', async () => {
      await componentIsStable(component);
      let treeItemChildren = testElement.querySelectorAll('cds-tree-item');
      component.focus();

      await componentIsStable(component);
      treeItemChildren[1].selected = true;

      await componentIsStable(component);
      treeItemChildren[1].focus();
      component.ariaActiveDescendant = treeItemChildren[1].id;

      await componentIsStable(component);
      component.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft' }));

      await componentIsStable(component);
      treeItemChildren = testElement.querySelectorAll('cds-tree-item');
      expect(component.ariaActiveDescendant).toBeDefined();
      expect(component.ariaActiveDescendant).toEqual(treeItemChildren[0].id);
    });

    it('should move focus to parent if end node', async () => {
      await componentIsStable(component);
      let treeItemChildren = testElement.querySelectorAll('cds-tree-item');
      component.focus();

      await componentIsStable(component);
      treeItemChildren[3].focus();
      component.ariaActiveDescendant = treeItemChildren[3].id;

      await componentIsStable(component);
      component.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft' }));

      await componentIsStable(component);
      treeItemChildren = testElement.querySelectorAll('cds-tree-item');
      expect(component.ariaActiveDescendant).toBeDefined();
      expect(component.ariaActiveDescendant).toEqual(treeItemChildren[0].id);
    });
  });

  describe('arrow-right key - ', () => {
    it('should emit expandedChange event if not expanded', async () => {
      await componentIsStable(component);
      const treeItemChildren = testElement.querySelectorAll('cds-tree-item');
      component.focus();

      await componentIsStable(component);
      treeItemChildren[1].focus();
      component.ariaActiveDescendant = treeItemChildren[1].id;

      const event = onceEvent(treeItemChildren[1], 'expandedChange');
      component.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowLeft', key: 'ArrowRight' }));
      expect((await event).detail).toBe(true);
    });

    it('should move focus to first child node if expanded', async () => {
      await componentIsStable(component);
      let treeItemChildren = testElement.querySelectorAll('cds-tree-item');
      component.focus();

      await componentIsStable(component);
      component.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowRight', key: 'ArrowRight' }));

      await componentIsStable(component);
      treeItemChildren = testElement.querySelectorAll('cds-tree-item');
      expect(component.ariaActiveDescendant).toBeDefined();
      expect(component.ariaActiveDescendant).toEqual(treeItemChildren[1].id);
    });
  });

  describe('arrow-down key - ', () => {
    it('should move focus to next child', async () => {
      await componentIsStable(component);
      let treeItemChildren = testElement.querySelectorAll('cds-tree-item');
      component.focus();

      await componentIsStable(component);
      component.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowDown', key: 'ArrowDown' }));

      await componentIsStable(component);
      treeItemChildren = testElement.querySelectorAll('cds-tree-item');
      expect(component.ariaActiveDescendant).toBeDefined();
      expect(component.ariaActiveDescendant).toEqual(treeItemChildren[1].id);
    });
  });

  describe('arrow-up key - ', () => {
    it('should move focus to next child', async () => {
      await componentIsStable(component);
      let treeItemChildren = testElement.querySelectorAll('cds-tree-item');
      component.focus();

      await componentIsStable(component);
      treeItemChildren[1].focus();
      component.ariaActiveDescendant = treeItemChildren[1].id;

      await componentIsStable(component);
      component.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowUp', key: 'ArrowUp' }));

      await componentIsStable(component);
      treeItemChildren = testElement.querySelectorAll('cds-tree-item');
      expect(component.ariaActiveDescendant).toBeDefined();
      expect(component.ariaActiveDescendant).toEqual(treeItemChildren[0].id);
    });
  });

  describe('home key - ', () => {
    it('should move focus to first child', async () => {
      await componentIsStable(component);
      let treeItemChildren = testElement.querySelectorAll('cds-tree-item');
      component.focus();

      await componentIsStable(component);
      treeItemChildren[1].focus();
      component.ariaActiveDescendant = treeItemChildren[1].id;

      await componentIsStable(component);
      component.dispatchEvent(new KeyboardEvent('keydown', { code: 'Home', key: 'Home' }));

      await componentIsStable(component);
      treeItemChildren = testElement.querySelectorAll('cds-tree-item');
      expect(component.ariaActiveDescendant).toBeDefined();
      expect(component.ariaActiveDescendant).toEqual(treeItemChildren[0].id);
    });
  });

  describe('end key - ', () => {
    it('should move focus to last child', async () => {
      await componentIsStable(component);
      let treeItemChildren = testElement.querySelectorAll('cds-tree-item');
      component.focus();

      await componentIsStable(component);
      component.dispatchEvent(new KeyboardEvent('keydown', { code: 'End', key: 'End' }));

      await componentIsStable(component);
      treeItemChildren = testElement.querySelectorAll('cds-tree-item');
      expect(component.ariaActiveDescendant).toBeDefined();
      expect(component.ariaActiveDescendant).toEqual(treeItemChildren[5].id);
    });
  });

  describe('enter key - ', () => {
    it('should emit expandedChange event if expandable', async () => {
      await componentIsStable(component);
      const treeItemChildren = testElement.querySelectorAll('cds-tree-item');
      component.focus();

      await componentIsStable(component);
      const event = onceEvent(treeItemChildren[0], 'expandedChange');
      component.dispatchEvent(new KeyboardEvent('keydown', { code: 'Enter', key: 'Enter' }));
      expect((await event).detail).toBe(false);
    });

    it('should click on a link inside tree node', async () => {
      testElement = await createTestElement(html`
        <cds-tree>
          <cds-tree-item>
            <a id="link1" href="#">link</a>
          </cds-tree-item>
          <cds-tree-item>
            <a href="#">link</a>
          </cds-tree-item>
          <cds-tree-item>
            <a href="#">link</a>
          </cds-tree-item>
        </cds-tree>
      `);
      component = testElement.querySelector<CdsTree>('cds-tree');
      await componentIsStable(component);
      const link = testElement.querySelector<HTMLElement>('#link1');
      component.focus();
      await componentIsStable(component);

      const event = onceEvent(link, 'click');
      component.dispatchEvent(new KeyboardEvent('keydown', { code: 'Enter', key: 'Enter' }));
      expect(await event).toBeTruthy();
    });
  });

  describe('space key - ', () => {
    it('should emit selectedChange event if selectable', async () => {
      await componentIsStable(component);
      const treeItemChildren = testElement.querySelectorAll('cds-tree-item');
      component.focus();

      await componentIsStable(component);

      const event = onceEvent(treeItemChildren[0], 'selectedChange');
      component.dispatchEvent(new KeyboardEvent('keydown', { code: 'Space', key: ' ' }));
      expect((await event).detail).toBe(true);
    });

    it('should click on a link inside tree node', async () => {
      testElement = await createTestElement(html`
        <cds-tree>
          <cds-tree-item>
            <a id="link1" href="#">link</a>
          </cds-tree-item>
          <cds-tree-item>
            <a href="#">link</a>
          </cds-tree-item>
          <cds-tree-item>
            <a href="#">link</a>
          </cds-tree-item>
        </cds-tree>
      `);
      component = testElement.querySelector<CdsTree>('cds-tree');
      await componentIsStable(component);
      const link = testElement.querySelector<HTMLElement>('#link1');
      component.focus();
      await componentIsStable(component);
      const event = onceEvent(link, 'click');
      component.dispatchEvent(new KeyboardEvent('keydown', { code: 'Space', key: ' ' }));
      expect((await event).detail).toBe(0);
    });
  });
});
