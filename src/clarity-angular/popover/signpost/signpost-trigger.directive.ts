/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
    Directive,
    HostListener
} from "@angular/core";

import { IfOpenService } from "../../utils/conditional/if-open.service";

@Directive({
    selector: "[clrSignpostTrigger]"
})

/*********
 *
 * @class SignpostTriggerDirective
 *
 * @Description
 * A Directive added to the Signpost Trigger button that will call the Signpost.toggle() function to hide/show the
 * SignpostContent.
 *
 */
export class SignpostTriggerDirective {

    constructor(private ifOpenService: IfOpenService) { }

    /**********
     * @function onSignpostContentClick
     *
     * @description
     * click handler for the Signpost trigger button used to hide/show SignpostContent.
     */
    @HostListener("click")
    onSignpostTriggerClick(): void {
        this.ifOpenService.open = !this.ifOpenService.open;
    }
}
