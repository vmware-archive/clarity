/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, EmbeddedViewRef, EventEmitter, Input, Output, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { Point, Popover } from './popover';
import { PopoverOptions } from './popover-options.interface';

let openCount: number = 0;
const waiting: Array<() => void> = []; // pending create functions

@Directive({ selector: '[clrPopoverOld]' })
export class PopoverDirectiveOld {
  private _popoverInstance: Popover;
  private _subscription: Subscription;

  @Input('clrPopoverOldAnchor') anchorElem: any;
  @Input('clrPopoverOldAnchorPoint') anchorPoint: Point;
  @Input('clrPopoverOldPopoverPoint') popoverPoint: Point;
  @Input('clrPopoverOldOptions') popoverOptions: PopoverOptions = {};
  @Output('clrPopoverOldChange') clrPopoverOldChange = new EventEmitter<boolean>(false);

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

  @Input()
  set clrPopoverOld(open: boolean) {
    if (open) {
      if (this.popoverOptions.allowMultipleOpen) {
        this.createPopover();
      } else {
        if (openCount === 0) {
          this.createPopover();
        } else {
          waiting.push(() => {
            this.createPopover();
          });
        }
      }
    } else {
      this.viewContainer.clear();
      this.destroyPopover();

      if (!this.popoverOptions.allowMultipleOpen) {
        if (waiting.length > 0) {
          const createPopoverFn = waiting.shift();
          createPopoverFn();
        }
      }
    }
  }

  createPopover() {
    const embeddedViewRef: EmbeddedViewRef<any> = <EmbeddedViewRef<any>>this.viewContainer.createEmbeddedView(
      this.templateRef
    );

    // TODO: Not sure of the risks associated with using this. Find an alternative.
    // Needed for find the correct height and width of dynamically created views
    // inside of the popover. For Eg: Button Groups
    embeddedViewRef.detectChanges();

    // filter out other nodes in the view ref so we are only left with element nodes
    const elementNodes: HTMLElement[] = embeddedViewRef.rootNodes.filter((node: any) => {
      return node.nodeType === 1;
    });

    // we take the first element node in the embedded view; usually there should only be one anyways
    this._popoverInstance = new Popover(elementNodes[0]);
    this._subscription = this._popoverInstance
      .anchor(this.anchorElem, this.anchorPoint, this.popoverPoint, this.popoverOptions)
      .subscribe(() => {
        this.clrPopoverOldChange.emit(false);
      });
    openCount++;
  }

  destroyPopover() {
    if (this._popoverInstance) {
      this._subscription.unsubscribe();
      this._popoverInstance.release();
      delete this._popoverInstance;
      openCount--;
    }
  }

  ngOnDestroy() {
    this.destroyPopover();
  }
}
