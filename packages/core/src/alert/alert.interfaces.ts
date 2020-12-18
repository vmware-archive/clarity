/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { StatusTypes } from '@cds/core/internal';

export type AlertStatusTypes = StatusTypes | 'alt' | 'loading';

export type AlertGroupTypes = 'default' | 'banner' | 'light';

export type AlertSizes = 'default' | 'sm';
