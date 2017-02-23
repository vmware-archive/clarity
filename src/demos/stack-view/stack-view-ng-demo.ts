/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export class StackViewNgDemo {
    /*
     * Modal edit demo
     */
    blocks: any[] = [
        { title: "Label 1", content: "Content 1"},
        {
            title: "Label 2",
            content: "Content 2",
            children: [
                { title: "Sub-label 1", content: "Sub-content 1"},
                { title: "Sub-label 2", content: "Sub-content 2"},
                { title: "Sub-label 3", content: "Sub-content 3"},
            ]
        },
        { title: "Label 3", content: "Content 3"}
    ];

    editModal: boolean = false;

    /*
     * Lazy loading demo
     */
    children: any[] = [];

    fetchChildren(): void {
        if (this.children.length > 0) {
            return;
        }
        setTimeout(() => {
            this.children = [
                { title: "Sub-label 1", content: "Sub-content 1"},
                { title: "Sub-label 2", content: "Sub-content 2"},
                { title: "Sub-label 3", content: "Sub-content 3"},
            ];
        }, 2000);
    }
}
