import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity.module";
import {ROUTING} from "./login.demo.routing";
import {LoginDemo} from "./login.demo";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        LoginDemo
    ],
    exports: [
        LoginDemo
    ]
})
export default class LoginDemoModule {
}