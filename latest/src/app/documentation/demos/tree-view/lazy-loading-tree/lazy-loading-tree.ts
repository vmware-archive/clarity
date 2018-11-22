/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {Observable, timer} from "rxjs";
import {map, tap} from "rxjs/operators";

const EXAMPLE_HTML = `
<clr-tree [clrLazy]="true">
    <clr-tree-node [clrLoading]="loading">
        <clr-icon shape="building"></clr-icon>
        Office Locations
        <ng-template clrIfExpanded (clrIfExpandedChange)="$event ? fetchLocations() : null">
            <clr-tree-node *ngFor="let location of locations$ | async">
                {{location}}
            </clr-tree-node>
        </ng-template>
    </clr-tree-node>
</clr-tree>
`;

const EXAMPLE_TS = `
@Component({...})
export class OfficeLocations {
    constructor(private locationService: LocationService) {}

    locations$: Observable<string[]>;
    loading = false;

    fetchLocations() {
        this.loading = true;
        this.locations$ = this.locationService.getLocations().pipe(tap(() => this.loading = false));
    }
}
`;

@Component({
    selector: "clr-lazy-loading-tree-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["../tree-view.demo.scss"],
    templateUrl: "./lazy-loading-tree.html"
})
export class LazyLoadingTreeDemo {
    example_html = EXAMPLE_HTML;
    example_ts = EXAMPLE_TS;

    locations$: Observable<string[]>;
    loading = false;

    fetchLocations() {
        this.loading = true;
        this.locations$ = this.locationService.getLocations().pipe(tap(() => this.loading = false));
    }

    locationService = {
        getLocations: () => timer(1000).pipe(map(() => ["London", "New York", "Bangalore"]))
    };
}
