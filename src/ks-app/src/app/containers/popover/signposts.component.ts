/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component} from "@angular/core";

@Component({templateUrl: "./signposts.component.html"})
export class KSSignposts {
    openState: boolean = false;
    positions = [{icon: "help-info", description: "Right bottom", position: "right-bottom", id: "rightBottomTrigger"}];
}
