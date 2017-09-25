/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, ElementRef, Inject, Input, OnDestroy, Renderer2, TemplateRef, ViewChild} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

import {IF_ACTIVE_ID, IfActiveService} from "../../utils/conditional/if-active.service";

import {AriaService} from "./aria-service";

let nbTabContentComponents: number = 0;

@Component({
    selector: "clr-tab-content",
    template: `
        <ng-content></ng-content>
    `,
    host: {"role": "tabpanel"}
})
export class TabContent implements OnDestroy {
    @ViewChild("tabContentProjectedRef") templateRef: TemplateRef<TabContent>;

    constructor(public ifActiveService: IfActiveService, @Inject(IF_ACTIVE_ID) public id: number,
                private ariaService: AriaService, private renderer: Renderer2, private el: ElementRef) {
        if (!this.tabContentId) {
            this.tabContentId = "clr-tab-content-" + (nbTabContentComponents++);
        }

        this.setAttributes();
        this.subscriptions.push(this.ifActiveService.currentChange.subscribe(() => {
            this.setAttributes();
        }));
    }

    private subscriptions: Subscription[] = [];

    ngOnDestroy() {
        this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
    }

    get ariaLabelledBy(): string {
        return this.ariaService.ariaLabelledBy;
    }

    get tabContentId(): string {
        return this.ariaService.ariaControls;
    }

    @Input("id")
    set tabContentId(id: string) {
        this.ariaService.ariaControls = id;
    }

    get active() {
        return this.ifActiveService.current === this.id;
    }

    setAttributes() {
        this.renderer.setAttribute(this.el.nativeElement, "id", this.tabContentId);
        this.renderer.setAttribute(this.el.nativeElement, "aria-labelledby", this.ariaLabelledBy);
        this.renderer.setAttribute(this.el.nativeElement, "aria-hidden", `${!this.active}`);
        this.renderer.setAttribute(this.el.nativeElement, "data-hidden", `${!this.active}`);
    }
}
