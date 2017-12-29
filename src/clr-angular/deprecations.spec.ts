/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Observable} from "rxjs/Observable";

import {
    Alert,
    ALERT_DIRECTIVES,
    AlertItem,
    Alerts,
    AlertsPager,
    Button,
    BUTTON_GROUP_DIRECTIVES,
    ButtonGroup,
    Checkbox,
    CHECKBOX_DIRECTIVES,
    CLR_ALERT_DIRECTIVES,
    CLR_BUTTON_GROUP_DIRECTIVES,
    CLR_CHECKBOX_DIRECTIVES,
    CLR_CODE_HIGHLIGHT_DIRECTIVES,
    CLR_DATAGRID_DIRECTIVES,
    CLR_DROPDOWN_DIRECTIVES,
    CLR_ICON_DIRECTIVES,
    CLR_LOADING_BUTTON_DIRECTIVES,
    CLR_LOADING_DIRECTIVES,
    CLR_MENU_POSITIONS,
    CLR_MODAL_DIRECTIVES,
    CLR_NAVIGATION_DIRECTIVES,
    CLR_SIGNPOST_DIRECTIVES,
    CLR_STACK_VIEW_DIRECTIVES,
    CLR_TABS_DIRECTIVES,
    CLR_TOOLTIP_DIRECTIVES,
    CLR_TREE_VIEW_DIRECTIVES,
    CLR_VERTICAL_NAV_DIRECTIVES,
    CLR_WIZARD_DIRECTIVES,
    ClrAlert,
    ClrAlertItem,
    ClrAlerts,
    ClrAlertsPager,
    ClrButton,
    ClrButtonGroup,
    ClrCheckbox,
    ClrCodeHighlight,
    ClrDatagrid,
    ClrDatagridActionBar,
    ClrDatagridActionOverflow,
    ClrDatagridCell,
    ClrDatagridColumn,
    ClrDatagridColumnToggle,
    ClrDatagridComparatorInterface,
    ClrDatagridFilter,
    ClrDatagridFilterInterface,
    ClrDatagridFooter,
    ClrDatagridHideableColumn,
    ClrDatagridItems,
    ClrDatagridPagination,
    ClrDatagridPlaceholder,
    ClrDatagridRow,
    ClrDatagridRowDetail,
    ClrDropdown,
    ClrDropdownItem,
    ClrDropdownMenu,
    ClrDropdownTrigger,
    ClrHeader,
    ClrIconCustomTag,
    ClrLoading,
    ClrLoadingButton,
    ClrModal,
    ClrNavLevel,
    ClrSignpost,
    ClrSignpostContent,
    ClrSignpostTrigger,
    ClrStackBlock,
    ClrStackHeader,
    ClrStackInput,
    ClrStackSelect,
    ClrStackView,
    ClrStackViewCustomTags,
    ClrTab,
    ClrTabContent,
    ClrTabLink,
    ClrTabOverflowContent,
    ClrTabs,
    ClrTooltip,
    ClrTooltipContent,
    ClrTooltipTrigger,
    ClrTreeNode,
    ClrVerticalNav,
    ClrVerticalNavGroup,
    ClrVerticalNavGroupChildren,
    ClrVerticalNavIcon,
    ClrVerticalNavLink,
    ClrWizard,
    ClrWizardButton,
    ClrWizardCustomTags,
    ClrWizardHeaderAction,
    ClrWizardPage,
    ClrWizardPageButtons,
    ClrWizardPageHeaderActions,
    ClrWizardPageNavTitle,
    ClrWizardPageTitle,
    ClrWizardStepnav,
    ClrWizardStepnavItem,
    CODE_HIGHLIGHT_DIRECTIVES,
    CodeHighlight,
    Comparator,
    Datagrid,
    DATAGRID_DIRECTIVES,
    DatagridActionBar,
    DatagridActionOverflow,
    DatagridCell,
    DatagridColumn,
    DatagridColumnToggle,
    DatagridFilter,
    DatagridFooter,
    DatagridHideableColumnDirective,
    DatagridItems,
    DatagridPagination,
    DatagridPlaceholder,
    DatagridRow,
    DatagridRowDetail,
    Dropdown,
    DROPDOWN_DIRECTIVES,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Filter,
    Header,
    ICON_DIRECTIVES,
    IconCustomTag,
    Loading,
    LOADING_BUTTON_DIRECTIVES,
    LOADING_DIRECTIVES,
    LoadingButton,
    menuPositions,
    Modal,
    MODAL_DIRECTIVES,
    NAVIGATION_DIRECTIVES,
    NavLevelDirective,
    Signpost,
    SIGNPOST_DIRECTIVES,
    SignpostContent,
    SignpostTrigger,
    SortOrder,
    STACK_VIEW_DIRECTIVES,
    StackBlock,
    StackHeader,
    StackInput,
    StackSelect,
    StackView,
    StackViewCustomTags,
    State,
    StringFilter,
    Tab,
    TabContent,
    TabLinkDirective,
    TabOverflowContent,
    Tabs,
    TABS_DIRECTIVES,
    Tooltip,
    TOOLTIP_DIRECTIVES,
    TooltipContent,
    TooltipTrigger,
    TREE_VIEW_DIRECTIVES,
    TreeNode,
    VERTICAL_NAV_DIRECTIVES,
    VerticalNav,
    VerticalNavGroup,
    VerticalNavGroupChildren,
    VerticalNavIcon,
    VerticalNavLink,
    Wizard,
    WIZARD_DIRECTIVES,
    WizardButton,
    WizardCustomTags,
    WizardHeaderAction,
    WizardPage,
    WizardPageButtonsDirective,
    WizardPageHeaderActionsDirective,
    WizardPageNavTitleDirective,
    WizardPageTitleDirective,
    WizardStepnav,
    WizardStepnavItem
} from "./public_api";

