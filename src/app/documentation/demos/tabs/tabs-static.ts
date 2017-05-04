/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<ul id="demoTabs" class="nav" role="tablist">
    <li role="presentation" class="nav-item">
        <button id="tab1" class="btn btn-link nav-link active" aria-controls="panel1"
                aria-selected="true" type="button">Dashboard</button>
    </li>
    <li role="presentation" class="nav-item">
        <button id="tab2" class="btn btn-link nav-link" aria-controls="panel2"
                aria-selected="false" type="button">Management</button>
    </li>
    <li role="presentation" class="nav-item">
        <button id="tab3" class="btn btn-link nav-link" aria-controls="panel3"
                aria-selected="false" type="button">Cloud</button>
    </li>
</ul>
<section id="panel1" role="tabpanel" aria-labelledby="tab1">
    ...
</section>
<section id="panel2" role="tabpanel" aria-labelledby="tab2" aria-hidden="true">
    ...
</section>
<section id="panel3" role="tabpanel" aria-labelledby="tab3" aria-hidden="true">
    ...
</section>
`;

@Component({
    selector: "clr-tabs-demo-static",
    templateUrl: "./tabs-static.demo.html",
})
export class TabsStaticDemo {
    example = EXAMPLE;
}
