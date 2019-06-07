/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as RELEASES from '../../../releases/release-list.json';

const NG_MODULE_EXAMPLE = `
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";
import { AppComponent } from "./app.component";

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ClarityModule,
        ...
     ],
     declarations: [ AppComponent ],
     bootstrap: [ AppComponent ]
})
export class AppModule { }
`;

const HTML_IMPORTS = `
<link rel="stylesheet" href="path/to/node_modules/@clr/ui/clr-ui.min.css">
<link rel="stylesheet" href="path/to/node_modules/@clr/icons/clr-icons.min.css">
<script src="path/to/node_modules/@webcomponents/custom-elements/custom-elements.min.js"></script>
<script src="path/to/node_modules/@clr/icons/clr-icons.min.js"></script>
`;

const NODE_IMPORTS = `
"styles": [
      "../node_modules/@clr/icons/clr-icons.min.css",
      "../node_modules/@clr/ui/clr-ui.min.css",
      ... any other styles
],
"scripts": [
  ... any existing scripts
  "../node_modules/@webcomponents/custom-elements/custom-elements.min.js",
  "../node_modules/@clr/icons/clr-icons.min.js"
]
`;

const UI_CDN = `
<!-- Load the latest version -->
<link rel="stylesheet" href="https://unpkg.com/@clr/ui/clr-ui.min.css" />
<!-- Or load a specific version -->
<link rel="stylesheet" href="https://unpkg.com/@clr/ui@0.12.5/clr-ui.min.css" />
`;

@Component({
  selector: 'get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss'],
  host: {
    '[class.content-area]': 'true',
  },
})
export class GetStartedComponent {
  sketchBaseUrl = environment.sketch_base_url;
  sketchIconsUrl = environment.sketch_icons_url;
  sketchVersion = RELEASES.all[RELEASES.current].sketch;
  lightFigma = environment.figma_link_light;
  darkFigma = environment.figma_link_dark;
  iconFigma = environment.figma_icons;
  public uiCdn = UI_CDN;
  public ngModuleExample = NG_MODULE_EXAMPLE;
  public htmlImports = HTML_IMPORTS;
  public nodeImports = NODE_IMPORTS;
}
