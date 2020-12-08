/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test/utils';
import { html } from 'lit-element';
import { ClarityIcons } from '../icon.service.js';
import { CdsIcon } from '../index.js';
import { IconShapeCollection } from '../interfaces/icon.interfaces.js';
import { hasAlertBadge } from './icon.svg-helpers.js';

const testIcon: IconShapeCollection = {
  outline: '<path d="outline-svg"></path>',
  solid: '<path d="solid-svg"></path>',
  outlineBadged: '<path d="outline-badged-svg"></path>',
  outlineAlerted: '<path d="outline-alerted-svg"></path>',
  solidBadged: '<path d="solid-badged-svg"></path>',
  solidAlerted: '<path d="solid-alerted-svg"></path>',
};

describe('icon svg helpers:', () => {
  let testElement: HTMLElement;
  let component: CdsIcon;

  beforeAll(() => {
    ClarityIcons.addIcons(['test', testIcon]);
  });

  beforeEach(async () => {
    testElement = await createTestElement(html`<cds-icon shape="test"></cds-icon>`);
    component = testElement.querySelector<CdsIcon>('cds-icon');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should check if icon has a alert style badge', async () => {
    component.badge = 'warning-triangle';
    await componentIsStable(component);
    expect(hasAlertBadge(component)).toBe(true);
  });

  it('should get alert badge svg template', async () => {
    component.badge = 'warning-triangle';
    await componentIsStable(component);
    expect(component.shadowRoot.innerHTML).toContain('alert');
    expect(component.shadowRoot.innerHTML).not.toContain('badge');
  });

  it('should get circle badge svg template', async () => {
    component.badge = true;
    await componentIsStable(component);
    expect(component.shadowRoot.innerHTML).toContain('badge');
    expect(component.shadowRoot.innerHTML).not.toContain('alert');
  });

  it('should get icon svg template', async () => {
    await componentIsStable(component);
    expect(component.shadowRoot.innerHTML).toContain(testIcon.outline);

    component.badge = 'success';
    await componentIsStable(component);
    expect(component.shadowRoot.innerHTML).toContain(testIcon.outlineBadged);

    component.badge = 'warning-triangle';
    await componentIsStable(component);
    expect(component.shadowRoot.innerHTML).toContain(testIcon.outlineAlerted);

    component.solid = true;
    component.badge = false;
    await componentIsStable(component);
    expect(component.shadowRoot.innerHTML).toContain(testIcon.solid);

    component.solid = true;
    component.badge = 'success';
    await componentIsStable(component);
    expect(component.shadowRoot.innerHTML).toContain(testIcon.solidBadged);

    component.solid = true;
    component.badge = 'warning-triangle';
    await componentIsStable(component);
    expect(component.shadowRoot.innerHTML).toContain(testIcon.solidAlerted);
  });
});
