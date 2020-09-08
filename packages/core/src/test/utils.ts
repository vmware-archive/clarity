/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { TemplateResult, render } from 'lit-html';

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
  return Array.from(component.shadowRoot.querySelectorAll('slot')).reduce(
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

function retry(fn: any, maxTries = 10, promise?: Promise<any>, promiseObject?: { resolve: any; reject: any }) {
  maxTries--;
  promiseObject = promiseObject || {
    resolve: null,
    reject: null,
  };

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
