import {Directive, Input, TemplateRef} from "@angular/core";

@Directive({
    selector: "[clrRelease]"
})
export class Release {
    @Input() clrRelease: string = "0.9.2";

    constructor(public templateRef: TemplateRef<any>) {}
}
