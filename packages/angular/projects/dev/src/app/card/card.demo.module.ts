/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClarityModule } from '@clr/angular';

import { CardClickableDemo } from './card-clickable';
import { CardDropdownDemo } from './card-dropdown';
import { CardGridDemo } from './card-grid';
import { CardImagesDemo } from './card-images';
import { CardLayoutDemo } from './card-layout';
import { CardListGroupDemo } from './card-list-group';
import { CardMasonryDemo } from './card-masonry';
import { CardMediaBlockDemo } from './card-media-block';
import { CardOldDemo } from './card-old';
import { CardDemo } from './card.demo';
import { ROUTING } from './card.demo.routing';

@NgModule({
  imports: [CommonModule, ClarityModule, ROUTING],
  declarations: [
    CardDemo,
    CardOldDemo,
    CardGridDemo,
    CardClickableDemo,
    CardImagesDemo,
    CardLayoutDemo,
    CardMasonryDemo,
    CardMediaBlockDemo,
    CardDropdownDemo,
    CardListGroupDemo,
  ],
  exports: [
    CardDemo,
    CardGridDemo,
    CardClickableDemo,
    CardImagesDemo,
    CardLayoutDemo,
    CardMasonryDemo,
    CardMediaBlockDemo,
    CardDropdownDemo,
    CardListGroupDemo,
  ],
})
export class CardDemoModule {}
