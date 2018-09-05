/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from "@angular/core";

const EXAMPLE = `
<clr-tabs>
    <clr-tab>
        <button clrTabLink id="link1">Tab1</button>
        <clr-tab-content id="content1" *clrIfActive>
        ...
        </clr-tab-content>
    </clr-tab>
    <clr-tab>
        <button clrTabLink>Tab2</button>
        <clr-tab-content *clrIfActive="true">
        ...
        </clr-tab-content>
    </clr-tab>
</clr-tabs>
`;

@Component({
    selector: "clr-modal-tabs-angular-simple",
    templateUrl: "./tabs-angular-simple.demo.html"
})
export class TabsAngularSimpleDemo {
    example = EXAMPLE;
}
