/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({ templateUrl: './toggles.demo.html' })
export class TogglesDemo {
  disabled = true;
  vertical = {
    one: {
      one: '',
      two: '',
      three: '',
    },
    two: {
      one: '',
      two: '',
      three: '',
    },
    three: {
      one: '',
      two: '',
      three: '',
    },
    four: {
      one: '',
      two: '',
      three: '',
    },
    five: {
      one: '',
      two: '',
      three: '',
    },
  };
  horizontal = {
    one: {
      one: '',
      two: '',
      three: '',
    },
    two: {
      one: '',
      two: '',
      three: '',
    },
    three: {
      one: '',
      two: '',
      three: '',
    },
  };
  compact = {
    one: {
      one: '',
      two: '',
      three: '',
    },
    two: {
      one: '',
      two: '',
      three: '',
    },
    three: {
      one: '',
      two: '',
      three: '',
    },
  };
}
