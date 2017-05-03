/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<ul class="list-unstyled">
    <li>Consectetur adipisicing elit</li>
    <li>
        Sed do eiusmod tempor
        <ul class="list">
            <li>Dolore magna</li>
            <li>...</li>
            <li>
                Incididunt ut labore
                <ul class="list-unstyled">
                    <li>Ad minim veniam</li>
                    <li>...</li>
                    <li>Exercitation ullamco</li>
                    <li>
                        Laboris nisi ut
                        <ul class="list">
                            <li>Aliquip ex ea commodo</li>
                            <li>Consequat duis</li>
                            <li>..</li>
                        </ul>
                    </li>
                    <li>In reprehenderit</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>In voluptate velit esse cillum dolore</li>
    <li>Eu fugiat nulla pariatur</li>
</ul>
`

@Component({
    selector: "clr-lists-mixed-demo",
    templateUrl: "./lists-mixed.html"
})
export class ListsMixedDemo {
    example = EXAMPLE;
}
