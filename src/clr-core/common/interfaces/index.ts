/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

// SIZES
export type BasicTShirtSizes = 'sm' | 'md' | 'lg' | 'xl';

type ExtraTShirtSizes = 'xs' | 'xxl';

export type TShirtSizes = BasicTShirtSizes | ExtraTShirtSizes;

// STATUSES
export type StoplightStatusTypes = 'success' | 'warning' | 'danger';

export type StatusTypes = 'info' | StoplightStatusTypes;

// MISC
export type AriaLivePolitenessSettings = 'off' | 'polite' | 'assertive';

export type Directions = 'up' | 'down' | 'left' | 'right';

export type Orientations = 'horizontal' | 'vertical';
