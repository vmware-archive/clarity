/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { registerElementSafely } from './../utils/register.js';

/**
 * @experimental
 * experimental decorator, waiting on Angular issue to be resolved https://github.com/angular/angular/issues/31495
 * Class decorator factory that defines the decorated class as a custom element.
 *
 * ```
 * @customElement('my-element')
 * class MyElement {
 *   render() {
 *     return html``;
 *   }
 * }
 * ```
 */

// TC39 Decorators proposal
const standardCustomElement = (tagName: string, descriptor: ClassDescriptor) => {
  const { kind, elements } = descriptor;
  return {
    kind,
    elements,
    finisher(classDef: Constructor<HTMLElement>) {
      registerElementSafely(tagName, classDef);
    },
  };
};

// Legacy TS Decorator
const legacyCustomElement = (tagName: string, classDef: Constructor<HTMLElement>) => {
  registerElementSafely(tagName, classDef);
  return classDef as any;
};

export const customElement = (tagName: string) => (classOrDescriptor: Constructor<HTMLElement> | ClassDescriptor) => {
  return typeof classOrDescriptor === 'function'
    ? legacyCustomElement(tagName, classOrDescriptor)
    : standardCustomElement(tagName, classOrDescriptor);
};

// TC39 Decorators proposal
interface ClassDescriptor {
  kind: 'class';
  elements: ClassElement[];
  finisher?: <T>(classDef: Constructor<T>) => undefined | Constructor<T>;
}

interface ClassElement {
  kind: 'field' | 'method';
  key: PropertyKey;
  placement: 'static' | 'prototype' | 'own';
  initializer?: Function;
  extras?: ClassElement[];
  finisher?: <T>(classDef: Constructor<T>) => undefined | Constructor<T>;
  descriptor?: PropertyDescriptor;
}

export type Constructor<T> = {
  new (...args: any[]): T;
};
