export declare class ClarityModule {
}

export declare const CLR_ALERT_DIRECTIVES: Type<any>[];

export declare const CLR_BUTTON_GROUP_DIRECTIVES: Type<any>[];

export declare const CLR_DATAGRID_DIRECTIVES: Type<any>[];

export declare const CLR_DATEPICKER_DIRECTIVES: Type<any>[];

export declare const CLR_DRAG_AND_DROP_DIRECTIVES: Type<any>[];

export declare const CLR_DROPDOWN_DIRECTIVES: Type<any>[];

export declare const CLR_ICON_DIRECTIVES: Type<any>[];

export declare const CLR_LAYOUT_DIRECTIVES: Type<any>[];

export declare const CLR_LOADING_BUTTON_DIRECTIVES: Type<any>[];

export declare const CLR_LOADING_DIRECTIVES: Type<any>[];

export declare const CLR_MENU_POSITIONS: string[];

export declare const CLR_MODAL_DIRECTIVES: Type<any>[];

export declare const CLR_NAVIGATION_DIRECTIVES: Type<any>[];

export declare const CLR_PROGRESS_BAR_DIRECTIVES: Type<any>[];

export declare const CLR_SIGNPOST_DIRECTIVES: Type<any>[];

export declare const CLR_SPINNER_DIRECTIVES: Type<any>[];

export declare const CLR_STACK_VIEW_DIRECTIVES: Type<any>[];

export declare const CLR_TABS_DIRECTIVES: Type<any>[];

export declare const CLR_TOOLTIP_DIRECTIVES: Type<any>[];

export declare const CLR_TREE_VIEW_DIRECTIVES: Type<any>[];

export declare const CLR_VERTICAL_NAV_DIRECTIVES: Type<any>[];

export declare const CLR_WIZARD_DIRECTIVES: any[];

export declare class ClrAccordion implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    multiPanel: boolean;
    panels: QueryList<ClrAccordionPanel>;
    subscriptions: Subscription[];
    constructor(accordionService: AccordionService);
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
}

export declare class ClrAccordionContent {
}

export declare class ClrAccordionDescription {
}

export declare class ClrAccordionPanel implements OnInit, OnChanges {
    readonly AccordionStatus: typeof AccordionStatus;
    accordionDescription: QueryList<ClrAccordionDescription>;
    commonStrings: ClrCommonStringsService;
    disabled: boolean;
    id: string;
    isAccordion: boolean;
    panel: Observable<AccordionPanelModel>;
    panelOpen: boolean;
    panelOpenChange: EventEmitter<boolean>;
    constructor(commonStrings: ClrCommonStringsService, accordionService: AccordionService, ifExpandService: IfExpandService, id: string);
    collapsePanelOnAnimationDone(panel: AccordionPanelModel): void;
    getAccordionContentId(id: string): string;
    getAccordionHeaderId(id: string): string;
    getPanelStateClasses(panel: AccordionPanelModel): string;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    togglePanel(): void;
}

export declare class ClrAccordionTitle {
}

export declare class ClrAlert {
    _closed: boolean;
    _closedChanged: EventEmitter<boolean>;
    readonly alertClass: string;
    alertIconShape: string;
    alertType: string;
    assertive: boolean;
    cdr: ChangeDetectorRef;
    closable: boolean;
    clrCloseButtonAriaLabel: string;
    commonStrings: ClrCommonStringsService;
    iconService: AlertIconAndTypesService;
    isAppLevel: boolean;
    readonly isHidden: boolean;
    isSmall: boolean;
    multiAlertService: MultiAlertService;
    off: boolean;
    polite: boolean;
    readonly setAriaLive: string;
    constructor(iconService: AlertIconAndTypesService, cdr: ChangeDetectorRef, multiAlertService: MultiAlertService, commonStrings: ClrCommonStringsService);
    close(): void;
    open(): void;
}

export declare class ClrAlertItem {
    iconService: AlertIconAndTypesService;
    constructor(iconService: AlertIconAndTypesService);
}

export declare class ClrAlertModule {
}

export declare class ClrAlerts implements AfterContentInit, OnDestroy {
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
    ngOnDestroy(): void;
}

