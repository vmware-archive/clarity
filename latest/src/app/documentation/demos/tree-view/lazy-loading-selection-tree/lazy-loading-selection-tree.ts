/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";

import {GROCERY_SERVICE, Group} from "./grocery-models";

const EXAMPLE_HTML = `
<clr-tree [clrLazy]="true">
    <clr-tree-node *ngFor="let group of groceries$ | async" [(clrSelected)]="group.selected">
        {{group.name}}
        <ng-template clrIfExpanded>
            <my-grocery-items [group]="group"></my-grocery-items>
        </ng-template>
    </clr-tree-node>
</clr-tree>
`;

const EXAMPLE_TS = `
@Component({
    selector: "my-grocery-items",
    template: \`
        <ng-container [clrLoading]="loading">
            <clr-tree-node *ngFor="let item of items$ | async" [(clrSelected)]="item.selected">
                {{item.name}}
            </clr-tree-node>
        </ng-container>
    \`
})
export class GroceryItemsComponent implements OnInit {
    constructor(private itemsService: ItemsService) {}
    
    @Input() group: Group;
    items$: Observable<Item[]>;
    loading = false;

    ngOnInit() {
        this.loading = true;
        this.items$ = this.itemsService.getItems(this.group).pipe(tap(() => this.loading = false));
    }
}
`;

@Component({
    selector: "clr-lazy-loading-selection-tree-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["../tree-view.demo.scss"],
    templateUrl: "./lazy-loading-selection-tree.html"
})
export class LazyLoadingSelectionTreeDemo implements OnInit {
    example_html = EXAMPLE_HTML;
    example_ts = EXAMPLE_TS;

    groceries$: Observable<Group[]>;

    ngOnInit() {
        this.groceries$ = this.groceryService.getGroups();
    }

    groceryService = GROCERY_SERVICE;
}
