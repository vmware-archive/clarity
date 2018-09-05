/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "@clr/angular";

import {CardOldDemo} from "./card-old";
import {CardGridDemo} from "./card-grid";
import {CardClickableDemo} from "./card-clickable";
import {CardImagesDemo} from "./card-images";
import {CardLayoutDemo} from "./card-layout";
import {CardMasonryDemo} from "./card-masonry";
import {CardMediaBlockDemo} from "./card-media-block";
import {CardDropdownDemo} from "./card-dropdown";
import {CardListGroupDemo} from "./card-list-group";
import {RouterModule} from "@angular/router";
import {DocWrapperModule} from "../_doc-wrapper/doc-wrapper.module";
import {CardsDemo} from "./cards.demo";
import {CardAlertDemo} from "./card-alert";
import {ListsInCardsDemo} from "./lists-in-cards";
import {ProgressBarCardsDemo} from "./progress-bar-cards";
import {ProgressBarInlineCardsDemo} from "./progress-bar-inline-cards";
import {UtilsModule} from "../../../utils/utils.module";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        DocWrapperModule,
        RouterModule.forChild([{path: "", component: CardsDemo}]),
        UtilsModule
    ],
    declarations: [
        CardOldDemo,
        CardAlertDemo,
        CardGridDemo,
        CardClickableDemo,
        CardImagesDemo,
        CardLayoutDemo,
        CardMasonryDemo,
        CardMediaBlockDemo,
        CardDropdownDemo,
        CardListGroupDemo,
        ListsInCardsDemo,
        ProgressBarCardsDemo,
        ProgressBarInlineCardsDemo,

        CardsDemo
    ],
    exports: [
        CardsDemo
    ]
})
export class CardsDemoModule {
}
