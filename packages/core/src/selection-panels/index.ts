/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

/**
 * This is a workaround so that the @cds/angular script will generate a
 * module for selection panels that exports each directive.
 * It should be removed when the generation script is updated to handle
 * folders with children components. e.g
 * selection-panels/
 *   checkbox/
 *   radio/
 */
export * from './checkbox/checkbox-panel.element.js';
export * from './radio/radio-panel.element.js';
