/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { AfterContentChecked, ChangeDetectorRef, OnDestroy, Directive } from '@angular/core';
import { Subscription } from 'rxjs';
import { WillyWonka } from './willy-wonka';

@Directive()
export abstract class OompaLoompa implements AfterContentChecked, OnDestroy {
  // FIXME: Request Injector once we move to Angular 4.2+, it'll allow easier refactors
  constructor(cdr: ChangeDetectorRef, willyWonka: WillyWonka) {
    this.subscription = willyWonka.chocolate.subscribe(() => {
      if (this.latestFlavor !== this.flavor) {
        willyWonka.disableChocolateCheck = true;
        cdr.detectChanges();
        willyWonka.disableChocolateCheck = false;
      }
    });
  }

  private subscription: Subscription;

  private latestFlavor: any;

  abstract get flavor(): any;

  ngAfterContentChecked() {
    this.latestFlavor = this.flavor;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
