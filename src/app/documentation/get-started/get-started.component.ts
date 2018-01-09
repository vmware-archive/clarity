import {Component} from "@angular/core";

const NG_MODULE_EXAMPLE = `
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ClarityModule } from "@clr/angular";
import { AppComponent } from "./app.component";

@NgModule({
    imports: [
        BrowserModule,
        ClarityModule,
        ...
     ],
     declarations: [ AppComponent ],
     bootstrap: [ AppComponent ]
})
export class AppModule {    }
`;

const ICONS_IMPORTS = `
<link rel="stylesheet" href="path/to/node_modules/@clr/icons/clr-icons.min.css">
<script src="path/to/node_modules/@webcomponents/custom-elements/custom-elements.min.js"></script>
<script src="path/to/node_modules/@clr/icons/clr-icons.min.js"></script>
`;

const ICONS_NODE_IMPORTS = `
"styles": [
      ...
      "../node_modules/@clr/icons/clr-icons.min.css",
      ...
],
"scripts": [
  ...
  "../node_modules/mutationobserver-shim/dist/mutationobserver.min.js",
  "../node_modules/@webcomponents/custom-elements/custom-elements.min.js",
  "../node_modules/@clr/icons/clr-icons.min.js"
  ...
]
`;

const ICONS_TS_IMPORTS = `
import '@clr/icons';
import '@clr/icons/shapes/essential-shapes';
`;

const UI_HTML_IMPORT = `
<link rel="stylesheet" href="path/to/node_modules/@clr/ui/clr-ui.min.css">
`;

const UI_NODE_IMPORTS = `
"styles": [
      ...
      "../node_modules/@clr/ui/clr-ui.min.css",
      ...
  ]
`;

@Component({
    selector: "get-started",
    templateUrl: "./get-started.component.html",
    host: {
        "[class.content-area]": "true"
    }
})
export class GetStartedComponent {

    constructor() {
    }

    public ngModuleExample = NG_MODULE_EXAMPLE;
    public iconsImportsExample = ICONS_IMPORTS;
    public iconsNodeImports = ICONS_NODE_IMPORTS;
    public iconsTSImports = ICONS_TS_IMPORTS;
    public uiHTMLImport = UI_HTML_IMPORT;
    public uiNodeImports = UI_NODE_IMPORTS;
}
