import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity.module";
import {ROUTING} from "./lists.demo.routing";
import {ListsDemo} from "./lists.demo";
import {ListsUlDemo} from "./lists-ul";
import {ListsOlDemo} from "./lists-ol";
import {ListsUnstyledDemo} from "./lists-unstyled";
import {ListsCompactDemo} from "./lists-compact";
import {ListsMixedDemo} from "./lists-mixed";
import {ListsInCardsDemo} from "./lists-in-cards";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        ListsDemo,
        ListsUlDemo,
        ListsOlDemo,
        ListsUnstyledDemo,
        ListsCompactDemo,
        ListsMixedDemo,
        ListsInCardsDemo
    ],
    exports: [
        ListsDemo,
        ListsUlDemo,
        ListsOlDemo,
        ListsUnstyledDemo,
        ListsCompactDemo,
        ListsMixedDemo,
        ListsInCardsDemo
    ]
})
export default class ListsDemoModule {
}