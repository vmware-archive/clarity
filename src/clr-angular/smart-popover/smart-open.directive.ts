/*
 *  Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 *
 */
import {
  Directive,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  Output,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
  EmbeddedViewRef,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subscription } from 'rxjs';

import { IfOpenService } from '../utils/conditional/if-open.service';

// https://github.com/angular/angular/issues/20351#issuecomment-344009887
/** @dynamic */
@Directive({ selector: '[clrSmartOpen]' })
/**********
 *
 * based on @class ClrIfOpen
 *
 * @description
 * A structural directive that controls whether or not the associated TemplateRef is instantiated or not.
 * It makes use of a Component instance level service: IfOpenService to maintain state between itself and the component
 * using it in the component template.
 *
 */
export class ClrSmartOpen implements OnDestroy {
  private view: EmbeddedViewRef<void>;
  private subscription: Subscription;

  /*********
   *
   * @description
   * A setter that updates IfOpenService.open with value.
   *
   * @param value
   */
  @Input('clrSmartOpen')
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
  @Output('clrSmartOpenChange') openChange: EventEmitter<boolean> = new EventEmitter<boolean>(false);

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
    private container: ViewContainerRef,
    @Inject(DOCUMENT) private document: HTMLDocument,
    private renderer: Renderer2
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
  public updateView(value) {
    if (value) {
      this.view = this.container.createEmbeddedView(this.template);
      this.view.rootNodes.forEach(node => {
        this.renderer.appendChild(this.document.body, node);
      });
    } else {
      this.container.clear();
      delete this.view;
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.container.clear();
    delete this.view;
  }
}
