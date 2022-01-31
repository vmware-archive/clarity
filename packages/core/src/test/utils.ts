/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { TemplateResult, render } from 'lit';

export function createTestElement(template?: TemplateResult): Promise<HTMLElement> {
  const element = document.createElement('div');
  document.body.appendChild(element);

  if (template) {
    render(template, element);
  }

  return Promise.all(
    Array.from(document.querySelectorAll(':not(:defined)')).map(el => customElements.whenDefined(el.tagName))
  ).then(() => element);
}

export function removeTestElement(element: HTMLElement) {
  element.remove();
}

export function getComponentSlotContent(component: HTMLElement): { [name: string]: string } {
  return Array.from(component.shadowRoot?.querySelectorAll('slot') as NodeListOf<HTMLSlotElement>).reduce(
    (acc: { [name: string]: string }, slot: HTMLSlotElement) => {
      const name = slot.name.length > 0 ? slot.name : 'default';
      acc[name] = (slot.assignedNodes() as any[]).reduce((p, n) => {
        let returnDom = n.outerHTML;
        returnDom = n.outerHTML ? n.outerHTML : n.textContent.trim();
        return p + (returnDom ? returnDom : '');
      }, '');
      return acc;
    },
    {}
  );
}

function retry(
  fn: any,
  maxTries = 10,
  promise?: Promise<any>,
  promiseObject: { resolve: any; reject: any } = {
    resolve: null,
    reject: null,
  }
) {
  maxTries--;

  promise =
    promise ||
    new Promise((resolve, reject) => {
      promiseObject.resolve = resolve;
      promiseObject.reject = reject;
    });

  fn()
    .then((result: any) => {
      promiseObject.resolve(result);
    })
    .catch(() => {
      if (maxTries > 0) {
        retry(fn, maxTries, promise, promiseObject);
      } else {
        promiseObject.reject('Max attempts reached');
      }
    });

  return promise;
}

export function componentIsStable(component: any) {
  return retry(
    () =>
      // eslint-disable-next-line no-async-promise-executor
      new Promise(async (resolve, reject) => {
        const stable = await component.updateComplete;
        if (stable) {
          resolve('success');
        } else {
          reject('error');
        }
      })
  );
}

// Full set of mouse events, generated on click
export function emulatedClick(component: HTMLElement) {
  const event1 = new MouseEvent('mousedown');
  const event2 = new MouseEvent('mouseup');
  const event3 = new MouseEvent('click');
  component.dispatchEvent(event1);
  component.dispatchEvent(event2);
  component.dispatchEvent(event3);
}

/** helpful for capturing a single event in a async test rather than Jasmine `done()` */
export function onceEvent(element: HTMLElement | Document, event: string) {
  return new Promise<any>(resolve => {
    element.addEventListener(event, e => resolve(e));
  });
}
