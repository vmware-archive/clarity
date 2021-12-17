/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { registerElementSafely } from './../utils/registration.js';
import { Constructor, ClassDescriptor, classLegacyDecorator, classStandardDecorator } from './utils.js';

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

export const customElement = (tagName: string) => (classOrDescriptor: Constructor<HTMLElement> | ClassDescriptor) => {
  return typeof classOrDescriptor === 'function'
    ? classLegacyDecorator(tagName, classOrDescriptor, (tagName, classDef) => registerElementSafely(tagName, classDef))
    : classStandardDecorator(tagName, classOrDescriptor, (tagName, classDef) =>
        registerElementSafely(tagName, classDef)
      );
};
