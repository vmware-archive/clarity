/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { IconTemplate } from "./interfaces/icon-template";
import { IconAlias } from "./interfaces/icon-alias";

let IconSources: IconTemplate = {};

export class ClarityIconsApi {

    private static singleInstance: ClarityIconsApi;

    protected constructor(){}

    static get instance(): ClarityIconsApi {

        if (!ClarityIconsApi.singleInstance) {

            ClarityIconsApi.singleInstance = new ClarityIconsApi();

        }

        return ClarityIconsApi.singleInstance;

    }

    private validateName(name: string): boolean {

        if (name.length === 0) {

            throw new Error("Shape name or alias must be a non-empty string!");
        }


        if (/\s/.test(name)) {

            throw new Error("Shape name or alias must not contain any whitespace characters!");

        }

        return true;

    }

    private validateTemplate(template: string): boolean {


        if (!template.startsWith("<svg") || !template.endsWith("</svg>")) {

            throw new Error("Template must be SVG markup!");

        }

        return true;

    }


    private setIconTemplate(shapeName: string, shapeTemplate: string): void {

        let trimmedShapeTemplate = shapeTemplate.trim();

        if (this.validateName(shapeName) && this.validateTemplate(trimmedShapeTemplate)) {

            IconSources[ shapeName ] = trimmedShapeTemplate;

        }

    }

    private setIconAliases(templates: IconTemplate, shapeName: string, aliasNames: string[]): void {
        for (let aliasName of aliasNames) {

            if (this.validateName(aliasName)) {
                Object.defineProperty(templates, aliasName, {
                    get: function () {
                        return templates[ shapeName ];
                    },
                    enumerable: true,
                    configurable: true
                });
            }

        }

    }

    add(icons: IconTemplate): void {

        for (let shapeName in icons) {

            if (icons.hasOwnProperty(shapeName)) {

                this.setIconTemplate(shapeName, icons[ shapeName ]);
            }
        }

    }


    get(shapeName?: string): any {

        //if shapeName is not given, return all icon templates.

        if (!shapeName) {
            return IconSources;
        }

        if (typeof shapeName !== "string") {
            throw new TypeError("Only string argument is allowed in this method.");
        }

        //if shapeName doesn't exist in the icons templates, throw an error.

        if (!IconSources[ shapeName ]) {
            throw new Error(`'${shapeName}' is not found in the Clarity Icons set.`);
        }

        return IconSources[ shapeName ];

    }

    alias(aliases: IconAlias): void {

        for (let shapeName in aliases) {

            if (aliases.hasOwnProperty(shapeName)) {

                if (IconSources.hasOwnProperty(shapeName)) {
                    //set an alias to the icon if it exists in IconSources.

                    this.setIconAliases(IconSources, shapeName, aliases[ shapeName ]);

                } else if (IconSources.hasOwnProperty(shapeName)) {
                    //set an alias to the icon if it exists in IconSources.

                    this.setIconAliases(IconSources, shapeName, aliases[ shapeName ]);

                } else {

                    throw new Error("The icon '" + shapeName + "' you are trying to set an alias to doesn't exist!");

                }


            }

        }

    }

}




