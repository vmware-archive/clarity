/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
    AfterViewChecked,
    ElementRef,
    HostBinding,
    Injectable,
    Injector,
    OnDestroy,
    Renderer2,
    SkipSelf
} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

import {IfOpenService} from "../../utils/conditional/if-open.service";

import {Point, Popover, PopoverOptions} from "./popover";

// Literally any annotation would work here, but writing our own @HoneyBadger annotation feels overkill.
@Injectable()
export abstract class AbstractPopover implements AfterViewChecked, OnDestroy {
    constructor(injector: Injector, @SkipSelf() protected parentHost: ElementRef) {
        this.el = injector.get(ElementRef);
        this.ifOpenService = injector.get(IfOpenService);
        this.renderer = injector.get(Renderer2);
        // Default anchor is the parent host
        this.anchorElem = parentHost.nativeElement;

        this.popoverInstance = new Popover(this.el.nativeElement);
        this.subscription = this.ifOpenService.openChange.subscribe((change) => {
            change ? this.anchor() : this.release();
        });
        if (this.ifOpenService.open) {
            this.anchor();
        }
    }

    protected el: ElementRef;
    protected ifOpenService: IfOpenService;
    protected renderer: Renderer2;

    private popoverInstance: Popover;
    private subscription: Subscription;

    private updateAnchor = false;

    protected anchorElem: any;
    protected anchorPoint: Point;
    protected popoverPoint: Point;
    protected popoverOptions: PopoverOptions = {};

    protected anchor() {
        this.updateAnchor = true;
        // Ugh
        this.ignore = this.ifOpenService.originalEvent;
    }

    protected release() {
        this.detachOutsideClickListener();
        this.popoverInstance.release();
    }

    ngAfterViewChecked() {
        if (this.updateAnchor) {
            this.updateAnchor = false;
            this.popoverInstance.anchor(this.anchorElem, this.anchorPoint, this.popoverPoint, this.popoverOptions)
                .subscribe(() => {
                    // if a scroll event is detected, close the popover
                    this.ifOpenService.open = false;
                });
            this.attachOutsideClickListener();
        }
    }

    ngOnDestroy() {
        this.release();
        this.subscription.unsubscribe();
    }

    /*
     * Fallback to hide when *clrIfOpen is not being used
     */
    @HostBinding("style.visibility")
    get hidden() {
        return this.ifOpenService.open ? "visible" : "hidden";
    }

    /*
     * Until https://github.com/angular/angular/issues/8785 is supported, we don't have any way to instantiate
     * a separate directive on the host. So let's do dirty but performant for now.
     */
    public closeOnOutsideClick = false;
    private hostListener: () => void;
    private documentListener: () => void;
    private ignore: any;

    private attachOutsideClickListener() {
        if (this.closeOnOutsideClick) {
            this.hostListener = this.renderer.listen(this.el.nativeElement, "click", event => this.ignore = event);
            this.documentListener = this.renderer.listen("document", "click", event => {
                if (event === this.ignore) {
                    delete this.ignore;
                } else {
                    this.ifOpenService.open = false;
                }
            });
        }
    }

    private detachOutsideClickListener() {
        if (this.closeOnOutsideClick) {
            if (this.hostListener) {
                this.hostListener();
                delete this.hostListener;
            }
            if (this.documentListener) {
                this.documentListener();
                delete this.documentListener;
            }
        }
    }
}
