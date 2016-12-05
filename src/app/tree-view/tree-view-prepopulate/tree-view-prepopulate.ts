/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "clr-tree-view-prepopulate-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["../tree-view.demo.css"],
    templateUrl: "tree-view-prepopulate.html"
})
export class TreeViewPrepopulateDemo {
    selection: any[] = [
        {
            model: "Users",
            selected: false,
            children: [
                {
                    model: "read",
                    selected: true
                },
                {
                    model: "modify",
                    selected: true
                }
            ]
        },
        {
            model: "Owner",
            selected: true
        },
        {
            model: "Public",
            selected: false,
            children: [
                {
                    model: "read",
                    selected: true
                }
            ]
        }
    ];
}
