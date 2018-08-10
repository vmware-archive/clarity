/** @deprecated */
export declare const Alert: typeof ClrAlert;

/** @deprecated */
export declare const ALERT_DIRECTIVES: Type<any>[];

/** @deprecated */
export declare const AlertItem: typeof ClrAlertItem;

/** @deprecated */
export declare const Alerts: typeof ClrAlerts;

/** @deprecated */
export declare const AlertsPager: typeof ClrAlertsPager;

/** @deprecated */
export declare const Button: typeof ClrButton;

/** @deprecated */
export declare const BUTTON_GROUP_DIRECTIVES: Type<any>[];

/** @deprecated */
export declare const ButtonGroup: typeof ClrButtonGroup;

/** @deprecated */
export declare const Checkbox: typeof ClrCheckboxDeprecated;

/** @deprecated */
export declare const CHECKBOX_DIRECTIVES: Type<any>[];

export declare class ClarityModule {
}

export declare const CLR_ALERT_DIRECTIVES: Type<any>[];

export declare const CLR_BUTTON_GROUP_DIRECTIVES: Type<any>[];

export declare const CLR_CHECKBOX_DIRECTIVES: Type<any>[];

/** @deprecated */
export declare const CLR_CODE_HIGHLIGHT_DIRECTIVES: Type<any>[];

export declare const CLR_DATAGRID_DIRECTIVES: Type<any>[];

export declare const CLR_DATEPICKER_DIRECTIVES: Type<any>[];

export declare const CLR_DROPDOWN_DIRECTIVES: Type<any>[];

export declare const CLR_ICON_DIRECTIVES: Type<any>[];

export declare const CLR_LAYOUT_DIRECTIVES: Type<any>[];

export declare const CLR_LOADING_BUTTON_DIRECTIVES: Type<any>[];

export declare const CLR_LOADING_DIRECTIVES: Type<any>[];

export declare const CLR_MENU_POSITIONS: string[];

export declare const CLR_MODAL_DIRECTIVES: Type<any>[];

export declare const CLR_NAVIGATION_DIRECTIVES: Type<any>[];

export declare const CLR_SIGNPOST_DIRECTIVES: Type<any>[];

export declare const CLR_STACK_VIEW_DIRECTIVES: Type<any>[];

export declare const CLR_TABS_DIRECTIVES: Type<any>[];

export declare const CLR_TOOLTIP_DIRECTIVES: Type<any>[];

export declare const CLR_TREE_VIEW_DIRECTIVES: Type<any>[];

export declare const CLR_VERTICAL_NAV_DIRECTIVES: Type<any>[];

export declare const CLR_WIZARD_DIRECTIVES: any[];

export declare class ClrAlert {
    _closed: boolean;
    _closedChanged: EventEmitter<boolean>;
    readonly alertClass: string;
    alertIconShape: string;
    alertType: string;
    cdr: ChangeDetectorRef;
    closable: boolean;
    iconService: AlertIconAndTypesService;
    isAppLevel: boolean;
    readonly isHidden: boolean;
    isSmall: boolean;
    multiAlertService: MultiAlertService;
    constructor(iconService: AlertIconAndTypesService, cdr: ChangeDetectorRef, multiAlertService: MultiAlertService);
    close(): void;
    open(): void;
}

export declare class ClrAlertItem {
    iconService: AlertIconAndTypesService;
    constructor(iconService: AlertIconAndTypesService);
}

export declare class ClrAlertModule {
}

export declare class ClrAlerts implements AfterContentInit {
    _inputCurrentIndex: number;
    readonly alerts: ClrAlert[];
    allAlerts: QueryList<ClrAlert>;
    currentAlert: ClrAlert;
    currentAlertChange: EventEmitter<ClrAlert>;
    currentAlertIndex: number;
    currentAlertIndexChange: EventEmitter<number>;
    readonly currentAlertType: string;
    multiAlertService: MultiAlertService;
    constructor(multiAlertService: MultiAlertService);
    ngAfterContentInit(): void;
}

export declare class ClrAlertsPager implements OnInit, OnDestroy {
    currentAlert: ClrAlert;
    currentAlertChange: EventEmitter<ClrAlert>;
    currentAlertIndex: number;
    currentAlertIndexChange: EventEmitter<number>;
    multiAlertService: MultiAlertService;
    constructor(multiAlertService: MultiAlertService);
    ngOnDestroy(): void;
    ngOnInit(): void;
    pageDown(): void;
    pageUp(): void;
}

export declare class ClrButton implements LoadingListener {
    _click: EventEmitter<boolean>;
    buttonInGroupService: ButtonInGroupService;
    classNames: string;
    disabled: any;
    inMenu: boolean;
    loading: boolean;
    name: string;
    templateRef: TemplateRef<ClrButton>;
    type: string;
    constructor(buttonInGroupService: ButtonInGroupService);
    emitClick(): void;
    loadingStateChange(state: ClrLoadingState): void;
    ngAfterViewInit(): void;
}

export declare class ClrButtonGroup {
    anchorPoint: Point;
    buttonGroupNewService: ButtonInGroupService;
    buttons: QueryList<ClrButton>;
    inlineButtons: ClrButton[];
    menuButtons: ClrButton[];
    menuPosition: string;
    openMenu: boolean;
    popoverPoint: Point;
    constructor(buttonGroupNewService: ButtonInGroupService, elementRef: ElementRef);
    getMoveIndex(buttonToMove: ClrButton): number;
    initializeButtons(): void;
    ngAfterContentInit(): void;
    onMouseClick(target: any): void;
    rearrangeButton(button: ClrButton): void;
    toggleMenu(): void;
}

export declare class ClrButtonGroupModule {
}

export declare class ClrButtonModule {
}

