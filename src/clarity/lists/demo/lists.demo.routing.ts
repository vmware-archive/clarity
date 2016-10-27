import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {Routes, RouterModule} from "@angular/router";
import {ListsDemo} from "./lists.demo";
import {ListsUlDemo} from "./lists-ul";
import {ListsOlDemo} from "./lists-ol";
import {ListsUnstyledDemo} from "./lists-unstyled";
import {ListsCompactDemo} from "./lists-compact";
import {ListsMixedDemo} from "./lists-mixed";
import {ListsInCardsDemo} from "./lists-in-cards";
import {OldListsInCardsDemo} from "./old-lists-in-cards";

const ROUTES: Routes = [
    {
        path: "",
        component: ListsDemo,
        children: [
            { path: "", redirectTo: "lists-ul", pathMatch: "full" },
            { path: "lists-ul", component: ListsUlDemo },
            { path: "lists-ol", component: ListsOlDemo },
            { path: "lists-in-cards", component: ListsInCardsDemo },
            { path: "lists-unstyled", component: ListsUnstyledDemo },
            { path: "lists-mixed", component: ListsMixedDemo },
            { path: "lists-compact", component: ListsCompactDemo },
            { path: "old-lists-in-cards", component: OldListsInCardsDemo }
        ]
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
