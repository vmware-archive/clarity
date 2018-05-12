/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import "@clr/icons/shapes/essential-shapes";
import "@clr/icons/shapes/technology-shapes";
import "@clr/icons/shapes/social-shapes";

import {Component, Input} from "@angular/core";

const EXAMPLE_HTML = `
<clr-tree-node *ngFor="let project of projects">
    <clr-icon shape="folder"></clr-icon>
    {{ project.name }}
    <a class="label badge-link">
        {{ project.badge }}
    </a>
    <ng-container *ngFor="let version of project.versions" ngProjectAs="clr-tree-node">
        <ng-container *ngIf="version.languages.length > 1; else versionBlock">
            <ng-template clrIfExpanded>
                <clr-tree-node>
                    {{ version.number }}
                    <ng-template clrIfExpanded>
                        <clr-tree-node *ngFor="let language of version.languages">
                            <a class="clr-treenode-link tree-link">
                                {{ language.name }}
                            </a>
                        </clr-tree-node>
                    </ng-template>
                </clr-tree-node>
            </ng-template>
        </ng-container>

        <ng-template #versionBlock>
            <clr-tree-node *clrIfExpanded>
                <a class="clr-treenode-link tree-link">
                    {{ version.number }}
                </a>
            </clr-tree-node>
        </ng-template>
    </ng-container>
</clr-tree-node>
`;

const EXAMPLE_TS = `
    projects = [
        {
            "name": "Project A",
            "badge": "A",
            "versions": [
                {
                    "number": "1",
                    "languages": [
                        {
                            "name": "TS"
                        }
                    ]
                }
            ]
        },
        {

            "name": "Project B",
            "badge": "B",
            "versions": [
                {
                    "number": "2",
                    "languages": [
                        {
                            "name": "GO"
                        }
                    ]
                }
            ]
        },
        {
            "name": "Project C",
            "badge": "C",
            "versions": [
                {
                    "number": "3",
                    "languages": [
                        {
                            "name": "JS"
                        },
                        {
                            "name": "JAVA"
                        }
                    ]
                }
            ]
        }
    ];
`;

@Component({
    selector: "clr-tree-view-dynamic-1-demo",
    styleUrls: ["../tree-view.demo.scss"],
    templateUrl: "./tree-view-dynamic-test.html"
})
export class TreeViewDynamicTestDemo {
    @Input("clrDemoShowCode") showCode: boolean = true;
    @Input("clrDemoShowHalf") showHalf: boolean = true;

    exampleHTML = EXAMPLE_HTML;

    exampleTS = EXAMPLE_TS;

    projects = [
        {"name": "Project A", "badge": "A", "versions": [{"number": "1", "languages": [{"name": "TS"}]}]}, {

            "name": "Project B",
            "badge": "B",
            "versions": [{"number": "2", "languages": [{"name": "GO"}]}]
        },
        {
            "name": "Project C",
            "badge": "C",
            "versions": [{"number": "3", "languages": [{"name": "JS"}, {"name": "JAVA"}]}]
        }
    ];
}
