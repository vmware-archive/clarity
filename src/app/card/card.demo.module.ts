/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity-angular/clarity.module";
import {ROUTING} from "./card.demo.routing";
import {CardDemo} from "./card.demo";
import {CardOldDemo} from "./card-old";
import {CardGridDemo} from "./card-grid";
import {CardClickableDemo} from "./card-clickable";
import {CardImagesDemo} from "./card-images";
import {CardLayoutDemo} from "./card-layout";
import {CardMasonryDemo} from "./card-masonry";
import {CardMediaBlockDemo} from "./card-media-block";
import {CardDropdownDemo} from "./card-dropdown";
import {CardListGroupDemo} from "./card-list-group";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        CardDemo,
        CardOldDemo,
        CardGridDemo,
        CardClickableDemo,
        CardImagesDemo,
        CardLayoutDemo,
        CardMasonryDemo,
        CardMediaBlockDemo,
        CardDropdownDemo,
        CardListGroupDemo
    ],
    exports: [
        CardDemo,
        CardGridDemo,
        CardClickableDemo,
        CardImagesDemo,
        CardLayoutDemo,
        CardMasonryDemo,
        CardMediaBlockDemo,
        CardDropdownDemo,
        CardListGroupDemo
    ]
})
export default class CardDemoModule {
}