export declare class ClrCalendar implements OnDestroy {
    readonly calendar: CalendarModel;
    calendarViewModel: CalendarViewModel;
    readonly focusedDay: DayModel;
    readonly localeDaysNarrow: ReadonlyArray<string>;
    readonly selectedDay: DayModel;
    readonly today: DayModel;
    constructor(_localeHelperService: LocaleHelperService, _dateNavigationService: DateNavigationService, _datepickerFocusService: DatepickerFocusService, _elRef: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onKeyDown(event: KeyboardEvent): void;
}

/** @deprecated */
export declare const ClrCheckbox: typeof ClrCheckboxDeprecated;

export declare class ClrCheckboxContainer implements DynamicWrapper {
    _dynamic: boolean;
}

/** @deprecated */
export declare class ClrCheckboxDeprecated implements ControlValueAccessor {
    _id: string;
    change: EventEmitter<boolean>;
    checked: boolean;
    clrAriaLabeledBy: string;
    disabled: boolean;
    readonly id: string;
    indeterminate: boolean;
    indeterminateChange: EventEmitter<boolean>;
    inline: boolean;
    name: string;
    checkIndeterminateState(): void;
    registerOnChange(onChange: any): void;
    registerOnTouched(onTouched: any): void;
    toggle(): void;
    touch(): void;
    writeValue(value: any): void;
}

export declare class ClrCheckboxModule {
}

export declare class ClrCheckboxNext extends WrappedFormControl<ClrCheckboxContainer> {
    constructor(vcr: ViewContainerRef);
}

export declare class ClrCheckboxNextModule {
}

/** @deprecated */
export declare class ClrCodeHighlight {
    highlight: string;
    constructor(_el: ElementRef, renderer: Renderer2, platformId: Object);
    ngAfterContentInit(): void;
    redraw(): void;
}

/** @deprecated */
export declare class ClrCodeModule {
}

export declare class ClrCommonFormsModule {
}

export declare class ClrControlError {
}

export declare class ClrControlHelper {
}

export declare class ClrDatagrid<T = any> implements AfterContentInit, AfterViewInit, OnDestroy {
    SELECTION_TYPE: typeof SelectionType;
    allSelected: boolean;
    columns: QueryList<ClrDatagridColumn<T>>;
    expandableRows: ExpandableRowsCount;
    items: Items<T>;
    iterator: ClrDatagridItems<T>;
    loading: boolean;
    placeholder: ClrDatagridPlaceholder<T>;
    refresh: EventEmitter<ClrDatagridStateInterface<T>>;
    rowActionService: RowActionService;
    rowSelectionMode: boolean;
    /** @deprecated */ rowSelectionModeDeprecated: boolean;
    rows: QueryList<ClrDatagridRow<T>>;
    selected: T[];
    selectedChanged: EventEmitter<T[]>;
    selection: Selection<T>;
    singleSelected: T;
    singleSelectedChanged: EventEmitter<T>;
    constructor(columnService: HideableColumnService, organizer: DatagridRenderOrganizer, items: Items<T>, expandableRows: ExpandableRowsCount, selection: Selection<T>, rowActionService: RowActionService, stateProvider: StateProvider<T>);
    dataChanged(): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    resize(): void;
}

export declare class ClrDatagridActionBar {
}

export declare class ClrDatagridActionOverflow implements OnDestroy {
    anchorPoint: Point;
    open: boolean;
    openChanged: EventEmitter<boolean>;
    popoverPoint: Point;
    constructor(rowActionService: RowActionService);
    close(event: MouseEvent): void;
    ngOnDestroy(): void;
    toggle(event: any): void;
}

export declare class ClrDatagridCell {
    hideableColumnService: HideableColumnService;
    id: string;
    signpost: QueryList<ClrSignpost>;
    constructor(hideableColumnService: HideableColumnService, _el: ElementRef, _renderer: Renderer2);
    ngOnDestroy(): void;
}

export declare class ClrDatagridColumn<T = any> extends DatagridFilterRegistrar<T, DatagridStringFilterImpl<T>> {
    readonly ariaSort: string;
    readonly asc: boolean;
    columnId: string;
    customFilter: boolean;
    readonly desc: boolean;
    field: string;
    filterValue: string;
    filterValueChange: EventEmitter<{}>;
    handleElRef: ElementRef;
    handleTrackerElRef: ElementRef;
    readonly hidden: boolean;
    hideable: DatagridHideableColumnModel;
    projectedFilter: any;
    sortBy: ClrDatagridComparatorInterface<T> | string;
    sortOrder: ClrDatagridSortOrder;
    sortOrderChange: EventEmitter<ClrDatagridSortOrder>;
    readonly sortable: boolean;
    /** @deprecated */ sorted: boolean;
    /** @deprecated */ sortedChange: EventEmitter<boolean>;
    updateFilterValue: string;
    constructor(_sort: Sort<T>, filters: FiltersProvider<T>, _dragDispatcher: DragDispatcher);
    ngOnDestroy(): void;
    sort(reverse?: boolean): void;
}

export declare class ClrDatagridColumnToggle implements OnInit, OnDestroy {
    allColumnsVisible: boolean;
    anchorPoint: Point;
    buttons: QueryList<ClrDatagridColumnToggleButton>;
    columns: DatagridHideableColumnModel[];
    hideableColumnService: HideableColumnService;
    open: boolean;
    popoverPoint: Point;
    title: ClrDatagridColumnToggleTitle;
    constructor(hideableColumnService: HideableColumnService, columnToggleButtons: ColumnToggleButtonsService);
    ngOnDestroy(): void;
    ngOnInit(): void;
    selectAll(): void;
    toggleColumn(event: boolean, column: DatagridHideableColumnModel): void;
    toggleUI(): void;
}

export interface ClrDatagridComparatorInterface<T> {
    compare(a: T, b: T): number;
}

export declare class ClrDatagridFilter<T = any> extends DatagridFilterRegistrar<T, ClrDatagridFilterInterface<T>> implements CustomFilter {
    readonly active: boolean;
    anchorPoint: Point;
    customFilter: ClrDatagridFilterInterface<T> | RegisteredFilter<T, ClrDatagridFilterInterface<T>>;
    open: boolean;
    openChanged: EventEmitter<boolean>;
    popoverOptions: PopoverOptions;
    popoverPoint: Point;
    constructor(_filters: FiltersProvider<T>);
    toggle(): void;
}

export interface ClrDatagridFilterInterface<T> {
    changes: Observable<any>;
    accepts(item: T): boolean;
    isActive(): boolean;
}

export declare class ClrDatagridFooter<T = any> implements OnInit {
    SELECTION_TYPE: typeof SelectionType;
    activeToggler: boolean;
    cdr: ChangeDetectorRef;
    hideableColumnService: HideableColumnService;
    selection: Selection<T>;
    toggle: ClrDatagridColumnToggle;
    constructor(selection: Selection<T>, hideableColumnService: HideableColumnService, cdr: ChangeDetectorRef);
    ngOnDestroy(): void;
    ngOnInit(): void;
}

export declare class ClrDatagridHideableColumn {
    clrDgHideableColumn: {
        hidden: boolean;
    };
    column: DatagridHideableColumnModel;
    columnId: string;
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef, dgColumn: ClrDatagridColumn<any>);
}

