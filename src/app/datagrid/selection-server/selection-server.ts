/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import "rxjs/add/operator/map";

import {HttpClient} from "@angular/common/http";
import {Component} from "@angular/core";

import {State} from "../../../clarity-angular/data/datagrid";

export interface ApiUser {
    id: number;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface UserResponse {
    page: number;
    per_page: number;
    total_pages: number;
    total: number;
    data: ApiUser[];
}

@Component({
    selector: "clr-datagrid-selection-server-demo",
    templateUrl: "selection-server.html",
    styleUrls: ["../datagrid.demo.scss"]
})
export class DatagridSelectionServerDemo {
    usersSingle: ApiUser[] = [];
    totalSingle: number;
    loadingSingle: boolean = true;
    usersMulti: ApiUser[] = [];
    totalMulti: number;
    loadingMulti: boolean = true;

    list: any[] = [];
    selected: any;
    perPage: number = 3;

    constructor(private http: HttpClient) {}

    trackById(index: number, item: any) {
        return item.id;
    }

    refreshSingle(state: State) {
        this.loadingSingle = true;
        const page = (state && state.page) ? state.page.from / this.perPage + 1 : 1;
        const url = `https://reqres.in/api/users?per_page=${this.perPage}&page=${page}`;

        this.http.get(url).subscribe((response: UserResponse) => {
            this.usersSingle = response.data;
            this.loadingSingle = false;
            this.totalSingle = response.total;
        });
    }

    refreshMulti(state: State) {
        this.loadingMulti = true;
        const page = (state && state.page) ? state.page.from / this.perPage + 1 : 1;
        const url = `https://reqres.in/api/users?per_page=${this.perPage}&page=${page}`;

        this.http.get(url).subscribe((response: UserResponse) => {
            this.usersMulti = response.data;
            this.loadingMulti = false;
            this.totalMulti = response.total;
        });
    }
}
