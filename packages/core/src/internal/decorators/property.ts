/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { PropertyValues, PropertyDeclaration } from 'lit';
import { property as _property } from 'lit/decorators/property.js';
import { camelCaseToKebabCase, kebabCaseToPascalCase, capitalizeFirstLetter } from '../utils/string.js';
import { LogService } from '../services/log.service.js';
import { getAngularVersion, getReactVersion, getVueVersion } from '../utils/framework.js';
import { isNilOrEmpty } from '../utils/identity.js';
import { coerceBooleanProperty } from '../utils/dom.js';

export interface CustomPropertyConfig {
  type: unknown;
  required?: 'error' | 'warning';
  requiredMessage?: string;
}

export type PropertyConfig = PropertyDeclaration<unknown, unknown> & CustomPropertyConfig;

/**
 * https://developers.google.com/web/fundamentals/web-components/best-practices
 */
export function getDefaultOptions(propertyKey: string, options?: PropertyConfig): PropertyDeclaration {
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
          toAttribute: (value: string) => (value ? value : null),
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
          toAttribute: (value: string) => (value ? '' : null),
          fromAttribute: (value: string) => coerceBooleanProperty(value),
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
      return { ...(options as PropertyDeclaration<unknown, unknown>) };
  }
}

export function requirePropertyCheck(protoOrDescriptor: any, name: string, options?: PropertyConfig) {
  const targetFirstUpdated: () => void = protoOrDescriptor.firstUpdated;

  function firstUpdated(this: any, props: PropertyValues<any>): void {
    if (options && options.required && isNilOrEmpty(this[name])) {
      const message = options.requiredMessage || getRequiredMessage(options.required, name, this.tagName);
      if (options.required === 'error') {
        throw new Error(message);
      } else {
        LogService.warn(message, this);
      }
    }

    if (targetFirstUpdated) {
      targetFirstUpdated.apply(this, [props]);
    }
  }

  protoOrDescriptor.firstUpdated = firstUpdated;
}

/**
 * In React, DOM attributes and properties are camelCase, except for aria- and data- attributes
 * https://reactjs.org/docs/dom-elements.html
 *
 * This will format aria attributes as kebab case, otherwise returning the original property name
 */
function getReactPropertyName(propertyName: string) {
  if (propertyName.startsWith('aria')) {
    return camelCaseToKebabCase(propertyName);
  }
  return propertyName;
}

function getRequiredMessage(level = 'warning', propertyName: string, tagName: string) {
  const tag = tagName.toLocaleLowerCase();
  return (
    `${capitalizeFirstLetter(
      level
    )}: ${propertyName} is required to use ${tag} component. Set the JS Property or HTML Attribute.\n\n` +
    `${getAngularVersion() ? `Angular: <${tag} [${propertyName}]="..."></${tag}>\n` : ''}` +
    `${getVueVersion() ? `Vue: <${tag} :${propertyName}="..."></${tag}>\n` : ''}` +
    `${
      getReactVersion() ? `React: <${kebabCaseToPascalCase(tag)} ${getReactPropertyName(propertyName)}={...} />\n` : ''
    }` +
    `${`HTML: <${tag} ${camelCaseToKebabCase(propertyName)}="..."></${tag}>\n`}` +
    `${`JavaScript: document.querySelector('${tag}').${propertyName} = '...';\n\n`}`
  );
}

/**
 * lit @property decorator with custom defaults specific to Clarity.
 * https://lit.dev/docs/components/properties/
 *
 * A property decorator which creates a LitElement property which reflects a
 * corresponding attribute value. A PropertyDeclaration may optionally be
 * supplied to configure property features.
 *
 * @ExportDecoratedItems
 */
export function property(options?: PropertyConfig) {
  return (protoOrDescriptor: any, name?: PropertyKey) => {
    if (options?.required) {
      requirePropertyCheck(protoOrDescriptor, name as string, options);
    }
    return _property(getDefaultOptions(name as string, options))(protoOrDescriptor, name);
  };
}

/**
 * lit @state decorator with custom defaults specific to Clarity.
 *
 * This is used for communication between internal component properties
 * that are not exposed as part of the public component API.
 * https://lit.dev/docs/api/decorators/#state
 *
 * @ExportDecoratedItems
 */
export function state(options?: PropertyConfig) {
  return (protoOrDescriptor: any, name: string) => {
    const defaultOptions: any = getDefaultOptions(name, options);

    if (defaultOptions) {
      defaultOptions.reflect = options?.reflect ? options.reflect : false; // prevent attr reflection by default

      if (defaultOptions.reflect && !options?.attribute) {
        // mark as internal attr if reflect and no provided attr
        // see description for more detail https://github.com/vmware/clarity/pull/5431
        defaultOptions.attribute = `_${camelCaseToKebabCase(name)}`;
      }
    }

    return _property(defaultOptions)(protoOrDescriptor, name);
  };
}
