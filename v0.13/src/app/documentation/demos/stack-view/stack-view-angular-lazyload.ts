/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, ViewChild} from "@angular/core";
import {StackViewNgDemo} from "./stack-view-ng-demo";
import {ClrStackBlock} from "@clr/angular";

const EXAMPLE = `
<clr-stack-view>
    <clr-stack-header>
        Lazily loaded children
        <button class="stack-action btn btn-sm btn-link" (click)="resetChildren()" type="button">Reset</button>
    </clr-stack-header>

    <clr-stack-block #lazyBlock [clrSbExpandable]="true" (clrSbExpandedChange)="fetchChildren()">
        <clr-stack-label>Label 1</clr-stack-label>
        <clr-stack-content>Content 1</clr-stack-content>

        <clr-stack-block *ngIf="children.length == 0">
            <div>Loading...</div>
        </clr-stack-block>

        <clr-stack-block *ngFor="let child of children">
            <clr-stack-label>{{child.title}}</clr-stack-label>
            <clr-stack-content>{{child.content}}</clr-stack-content>
        </clr-stack-block>
    </clr-stack-block>

    <clr-stack-block>
        <clr-stack-label>Label 2</clr-stack-label>
        <clr-stack-content>Content 2</clr-stack-content>
    </clr-stack-block>
</clr-stack-view>
`;

@Component({
    selector: "clr-stack-view-angular-lazyload-demo",
    templateUrl: "./stack-view-angular-lazyload.html",
    styleUrls: ["./stack-view.demo.scss"]
})
export class StackViewAngularLazyloadDemo extends StackViewNgDemo {
    @ViewChild("lazyBlock") lazyBlock: ClrStackBlock;

    resetChildren(): void {
        this.lazyBlock.expanded = false;
        this.children = [];
    }

    example = EXAMPLE;
};
