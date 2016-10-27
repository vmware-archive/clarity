import {
    Input,
    Directive,
    ElementRef,
    Renderer} from "@angular/core";

declare var Prism: any;

@Directive({
    selector: "code[clr-code-highlight]"
})
export class CodeHighlight {
    private _highlight: string = "";

    //Had to use renderer because I wanted to add to existing classes on the code block
    //Didn't want to override them completely
    constructor(private _el: ElementRef, private renderer: Renderer) {
    }

    ngAfterContentInit(): void {
        this.redraw();
    }

    public redraw() {
        if (this._el && this._el.nativeElement) {
            Prism.highlightElement(this._el.nativeElement);
        }
    }


    @Input("clr-code-highlight")
    set highlight(val: string) {
        if (val && val.trim() !== "") {
            this._highlight = val;
            this.renderer.setElementClass(this._el.nativeElement, this._highlight, true);
        }
    }

    get highlight(): string {
        return this._highlight;
    }
}