export declare class ClrDatagridItems<T = any> implements OnChanges, DoCheck {
    rawItems: T[];
    template: TemplateRef<NgForOfContext<T>>;
    trackBy: TrackByFunction<T>;
    constructor(template: TemplateRef<NgForOfContext<T>>, _differs: IterableDiffers, _items: Items<T>);
    ngDoCheck(): void;
    ngOnChanges(changes: SimpleChanges): void;
}

export declare class ClrDatagridModule {
}

export declare class ClrDatagridPagination implements OnDestroy, OnInit {
    currentChanged: EventEmitter<number>;
    currentPage: number;
    readonly firstItem: number;
    readonly lastItem: number;
    lastPage: number;
    readonly middlePages: number[];
    page: Page;
    pageSize: number;
    totalItems: number;
    constructor(page: Page);
    next(): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    previous(): void;
}

export declare class ClrDatagridPlaceholder<T = any> {
    readonly emptyDatagrid: boolean;
    constructor(items: Items<T>);
}

export declare class ClrDatagridRow<T = any> implements AfterContentInit {
    SELECTION_TYPE: typeof SelectionType;
    dgCells: QueryList<ClrDatagridCell>;
    expand: Expand;
    expanded: boolean;
    expandedChange: EventEmitter<boolean>;
    globalExpandable: ExpandableRowsCount;
    hideableColumnService: HideableColumnService;
    id: string;
    item: T;
    radioId: string;
    rowActionService: RowActionService;
    selected: boolean;
    selectedChanged: EventEmitter<boolean>;
    selection: Selection<T>;
    constructor(selection: Selection<T>, rowActionService: RowActionService, globalExpandable: ExpandableRowsCount, expand: Expand, hideableColumnService: HideableColumnService);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    toggle(selected?: boolean): void;
    toggleExpand(): void;
    updateCellsForColumns(columnList: DatagridHideableColumnModel[]): void;
}

export declare class ClrDatagridRowDetail<T = any> implements AfterContentInit, OnDestroy {
    SELECTION_TYPE: typeof SelectionType;
    cells: QueryList<ClrDatagridCell>;
    expand: Expand;
    hideableColumnService: HideableColumnService;
    replace: boolean;
    rowActionService: RowActionService;
    selection: Selection<T>;
    constructor(selection: Selection<T>, rowActionService: RowActionService, expand: Expand, hideableColumnService: HideableColumnService);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    updateCellsForColumns(columnList: DatagridHideableColumnModel[]): void;
}

export declare enum ClrDatagridSortOrder {
    UNSORTED = 0,
    ASC = 1,
    DESC = -1,
}

export interface ClrDatagridStateInterface<T = any> {
    filters?: ({
        property: string;
        value: string;
    } | ClrDatagridFilterInterface<T>)[];
    page?: {
        from?: number;
        to?: number;
        size?: number;
    };
    sort?: {
        by: string | ClrDatagridComparatorInterface<T>;
        reverse: boolean;
    };
}

export interface ClrDatagridStringFilterInterface<T> {
    accepts(item: T, search: string): boolean;
}

export declare class ClrDataModule {
}

export declare class ClrDateContainer implements DynamicWrapper, OnDestroy {
    _dynamic: boolean;
    readonly isEnabled: boolean;
    constructor(_ifOpenService: IfOpenService, _dateNavigationService: DateNavigationService, _datepickerEnabledService: DatepickerEnabledService, dateFormControlService: DateFormControlService);
    ngOnDestroy(): void;
    toggleDatepicker(event: MouseEvent): void;
}

export declare class ClrDateInput extends WrappedFormControl<ClrDateContainer> implements OnInit, AfterViewInit, OnDestroy {
    _dateUpdated: EventEmitter<Date>;
    date: Date;
    readonly inputType: string;
    placeholder: string;
    readonly placeholderText: string;
    constructor(container: ClrDateContainer, vcr: ViewContainerRef, elRef: ElementRef, renderer: Renderer2, _ngControl: NgControl, _dateIOService: DateIOService, _dateNavigationService: DateNavigationService, _datepickerEnabledService: DatepickerEnabledService, dateFormControlService: DateFormControlService, platformId: Object);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    onValueChange(target: HTMLInputElement): void;
}

export declare class ClrDatepickerModule {
}

export declare class ClrDatepickerViewManager extends AbstractPopover {
    readonly isDayView: boolean;
    readonly isMonthView: boolean;
    readonly isYearView: boolean;
    constructor(parent: ElementRef, _injector: Injector, _viewManagerService: ViewManagerService);
}

export declare class ClrDay {
    dayView: DayViewModel;
    constructor(_dateNavigationService: DateNavigationService, _ifOpenService: IfOpenService, dateFormControlService: DateFormControlService);
    onDayViewFocus(): void;
    selectDay(): void;
}

export declare class ClrDaypicker {
    readonly calendarMonth: string;
    readonly calendarYear: number;
    constructor(_viewManagerService: ViewManagerService, _dateNavigationService: DateNavigationService, _localeHelperService: LocaleHelperService);
    changeToMonthView(): void;
    changeToYearView(): void;
    currentMonth(): void;
    nextMonth(): void;
    previousMonth(): void;
}

export declare class ClrDropdown implements OnDestroy {
    ifOpenService: IfOpenService;
    isMenuClosable: boolean;
    parent: ClrDropdown;
    constructor(parent: ClrDropdown, ifOpenService: IfOpenService, dropdownService: RootDropdownService);
    ngOnDestroy(): void;
}

export declare class ClrDropdownItem implements AfterViewInit {
    constructor(dropdown: ClrDropdown, el: ElementRef, _dropdownService: RootDropdownService, renderer: Renderer2);
    ngAfterViewInit(): void;
    onDropdownItemClick(): void;
}

export declare class ClrDropdownMenu extends AbstractPopover {
    position: string;
    constructor(injector: Injector, parentHost: ElementRef, nested: ClrDropdownMenu);
}

export declare class ClrDropdownModule {
}

export declare class ClrDropdownTrigger {
    readonly active: boolean;
    isRootLevelToggle: boolean;
    constructor(dropdown: ClrDropdown, ifOpenService: IfOpenService);
    onDropdownTriggerClick(event: any): void;
}

export declare class ClrEmphasisModule {
}

export declare class ClrForm {
}

export declare class ClrFormsModule {
}

export declare class ClrFormsNextModule {
}

