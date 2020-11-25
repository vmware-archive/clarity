import { Directive, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[dynamicHostDirective]' })
export class DynamicHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
