/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
  Directive,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  Output,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { IF_ACTIVE_ID, IfActiveService } from './if-active.service';

@Directive({ selector: '[clrIfActive]' })

/**********
 *
 * @class ClrIfActive
 *
 * @description
 * A structural directive that controls whether or not the associated TemplateRef is instantiated or not.
 * It makes use of a Component instance level service: IfActiveService to maintain state between itself and
 * the component using it in the component template.
 *
 */
export class ClrIfActive implements OnDestroy {
  private subscription: Subscription;
  private wasActive: boolean = false;

  constructor(
    private ifActiveService: IfActiveService,
    @Inject(IF_ACTIVE_ID) private id: number,
    private template: TemplateRef<any>,
    private container: ViewContainerRef
  ) {
    this.checkAndUpdateView(ifActiveService.current);

    this.subscription = this.ifActiveService.currentChange.subscribe(newCurrentId => {
      this.checkAndUpdateView(newCurrentId);
    });
  }

  private checkAndUpdateView(currentId: number) {
    const isNowActive = currentId === this.id;
    // only emit if the new active state is changed since last time.
    if (isNowActive !== this.wasActive) {
      this.updateView(isNowActive);
      this.activeChange.emit(isNowActive);
      this.wasActive = isNowActive;
    }
  }

  /*********
   *
   * @description
   * A setter that updates IfActiveService.active with value.
   *
   * @param value
   */
  @Input('clrIfActive')
  public set active(value: boolean) {
    if (value) {
      this.ifActiveService.current = this.id;
    }
  }

  /**********
   * @property activeChange
   *
   * @description
   * An event emitter that emits when the active property is set to allow for 2way binding when the directive is
   * used with de-structured / de-sugared syntax.
   *
   */
  @Output('clrIfActiveChange') activeChange: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  /********
   *
   * @description
   * A getter that returns the current IfActiveService.active value.
   */
  public get active() {
    return this.ifActiveService.current === this.id;
  }

  /*********
   *
   * @description
   * Function that takes a any value and either created an embedded view for the associated ViewContainerRef or,
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
