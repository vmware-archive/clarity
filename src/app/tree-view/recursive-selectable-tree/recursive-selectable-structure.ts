/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, Input} from "@angular/core";

@Component({
    selector: "recursive-selectable-structure",
    template: `
        <clr-tree-node [(clrSelected)]="item.selected">
            {{item.name}}
            <ng-template [clrIfExpanded]="item.expanded" *ngFor="let child of item.children">
                <recursive-selectable-structure
                    [item]="child"
                    ngProjectAs="clr-tree-node">
                </recursive-selectable-structure>
            </ng-template>
        </clr-tree-node>
    `
})
export class RecursiveSelectableStructureComponent {
    @Input() item: any;
    @Input() selected: boolean = false;
}
