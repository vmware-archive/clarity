/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { IconAlias, IconShapeSources } from './interfaces/icon-interfaces';
import { ShapeTemplateObserver } from './utils/shape-template-observer';

const iconShapeSources: IconShapeSources = {};

export class ClarityIconsApi {
  private static singleInstance: ClarityIconsApi;

  private constructor() {}

  static get instance(): ClarityIconsApi {
    if (!ClarityIconsApi.singleInstance) {
      ClarityIconsApi.singleInstance = new ClarityIconsApi();
    }

    return ClarityIconsApi.singleInstance;
  }

  private validateName(name: string): boolean {
    if (name.length === 0) {
      throw new Error('Shape name or alias must be a non-empty string!');
    }

    if (/\s/.test(name)) {
      throw new Error('Shape name or alias must not contain any whitespace characters!');
    }

    return true;
  }

  private setIconTemplate(shapeName: string, shapeTemplate: string): void {
    const trimmedShapeTemplate = shapeTemplate.trim();

    if (this.validateName(shapeName)) {
      // if the shape name exists, delete it.
      if (iconShapeSources[shapeName]) {
        delete iconShapeSources[shapeName];
      }

      iconShapeSources[shapeName] = trimmedShapeTemplate;

      ShapeTemplateObserver.instance.emitChanges(shapeName, trimmedShapeTemplate);
    }
  }

  private setIconAliases(templates: IconShapeSources, shapeName: string, aliasNames: string[]): void {
    for (const aliasName of aliasNames) {
      if (this.validateName(aliasName)) {
        Object.defineProperty(templates, aliasName, {
          get: function() {
            return templates[shapeName];
          },
          enumerable: true,
          configurable: true,
        });
      }
    }
  }

  add(icons?: IconShapeSources): void {
    if (typeof icons !== 'object') {
      throw new Error(`The argument must be an object literal passed in the following pattern: 
                { "shape-name": "shape-template" }`);
    }

    for (const shapeName in icons) {
      if (icons.hasOwnProperty(shapeName)) {
        this.setIconTemplate(shapeName, icons[shapeName]);
      }
    }
  }

  has(shapeName: string): boolean {
    return !!iconShapeSources[shapeName];
  }

  get(shapeName?: string): any {
    // if shapeName is not given, return all icon templates.
    if (!shapeName) {
      return iconShapeSources;
    }

    if (typeof shapeName !== 'string') {
      throw new TypeError('Only string argument is allowed in this method.');
    }

    return iconShapeSources[shapeName];
  }

  alias(aliases?: IconAlias): void {
    if (typeof aliases !== 'object') {
      throw new Error(`The argument must be an object literal passed in the following pattern: 
                { "shape-name": ["alias-name", ...] }`);
    }

    for (const shapeName in aliases) {
      if (aliases.hasOwnProperty(shapeName)) {
        if (iconShapeSources.hasOwnProperty(shapeName)) {
          // set an alias to the icon if it exists in iconShapeSources.
          this.setIconAliases(iconShapeSources, shapeName, aliases[shapeName]);
        } else if (iconShapeSources.hasOwnProperty(shapeName)) {
          // set an alias to the icon if it exists in iconShapeSources.
          this.setIconAliases(iconShapeSources, shapeName, aliases[shapeName]);
        } else {
          throw new Error(
            `An icon "${shapeName}" you are trying to set aliases to doesn't exist in the Clarity Icons sets!`
          );
        }
      }
    }
  }
}
