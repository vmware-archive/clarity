/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
export const EXAMPLES = {
  filterInterface: `
interface ClrDatagridFilterInterface<T, S=any> {
    isActive(): boolean;
    accepts(item: T): boolean;
    changes: Observable<any>;
    readonly state?: S;
    equals?(other: ClrDatagridFilterInterface<T, any>): boolean;
}
`,

  inlineFilterTS: `
import {ClrDatagridFilterInterface} from "@clr/angular";

class MyFilter implements ClrDatagridFilterInterface<User> {
    changes = new Subject<any>();
    isActive(): boolean { /* ... */ }
    accepts(user: User) { /* ... */ }
}

@Component({ /* ... */ })
class MyComponent {
    public myFilter = new MyFilter();
}
`,

  inlineFilterHTML: `
<-- In the columns declaration -->
<clr-dg-column>
    My column
    <clr-dg-filter [clrDgFilter]="myFilter">
        <-- The HTML from your custom filter: inputs, checkboxes, ... -->
    </clr-dg-filter>
</clr-dg-column>
`,

  customFilterComponentTS: `
import {ClrDatagridFilterInterface, ClrDatagridFilter} from "@clr/angular";

@Component({
    selector: "my-filter",
    /* ... */
})
class MyFilter implements ClrDatagridFilterInterface<User> {
    constructor(private filterContainer: ClrDatagridFilter) {
        filterContainer.setFilter(this);
    }
    changes = new Subject<any>();
    isActive(): boolean { /* ... */ }
    accepts(user: User) { /* ... */ }
}
`,

  customFilterComponentHTML: `
<-- In the columns declaration -->
<clr-dg-column>
    My column
    <clr-dg-filter>
        <my-filter></my-filter>
    </clr-dg-filter>
</clr-dg-column>
`,

  templateVariableTS: `
@Component({
    selector: "my-reusable-filter",
    /* ... */
})
class MyReusableFilter {
    changes = new Subject<any>();
    isActive(): boolean { /* ... */ }
    accepts(user: User) { /* ... */ }
}
`,

  templateVariableHTML: `
<-- In the columns declaration -->
<clr-dg-column>
    My column
    <clr-dg-filter [clrDgFilter]="myFilter">
        <my-reusable-filter #myFilter></my-reusable-filter>
    </clr-dg-filter>
</clr-dg-column>
`,

  colorFilterTS: `
import {ClrDatagridFilterInterface} from "@clr/angular";

@Component({
    selector: "color-filter",
    /* The rest of the filter component's declaration */
})
class ColorFilter implements ClrDatagridFilterInterface<User> {
    changes = new Subject<any>();
    isActive(): boolean { /* ... */ }
    accepts(user: User) { /* ... */ }
}
`,

  colorFilterHTML: `
<-- In the columns declaration -->
<clr-dg-column>
    Favorite color
    <clr-dg-filter [clrDgFilter]="colorFilter">
        <color-filter #colorFilter></color-filter>
    </clr-dg-filter>
</clr-dg-column>
`,
  stringFilterColumnPresetHTML: `
<-- Using clrFilterValue declaration -->
<clr-dg-column [clrDgField]="'name'" [(clrFilterValue)]="myFilterValue">
    Name
</clr-dg-column>
`,
  filterSearchResults: `
<clr-datagrid>
    <-- 
      This will search into user.creation (a Date object) and not the result
      of the pipe (the string 'Jan 6, 2018').
    -->
    <clr-dg-column [clrDgField]="'creation'">Creation Date</clr-dg-column>

    <-- 
      This will search into user.name and will not include user.id -- 
      searching for user.id will not return any results.
    -->
    <clr-dg-column [clrDgField]="'name'">Name</clr-dg-column>

    <clr-dg-row *ngFor="let user of users">
        <clr-dg-cell>{{user.creation | date}}</clr-dg-cell>
        <clr-dg-cell>{{ user.id }} : {{ user.name }}</clr-dg-cell>
    </clr-dg-row>
</clr-datagrid>
  `,
};
