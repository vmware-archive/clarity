/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

import "@clr/icons/shapes/all-shapes";


const EXAMPLE_HTML = `
<clr-tree-node>
    <clr-icon shape="building"></clr-icon>
    Office Locations
    <ng-template clrIfExpanded>
        <lazy-loaded-locations></lazy-loaded-locations>
    </ng-template>
</clr-tree-node>
`;

const EXAMPLE_TS = `
import {Component, Input, OnInit} from "@angular/core";

@Component({
    selector: "lazy-loaded-locations",
    template: \`
        <ng-container [clrLoading]="loading">
            <clr-tree-node *ngFor="let location of locations">
                {{location}}
            </clr-tree-node>
        </ng-container>
    \`
})
export class LazyLoadedLocationsComponent implements OnInit {
    @Input() node: string;
    locations: string[];
    loading: boolean;

    ngOnInit() {
        this.loading = true;
        // This would be a call to your service that communicates with the server
        this.locations = fetchLocations();
    }
}
`;

@Component({
    selector: "clr-tree-node-lazy-loading-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["../tree-view.demo.scss"],
    templateUrl: "./lazy-loading.html"
})
export class TreeNodeLazyLoadingDemo {
    example_html = EXAMPLE_HTML
    example_ts = EXAMPLE_TS;
}
