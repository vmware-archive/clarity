/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, HostBinding, Input, OnInit, Optional, Output, SkipSelf } from '@angular/core';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';

@Component({
  selector: 'clr-stack-block',
  template: `
    <dt class="stack-block-label"
        (click)="toggleExpand()"
        (keyup.enter)="toggleExpand()"
        (keyup.space)="toggleExpand()"
        (focus)="focused = true"
        (blur)="focused = false"
        [attr.role]="role"
        [attr.tabindex]="tabIndex"
        [attr.aria-expanded]="ariaExpanded">
      <clr-icon shape="caret"
                class="stack-block-caret"
                *ngIf="expandable"
                [attr.dir]="caretDirection"
                [attr.title]="caretTitle"></clr-icon>
      <ng-content select="clr-stack-label"></ng-content>
    </dt>
    <dd class="stack-block-content">
      <ng-content></ng-content>
    </dd>
    <!-- FIXME: remove this string concatenation when boolean states are supported -->
    <div [@collapse]="''+!expanded" class="stack-children" >
      <ng-content select="clr-stack-block"></ng-content>
    </div>
  `,
  // Custom elements are inline by default
  styles: [
    `
        :host { display: block; }
    `,
  ],
  // Make sure the host has the proper class for styling purposes
  host: { '[class.stack-block]': 'true' },
  animations: [
    trigger('collapse', [
      state('true', style({ height: 0, display: 'none' })),
      transition('true => false', [animate('0.2s ease-in-out', style({ height: '*', display: '*' }))]),
      transition('false => true', [style({ height: '*', display: '*' }), animate('0.2s ease-in-out')]),
    ]),
  ],
})
export class ClrStackBlock implements OnInit {
  @HostBinding('class.stack-block-expanded')
  @Input('clrSbExpanded')
  expanded: boolean = false;
  @Output('clrSbExpandedChange') expandedChange: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  @HostBinding('class.stack-block-expandable')
  @Input('clrSbExpandable')
  expandable: boolean = false;

  focused: boolean = false;
  private _changedChildren: number = 0;
  private _fullyInitialized: boolean = false;
  private _changed: boolean = false;

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

  /*
     * This would be more efficient with @ContentChildren, with the parent ClrStackBlock
     * querying for children StackBlocks, but this feature is not available when downgrading
     * the component for Angular 1.
     */
  constructor(
    @SkipSelf()
    @Optional()
    private parent: ClrStackBlock,
    public commonStrings: ClrCommonStrings
  ) {
    if (parent) {
      parent.addChild();
    }
  }

  ngOnInit(): void {
    // in order to access the parent ClrStackBlock's properties,
    // the child ClrStackBlock  has to be fully initialized at first.
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
    return this.expanded ? this.commonStrings.collapse : this.commonStrings.expand;
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
}
