/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, OnInit} from "@angular/core";
import {Observable, of, timer} from "rxjs";
import {map} from "rxjs/operators";

const EXAMPLE_HTML = `
<clr-tree [clrLazy]="true">
    <clr-tree-node *clrRecursiveFor="let file of root$ | async; getChildren: getChildren"
                   [clrExpandable]="file.isFolder">
        <clr-icon [attr.shape]="file.isFolder ? 'folder' : 'file'"></clr-icon>
        {{file.name}}
    </clr-tree-node>
</clr-tree>
`;

const EXAMPLE_TS = `
@Component({...})
export class FileBrowser implements OnInit {
    constructor(private folderService: FolderService) {}

    root$: Observable<File[]>;

    getChildren = (folder: File) => {
        if (folder.isFolder) {
            return this.folderService.getFiles(folder);
        } else {
            return null;
        }
    };

    ngOnInit(): void {
        this.root$ = this.folderService.getFiles('/');
    }
}
`;

interface File {
    name: string;
    isFolder: boolean;
    files: File[];
}

const ROOT = [
    {
        name: "src",
        isFolder: true,
        files: [
            {
                name: "app",
                isFolder: true,
                files: [
                    {
                        name: "app.component.html",
                        isFolder: false
                    },
                    {
                        name: "app.component.ts",
                        isFolder: false
                    },
                    {
                        name: "app.module.ts",
                        isFolder: false
                    },
                    {
                        name: "app.routing.ts",
                        isFolder: false
                    }
                ]
            },
            {
                name: "environments",
                isFolder: true,
                files: [
                    {
                        name: "environments.prod.ts",
                        isFolder: false
                    },
                    {
                        name: "environment.ts",
                        isFolder: false
                    }
                ]
            },
            {
                name: "index.html",
                isFolder: false
            },
            {
                name: "main.ts",
                isFolder: false
            }
        ]
    },
    {
        name: "package.json",
        isFolder: false
    },
    {
        name: "tsconfig.json",
        isFolder: false
    }
];

@Component({
    selector: "clr-lazy-loading-recursive-tree-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["../tree-view.demo.scss"],
    templateUrl: "./lazy-loading-recursive-tree.html"
})
export class LazyLoadingRecursiveTreeDemo implements OnInit {
    example_html = EXAMPLE_HTML;
    example_ts = EXAMPLE_TS;

    root$: Observable<File[]>;

    getChildren = (folder: File) => {
        if (folder.isFolder) {
            return this.folderService.getFiles(folder);
        } else {
            return null;
        }
    };

    ngOnInit(): void {
        this.root$ = this.folderService.getFiles('/');
    }

    folderService = {
        getFiles: (folder) => {
            if (folder === '/') {
                return of(ROOT);
            } else {
                return timer(1000).pipe(map(() => folder.files));
            }
        }
    };
}
