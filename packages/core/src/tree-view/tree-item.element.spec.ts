/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import '@cds/core/tree-view/register.js';
import { CdsTreeItem } from '@cds/core/tree-view';
import { CdsProgressCircle } from '@cds/core/progress-circle';
import { componentIsStable, createTestElement, onceEvent, removeTestElement } from '@cds/core/test';

describe('tree item element', () => {
  let testElement: HTMLElement;
  let component: CdsTreeItem;
  const placeholderText = 'Tree Placeholder';

  beforeEach(async () => {
    testElement = await createTestElement(html`<cds-tree-item>${placeholderText}</cds-tree-item>`);
    component = testElement.querySelector<CdsTreeItem>('cds-tree-item');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create the component', async () => {
    await componentIsStable(component);
    expect(component.innerText).toBe(placeholderText);
  });

  it('should have role treeitem', async () => {
    await componentIsStable(component);
    expect(component.getAttribute('role')).toBe('treeitem');
  });

  it('should show progress circle if loading', async () => {
    await componentIsStable(component);

    let progCircle = component.shadowRoot.querySelector<CdsProgressCircle>('cds-progress-circle');
    expect(progCircle).toBeNull();

    component.loading = true;
    await componentIsStable(component);

    progCircle = component.shadowRoot.querySelector<CdsProgressCircle>('cds-progress-circle');
    expect(progCircle).toBeDefined();
  });

  it('should sync aria-expanded when expanded changes', async () => {
    await componentIsStable(component);
    expect(component.getAttribute('aria-expanded')).toBeNull();

    component.expandable = true;
    component.expanded = true;
    await componentIsStable(component);
    expect(component.getAttribute('aria-expanded')).toBe('true');

    component.expanded = false;
    await componentIsStable(component);
    expect(component.getAttribute('aria-expanded')).toBe('false');
  });

  it('should sync aria-selected when selected changes', async () => {
    await componentIsStable(component);
    expect(component.getAttribute('aria-selected')).toBeNull();

    component.multiSelect = true;
    component.selected = true;
    await componentIsStable(component);
    expect(component.getAttribute('aria-selected')).toBe('true');

    component.selected = false;
    await componentIsStable(component);
    expect(component.getAttribute('aria-selected')).toBe('false');
  });

  it('should emit an expandedChange event when expand/collapse icon is clicked', async () => {
    await componentIsStable(component);

    component.expandable = true;
    await componentIsStable(component);

    const event = onceEvent(component, 'expandedChange');
    const itemCaret = component.shadowRoot.querySelector<HTMLElement>('[part="expand-collapse-icon"]');
    expect(itemCaret).toBeDefined();
    itemCaret.click();

    expect((await event).detail).toBe(true);
  });

  it('should set action expanded state when panel is expanded', async () => {
    component.expandable = true;
    await componentIsStable(component);
    expect(component.shadowRoot.querySelector('cds-button-expand').expanded).toBe(false);

    component.expanded = true;
    await componentIsStable(component);
    expect(component.shadowRoot.querySelector('cds-button-expand').expanded).toBe(true);
  });

  it('should emit a selectedChange event when an item is clicked', async () => {
    await componentIsStable(component);
    const event = onceEvent(component, 'selectedChange');
    const item = component.shadowRoot.querySelector<HTMLElement>('.item-content');
    expect(item).toBeDefined();
    item.click();
    expect((await event).detail).toBe(true);
  });

  it('should display the expand button when expandable', async () => {
    await componentIsStable(component);
    const expandButtonNull = component.shadowRoot.querySelector('cds-button-expand');
    expect(expandButtonNull).toBeNull();
    component.expandable = true;
    await componentIsStable(component);
    const expandButton = component.shadowRoot.querySelector('cds-button-expand');
    expect(expandButton.tagName).toBe('CDS-BUTTON-EXPAND');
  });
});
