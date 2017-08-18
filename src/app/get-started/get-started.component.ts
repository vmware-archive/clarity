import {Component} from "@angular/core";

const NG_MODULE_EXAMPLE = `
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ClarityModule } from "clarity-angular";
import { AppComponent } from "./app.component";

@NgModule({
    imports: [
        BrowserModule,
        ClarityModule.forRoot(),
        ...
     ],
     declarations: [ AppComponent ],
     bootstrap: [ AppComponent ]
})
export class AppModule {    }
`;

const ICONS_IMPORTS = `
<link rel="stylesheet" href="path/to/node_modules/clarity-icons/clarity-icons.min.css">
<script src="path/to/node_modules/@webcomponents/custom-elements/custom-elements.min.js"></script>
<script src="path/to/node_modules/clarity-icons/clarity-icons.min.js"></script>
`;

const ICONS_NODE_IMPORTS = `
"styles": [
      ...
      "../node_modules/clarity-icons/clarity-icons.min.css",
      ...
],
"scripts": [
  ...
  "../node_modules/mutationobserver-shim/dist/mutationobserver.min.js",
  "../node_modules/@webcomponents/custom-elements/custom-elements.min.js",
  "../node_modules/clarity-icons/clarity-icons.min.js"
  ...
]
`;

const ICONS_TS_IMPORTS = `
import 'clarity-icons';
import 'clarity-icons/shapes/essential-shapes';
`;

const UI_HTML_IMPORT = `
<link rel="stylesheet" href="path/to/node_modules/clarity-ui/clarity-ui.min.css">
`;

const UI_NODE_IMPORTS = `
"styles": [
      ...
      "../node_modules/clarity-ui/clarity-ui.min.css",
      ...
  ]
`;

@Component({
    selector: "get-started",
    templateUrl: "./get-started.component.html",
    host: {
        "id": "main-container",
        "[class.content-container]": "true"
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
