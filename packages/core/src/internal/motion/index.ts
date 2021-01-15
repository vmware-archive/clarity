/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export * from './interfaces.js';
export * from './motion.service.js';
export * from './utils.js';

// Animation Configs
export { AnimationModalEnterConfig, AnimationModalEnterName } from './animations/cds-modal-enter.js';
export {
  AnimationAccordionPanelOpenConfig,
  AnimationAccordionPanelOpenName,
} from './animations/cds-accordion-panel-open.js';

// Demos
export { AnimationHingeConfig, AnimationHingeName } from './animations/cds-overlay-hinge-example.js';
export { AnimationShakeConfig, AnimationShakeName } from './animations/cds-component-shake.js';
