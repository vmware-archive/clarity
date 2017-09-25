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
    Renderer2,
    ViewContainerRef
} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

import {IF_ACTIVE_ID, IfActiveService} from "../../utils/conditional/if-active.service";
import {TemplateRefContainer} from "../../utils/template-ref/template-ref-container";

import {AriaService} from "./aria-service";

let nbTabLinkComponents: number = 0;

@Directive({
    selector: "[clrTabLink]",
    host: {
        "role": "presentation",
        "[class.btn]": "true",
        "[class.btn-link]": "!inOverflow",
        "[class.nav-link]": "!inOverflow",
        "[class.nav-item]": "!inOverflow"
    }
})
export class TabLinkDirective {
    @Input("clrTabLinkInOverflow") inOverflow: boolean;
    templateRefContainer: TemplateRefContainer;

    constructor(public ifActiveService: IfActiveService, @Inject(IF_ACTIVE_ID) private id: number,
                private ariaService: AriaService, private el: ElementRef, private cfr: ComponentFactoryResolver,
                private viewContainerRef: ViewContainerRef, private renderer: Renderer2) {
        if (!this.tabLinkId) {
            this.tabLinkId = "clr-tab-link-" + (nbTabLinkComponents++);
        }

        // Tab links can be rendered in one of two places: in the main area or inside the overflow dropdown menu.
        // Here, we create a container so that its template can be used to create embeddedView on the fly.
        // See TabsService's renderView() method and how it's used in Tabs class for an example.
        const factory = this.cfr.resolveComponentFactory(TemplateRefContainer);
        this.templateRefContainer =
            this.viewContainerRef.createComponent(factory, 1, undefined, [[this.el.nativeElement]]).instance;
    }

    private subscriptions: Subscription[] = [];

    ngOnDestroy() {
        this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
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

    setAttributes() {
        this.renderer.setAttribute(this.el.nativeElement, "id", this.tabLinkId);
        this.renderer.setAttribute(this.el.nativeElement, "aria-selected", `${this.active}`);
        // this.ariaService.ariaControls gets assigned in TabContent, which runs after tab-link.directive.ts
        // so if it has no assigned value, don't set the attribute yet.
        if (this.ariaControls) {
            this.renderer.setAttribute(this.el.nativeElement, "aria-controls", this.ariaControls);
        }
    }

    setActiveClass() {
        if (this.active) {
            this.renderer.addClass(this.el.nativeElement, "active");
        } else {
            this.renderer.removeClass(this.el.nativeElement, "active");
        }
    }

    ngAfterViewInit() {
        // The attributes need to be set after view is initialized. If they were set in the constructor,
        // when the fist tab activation happens, this.active and this.ariaControls wouldn't be assigned yet.
        this.setAttributes();
        this.setActiveClass();

        this.subscriptions.push(this.ifActiveService.currentChange.subscribe(() => {
            this.setAttributes();
            this.setActiveClass();
        }));
    }
}
