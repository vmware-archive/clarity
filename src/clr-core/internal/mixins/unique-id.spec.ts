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

const tagName = 'test-id-element';

class UniqueIdTestBaseElement extends LitElement {}

applyMixins(UniqueIdTestBaseElement, [UniqueId]);

class UniqueIdTestElement extends UniqueIdTestBaseElement {
  static get properties() {
    return {
      id: { type: String, reflect: true },
    };
  }
  firstUpdated() {
    this.id = this._idPrefix + this._uniqueId;
    this.setAttribute('id', this.id);
  }
  render() {
    return html`ohai`;
  }
}

interface UniqueIdTestElement extends LitElement, UniqueId {}
registerElementSafely(tagName, UniqueIdTestElement);

describe('UniqueId mixin - ', () => {
  let testElement: HTMLElement;
  let component: UniqueIdTestElement;
  let components: NodeListOf<UniqueIdTestElement>;

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = [
      '<',
      tagName,
      " class='testme'></",
      tagName,
      '>',
      '<',
      tagName,
      '></',
      tagName,
      '>',
      '<',
      tagName,
      '></',
      tagName,
      '>',
    ].join('');
    await waitForComponent(tagName);
    component = testElement.querySelector<UniqueIdTestElement>(tagName + '.testme');
    components = testElement.querySelectorAll(tagName);
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  describe('uniqueId: ', () => {
    it('should increment with each new component', async () => {
      await componentIsStable(component);
      const testIds = [components[0]._uniqueId, components[1]._uniqueId, components[2]._uniqueId];
      const highestIdNumber = Math.max.apply(null, testIds);
      const lowestIdNumber = Math.min.apply(null, testIds);
      expect(highestIdNumber - lowestIdNumber).toEqual(2);
      expect(testIds[0]).not.toEqual(testIds[1]);
      expect(testIds[0]).not.toEqual(testIds[2]);
      expect(testIds[1]).not.toEqual(testIds[2]);
    });
  });

  it('should have the mixin properties on the component', async () => {
    await componentIsStable(component);
    expect(component._uniqueId).toBeDefined();
    expect(component._idPrefix).toBeDefined();
  });

  describe('idPrefix: ', () => {
    it('should include a lowercased tagname with a trailing dash', async () => {
      await componentIsStable(component);
      expect(component._idPrefix).toEqual(tagName + '-');
    });
  });

  it('should be able to live on the element peaceably', async () => {
    await componentIsStable(component);
    const expectedId = component._idPrefix + component._uniqueId.toString();
    expect(component.getAttribute('id')).toEqual(expectedId);
  });
});
