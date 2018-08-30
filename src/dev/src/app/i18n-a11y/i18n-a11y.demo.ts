/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { USERS } from './users';

@Component({
  selector: 'clr-i18n-a11y-demo',
  templateUrl: './i18n-a11y.demo.html',
  host: {
    lang: 'fr',
  },
})
export class I18nA11yDemo {
  users = USERS;
  selected = [];
}
