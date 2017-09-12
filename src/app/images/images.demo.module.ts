/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {ClarityModule} from "../../clarity-angular/clarity.module";

import {ImagesDemo} from "./images.demo";
import {ROUTING} from "./images.demo.routing";

@NgModule({imports: [CommonModule, ClarityModule, ROUTING], declarations: [ImagesDemo], exports: [ImagesDemo]})
export default class ImagesDemoModule {}
