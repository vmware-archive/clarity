/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ApiModule } from './api';
import { AllShapes } from './shapes/all';

/* tslint:disable:variable-name */
const ClarityIcons = ApiModule.instance;
ClarityIcons.init(AllShapes);
