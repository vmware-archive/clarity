import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity.module";
import {ROUTING} from "./forms.demo.routing";
import {FormsDemo} from "./forms.demo";
import {FormFieldsDemo} from "./form-fields";
import {FormTestDemo} from "./form-test";
import {FormValidationDemo} from "./form-validation";
import {FormCompactDemo} from "./form-compact";
import {FormGridDemo} from "./form-grid";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        FormsDemo,
        FormFieldsDemo,
        FormGridDemo,
        FormTestDemo,
        FormValidationDemo,
        FormCompactDemo
    ],
    exports: [
        FormsDemo,
        FormFieldsDemo,
        FormGridDemo,
        FormTestDemo,
        FormValidationDemo,
        FormCompactDemo
    ]
})
export default class FormsDemoModule {
}