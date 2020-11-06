/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { APP_ROUTES } from './app.routing';

import '@cds/core/icon/register.js';
import {
  bellIcon,
  boltIcon,
  bugIcon,
  certificateIcon,
  checkIcon,
  ClarityIcons,
  cloudIcon,
  flameIcon,
  folderIcon,
  happyFaceIcon,
  helpInfoIcon,
  homeIcon,
  hourglassIcon,
  imageIcon,
  lightbulbIcon,
  musicNoteIcon,
  pencilIcon,
  searchIcon,
  thermometerIcon,
  userIcon,
  warningStandardIcon,
} from '@cds/core/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public routes: Route[] = APP_ROUTES;

  constructor() {
    ClarityIcons.addIcons(
      // Demos Only
      homeIcon,
      helpInfoIcon,
      bellIcon,
      cloudIcon,
      userIcon,
      searchIcon,
      imageIcon,
      checkIcon,
      folderIcon,
      homeIcon,
      certificateIcon,
      musicNoteIcon,
      bugIcon,
      boltIcon,
      pencilIcon,
      hourglassIcon,
      happyFaceIcon,
      flameIcon,
      thermometerIcon,
      lightbulbIcon,
      warningStandardIcon
    );
  }
}
