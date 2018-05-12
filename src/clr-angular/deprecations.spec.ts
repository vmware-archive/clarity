/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Observable} from "rxjs";

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
    CLR_LAYOUT_DIRECTIVES,
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
    ClrCheckboxDeprecated,
    ClrCodeHighlight,
    ClrDatagrid,
    ClrDatagridActionBar,
    ClrDatagridActionOverflow,
    ClrDatagridCell,
    ClrDatagridColumn,
    ClrDatagridColumnToggle,
    ClrDatagridFilter,
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
    ClrMainContainer,
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
    LAYOUT_DIRECTIVES,
    Loading,
    LOADING_BUTTON_DIRECTIVES,
    LOADING_DIRECTIVES,
    LoadingButton,
    MainContainer,
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
    describe("since v0.12, remove in 0.13", () => {
        it("should export deprecated checkbox items", () => {
            expect(ClrCheckbox).toEqual(ClrCheckboxDeprecated);
        });
    });

    describe("since v0.11, remove in 0.12", () => {
        it("should export deprecated buttons items", () => {
            expect(BUTTON_GROUP_DIRECTIVES).toEqual(CLR_BUTTON_GROUP_DIRECTIVES);
            expect(Button).toEqual(ClrButton);
            expect(ButtonGroup).toEqual(ClrButtonGroup);
            expect(LOADING_BUTTON_DIRECTIVES).toEqual(CLR_LOADING_BUTTON_DIRECTIVES);
            expect(LoadingButton).toEqual(ClrLoadingButton);
        });
        it("should export depecreated code highlight items", () => {
            expect(CODE_HIGHLIGHT_DIRECTIVES).toEqual(CLR_CODE_HIGHLIGHT_DIRECTIVES);
            expect(CodeHighlight).toEqual(ClrCodeHighlight);
        });
        it("should export deprecated data items", () => {
            expect(Datagrid).toEqual(ClrDatagrid);
            expect(DatagridActionBar).toEqual(ClrDatagridActionBar);
            expect(DatagridActionOverflow).toEqual(ClrDatagridActionOverflow);
            expect(DatagridColumn).toEqual(ClrDatagridColumn);
            expect(DatagridColumnToggle).toEqual(ClrDatagridColumnToggle);
            expect(DatagridFilter).toEqual(ClrDatagridFilter);
            expect(DatagridHideableColumnDirective).toEqual(ClrDatagridHideableColumn);
            expect(DatagridItems).toEqual(ClrDatagridItems);
            expect(DatagridRow).toEqual(ClrDatagridRow);
            expect(DatagridRowDetail).toEqual(ClrDatagridRowDetail);
            expect(DatagridCell).toEqual(ClrDatagridCell);
            expect(DatagridFooter).toEqual(ClrDatagridFooter);
            expect(DatagridPagination).toEqual(ClrDatagridPagination);
            expect(DatagridPlaceholder).toEqual(ClrDatagridPlaceholder);
            expect(DATAGRID_DIRECTIVES).toEqual(CLR_DATAGRID_DIRECTIVES);
            expect(StackView).toEqual(ClrStackView);
            expect(StackSelect).toEqual(ClrStackSelect);
            expect(StackInput).toEqual(ClrStackInput);
            expect(StackHeader).toEqual(ClrStackHeader);
            expect(StackViewCustomTags).toEqual(ClrStackViewCustomTags);
            expect(StackBlock).toEqual(ClrStackBlock);
            expect(STACK_VIEW_DIRECTIVES).toEqual(CLR_STACK_VIEW_DIRECTIVES);
            expect(TreeNode).toEqual(ClrTreeNode);
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
            expect(Alert).toEqual(ClrAlert);
            expect(AlertItem).toEqual(ClrAlertItem);
            expect(Alerts).toEqual(ClrAlerts);
            expect(AlertsPager).toEqual(ClrAlertsPager);
        });
        it("should export deprecated form items", () => {
            expect(Checkbox).toEqual(ClrCheckbox);
            expect(CHECKBOX_DIRECTIVES).toEqual(CLR_CHECKBOX_DIRECTIVES);
        });
        it("should export deprecated icon items", () => {
            expect(IconCustomTag).toEqual(ClrIconCustomTag);
            expect(ICON_DIRECTIVES).toEqual(CLR_ICON_DIRECTIVES);
        });
        it("should export deprecated layout items", () => {
            expect(MainContainer).toEqual(ClrMainContainer);
            expect(LAYOUT_DIRECTIVES).toEqual(CLR_LAYOUT_DIRECTIVES);
            expect(NAVIGATION_DIRECTIVES).toEqual(CLR_NAVIGATION_DIRECTIVES);
            expect(Header).toEqual(ClrHeader);
            expect(NavLevelDirective).toEqual(ClrNavLevel);
            expect(TABS_DIRECTIVES).toEqual(CLR_TABS_DIRECTIVES);
            expect(Tab).toEqual(ClrTab);
            expect(Tabs).toEqual(ClrTabs);
            expect(TabLinkDirective).toEqual(ClrTabLink);
            expect(TabContent).toEqual(ClrTabContent);
            expect(TabOverflowContent).toEqual(ClrTabOverflowContent);
            expect(VERTICAL_NAV_DIRECTIVES).toEqual(CLR_VERTICAL_NAV_DIRECTIVES);
            expect(VerticalNav).toEqual(ClrVerticalNav);
            expect(VerticalNavGroup).toEqual(ClrVerticalNavGroup);
            expect(VerticalNavGroupChildren).toEqual(ClrVerticalNavGroupChildren);
            expect(VerticalNavIcon).toEqual(ClrVerticalNavIcon);
            expect(VerticalNavLink).toEqual(ClrVerticalNavLink);
        });
        it("should export deprecated modal items", () => {
            expect(Modal).toEqual(ClrModal);
            expect(MODAL_DIRECTIVES).toEqual(CLR_MODAL_DIRECTIVES);
        });
        it("should export deprecated popover items", () => {
            expect(Dropdown).toEqual(ClrDropdown);
            expect(DropdownItem).toEqual(ClrDropdownItem);
            expect(DropdownMenu).toEqual(ClrDropdownMenu);
            expect(DropdownTrigger).toEqual(ClrDropdownTrigger);
            expect(menuPositions).toEqual(CLR_MENU_POSITIONS);
            expect(DROPDOWN_DIRECTIVES).toEqual(CLR_DROPDOWN_DIRECTIVES);
            expect(Signpost).toEqual(ClrSignpost);
            expect(SignpostContent).toEqual(ClrSignpostContent);
            expect(SignpostTrigger).toEqual(ClrSignpostTrigger);
            expect(SIGNPOST_DIRECTIVES).toEqual(CLR_SIGNPOST_DIRECTIVES);
            expect(Tooltip).toEqual(ClrTooltip);
            expect(TooltipContent).toEqual(ClrTooltipContent);
            expect(TooltipTrigger).toEqual(ClrTooltipTrigger);
            expect(TOOLTIP_DIRECTIVES).toEqual(CLR_TOOLTIP_DIRECTIVES);
        });
        it("should export deprecated util items", () => {
            expect(Loading).toEqual(ClrLoading);
            expect(LOADING_DIRECTIVES).toEqual(CLR_LOADING_DIRECTIVES);
        });
        it("should export deprecated wizard items", () => {
            expect(Wizard).toEqual(ClrWizard);
            expect(WizardPage).toEqual(ClrWizardPage);
            expect(WizardStepnav).toEqual(ClrWizardStepnav);
            expect(WizardStepnavItem).toEqual(ClrWizardStepnavItem);
            expect(WizardButton).toEqual(ClrWizardButton);
            expect(WizardHeaderAction).toEqual(ClrWizardHeaderAction);
            expect(WizardCustomTags).toEqual(ClrWizardCustomTags);
            expect(WizardPageTitleDirective).toEqual(ClrWizardPageTitle);
            expect(WizardPageNavTitleDirective).toEqual(ClrWizardPageNavTitle);
            expect(WizardPageButtonsDirective).toEqual(ClrWizardPageButtons);
            expect(WizardPageHeaderActionsDirective).toEqual(ClrWizardPageHeaderActions);
            expect(WIZARD_DIRECTIVES).toEqual(CLR_WIZARD_DIRECTIVES);
        });
    });
});
