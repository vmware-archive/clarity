/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, Input} from "@angular/core";

@Component({
    selector: "clr-small-selection-tree-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["../tree-view.demo.scss"],
    templateUrl: "small-selection-tree.html"
})
export class SmallSelectionTreeDemo {
    permissions: any = [
        {
            type: "Authenticated Users",
            expanded: true,
            rights: [
                {
                    name: "Read",
                    enable: true
                },
                {
                    name: "Modify",
                    enable: false
                }
            ]
        },
        {
            type: "Owners",
            expanded: true,
            rights: [
                {
                    name: "Read",
                    enable: true
                },
                {
                    name: "Modify",
                    enable: true
                }
            ]
        },
        {
            type: "Public",
            expanded: true,
            rights: [
                {
                    name: "Read",
                    enable: false
                },
                {
                    name: "Modify",
                    enable: true
                }
            ]
        }
    ];
}