describe("Deprecations", () => {
    describe("since v0.11", () => {
        it("should export deprecated buttons items", () => {
            expect(BUTTON_GROUP_DIRECTIVES).toEqual(CLR_BUTTON_GROUP_DIRECTIVES);
            expect(Button.prototype instanceof ClrButton).toBeTruthy();
            expect(ButtonGroup.prototype instanceof ClrButtonGroup).toBeTruthy();
            expect(LOADING_BUTTON_DIRECTIVES).toEqual(CLR_LOADING_BUTTON_DIRECTIVES);
            expect(LoadingButton.prototype instanceof ClrLoadingButton).toBeTruthy();
        });
        it("should export depecreated code highlight items", () => {
            expect(CODE_HIGHLIGHT_DIRECTIVES).toEqual(CLR_CODE_HIGHLIGHT_DIRECTIVES);
            expect(CodeHighlight.prototype instanceof ClrCodeHighlight).toBeTruthy();
        });
        it("should export deprecated data items", () => {
            expect(Datagrid.prototype instanceof ClrDatagrid).toBeTruthy();
            expect(DatagridActionBar.prototype instanceof ClrDatagridActionBar).toBeTruthy();
            expect(DatagridActionOverflow.prototype instanceof ClrDatagridActionOverflow).toBeTruthy();
            expect(DatagridColumn.prototype instanceof ClrDatagridColumn).toBeTruthy();
            expect(DatagridColumnToggle.prototype instanceof ClrDatagridColumnToggle).toBeTruthy();
            expect(DatagridFilter.prototype instanceof ClrDatagridFilter).toBeTruthy();
            expect(DatagridHideableColumnDirective.prototype instanceof ClrDatagridHideableColumn).toBeTruthy();
            expect(DatagridItems.prototype instanceof ClrDatagridItems).toBeTruthy();
            expect(DatagridRow.prototype instanceof ClrDatagridRow).toBeTruthy();
            expect(DatagridRowDetail.prototype instanceof ClrDatagridRowDetail).toBeTruthy();
            expect(DatagridCell.prototype instanceof ClrDatagridCell).toBeTruthy();
            expect(DatagridFooter.prototype instanceof ClrDatagridFooter).toBeTruthy();
            expect(DatagridPagination.prototype instanceof ClrDatagridPagination).toBeTruthy();
            expect(DatagridPlaceholder.prototype instanceof ClrDatagridPlaceholder).toBeTruthy();
            expect(DATAGRID_DIRECTIVES).toEqual(CLR_DATAGRID_DIRECTIVES);
            expect(StackView.prototype instanceof ClrStackView).toBeTruthy();
            expect(StackSelect.prototype instanceof ClrStackSelect).toBeTruthy();
            expect(StackInput.prototype instanceof ClrStackInput).toBeTruthy();
            expect(StackHeader.prototype instanceof ClrStackHeader).toBeTruthy();
            expect(StackViewCustomTags.prototype instanceof ClrStackViewCustomTags).toBeTruthy();
            expect(StackBlock.prototype instanceof ClrStackBlock).toBeTruthy();
            expect(STACK_VIEW_DIRECTIVES).toEqual(CLR_STACK_VIEW_DIRECTIVES);
            expect(TreeNode.prototype instanceof ClrTreeNode).toBeTruthy();
            expect(TREE_VIEW_DIRECTIVES).toEqual(CLR_TREE_VIEW_DIRECTIVES);
            // Can't test interfaces directly, so just verify if they are exported and can be applied.
            class ComparatorTest implements Comparator<any> {
                compare(a, b) {
                    return 0;
                }
            }
            expect(new ComparatorTest()).toBeTruthy();
            class FilterTest implements Filter<any> {
                isActive() {
                    return true;
                }
                accepts(item: any) {
                    return true;
                }
                changes: Observable<any>;
            }
            expect(new FilterTest()).toBeTruthy();
            class StateTest implements State {
                page = {from: 1, to: 5, size: 4};
            }
            expect(new StateTest()).toBeTruthy();
            class StringFilterTest implements StringFilter<any> {
                accepts(item: any, search: string) {
                    return true;
                }
            }
            expect(new StringFilterTest()).toBeTruthy();
            expect(SortOrder.Unsorted).toEqual(0);
            expect(SortOrder.Asc).toEqual(1);
            expect(SortOrder.Desc).toEqual(-1);
        });
        it("should export deprecated emphasis items", () => {
            expect(ALERT_DIRECTIVES).toEqual(CLR_ALERT_DIRECTIVES);
            expect(Alert.prototype instanceof ClrAlert).toBeTruthy();
            expect(AlertItem.prototype instanceof ClrAlertItem).toBeTruthy();
            expect(Alerts.prototype instanceof ClrAlerts).toBeTruthy();
            expect(AlertsPager.prototype instanceof ClrAlertsPager).toBeTruthy();
        });
        it("should export deprecated form items", () => {
            expect(Checkbox.prototype instanceof ClrCheckbox).toBeTruthy();
            expect(CHECKBOX_DIRECTIVES).toEqual(CLR_CHECKBOX_DIRECTIVES);
        });
        it("should export deprecated icon items", () => {
            expect(IconCustomTag.prototype instanceof ClrIconCustomTag).toBeTruthy();
            expect(ICON_DIRECTIVES).toEqual(CLR_ICON_DIRECTIVES);
        });
        it("should export deprecated layout items", () => {
            expect(NAVIGATION_DIRECTIVES).toEqual(CLR_NAVIGATION_DIRECTIVES);
            expect(Header.prototype instanceof ClrHeader).toBeTruthy();
            expect(NavLevelDirective.prototype instanceof ClrNavLevel).toBeTruthy();
            expect(TABS_DIRECTIVES).toEqual(CLR_TABS_DIRECTIVES);
            expect(Tab.prototype instanceof ClrTab).toBeTruthy();
            expect(Tabs.prototype instanceof ClrTabs).toBeTruthy();
            expect(TabLinkDirective.prototype instanceof ClrTabLink).toBeTruthy();
            expect(TabContent.prototype instanceof ClrTabContent).toBeTruthy();
            expect(TabOverflowContent.prototype instanceof ClrTabOverflowContent).toBeTruthy();
            expect(VERTICAL_NAV_DIRECTIVES).toEqual(CLR_VERTICAL_NAV_DIRECTIVES);
            expect(VerticalNav.prototype instanceof ClrVerticalNav).toBeTruthy();
            expect(VerticalNavGroup.prototype instanceof ClrVerticalNavGroup).toBeTruthy();
            expect(VerticalNavGroupChildren.prototype instanceof ClrVerticalNavGroupChildren).toBeTruthy();
            expect(VerticalNavIcon.prototype instanceof ClrVerticalNavIcon).toBeTruthy();
            expect(VerticalNavLink.prototype instanceof ClrVerticalNavLink).toBeTruthy();
        });
        it("should export deprecated modal items", () => {
            expect(Modal.prototype instanceof ClrModal).toBeTruthy();
            expect(MODAL_DIRECTIVES).toEqual(CLR_MODAL_DIRECTIVES);
        });
        it("should export deprecated popover items", () => {
            expect(Dropdown.prototype instanceof ClrDropdown).toBeTruthy();
            expect(DropdownItem.prototype instanceof ClrDropdownItem).toBeTruthy();
            expect(DropdownMenu.prototype instanceof ClrDropdownMenu).toBeTruthy();
            expect(DropdownTrigger.prototype instanceof ClrDropdownTrigger).toBeTruthy();
            expect(menuPositions).toEqual(CLR_MENU_POSITIONS);
            expect(DROPDOWN_DIRECTIVES).toEqual(CLR_DROPDOWN_DIRECTIVES);
            expect(Signpost.prototype instanceof ClrSignpost).toBeTruthy();
            expect(SignpostContent.prototype instanceof ClrSignpostContent).toBeTruthy();
            expect(SignpostTrigger.prototype instanceof ClrSignpostTrigger).toBeTruthy();
            expect(SIGNPOST_DIRECTIVES).toEqual(CLR_SIGNPOST_DIRECTIVES);
            expect(Tooltip.prototype instanceof ClrTooltip).toBeTruthy();
            expect(TooltipContent.prototype instanceof ClrTooltipContent).toBeTruthy();
            expect(TooltipTrigger.prototype instanceof ClrTooltipTrigger).toBeTruthy();
            expect(TOOLTIP_DIRECTIVES).toEqual(CLR_TOOLTIP_DIRECTIVES);
        });
        it("should export deprecated util items", () => {
            expect(Loading.prototype instanceof ClrLoading).toBeTruthy();
            expect(LOADING_DIRECTIVES).toEqual(CLR_LOADING_DIRECTIVES);
        });
        it("should export deprecated wizard items", () => {
            expect(Wizard.prototype instanceof ClrWizard).toBeTruthy();
            expect(WizardPage.prototype instanceof ClrWizardPage).toBeTruthy();
            expect(WizardStepnav.prototype instanceof ClrWizardStepnav).toBeTruthy();
            expect(WizardStepnavItem.prototype instanceof ClrWizardStepnavItem).toBeTruthy();
            expect(WizardButton.prototype instanceof ClrWizardButton).toBeTruthy();
            expect(WizardHeaderAction.prototype instanceof ClrWizardHeaderAction).toBeTruthy();
            expect(WizardCustomTags.prototype instanceof ClrWizardCustomTags).toBeTruthy();
            expect(WizardPageTitleDirective.prototype instanceof ClrWizardPageTitle).toBeTruthy();
            expect(WizardPageNavTitleDirective.prototype instanceof ClrWizardPageNavTitle).toBeTruthy();
            expect(WizardPageButtonsDirective.prototype instanceof ClrWizardPageButtons).toBeTruthy();
            expect(WizardPageHeaderActionsDirective.prototype instanceof ClrWizardPageHeaderActions).toBeTruthy();
            expect(WIZARD_DIRECTIVES).toEqual(CLR_WIZARD_DIRECTIVES);
        });
    });
});
