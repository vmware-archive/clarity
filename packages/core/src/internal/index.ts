/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/polyfills';
import styles from './base/base.element.scss';

/** @internal private module to Clarity Core */
export const baseStyles = styles;
export * from './base/button.base.js';
export * from './base/focus-trap.base.js';
export * from './utils/color.js';
export * from './controllers/active.controller.js';
export * from './controllers/aria-button.controller.js';
export * from './controllers/aria-disabled.controller.js';
export * from './controllers/aria-expanded.controller.js';
export * from './controllers/aria-popup.controller.js';
export * from './controllers/aria-popup-trigger.controller.js';
export * from './controllers/aria-pressed.controller.js';
export * from './controllers/aria-selected.controller.js';
export * from './controllers/button-anchor.controller.js';
export * from './controllers/button-submit.controller.js';
export * from './controllers/closable.controller.js';
export * from './controllers/first-focus.controller.js';
export * from './controllers/inline-focus-trap.controller.js';
export * from './utils/css.js';
export * from './utils/dom.js';
export * from './utils/registration.js';
export * from './controllers/active.controller.js';
export * from './controllers/aria-button.controller.js';
export * from './controllers/aria-disabled.controller.js';
export * from './controllers/aria-grid.controller.js';
export * from './controllers/aria-modal.controller.js';
export * from './controllers/aria-multiselectable.controller.js';
export * from './controllers/aria-popup.controller.js';
export * from './controllers/aria-popup-trigger.controller.js';
export * from './controllers/aria-pressed.controller.js';
export * from './controllers/aria-selected.controller.js';
export * from './controllers/button-anchor.controller.js';
export * from './controllers/button-submit.controller.js';
export * from './controllers/closable.controller.js';
export * from './controllers/draggable-list.controller.js';
export * from './controllers/first-focus.controller.js';
export * from './controllers/inline-focus-trap.controller.js';
export * from './controllers/grid-range-selection.controller.js';
export * from './controllers/key-navigation-grid.controller.js';
export * from './controllers/key-navigation-list.controller.js';
export * from './controllers/layer.controller.js';
export * from './controllers/responsive.controller.js';
export * from './controllers/scrollable-list-visibility.controller.js';
export * from './controllers/touch.controller.js';
export * from './controllers/trigger.controller.js';
export * from './decorators/animate.js';
export * from './decorators/query-slot.js';
export * from './decorators/property.js';
export * from './decorators/element.js';
export * from './decorators/event.js';
export * from './directives/spread-props.js';
export * from './decorators/id.js';
export * from './decorators/i18n.js';
export * from './decorators/global-style.js';
export * from './services/focus-trap-tracker.service.js';
export * from './services/global.service.js';
export * from './services/i18n.service.js';
export * from './services/log.service.js';
export * from './utils/async.js';
export * from './utils/a11y.js';
export * from './utils/array.js';
export * from './utils/browser.js';
export * from './services/keycodes.service.js';
export * from './utils/conditional.js';
export * from './utils/enum.js';
export * from './utils/exists.js';
export * from './utils/focus.js';
export * from './utils/framework.js';
export * from './i18n/utils.js';
export * from './positioning/utils.js';
export * from './positioning/interfaces.js';
export * from './utils/identity.js';
export * from './utils/keycodes.js';
export * from './utils/lit.js';
export * from './utils/math.js';
export * from './utils/metadata.js';
export * from './utils/responsive.js';
export * from './utils/size.js';
export * from './utils/string.js';
export * from './utils/supports.js';
export * from './utils/traversal.js';
export * from './utils/events.js';
export * from './utils/event-subject.js';
export * from './utils/traversal.js';
export * from './interfaces/interfaces.js';
export * from './motion/interfaces.js';
export * from './motion/motion.service.js';
export * from './motion/utils.js';
export { AnimationModalEnterConfig, AnimationModalEnterName } from './motion/animations/cds-modal-enter.js';
export {
  AnimationAccordionPanelOpenConfig,
  AnimationAccordionPanelOpenName,
} from './motion/animations/cds-accordion-panel-open.js';
export { AnimationHingeConfig, AnimationHingeName } from './motion/animations/cds-overlay-hinge-example.js';
export { AnimationShakeConfig, AnimationShakeName } from './motion/animations/cds-component-shake.js';
export {
  AnimationNavigationGroupOpenConfig,
  AnimationNavigationGroupOpenName,
} from './motion/animations/cds-navigation-group-open.js';
export { AnimationNavigationOpenConfig, AnimationNavigationOpenName } from './motion/animations/cds-navigation-open.js';
export {
  AnimationTreeItemExpandConfig,
  AnimationTreeItemExpandName,
} from './motion/animations/cds-tree-item-expand.js';
export {
  AnimationResponsivePopupEnterConfig,
  AnimationResponsivePopupEnterName,
} from './motion/animations/cds-dropdown-open.js';
