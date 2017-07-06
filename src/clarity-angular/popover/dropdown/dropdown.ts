/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
    Component,
    Input,
    Optional,
    SkipSelf
} from "@angular/core";

import {IfOpenService} from "../../utils/conditional/if-open.service";

@Component({
    selector: "clr-dropdown",
    template: "<ng-content></ng-content>",
    host: {
        "[class.dropdown]" : "true",
        // FIXME: remove this as soon as we stop supporting this old <div class="dropdown-menu"> syntax
        "[class.open]": "ifOpenService.open"
    },
    providers: [ IfOpenService ]
})
export class Dropdown {

    constructor(@SkipSelf() @Optional() public parent: Dropdown, public ifOpenService: IfOpenService) {}

    @Input("clrCloseMenuOnItemClick") isMenuClosable: boolean = true;
}
