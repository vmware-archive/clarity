/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, EventEmitter, Input, OnDestroy, Output, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { IfOpenService } from './if-open.service';

@Directive({ selector: '[clrIfOpen]' })

/**********
 *
 * @class ClrIfOpen
 *
 * @description
 * A structural directive that controls whether or not the associated TemplateRef is instantiated or not.
 * It makes use of a Component instance level service: IfOpenService to maintain state between itself and the component
 * using it in the component template.
 *
 */
export class ClrIfOpen implements OnDestroy {
  private subscription: Subscription;

  /*********
   *
   * @description
   * A setter that updates IfOpenService.open with value.
   *
   * @param value
   */
  @Input('clrIfOpen')
  public set open(value: boolean) {
    this.ifOpenService.open = value;
  }

  /**********
   * @property openChange
   *
   * @description
   * An event emitter that emits when the open property is set to allow for 2way binding when the directive is
   * used with de-structured / de-sugared syntax.
   */
  @Output('clrIfOpenChange') openChange: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  /********
   *
   * @description
   * A getter that returns the current IfOpenService.open value.
   *
   */
  public get open() {
    return this.ifOpenService.open;
  }

  constructor(
    private ifOpenService: IfOpenService,
    private template: TemplateRef<any>,
    private container: ViewContainerRef
  ) {
    this.subscription = this.ifOpenService.openChange.subscribe(change => {
      this.updateView(change);
      this.openChange.emit(change);
    });
  }

  /*********
   *
   * @description
   * Function that takes a boolean value and either created an embedded view for the associated ViewContainerRef or,
   * Clears all views from the ViewContainerRef
   * @param value
   */
  public updateView(value: boolean) {
    if (value) {
      this.container.createEmbeddedView(this.template);
    } else {
      this.container.clear();
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
