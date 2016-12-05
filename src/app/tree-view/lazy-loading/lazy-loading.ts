/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, ViewChild} from "@angular/core";

import {TreeNode} from "../../../clarity-angular/tree-view/tree-node";

import "clarity-icons/shapes/basic-shapes";
import "clarity-icons/shapes/technology-shapes";
import "clarity-icons/shapes/social-shapes";

@Component({
    moduleId: module.id,
    selector: "clr-tree-node-lazy-loading-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["../tree-view.demo.css"],
    templateUrl: "./lazy-loading.html"
})
export class TreeNodeLazyLoadingDemo {
    dirName: string = "Applications";
    files: any[] = [];
    loading: boolean = false;

    @ViewChild("lazyTreeNode") lazyTreeNode: TreeNode;

    fetchFiles() {
        if (this.files.length > 0) {
            return;
        }
        this.loading = true;
        setTimeout(() => {
            this.files = [
                {
                    icon: "calendar",
                    name: "Calendar"
                },
                {
                    icon: "line-chart",
                    name: "Charts"
                },
                {
                    icon: "dashboard",
                    name: "Dashboard"
                },
                {
                    icon: "map",
                    name: "Maps"
                },
                {
                    icon: "email",
                    name: "Mail"
                }
            ];
            this.loading = false;
        }, 2000);
    }

    onReset() {
        this.lazyTreeNode.expanded = false;
        this.files = [];
    }
}
