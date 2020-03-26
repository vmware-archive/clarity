/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

// tslint:disable-next-line
import { property as prop } from 'lit-element';
import { camelCaseToKebabCase } from '../utils/string.js';

/**
 * lit-element @property decorator with custom defaults.
 * https://lit-element.polymer-project.org/guide/properties#property-options
 *
 * A property decorator which creates a LitElement property which reflects a
 * corresponding attribute value. A PropertyDeclaration may optionally be
 * supplied to configure property features.
 */
export function property(options?: PropertyDeclaration<unknown, unknown>) {
  return (protoOrDescriptor: {}, name: string) => prop(getDefaultOptions(name, options))(protoOrDescriptor, name);
}

/**
 * https://developers.google.com/web/fundamentals/web-components/best-practices
 */
export function getDefaultOptions(
  propertyKey: string,
  options?: PropertyDeclaration<unknown, unknown>
): PropertyDeclaration {
  const type = options ? options.type : options;

  switch (type) {
    case Array:
      return { reflect: false, ...options };
    case Object:
      return { reflect: false, ...options };
    case String:
      return {
        reflect: true,
        attribute: camelCaseToKebabCase(propertyKey),
        converter: {
          toAttribute: (value: string) => (!!value ? value : null),
        },
        ...options,
      };
    case Number:
      return { reflect: true, attribute: camelCaseToKebabCase(propertyKey), ...options };
    case Boolean:
      return {
        reflect: true,
        attribute: camelCaseToKebabCase(propertyKey),
        converter: {
          // Mimic standard HTML boolean attributes + support "false" attribute values
          // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes
          fromAttribute: (value: string) => value !== 'false',
        },
        ...options,
      };
    case Date: {
      return {
        // Parse date strings from attributes but do not reflect back into attribute
        reflect: false,
        converter: {
          fromAttribute: (value: string) => new Date(value),
        },
        ...options,
      };
    }
    default:
      return options as PropertyDeclaration<unknown, unknown>;
  }
}

export interface PropertyDeclaration<Type = unknown, TypeHint = unknown> {
  noAccessor?: boolean;
  attribute?: boolean | string;
  type?: TypeHint;
  reflect?: boolean;
  converter?:
    | ((value: string, type?: TypeHint) => Type)
    | {
        fromAttribute?(value: string | null, type?: TypeHint): Type;
        toAttribute?(value: Type, type?: TypeHint): unknown;
      };
  hasChanged?(value: Type, oldValue: Type): boolean;
}
