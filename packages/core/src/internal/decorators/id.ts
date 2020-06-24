/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { LitElement } from 'lit-element';
import { createId } from './../utils/identity.js';

const legacyId = (descriptor: PropertyDescriptor, proto: {}, name: PropertyKey) => {
  Object.defineProperty(proto, name, descriptor);
};

const standardId = (descriptor: PropertyDescriptor, element: any) => ({
  kind: 'method',
  placement: 'prototype',
  key: element.key,
  descriptor,
});

export function id() {
  return (protoOrDescriptor: {} | any, name?: PropertyKey): any => {
    const descriptor = {
      get(this: LitElement) {
        const propertyName = name !== undefined ? name : protoOrDescriptor.key;
        if (!(this as any)[`__${propertyName}`]) {
          // _ is used to ensure number is not first since this can create an invalid css selector
          (this as any)[`__${propertyName}`] = createId();
        }
        return (this as any)[`__${propertyName}`];
      },
      enumerable: true,
      configurable: true,
    };
    return name !== undefined
      ? legacyId(descriptor, protoOrDescriptor as {}, name)
      : standardId(descriptor, protoOrDescriptor as any);
  };
}