export declare class ClrHeader implements OnDestroy {
    isNavLevel1OnPage: boolean;
    isNavLevel2OnPage: boolean;
    readonly responsiveNavCodes: ResponsiveNavCodes;
    constructor(responsiveNavService: ResponsiveNavigationService);
    closeOpenNav(): void;
    initializeNavTriggers(navList: number[]): void;
    ngOnDestroy(): void;
    resetNavTriggers(): void;
    toggleNav(navLevel: number): void;
}

export declare class ClrIconCustomTag {
}

export declare class ClrIconModule {
}

export declare class ClrIfActive implements OnDestroy {
    active: boolean;
    activeChange: EventEmitter<boolean>;
    constructor(ifActiveService: IfActiveService, id: number, template: TemplateRef<any>, container: ViewContainerRef);
    ngOnDestroy(): void;
    updateView(value: boolean): void;
}

export declare class ClrIfError {
    error: string;
    constructor(service: IfErrorService, template: TemplateRef<any>, container: ViewContainerRef);
    ngOnDestroy(): void;
    ngOnInit(): void;
}

export declare class ClrIfExpanded implements OnInit, OnDestroy {
    expanded: boolean;
    expandedChange: EventEmitter<boolean>;
    constructor(template: TemplateRef<any>, container: ViewContainerRef, expand: Expand);
    ngOnDestroy(): void;
    ngOnInit(): void;
}

export declare class ClrIfOpen implements OnDestroy {
    open: boolean;
    openChange: EventEmitter<boolean>;
    constructor(ifOpenService: IfOpenService, template: TemplateRef<any>, container: ViewContainerRef);
    ngOnDestroy(): void;
    updateView(value: boolean): void;
}

export declare class ClrInput extends WrappedFormControl<ClrInputContainer> implements OnInit {
    type: string;
    constructor(vcr: ViewContainerRef, ngControlService: NgControlService, ifErrorService: IfErrorService, control: NgControl, controlClassService: ControlClassService, type: string, renderer: Renderer2, el: ElementRef);
    ngOnInit(): void;
    onBlur(): void;
}

export declare class ClrInputContainer implements DynamicWrapper, OnDestroy {
    _dynamic: boolean;
    invalid: boolean;
    label: ClrLabel;
    subscriptions: Subscription[];
    constructor(ifErrorService: IfErrorService, layoutService: LayoutService, controlClassService: ControlClassService);
    addGrid(): boolean;
    controlClass(): string;
    ngOnDestroy(): void;
}

export declare class ClrInputModule {
}

export declare class ClrLabel implements OnInit, OnDestroy {
    forAttr: string;
    constructor(controlIdService: ControlIdService, ifErrorService: IfErrorService, layoutService: LayoutService, renderer: Renderer2, el: ElementRef);
    ngOnDestroy(): void;
    ngOnInit(): void;
}

export declare class ClrLayout implements OnInit {
    layout: Layouts;
    layoutService: LayoutService;
    constructor(layoutService: LayoutService);
    ngOnInit(): void;
}

export declare class ClrLayoutModule {
}

export declare class ClrLoading implements OnDestroy {
    loadingState: boolean | ClrLoadingState;
    constructor(listener: LoadingListener);
    ngOnDestroy(): void;
}

export declare class ClrLoadingButton implements LoadingListener {
    buttonState: typeof ClrLoadingState;
    clrLoadingChange: EventEmitter<ClrLoadingState>;
    disabled: boolean;
    el: ElementRef;
    state: ClrLoadingState;
    constructor(el: ElementRef, renderer: Renderer2);
    loadingStateChange(state: ClrLoadingState): void;
}

export declare class ClrLoadingButtonModule {
}

export declare class ClrLoadingModule {
}

export declare enum ClrLoadingState {
    DEFAULT = 0,
    LOADING = 1,
    SUCCESS = 2,
    ERROR = 3,
}

export declare class ClrMainContainer implements OnDestroy, OnInit {
    constructor(elRef: ElementRef, responsiveNavService: ResponsiveNavigationService);
    controlNav(controlCode: string, navClass: string): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    processMessage(message: ResponsiveNavControlMessage): void;
}

export declare class ClrMainContainerModule {
}

export declare class ClrModal implements OnChanges, OnDestroy {
    _open: boolean;
    _openChanged: EventEmitter<boolean>;
    altClose: EventEmitter<boolean>;
    bypassScrollService: boolean;
    closable: boolean;
    focusTrap: FocusTrapDirective;
    ghostPageState: string;
    size: string;
    readonly sizeClass: string;
    skipAnimation: string;
    staticBackdrop: boolean;
    stopClose: boolean;
    constructor(_scrollingService: ScrollingService);
    close(): void;
    fadeDone(e: AnimationEvent): void;
    ngOnChanges(changes: {
        [propName: string]: SimpleChange;
    }): void;
    ngOnDestroy(): void;
    open(): void;
}

export declare class ClrModalModule {
}

export declare class ClrMonthpicker implements AfterViewInit {
    readonly calendarMonthIndex: number;
    readonly monthNames: ReadonlyArray<string>;
    constructor(_viewManagerService: ViewManagerService, _localeHelperService: LocaleHelperService, _dateNavigationService: DateNavigationService, _datepickerFocusService: DatepickerFocusService, _elRef: ElementRef);
    changeMonth(monthIndex: number): void;
    getTabIndex(monthIndex: number): number;
    ngAfterViewInit(): void;
    onKeyDown(event: KeyboardEvent): void;
}

export declare class ClrNavigationModule {
}

export declare class ClrNavLevel implements OnInit {
    _level: number;
    readonly level: number;
    readonly responsiveNavCodes: ResponsiveNavCodes;
    constructor(responsiveNavService: ResponsiveNavigationService, elementRef: ElementRef);
    addNavClass(level: number): void;
    close(): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    onMouseClick(target: any): void;
    open(): void;
}

export declare class ClrPassword extends WrappedFormControl<ClrPasswordContainer> implements OnInit, OnDestroy {
    subscription: Subscription;
    type: string;
    constructor(vcr: ViewContainerRef, ngControlService: NgControlService, ifErrorService: IfErrorService, control: NgControl, focusService: FocusService, controlClassService: ControlClassService, type: string, renderer: Renderer2, el: ElementRef, toggleService: BehaviorSubject<boolean>);
    ngOnDestroy(): void;
    ngOnInit(): void;
    onBlur(): void;
    onFocus(): void;
}

