/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
export const EXAMPLES = {
    stateInterface: `
interface ClrDatagridStateInterface {
    page?: {
        from?: number;
        to?: number;
        size?: number;
    }
    sort?: {
        by: string | Comparator<any>
        reverse: boolean;
    };
    filters?: ({property: string, value: string} | Filter<any>)[];
}
`,

    serverDrivenTS: `
import {ClrDatagridStateInterface} from "@clr/angular";

class MyComponent {
    users: User[];
    total: number;
    loading: boolean = true;

    refresh(state: ClrDatagridStateInterface) {
        this.loading = true;
        // We convert the filters from an array to a map,
        // because that's what our backend-calling service is expecting
        let filters:{[prop:string]: any[]} = {};
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
`,

    serverDrivenHTML: `
<clr-datagrid (clrDgRefresh)="refresh($event)" [clrDgLoading]="loading">
    <clr-dg-column>User ID</clr-dg-column>
    <clr-dg-column [clrDgField]="'name'">Name</clr-dg-column>
    <clr-dg-column [clrDgField]="'creation'">Creation date</clr-dg-column>
    <clr-dg-column [clrDgField]="'pokemon'">Pokemon</clr-dg-column>
    <clr-dg-column [clrDgField]="'color'">Favorite color</clr-dg-column>

    <clr-dg-row *ngFor="let user of users">
        <clr-dg-cell>{{user.id}}</clr-dg-cell>
        <clr-dg-cell>{{user.name}}</clr-dg-cell>
        <clr-dg-cell>{{user.creation | date}}</clr-dg-cell>
        <clr-dg-cell>{{user.pokemon.name}}</clr-dg-cell>
        <clr-dg-cell>
            <span class="color-square" [style.backgroundColor]="user.color"></span>
        </clr-dg-cell>
    </clr-dg-row>

    <clr-dg-footer>
        {{pagination.firstItem + 1}} - {{pagination.lastItem + 1}}
        of {{total}} users
        <clr-dg-pagination #pagination [clrDgTotalItems]="total"></clr-dg-pagination>
    </clr-dg-footer>
</clr-datagrid>
`
};
