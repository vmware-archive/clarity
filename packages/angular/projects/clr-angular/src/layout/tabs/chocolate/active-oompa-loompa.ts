/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ChangeDetectorRef, Directive, Inject, Optional } from '@angular/core';

import { OompaLoompa } from '../../../utils/chocolate/oompa-loompa';
import { IF_ACTIVE_ID, IfActiveService } from '../../../utils/conditional/if-active.service';

import { TabsWillyWonka } from './tabs-willy-wonka';

@Directive({ selector: '[clrTabLink], clr-tab-content' })
export class ActiveOompaLoompa extends OompaLoompa {
  private ifActive: IfActiveService;
  private id: number;

  constructor(
    cdr: ChangeDetectorRef,
    @Optional() willyWonka: TabsWillyWonka,
    @Inject(IF_ACTIVE_ID) id: number,
    ifActive: IfActiveService
  ) {
    if (!willyWonka) {
      throw new Error('clrTabLink and clr-tab-content should only be used inside of a clr-tabs');
    }
    super(cdr, willyWonka);
    this.ifActive = ifActive;
    this.id = id;
  }

  get flavor() {
    return this.ifActive.current === this.id;
  }
}
