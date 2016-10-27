import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity.module";
import {ROUTING} from "./buttons.demo.routing";
import {ButtonsDemo} from "./buttons.demo";
import {RealButtonDemo} from "./real-button";
import {PrimaryButtonDemo} from "./primary-button";
import {SecondaryButtonDemo} from "./secondary-button";
import {TertiaryButtonDemo} from "./tertiary-button";
import {InverseButtonDemo} from "./inverse-button";
import {ButtonStatesDemo} from "./button-states";
import {ButtonSizesDemo} from "./button-sizes";
import {ToggleDemo} from "./toggles";
import {ButtonsTestDemo} from "./buttons-test";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        ButtonsDemo,
        RealButtonDemo,
        PrimaryButtonDemo,
        SecondaryButtonDemo,
        TertiaryButtonDemo,
        InverseButtonDemo,
        ButtonStatesDemo,
        ButtonSizesDemo,
        ToggleDemo,
        ButtonsTestDemo
    ],
    exports: [
        ButtonsDemo,
        RealButtonDemo,
        PrimaryButtonDemo,
        SecondaryButtonDemo,
        TertiaryButtonDemo,
        InverseButtonDemo,
        ButtonStatesDemo,
        ButtonSizesDemo,
        ToggleDemo,
        ButtonsTestDemo
    ]
})
export default class ButtonsDemoModule {
}