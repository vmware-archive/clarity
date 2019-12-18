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
  EventEmitter,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subscription } from 'rxjs';

import { ClrPopoverToggleService } from './providers/popover-toggle.service';
import { ClrPopoverEventsService } from './providers/popover-events.service';
import { ClrPopoverPositionService } from './providers/popover-position.service';
import { ClrPopoverPosition } from './interfaces/popover-position.interface';
import { debounceTime } from 'rxjs/operators';

// https://github.com/angular/angular/issues/20351#issuecomment-344009887
/** @dynamic */
@Directive({ selector: '[clrPopoverContent]' })
export class ClrPopoverContent implements AfterContentChecked, OnDestroy {
  private view: EmbeddedViewRef<void>;
  private subscriptions: Subscription[] = [];
  private _smartPositioning: boolean = true;

  @Input('clrPopoverContent')
  public set open(value: boolean) {
    this.smartOpenService.open = !!value;
  }

  @Input('clrPopoverContentAt')
  set contentAt(position: ClrPopoverPosition) {
    this.smartPositionService.position = position;
  }

  @Input('clrPopoverContentOutsideClickToClose')
  set outsideClickClose(clickToClose) {
    this.smartEventsService.outsideClickClose = !!clickToClose;
  }

  @Input('clrPopoverContentScrollToClose')
  set scrollToClose(scrollToClose) {
    this.smartEventsService.scrollToClose = !!scrollToClose;
  }

  @Input('clrPopoverContentSmartPositioning')
  set smartPositioning(smart: boolean) {
    this._smartPositioning = smart;
  }

  constructor(
    @Inject(DOCUMENT) private document: HTMLDocument,
    private container: ViewContainerRef,
    private template: TemplateRef<any>,
    private renderer: Renderer2,
    private smartPositionService: ClrPopoverPositionService,
    private smartEventsService: ClrPopoverEventsService,
    private smartOpenService: ClrPopoverToggleService
  ) {}

  ngAfterViewInit() {
    this.subscriptions.push(
      this.smartOpenService.openChange.subscribe(change => {
        if (change) {
          this.addContent();
        } else {
          this.removeContent();
        }
      }),
      this.smartPositionService.shouldRealign.subscribe(() => {
        this.shouldRealign = true;
        // Avoid flickering on initialization, caused by the asynchronous nature of the
        // check-collector pattern.
        this.renderer.setStyle(this.view.rootNodes[0], 'opacity', '0');
      }),
      // Here we collect subsequent synchronously received content-check events and only take action
      // at the end of the cycle. See below for details on the check-collector pattern.
      this.checkCollector.pipe(debounceTime(0)).subscribe(() => {
        this.alignContent();
        this.shouldRealign = false;
        this.renderer.setStyle(this.view.rootNodes[0], 'opacity', '1');
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

    if (this._smartPositioning) {
      this.initSmartRoots();
    } else {
      this.initInlineRoots();
    }

    this.smartEventsService.contentRef = this.view.rootNodes[0]; // So we know where/what to set close focus on
    this.renderer.addClass(this.view.rootNodes[0], 'clr-popover-content');

    this.renderer.listen(this.view.rootNodes[0], 'click', event => {
      this.smartOpenService.openEvent = event;
    });

    // Mark for realingment on the next content-check cycle.
    this.shouldRealign = true;
  }

  private shouldRealign = false;

  // Check-collector pattern:
  // In order to get accurate content height/width values, we cannot calculate alignment offsets until
  // after the projected content has stabilized.
  // As multiple check events may happen in the same rendering cycle, we need to collect all events
  // and only act after the content is really stable. Or we may get wrong intermediate positioning values.
  // We will channel subsequent content check events through this observable.
  private checkCollector: EventEmitter<void> = new EventEmitter();

  ngAfterContentChecked(): void {
    if (this.smartOpenService.open && this.view && this.shouldRealign) {
      // Channel content-check event through the check-collector
      this.checkCollector.emit();
    }
  }

  /**
   * Smart root nodes are in the document.body, with "fixed" position at (0 ,0), with opacity 0.
   */
  private initSmartRoots() {
    this.view.rootNodes.forEach(node => {
      this.renderer.appendChild(this.document.body, node);
    });
    this.renderer.setStyle(this.view.rootNodes[0], 'position', 'fixed');
    // The relocation avoids triggerring of layout changes, which may lead to false anchor coordinates values.
    this.renderer.setStyle(this.view.rootNodes[0], 'top', '0px');
    this.renderer.setStyle(this.view.rootNodes[0], 'left', '0px');
    // Hide during the calculation phase, to avoid flicker caused by the above initial relocation
    this.renderer.setStyle(this.view.rootNodes[0], 'opacity', '0');
  }

  /**
   * Inline root nodes reside where defined (inline), "relative"-ly positioned, with an "absolute" content wrapper.
   */
  private initInlineRoots() {
    this.renderer.setStyle(this.view.rootNodes[0], 'position', 'relative');
    const wrapper = this.renderer.createElement('div');
    this.renderer.addClass(wrapper, 'clr-absolute-wrapper');

    const root = this.view.rootNodes[0];
    while (root.children && root.children.length > 0) {
      wrapper.appendChild(root.children[0]);
    }
    this.view.rootNodes[0].appendChild(wrapper);
  }

  private alignContent() {
    if (!this.view) {
      return;
    }
    if (this._smartPositioning) {
      const positionCoords = this.smartPositionService.alignContent(this.view.rootNodes[0]);
      this.renderer.setStyle(this.view.rootNodes[0], 'top', `${positionCoords.yOffset}px`);
      this.renderer.setStyle(this.view.rootNodes[0], 'left', `${positionCoords.xOffset}px`);
    }
  }
}
