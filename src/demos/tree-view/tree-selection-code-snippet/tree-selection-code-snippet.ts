/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE_TS = `
        import {TreeSelection} clarity-angular/tree-view/tree-selection
`;

const EXAMPLE_TS1 = `
interface TreeSelection {
        model: any;
        selected: boolean;
        children: TreeSelection[];
    }
`;

@Component({
    selector: "clr-tree-selection-code-snippet-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["../tree-view.demo.scss"],
    template: `
        <clr-example [clrCode]="example_ts" clrLanguage="typescript"></clr-example>
        <clr-example [clrCode]="example_ts1" clrLanguage="typescript"></clr-example>
    `
})
export class TreeSelectionCodeSnippetDemo {
    example_ts = EXAMPLE_TS;
    example_ts1 = EXAMPLE_TS1;
}
