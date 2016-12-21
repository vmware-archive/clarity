/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
export const EXAMPLES = {
    filterInterface: `
interface Filter<T> {
    isActive(): boolean;
    accepts(item: T): boolean;
    changes: Observable<any>;
}
`,

    inlineFilterTS: `
import {Filter} from "clarity-angular";

class MyFilter implements Filter<User> {
    changes = new Subject<any>();
    isActive(): boolean { /* ... */ }
    accepts(user: User) { /* ... */ }
}

@Component({ /* ... */ })
class MyComponent {
    private myFilter = new MyFilter();
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
import {Filter, DatagridFilter} from "clarity-angular";

@Component({
    selector: "my-filter",
    /* ... */
})
class MyFilter implements Filter<User> {
    constructor(private filterContainer: DatagridFilter) {
        filterContainer.filter = this;
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
import {Filter} from "clarity-angular";

@Component({
    selector: "color-filter",
    /* The rest of the filter component's declaration */
})
class ColorFilter implements Filter<User> {
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
`
};