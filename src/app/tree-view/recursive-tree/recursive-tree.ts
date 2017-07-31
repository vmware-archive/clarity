/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE_HTML = `
<recursive-structure [item]="root"></recursive-structure>
`;

const EXAMPLE_TS = `
import {Component, Input} from "@angular/core";

@Component({
    selector: "recursive-structure",
    template: \`
        <clr-tree-node>
            {{item.name}}
            <ng-template [clrIfExpanded]="item.expanded" *ngFor="let child of item.children">
                <recursive-structure
                    [item]="child"
                    ngProjectAs="clr-tree-node">
                </recursive-structure>
            </ng-template>
        </clr-tree-node>
    \`
})
export class RecursiveStructureComponent {
    @Input() item: any;
    @Input() selected: boolean = false;
}
`;

const EXAMPLE_DATA = `
root = {
    name: "A1",
    expanded: true,
    children: [
        {
            name: "B1",
            children: [
                { name: "C1" },
                { name: "C2" },
                { name: "C3" }
            ]
        },
        {
            name: "B2",
            expanded: true,
            children: [
                { name: "D1" },
                { name: "D2" },
                { name: "D3" }
            ]
        },
        {
            name: "B3",
            expanded: true,
            children: [
                { name: "E1" },
                { name: "E2" },
                { name: "E3" }
            ]
        }
    ]
};
`;

@Component({
    moduleId: module.id,
    selector: "clr-tree-recursive-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["../tree-view.demo.css"],
    templateUrl: "./recursive-tree.html"
})
export class RecursiveTreeDemo {
    exampleHTML = EXAMPLE_HTML;
    exampleTS = EXAMPLE_TS;
    exampleDATA = EXAMPLE_DATA;

    root = {
        name: "A1",
        expanded: true,
        children: [
            {name: "B1", children: [{name: "C1"}, {name: "C2"}, {name: "C3"}]},
            {name: "B2", expanded: true, children: [{name: "D1"}, {name: "D2"}, {name: "D3"}]},
            {name: "B3", expanded: true, children: [{name: "E1"}, {name: "E2"}, {name: "E3"}]}
        ]
    };
}
