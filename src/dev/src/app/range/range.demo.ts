/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './range.demo.html',
})
export class RangeDemo {
  disabled = true;
  standalone = 60;
  vertical = {
    one: 31,
    two: 26,
    three: 93,
    four: 44,
  };

  horizontal = {
    one: 22,
    two: 54,
    three: 77,
  };

  compact = {
    one: 64,
    two: 28,
    three: 36,
  };

  model = new FormGroup({
    reactive: new FormControl(''),
  });

  rangeValue = 1;

  rangeChange(event: Event) {
    console.log('rangeChange', (event.target as HTMLInputElement).value);
  }

  submit() {
    console.log(this);
  }
}
