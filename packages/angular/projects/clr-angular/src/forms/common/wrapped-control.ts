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
} from '@angular/core';
import { Subscription } from 'rxjs';
import { filter, distinctUntilChanged, startWith } from 'rxjs/operators';

import { HostWrapper } from '../../utils/host-wrapping/host-wrapper';
import { DynamicWrapper } from '../../utils/host-wrapping/dynamic-wrapper';

import { ControlIdService } from './providers/control-id.service';
import { NgControlService } from './providers/ng-control.service';
import { IfErrorService } from './if-error/if-error.service';
import { NgControl } from '@angular/forms';
import { ControlClassService } from './providers/control-class.service';
import { MarkControlService } from './providers/mark-control.service';

@Directive()
export class WrappedFormControl<W extends DynamicWrapper> implements OnInit, OnDestroy {
  protected ngControlService: NgControlService;
  private ifErrorService: IfErrorService;
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
      this.ifErrorService = injector.get(IfErrorService);
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
    if (this.ifErrorService) {
      this.ifErrorService.triggerStatusChange();
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

    this.listenForErrorStateChanges();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private listenForErrorStateChanges() {
    if (this.ifErrorService) {
      this.subscriptions.push(
        this.ifErrorService.statusChanges
          .pipe(
            startWith(false),
            filter(() => this.renderer && !!this.el),
            distinctUntilChanged()
          )
          .subscribe(error => this.setAriaDescribedBy(error))
      );
    }
  }

  private setAriaDescribedBy(error: boolean) {
    this.renderer.setAttribute(this.el.nativeElement, 'aria-describedby', this.getAriaDescribedById(error));
  }

  private getAriaDescribedById(error: boolean): string {
    return this.controlIdService.id.concat(error ? '-error' : '-helper');
  }
}
