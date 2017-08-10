/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE1 = `
<clr-tooltip>
    <clr-icon clrTooltipTrigger shape="info-circle" size="24"></clr-icon>
    <clr-tooltip-content clrPosition="top-right" clrSize="xs" *clrIfOpen>
        <span>Lorem</span>
    </clr-tooltip-content>
</clr-tooltip>
`;

const EXAMPLE2 = `
<clr-tooltip>
    <clr-icon clrTooltipTrigger shape="info-circle" size="24"></clr-icon>
    <clr-tooltip-content clrPosition="top-left" clrSize="sm" *clrIfOpen>
        <span>Lorem ipsum</span>
    </clr-tooltip-content>
</clr-tooltip>
`;

const EXAMPLE3 = `
<clr-tooltip>
    <clr-icon clrTooltipTrigger shape="info-circle" size="24"></clr-icon>
    <clr-tooltip-content clrPosition="bottom-right" clrSize="md" *clrIfOpen>
        <span>Lorem ipsum sit</span>
    </clr-tooltip-content>
</clr-tooltip>
`;

const EXAMPLE4 = `
<clr-tooltip>
    <clr-icon clrTooltipTrigger shape="info-circle" size="24"></clr-icon>
    <clr-tooltip-content clrPosition="bottom-left" clrSize="lg" *clrIfOpen>
        <span>Lorem ipsum sit</span>
    </clr-tooltip-content>
</clr-tooltip>
`;

const EXAMPLE5 = `
<clr-tooltip>
    <clr-icon clrTooltipTrigger shape="info-circle" size="24"></clr-icon>
    <clr-tooltip-content *clrIfOpen>
        <span>Lorem ipsum sit</span>
    </clr-tooltip-content>
</clr-tooltip>
`;

const EXAMPLE6 = `
<clr-tooltip>
    <clr-icon clrTooltipTrigger shape="info-circle" size="24"></clr-icon>
    <clr-tooltip-content clrPosition="left" clrSize="sm" *clrIfOpen>
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
