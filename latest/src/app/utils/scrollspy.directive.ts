/*
 * Hack while waiting for https://github.com/angular/angular/issues/6595 to be fixed.
 */

import {Directive, Input, OnDestroy, OnInit, ContentChildren, QueryList, Renderer, ElementRef} from "@angular/core";
import {RouterLinkWithHref} from "@angular/router";
import {Subscription} from "rxjs";

@Directive({
    selector: "[scrollspy]",
})
export class ScrollSpy implements OnDestroy, OnInit {

    constructor(private renderer: Renderer) {
    }

    @Input("scrollspy") scrollable: any;

    anchors = [];

    sub: Subscription;

    @ContentChildren(RouterLinkWithHref, {descendants: true})
    set links(routerLinks: QueryList<RouterLinkWithHref>) {
        this.anchors = routerLinks.map(routerLink => "#" + routerLink.fragment);
        this.sub = routerLinks.changes.subscribe(() => {
            this.anchors = routerLinks.map(routerLink => "#" + routerLink.fragment);
        });
    }

    @ContentChildren(RouterLinkWithHref, {descendants: true, read: ElementRef})
    linkElements: QueryList<ElementRef>;

    throttle = false;
    scrollPosition: number;

    handleEvent() {
        this.scrollPosition = this.scrollable.scrollTop;
        if (!this.throttle) {
            window.requestAnimationFrame(() => {
                let currentLinkIndex = this.findCurrentAnchor() || 0;
                this.linkElements.forEach((link: ElementRef, index: number) => {
                    this.renderer.setElementClass(link.nativeElement, "active", index === currentLinkIndex);
                });
                this.throttle = false;
            });
        }
        this.throttle = true;
    }

    findCurrentAnchor() {
        for (let i = this.anchors.length - 1; i >= 0; i--) {
            let anchor = this.anchors[i];
            if (this.scrollable.querySelector(anchor) && this.scrollable.querySelector(anchor).offsetTop <= this.scrollPosition) {
                return i;
            }
        }
    }

    ngOnInit() {
        this.scrollable.addEventListener("scroll", this);
    }

    ngOnDestroy() {
        if (this.scrollable) {
            this.scrollable.removeEventListener("scroll", this);
        }
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
}
