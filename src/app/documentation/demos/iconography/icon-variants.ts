/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<clr-icon shape="bell"></clr-icon>
<clr-icon shape="bell" class="has-badge"></clr-icon>
<clr-icon shape="bell" class="has-badge--success"></clr-icon>
<clr-icon shape="bell" class="is-info has-badge--error"></clr-icon>
<clr-icon shape="bell" class="is-solid"></clr-icon>
<clr-icon shape="bell" class="is-solid has-badge--info"></clr-icon>
`;

@Component({
    selector: "clr-icon-variants-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["./iconography.demo.scss"],
    templateUrl: "./icon-variants.demo.html"
})
export class IconVariantsDemo {
    example = EXAMPLE;
}
