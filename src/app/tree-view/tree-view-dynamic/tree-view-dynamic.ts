/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

import "clarity-icons/shapes/essential-shapes";
import "clarity-icons/shapes/technology-shapes";
import "clarity-icons/shapes/social-shapes";

@Component({
    moduleId: module.id,
    selector: "clr-tree-view-dynamic-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["../tree-view.demo.css"],
    templateUrl: "./tree-view-dynamic.html"
})
export class TreeViewDynamicDemo {
    rootDirectory: any[] = [
        {
            name: "Applications",
            icon: "folder",
            expanded: true,
            files: [
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
                },
                {
                    icon: "bar-chart",
                    name: "Numbers"
                },
                {
                    icon: "tasks",
                    name: "Tasks"
                },
                {
                    icon: "flag",
                    name: "Reminders"
                }
            ]
        },
        {
            name: "Files",
            icon: "folder",
            expanded: false,
            files: [
                {
                    icon: "file",
                    name: "Cover Letter.doc"
                },
                {
                    icon: "file",
                    name: "Flyer.doc"
                },
                {
                    icon: "file",
                    name: "Resume.doc"
                },
                {
                    icon: "file",
                    name: "Notes.txt"
                }
            ]
        },
        {
            name: "Images",
            icon: "folder",
            expanded: false,
            files: [
                {
                    icon: "image",
                    name: "Screenshot.png"
                },
                {
                    icon: "image",
                    name: "Pic.png"
                },
                {
                    icon: "image",
                    name: "Portfolio.jpg"
                }
            ]
        }
    ];
}
