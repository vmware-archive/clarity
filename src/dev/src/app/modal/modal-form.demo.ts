/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

export class Hero {
  constructor(public id: number, public name: string, public power: string, public alterEgo?: string) {}
}

@Component({
  selector: 'clr-modal-dynamic-form',
  templateUrl: './modal-form.demo.html',
})
export class ModalFormDemo {
  basic: boolean = false;
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit(form: any) {
    this.submitted = true;
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
