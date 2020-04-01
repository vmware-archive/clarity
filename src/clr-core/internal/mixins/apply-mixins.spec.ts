/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement } from 'lit-element';
import { registerElementSafely } from '../utils/register.js';
import { componentIsStable, createTestElement, removeTestElement, waitForComponent } from './../../test/utils.js';
import { applyMixins } from './apply-mixins.js';
import { UniqueId } from './unique-id.js';

class PristineElement extends LitElement {
  render() {
    return html`ohai`;
  }
}

registerElementSafely('apply-mixin-test-clean-element', PristineElement);

// Create mixin base element
class MixinBaseElement extends LitElement {}

applyMixins(MixinBaseElement, [UniqueId]);

interface MixinBaseElement extends LitElement, UniqueId {}

// Create mixin element
class MixinElement extends MixinBaseElement {
  render() {
    return html`aloha`;
  }
}
registerElementSafely('apply-mixin-test-dirty-element', MixinElement);

describe('ApplyMixin helper - ', () => {
  it('should not have mixin properties on parent class', () => {
    expect((LitElement as any)._uniqueId).toBeUndefined();
  });

  it('should not have mixin properties on unrelated classes', async () => {
    const testElement = createTestElement();
    testElement.innerHTML = `
      <apply-mixin-test-clean-element></apply-mixin-test-clean-element>
    `;
    await waitForComponent('apply-mixin-test-clean-element');
    const component = testElement.querySelector('apply-mixin-test-clean-element');
    await componentIsStable(component);
    expect((component as any)._uniqueId).toBeUndefined();
    removeTestElement(testElement);
  });

  it('should have mixin properties on expected classes', async () => {
    const testElement = createTestElement();
    testElement.innerHTML = `
      <apply-mixin-test-dirty-element></apply-mixin-test-dirty-element>
    `;
    await waitForComponent('apply-mixin-test-dirty-element');
    const component = testElement.querySelector('apply-mixin-test-dirty-element');
    await componentIsStable(component);
    expect((component as any)._uniqueId).toBeDefined();
    removeTestElement(testElement);
  });
});
