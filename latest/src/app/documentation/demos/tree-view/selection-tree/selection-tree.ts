/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {ClrSelectedState} from "@clr/angular";

const EXAMPLE_HTML = `
<clr-tree>
    <clr-tree-node *ngFor="let group of groceries"
                   [(clrSelected)]="group.selected"
                   [clrExpanded]="true">
        {{group.name}}
        <clr-tree-node *ngFor="let item of group.items" [(clrSelected)]="item.selected">
            {{item.name}}
        </clr-tree-node>
    </clr-tree-node>
</clr-tree>

<button class="btn btn-sm" type="button" (click)="selectVegetables()">Select all vegetables</button>
`;

const EXAMPLE_TS = `
export class GroceryList {
    groceries = [
        {
            name: "Dairy",
            selected: ClrSelectedState.INDETERMINATE,
            items: [
                {
                    name: "Milk",
                    selected: ClrSelectedState.UNSELECTED,
                },
                {
                    name: "Cheese",
                    selected: ClrSelectedState.SELECTED,
                }
            ]
        },
        {
            name: "Vegetables",
            selected: ClrSelectedState.UNSELECTED,
            items: [
                {
                    name: "Carrots",
                    selected: ClrSelectedState.UNSELECTED,
                },
                {
                    name: "Potatoes",
                    selected: ClrSelectedState.UNSELECTED,
                },
                {
                    name: "Beans",
                    selected: ClrSelectedState.UNSELECTED,
                }
            ]
        }
    ];

    selectVegetables() {
        this.groceries[1].selected = ClrSelectedState.SELECTED;
    }
}
`;

@Component({
    selector: "clr-selection-tree-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["../tree-view.demo.scss"],
    templateUrl: "selection-tree.html"
})
export class SelectionTreeDemo {
    example_html = EXAMPLE_HTML;
    example_ts = EXAMPLE_TS;

    groceries = [
        {
            name: "Dairy",
            selected: ClrSelectedState.INDETERMINATE,
            items: [
                {
                    name: "Milk",
                    selected: ClrSelectedState.UNSELECTED,
                },
                {
                    name: "Cheese",
                    selected: ClrSelectedState.SELECTED,
                }
            ]
        },
        {
            name: "Vegetables",
            selected: ClrSelectedState.UNSELECTED,
            items: [
                {
                    name: "Carrots",
                    selected: ClrSelectedState.UNSELECTED,
                },
                {
                    name: "Potatoes",
                    selected: ClrSelectedState.UNSELECTED,
                },
                {
                    name: "Beans",
                    selected: ClrSelectedState.UNSELECTED,
                }
            ]
        }
    ];


    selectVegetables() {
        this.groceries[1].selected = ClrSelectedState.SELECTED;
    }

    get displayGroceries() {
        const replacer = (key, value) => {
            if (key === 'selected') {
                return ClrSelectedState[value];
            }
            return value;
        }
        return JSON.stringify(this.groceries, replacer, 2);
    }
}
