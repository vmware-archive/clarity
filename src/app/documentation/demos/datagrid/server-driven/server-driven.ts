/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

import {ClrDatagridStateInterface} from "@clr/angular";
import {FetchResult, Inventory} from "../inventory/inventory";
import {User} from "../inventory/user";
import {EXAMPLES} from "./examples";

@Component({
    selector: "clr-datagrid-server-driven-demo",
    providers: [Inventory],
    templateUrl: "server-driven.html",
    styleUrls: ["../datagrid.demo.scss"]
})
export class DatagridServerDrivenDemo {
    examples = EXAMPLES;
    users: User[];
    total: number;
    loading: boolean = true;

    constructor(private inventory: Inventory) {
        inventory.size = 103;
        this.inventory.latency = 500;
        inventory.reset();
    }

    refresh(state: ClrDatagridStateInterface) {
        this.loading = true;
        let filters: {[prop: string]: any[]} = {};
        if (state.filters) {
            for (let filter of state.filters) {
                let {property, value} = <{property: string, value: string}>filter;
                filters[property] = [value];
            }
        }
        this.inventory.filter(filters)
            .sort(<{by: string, reverse: boolean}>state.sort)
            .fetch(state.page.from, state.page.size)
            .then((result: FetchResult) => {
                this.users = result.users;
                this.total = result.length;
                this.loading = false;
            });
    }
}
