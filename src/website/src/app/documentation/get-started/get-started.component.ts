/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
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
<script src="path/to/node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js"></script>
<script src="path/to/node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js"></script>
<script src="path/to/node_modules/@clr/icons/clr-icons.min.js"></script>
`;

const NODE_IMPORTS = `
"styles": [
      "node_modules/@clr/icons/clr-icons.min.css",
      "node_modules/@clr/ui/clr-ui.min.css",
      ... any other styles
],
"scripts": [
  ... any existing scripts
  "node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js",
  "node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js",
  "node_modules/@clr/icons/clr-icons.min.js"
]
`;

const UI_CDN = `
<!-- Load the latest version -->
<link rel="stylesheet" href="https://unpkg.com/@clr/ui/clr-ui.min.css" />
<!-- Or load a specific version -->
<link rel="stylesheet" href="https://unpkg.com/@clr/ui@2.0.0/clr-ui.min.css" />
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
  figmaVersion = RELEASES.all[RELEASES.current].figma;
  majorVersion = Number(environment.version.charAt(1));
  lightFigma = environment.figma_link_light;
  darkFigma = environment.figma_link_dark;
  iconFigma = environment.figma_icons;
  colorFigma = environment.figma_color;
  public uiCdn = UI_CDN;
  public ngModuleExample = NG_MODULE_EXAMPLE;
  public htmlImports = HTML_IMPORTS;
  public nodeImports = NODE_IMPORTS;

  gaClick(eventName: string) {
    if (window.ga) {
      window.ga('send', 'event', 'design-resource', 'click', eventName, this.sketchVersion);
    }
  }
}
