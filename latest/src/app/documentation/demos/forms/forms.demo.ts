/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {ClarityDocComponent} from "../clarity-doc";

import * as UiErrors from "./ui/errors.html";
import * as UiForm from "./ui/form.html";
import * as UiGrid from "./ui/grid.html";
import * as UiLayouts from "./ui/layouts.html";
import * as UiStructure from "./ui/structure.html";

import * as NgErrors from "./ng/errors.html";
import * as NgForm from "./ng/form.html";
import * as NgHelpers from "./ng/helpers.html";
import * as NgLayouts from "./ng/layouts.html";
import * as NgModule from "!raw-loader!./ng/module.txt";
import * as NgReactiveTs from "!raw-loader!./ng/reactive.txt";
import * as NgReactiveHtml from "./ng/reactive.html";
import * as NgStructure from "./ng/structure.html";

@Component({
    selector: "clr-forms-demo",
    templateUrl: "./forms.demo.html",
    host: {
        "[class.content-area]": "true",
        "[class.dox-content-panel]": "true"
    }
})
export class FormsDemo extends ClarityDocComponent {
    constructor() {
        super("forms");
    }

    uiErrors: any = UiErrors;
    uiForm: any = UiForm;
    uiGrid: any = UiGrid;
    uiLayouts: any = UiLayouts;
    uiStructure: any = UiStructure;

    ngErrors: any = NgErrors;
    ngForm: any = NgForm;
    ngHelpers: any = NgHelpers;
    ngLayouts: any = NgLayouts;
    ngModule: any = NgModule;
    ngReactiveTs: any = NgReactiveTs;
    ngReactiveHtml: any = NgReactiveHtml;
    ngStructure: any = NgStructure;
}
