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
    moduleId: module.id,
    selector: "clr-tree-selection-code-snippet-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["../tree-view.demo.css"],
    template: `
        <clr-example [clrCode]="exampleTS" clrLanguage="typescript"></clr-example>
        <clr-example [clrCode]="exampleTS1" clrLanguage="typescript"></clr-example>
    `
})
export class TreeSelectionCodeSnippetDemo {
    exampleTS = EXAMPLE_TS;
    exampleTS1 = EXAMPLE_TS1;
}
