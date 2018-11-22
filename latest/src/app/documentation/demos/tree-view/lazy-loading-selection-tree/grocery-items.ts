/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, Input, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import { tap} from "rxjs/operators";
import {ITEMS_SERVICE, Group, Item} from "./grocery-models";

@Component({
    selector: "my-grocery-items",
    template: `
        <ng-container [clrLoading]="loading">
            <clr-tree-node *ngFor="let item of items$ | async" [(clrSelected)]="item.selected">
                {{item.name}}
            </clr-tree-node>
        </ng-container>
    `
})
export class GroceryItemsComponent implements OnInit {
    @Input() group: Group;
    items$: Observable<Item[]>;
    loading = false;

    ngOnInit() {
        this.loading = true;
        this.items$ = this.itemsService.getItems(this.group).pipe(tap(() => this.loading = false));
    }

    itemsService = ITEMS_SERVICE;
}
