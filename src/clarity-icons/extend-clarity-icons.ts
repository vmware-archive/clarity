/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { IconTemplate } from "./interfaces/icon-template";
import { IconAlias } from "./interfaces/icon-alias";
import { SVG_ICON_TEMPLATES } from "./svg-icon-templates";

let EXTENDED_ICON_TEMPLATES: IconTemplate = {};

export class UserIcons {

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

    getExtendedShapes(): IconTemplate {

        return EXTENDED_ICON_TEMPLATES;
    }


    private setIconTemplate(shapeName: string, shapeTemplate: string): void {

        let trimmedShapeTemplate = shapeTemplate.trim();

        if (this.validateName(shapeName) && this.validateTemplate(trimmedShapeTemplate)) {

            EXTENDED_ICON_TEMPLATES[ shapeName ] = trimmedShapeTemplate;

        }

    }

    add(icons: IconTemplate): void {

        for (let shapeName in icons) {

            if (icons.hasOwnProperty(shapeName)) {

                this.setIconTemplate(shapeName, icons[ shapeName ]);
            }
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

    alias(aliases: IconAlias): void {

        for (let shapeName in aliases) {

            if (aliases.hasOwnProperty(shapeName)) {

                if (SVG_ICON_TEMPLATES.hasOwnProperty(shapeName)) {
                    //set an alias to the icon if it exists in SVG_ICON_TEMPLATES.

                    this.setIconAliases(SVG_ICON_TEMPLATES, shapeName, aliases[ shapeName ]);

                } else if (EXTENDED_ICON_TEMPLATES.hasOwnProperty(shapeName)) {
                    //set an alias to the icon if it exists in EXTENDED_ICON_TEMPLATES.

                    this.setIconAliases(EXTENDED_ICON_TEMPLATES, shapeName, aliases[ shapeName ]);

                } else {

                    throw new Error("The icon '" + shapeName + "' you are trying to set an alias to doesn't exist!");

                }


            }

        }

    }


}



