/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE1 = `
<clr-tooltip [clrTooltipDirection]="'top-right'" [clrTooltipSize]="'xs'">
    <clr-icon shape="info-circle" size="24"></clr-icon>
    <clr-tooltip-content>
        <span>Lorem</span>
    </clr-tooltip-content>
</clr-tooltip>
`;

const EXAMPLE2 = `
<clr-tooltip [clrTooltipDirection]="'top-left'" [clrTooltipSize]="'sm'">
    <clr-icon shape="info-circle" size="24"></clr-icon>
    <clr-tooltip-content>
        <span>Lorem ipsum</span>
    </clr-tooltip-content>
</clr-tooltip>
`;

const EXAMPLE3 = `
<clr-tooltip [clrTooltipDirection]="'bottom-right'" [clrTooltipSize]="'md'">
    <clr-icon shape="info-circle" size="24"></clr-icon>
    <clr-tooltip-content>
        <span>Lorem ipsum sit</span>
    </clr-tooltip-content>
</clr-tooltip>
`;

const EXAMPLE4 = `
<clr-tooltip [clrTooltipDirection]="'bottom-left'" [clrTooltipSize]="'lg'">
    <clr-icon shape="info-circle" size="24"></clr-icon>
    <clr-tooltip-content>
        <span>Lorem ipsum sit</span>
    </clr-tooltip-content>
</clr-tooltip>
`;

const EXAMPLE5 = `
<clr-tooltip>
    <clr-icon shape="info-circle" size="24"></clr-icon>
    <clr-tooltip-content>
        <span>Lorem ipsum sit</span>
    </clr-tooltip-content>
</clr-tooltip>
`;

const EXAMPLE6 = `
<clr-tooltip [clrTooltipDirection]="'left'" [clrTooltipSize]="'sm'">
    <clr-icon shape="info-circle" size="24"></clr-icon>
    <clr-tooltip-content>
        <span>Lorem ipsum sit</span>
    </clr-tooltip-content>
</clr-tooltip>
`;

@Component({
    moduleId: module.id,
    selector: "clr-tooltips-angular-demo",
    styleUrls: ["./tooltips.demo.scss"],
    templateUrl: "./tooltips-angular.html"
})
export class TooltipsAngularDemo {
    example1 = EXAMPLE1;
    example2 = EXAMPLE2;
    example3 = EXAMPLE3;
    example4 = EXAMPLE4;
    example5 = EXAMPLE5;
    example6 = EXAMPLE6;
}
