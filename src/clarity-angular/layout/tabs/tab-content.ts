/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
    Component,
    Inject,
    Input,
    TemplateRef,
    ViewChild
} from "@angular/core";
import {IF_ACTIVE_ID, IfActiveService} from "../../utils/conditional/if-active.service";

let nbTabContentComponents: number = 0;

@Component({
    selector: "clr-tab-content",
    template: `
        <ng-template #tabContentProjectedRef>
            <section [id]="tabContentId" role="tabpanel" [class.active]="active" 
                     [attr.aria-labelledby]="ariaLabelledBy"
                     [attr.aria-hidden]="!active" [attr.data-hidden]="!active">
                <ng-content></ng-content>
            </section>
        </ng-template>
    `
})
export class TabContent {
    @Input("clrTabContentId") tabContentId: string;
    ariaLabelledBy: string;

    @ViewChild("tabContentProjectedRef") templateRef: TemplateRef<TabContent>;

    constructor(public ifActiveService: IfActiveService, @Inject(IF_ACTIVE_ID) public id: number) {
        this.tabContentId = "clr-tab-content-" + (nbTabContentComponents++);
    }

    get active() {
        return this.ifActiveService.current === this.id;
    }
}
