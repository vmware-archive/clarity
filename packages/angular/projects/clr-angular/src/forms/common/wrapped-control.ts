/**
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
  HostBinding,
  InjectionToken,
  HostListener,
  Injector,
  Input,
  OnInit,
  Type,
  ViewContainerRef,
  Renderer2,
  ElementRef,
  OnDestroy,
  Directive,
  AfterViewInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { filter, distinctUntilChanged, startWith } from 'rxjs/operators';

import { HostWrapper } from '../../utils/host-wrapping/host-wrapper';
import { DynamicWrapper } from '../../utils/host-wrapping/dynamic-wrapper';

import { ControlIdService } from './providers/control-id.service';
import { NgControlService } from './providers/ng-control.service';
import { NgControl } from '@angular/forms';
import { ControlClassService } from './providers/control-class.service';
import { MarkControlService } from './providers/mark-control.service';
import { IfControlStateService, CONTROL_STATE } from './if-control-state/if-control-state.service';

@Directive()
export class WrappedFormControl<W extends DynamicWrapper> implements OnInit, AfterViewInit, OnDestroy {
  protected ngControlService: NgControlService;
  private ifControlStateService: IfControlStateService;
  private controlClassService: ControlClassService;
  private markControlService: MarkControlService;
  protected renderer: Renderer2;
  protected el: ElementRef<any>;

  protected subscriptions: Subscription[] = [];
  protected index = 0;
  protected controlIdService: ControlIdService;

  _id: string;

  // I lost way too much time trying to make this work without injecting the ViewContainerRef and the Injector,
  // I'm giving up. So we have to inject these two manually for now.
  constructor(
    protected vcr: ViewContainerRef,
    protected wrapperType: Type<W>,
    injector: Injector,
    private ngControl: NgControl,
    renderer: Renderer2,
    el: ElementRef
  ) {
    this.renderer = renderer;
    this.el = el;
    try {
      this.ngControlService = injector.get(NgControlService);
      this.ifControlStateService = injector.get(IfControlStateService);
      this.controlClassService = injector.get(ControlClassService);
      this.markControlService = injector.get(MarkControlService);
    } catch (e) {
      // Swallow errors
    }

    if (this.controlClassService) {
      this.controlClassService.initControlClass(renderer, el.nativeElement);
    }
    if (this.markControlService) {
      this.subscriptions.push(
        this.markControlService.touchedChange.subscribe(() => {
          this.ngControl.control.markAsTouched();
          this.ngControl.control.updateValueAndValidity();
        })
      );
    }
  }

  @HostBinding()
  @Input()
  get id() {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
    if (this.controlIdService) {
      this.controlIdService.id = value;
    }
  }

  @HostListener('blur')
  triggerValidation() {
    if (this.ifControlStateService) {
      /**
       * For some reason the <input type="number" /> on blur ngControl doesn't set the control to 'touched'
       * This one is a workaround to provide the control to be 'touched' on blur and fix #4480.
       */
      if (this.ngControl && !this.ngControl.touched) {
        this.markControlService.markAsTouched();
      }
      this.ifControlStateService.triggerStatusChange();
    }
  }

  private _containerInjector: Injector;

  // @TODO This method has a try/catch due to an unknown issue that came when building the clrToggle feature
  // We need to figure out why this fails for the ClrToggle scenario but works for Date picker...
  // To see the error, remove the try/catch here and run the ClrToggle suite to see issues getting the container
  // injector in time, and this ONLY HAPPENS in tests and not in dev/prod mode.
  protected getProviderFromContainer<T>(token: Type<T> | InjectionToken<T>, notFoundValue?: T): T {
    try {
      return this._containerInjector.get(token, notFoundValue);
    } catch (e) {
      return notFoundValue;
    }
  }

  ngOnInit() {
    this._containerInjector = new HostWrapper(this.wrapperType, this.vcr, this.index);
    this.controlIdService = this._containerInjector.get(ControlIdService);

    if (this._id) {
      this.controlIdService.id = this._id;
    } else {
      this._id = this.controlIdService.id;
    }

    if (this.ngControlService) {
      this.ngControlService.setControl(this.ngControl);
    }
  }

  ngAfterViewInit() {
    this.listenForErrorStateChanges();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private listenForErrorStateChanges() {
    if (this.ifControlStateService) {
      this.subscriptions.push(
        this.ifControlStateService.statusChanges
          .pipe(
            startWith(CONTROL_STATE.NONE),
            filter(() => this.renderer && !!this.el),
            distinctUntilChanged()
          )
          .subscribe(state => this.setAriaDescribedBy(state))
      );
    }
  }

  private setAriaDescribedBy(state: CONTROL_STATE) {
    this.renderer.setAttribute(this.el.nativeElement, 'aria-describedby', this.getAriaDescribedById(state));
  }

  private getAriaDescribedById(state: CONTROL_STATE): string {
    if (!this.controlIdService) {
      return '';
    }

    let suffix;

    switch (state) {
      case CONTROL_STATE.INVALID:
        suffix = '-error';
        break;
      case CONTROL_STATE.VALID:
        suffix = '-success';
        break;
      default:
        suffix = '-helper';
    }
    return this.controlIdService.id.concat(suffix);
  }
}
