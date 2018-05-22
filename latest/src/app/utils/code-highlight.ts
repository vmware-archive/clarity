/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {isPlatformBrowser} from "@angular/common";
import {Directive, ElementRef, Inject, Input, PLATFORM_ID, Renderer2} from "@angular/core";

declare var Prism: any;

@Directive({selector: "code[clr-code-highlight]"})
export class CodeHighlight {
    private _highlight: string = "";

    // Had to use renderer because I wanted to add to existing classes on the code block
    // Didn't want to override them completely
    constructor(private _el: ElementRef, private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) {
    }

    ngAfterContentInit(): void {
        this.redraw();
    }

    public redraw() {
        // Only run Prism in browser engines
        if (this._el && this._el.nativeElement && isPlatformBrowser(this.platformId)) {
            Prism.highlightElement(this._el.nativeElement);
        }
    }


    @Input("clr-code-highlight")
    set highlight(val: string) {
        if (val && val.trim() !== "") {
            this._highlight = val;
            this.renderer.addClass(this._el.nativeElement, this._highlight);
        }
    }

    get highlight(): string {
        return this._highlight;
    }
}
