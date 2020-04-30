/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, EventEmitter, HostBinding, Inject, Input, OnInit, Optional, Output, SkipSelf } from '@angular/core';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';
import { UNIQUE_ID, UNIQUE_ID_PROVIDER } from '../../utils/id-generator/id-generator.service';

@Component({
  selector: 'clr-stack-block',
  template: `
    <div
      class="stack-block-label"
      (click)="toggleExpand()"
      (keyup.enter)="toggleExpand()"
      (keyup.space)="toggleExpand()"
      (focus)="focused = true"
      (blur)="focused = false"
      [id]="uniqueId"
      [attr.role]="role"
      [attr.tabindex]="tabIndex"
      [attr.aria-expanded]="ariaExpanded"
      [attr.aria-controls]="getStackChildrenId()"
      [attr.aria-posinset]="ariaPosinset"
      [attr.aria-level]="ariaLevel"
      [attr.aria-setsize]="ariaSetsize"
    >
      <clr-icon
        shape="caret"
        class="stack-block-caret"
        *ngIf="expandable"
        [attr.dir]="caretDirection"
        [attr.title]="caretTitle"
      ></clr-icon>
      <span class="clr-sr-only" *ngIf="getChangedValue">{{ commonStrings.keys.stackViewChanged }}</span>
      <div class="stack-view-key">
        <!-- This structure changed to fix #3567 and the a11y request was to move away from dl's -->
        <!-- I added the key class to update css targets for the original component style -->
        <ng-content select="clr-stack-label"></ng-content>
      </div>
      <div class="stack-block-content">
        <ng-content></ng-content>
      </div>
    </div>

    <clr-expandable-animation [clrExpandTrigger]="expanded" class="stack-children" [attr.id]="getStackChildrenId()">
      <div [style.height]="expanded ? 'auto' : 0" role="region">
        <ng-content select="clr-stack-block"></ng-content>
      </div>
    </clr-expandable-animation>
  `,
  // Custom elements are inline by default
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  // Make sure the host has the proper class for styling purposes
  host: { '[class.stack-block]': 'true' },
  providers: [UNIQUE_ID_PROVIDER],
})
export class ClrStackBlock implements OnInit {
  @HostBinding('class.stack-block-expanded')
  @Input('clrSbExpanded')
  expanded = false;
  @Output('clrSbExpandedChange') expandedChange: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  @HostBinding('class.stack-block-expandable')
  @Input('clrSbExpandable')
  expandable = false;

  focused = false;
  private _changedChildren = 0;
  private _fullyInitialized = false;
  private _changed = false;

  @HostBinding('class.stack-block-changed')
  get getChangedValue(): boolean {
    return this._changed || (this._changedChildren > 0 && !this.expanded);
  }

  @Input('clrSbNotifyChange')
  set setChangedValue(value: boolean) {
    this._changed = value;

    if (this.parent && this._fullyInitialized) {
      if (value) {
        this.parent._changedChildren++;
      } else {
        this.parent._changedChildren--;
      }
    }
  }

  /**
   * Depth of the stack view starting from 1 for first level
   */
  @Input('clrStackViewLevel') ariaLevel: number;

  /**
   * Total number of rows in a given group
   */
  @Input('clrStackViewSetsize') ariaSetsize: number;

  /**
   * The position of the row inside the grouped by level rows
   */
  @Input('clrStackViewPosinset') ariaPosinset: number;

  /*
   * This would be more efficient with @ContentChildren, with the parent ClrStackBlock
   * querying for children StackBlocks, but this feature is not available when downgrading
   * the component for Angular 1.
   */
  constructor(
    @SkipSelf()
    @Optional()
    private parent: ClrStackBlock,
    @Inject(UNIQUE_ID) public uniqueId: string,
    public commonStrings: ClrCommonStringsService
  ) {
    if (parent) {
      parent.addChild();
    }
  }

  ngOnInit(): void {
    // in order to access the parent ClrStackBlock's properties,
    // the child ClrStackBlock has to be fully initialized at first.
    this._fullyInitialized = true;
  }

  addChild(): void {
    this.expandable = true;
  }

  toggleExpand(): void {
    if (this.expandable) {
      this.expanded = !this.expanded;
      this.expandedChange.emit(this.expanded);
    }
  }

  get caretDirection(): string {
    return this.expanded ? 'down' : 'right';
  }

  get caretTitle(): string {
    return this.expanded ? this.commonStrings.keys.collapse : this.commonStrings.keys.expand;
  }

  get role(): string {
    return this.expandable ? 'button' : null;
  }

  get tabIndex(): string {
    return this.expandable ? '0' : null;
  }

  @HostBinding('class.on-focus')
  get onStackLabelFocus(): boolean {
    return this.expandable && !this.expanded && this.focused;
  }

  get ariaExpanded(): string {
    if (!this.expandable) {
      return null;
    } else {
      return this.expanded ? 'true' : 'false';
    }
  }

  getStackChildrenId() {
    return this.expanded ? `clr-stack-children-${this.uniqueId}` : null;
  }
}
