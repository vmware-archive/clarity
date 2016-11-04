import { ElementRef, Renderer } from "@angular/core";
export declare class CodeHighlight {
    private _el;
    private renderer;
    private _highlight;
    constructor(_el: ElementRef, renderer: Renderer);
    ngAfterContentInit(): void;
    redraw(): void;
    highlight: string;
}
