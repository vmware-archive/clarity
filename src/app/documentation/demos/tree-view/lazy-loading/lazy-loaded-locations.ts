/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, Input, OnInit} from "@angular/core";

@Component({
    selector: "lazy-loaded-locations",
    template: `
        <ng-container [clrLoading]="loading">
            <clr-tree-node *ngFor="let location of locations">
                {{location}}
            </clr-tree-node>
        </ng-container>
    `
})
export class LazyLoadedLocationsComponent implements OnInit {
    @Input() node: string;
    locations: string[];
    loading: boolean;

    ngOnInit() {
        this.loading = true;
        // This would be a call to your service that communicates with the server
        setTimeout(() => {
            this.locations = [
                "London",
                "New York",
                "Bangalore"
            ];
            this.loading = false;
        }, 2000);
    }
}
