/*
 * Copyright (c) 2016-2017 VMWare, Inc. All Rights Reserved.
 * This software is released under MIT License.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component} from "@angular/core";
import {ClarityDocComponent} from "../clarity-doc";

const UI_NO_NODE_IMPORTS = `
"styles": [
      ...
      "./node_modules/@clr/icons/clr-icons.min.css",
      ...
  ]
`;

const UI_CUSTOM_CLARITY_DARK_SCSS_FILE = `
// Clarity Dependency SCSS
@import "../node_modules/@clr/ui/src/utils/dependencies.clarity"; // Includes light theme

@import "../node_modules/@clr/ui/src/utils/theme.dark.clarity"; // Overwrites with dark theme

// Clarity Component SCSS
@import "../node_modules/@clr/ui/src/utils/components.clarity";
`;

const UI_CUSTOM_CLARITY_DARK_THEME_SCSS_FILE = `
// Clarity Dependency SCSS
@import "../node_modules/@clr/ui/src/utils/dependencies.clarity"; // Includes light theme

@import "../node_modules/@clr/ui/src/utils/theme.dark.clarity"; // Overwrites with dark theme

// Your Application Theme File
@import "./theme.scss";

// Clarity Component SCSS
@import "../node_modules/@clr/ui/src/utils/components.clarity";
`;

const UI_CUSTOM_CLARITY_LIGHT_SCSS_FILE = `
// Clarity Dependency SCSS
@import "../node_modules/@clr/ui/src/utils/dependencies.clarity"; // Includes light theme

// Clarity Component SCSS
@import "../node_modules/@clr/ui/src/utils/components.clarity";
`;

const UI_CUSTOM_CLARITY_LIGHT_THEME_SCSS_FILE = `
// Clarity Dependency SCSS
@import "../node_modules/@clr/ui/src/utils/dependencies.clarity"; // Includes light theme

// Your Application Theme File
@import "./theme.scss";

// Clarity Component SCSS
@import "../node_modules/@clr/ui/src/utils/components.clarity";
`;

const UI_NODE_IMPORTS = `
"styles": [
      ...
      "../node_modules/@clr/icons/clr-icons.min.css",
      "../node_modules/@clr/ui/clr-ui-dark.min.css",
      ...
  ]
`;

const UI_WEBPACK_IMPORTS = `
  "entry": {
    "main": [
      "./src/main.ts"
    ],
    "styles": [
      "./node_modules/@clr/icons/clr-icons.min.css",
      "./node_modules/@clr/ui/clr-ui-dark.min.css",
      "./src/styles.css"
    ]
  },
`;

@Component({
    selector: "clr-themes-demo",
    templateUrl: "./themes.demo.html",
    host: {
        "[class.content-area]": "true",
        "[class.dox-content-panel]": "true"
    }
})
export class ThemesDemo extends ClarityDocComponent {
    public uiNodeImports = UI_NODE_IMPORTS;
    public uiWebpackImports = UI_WEBPACK_IMPORTS;
    public uiCustomClarityLightThemeScssFile = UI_CUSTOM_CLARITY_LIGHT_THEME_SCSS_FILE;
    public uiCustomClarityDarkThemeScssFile = UI_CUSTOM_CLARITY_DARK_THEME_SCSS_FILE;
    public uiCustomClarityLightScssFile = UI_CUSTOM_CLARITY_LIGHT_SCSS_FILE;
    public uiCustomClarityDarkScssFile = UI_CUSTOM_CLARITY_DARK_SCSS_FILE;
    public uiNoNodeImports = UI_NO_NODE_IMPORTS;

    constructor() {
        super("themes");
    }
}
