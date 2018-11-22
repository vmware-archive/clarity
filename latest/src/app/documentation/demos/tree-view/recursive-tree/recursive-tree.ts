/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {ClrSelectedState} from "@clr/angular";

const EXAMPLE_HTML = `
<clr-tree>
    <clr-tree-node *clrRecursiveFor="let file of root; getChildren: getChildren"
                   [(clrSelected)]="file.selected">
        {{file.name}}
    </clr-tree-node>
</clr-tree>
`;

const EXAMPLE_TS = `
export class RecursiveSelection {
    root = [
        {
            name: "src",
            selected: ClrSelectedState.INDETERMINATE,
            files: [
                {
                    name: "app",
                    selected: ClrSelectedState.INDETERMINATE,
                    files: [
                        {
                            name: "app.component.html",
                            selected: ClrSelectedState.UNSELECTED
                        },
                        {
                            name: "app.component.ts",
                            selected: ClrSelectedState.UNSELECTED
                        },
                        {
                            name: "app.module.ts",
                            selected: ClrSelectedState.SELECTED
                        },
                        {
                            name: "app.routing.ts",
                            selected: ClrSelectedState.UNSELECTED
                        }
                    ]
                },
                {
                    name: "environments",
                    selected: ClrSelectedState.SELECTED,
                    files: [
                        {
                            name: "environments.prod.ts",
                            selected: ClrSelectedState.SELECTED
                        },
                        {
                            name: "environment.ts",
                            selected: ClrSelectedState.SELECTED
                        }
                    ]
                },
                {
                    name: "index.html",
                    selected: ClrSelectedState.UNSELECTED,
                },
                {
                    name: "main.ts",
                    selected: ClrSelectedState.UNSELECTED,
                }
            ]
        },
        {
            name: "package.json",
            selected: ClrSelectedState.UNSELECTED
        },
        {
            name: "tsconfig.json",
            selected: ClrSelectedState.UNSELECTED
        }
    ];

    getChildren = (folder) => folder.files;
}
`;

@Component({
    selector: "clr-recursive-tree-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["../tree-view.demo.scss"],
    templateUrl: "recursive-tree.html"
})
export class RecursiveTreeDemo {
    example_html = EXAMPLE_HTML;
    example_ts = EXAMPLE_TS;

    root = [
        {
            name: "src",
            selected: ClrSelectedState.INDETERMINATE,
            files: [
                {
                    name: "app",
                    selected: ClrSelectedState.INDETERMINATE,
                    files: [
                        {
                            name: "app.component.html",
                            selected: ClrSelectedState.UNSELECTED
                        },
                        {
                            name: "app.component.ts",
                            selected: ClrSelectedState.UNSELECTED
                        },
                        {
                            name: "app.module.ts",
                            selected: ClrSelectedState.SELECTED
                        },
                        {
                            name: "app.routing.ts",
                            selected: ClrSelectedState.UNSELECTED
                        }
                    ]
                },
                {
                    name: "environments",
                    selected: ClrSelectedState.UNSELECTED,
                    files: [
                        {
                            name: "environments.prod.ts",
                            selected: ClrSelectedState.UNSELECTED
                        },
                        {
                            name: "environment.ts",
                            selected: ClrSelectedState.UNSELECTED
                        }
                    ]
                },
                {
                    name: "index.html",
                    selected: ClrSelectedState.SELECTED,
                },
                {
                    name: "main.ts",
                    selected: ClrSelectedState.SELECTED,
                }
            ]
        },
        {
            name: "package.json",
            selected: ClrSelectedState.UNSELECTED
        },
        {
            name: "tsconfig.json",
            selected: ClrSelectedState.UNSELECTED
        }
    ];

    // TODO: update the docs to mention the ClrGetChildrenFunction<T> type once we add it
    getChildren = (folder) => folder.files;
}
