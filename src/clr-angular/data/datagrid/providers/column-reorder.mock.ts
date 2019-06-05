/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Injectable } from '@angular/core';

import { ColumnReorderService } from './column-reorder.service';

@Injectable()
export class MockColumnReorderService extends ColumnReorderService {}
