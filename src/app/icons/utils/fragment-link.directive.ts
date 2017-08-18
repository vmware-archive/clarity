import { Directive, Input, ElementRef } from '@angular/core';
import { ActiveFragmentService } from "./active-fragment.service";

@Directive({
    selector: '[fragment]'
})
export class FragmentLinkDirective {

    constructor(private el: ElementRef, activeFragmentService: ActiveFragmentService) {
        activeFragmentService.fragmentLinks[el.nativeElement.getAttribute("fragment")] = el;
    }

}
