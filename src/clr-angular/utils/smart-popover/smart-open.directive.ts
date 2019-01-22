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

import { IfOpenService } from '../conditional/if-open.service';

// https://github.com/angular/angular/issues/20351#issuecomment-344009887
/** @dynamic */
@Directive({ selector: '[clrSmartOpen]' })
/**********
 *
 * based on @class ClrIfOpen
 *
 * @description
 * A structural directive that controls whether or not the associated TemplateRef is instantiated or not.
 * It instantiates the TemplateRef on the body element and handles removal and cleanup.
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
  @Output('clrSmartOpenChange') openChange: EventEmitter<boolean> = new EventEmitter<boolean>();

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

  ngOnDestroy() {
    this.removeView();
    this.subscription.unsubscribe();
  }

  private removeView(): void {
    if (this.view) {
      this.view.rootNodes.forEach(node => this.renderer.removeChild(this.document.body, node));
      this.container.clear();
      delete this.view;
    }
  }

  /**
   * TODO: investigate why DebugElement retains a reference to the nodes and causes a memory leak.
   * A note about the use of appendChild/removeChild
   * The DebugElement is keeping a reference to the detached node and its unclear why.
   * This does warrant further investigation. But, since it doesn't happen in production mode
   * it is a low priority issue for now.
   */
  public updateView(value): void {
    if (value) {
      this.view = this.container.createEmbeddedView(this.template);
      this.view.rootNodes.forEach(node => this.renderer.appendChild(this.document.body, node));
    } else {
      this.removeView();
    }
  }
}
