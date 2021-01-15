/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { animate } from './animate.js';
import {
  Animatable,
  AnimatableElement,
  event,
  EventEmitter,
  property,
  registerElementSafely,
} from '@cds/core/internal';
import { html, LitElement } from 'lit-element';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';

declare global {
  interface HTMLElementTagNameMap {
    'test-animate-element': HTMLElement;
    'test-empty-animate-element': HTMLElement;
  }
}

@animate({
  isValid: {
    yes: 'something',
    no: 'nothing',
  },
})
class TestAnimateElement extends LitElement implements Animatable {
  @property({ type: String })
  cdsMotion = 'on';

  @event()
  cdsMotionChange: EventEmitter<string>;

  render() {
    return html`<slot></slot>`;
  }
}

// sanity check if bad data comes through
@animate(null)
class TestEmptyAnimateElement extends LitElement implements Animatable {
  @property({ type: String })
  cdsMotion = 'on';

  @event()
  cdsMotionChange: EventEmitter<string>;

  render() {
    return html`<slot></slot>`;
  }
}

registerElementSafely('test-animate-element', TestAnimateElement);
registerElementSafely('test-empty-animate-element', TestEmptyAnimateElement);

describe('animate decorator', () => {
  let testElement: HTMLElement;
  let emptyElement: HTMLElement;
  let component: AnimatableElement;
  let emptyComponent: AnimatableElement;

  beforeEach(async () => {
    testElement = await createTestElement(html` <test-animate-element></test-animate-element> `);
    component = testElement.querySelector<AnimatableElement>('test-animate-element');
    emptyElement = await createTestElement(html` <test-empty-animate-element></test-empty-animate-element> `);
    emptyComponent = emptyElement.querySelector<AnimatableElement>('test-empty-animate-element');
  });

  afterEach(() => {
    removeTestElement(testElement);
    removeTestElement(emptyElement);
  });

  it('should set _animations hidden property', async () => {
    await componentIsStable(component);
    expect(component._animations).toBeDefined();
    expect(component._animations.isValid.yes).toBe('something');
    expect(component._animations.isValid.no).toBe('nothing');
  });

  it('should handle bad data', async () => {
    await componentIsStable(emptyComponent);
    expect(emptyComponent._animations).toBeUndefined();
  });
});
