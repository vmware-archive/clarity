/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE1 = `
<a href="..." role="tooltip" aria-haspopup="true" class="tooltip tooltip-sm tooltip-top-right">
    <clr-icon shape="info-circle" size="24"></clr-icon>
    <span class="tooltip-content">Lorem ipsum sit</span>
</a>
`;
const EXAMPLE2 = `
<a href="..." role="tooltip" aria-haspopup="true" class="tooltip tooltip-sm tooltip-top-left">
    <clr-icon shape="info-circle" size="24"></clr-icon>
    <span class="tooltip-content">Lorem ipsum sit</span>
</a>
`;

const EXAMPLE3 = `
<a href="..." role="tooltip" aria-haspopup="true" class="tooltip tooltip-md tooltip-bottom-right">
    <clr-icon shape="info-circle" size="24"></clr-icon>
    <span class="tooltip-content">Lorem ipsum dolor sit amet, ipsum</span>
</a>
`;

const EXAMPLE4 = `
<a href="..." role="tooltip" aria-haspopup="true" class="tooltip tooltip-lg tooltip-bottom-left">
    <clr-icon shape="info-circle" size="24"></clr-icon>
    <span class="tooltip-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
</a>
`;

const EXAMPLE5 = `
<a href="..." role="tooltip" aria-haspopup="true" class="tooltip tooltip-right">
    <clr-icon shape="info-circle" size="24"></clr-icon>
    <span class="tooltip-content">Lorem ipsum dolor sit amet, ipsum</span>
</a>
`;

const EXAMPLE6 = `
<a href="..." role="tooltip" aria-haspopup="true" class="tooltip tooltip-sm tooltip-left">
    <clr-icon shape="info-circle" size="24"></clr-icon>
    <span class="tooltip-content">Lorem ipsum sit</span>
</a>
`;


@Component({
    selector: "clr-tooltips-directions-demo",
    styleUrls: ["./tooltips.demo.scss"],
    templateUrl: "./tooltips-directions.html"
})
export class TooltipsDirectionsDemo {
    example1 = EXAMPLE1;
    example2 = EXAMPLE2;
    example3 = EXAMPLE3;
    example4 = EXAMPLE4;
    example5 = EXAMPLE5;
    example6 = EXAMPLE6;
}
