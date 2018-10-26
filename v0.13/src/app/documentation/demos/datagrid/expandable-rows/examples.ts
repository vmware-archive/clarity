/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
export const EXAMPLES = {
    basic: `
<clr-dg-row *ngFor="let user of users">
    <-- Cells declarations -->
    <clr-dg-cell>...</clr-dg-cell>

    <clr-dg-row-detail *clrIfExpanded>
        Lorem ipsum...
    </clr-dg-row-detail>
</clr-dg-row>
`,

    replace: `
<clr-dg-row-detail *clrIfExpanded [clrDgReplace]="true">
    Lorem ipsum...
</clr-dg-row-detail>
`,

    lazyLoadingRow: `
<clr-dg-row *ngFor="let user of users">
    <-- Cells declarations -->
    <clr-dg-cell>...</clr-dg-cell>

    <my-detail *clrIfExpanded [user]="user" ngProjectAs="clr-dg-row-detail"></my-detail>
</clr-dg-row>
`,

    lazyLoadingDetail: `
@Component({
    selector: "my-detail",
    template: \`
        <div [clrLoading]="loading">...</div>
    \`
})
class MyDetailComponent implements OnInit {
    @Input() user: User;

    loading: boolean;

    ngOnInit() {
        this.loading = true;
        // Make the server call
        fetchRemoteDetail(user).then(() => this.loading = false));
    }
}
`,

    conditional: `
<ng-container ngProjectAs="clr-dg-row-detail" *ngIf="true">
  <clr-dg-row-detail *clrIfExpanded>
    Lorem ipsum...
  </clr-dg-row-detail>
</ng-container>
`
};
