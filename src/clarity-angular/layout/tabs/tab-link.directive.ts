/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
    ComponentFactoryResolver,
    Directive,
    ElementRef,
    HostListener,
    Inject,
    Input,
    ViewContainerRef
} from "@angular/core";
import {IF_ACTIVE_ID, IfActiveService} from "../../utils/conditional/if-active.service";
import {TemplateRefContainer} from "../../utils/template-ref/template-ref-container";
import {AriaService} from "./aria-service";

let nbTabLinkComponents: number = 0;

@Directive({
    selector: "[clrTabLink]",
    host: {
        "[id]": "tabLinkId",
        "[attr.aria-selected]": "active",
        "[attr.aria-controls]": "ariaControls",
        "role": "presentation",
        "[class.btn]": "true",
        "[class.btn-link]": "!inOverflow",
        "[class.nav-link]": "!inOverflow",
        "[class.nav-item]": "!inOverflow",
        "[class.active]": "active"
    }
})
export class TabLinkDirective {
    @Input("clrTabLinkInOverflow") inOverflow: boolean;
    templateRefContainer: TemplateRefContainer;

    constructor(public ifActiveService: IfActiveService, @Inject(IF_ACTIVE_ID) private id: number,
                private ariaService: AriaService, private el: ElementRef, private cfr: ComponentFactoryResolver,
                private viewContainerRef: ViewContainerRef) {
        if (!this.tabLinkId) {
            this.tabLinkId = "clr-tab-link-" + (nbTabLinkComponents++);
        }

        // Tab links can be rendered in one of two places: in the main area or inside the overflow dropdown menu.
        // Here, we create a container so that its template can be used to create embeddedView on the fly.
        // See TabsService's renderView() method and how it's used in Tabs class for an example.
        const factory = this.cfr.resolveComponentFactory(TemplateRefContainer);
        this.templateRefContainer =
            this.viewContainerRef.createComponent(factory, 1, undefined, [[this.el.nativeElement]]).instance;

        // if there's no active tab, set the one associated with this link as active
        // it will be overridden if a tab created after this one sets it explicitly
        // TODO: when we have another component using IfActiveService, the same logic might be
        // needed. If this is a recurring pattern, let's consider moving this logic to IfActiveService.
        if (!this.ifActiveService.current) {
            this.ifActiveService.current = id;
        }
    }

    get ariaControls(): string {
        return this.ariaService.ariaControls;
    }

    get tabLinkId(): string {
        return this.ariaService.ariaLabelledBy;
    }

    @Input("id")
    set tabLinkId(id: string) {
        this.ariaService.ariaLabelledBy = id;
    }

    @HostListener("click")
    activate() {
        this.ifActiveService.current = this.id;
    }

    get active() {
        return this.ifActiveService.current === this.id;
    }
}
