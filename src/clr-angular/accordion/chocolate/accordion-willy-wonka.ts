/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive } from '@angular/core';

import { WillyWonka } from '../../utils/chocolate/willy-wonka';

@Directive({ selector: 'clr-accordion' })
export class AccordionWillyWonka extends WillyWonka {}