export declare class ClrPasswordContainer implements DynamicWrapper, OnDestroy {
    _dynamic: boolean;
    _toggle: boolean;
    clrToggle: boolean;
    control: NgControl;
    focus: boolean;
    focusService: FocusService;
    invalid: boolean;
    label: ClrLabel;
    show: boolean;
    subscriptions: Subscription[];
    constructor(ifErrorService: IfErrorService, layoutService: LayoutService, controlClassService: ControlClassService, focusService: FocusService, toggleService: BehaviorSubject<boolean>);
    addGrid(): boolean;
    controlClass(): string;
    ngOnDestroy(): void;
    toggle(): void;
}

export declare class ClrPasswordModule {
}

export declare class ClrPopoverModule {
}

export declare class ClrRadio extends WrappedFormControl<ClrRadioContainer> {
    constructor(vcr: ViewContainerRef);
}

export declare class ClrRadioContainer implements DynamicWrapper {
    _dynamic: boolean;
}

export declare class ClrRadioModule {
}

export declare class ClrSelect extends WrappedFormControl<ClrSelectContainer> implements OnInit {
    constructor(vcr: ViewContainerRef, ngControlService: NgControlService, ifErrorService: IfErrorService, control: NgControl, controlClassService: ControlClassService, el: ElementRef);
    ngOnInit(): void;
    onBlur(): void;
}

export declare class ClrSelectContainer implements DynamicWrapper, OnDestroy {
    _dynamic: boolean;
    invalid: boolean;
    label: ClrLabel;
    multi: boolean;
    multiple: SelectMultipleControlValueAccessor;
    constructor(ifErrorService: IfErrorService, layoutService: LayoutService, controlClassService: ControlClassService, ngControlService: NgControlService);
    addGrid(): boolean;
    controlClass(): string;
    ngOnDestroy(): void;
    wrapperClass(): "clr-multiselect-wrapper" | "clr-select-wrapper";
}

export declare class ClrSelectModule {
}

export declare class ClrSignpost {
    customTrigger: ClrSignpostTrigger;
    useCustomTrigger: boolean;
}

export declare class ClrSignpostContent extends AbstractPopover {
    position: string;
    constructor(injector: Injector, parentHost: ElementRef);
    close(): void;
}

export declare class ClrSignpostModule {
}

export declare class ClrSignpostTrigger implements OnDestroy {
    constructor(ifOpenService: IfOpenService, renderer: Renderer2, el: ElementRef);
    ngOnDestroy(): void;
    onSignpostTriggerClick(event: Event): void;
}

export declare class ClrStackBlock implements OnInit {
    readonly ariaExpanded: string;
    readonly caretDirection: string;
    expandable: boolean;
    expanded: boolean;
    expandedChange: EventEmitter<boolean>;
    focused: boolean;
    readonly getChangedValue: boolean;
    readonly onStackLabelFocus: boolean;
    readonly role: string;
    setChangedValue: boolean;
    readonly tabIndex: string;
    constructor(parent: ClrStackBlock);
    addChild(): void;
    ngOnInit(): void;
    toggleExpand(): void;
}

export declare class ClrStackHeader {
    stackView: ClrStackView;
    constructor(stackView: ClrStackView);
}

export declare class ClrStackInput extends StackControl {
    stackView: ClrStackView;
    type: string;
    constructor(stackView: ClrStackView);
}

export declare class ClrStackSelect extends StackControl {
    stackView: ClrStackView;
    constructor(stackView: ClrStackView);
}

export declare class ClrStackView {
    editable: boolean;
    editing: boolean;
    editingChange: EventEmitter<boolean>;
    save: EventEmitter<void>;
}

export declare class ClrStackViewCustomTags {
}

export declare class ClrStackViewModule {
}

/** @deprecated */
export declare class ClrSyntaxHighlightModule {
}

export declare class ClrTab {
    readonly active: boolean;
    id: number;
    ifActiveService: IfActiveService;
    tabContent: ClrTabContent;
    tabLink: ClrTabLink;
    constructor(ifActiveService: IfActiveService, id: number, tabsService: TabsService);
    ngOnDestroy(): void;
}

export declare class ClrTabContent {
    readonly active: boolean;
    readonly ariaLabelledBy: string;
    id: number;
    ifActiveService: IfActiveService;
    tabContentId: string;
    templateRef: TemplateRef<ClrTabContent>;
    constructor(ifActiveService: IfActiveService, id: number, ariaService: AriaService);
}

export declare class ClrTabLink {
    readonly active: boolean;
    readonly ariaControls: string;
    ifActiveService: IfActiveService;
    inOverflow: boolean;
    readonly role: string;
    tabLinkId: string;
    tabsId: number;
    templateRefContainer: TemplateRefContainer;
    readonly type: string;
    constructor(ifActiveService: IfActiveService, id: number, ariaService: AriaService, el: ElementRef, cfr: ComponentFactoryResolver, viewContainerRef: ViewContainerRef, tabsId: number);
    activate(): void;
}

export declare class ClrTabOverflowContent extends AbstractPopover {
    constructor(injector: Injector, parentHost: ElementRef);
}

export declare class ClrTabs implements AfterContentInit {
    readonly activeTabInOverflow: boolean;
    ifActiveService: IfActiveService;
    ifOpenService: IfOpenService;
    tabLinkDirectives: QueryList<ClrTabLink>;
    tabsId: number;
    tabsService: TabsService;
    constructor(ifActiveService: IfActiveService, ifOpenService: IfOpenService, tabsService: TabsService, tabsId: number);
    ngAfterContentInit(): void;
    toggleOverflow(event: any): void;
}

export declare class ClrTabsModule {
}

export declare class ClrTextarea extends WrappedFormControl<ClrTextareaContainer> implements OnInit {
    constructor(vcr: ViewContainerRef, ngControlService: NgControlService, ifErrorService: IfErrorService, control: NgControl, controlClassService: ControlClassService, renderer: Renderer2, el: ElementRef);
    ngOnInit(): void;
    onBlur(): void;
}

export declare class ClrTextareaContainer implements DynamicWrapper, OnDestroy {
    _dynamic: boolean;
    invalid: boolean;
    label: ClrLabel;
    subscriptions: Subscription[];
    constructor(ifErrorService: IfErrorService, layoutService: LayoutService, controlClassService: ControlClassService);
    addGrid(): boolean;
    controlClass(): string;
    ngOnDestroy(): void;
}

export declare class ClrTextareaModule {
}

