/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'recursive-structure',
  template: `
        <clr-tree-node>
            {{item.name}}
            <ng-template [clrIfExpanded]="item.expanded" *ngFor="let child of item.children">
                <recursive-structure
                    [item]="child"
                    ngProjectAs="clr-tree-node">
                </recursive-structure>
            </ng-template>
        </clr-tree-node>
    `,
})
export class RecursiveStructureComponent {
  @Input() item: any;
  @Input() selected: boolean = false;
}
