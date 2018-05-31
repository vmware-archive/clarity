/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { HostBinding, InjectionToken, Injector, Input, OnInit, Type, ViewContainerRef } from '@angular/core';

import { DynamicWrapper, HostWrapper } from '../../utils/host-wrapping';

import { FormControlService } from './form-control.service';

export class WrappedFormControl<W extends DynamicWrapper> implements OnInit {
  // I lost way too much time trying to make this work without injecting the ViewContainerRef and the Injector,
  // I'm giving up. So we have to inject these two manually for now.
  constructor(protected wrapperType: Type<W>, protected vcr: ViewContainerRef) {}

  protected formControlService: FormControlService;

  _id: string;

  @HostBinding()
  @Input()
  get id() {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
    if (this.formControlService) {
      this.formControlService.id = value;
    }
  }

  private _containerInjector: Injector;

  protected getProviderFromContainer<T>(token: Type<T> | InjectionToken<T>, notFoundValue?: T): T {
    return this._containerInjector.get(token, notFoundValue);
  }

  ngOnInit() {
    this._containerInjector = new HostWrapper(this.wrapperType, this.vcr);
    this.formControlService = this._containerInjector.get(FormControlService);
    if (this._id) {
      this.formControlService.id = this._id;
    } else {
      this._id = this.formControlService.id;
    }
    // No need to subscribe to formControlService.idChange because the input is the only one that can update the id.
  }
}