export declare class ClrTooltip {
}

export declare class ClrTooltipContent extends AbstractPopover {
    position: string;
    size: string;
    constructor(injector: Injector, parentHost: ElementRef);
}

export declare class ClrTooltipModule {
}

export declare class ClrTooltipTrigger {
    constructor(ifOpenService: IfOpenService);
    hideTooltip(): void;
    showTooltip(): void;
}

export declare class ClrTreeNode extends AbstractTreeSelection implements OnDestroy {
    readonly ariaSelected: boolean;
    readonly ariaTreeNodeChildrenRole: string;
    readonly caretDirection: string;
    readonly children: ClrTreeNode[];
    expanded: boolean;
    nodeExpand: Expand;
    nodeId: string;
    nodeIndeterminate: boolean;
    nodeIndeterminateChanged: EventEmitter<boolean>;
    nodeSelected: boolean;
    nodeSelectedChange: EventEmitter<boolean>;
    parent: ClrTreeNode;
    readonly rootAriaMultiSelectable: boolean;
    readonly selectable: boolean;
    readonly state: string;
    readonly treeNodeRole: string;
    treeSelectionService: TreeSelectionService;
    constructor(nodeExpand: Expand, parent: ClrTreeNode, treeSelectionService: TreeSelectionService, nodeId: string);
    activateSelection(): void;
    checkIfChildNodeRegistered(node: ClrTreeNode): boolean;
    indeterminateChanged(): void;
    ngOnDestroy(): void;
    register(node: ClrTreeNode): void;
    selectedChanged(): void;
    toggleExpand(): void;
    unregister(node: ClrTreeNode): void;
}

export declare class ClrTreeViewModule {
}

export declare class ClrVerticalNav implements OnDestroy {
    collapsed: boolean;
    collapsible: boolean;
    readonly hasIcons: boolean;
    readonly hasNavGroups: boolean;
    constructor(_navService: VerticalNavService, _navIconService: VerticalNavIconService, _navGroupRegistrationService: VerticalNavGroupRegistrationService);
    ngOnDestroy(): void;
    toggleByButton(): void;
}

