/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, Input, OnDestroy, Optional, SkipSelf} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

import {IfOpenService} from "../../utils/conditional/if-open.service";
import {ROOT_DROPDOWN_PROVIDER, RootDropdownService} from "./providers/dropdown.service";

@Component({
    selector: "clr-dropdown",
    template: "<ng-content></ng-content>",
    host: {
        "[class.dropdown]": "true",
        // FIXME: remove this as soon as we stop supporting this old <div class="dropdown-menu"> syntax
        "[class.open]": "ifOpenService.open"
    },
    providers: [IfOpenService, ROOT_DROPDOWN_PROVIDER]
})
export class Dropdown implements OnDestroy {
    private _subscription: Subscription;

    constructor(@SkipSelf() @Optional() public parent: Dropdown, public ifOpenService: IfOpenService,
                dropdownService: RootDropdownService) {
        this._subscription = dropdownService.changes.subscribe(value => this.ifOpenService.open = value);
    }

    @Input("clrCloseMenuOnItemClick") isMenuClosable: boolean = true;

    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
}
