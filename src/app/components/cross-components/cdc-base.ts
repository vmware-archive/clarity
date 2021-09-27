import { Directive, ElementRef } from '@angular/core';

@Directive()
export class BaseCdsDirective {
  protected element: any;//HTMLElement;

  constructor(elementRef: ElementRef) {
    this.element = elementRef.nativeElement;

    console.log(this.element)
  }
}