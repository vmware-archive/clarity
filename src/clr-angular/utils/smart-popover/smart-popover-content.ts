/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 *
 */
import {
  Directive,
  EmbeddedViewRef,
  Inject,
  Input,
  OnDestroy,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
  AfterContentChecked,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subscription } from 'rxjs';

import { ClrSmartPopoverToggleService } from './providers/smart-popover-toggle.service';
import { ClrSmartPopoverEventsService } from './providers/smart-popover-events.service';
import { ClrSmartPopoverPositionService } from './providers/smart-popover-position.service';
import { ClrSmartPosition } from './interfaces/smart-position.interface';

// https://github.com/angular/angular/issues/20351#issuecomment-344009887
/** @dynamic */
@Directive({ selector: '[clrSmartPopoverContent]' })
export class ClrSmartPopoverContent implements AfterContentChecked, OnDestroy {
  private view: EmbeddedViewRef<void>;
  private subscriptions: Subscription[] = [];

  @Input('clrSmartPopoverContent')
  public set open(value: boolean) {
    this.smartOpenService.open = !!value;
  }

  @Input('clrSmartPopoverContentAt')
  set clrSmartOpenContentAt(position: ClrSmartPosition) {
    this.smartPositionService.position = position;
  }

  @Input('clrSmartPopoverContentOutsideClickToClose')
  set outsideClickClose(clickToClose) {
    this.smartEventsService.outsideClickClose = !!clickToClose;
  }

  @Input('clrSmartPopoverContentScrollToClose')
  set scrollToClose(scrollToClose) {
    this.smartEventsService.scrollToClose = !!scrollToClose;
  }

  constructor(
    @Inject(DOCUMENT) private document: HTMLDocument,
    private container: ViewContainerRef,
    private template: TemplateRef<any>,
    private renderer: Renderer2,
    private smartPositionService: ClrSmartPopoverPositionService,
    private smartEventsService: ClrSmartPopoverEventsService,
    private smartOpenService: ClrSmartPopoverToggleService
  ) {}

  ngAfterViewInit() {
    this.subscriptions.push(
      this.smartOpenService.openChange.subscribe(change => {
        if (change) {
          this.addContent();
        } else {
          this.removeContent();
        }
      })
    );
  }

  ngOnDestroy() {
    this.removeContent();
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private removeContent(): void {
    if (!this.view) {
      return;
    }
    this.view.rootNodes.forEach(node => this.renderer.removeChild(this.document.body, node));
    this.container.clear();
    delete this.view;
    this.hasPositionCoords = false;
  }

  /**
   * TODO(matt): investigate why DebugElement retains a reference to the nodes and causes a memory leak.
   * A note about the use of appendChild/removeChild
   * The DebugElement is keeping a reference to the detached node and its unclear why.
   * This does warrant further investigation. But, since it doesn't happen in production mode
   * it is a low priority issue for now.
   */
  private addContent() {
    // Create the view container
    this.view = this.container.createEmbeddedView(this.template);
    this.smartEventsService.contentRef = this.view.rootNodes[0]; // So we know where/what to set close focus on
    // Position the content and add a click listener
    this.renderer.addClass(this.view.rootNodes[0], 'clr-popover-content');
    this.renderer.listen(this.view.rootNodes[0], 'click', event => {
      this.smartOpenService.openEvent = event;
    });
    this.view.rootNodes.forEach(node => {
      this.renderer.appendChild(this.document.body, node);
    });
  }
  private hasPositionCoords = false;

  ngAfterContentChecked(): void {
    // In order to get accurate content height/width values, we cannot calculate alignment offsets until after the
    // projected content has stabilized.
    if (this.smartOpenService.open && this.view && !this.hasPositionCoords) {
      const positionCoords = this.smartPositionService.alignContent(this.view.rootNodes[0]);
      this.renderer.setStyle(this.view.rootNodes[0], 'top', `${positionCoords.yOffset}px`);
      this.renderer.setStyle(this.view.rootNodes[0], 'left', `${positionCoords.xOffset}px`);
      this.hasPositionCoords = true;
    }
  }
}
