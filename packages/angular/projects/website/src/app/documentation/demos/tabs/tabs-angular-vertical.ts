/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const EXAMPLE = `
<clr-tabs clrLayout="vertical">
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
  selector: 'clr-tabs-angular-vertical',
  templateUrl: './tabs-angular-vertical.demo.html',
})
export class TabsAngularVerticalDemo {
  example = EXAMPLE;
}