export declare class ClrVerticalNavGroup implements AfterContentInit, OnDestroy {
    expandAnimationState: string;
    expanded: boolean;
    expandedChange: EventEmitter<boolean>;
    userExpandedInput: boolean;
    constructor(_itemExpand: Expand, _navGroupRegistrationService: VerticalNavGroupRegistrationService, _navGroupService: VerticalNavGroupService, _navService: VerticalNavService);
    collapseGroup(): void;
    expandAnimationDone($event: AnimationEvent): void;
    expandGroup(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    toggleExpand(): void;
}

export declare class ClrVerticalNavGroupChildren {
}

export declare class ClrVerticalNavIcon implements OnDestroy {
    constructor(_verticalNavIconService: VerticalNavIconService);
    ngOnDestroy(): void;
}

export declare class ClrVerticalNavLink {
    constructor(_navGroupService: VerticalNavGroupService);
    expandParentNavGroup(): void;
}

export declare class ClrVerticalNavModule {
}

export declare class ClrWizard implements OnInit, OnDestroy, AfterContentInit, DoCheck {
    _open: boolean;
    _openChanged: EventEmitter<boolean>;
    _stopModalAnimations: boolean;
    buttonService: ButtonHubService;
    closable: boolean;
    clrWizardOpen: boolean;
    currentPage: ClrWizardPage;
    currentPageChanged: EventEmitter<any>;
    differ: any;
    disableStepnav: boolean;
    forceForward: boolean;
    /** @deprecated */ readonly ghostPageState: string;
    headerActionService: HeaderActionService;
    headerActions: QueryList<ClrWizardHeaderAction>;
    readonly isFirst: boolean;
    readonly isLast: boolean;
    readonly isStatic: boolean;
    navService: WizardNavigationService;
    onCancel: EventEmitter<any>;
    onMoveNext: EventEmitter<any>;
    onMovePrevious: EventEmitter<any>;
    onReset: EventEmitter<any>;
    pageCollection: PageCollectionService;
    pages: QueryList<ClrWizardPage>;
    /** @deprecated */ showGhostPages: boolean;
    size: string;
    stopCancel: boolean;
    readonly stopModalAnimations: string;
    stopNavigation: boolean;
    stopNext: boolean;
    wizardFinished: EventEmitter<any>;
    constructor(navService: WizardNavigationService, pageCollection: PageCollectionService, buttonService: ButtonHubService, headerActionService: HeaderActionService, elementRef: ElementRef, differs: IterableDiffers);
    cancel(): void;
    checkAndCancel(): void;
    close(): void;
    /** @deprecated */ deactivateGhostPages(): void;
    finish(skipChecksAndEmits?: boolean): void;
    forceFinish(): void;
    forceNext(): void;
    goTo(pageId: string): void;
    modalCancel(): void;
    next(skipChecksAndEmits?: boolean): void;
    ngAfterContentInit(): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    open(): void;
    prev(): void;
    previous(): void;
    reset(): void;
    setGhostPages(deactivateOrNot?: string): void;
    toggle(value: boolean): void;
}

export declare class ClrWizardButton {
    readonly _disabledAttribute: string | null;
    buttonService: ButtonHubService;
    disabled: boolean;
    hidden: boolean;
    readonly isCancel: boolean;
    readonly isDanger: boolean;
    readonly isDisabled: boolean;
    readonly isFinish: boolean;
    readonly isHidden: boolean;
    readonly isNext: boolean;
    readonly isPrevious: boolean;
    readonly isPrimaryAction: boolean;
    navService: WizardNavigationService;
    type: string;
    wasClicked: EventEmitter<string>;
    constructor(navService: WizardNavigationService, buttonService: ButtonHubService);
    click(): void;
}

export declare class ClrWizardCustomTags {
}

export declare class ClrWizardHeaderAction {
    _id: string;
    disabled: boolean;
    headerActionClicked: EventEmitter<string>;
    readonly id: string;
    title: string;
    click(): void;
}

export declare class ClrWizardModule {
}

export declare class ClrWizardPage implements OnInit {
    _buttons: ClrWizardPageButtons;
    _headerActions: ClrWizardPageHeaderActions;
    _id: any;
    buttonService: ButtonHubService;
    readonly buttons: TemplateRef<any>;
    completed: boolean;
    readonly current: boolean;
    customButtonClicked: EventEmitter<string>;
    dangerButtonClicked: EventEmitter<ClrWizardPage>;
    readonly disabled: boolean;
    readonly enabled: boolean;
    finishButtonClicked: EventEmitter<ClrWizardPage>;
    readonly hasButtons: boolean;
    readonly hasHeaderActions: boolean;
    readonly headerActions: TemplateRef<any>;
    readonly id: string;
    readonly navTitle: TemplateRef<any>;
    nextButtonClicked: EventEmitter<ClrWizardPage>;
    nextStepDisabled: boolean;
    nextStepDisabledChange: EventEmitter<boolean>;
    onCommit: EventEmitter<string>;
    onLoad: EventEmitter<string>;
    pageCollection: PageCollectionService;
    pageNavTitle: ClrWizardPageNavTitle;
    pageOnCancel: EventEmitter<ClrWizardPage>;
    pageTitle: ClrWizardPageTitle;
    preventDefault: boolean;
    previousButtonClicked: EventEmitter<ClrWizardPage>;
    readonly previousCompleted: boolean;
    previousStepDisabled: boolean;
    previousStepDisabledChange: EventEmitter<boolean>;
    primaryButtonClicked: EventEmitter<string>;
    readonly readyToComplete: boolean;
    readonly stepItemId: string;
    stopCancel: boolean;
    stopCancelChange: EventEmitter<boolean>;
    stopNext: boolean;
    readonly title: TemplateRef<any>;
    constructor(navService: WizardNavigationService, pageCollection: PageCollectionService, buttonService: ButtonHubService);
    makeCurrent(): void;
    ngOnInit(): void;
}

export declare class ClrWizardPageButtons {
    pageButtonsTemplateRef: TemplateRef<any>;
    constructor(pageButtonsTemplateRef: TemplateRef<any>);
}

export declare class ClrWizardPageHeaderActions {
    pageHeaderActionsTemplateRef: TemplateRef<any>;
    constructor(pageHeaderActionsTemplateRef: TemplateRef<any>);
}

export declare class ClrWizardPageNavTitle {
    pageNavTitleTemplateRef: TemplateRef<any>;
    constructor(pageNavTitleTemplateRef: TemplateRef<any>);
}

export declare class ClrWizardPageTitle {
    pageTitleTemplateRef: TemplateRef<any>;
    constructor(pageTitleTemplateRef: TemplateRef<any>);
}

export declare class ClrWizardStepnav {
    pageService: PageCollectionService;
    constructor(pageService: PageCollectionService);
}

export declare class ClrWizardStepnavItem {
    readonly canNavigate: boolean;
    readonly id: string;
    readonly isComplete: boolean;
    readonly isCurrent: boolean;
    readonly isDisabled: boolean;
    navService: WizardNavigationService;
    page: ClrWizardPage;
    pageCollection: PageCollectionService;
    constructor(navService: WizardNavigationService, pageCollection: PageCollectionService);
    click(): void;
}

export declare class ClrYearpicker implements AfterViewInit {
    readonly calendarYear: number;
    yearRangeModel: YearRangeModel;
    constructor(_dateNavigationService: DateNavigationService, _viewManagerService: ViewManagerService, _datepickerFocusService: DatepickerFocusService, _elRef: ElementRef);
    changeYear(year: number): void;
    currentDecade(): void;
    getTabIndex(year: number): number;
    nextDecade(): void;
    ngAfterViewInit(): void;
    onKeyDown(event: KeyboardEvent): void;
    previousDecade(): void;
}

/** @deprecated */
export declare const CODE_HIGHLIGHT_DIRECTIVES: Type<any>[];

/** @deprecated */
export declare const CodeHighlight: typeof ClrCodeHighlight;

export declare function collapse(): AnimationMetadata[];

/** @deprecated */
export interface Comparator<T> extends ClrDatagridComparatorInterface<T> {
}

export declare const CONDITIONAL_DIRECTIVES: Type<any>[];

export declare const CUSTOM_BUTTON_TYPES: any;

/** @deprecated */
export declare const Datagrid: typeof ClrDatagrid;

/** @deprecated */
export declare const DATAGRID_DIRECTIVES: Type<any>[];

/** @deprecated */
export declare const DatagridActionBar: typeof ClrDatagridActionBar;

/** @deprecated */
export declare const DatagridActionOverflow: typeof ClrDatagridActionOverflow;

/** @deprecated */
export declare const DatagridCell: typeof ClrDatagridCell;

/** @deprecated */
export declare const DatagridColumn: typeof ClrDatagridColumn;

/** @deprecated */
export declare const DatagridColumnToggle: typeof ClrDatagridColumnToggle;

/** @deprecated */
export declare const DatagridFilter: typeof ClrDatagridFilter;

/** @deprecated */
export declare const DatagridFooter: typeof ClrDatagridFooter;

/** @deprecated */
export declare const DatagridHideableColumnDirective: typeof ClrDatagridHideableColumn;

/** @deprecated */
export declare const DatagridItems: typeof ClrDatagridItems;

/** @deprecated */
export declare const DatagridPagination: typeof ClrDatagridPagination;

/** @deprecated */
export declare const DatagridPlaceholder: typeof ClrDatagridPlaceholder;

export declare class DatagridPropertyComparator<T = any> implements ClrDatagridComparatorInterface<T> {
    prop: string;
    constructor(prop: string);
    compare(a: T, b: T): number;
}

export declare class DatagridPropertyStringFilter<T = any> implements ClrDatagridStringFilterInterface<T> {
    exact: boolean;
    prop: string;
    constructor(prop: string, exact?: boolean);
    accepts(item: T, search: string): boolean;
}

/** @deprecated */
export declare const DatagridRow: typeof ClrDatagridRow;

/** @deprecated */
export declare const DatagridRowDetail: typeof ClrDatagridRowDetail;

export declare class DatagridStringFilter<T = any> extends DatagridFilterRegistrar<T, DatagridStringFilterImpl<T>> implements CustomFilter, AfterViewInit {
    customStringFilter: ClrDatagridStringFilterInterface<T> | RegisteredFilter<T, DatagridStringFilterImpl<T>>;
    filterContainer: ClrDatagridFilter<T>;
    filterValueChange: EventEmitter<{}>;
    input: ElementRef;
    open: boolean;
    value: string;
    constructor(filters: FiltersProvider<T>, domAdapter: DomAdapter);
    close(): void;
    ngAfterViewInit(): void;
}

export declare const DEFAULT_BUTTON_TYPES: any;

/** @deprecated */
export declare const Dropdown: typeof ClrDropdown;

/** @deprecated */
export declare const DROPDOWN_DIRECTIVES: Type<any>[];

/** @deprecated */
export declare const DropdownItem: typeof ClrDropdownItem;

/** @deprecated */
export declare const DropdownMenu: typeof ClrDropdownMenu;

/** @deprecated */
export declare const DropdownTrigger: typeof ClrDropdownTrigger;

export declare const EXPAND_DIRECTIVES: Type<any>[];

export declare function fade(opacity?: number): AnimationMetadata[];

export declare function fadeSlide(direction: string): AnimationMetadata[];

/** @deprecated */
export interface Filter<T> extends ClrDatagridFilterInterface<T> {
}

/** @deprecated */
export declare const Header: typeof ClrHeader;

/** @deprecated */
export declare const ICON_DIRECTIVES: Type<any>[];

/** @deprecated */
export declare const IconCustomTag: typeof ClrIconCustomTag;

/** @deprecated */
export declare const LAYOUT_DIRECTIVES: Type<any>[];

/** @deprecated */
export declare const Loading: typeof ClrLoading;

/** @deprecated */
export declare const LOADING_BUTTON_DIRECTIVES: Type<any>[];

/** @deprecated */
export declare const LOADING_DIRECTIVES: Type<any>[];

/** @deprecated */
export declare const LoadingButton: typeof ClrLoadingButton;

export declare abstract class LoadingListener {
    abstract loadingStateChange(state: ClrLoadingState): void;
}

/** @deprecated */
export declare const MainContainer: typeof ClrMainContainer;

export declare class MainContainerWillyWonka extends WillyWonka {
}

/** @deprecated */
export declare const menuPositions: string[];

/** @deprecated */
export declare const Modal: typeof ClrModal;

/** @deprecated */
export declare const MODAL_DIRECTIVES: Type<any>[];

export declare class NavDetectionOompaLoompa extends OompaLoompa {
    readonly flavor: number;
    constructor(cdr: ChangeDetectorRef, willyWonka: MainContainerWillyWonka, responsiveNavService: ResponsiveNavigationService);
}

/** @deprecated */
export declare const NAVIGATION_DIRECTIVES: Type<any>[];

/** @deprecated */
export declare const NavLevelDirective: typeof ClrNavLevel;

/** @deprecated */
export declare const Signpost: typeof ClrSignpost;

/** @deprecated */
export declare const SIGNPOST_DIRECTIVES: Type<any>[];

/** @deprecated */
export declare const SignpostContent: typeof ClrSignpostContent;

/** @deprecated */
export declare const SignpostTrigger: typeof ClrSignpostTrigger;

export declare function slide(direction: string): AnimationMetadata[];

/** @deprecated */
export declare enum SortOrder {
    Unsorted = 0,
    Asc = 1,
    Desc = -1,
}

/** @deprecated */
export declare const STACK_VIEW_DIRECTIVES: Type<any>[];

/** @deprecated */
export declare const StackBlock: typeof ClrStackBlock;

/** @deprecated */
export declare const StackHeader: typeof ClrStackHeader;

/** @deprecated */
export declare const StackInput: typeof ClrStackInput;

/** @deprecated */
export declare const StackSelect: typeof ClrStackSelect;

/** @deprecated */
export declare const StackView: typeof ClrStackView;

/** @deprecated */
export declare const StackViewCustomTags: typeof ClrStackViewCustomTags;

/** @deprecated */
export interface State extends ClrDatagridStateInterface<any> {
}

/** @deprecated */
export interface StringFilter<T> extends ClrDatagridStringFilterInterface<T> {
}

/** @deprecated */
export declare const Tab: typeof ClrTab;

/** @deprecated */
export declare const TabContent: typeof ClrTabContent;

/** @deprecated */
export declare const TabLinkDirective: typeof ClrTabLink;

/** @deprecated */
export declare const TabOverflowContent: typeof ClrTabOverflowContent;

/** @deprecated */
export declare const Tabs: typeof ClrTabs;

/** @deprecated */
export declare const TABS_DIRECTIVES: Type<any>[];

export declare const ToggleService: InjectionToken<any>;

export declare function ToggleServiceProvider(): BehaviorSubject<boolean>;

/** @deprecated */
export declare const Tooltip: typeof ClrTooltip;

/** @deprecated */
export declare const TOOLTIP_DIRECTIVES: Type<any>[];

/** @deprecated */
export declare const TooltipContent: typeof ClrTooltipContent;

/** @deprecated */
export declare const TooltipTrigger: typeof ClrTooltipTrigger;

/** @deprecated */
export declare const TREE_VIEW_DIRECTIVES: Type<any>[];

/** @deprecated */
export declare const TreeNode: typeof ClrTreeNode;

/** @deprecated */
export declare const VERTICAL_NAV_DIRECTIVES: Type<any>[];

/** @deprecated */
export declare const VerticalNav: typeof ClrVerticalNav;

/** @deprecated */
export declare const VerticalNavGroup: typeof ClrVerticalNavGroup;

/** @deprecated */
export declare const VerticalNavGroupChildren: typeof ClrVerticalNavGroupChildren;

/** @deprecated */
export declare const VerticalNavIcon: typeof ClrVerticalNavIcon;

/** @deprecated */
export declare const VerticalNavLink: typeof ClrVerticalNavLink;

/** @deprecated */
export declare const Wizard: typeof ClrWizard;

/** @deprecated */
export declare const WIZARD_DIRECTIVES: any[];

/** @deprecated */
export declare const WizardButton: typeof ClrWizardButton;

/** @deprecated */
export declare const WizardCustomTags: typeof ClrWizardCustomTags;

/** @deprecated */
export declare const WizardHeaderAction: typeof ClrWizardHeaderAction;

/** @deprecated */
export declare const WizardPage: typeof ClrWizardPage;

/** @deprecated */
export declare const WizardPageButtonsDirective: typeof ClrWizardPageButtons;

/** @deprecated */
export declare const WizardPageHeaderActionsDirective: typeof ClrWizardPageHeaderActions;

/** @deprecated */
export declare const WizardPageNavTitleDirective: typeof ClrWizardPageNavTitle;

/** @deprecated */
export declare const WizardPageTitleDirective: typeof ClrWizardPageTitle;

/** @deprecated */
export declare const WizardStepnav: typeof ClrWizardStepnav;

/** @deprecated */
export declare const WizardStepnavItem: typeof ClrWizardStepnavItem;
