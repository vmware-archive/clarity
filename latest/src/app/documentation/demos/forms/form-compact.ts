/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<form class="compact">
    ...
</form>
`;

@Component({
    selector: "clr-forms-compact-demo",
    templateUrl: "./form-compact.demo.html"
})
export class FormCompactDemo {
    example = EXAMPLE;
}
