import {Component} from "@angular/core";

const NG_MODULE_EXAMPLE = `
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAminationsModule } from "@angular/platform-browser/animations";
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
    public htmlImports = HTML_IMPORTS;
    public nodeImports = NODE_IMPORTS;
}