export declare class ClrAlertsPager implements OnInit, OnDestroy {
    commonStrings: ClrCommonStringsService;
    currentAlert: ClrAlert;
    currentAlertChange: EventEmitter<ClrAlert>;
    currentAlertIndex: number;
    currentAlertIndexChange: EventEmitter<number>;
    multiAlertService: MultiAlertService;
    constructor(multiAlertService: MultiAlertService, commonStrings: ClrCommonStringsService);
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
    id: string;
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
    commonStrings: ClrCommonStringsService;
    inlineButtons: ClrButton[];
    menuButtons: ClrButton[];
    menuPosition: string;
    openMenu: boolean;
    popoverPoint: Point;
    constructor(buttonGroupNewService: ButtonInGroupService, elementRef: ElementRef, commonStrings: ClrCommonStringsService);
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

export declare class ClrCheckbox extends WrappedFormControl<ClrCheckboxWrapper> {
    constructor(vcr: ViewContainerRef, injector: Injector, control: NgControl, renderer: Renderer2, el: ElementRef, toggle: string);
    ngOnInit(): void;
}

export declare class ClrCheckboxContainer implements OnDestroy {
    clrInline: boolean | string;
    control: NgControl;
    invalid: boolean;
    label: ClrLabel;
    constructor(ifErrorService: IfErrorService, layoutService: LayoutService, controlClassService: ControlClassService, ngControlService: NgControlService);
    addGrid(): boolean;
    controlClass(): string;
    ngOnDestroy(): void;
    ngOnInit(): void;
}

export declare class ClrCheckboxModule {
}

export declare class ClrCheckboxWrapper implements DynamicWrapper, OnInit, OnDestroy {
    _dynamic: boolean;
    label: ClrLabel;
    toggle: boolean;
    constructor(toggleService: BehaviorSubject<boolean>);
    ngOnDestroy(): void;
    ngOnInit(): void;
}

export declare class ClrCommonFormsModule {
}

export interface ClrCommonStrings {
    alertCloseButtonAriaLabel?: string;
    allColumnsSelected?: string;
    close?: string;
    collapse?: string;
    current?: string;
    currentPage?: string;
    danger?: string;
    datepickerCurrentDecade?: string;
    datepickerCurrentMonth?: string;
    datepickerNextDecade?: string;
    datepickerNextMonth?: string;
    datepickerPreviousDecade?: string;
    datepickerPreviousMonth?: string;
    datepickerSelectMonthText?: string;
    datepickerSelectYearText?: string;
    datepickerToggle?: string;
    daypickerSRCurrentDecadePhrase?: string;
    daypickerSRCurrentMonthPhrase?: string;
    daypickerSRCurrentYearPhrase?: string;
    detailExpandableAriaLabel?: string;
    expand?: string;
    firstPage?: string;
    hide?: string;
    info?: string;
    lastPage?: string;
    loading?: string;
    maxValue?: string;
    minValue?: string;
    modalContentEnd?: string;
    modalContentStart?: string;
    more?: string;
    next?: string;
    nextPage?: string;
    open?: string;
    pickColumns?: string;
    previous?: string;
    previousPage?: string;
    rowActions?: string;
    select?: string;
    selectAll?: string;
    show?: string;
    showColumns?: string;
    showColumnsMenuDescription?: string;
    signpostClose?: string;
    signpostToggle?: string;
    singleActionableAriaLabel?: string;
    singleSelectionAriaLabel?: string;
    sortColumn?: string;
    stackViewChanged?: string;
    success?: string;
    totalPages?: string;
    warning?: string;
}

export declare class ClrCommonStringsService {
    readonly keys: Readonly<ClrCommonStrings>;
    localize(overrides: ClrCommonStrings): void;
    parse(source: string, tokens?: {
        [key: string]: string;
    }): string;
}

export declare class ClrControlError {
    controlIdService: ControlIdService;
    constructor(controlIdService: ControlIdService);
}

export declare class ClrControlHelper {
    controlIdService: ControlIdService;
    constructor(controlIdService: ControlIdService);
}

export declare class ClrDatagrid<T = any> implements AfterContentInit, AfterViewInit, OnDestroy {
    SELECTION_TYPE: typeof SelectionType;
    _calculationRows: ViewContainerRef;
    _displayedRows: ViewContainerRef;
    _projectedCalculationColumns: ViewContainerRef;
    _projectedDisplayColumns: ViewContainerRef;
    allSelected: boolean;
    clrDetailExpandableAriaLabel: string;
    clrDgSingleActionableAriaLabel: string;
    clrDgSingleSelectionAriaLabel: string;
    columns: QueryList<ClrDatagridColumn<T>>;
    commonStrings: ClrCommonStringsService;
    datagridTable: ElementRef;
    expandableRows: ExpandableRowsCount;
    items: Items<T>;
    iterator: ClrDatagridItems<T>;
    loading: boolean;
    placeholder: ClrDatagridPlaceholder<T>;
    refresh: EventEmitter<ClrDatagridStateInterface<T>>;
    rowActionService: RowActionService;
    rowSelectionMode: boolean;
    rows: QueryList<ClrDatagridRow<T>>;
    scrollableColumns: ViewContainerRef;
    selected: T[];
    selectedChanged: EventEmitter<T[]>;
    selection: Selection<T>;
    singleSelected: T;
    singleSelectedChanged: EventEmitter<T>;
    constructor(organizer: DatagridRenderOrganizer, items: Items<T>, expandableRows: ExpandableRowsCount, selection: Selection<T>, rowActionService: RowActionService, stateProvider: StateProvider<T>, displayMode: DisplayModeService, renderer: Renderer2, el: ElementRef, page: Page, commonStrings: ClrCommonStringsService);
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
    commonStrings: ClrCommonStringsService;
    open: boolean;
    openChanged: EventEmitter<boolean>;
    popoverId: string;
    popoverPoint: Point;
    constructor(rowActionService: RowActionService, commonStrings: ClrCommonStringsService, elementRef: ElementRef, platformId: Object, zone: NgZone);
    close(event: MouseEvent): void;
    ngOnDestroy(): void;
    toggle(event: any): void;
}

export declare class ClrDatagridCell implements OnInit {
    readonly _view: any;
    signpost: QueryList<ClrSignpost>;
    constructor(vcr: ViewContainerRef);
    ngOnInit(): void;
}

export declare class ClrDatagridColumn<T = any> extends DatagridFilterRegistrar<T, ClrDatagridFilterInterface<T>> implements OnDestroy, OnInit {
    readonly _view: any;
    readonly ariaSort: "none" | "ascending" | "descending";
    colType: 'string' | 'number';
    commonStrings: ClrCommonStringsService;
    customFilter: boolean;
    field: string;
    filterValue: string | [number, number];
    filterValueChange: EventEmitter<{}>;
    projectedFilter: any;
    sortBy: ClrDatagridComparatorInterface<T> | string;
    sortIcon: any;
    sortOrder: ClrDatagridSortOrder;
    sortOrderChange: EventEmitter<ClrDatagridSortOrder>;
    readonly sortable: boolean;
    sorted: boolean;
    sortedChange: EventEmitter<boolean>;
    updateFilterValue: string | [number, number];
    constructor(_sort: Sort<T>, filters: FiltersProvider<T>, vcr: ViewContainerRef, commonStrings: ClrCommonStringsService);
    ngOnDestroy(): void;
    ngOnInit(): void;
    sort(reverse?: boolean): void;
}

export declare class ClrDatagridColumnToggle {
    anchorPoint: Point;
    columnSwitchId: string;
    commonStrings: ClrCommonStringsService;
    customToggleButton: ClrDatagridColumnToggleButton;
    customToggleTitle: ClrDatagridColumnToggleTitle;
    readonly hasOnlyOneVisibleColumn: boolean;
    readonly hideableColumnStates: ColumnState[];
    open: boolean;
    popoverPoint: Point;
    constructor(commonStrings: ClrCommonStringsService, columnsService: ColumnsService, columnSwitchId: string, platformId: Object, zone: NgZone);
    allColumnsSelected(): void;
    toggleColumnState(columnState: ColumnState, event: boolean): void;
    toggleSwitchPanel(): void;
    trackByFn(index: any): any;
}

export interface ClrDatagridComparatorInterface<T> {
    compare(a: T, b: T): number;
}

export declare class ClrDatagridFilter<T = any> extends DatagridFilterRegistrar<T, ClrDatagridFilterInterface<T>> implements CustomFilter {
    readonly active: boolean;
    anchor: ElementRef;
    anchorPoint: Point;
    commonStrings: ClrCommonStringsService;
    customFilter: ClrDatagridFilterInterface<T> | RegisteredFilter<T, ClrDatagridFilterInterface<T>>;
    open: boolean;
    openChanged: EventEmitter<boolean>;
    popoverOptions: PopoverOptions;
    popoverPoint: Point;
    constructor(_filters: FiltersProvider<T>, commonStrings: ClrCommonStringsService, platformId: Object);
    toggle(): void;
}

export interface ClrDatagridFilterInterface<T, S = any> {
    changes: Observable<any>;
    readonly state?: S;
    accepts(item: T): boolean;
    equals?(other: ClrDatagridFilterInterface<T, any>): boolean;
    isActive(): boolean;
}

export declare class ClrDatagridFooter<T = any> {
    SELECTION_TYPE: typeof SelectionType;
    readonly hasHideableColumns: boolean;
    selection: Selection<T>;
    toggle: ClrDatagridColumnToggle;
    constructor(selection: Selection<T>, columnsService: ColumnsService);
}

export declare class ClrDatagridHideableColumn implements OnDestroy {
    clrDgHidden: boolean;
    clrDgHideableColumn: {
        hidden: boolean;
    };
    hiddenChange: EventEmitter<boolean>;
    constructor(titleTemplateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef, columnsService: ColumnsService, columnState: BehaviorSubject<ColumnState>);
    ngOnDestroy(): void;
    ngOnInit(): void;
}

export declare class ClrDatagridItems<T> implements DoCheck, OnDestroy {
    rawItems: T[];
    template: TemplateRef<NgForOfContext<T>>;
    trackBy: TrackByFunction<T>;
    constructor(template: TemplateRef<NgForOfContext<T>>, differs: IterableDiffers, items: Items, vcr: ViewContainerRef);
    ngDoCheck(): void;
    ngOnDestroy(): void;
}

export declare class ClrDatagridModule {
}

export interface ClrDatagridNumericFilterInterface<T> {
    accepts(item: T, low: number, high: number): boolean;
}

export declare class ClrDatagridPagination implements OnDestroy, OnInit {
    _pageSizeComponent: ClrDatagridPageSize;
    commonStrings: ClrCommonStringsService;
    currentChanged: EventEmitter<number>;
    currentPage: number;
    currentPageInputRef: ElementRef;
    readonly firstItem: number;
    readonly lastItem: number;
    lastPage: number;
    readonly middlePages: number[];
    page: Page;
    pageSize: number;
    totalItems: number;
    constructor(page: Page, commonStrings: ClrCommonStringsService);
    next(): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    previous(): void;
    updateCurrentPage(event: any): void;
}

export declare class ClrDatagridPlaceholder<T = any> {
    readonly emptyDatagrid: boolean;
    constructor(items: Items<T>);
}

export declare class ClrDatagridRow<T = any> implements AfterContentInit, AfterViewInit {
    SELECTION_TYPE: typeof SelectionType;
    _calculatedCells: ViewContainerRef;
    _scrollableCells: ViewContainerRef;
    _stickyCells: ViewContainerRef;
    readonly _view: any;
    checkboxId: string;
    commonStrings: ClrCommonStringsService;
    dgCells: QueryList<ClrDatagridCell>;
    displayCells: boolean;
    expand: DatagridIfExpandService;
    expandAnimation: ClrExpandableAnimation;
    expandAnimationTrigger: boolean;
    expanded: boolean;
    expandedChange: EventEmitter<boolean>;
    globalExpandable: ExpandableRowsCount;
    id: string;
    item: T;
    radioId: string;
    replaced: any;
    rowActionService: RowActionService;
    selected: boolean;
    selectedChanged: EventEmitter<boolean>;
    selection: Selection<T>;
    constructor(selection: Selection<T>, rowActionService: RowActionService, globalExpandable: ExpandableRowsCount, expand: DatagridIfExpandService, displayMode: DisplayModeService, vcr: ViewContainerRef, renderer: Renderer2, el: ElementRef, commonStrings: ClrCommonStringsService);
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    toggle(selected?: boolean): void;
    toggleExpand(): void;
}

export declare class ClrDatagridRowDetail<T = any> implements AfterContentInit, OnDestroy {
    SELECTION_TYPE: typeof SelectionType;
    cells: QueryList<ClrDatagridCell>;
    expand: DatagridIfExpandService;
    expandableRows: ExpandableRowsCount;
    replace: boolean;
    replacedRow: boolean;
    rowActionService: RowActionService;
    selection: Selection;
    constructor(selection: Selection, rowActionService: RowActionService, expand: DatagridIfExpandService, expandableRows: ExpandableRowsCount);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
}

export declare enum ClrDatagridSortOrder {
    UNSORTED = 0,
    ASC = 1,
    DESC = -1
}

export interface ClrDatagridStateInterface<T = any> {
    filters?: any[];
    page?: {
        from?: number;
        to?: number;
        size?: number;
        current?: number;
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
    actionButton: ElementRef;
    commonStrings: ClrCommonStringsService;
    control: NgControl;
    focus: boolean;
    invalid: boolean;
    readonly isEnabled: boolean;
    label: ClrLabel;
    constructor(_ifOpenService: IfOpenService, _dateNavigationService: DateNavigationService, _datepickerEnabledService: DatepickerEnabledService, dateFormControlService: DateFormControlService, commonStrings: ClrCommonStringsService, ifErrorService: IfErrorService, focusService: FocusService, controlClassService: ControlClassService, layoutService: LayoutService, ngControlService: NgControlService);
    addGrid(): boolean;
    close(): void;
    controlClass(): string;
    ngOnDestroy(): void;
    ngOnInit(): void;
    toggleDatepicker(event: MouseEvent): void;
}

export declare class ClrDateInput extends WrappedFormControl<ClrDateContainer> implements OnInit, AfterViewInit, OnDestroy {
    protected control: NgControl;
    date: Date;
    dateChange: EventEmitter<Date>;
    protected el: ElementRef;
    protected index: number;
    readonly inputType: string;
    placeholder: string;
    readonly placeholderText: string;
    protected renderer: Renderer2;
    constructor(viewContainerRef: ViewContainerRef, injector: Injector, el: ElementRef, renderer: Renderer2, control: NgControl, container: ClrDateContainer, dateIOService: DateIOService, dateNavigationService: DateNavigationService, datepickerEnabledService: DatepickerEnabledService, dateFormControlService: DateFormControlService, platformId: Object, focusService: FocusService, datepickerFocusService: DatepickerFocusService);
    ngAfterViewInit(): void;
    ngOnInit(): void;
    onValueChange(target: HTMLInputElement): void;
    setFocusStates(): void;
    triggerValidation(): void;
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
    dayString: string;
    dayView: DayViewModel;
    constructor(_dateNavigationService: DateNavigationService, _ifOpenService: IfOpenService, dateFormControlService: DateFormControlService);
    onDayViewFocus(): void;
    selectDay(): void;
}

export declare class ClrDaypicker {
    readonly ariaLiveMonth: string;
    readonly calendarMonth: string;
    readonly calendarYear: number;
    commonStrings: ClrCommonStringsService;
    readonly monthAttrString: string;
    readonly updateAriaLiveYear: string;
    readonly yearAttrString: string;
    constructor(_viewManagerService: ViewManagerService, _dateNavigationService: DateNavigationService, _localeHelperService: LocaleHelperService, commonStrings: ClrCommonStringsService);
    changeToMonthView(): void;
    changeToYearView(): void;
    currentMonth(): void;
    nextMonth(): void;
    previousMonth(): void;
}

export declare class ClrDragAndDropModule {
}

export declare class ClrDragEvent<T> {
    dragDataTransfer: T;
    dragPosition: DragPointPosition;
    dropPointPosition: {
        pageX: number;
        pageY: number;
    };
    group: string | string[];
    constructor(dragEvent: DragEventInterface<T>);
}

export declare class ClrDraggable<T> implements AfterContentInit, OnDestroy {
    customGhost: ClrIfDragged<T>;
    dataTransfer: T;
    dragEndEmitter: EventEmitter<ClrDragEvent<T>>;
    dragMoveEmitter: EventEmitter<ClrDragEvent<T>>;
    dragOn: boolean;
    dragStartEmitter: EventEmitter<ClrDragEvent<T>>;
    group: string | string[];
    constructor(el: ElementRef, dragEventListener: DragEventListenerService<T>, dragHandleRegistrar: DragHandleRegistrarService<T>, viewContainerRef: ViewContainerRef, cfr: ComponentFactoryResolver, injector: Injector, draggableSnapshot: DraggableSnapshotService<T>, globalDragMode: GlobalDragModeService);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
}

export declare class ClrDraggableGhost<T> implements OnDestroy {
    leaveAnimConfig: {
        value: number;
        params: {
            top: string;
            left: string;
        };
    };
    constructor(el: ElementRef, dragEventListener: DragEventListenerService<T>, draggableSnapshot: DraggableSnapshotService<T>, renderer: Renderer2, ngZone: NgZone);
    ngOnDestroy(): void;
}

export declare class ClrDragHandle<T> implements OnDestroy {
    constructor(el: ElementRef, dragHandleRegistrar: DragHandleRegistrarService<T>);
    ngOnDestroy(): void;
}

export declare class ClrDropdown implements OnDestroy {
    ifOpenService: IfOpenService;
    isMenuClosable: boolean;
    parent: ClrDropdown;
    constructor(parent: ClrDropdown, ifOpenService: IfOpenService, cdr: ChangeDetectorRef, dropdownService: RootDropdownService);
    ngOnDestroy(): void;
}

export declare class ClrDropdownItem implements AfterViewInit {
    disabled: boolean | string;
    disabledDeprecated: boolean | string;
    setByDeprecatedDisabled: boolean;
    constructor(dropdown: ClrDropdown, el: ElementRef<HTMLElement>, _dropdownService: RootDropdownService, renderer: Renderer2, focusableItem: FocusableItem);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onDropdownItemClick(): void;
}

export declare class ClrDropdownMenu extends AbstractPopover implements AfterContentInit, OnDestroy {
    items: QueryList<FocusableItem>;
    position: string;
    constructor(injector: Injector, parentHost: ElementRef<HTMLElement>, nested: ClrDropdownMenu, focusHandler: DropdownFocusHandler);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
}

export declare class ClrDropdownModule {
}

export declare class ClrDropdownTrigger {
    readonly active: boolean;
    isRootLevelToggle: boolean;
    constructor(dropdown: ClrDropdown, ifOpenService: IfOpenService, el: ElementRef<HTMLElement>, focusHandler: DropdownFocusHandler);
    onDropdownTriggerClick(event: any): void;
}

export declare class ClrDroppable<T> implements OnInit, OnDestroy {
    dragEndEmitter: EventEmitter<ClrDragEvent<T>>;
    dragEnterEmitter: EventEmitter<ClrDragEvent<T>>;
    dragLeaveEmitter: EventEmitter<ClrDragEvent<T>>;
    dragMoveEmitter: EventEmitter<ClrDragEvent<T>>;
    dragStartEmitter: EventEmitter<ClrDragEvent<T>>;
    dropEmitter: EventEmitter<ClrDragEvent<T>>;
    dropTolerance: number | string | ClrDropToleranceInterface;
    group: string | string[];
    isDraggableOver: boolean;
    constructor(el: ElementRef, eventBus: DragAndDropEventBusService<T>, domAdapter: DomAdapter, renderer: Renderer2);
    ngOnDestroy(): void;
    ngOnInit(): void;
}

export interface ClrDropToleranceInterface {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
}

export declare class ClrEmphasisModule {
}

export declare class ClrExpandableAnimation {
    clrExpandTrigger: any;
    readonly expandAnimation: {
        value: any;
        params: {
            startHeight: number;
        };
    };
    startHeight: number;
    constructor(element: ElementRef, domAdapter: DomAdapter);
    animationDone(): void;
    updateStartHeight(): void;
}

export declare class ClrForm {
    layoutService: LayoutService;
    constructor(layoutService: LayoutService, markControlService: MarkControlService);
    markAsDirty(): void;
    markAsTouched(): void;
}

export declare class ClrFormsModule {
}

export declare class ClrHeader implements OnDestroy {
    commonStrings: ClrCommonStringsService;
    isNavLevel1OnPage: boolean;
    isNavLevel2OnPage: boolean;
    openNavLevel: number;
    responsiveNavCodes: typeof ResponsiveNavCodes;
    constructor(responsiveNavService: ResponsiveNavigationService, commonStrings: ClrCommonStringsService);
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

export declare class ClrIfDragged<T> implements OnDestroy {
    constructor(template: TemplateRef<any>, container: ViewContainerRef, dragEventListener: DragEventListenerService<T>);
    ngOnDestroy(): void;
}

export declare class ClrIfError {
    error: string;
    constructor(ifErrorService: IfErrorService, ngControlService: NgControlService, template: TemplateRef<any>, container: ViewContainerRef);
    ngOnDestroy(): void;
}

export declare class ClrIfExpanded implements OnInit, OnDestroy {
    expanded: boolean;
    expandedChange: EventEmitter<boolean>;
    constructor(template: TemplateRef<any>, container: ViewContainerRef, el: ElementRef, renderer: Renderer2, expand: IfExpandService);
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

export declare class ClrInput extends WrappedFormControl<ClrInputContainer> {
    protected index: number;
    constructor(vcr: ViewContainerRef, injector: Injector, control: NgControl, renderer: Renderer2, el: ElementRef);
}

export declare class ClrInputContainer implements DynamicWrapper, OnDestroy {
    _dynamic: boolean;
    control: NgControl;
    invalid: boolean;
    label: ClrLabel;
    constructor(ifErrorService: IfErrorService, layoutService: LayoutService, controlClassService: ControlClassService, ngControlService: NgControlService);
    addGrid(): boolean;
    controlClass(): string;
    ngOnDestroy(): void;
}

export declare class ClrInputModule {
}

export declare class ClrLabel implements OnInit, OnDestroy {
    forAttr: string;
    constructor(controlIdService: ControlIdService, layoutService: LayoutService, ngControlService: NgControlService, renderer: Renderer2, el: ElementRef);
    disableGrid(): void;
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
    ERROR = 3
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
    commonStrings: ClrCommonStringsService;
    focusTrap: FocusTrapDirective;
    modalId: string;
    modalTitle: ElementRef<HTMLDivElement>;
    size: string;
    skipAnimation: string;
    staticBackdrop: boolean;
    stopClose: boolean;
    constructor(_scrollingService: ScrollingService, commonStrings: ClrCommonStringsService, platformId: Object, modalId: string);
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
    protected index: number;
    constructor(vcr: ViewContainerRef, injector: Injector, control: NgControl, renderer: Renderer2, el: ElementRef, focusService: FocusService, toggleService: BehaviorSubject<boolean>);
    triggerFocus(): void;
    triggerValidation(): void;
}

export declare class ClrPasswordContainer implements DynamicWrapper, OnDestroy {
    _dynamic: boolean;
    clrToggle: boolean;
    commonStrings: ClrCommonStringsService;
    control: NgControl;
    focus: boolean;
    focusService: FocusService;
    invalid: boolean;
    label: ClrLabel;
    show: boolean;
    constructor(ifErrorService: IfErrorService, layoutService: LayoutService, controlClassService: ControlClassService, focusService: FocusService, ngControlService: NgControlService, toggleService: BehaviorSubject<boolean>, commonStrings: ClrCommonStringsService);
    addGrid(): boolean;
    controlClass(): string;
    ngOnDestroy(): void;
    toggle(): void;
}

export declare class ClrPasswordModule {
}

export declare class ClrPopoverModule {
}

export declare class ClrProgressBar {
    readonly ariaLive: "assertive" | "off" | "polite";
    assertive: boolean;
    clrDanger: boolean | string;
    clrFade: boolean | string;
    clrFlash: boolean | string;
    clrFlashDanger: boolean | string;
    clrLabeled: boolean | string;
    clrLoop: boolean | string;
    clrSuccess: boolean | string;
    readonly dangerClass: boolean;
    readonly displayValue: string;
    displayval: string;
    externalId: string;
    readonly fadeClass: boolean;
    readonly flashClass: boolean;
    readonly flashDangerClass: boolean;
    id: string;
    readonly labeledClass: boolean;
    readonly loopClass: boolean;
    max: number;
    off: boolean;
    readonly progressClass: boolean;
    readonly successClass: boolean;
    value: number;
    displayAriaLive(): boolean;
}

export declare class ClrProgressBarModule {
}

export declare class ClrRadio extends WrappedFormControl<ClrRadioWrapper> {
    constructor(vcr: ViewContainerRef, injector: Injector, control: NgControl, renderer: Renderer2, el: ElementRef);
}

export declare class ClrRadioContainer implements OnDestroy {
    clrInline: boolean | string;
    control: NgControl;
    invalid: boolean;
    label: ClrLabel;
    constructor(ifErrorService: IfErrorService, layoutService: LayoutService, controlClassService: ControlClassService, ngControlService: NgControlService);
    addGrid(): boolean;
    controlClass(): string;
    ngOnDestroy(): void;
}

export declare class ClrRadioModule {
}

export declare class ClrRadioWrapper implements DynamicWrapper, OnInit {
    _dynamic: boolean;
    label: ClrLabel;
    ngOnInit(): void;
}

export declare class ClrRecursiveForOf<T> implements OnChanges, OnDestroy {
    getChildren: (node: T) => AsyncArray<T>;
    nodes: T | T[];
    constructor(template: TemplateRef<ClrRecursiveForOfContext<T>>, featuresService: TreeFeaturesService<T>, cdr: ChangeDetectorRef);
    ngOnChanges(): void;
    ngOnDestroy(): void;
}

export interface ClrRecursiveForOfContext<T> {
    $implicit: T;
    clrModel: TreeNodeModel<T>;
}

export declare class ClrSelect extends WrappedFormControl<ClrSelectContainer> {
    protected index: number;
    constructor(vcr: ViewContainerRef, injector: Injector, control: NgControl, renderer: Renderer2, el: ElementRef);
}

export declare class ClrSelectContainer implements DynamicWrapper, OnDestroy {
    _dynamic: boolean;
    control: NgControl;
    invalid: boolean;
    label: ClrLabel;
    multiple: SelectMultipleControlValueAccessor;
    constructor(ifErrorService: IfErrorService, layoutService: LayoutService, controlClassService: ControlClassService, ngControlService: NgControlService);
    addGrid(): boolean;
    controlClass(): string;
    ngOnDestroy(): void;
    wrapperClass(): "clr-multiselect-wrapper" | "clr-select-wrapper";
}

export declare enum ClrSelectedState {
    UNSELECTED = 0,
    SELECTED = 1,
    INDETERMINATE = 2
}

export declare class ClrSelectModule {
}

export declare class ClrSignpost {
    commonStrings: ClrCommonStringsService;
    customTrigger: ClrSignpostTrigger;
    useCustomTrigger: boolean;
    constructor(commonStrings: ClrCommonStringsService);
}

export declare class ClrSignpostContent extends AbstractPopover {
    commonStrings: ClrCommonStringsService;
    position: string;
    signpostContentId: string;
    constructor(injector: Injector, parentHost: ElementRef, commonStrings: ClrCommonStringsService, signpostContentId: string, signpostIdService: SignpostIdService);
    close(): void;
}

export declare class ClrSignpostModule {
}

export declare class ClrSignpostTrigger implements OnDestroy {
    ariaControl: string;
    ariaExpanded: boolean;
    commonStrings: ClrCommonStringsService;
    constructor(ifOpenService: IfOpenService, renderer: Renderer2, el: ElementRef, commonStrings: ClrCommonStringsService, signpostIdService: SignpostIdService, platformId: Object);
    ngOnDestroy(): void;
    onSignpostTriggerClick(event: Event): void;
}

export declare class ClrSpinner {
    assertive: boolean;
    clrInline: boolean | string;
    clrInverse: boolean | string;
    clrMedium: boolean | string;
    clrSmall: boolean | string;
    readonly inlineClass: boolean;
    readonly inverseClass: boolean;
    readonly mediumClass: boolean;
    off: boolean;
    readonly setAriaLive: "assertive" | "off" | "polite";
    readonly smallClass: boolean;
    readonly spinnerClass: boolean;
}

export declare class ClrSpinnerModule {
}

export declare class ClrStackBlock implements OnInit {
    readonly ariaExpanded: string;
    readonly caretDirection: string;
    readonly caretTitle: string;
    commonStrings: ClrCommonStringsService;
    expandable: boolean;
    expanded: boolean;
    expandedChange: EventEmitter<boolean>;
    focused: boolean;
    readonly getChangedValue: boolean;
    readonly onStackLabelFocus: boolean;
    readonly role: string;
    setChangedValue: boolean;
    readonly tabIndex: string;
    uniqueId: string;
    constructor(parent: ClrStackBlock, uniqueId: string, commonStrings: ClrCommonStringsService);
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

export declare class ClrStepButton implements OnInit {
    submitButton: boolean;
    type: ClrStepButtonType | string;
    constructor(clrStep: ClrStepperPanel, stepperService: StepperService);
    navigateToNextPanel(): void;
    ngOnInit(): void;
}

export declare enum ClrStepButtonType {
    Next = "next",
    Submit = "submit"
}

export declare class ClrStepper implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    form: FormGroupDirective | NgForm;
    initialPanel: string;
    panels: QueryList<ClrStepperPanel>;
    subscriptions: Subscription[];
    constructor(formGroup: FormGroupDirective, ngForm: NgForm, stepperService: StepperService);
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
}

export declare class ClrStepperPanel extends ClrAccordionPanel implements OnInit {
    commonStrings: ClrCommonStringsService;
    readonly formGroup: import("@angular/forms").FormGroup;
    headerButton: ElementRef;
    id: string;
    isAccordion: boolean;
    constructor(platformId: Object, commonStrings: ClrCommonStringsService, formGroupName: FormGroupName, ngModelGroup: NgModelGroup, stepperService: StepperService, ifExpandService: IfExpandService, id: string);
    ngOnDestroy(): void;
    ngOnInit(): void;
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

export declare class ClrTabContent implements OnDestroy {
    readonly active: boolean;
    readonly ariaLabelledBy: string;
    id: number;
    ifActiveService: IfActiveService;
    tabContentId: string;
    constructor(ifActiveService: IfActiveService, id: number, ariaService: AriaService, tabsService: TabsService);
    ngOnDestroy(): void;
}

export declare class ClrTabLink {
    readonly active: boolean;
    readonly addLinkClasses: boolean;
    readonly ariaControls: string;
    ifActiveService: IfActiveService;
    inOverflow: boolean;
    tabLinkId: string;
    tabsId: number;
    templateRefContainer: TemplateRefContainer;
    constructor(ifActiveService: IfActiveService, id: number, ariaService: AriaService, el: ElementRef, cfr: ComponentFactoryResolver, viewContainerRef: ViewContainerRef, tabsService: TabsService, tabsId: number);
    activate(): void;
}

export declare class ClrTabOverflowContent extends AbstractPopover {
    constructor(injector: Injector, parentHost: ElementRef);
}

export declare class ClrTabs implements AfterContentInit, OnDestroy {
    readonly activeTabInOverflow: boolean;
    commonStrings: ClrCommonStringsService;
    ifActiveService: IfActiveService;
    ifOpenService: IfOpenService;
    readonly isVertical: boolean;
    layout: TabsLayout;
    readonly tabIds: string;
    readonly tabLinkDirectives: ClrTabLink[];
    tabsId: number;
    tabsService: TabsService;
    constructor(ifActiveService: IfActiveService, ifOpenService: IfOpenService, tabsService: TabsService, tabsId: number, commonStrings: ClrCommonStringsService);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    toggleOverflow(event: any): void;
}

export declare class ClrTabsModule {
}

export declare class ClrTextarea extends WrappedFormControl<ClrTextareaContainer> {
    protected index: number;
    constructor(vcr: ViewContainerRef, injector: Injector, control: NgControl, renderer: Renderer2, el: ElementRef);
}

export declare class ClrTextareaContainer implements DynamicWrapper, OnDestroy {
    _dynamic: boolean;
    control: NgControl;
    invalid: boolean;
    label: ClrLabel;
    constructor(ifErrorService: IfErrorService, layoutService: LayoutService, controlClassService: ControlClassService, ngControlService: NgControlService);
    addGrid(): boolean;
    controlClass(): string;
    ngOnDestroy(): void;
}

export declare class ClrTextareaModule {
}

export declare class ClrTooltip {
}

export declare class ClrTooltipContent extends AbstractPopover {
    id: string;
    position: string;
    size: string;
    uniqueId: string;
    constructor(injector: Injector, parentHost: ElementRef, uniqueId: string, tooltipIdService: TooltipIdService);
}

export declare class ClrTooltipModule {
}

export declare class ClrTooltipTrigger {
    ariaDescribedBy: any;
    constructor(ifOpenService: IfOpenService, tooltipIdService: TooltipIdService);
    hideTooltip(): void;
    ngOnDestroy(): void;
    showTooltip(): void;
}

export declare class ClrTree<T> {
    featuresService: TreeFeaturesService<T>;
    lazy: boolean;
    constructor(featuresService: TreeFeaturesService<T>);
}

export declare class ClrTreeNode<T> implements OnInit, OnDestroy {
    STATES: typeof ClrSelectedState;
    _model: TreeNodeModel<T>;
    readonly ariaSelected: boolean;
    commonStrings: ClrCommonStringsService;
    expandService: IfExpandService;
    expandable: boolean | undefined;
    expanded: boolean;
    expandedChange: EventEmitter<boolean>;
    featuresService: TreeFeaturesService<T>;
    nodeId: string;
    readonly rootAriaMultiSelectable: boolean;
    selected: ClrSelectedState | boolean;
    selectedChange: EventEmitter<ClrSelectedState>;
    readonly treeNodeRole: string;
    constructor(nodeId: string, parent: ClrTreeNode<T>, featuresService: TreeFeaturesService<T>, expandService: IfExpandService, commonStrings: ClrCommonStringsService, injector: Injector);
    isExpandable(): boolean;
    ngOnDestroy(): void;
    ngOnInit(): void;
}

export declare class ClrTreeViewModule {
}

export declare class ClrVerticalNav implements OnDestroy {
    collapsed: boolean;
    collapsible: boolean;
    commonStrings: ClrCommonStringsService;
    readonly hasIcons: boolean;
    readonly hasNavGroups: boolean;
    constructor(_navService: VerticalNavService, _navIconService: VerticalNavIconService, _navGroupRegistrationService: VerticalNavGroupRegistrationService, commonStrings: ClrCommonStringsService);
    ngOnDestroy(): void;
    toggleByButton(): void;
}

export declare class ClrVerticalNavGroup implements AfterContentInit, OnDestroy {
    commonStrings: ClrCommonStringsService;
    expandAnimationState: string;
    expanded: boolean;
    expandedChange: EventEmitter<boolean>;
    userExpandedInput: boolean;
    constructor(_itemExpand: IfExpandService, _navGroupRegistrationService: VerticalNavGroupRegistrationService, _navGroupService: VerticalNavGroupService, _navService: VerticalNavService, commonStrings: ClrCommonStringsService);
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

export declare class ClrWizard implements OnDestroy, AfterContentInit, DoCheck {
    _open: boolean;
    _openChanged: EventEmitter<boolean>;
    _stopModalAnimations: boolean;
    buttonService: ButtonHubService;
    closable: boolean;
    clrWizardOpen: boolean;
    currentPage: ClrWizardPage;
    currentPageChanged: EventEmitter<any>;
    disableStepnav: boolean;
    forceForward: boolean;
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
    size: string;
    stopCancel: boolean;
    readonly stopModalAnimations: string;
    stopNavigation: boolean;
    stopNext: boolean;
    wizardFinished: EventEmitter<any>;
    wizardTitle: ElementRef;
    constructor(platformId: Object, navService: WizardNavigationService, pageCollection: PageCollectionService, buttonService: ButtonHubService, headerActionService: HeaderActionService, elementRef: ElementRef, differs: IterableDiffers);
    cancel(): void;
    checkAndCancel(): void;
    close(): void;
    finish(skipChecksAndEmits?: boolean): void;
    forceFinish(): void;
    forceNext(): void;
    goTo(pageId: string): void;
    modalCancel(): void;
    next(skipChecksAndEmits?: boolean): void;
    ngAfterContentInit(): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
    open(): void;
    previous(): void;
    reset(): void;
    toggle(open: boolean): void;
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
    readonly ariaLiveDecadeText: string;
    readonly calendarYear: number;
    commonStrings: ClrCommonStringsService;
    yearRangeModel: YearRangeModel;
    constructor(_dateNavigationService: DateNavigationService, _viewManagerService: ViewManagerService, _datepickerFocusService: DatepickerFocusService, _elRef: ElementRef, commonStrings: ClrCommonStringsService);
    changeYear(year: number): void;
    currentDecade(): void;
    getTabIndex(year: number): number;
    nextDecade(): void;
    ngAfterViewInit(): void;
    onKeyDown(event: KeyboardEvent): void;
    previousDecade(): void;
}

export declare function collapse(): AnimationMetadata[];

export declare const CONDITIONAL_DIRECTIVES: Type<any>[];

export declare const CUSTOM_BUTTON_TYPES: any;

export declare class DatagridNumericFilter<T = any> extends DatagridFilterRegistrar<T, DatagridNumericFilterImpl<T>> implements CustomFilter, AfterViewInit {
    commonStrings: ClrCommonStringsService;
    customNumericFilter: ClrDatagridNumericFilterInterface<T> | RegisteredFilter<T, DatagridNumericFilterImpl<T>>;
    filterContainer: ClrDatagridFilter<T>;
    filterValueChange: EventEmitter<{}>;
    high: number | string;
    input: ElementRef;
    low: number | string;
    open: boolean;
    value: [number, number];
    constructor(filters: FiltersProvider<T>, domAdapter: DomAdapter, commonStrings: ClrCommonStringsService);
    close(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}

export declare class DatagridPropertyComparator<T = any> implements ClrDatagridComparatorInterface<T> {
    prop: string;
    constructor(prop: string);
    compare(a: T, b: T): number;
}

export declare class DatagridPropertyNumericFilter<T = any> implements ClrDatagridNumericFilterInterface<T> {
    exact: boolean;
    prop: string;
    constructor(prop: string, exact?: boolean);
    accepts(item: T, low: number, high: number): boolean;
}

export declare class DatagridPropertyStringFilter<T = any> implements ClrDatagridStringFilterInterface<T> {
    exact: boolean;
    prop: string;
    constructor(prop: string, exact?: boolean);
    accepts(item: T, search: string): boolean;
}

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

export declare const EXPANDABLE_ANIMATION_DIRECTIVES: Type<any>[];

export declare function fade(opacity?: number): AnimationMetadata[];

export declare function fadeSlide(direction: string): AnimationMetadata[];

export declare const IS_TOGGLE: InjectionToken<BehaviorSubject<boolean>>;

export declare const IS_TOGGLE_PROVIDER: {
    provide: InjectionToken<BehaviorSubject<boolean>>;
    useFactory: typeof isToggleFactory;
};

export declare function isToggleFactory(): BehaviorSubject<boolean>;

export declare abstract class LoadingListener {
    abstract loadingStateChange(state: ClrLoadingState): void;
}

export declare class MainContainerWillyWonka extends WillyWonka {
}

export declare class NavDetectionOompaLoompa extends OompaLoompa {
    readonly flavor: number;
    constructor(cdr: ChangeDetectorRef, willyWonka: MainContainerWillyWonka, responsiveNavService: ResponsiveNavigationService);
}

export declare function slide(direction: string): AnimationMetadata[];

export declare const TOGGLE_SERVICE: InjectionToken<BehaviorSubject<boolean>>;

export declare const TOGGLE_SERVICE_PROVIDER: {
    provide: InjectionToken<BehaviorSubject<boolean>>;
    useFactory: typeof ToggleServiceFactory;
};

export declare function ToggleServiceFactory(): BehaviorSubject<boolean>;
