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

export declare abstract class ClrAbstractContainer implements DynamicWrapper, OnDestroy {
    _dynamic: boolean;
    control: NgControl;
    protected controlClassService: ControlClassService;
    protected ifErrorService: IfErrorService;
    invalid: boolean;
    label: ClrLabel;
    protected layoutService: LayoutService;
    protected ngControlService: NgControlService;
    protected subscriptions: Subscription[];
    constructor(ifErrorService: IfErrorService, layoutService: LayoutService, controlClassService: ControlClassService, ngControlService: NgControlService);
    addGrid(): boolean;
    controlClass(): string;
    ngOnDestroy(): void;
}

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

export declare class ClrAccordionModule {
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

export declare class ClrAlert implements OnInit, OnDestroy, AfterViewInit {
    _closed: boolean;
    _closedChanged: EventEmitter<boolean>;
    get alertClass(): string;
    set alertIconShape(value: string);
    alertTexts: QueryList<ElementRef>;
    set alertType(val: string);
    get alertType(): string;
    get ariaLive(): ClrAriaLivePoliteness;
    assertive: boolean;
    closable: boolean;
    clrCloseButtonAriaLabel: string;
    set hidden(value: boolean);
    get hidden(): boolean;
    isAppLevel: boolean;
    isSmall: boolean;
    off: boolean;
    polite: boolean;
    constructor(iconService: AlertIconAndTypesService, cdr: ChangeDetectorRef, multiAlertService: MultiAlertService, commonStrings: ClrCommonStringsService, ariaLiveService: ClrAriaLiveService);
    close(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    open(): void;
}

export declare class ClrAlertItem {
    iconService: AlertIconAndTypesService;
    constructor(iconService: AlertIconAndTypesService);
}

export declare class ClrAlertModule {
}

export declare class ClrAlerts implements AfterContentInit, OnDestroy {
    set _inputCurrentIndex(index: number);
    get alerts(): ClrAlert[];
    set allAlerts(value: QueryList<ClrAlert>);
    set currentAlert(alert: ClrAlert);
    get currentAlert(): ClrAlert;
    currentAlertChange: EventEmitter<ClrAlert>;
    set currentAlertIndex(index: number);
    get currentAlertIndex(): number;
    currentAlertIndexChange: EventEmitter<number>;
    get currentAlertType(): string;
    multiAlertService: MultiAlertService;
    constructor(multiAlertService: MultiAlertService);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
}

export declare class ClrAlertsPager implements OnInit, OnDestroy {
    commonStrings: ClrCommonStringsService;
    set currentAlert(alert: ClrAlert);
    get currentAlert(): ClrAlert;
    currentAlertChange: EventEmitter<ClrAlert>;
    set currentAlertIndex(index: number);
    get currentAlertIndex(): number;
    currentAlertIndexChange: EventEmitter<number>;
    multiAlertService: MultiAlertService;
    constructor(multiAlertService: MultiAlertService, commonStrings: ClrCommonStringsService);
    ngOnDestroy(): void;
    ngOnInit(): void;
    pageDown(): void;
    pageUp(): void;
}

export declare class ClrAlertText {
}

export declare enum ClrAlignment {
    START = 0,
    CENTER = 0.5,
    END = 1
}

export declare enum ClrAriaLivePoliteness {
    off = "off",
    polite = "polite",
    assertive = "assertive"
}

export declare class ClrAriaLiveService implements OnDestroy {
    get id(): string;
    constructor(ngZone: NgZone, _document: any, platformId: any);
    announce(message: string | HTMLElement, politeness?: ClrAriaLivePoliteness): void;
    ngOnDestroy(): void;
}

export declare enum ClrAxis {
    VERTICAL = 0,
    HORIZONTAL = 1
}

export declare class ClrButton implements LoadingListener {
    _click: EventEmitter<boolean>;
    buttonInGroupService: ButtonInGroupService;
    get classNames(): string;
    set classNames(value: string);
    get disabled(): any;
    set disabled(value: any);
    get id(): string;
    set id(value: string);
    get inMenu(): boolean;
    set inMenu(value: boolean);
    loading: boolean;
    get name(): string;
    set name(value: string);
    templateRef: TemplateRef<ClrButton>;
    get type(): string;
    set type(value: string);
    constructor(buttonInGroupService: ButtonInGroupService, toggleService: ClrPopoverToggleService);
    emitClick($event: Event): void;
    loadingStateChange(state: ClrLoadingState): void;
    ngAfterViewInit(): void;
}

export declare class ClrButtonGroup {
    buttonGroupNewService: ButtonInGroupService;
    buttons: QueryList<ClrButton>;
    commonStrings: ClrCommonStringsService;
    inlineButtons: ClrButton[];
    menuButtons: ClrButton[];
    get menuPosition(): string;
    set menuPosition(pos: string);
    get open(): boolean;
    popoverId: string;
    popoverPosition: ClrPopoverPosition;
    constructor(buttonGroupNewService: ButtonInGroupService, toggleService: ClrPopoverToggleService, popoverId: string, commonStrings: ClrCommonStringsService);
    getMoveIndex(buttonToMove: ClrButton): number;
    initializeButtons(): void;
    ngAfterContentInit(): void;
    rearrangeButton(button: ClrButton): void;
}

export declare class ClrButtonGroupModule {
}

export declare class ClrButtonModule {
}

export declare class ClrCalendar implements OnDestroy {
    get calendar(): CalendarModel;
    calendarViewModel: CalendarViewModel;
    get focusedDay(): DayModel;
    get localeDays(): ReadonlyArray<ClrDayOfWeek>;
    get selectedDay(): DayModel;
    get today(): DayModel;
    constructor(_localeHelperService: LocaleHelperService, _dateNavigationService: DateNavigationService, _datepickerFocusService: DatepickerFocusService, _dateIOService: DateIOService, _elRef: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onKeyDown(event: KeyboardEvent): void;
}

export declare class ClrCheckbox extends WrappedFormControl<ClrCheckboxWrapper> {
    constructor(vcr: ViewContainerRef, injector: Injector, control: NgControl, renderer: Renderer2, el: ElementRef, toggle: string);
    ngOnInit(): void;
}

export declare class ClrCheckboxContainer extends ClrAbstractContainer {
    set clrInline(value: boolean | string);
    get clrInline(): boolean | string;
    protected controlClassService: ControlClassService;
    protected ifErrorService: IfErrorService;
    protected layoutService: LayoutService;
    protected ngControlService: NgControlService;
    constructor(ifErrorService: IfErrorService, layoutService: LayoutService, controlClassService: ControlClassService, ngControlService: NgControlService);
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
    alertCloseButtonAriaLabel: string;
    allColumnsSelected: string;
    close: string;
    collapse: string;
    current: string;
    currentPage: string;
    danger: string;
    datagridFilterAriaLabel?: string;
    dategridExpandableBeginningOf?: string;
    dategridExpandableEndOf?: string;
    dategridExpandableRowContent?: string;
    dategridExpandableRowsHelperText?: string;
    datepickerCurrentDecade: string;
    datepickerCurrentMonth: string;
    datepickerNextDecade: string;
    datepickerNextMonth: string;
    datepickerPreviousDecade: string;
    datepickerPreviousMonth: string;
    datepickerSelectMonthText: string;
    datepickerSelectYearText: string;
    datepickerToggle: string;
    daypickerSRCurrentDecadePhrase: string;
    daypickerSRCurrentMonthPhrase: string;
    daypickerSRCurrentYearPhrase: string;
    detailExpandableAriaLabel: string;
    detailPaneEnd: string;
    detailPaneStart: string;
    expand: string;
    firstPage: string;
    formErrorSummary: string;
    hide: string;
    info: string;
    lastPage: string;
    loading: string;
    maxValue: string;
    minValue: string;
    modalContentEnd: string;
    modalContentStart: string;
    more: string;
    next: string;
    nextPage: string;
    open: string;
    pickColumns: string;
    previous: string;
    previousPage: string;
    rowActions: string;
    select: string;
    selectAll: string;
    show: string;
    showColumns: string;
    showColumnsMenuDescription: string;
    signpostClose: string;
    signpostToggle: string;
    singleActionableAriaLabel: string;
    singleSelectionAriaLabel: string;
    sortColumn: string;
    stackViewChanged: string;
    success: string;
    timelineStepCurrent: string;
    timelineStepError: string;
    timelineStepNotStarted: string;
    timelineStepProcessing: string;
    timelineStepSuccess: string;
    totalPages: string;
    verticalNavGroupToggle: string;
    verticalNavToggle: string;
    warning: string;
}

export declare class ClrCommonStringsService {
    get keys(): Readonly<ClrCommonStrings>;
    localize(overrides: Partial<ClrCommonStrings>): void;
    parse(source: string, tokens?: {
        [key: string]: string;
    }): string;
}

export declare class ClrConditionalModule {
}

export declare class ClrControl extends WrappedFormControl<ClrControlContainer> {
    protected index: number;
    constructor(vcr: ViewContainerRef, injector: Injector, control: NgControl, renderer: Renderer2, el: ElementRef);
}

export declare class ClrControlContainer extends ClrAbstractContainer {
}

export declare class ClrControlError implements AfterViewInit {
    controlClassService: ControlClassService;
    controlIdService: ControlIdService;
    constructor(controlIdService: ControlIdService, controlClassService: ControlClassService, ariaLiveService: ClrAriaLiveService, el: ElementRef);
    ngAfterViewInit(): void;
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
    get allSelected(): boolean;
    set allSelected(_value: boolean);
    clrDetailExpandableAriaLabel: string;
    set clrDgPreserveSelection(state: boolean);
    clrDgSingleActionableAriaLabel: string;
    clrDgSingleSelectionAriaLabel: string;
    columns: QueryList<ClrDatagridColumn<T>>;
    commonStrings: ClrCommonStringsService;
    datagridTable: ElementRef;
    detailService: DetailService;
    expandableRows: ExpandableRowsCount;
    items: Items<T>;
    iterator: ClrDatagridItems<T>;
    get loading(): boolean;
    set loading(value: boolean);
    placeholder: ClrDatagridPlaceholder<T>;
    refresh: EventEmitter<ClrDatagridStateInterface<T>>;
    rowActionService: RowActionService;
    set rowSelectionMode(value: boolean);
    rows: QueryList<ClrDatagridRow<T>>;
    scrollableColumns: ViewContainerRef;
    set selected(value: T[]);
    selectedChanged: EventEmitter<T[]>;
    selection: Selection<T>;
    set singleSelected(value: T);
    singleSelectedChanged: EventEmitter<T>;
    constructor(organizer: DatagridRenderOrganizer, items: Items<T>, expandableRows: ExpandableRowsCount, selection: Selection<T>, rowActionService: RowActionService, stateProvider: StateProvider<T>, displayMode: DisplayModeService, renderer: Renderer2, detailService: DetailService, datagridId: string, el: ElementRef, page: Page, commonStrings: ClrCommonStringsService);
    dataChanged(): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    resize(): void;
}

export declare class ClrDatagridActionBar {
}

export declare class ClrDatagridActionOverflow implements OnDestroy {
    commonStrings: ClrCommonStringsService;
    get open(): boolean;
    set open(open: boolean);
    openChange: EventEmitter<boolean>;
    popoverId: string;
    smartPosition: ClrPopoverPosition;
    constructor(rowActionService: RowActionService, commonStrings: ClrCommonStringsService, platformId: any, zone: NgZone, smartToggleService: ClrPopoverToggleService, popoverId: string);
    closeOverflowContent(event: Event): void;
    ngOnDestroy(): void;
}

export declare class ClrDatagridCell implements OnInit {
    get _view(): any;
    signpost: QueryList<ClrSignpost>;
    constructor(vcr: ViewContainerRef);
    ngOnInit(): void;
}

export declare class ClrDatagridColumn<T = any> extends DatagridFilterRegistrar<T, ClrDatagridFilterInterface<T>> implements OnDestroy, OnInit {
    get _view(): any;
    get ariaSort(): "none" | "ascending" | "descending";
    get colType(): 'string' | 'number';
    set colType(value: 'string' | 'number');
    commonStrings: ClrCommonStringsService;
    customFilter: boolean;
    get field(): string;
    set field(field: string);
    get filterValue(): string | [number, number];
    set filterValue(newValue: string | [number, number]);
    filterValueChange: EventEmitter<any>;
    set projectedFilter(custom: any);
    showSeparator: boolean;
    get sortBy(): ClrDatagridComparatorInterface<T> | string;
    set sortBy(comparator: ClrDatagridComparatorInterface<T> | string);
    sortIcon: string | null;
    get sortOrder(): ClrDatagridSortOrder;
    set sortOrder(value: ClrDatagridSortOrder);
    sortOrderChange: EventEmitter<ClrDatagridSortOrder>;
    get sortable(): boolean;
    get sorted(): boolean;
    set sorted(value: boolean);
    sortedChange: EventEmitter<boolean>;
    set updateFilterValue(newValue: string | [number, number]);
    constructor(_sort: Sort<T>, filters: FiltersProvider<T>, vcr: ViewContainerRef, detailService: DetailService, changeDetectorRef: ChangeDetectorRef, commonStrings: ClrCommonStringsService);
    ngOnDestroy(): void;
    ngOnInit(): void;
    sort(reverse?: boolean): void;
}

export declare class ClrDatagridColumnSeparator {
    columnSeparatorId: string;
    constructor(columnResizerService: ColumnResizerService, renderer: Renderer2, tableSizeService: TableSizeService, document: any, columnSeparatorId: string);
    hideTracker(resizeTrackerEl: HTMLElement): void;
    moveTracker(event: ClrDragEvent<any>, resizeTrackerEl: HTMLElement): void;
    showTracker(resizeTrackerEl: HTMLElement): void;
}

export declare class ClrDatagridColumnToggle {
    get allColumnsVisible(): boolean;
    set allColumnsVisible(value: boolean);
    columnSwitchId: string;
    commonStrings: ClrCommonStringsService;
    customToggleButton: ClrDatagridColumnToggleButton;
    customToggleTitle: ClrDatagridColumnToggleTitle;
    get hasOnlyOneVisibleColumn(): boolean;
    get hideableColumnStates(): ColumnState[];
    openState: boolean;
    popoverId: string;
    smartPosition: ClrPopoverPosition;
    constructor(commonStrings: ClrCommonStringsService, columnsService: ColumnsService, columnSwitchId: string, platformId: any, zone: NgZone, popoverId: string);
    allColumnsSelected(): void;
    toggleColumnState(columnState: ColumnState, event: boolean): void;
    toggleSwitchPanel(): void;
    trackByFn(index: number): number;
}

export declare class ClrDatagridColumnToggleButton {
    get allHideablesVisible(): boolean;
    get clrAllSelected(): Observable<boolean>;
    constructor(columnsService: ColumnsService);
    selectAll(): void;
}

export declare class ClrDatagridColumnToggleTitle {
}

export interface ClrDatagridComparatorInterface<T> {
    compare(a: T, b: T): number;
}

export declare class ClrDatagridDetail {
    commonStrings: ClrCommonStringsService;
    detailService: DetailService;
    header: ClrDatagridDetailHeader;
    constructor(detailService: DetailService, commonStrings: ClrCommonStringsService);
    closeCheck(): void;
}

export declare class ClrDatagridDetailBody {
}

export declare class ClrDatagridDetailHeader {
    commonStrings: ClrCommonStringsService;
    detailService: DetailService;
    get titleId(): string;
    constructor(detailService: DetailService, commonStrings: ClrCommonStringsService);
}

export declare class ClrDatagridFilter<T = any> extends DatagridFilterRegistrar<T, ClrDatagridFilterInterface<T>> implements CustomFilter, OnDestroy {
    get active(): boolean;
    anchor: ElementRef;
    ariaExpanded: boolean;
    commonStrings: ClrCommonStringsService;
    set customFilter(filter: ClrDatagridFilterInterface<T> | RegisteredFilter<T, ClrDatagridFilterInterface<T>>);
    get open(): boolean;
    set open(open: boolean);
    openChange: EventEmitter<boolean>;
    popoverId: string;
    smartPosition: ClrPopoverPosition;
    constructor(_filters: FiltersProvider<T>, commonStrings: ClrCommonStringsService, smartToggleService: ClrPopoverToggleService, platformId: any, popoverId: string);
    ngOnDestroy(): void;
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
    detailService: DetailService;
    get hasHideableColumns(): boolean;
    selection: Selection<T>;
    toggle: ClrDatagridColumnToggle;
    constructor(selection: Selection<T>, detailService: DetailService, columnsService: ColumnsService);
}

export declare class ClrDatagridHideableColumn implements OnDestroy {
    set clrDgHidden(hidden: boolean);
    set clrDgHideableColumn(value: {
        hidden: boolean;
    });
    hiddenChange: EventEmitter<boolean>;
    constructor(titleTemplateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef, columnsService: ColumnsService, columnState: BehaviorSubject<ColumnState>);
    ngOnDestroy(): void;
    ngOnInit(): void;
}

export declare class ClrDatagridItems<T> implements DoCheck, OnDestroy {
    set rawItems(items: T[]);
    template: TemplateRef<NgForOfContext<T>>;
    set trackBy(value: TrackByFunction<T>);
    constructor(template: TemplateRef<NgForOfContext<T>>, differs: IterableDiffers, items: Items, vcr: ViewContainerRef);
    ngDoCheck(): void;
    ngOnDestroy(): void;
}

export declare class ClrDatagridItemsTrackBy<T = any> {
    set trackBy(value: TrackByFunction<T>);
    constructor(_items: Items<T>);
}

export declare class ClrDatagridModule {
}

export interface ClrDatagridNumericFilterInterface<T> {
    accepts(item: T, low: number, high: number): boolean;
}

export declare class ClrDatagridPageSize {
    page: Page;
    pageSizeOptions: number[];
    constructor(page: Page);
    ngOnInit(): void;
}

export declare class ClrDatagridPagination implements OnDestroy, OnInit {
    _pageSizeComponent: ClrDatagridPageSize;
    commonStrings: ClrCommonStringsService;
    currentChanged: EventEmitter<number>;
    get currentPage(): number;
    set currentPage(page: number);
    currentPageInputRef: ElementRef;
    detailService: DetailService;
    disableCurrentPageInput: boolean;
    get firstItem(): number;
    get lastItem(): number;
    get lastPage(): number;
    set lastPage(last: number);
    get middlePages(): number[];
    page: Page;
    get pageSize(): number;
    set pageSize(size: number);
    get totalItems(): number;
    set totalItems(total: number);
    constructor(page: Page, commonStrings: ClrCommonStringsService, detailService: DetailService);
    next(): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    previous(): void;
    updateCurrentPage(event: any): void;
}

export declare class ClrDatagridPlaceholder<T = any> {
    get emptyDatagrid(): boolean;
    constructor(items: Items<T>);
}

export declare class ClrDatagridRow<T = any> implements AfterContentInit, AfterViewInit {
    SELECTION_TYPE: typeof SelectionType;
    _calculatedCells: ViewContainerRef;
    _scrollableCells: ViewContainerRef;
    _stickyCells: ViewContainerRef;
    get _view(): any;
    checkboxId: string;
    set clrDgDetailCloseLabel(label: string);
    get clrDgDetailCloseLabel(): string;
    set clrDgDetailOpenLabel(label: string);
    get clrDgDetailOpenLabel(): string;
    set clrDgSelectable(value: boolean);
    get clrDgSelectable(): boolean;
    commonStrings: ClrCommonStringsService;
    detailButton: HTMLButtonElement;
    detailService: DetailService;
    dgCells: QueryList<ClrDatagridCell>;
    displayCells: boolean;
    expand: DatagridIfExpandService;
    expandAnimation: ClrExpandableAnimation;
    expandAnimationTrigger: boolean;
    expandableId: string;
    get expanded(): boolean;
    set expanded(value: boolean);
    expandedChange: EventEmitter<boolean>;
    globalExpandable: ExpandableRowsCount;
    id: string;
    item: T;
    radioId: string;
    replaced: boolean;
    rowActionService: RowActionService;
    get selected(): boolean;
    set selected(value: boolean);
    selectedChanged: EventEmitter<boolean>;
    selection: Selection<T>;
    constructor(selection: Selection<T>, rowActionService: RowActionService, globalExpandable: ExpandableRowsCount, expand: DatagridIfExpandService, detailService: DetailService, displayMode: DisplayModeService, vcr: ViewContainerRef, renderer: Renderer2, el: ElementRef, commonStrings: ClrCommonStringsService);
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    toggle(selected?: boolean): void;
    toggleExpand(): void;
}

export declare class ClrDatagridRowDetail implements AfterContentInit, OnDestroy {
    SELECTION_TYPE: typeof SelectionType;
    _beginningOfExpandableContentAriaText: string;
    _endOfExpandableContentAriaText: string;
    get beginningOfExpandableContentAriaText(): string;
    cells: QueryList<ClrDatagridCell>;
    commonStrings: ClrCommonStringsService;
    get endOfExpandableContentAriaText(): string;
    expand: DatagridIfExpandService;
    expandableRows: ExpandableRowsCount;
    set replace(value: boolean);
    replacedRow: boolean;
    rowActionService: RowActionService;
    selection: Selection;
    constructor(selection: Selection, rowActionService: RowActionService, expand: DatagridIfExpandService, expandableRows: ExpandableRowsCount, commonStrings: ClrCommonStringsService);
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

export declare class ClrDatalist implements AfterContentInit {
    datalistId: string;
    set id(idValue: string);
    constructor(datalistIdService: DatalistIdService);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
}

export declare class ClrDatalistContainer extends ClrAbstractContainer {
    focus: boolean;
    constructor(controlClassService: ControlClassService, layoutService: LayoutService, ifErrorService: IfErrorService, ngControlService: NgControlService, focusService: FocusService);
}

export declare class ClrDatalistInput extends WrappedFormControl<ClrDatalistContainer> implements AfterContentInit {
    listValue: string;
    constructor(focusService: FocusService, vcr: ViewContainerRef, injector: Injector, control: NgControl, renderer: Renderer2, el: ElementRef, datalistIdService: DatalistIdService);
    ngAfterContentInit(): void;
    triggerFocus(): void;
    triggerValidation(): void;
}

export declare class ClrDatalistModule {
}

export declare class ClrDataModule {
}

export declare class ClrDateContainer implements DynamicWrapper, OnDestroy, AfterViewInit {
    _dynamic: boolean;
    set actionButton(button: ElementRef);
    set clrPosition(position: string);
    commonStrings: ClrCommonStringsService;
    control: NgControl;
    focus: boolean;
    invalid: boolean;
    get isEnabled(): boolean;
    get isInputDateDisabled(): boolean;
    label: ClrLabel;
    get open(): boolean;
    get popoverPosition(): ClrPopoverPosition;
    constructor(toggleService: ClrPopoverToggleService, dateNavigationService: DateNavigationService, datepickerEnabledService: DatepickerEnabledService, dateFormControlService: DateFormControlService, commonStrings: ClrCommonStringsService, ifErrorService: IfErrorService, focusService: FocusService, viewManagerService: ViewManagerService, controlClassService: ControlClassService, layoutService: LayoutService, ngControlService: NgControlService);
    addGrid(): boolean;
    controlClass(): string;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
}

export declare class ClrDateInput extends WrappedFormControl<ClrDateContainer> implements OnInit, AfterViewInit, OnDestroy {
    protected control: NgControl;
    set date(date: Date);
    dateChange: EventEmitter<Date>;
    set disabled(value: boolean | string);
    get disabled(): boolean | string;
    protected el: ElementRef;
    protected index: number;
    get inputType(): string;
    set max(dateString: string);
    set min(dateString: string);
    placeholder: string;
    get placeholderText(): string;
    protected renderer: Renderer2;
    constructor(viewContainerRef: ViewContainerRef, injector: Injector, el: ElementRef, renderer: Renderer2, control: NgControl, container: ClrDateContainer, dateIOService: DateIOService, dateNavigationService: DateNavigationService, datepickerEnabledService: DatepickerEnabledService, dateFormControlService: DateFormControlService, platformId: any, focusService: FocusService, datepickerFocusService: DatepickerFocusService);
    ngAfterViewInit(): void;
    ngOnInit(): void;
    onValueChange(target: HTMLInputElement): void;
    setFocusStates(): void;
    triggerValidation(): void;
    static ngAcceptInputType_date: Date | null;
}

export declare class ClrDatepickerModule {
}

export declare class ClrDatepickerViewManager {
    get isDayView(): boolean;
    get isMonthView(): boolean;
    get isYearView(): boolean;
    constructor(viewManagerService: ViewManagerService);
}

export declare class ClrDay {
    dayString: string;
    set dayView(day: DayViewModel);
    get dayView(): DayViewModel;
    constructor(_dateNavigationService: DateNavigationService, _toggleService: ClrPopoverToggleService, dateFormControlService: DateFormControlService);
    onDayViewFocus(): void;
    selectDay(): void;
}

export declare class ClrDaypicker implements AfterViewInit {
    get ariaLiveMonth(): string;
    get calendarMonth(): string;
    get calendarYear(): number;
    commonStrings: ClrCommonStringsService;
    get monthAttrString(): string;
    get updateAriaLiveYear(): string;
    get yearAttrString(): string;
    constructor(_viewManagerService: ViewManagerService, _dateNavigationService: DateNavigationService, _localeHelperService: LocaleHelperService, commonStrings: ClrCommonStringsService, ariaLiveService: ClrAriaLiveService);
    changeToMonthView(): void;
    changeToYearView(): void;
    currentMonth(): void;
    nextMonth(): void;
    ngAfterViewInit(): void;
    previousMonth(): void;
}

export declare class ClrDragAndDropModule {
}

export declare class ClrDragEvent<T> {
    dragDataTransfer: T;
    dragPosition: DragPointPosition;
    dropPointPosition: DragPointPosition;
    group: string | string[];
    constructor(dragEvent: DragEventInterface<T>);
}

export declare class ClrDraggable<T> implements AfterContentInit, OnDestroy {
    customGhost: ClrIfDragged<T>;
    set dataTransfer(value: T);
    dragEndEmitter: EventEmitter<ClrDragEvent<T>>;
    dragMoveEmitter: EventEmitter<ClrDragEvent<T>>;
    dragOn: boolean;
    set dragStartDelay(value: number);
    dragStartEmitter: EventEmitter<ClrDragEvent<T>>;
    set group(value: string | string[]);
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
    isMenuClosable: boolean;
    parent: ClrDropdown;
    toggleService: ClrPopoverToggleService;
    constructor(parent: ClrDropdown, toggleService: ClrPopoverToggleService, cdr: ChangeDetectorRef, dropdownService: RootDropdownService);
    ngOnDestroy(): void;
}

export declare class ClrDropdownItem implements AfterViewInit {
    set disabled(value: boolean | string);
    get disabled(): boolean | string;
    set disabledDeprecated(value: boolean | string);
    get disabledDeprecated(): boolean | string;
    set dropdownItemId(value: string);
    get dropdownItemId(): string;
    setByDeprecatedDisabled: boolean;
    constructor(dropdown: ClrDropdown, el: ElementRef<HTMLElement>, _dropdownService: RootDropdownService, renderer: Renderer2, focusableItem: FocusableItem);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onDropdownItemClick(): void;
}

export declare class ClrDropdownMenu extends AbstractPopover implements AfterContentInit, OnDestroy {
    items: QueryList<FocusableItem>;
    set position(position: string);
    constructor(injector: Injector, parentHost: ElementRef<HTMLElement>, nested: ClrDropdownMenu, focusHandler: DropdownFocusHandler);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
}

export declare class ClrDropdownModule {
}

export declare class ClrDropdownTrigger {
    get active(): boolean;
    isRootLevelToggle: boolean;
    constructor(dropdown: ClrDropdown, toggleService: ClrPopoverToggleService, el: ElementRef<HTMLElement>, focusHandler: DropdownFocusHandler);
    onDropdownTriggerClick(event: any): void;
}

export declare class ClrDroppable<T> implements OnInit, OnDestroy {
    dragEndEmitter: EventEmitter<ClrDragEvent<T>>;
    dragEnterEmitter: EventEmitter<ClrDragEvent<T>>;
    dragLeaveEmitter: EventEmitter<ClrDragEvent<T>>;
    dragMoveEmitter: EventEmitter<ClrDragEvent<T>>;
    dragStartEmitter: EventEmitter<ClrDragEvent<T>>;
    dropEmitter: EventEmitter<ClrDragEvent<T>>;
    set dropTolerance(value: number | string | ClrDropToleranceInterface);
    set group(value: string | string[]);
    isDraggableMatch: boolean;
    set isDraggableOver(value: boolean);
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
    get expandAnimation(): {
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

export declare class ClrFocusOnViewInit implements AfterViewInit {
    set isEnabled(value: boolean);
    constructor(el: ElementRef, platformId: any, focusOnViewInit: boolean, document: any, renderer: Renderer2);
    ngAfterViewInit(): void;
    onFocusout(): void;
}

export declare class ClrFocusOnViewInitModule {
}

export declare class ClrForm {
    set labelSize(size: number);
    labels: QueryList<ClrLabel>;
    layoutService: LayoutService;
    constructor(layoutService: LayoutService, markControlService: MarkControlService, platformId: any, el: ElementRef, commonStrings: ClrCommonStringsService, ariaLiveService: ClrAriaLiveService);
    markAsDirty(updateAriaLiveText?: boolean): void;
    markAsTouched(updateAriaLiveText?: boolean): void;
    onFormSubmit(): void;
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
    set active(value: boolean);
    get active(): boolean;
    activeChange: EventEmitter<boolean>;
    constructor(ifActiveService: IfActiveService, id: number, template: TemplateRef<any>, container: ViewContainerRef);
    ngOnDestroy(): void;
    updateView(value: boolean): void;
}

export declare class ClrIfDetail implements OnInit, OnDestroy {
    set state(model: any);
    stateChange: EventEmitter<any>;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, detailService: DetailService);
    ngOnDestroy(): void;
    ngOnInit(): void;
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
    get expanded(): boolean;
    set expanded(value: boolean);
    expandedChange: EventEmitter<boolean>;
    constructor(template: TemplateRef<any>, container: ViewContainerRef, el: ElementRef, renderer: Renderer2, expand: IfExpandService);
    ngOnDestroy(): void;
    ngOnInit(): void;
}

export declare class ClrIfOpen implements OnDestroy {
    set open(value: boolean);
    get open(): boolean;
    openChange: EventEmitter<boolean>;
    constructor(toggleService: ClrPopoverToggleService, template: TemplateRef<any>, container: ViewContainerRef);
    ngOnDestroy(): void;
    updateView(value: boolean): void;
    static ngAcceptInputType_open: boolean | '';
}

export declare class ClrInput extends WrappedFormControl<ClrInputContainer> {
    protected index: number;
    constructor(vcr: ViewContainerRef, injector: Injector, control: NgControl, renderer: Renderer2, el: ElementRef);
}

export declare class ClrInputContainer extends ClrAbstractContainer {
}

export declare class ClrInputModule {
}

export declare class ClrLabel implements OnInit, OnDestroy {
    forAttr: string;
    get labelText(): string;
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
    get loadingState(): boolean | ClrLoadingState;
    set loadingState(value: boolean | ClrLoadingState);
    constructor(listener: LoadingListener);
    ngOnDestroy(): void;
    static ngAcceptInputType_loadingState: boolean | ClrLoadingState | null;
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
    size: string;
    skipAnimation: string;
    staticBackdrop: boolean;
    stopClose: boolean;
    constructor(_scrollingService: ScrollingService, commonStrings: ClrCommonStringsService, modalId: string);
    close(): void;
    fadeDone(e: AnimationEvent): void;
    ngOnChanges(changes: {
        [propName: string]: SimpleChange;
    }): void;
    ngOnDestroy(): void;
    open(): void;
}

export declare class ClrModalBody {
    tabindex: number;
    mouseDown(): void;
    mouseUp(): void;
}

export declare class ClrModalModule {
}

export declare class ClrMonthpicker implements AfterViewInit {
    get calendarMonthIndex(): number;
    get monthNames(): ReadonlyArray<string>;
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
    get level(): number;
    get responsiveNavCodes(): ResponsiveNavCodes;
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

export declare class ClrPasswordContainer extends ClrAbstractContainer {
    set clrToggle(state: boolean);
    get clrToggle(): boolean;
    commonStrings: ClrCommonStringsService;
    focus: boolean;
    focusService: FocusService;
    show: boolean;
    constructor(ifErrorService: IfErrorService, layoutService: LayoutService, controlClassService: ControlClassService, ngControlService: NgControlService, focusService: FocusService, toggleService: BehaviorSubject<boolean>, commonStrings: ClrCommonStringsService);
    toggle(): void;
}

export declare class ClrPasswordModule {
}

export declare class ClrPopoverAnchor {
    constructor(smartEventService: ClrPopoverEventsService, element: ElementRef);
}

export declare class ClrPopoverContent implements AfterContentChecked, OnDestroy {
    set contentAt(position: ClrPopoverPosition);
    set open(value: boolean);
    set outsideClickClose(clickToClose: boolean);
    set scrollToClose(scrollToClose: boolean);
    constructor(document: HTMLDocument, container: ViewContainerRef, template: TemplateRef<any>, renderer: Renderer2, smartPositionService: ClrPopoverPositionService, smartEventsService: ClrPopoverEventsService, smartOpenService: ClrPopoverToggleService);
    ngAfterContentChecked(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}

export declare class ClrPopoverEventsService implements OnDestroy {
    set anchorButtonRef(ref: ElementRef);
    get anchorButtonRef(): ElementRef;
    set closeButtonRef(ref: ElementRef);
    get closeButtonRef(): ElementRef;
    set contentRef(host: ElementRef);
    get contentRef(): ElementRef;
    ignoredEvent: any;
    outsideClickClose: boolean;
    scrollToClose: boolean;
    constructor(renderer: Renderer2, smartOpenService: ClrPopoverToggleService, document: HTMLDocument);
    addClickListener(): void;
    addEscapeListener(): void;
    addScrollListener(): void;
    ngOnDestroy(): void;
    removeClickListener(): void;
    removeEscapeListener(): void;
    removeScrollListener(): void;
    setAnchorFocus(): void;
    setCloseFocus(): void;
}

export declare class ClrPopoverModule {
}

export interface ClrPopoverPosition {
    anchor: ClrAlignment;
    axis: ClrAxis;
    content: ClrAlignment;
    side: ClrSide;
}

export declare class ClrPopoverPositionService {
    platformId: any;
    set position(position: ClrPopoverPosition);
    get position(): ClrPopoverPosition;
    shouldRealign: Observable<void>;
    constructor(eventService: ClrPopoverEventsService, platformId: any);
    alignContent(content: HTMLElement): ClrPopoverContentOffset;
    realign(): void;
}

export declare class ClrPopoverToggleService {
    set open(value: boolean);
    get open(): boolean;
    get openChange(): Observable<boolean>;
    set openEvent(event: Event);
    get openEvent(): Event;
    get originalEvent(): Event;
    getEventChange(): Observable<Event>;
    toggleWithEvent(event: any): void;
}

export declare class ClrProgressBar {
    get ariaLive(): ClrAriaLivePoliteness;
    assertive: boolean;
    set clrDanger(value: boolean | string);
    set clrFade(value: boolean | string);
    set clrFlash(value: boolean | string);
    set clrFlashDanger(value: boolean | string);
    set clrLabeled(value: boolean | string);
    set clrLoop(value: boolean | string);
    set clrSuccess(value: boolean | string);
    get dangerClass(): boolean;
    get displayValue(): string;
    displayval: string;
    externalId: string;
    get fadeClass(): boolean;
    get flashClass(): boolean;
    get flashDangerClass(): boolean;
    set id(value: string);
    get id(): string;
    get labeledClass(): boolean;
    get loopClass(): boolean;
    max: number;
    off: boolean;
    get progressClass(): boolean;
    get successClass(): boolean;
    get value(): number;
    set value(value: number);
    constructor(ariaLiveService: ClrAriaLiveService);
    displayAriaLive(): boolean;
}

export declare class ClrProgressBarModule {
}

export declare class ClrRadio extends WrappedFormControl<ClrRadioWrapper> {
    constructor(vcr: ViewContainerRef, injector: Injector, control: NgControl, renderer: Renderer2, el: ElementRef);
}

export declare class ClrRadioContainer extends ClrAbstractContainer {
    set clrInline(value: boolean | string);
    get clrInline(): boolean | string;
    protected controlClassService: ControlClassService;
    protected ifErrorService: IfErrorService;
    protected layoutService: LayoutService;
    protected ngControlService: NgControlService;
    constructor(ifErrorService: IfErrorService, layoutService: LayoutService, controlClassService: ControlClassService, ngControlService: NgControlService);
}

export declare class ClrRadioModule {
}

export declare class ClrRadioWrapper implements DynamicWrapper, OnInit {
    _dynamic: boolean;
    label: ClrLabel;
    ngOnInit(): void;
}

export declare class ClrRange extends WrappedFormControl<ClrRangeContainer> {
    constructor(vcr: ViewContainerRef, injector: Injector, control: NgControl, renderer: Renderer2, el: ElementRef);
}

export declare class ClrRangeContainer extends ClrAbstractContainer {
    set hasProgress(val: boolean);
    get hasProgress(): boolean;
    constructor(ifErrorService: IfErrorService, layoutService: LayoutService, controlClassService: ControlClassService, ngControlService: NgControlService, renderer: Renderer2, idService: ControlIdService);
    getRangeProgressFillWidth(): string;
}

export declare class ClrRangeModule {
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

export declare class ClrSelectContainer extends ClrAbstractContainer {
    protected controlClassService: ControlClassService;
    protected ifErrorService: IfErrorService;
    protected layoutService: LayoutService;
    multiple: SelectMultipleControlValueAccessor;
    protected ngControlService: NgControlService;
    constructor(ifErrorService: IfErrorService, layoutService: LayoutService, controlClassService: ControlClassService, ngControlService: NgControlService);
    ngOnInit(): void;
    wrapperClass(): "clr-multiselect-wrapper" | "clr-select-wrapper";
}

export declare enum ClrSelectedState {
    UNSELECTED = 0,
    SELECTED = 1,
    INDETERMINATE = 2
}

export declare class ClrSelectModule {
}

export declare enum ClrSide {
    BEFORE = -1,
    AFTER = 1
}

export declare class ClrSignpost {
    commonStrings: ClrCommonStringsService;
    set customTrigger(trigger: ClrSignpostTrigger);
    useCustomTrigger: boolean;
    constructor(commonStrings: ClrCommonStringsService);
}

export declare class ClrSignpostContent extends AbstractPopover implements OnDestroy {
    commonStrings: ClrCommonStringsService;
    get position(): string;
    set position(position: string);
    signpostContentId: string;
    constructor(injector: Injector, parentHost: ElementRef, commonStrings: ClrCommonStringsService, signpostContentId: string, signpostIdService: SignpostIdService, signpostFocusManager: SignpostFocusManager, platformId: any, document: any);
    close(): void;
    ngOnDestroy(): void;
}

export declare class ClrSignpostModule {
}

export declare class ClrSignpostTrigger implements OnDestroy {
    ariaControl: string;
    ariaExpanded: boolean;
    commonStrings: ClrCommonStringsService;
    isOpen: boolean;
    constructor(toggleService: ClrPopoverToggleService, el: ElementRef, commonStrings: ClrCommonStringsService, signpostIdService: SignpostIdService, signpostFocusManager: SignpostFocusManager, document: any, platformId: any);
    ngOnDestroy(): void;
    ngOnInit(): void;
    onSignpostTriggerClick(event: Event): void;
}

export declare class ClrSpinner implements AfterViewInit {
    get ariaLive(): ClrAriaLivePoliteness;
    assertive: boolean;
    set clrInline(value: boolean | string);
    set clrInverse(value: boolean | string);
    set clrMedium(value: boolean | string);
    set clrSmall(value: boolean | string);
    get inlineClass(): boolean;
    get inverseClass(): boolean;
    get mediumClass(): boolean;
    off: boolean;
    get smallClass(): boolean;
    get spinnerClass(): boolean;
    constructor(el: ElementRef, ariaLiveService: ClrAriaLiveService);
    ngAfterViewInit(): void;
}

export declare class ClrSpinnerModule {
}

export declare class ClrStackBlock implements OnInit {
    get ariaExpanded(): string;
    ariaLevel: number;
    ariaPosinset: number;
    ariaSetsize: number;
    get caretDirection(): string;
    get caretTitle(): string;
    commonStrings: ClrCommonStringsService;
    expandable: boolean;
    expanded: boolean;
    expandedChange: EventEmitter<boolean>;
    focused: boolean;
    get getChangedValue(): boolean;
    get onStackLabelFocus(): boolean;
    get role(): string;
    set setChangedValue(value: boolean);
    get tabIndex(): string;
    uniqueId: string;
    constructor(parent: ClrStackBlock, uniqueId: string, commonStrings: ClrCommonStringsService);
    addChild(): void;
    getStackChildrenId(): string;
    ngOnInit(): void;
    toggleExpand(): void;
}

export declare class ClrStackContentInput {
    uniqueId: string;
    constructor(uniqueId: string);
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
    get editing(): boolean;
    set editing(value: boolean);
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

export declare class ClrStepperModule {
}

export declare class ClrStepperPanel extends ClrAccordionPanel implements OnInit {
    commonStrings: ClrCommonStringsService;
    get formGroup(): import("@angular/forms").FormGroup;
    headerButton: ElementRef;
    get id(): string;
    set id(_value: string);
    isAccordion: boolean;
    constructor(platformId: any, commonStrings: ClrCommonStringsService, formGroupName: FormGroupName, ngModelGroup: NgModelGroup, stepperService: StepperService, ifExpandService: IfExpandService, id: string);
    ngOnDestroy(): void;
    ngOnInit(): void;
}

export declare class ClrTab {
    get active(): boolean;
    id: number;
    ifActiveService: IfActiveService;
    tabContent: ClrTabContent;
    tabLink: ClrTabLink;
    constructor(ifActiveService: IfActiveService, id: number, tabsService: TabsService);
    ngOnDestroy(): void;
}

export declare class ClrTabContent implements OnDestroy {
    get active(): boolean;
    get ariaLabelledBy(): string;
    id: number;
    ifActiveService: IfActiveService;
    get tabContentId(): string;
    set tabContentId(id: string);
    constructor(ifActiveService: IfActiveService, id: number, ariaService: AriaService, tabsService: TabsService);
    ngOnDestroy(): void;
}

export declare class ClrTabLink {
    get active(): boolean;
    get addLinkClasses(): boolean;
    get ariaControls(): string;
    el: ElementRef;
    ifActiveService: IfActiveService;
    set inOverflow(inOverflow: boolean);
    get inOverflow(): boolean;
    get tabLinkId(): string;
    set tabLinkId(id: string);
    get tabindex(): 0 | -1;
    tabsId: number;
    templateRefContainer: TemplateRefContainer;
    constructor(ifActiveService: IfActiveService, id: number, ariaService: AriaService, el: ElementRef, cfr: ComponentFactoryResolver, viewContainerRef: ViewContainerRef, tabsService: TabsService, tabsId: number);
    activate(): void;
}

export declare class ClrTabOverflowContent {
}

export declare class ClrTabs implements AfterContentInit, OnDestroy {
    _mousedown: boolean;
    get activeTabInOverflow(): boolean;
    get activeTabPosition(): number;
    commonStrings: ClrCommonStringsService;
    ifActiveService: IfActiveService;
    get isCurrentInOverflow(): boolean;
    get isVertical(): boolean;
    keyFocus: ClrKeyFocus;
    set layout(layout: TabsLayout);
    get layout(): TabsLayout;
    get tabIds(): string;
    get tabLinkDirectives(): ClrTabLink[];
    tabLinkElements: HTMLElement[];
    set tabOverflowEl(value: ElementRef);
    tabsId: number;
    tabsService: TabsService;
    toggleService: ClrPopoverToggleService;
    constructor(ifActiveService: IfActiveService, toggleService: ClrPopoverToggleService, tabsService: TabsService, tabsId: number, commonStrings: ClrCommonStringsService);
    closeOnEscapeKey(): void;
    closeOnFocusOut(event: FocusEvent): void;
    closeOnOutsideClick(event: Event, tabOverflowTrigger: HTMLElement): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    openOverflowOnFocus(): void;
    resetKeyFocusCurrentToActive(event: FocusEvent): void;
    toggleOverflowOnClick(): void;
    toggleOverflowOnPosition(position: number): void;
}

export declare class ClrTabsModule {
}

export declare class ClrTextarea extends WrappedFormControl<ClrTextareaContainer> {
    protected index: number;
    constructor(vcr: ViewContainerRef, injector: Injector, control: NgControl, renderer: Renderer2, el: ElementRef);
}

export declare class ClrTextareaContainer extends ClrAbstractContainer {
}

export declare class ClrTextareaModule {
}

export declare class ClrTimeline {
    get isVertical(): boolean;
    layout: ClrTimelineLayout;
}

export declare enum ClrTimelineLayout {
    HORIZONTAL = "horizontal",
    VERTICAL = "vertical"
}

export declare class ClrTimelineModule {
}

export declare class ClrTimelineStep {
    get iconAriaCurrent(): boolean;
    get iconAriaLabel(): string;
    get iconShape(): string;
    get isProcessing(): boolean;
    state: ClrTimelineStepState;
    stepTitle: ElementRef;
    stepTitleText: string;
    constructor(iconAttributeService: TimelineIconAttributeService, platformId: any);
    ngAfterContentInit(): void;
}

export declare class ClrTimelineStepDescription {
}

export declare class ClrTimelineStepHeader {
}

export declare enum ClrTimelineStepState {
    NOT_STARTED = "not-started",
    CURRENT = "current",
    PROCESSING = "processing",
    SUCCESS = "success",
    ERROR = "error"
}

export declare class ClrTimelineStepTitle {
}

export declare class ClrTooltip {
}

export declare class ClrTooltipContent extends AbstractPopover {
    get id(): string;
    set id(value: string);
    get position(): string;
    set position(position: string);
    get size(): string;
    set size(size: string);
    uniqueId: string;
    constructor(injector: Injector, parentHost: ElementRef, uniqueId: string, tooltipIdService: TooltipIdService);
}

export declare class ClrTooltipModule {
}

export declare class ClrTooltipTrigger {
    ariaDescribedBy: string;
    constructor(toggleService: ClrPopoverToggleService, tooltipIdService: TooltipIdService);
    hideTooltip(): void;
    ngOnDestroy(): void;
    showTooltip(): void;
}

export declare class ClrTree<T> implements AfterContentInit, OnDestroy {
    featuresService: TreeFeaturesService<T>;
    get isMultiSelectable(): boolean;
    set lazy(value: boolean);
    tabindex: number;
    constructor(featuresService: TreeFeaturesService<T>, focusManagerService: TreeFocusManagerService<T>, el: ElementRef);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    onFocusIn(event: FocusEvent): void;
}

export declare class ClrTreeNode<T> implements OnInit, OnDestroy {
    STATES: typeof ClrSelectedState;
    _model: TreeNodeModel<T>;
    get ariaSelected(): boolean;
    commonStrings: ClrCommonStringsService;
    contentContainerTabindex: number;
    expandService: IfExpandService;
    expandable: boolean | undefined;
    get expanded(): boolean;
    set expanded(value: boolean);
    expandedChange: EventEmitter<boolean>;
    featuresService: TreeFeaturesService<T>;
    nodeId: string;
    get selected(): ClrSelectedState | boolean;
    set selected(value: ClrSelectedState | boolean);
    selectedChange: EventEmitter<ClrSelectedState>;
    get treeNodeLink(): ClrTreeNodeLink;
    constructor(nodeId: string, platformId: any, parent: ClrTreeNode<T>, featuresService: TreeFeaturesService<T>, expandService: IfExpandService, commonStrings: ClrCommonStringsService, focusManager: TreeFocusManagerService<T>, injector: Injector);
    broadcastFocusOnContainer(): void;
    focusTreeNode(): void;
    isExpandable(): boolean;
    ngOnDestroy(): void;
    ngOnInit(): void;
    onKeyDown(event: KeyboardEvent): void;
}

export declare class ClrTreeNodeLink {
    constructor(el: ElementRef);
    activate(): void;
}

export declare class ClrTreeViewModule {
}

export declare class ClrVerticalNav implements OnDestroy {
    get ariaExpanded(): string;
    get collapsed(): boolean;
    set collapsed(value: boolean);
    get collapsible(): boolean;
    set collapsible(value: boolean);
    commonStrings: ClrCommonStringsService;
    get hasIcons(): boolean;
    get hasNavGroups(): boolean;
    constructor(_navService: VerticalNavService, _navIconService: VerticalNavIconService, _navGroupRegistrationService: VerticalNavGroupRegistrationService, commonStrings: ClrCommonStringsService);
    ngOnDestroy(): void;
    toggleByButton(): void;
}

export declare class ClrVerticalNavGroup implements AfterContentInit, OnDestroy {
    commonStrings: ClrCommonStringsService;
    get expandAnimationState(): string;
    set expandAnimationState(value: string);
    get expanded(): boolean;
    set expanded(value: boolean);
    expandedChange: EventEmitter<boolean>;
    set userExpandedInput(value: boolean);
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
    set clrWizardOpen(open: boolean);
    get currentPage(): ClrWizardPage;
    set currentPage(page: ClrWizardPage);
    currentPageChanged: EventEmitter<any>;
    set disableStepnav(value: boolean);
    get disableStepnav(): boolean;
    set forceForward(value: boolean);
    get forceForward(): boolean;
    headerActionService: HeaderActionService;
    headerActions: QueryList<ClrWizardHeaderAction>;
    get isFirst(): boolean;
    get isLast(): boolean;
    get isStatic(): boolean;
    navService: WizardNavigationService;
    onCancel: EventEmitter<any>;
    onMoveNext: EventEmitter<any>;
    onMovePrevious: EventEmitter<any>;
    onReset: EventEmitter<any>;
    pageCollection: PageCollectionService;
    pages: QueryList<ClrWizardPage>;
    size: string;
    set stopCancel(value: boolean);
    get stopCancel(): boolean;
    get stopModalAnimations(): string;
    set stopNavigation(value: boolean);
    get stopNavigation(): boolean;
    set stopNext(value: boolean);
    get stopNext(): boolean;
    wizardFinished: EventEmitter<any>;
    wizardTitle: ElementRef;
    constructor(platformId: any, navService: WizardNavigationService, pageCollection: PageCollectionService, buttonService: ButtonHubService, headerActionService: HeaderActionService, elementRef: ElementRef, differs: IterableDiffers);
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
    get _disabledAttribute(): string | null;
    buttonService: ButtonHubService;
    disabled: boolean;
    hidden: boolean;
    get isCancel(): boolean;
    get isDanger(): boolean;
    get isDisabled(): boolean;
    get isFinish(): boolean;
    get isHidden(): boolean;
    get isNext(): boolean;
    get isPrevious(): boolean;
    get isPrimaryAction(): boolean;
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
    get id(): string;
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
    get buttons(): TemplateRef<any>;
    get completed(): boolean;
    set completed(value: boolean);
    get current(): boolean;
    customButtonClicked: EventEmitter<string>;
    dangerButtonClicked: EventEmitter<ClrWizardPage>;
    get disabled(): boolean;
    get enabled(): boolean;
    finishButtonClicked: EventEmitter<ClrWizardPage>;
    get hasButtons(): boolean;
    get hasError(): boolean;
    set hasError(val: boolean);
    get hasHeaderActions(): boolean;
    get headerActions(): TemplateRef<any>;
    get id(): string;
    get navTitle(): TemplateRef<any>;
    nextButtonClicked: EventEmitter<ClrWizardPage>;
    get nextStepDisabled(): boolean;
    set nextStepDisabled(val: boolean);
    nextStepDisabledChange: EventEmitter<boolean>;
    onCommit: EventEmitter<string>;
    onLoad: EventEmitter<string>;
    pageCollection: PageCollectionService;
    pageNavTitle: ClrWizardPageNavTitle;
    pageOnCancel: EventEmitter<ClrWizardPage>;
    pageTitle: ClrWizardPageTitle;
    preventDefault: boolean;
    previousButtonClicked: EventEmitter<ClrWizardPage>;
    get previousCompleted(): boolean;
    get previousStepDisabled(): boolean;
    set previousStepDisabled(val: boolean);
    previousStepDisabledChange: EventEmitter<boolean>;
    primaryButtonClicked: EventEmitter<string>;
    get readyToComplete(): boolean;
    get stepItemId(): string;
    get stopCancel(): boolean;
    set stopCancel(val: boolean);
    stopCancelChange: EventEmitter<boolean>;
    get stopNext(): boolean;
    set stopNext(val: boolean);
    get title(): TemplateRef<any>;
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
    get canNavigate(): boolean;
    get hasError(): boolean;
    get id(): string;
    get isComplete(): boolean;
    get isCurrent(): boolean;
    get isDisabled(): boolean;
    navService: WizardNavigationService;
    page: ClrWizardPage;
    pageCollection: PageCollectionService;
    constructor(navService: WizardNavigationService, pageCollection: PageCollectionService);
    click(): void;
}

export declare class ClrYearpicker implements AfterViewInit {
    get ariaLiveDecadeText(): string;
    get calendarYear(): number;
    commonStrings: ClrCommonStringsService;
    yearRangeModel: YearRangeModel;
    constructor(_dateNavigationService: DateNavigationService, _viewManagerService: ViewManagerService, _datepickerFocusService: DatepickerFocusService, _elRef: ElementRef, commonStrings: ClrCommonStringsService, ariaLiveService: ClrAriaLiveService);
    changeYear(year: number): void;
    currentDecade(): void;
    getTabIndex(year: number): number;
    nextDecade(): void;
    ngAfterViewInit(): void;
    onKeyDown(event: KeyboardEvent): void;
    previousDecade(): void;
}

export declare function collapse(): AnimationMetadata[];

export declare const commonStringsDefault: ClrCommonStrings;

export declare const CONDITIONAL_DIRECTIVES: Type<any>[];

export declare const CUSTOM_BUTTON_TYPES: any;

export declare class DatagridNumericFilter<T = any> extends DatagridFilterRegistrar<T, DatagridNumericFilterImpl<T>> implements CustomFilter, AfterViewInit {
    commonStrings: ClrCommonStringsService;
    set customNumericFilter(value: ClrDatagridNumericFilterInterface<T> | RegisteredFilter<T, DatagridNumericFilterImpl<T>>);
    filterContainer: ClrDatagridFilter<T>;
    filterValueChange: EventEmitter<any>;
    get high(): number | string;
    set high(high: number | string);
    input: ElementRef;
    get low(): number | string;
    set low(low: number | string);
    open: boolean;
    get value(): [number, number];
    set value(values: [number, number]);
    constructor(filters: FiltersProvider<T>, domAdapter: DomAdapter, commonStrings: ClrCommonStringsService, popoverToggleService: ClrPopoverToggleService);
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

export declare class DatagridStringFilter<T = any> extends DatagridFilterRegistrar<T, DatagridStringFilterImpl<T>> implements CustomFilter, AfterViewInit, OnDestroy {
    set customStringFilter(value: ClrDatagridStringFilterInterface<T> | RegisteredFilter<T, DatagridStringFilterImpl<T>>);
    filterContainer: ClrDatagridFilter<T>;
    filterValueChange: EventEmitter<any>;
    input: ElementRef;
    open: boolean;
    get value(): string;
    set value(value: string);
    constructor(filters: FiltersProvider<T>, domAdapter: DomAdapter, smartToggleService: ClrPopoverToggleService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}

export declare const DEFAULT_BUTTON_TYPES: any;

export declare const EXPANDABLE_ANIMATION_DIRECTIVES: Type<any>[];

export declare function fade(opacity?: number): AnimationMetadata[];

export declare function fadeSlide(direction: string): AnimationMetadata[];

export declare const FOCUS_ON_VIEW_INIT: InjectionToken<boolean>;

export declare const FOCUS_ON_VIEW_INIT_DIRECTIVES: Type<any>[];

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
    get flavor(): number;
    constructor(cdr: ChangeDetectorRef, willyWonka: MainContainerWillyWonka, responsiveNavService: ResponsiveNavigationService);
}

export declare function slide(direction: string): AnimationMetadata[];

export declare const TOGGLE_SERVICE: InjectionToken<BehaviorSubject<boolean>>;

export declare const TOGGLE_SERVICE_PROVIDER: {
    provide: InjectionToken<BehaviorSubject<boolean>>;
    useFactory: typeof ToggleServiceFactory;
};

export declare function ToggleServiceFactory(): BehaviorSubject<boolean>;

export declare class WrappedFormControl<W extends DynamicWrapper> implements OnInit, OnDestroy {
    _id: string;
    protected controlIdService: ControlIdService;
    protected el: ElementRef<any>;
    get id(): string;
    set id(value: string);
    protected index: number;
    protected ngControlService: NgControlService;
    protected renderer: Renderer2;
    protected subscriptions: Subscription[];
    protected vcr: ViewContainerRef;
    protected wrapperType: Type<W>;
    constructor(vcr: ViewContainerRef, wrapperType: Type<W>, injector: Injector, ngControl: NgControl, renderer: Renderer2, el: ElementRef);
    protected getProviderFromContainer<T>(token: Type<T> | InjectionToken<T>, notFoundValue?: T): T;
    ngOnDestroy(): void;
    ngOnInit(): void;
    triggerValidation(): void;
}
