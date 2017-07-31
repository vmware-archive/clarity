/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
    Component,
    ContentChild,
} from "@angular/core";

import {IfOpenService} from "../../utils/conditional/if-open.service";
import {SignpostTriggerDirective} from "./signpost-trigger.directive";

@Component({
    selector: "clr-signpost",
    template: `
        <ng-container *ngIf="!useCustomTrigger">
            <button
                type="button"
                class="signpost-action btn btn-small btn-link"
                clrSignpostTrigger>
                <clr-icon shape="info"></clr-icon>
            </button>
        </ng-container>
        
        <ng-content></ng-content>
    `,
    host: {"[class.signpost]": "true"},
    providers: [IfOpenService]
})

/*********
 *
 * @class Signpost
 *
 * @description
 * Class used to configure and control the state of a Signpost and its associated SignpostContent.
 * It supports the clrPosition with a 'right-middle' default.
 *
 */
export class Signpost {
    /**********
     * @property useCustomTrigger
     *
     * @description
     * Flag used to determine if we need to use the default trigger or a user supplied trigger element.
     *
     * @type {boolean}
     */
    public useCustomTrigger: boolean = false;

    /**********
     * @property signPostTrigger
     *
     * @description
     * Uses ContentChild to check for a user supplied element with the SignpostTriggerDirective on it.
     *
     * @type {SignpostTriggerDirective}
     */
    @ContentChild(SignpostTriggerDirective)
    set customTrigger(trigger: SignpostTriggerDirective) {
        this.useCustomTrigger = !!trigger;
    }
}
