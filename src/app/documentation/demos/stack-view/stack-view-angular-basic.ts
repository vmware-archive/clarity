/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {StackViewNgDemo} from "./stack-view-ng-demo";

const EXAMPLE = `
<clr-stack-view>
    <clr-stack-header>Angular stack view</clr-stack-header>

    <clr-stack-block>
        <clr-stack-label>Label 1</clr-stack-label>
        <clr-stack-content>Content 1</clr-stack-content>
    </clr-stack-block>

    <clr-stack-block [clrSbExpanded]="true">
        <clr-stack-label>Label 2</clr-stack-label>
        <clr-stack-content>Content 2</clr-stack-content>
        <clr-stack-block>
            <clr-stack-label>Sub-label 1</clr-stack-label>
            <clr-stack-content>Sub-content 1</clr-stack-content>
        </clr-stack-block>
        <clr-stack-block>
            <clr-stack-label>Sub-label 2</clr-stack-label>
            <clr-stack-content>Sub-content 2</clr-stack-content>
        </clr-stack-block>
        <clr-stack-block>
            <clr-stack-label>Sub-label 3</clr-stack-label>
            <clr-stack-content>Sub-content 3</clr-stack-content>
        </clr-stack-block>
    </clr-stack-block>

    <clr-stack-block>
        <clr-stack-label>Label 3</clr-stack-label>
        <clr-stack-content>Content 3</clr-stack-content>
        <clr-stack-block>
            <clr-stack-label>Sub-label 4</clr-stack-label>
            <clr-stack-content>Sub-content 4</clr-stack-content>
        </clr-stack-block>
        <clr-stack-block>
            <clr-stack-label>Sub-label 5</clr-stack-label>
            <clr-stack-content>Sub-content 5</clr-stack-content>
        </clr-stack-block>
    </clr-stack-block>
</clr-stack-view>
`;

@Component({
    selector: "clr-stack-view-angular-basic-demo",
    templateUrl: "./stack-view-angular-basic.html",
    styleUrls: ["./stack-view.demo.scss"]
})

export class StackViewAngularBasicDemo extends StackViewNgDemo {
    example = EXAMPLE;
};
