/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

// export * from "./clr-angular.module";

/**********
 * Buttons
 *
 * Buttons are used to create click/touch handlers in a variety of use cases.
 */
export * from "./button/button.module"; // causes build failure;
export * from "./button/button-group/button-group.module"; // causes build failure;
export * from "./button/button-group/index"; // causes build failure;
export * from "./button/button-loading/loading-button.module";
export * from "./button/button-loading/index";


/**********
 * Code
 *
 * code syntax highlighing is used for ????
 */
export * from "./code/index";
export * from "./code/syntax-highlight/syntax-highlight.module";

/*********
 * Data
 *
 * There are three types of data component.
 * - Datagrid holds rows of data organized with columns.
 * - TreeView holds hierarchical data that needs to be traversed
 * - StackView holds data with a  master / child relationshiop
 */
export * from "./data/data.module"; // causes build failure;
export * from "./data/datagrid/datagrid.module"; // causes build failure;
export * from "./data/datagrid/index"; // causes build failure
export * from "./data/tree-view/index"; // causes build failure
export * from "./data/tree-view/tree-view.module"; // causes build failure
export * from "./data/stack-view/index";
export * from "./data/stack-view/stack-view.module";

/*********
 * Emphasis
 *
 * These components are used to draw attention to actionable information.
 */
export * from "./emphasis/alert/alert.module"; // causes build failure
export * from "./emphasis/alert/index";
export * from "./emphasis/emphasis.module"; // causes build failure

/**********
 * Forms
 *
 * Forms provide a mechanism to collect and transmit user generated data.
 */
export * from "./forms/forms.module";
export * from "./forms/checkbox/index";

/*********
 * Icons
 *
 * Used to "declare" the tag in Angular
 */
export * from "./icon/icon.module";
export * from "./icon/index";

/**********
 * Layout
 *
 * Used to create structure and help organize the visual presentation in an app container.
 */
export * from "./layout/layout.module"; // causes build failure
export * from "./layout/main-container/index";
export * from "./layout/main-container/main-container.module";
export * from "./layout/nav/index";
export * from "./layout/nav/navigation.module";
export * from "./layout/tabs/index";
export * from "./layout/tabs/tabs.module";

/**********
 * Modals
 *
 * Modals are used to present information and actions to a user that force them to focus on that
 */
export * from "./modal/modal.module"; // causes build failure
export * from "./modal/index"; // causes build failure

/**********
 * Popover
 *
 * Popovers perform several use cases of hide-n-show behaviors depending on content
 * - popover is generic class to consilidate general popover behavior
 * - dropdown is intended to hold actionable buttons
 * - signposts are intended to hold information and stay onscreen until user dismisses
 * - tooltips are meant to show to users when hovered
 */
export * from "./popover/popover.module";
export * from "./popover/dropdown/dropdown.module";
export * from "./popover/tooltip/tooltip.module";
export * from "./popover/dropdown/index";
export * from "./popover/tooltip/index";

/*********
 * Utils
 *
 * A collection of commonly used functionalities.
 *
 */
export * from "./utils/animations/collapse/index";
export * from "./utils/animations/fade/index";
export * from "./utils/animations/fade-slide/index";
export * from "./utils/animations/slide/index";
export * from "./utils/loading/index";
export * from "./utils/loading/loading.module";
// Below are exported for internal use only and may change without notice
export {FocusTrapTracker as ÇlrFocusTrapTracker} from "./utils/focus-trap/focus-trap-tracker.service";

/*********
 * Wizard
 *
 * Wizards cast spells and take users on a journey along a pathway
 */
export * from "./wizard/index"; // causes build failure
export * from "./wizard/wizard.module"; // causes build failure









