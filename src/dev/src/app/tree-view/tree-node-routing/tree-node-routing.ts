/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const EXAMPLE_HTML = `
<clr-tree-node class="example-beatles-tree">
    The Beatles
    <ng-template [clrIfExpanded]="true">
        <clr-tree-node>
            <a
                [routerLink]="['./album1']"
                class="clr-treenode-link"
                routerLinkActive="active">Abbey Road</a>
        </clr-tree-node>

        <clr-tree-node>
            <a
                [routerLink]="['./album2']"
                class="clr-treenode-link"
                routerLinkActive="active">Revolver</a>
        </clr-tree-node>

        <clr-tree-node>
            <a
                [routerLink]="['./album3']"
                class="clr-treenode-link"
                routerLinkActive="active">Rubber Soul</a>
        </clr-tree-node>
    </ng-template>
</clr-tree-node>
<router-outlet></router-outlet>
`;

@Component({
  selector: 'clr-tree-node-routing-demo',
  styleUrls: ['../tree-view.demo.scss'],
  templateUrl: 'tree-node-routing.html',
})
export class TreeNodeRoutingDemo {
  exampleHTML = EXAMPLE_HTML;
}
