/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const ICONS_IMPORTS_ALL = `
<!--CLARITY ICONS STYLE-->
<link rel="stylesheet" href="path/to/node_modules/@clr/icons/clr-icons.min.css">

<!--CLARITY ICONS DEPENDENCY: CUSTOM ELEMENTS POLYFILL-->
<script src="path/to/node_modules/@webcomponents/custom-elements/custom-elements.min.js"></script>

<!--CLARITY ICONS API & ALL ICON SETS-->
<script src="path/to/node_modules/@clr/icons/clr-icons.min.js"></script>
`;

const ICONS_IMPORTS_SOME = `
<!--CLARITY ICONS STYLE-->
<link rel="stylesheet" href="path/to/node_modules/@clr/icons/clr-icons.min.css">

<!--CLARITY ICONS DEPENDENCY: CUSTOM ELEMENTS POLYFILL-->
<script src="path/to/node_modules/@webcomponents/custom-elements/custom-elements.min.js"></script>

<!--CLARITY ICONS API & CORE SHAPES SET-->
<script src="path/to/node_modules/@clr/icons/clr-icons-lite.min.js"></script>

<!--ICON SETS-->
<script src="path/to/node_modules/@clr/icons/shapes/social-shapes.min.js"></script>
<script src="path/to/node_modules/@clr/icons/shapes/travel-shapes.min.js"></script>
`;

const ICONS_IMPORTS_TS_CORE = `
import '@clr/icons';
`;

const ICONS_IMPORTS_TS_SOME = `
import '@clr/icons';
import '@clr/icons/shapes/essential-shapes';
import '@clr/icons/shapes/technology-shapes';
`;

const ICONS_IMPORTS_TS_ALL = `
import '@clr/icons';
import '@clr/icons/shapes/all-shapes';
`;

@Component({
  selector: 'icons-get-started',
  templateUrl: './icons-get-started.component.html',
  styleUrls: ['./icons-get-started.component.scss'],
})
export class IconsGetStartedComponent {
  public iconsImportsAllExample = ICONS_IMPORTS_ALL;
  public iconsImportsSomeExample = ICONS_IMPORTS_SOME;
  public iconsImportsTSCoreExample = ICONS_IMPORTS_TS_CORE;
  public iconsImportsTSSomeExample = ICONS_IMPORTS_TS_SOME;
  public iconsImportsTSAllExample = ICONS_IMPORTS_TS_ALL;
}
