export declare class CdsIconCustomTag {
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<CdsIconCustomTag, "cds-icon", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<CdsIconCustomTag, never>;
}

export declare class ClarityModule {
    static ɵfac: i0.ɵɵFactoryDef<ClarityModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<ClarityModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ClarityModule, never, never, [typeof i1.ClrEmphasisModule, typeof i2.ClrDataModule, typeof i3.ClrIconModule, typeof i4.ClrModalModule, typeof i5.ClrLoadingModule, typeof i6.ClrConditionalModule, typeof i7.ClrFocusTrapModule, typeof i8.ClrFocusOnViewInitModule, typeof i9.ClrButtonModule, typeof i10.ClrFormsModule, typeof i11.ClrLayoutModule, typeof i12.ClrPopoverModule, typeof i13.ClrWizardModule, typeof i14.ClrDragAndDropModule, typeof i15.ClrStepperModule, typeof i16.ClrSpinnerModule, typeof i17.ClrProgressBarModule, typeof i18.ClrPopoverModuleNext, typeof i19.ClrTimelineModule]>;
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

export declare abstract class ClrAbstractContainer implements DynamicWrapper, OnDestroy, AfterContentInit {
    _dynamic: boolean;
    control: NgControl;
    protected controlClassService: ControlClassService;
    controlErrorComponent: ClrControlError;
    controlHelperComponent: ClrControlHelper;
    controlSuccessComponent: ClrControlSuccess;
    protected ifControlStateService: IfControlStateService;
    label: ClrLabel;
    protected layoutService: LayoutService;
    protected ngControlService: NgControlService;
    get showHelper(): boolean;
    get showInvalid(): boolean;
    get showValid(): boolean;
    protected subscriptions: Subscription[];
    constructor(ifControlStateService: IfControlStateService, layoutService: LayoutService, controlClassService: ControlClassService, ngControlService: NgControlService);
    addGrid(): boolean;
    controlClass(): string;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrAbstractContainer, never, never, {}, {}, ["label", "controlSuccessComponent", "controlErrorComponent", "controlHelperComponent"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrAbstractContainer, [null, { optional: true; }, null, null]>;
}

export declare class ClrAccordion implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    multiPanel: boolean | string;
    panels: QueryList<ClrAccordionPanel>;
    subscriptions: Subscription[];
    constructor(accordionService: AccordionService);
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrAccordion, "clr-accordion", never, { "multiPanel": "clrAccordionMultiPanel"; }, {}, ["panels"], ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrAccordion, never>;
}

export declare class ClrAccordionContent {
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrAccordionContent, "clr-accordion-content, clr-step-content", never, {}, {}, never, ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrAccordionContent, never>;
}

export declare class ClrAccordionDescription {
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrAccordionDescription, "clr-accordion-description, clr-step-description", never, {}, {}, never, ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrAccordionDescription, never>;
}

export declare class ClrAccordionModule {
    constructor();
    static ɵfac: i0.ɵɵFactoryDef<ClrAccordionModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<ClrAccordionModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ClrAccordionModule, [typeof i1.ClrAccordion, typeof i2.ClrAccordionPanel, typeof i3.ClrAccordionTitle, typeof i4.ClrAccordionDescription, typeof i5.ClrAccordionContent, typeof i6.AccordionOompaLoompa, typeof i7.AccordionWillyWonka], [typeof i8.CommonModule, typeof i9.ClrIconModule], [typeof i1.ClrAccordion, typeof i2.ClrAccordionPanel, typeof i3.ClrAccordionTitle, typeof i4.ClrAccordionDescription, typeof i5.ClrAccordionContent, typeof i6.AccordionOompaLoompa, typeof i7.AccordionWillyWonka]>;
}

export declare class ClrAccordionPanel implements OnInit, OnChanges {
    readonly AccordionStatus: typeof AccordionStatus;
    accordionDescription: QueryList<ClrAccordionDescription>;
    commonStrings: ClrCommonStringsService;
    disabled: boolean;
    get id(): string;
    set id(value: string);
    isAccordion: boolean;
    panel: Observable<AccordionPanelModel>;
    panelOpen: boolean;
    panelOpenChange: EventEmitter<boolean>;
    constructor(commonStrings: ClrCommonStringsService, accordionService: AccordionService, ifExpandService: IfExpandService, _id: string);
    collapsePanelOnAnimationDone(panel: AccordionPanelModel): void;
    getAccordionContentId(id: string): string;
    getAccordionHeaderId(id: string): string;
    getPanelStateClasses(panel: AccordionPanelModel): string;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    togglePanel(): void;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrAccordionPanel, "clr-accordion-panel", never, { "disabled": "clrAccordionPanelDisabled"; "panelOpen": "clrAccordionPanelOpen"; }, { "panelOpenChange": "clrAccordionPanelOpenChange"; }, ["accordionDescription"], ["clr-accordion-title, clr-step-title", "clr-accordion-description, clr-step-description", "*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrAccordionPanel, never>;
}

export declare class ClrAccordionTitle {
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrAccordionTitle, "clr-accordion-title, clr-step-title", never, {}, {}, never, ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrAccordionTitle, never>;
}

export declare class ClrAlert implements OnInit, OnDestroy {
    _closed: boolean;
    _closedChanged: EventEmitter<boolean>;
    get alertClass(): string;
    set alertIconShape(value: string);
    set alertType(val: string);
    get alertType(): string;
    closable: boolean;
    clrCloseButtonAriaLabel: string;
    set hidden(value: boolean);
    get hidden(): boolean;
    isAppLevel: boolean;
    isSmall: boolean;
    constructor(iconService: AlertIconAndTypesService, cdr: ChangeDetectorRef, multiAlertService: MultiAlertService, commonStrings: ClrCommonStringsService);
    close(): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    open(): void;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrAlert, "clr-alert", never, { "isSmall": "clrAlertSizeSmall"; "closable": "clrAlertClosable"; "isAppLevel": "clrAlertAppLevel"; "clrCloseButtonAriaLabel": "clrCloseButtonAriaLabel"; "_closed": "clrAlertClosed"; "alertType": "clrAlertType"; "alertIconShape": "clrAlertIcon"; }, { "_closedChanged": "clrAlertClosedChange"; }, never, ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrAlert, [null, null, { optional: true; }, null]>;
}

export declare class ClrAlertItem {
    iconService: AlertIconAndTypesService;
    constructor(iconService: AlertIconAndTypesService);
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrAlertItem, "clr-alert-item", never, {}, {}, never, ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrAlertItem, never>;
}

export declare class ClrAlertModule {
    constructor();
    static ɵfac: i0.ɵɵFactoryDef<ClrAlertModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<ClrAlertModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ClrAlertModule, [typeof i1.ClrAlert, typeof i2.ClrAlertItem, typeof i3.ClrAlerts, typeof i4.ClrAlertsPager, typeof i5.ClrAlertText], [typeof i6.CommonModule, typeof i7.ClrIconModule, typeof i8.ClrDropdownModule], [typeof i1.ClrAlert, typeof i2.ClrAlertItem, typeof i3.ClrAlerts, typeof i4.ClrAlertsPager, typeof i5.ClrAlertText]>;
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
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrAlerts, "clr-alerts", never, { "_inputCurrentIndex": "clrCurrentAlertIndex"; "currentAlert": "clrCurrentAlert"; }, { "currentAlertIndexChange": "clrCurrentAlertIndexChange"; "currentAlertChange": "clrCurrentAlertChange"; }, ["allAlerts"], ["clr-alert"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrAlerts, never>;
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
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrAlertsPager, "clr-alerts-pager", never, { "currentAlert": "clrCurrentAlert"; "currentAlertIndex": "clrCurrentAlertIndex"; }, { "currentAlertChange": "clrCurrentAlertChange"; "currentAlertIndexChange": "clrCurrentAlertIndexChange"; }, never, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrAlertsPager, never>;
}

export declare class ClrAlertText {
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrAlertText, ".alert-text", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrAlertText, never>;
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
    static ɵfac: i0.ɵɵFactoryDef<ClrAriaLiveService, never>;
    static ɵprov: i0.ɵɵInjectableDef<ClrAriaLiveService>;
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
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrButton, "clr-button", never, { "inMenu": "clrInMenu"; "classNames": "class"; "name": "name"; "type": "type"; "id": "id"; "disabled": "disabled"; }, { "_click": "click"; }, never, ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrButton, [{ optional: true; skipSelf: true; }, null]>;
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
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrButtonGroup, "clr-button-group", never, { "menuPosition": "clrMenuPosition"; }, {}, ["buttons"], never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrButtonGroup, never>;
}

export declare class ClrButtonGroupModule {
    static ɵfac: i0.ɵɵFactoryDef<ClrButtonGroupModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<ClrButtonGroupModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ClrButtonGroupModule, [typeof i1.ClrButton, typeof i2.ClrButtonGroup], [typeof i3.CommonModule, typeof i4.ClrIconModule, typeof i5.ClrPopoverModuleNext], [typeof i1.ClrButton, typeof i2.ClrButtonGroup]>;
}

export declare class ClrButtonModule {
    constructor();
    static ɵfac: i0.ɵɵFactoryDef<ClrButtonModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<ClrButtonModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ClrButtonModule, never, never, [typeof i1.ClrLoadingButtonModule, typeof i2.ClrButtonGroupModule]>;
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
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrCalendar, "clr-calendar", never, {}, {}, never, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrCalendar, never>;
}

export declare class ClrCheckbox extends WrappedFormControl<ClrCheckboxWrapper> {
    constructor(vcr: ViewContainerRef, injector: Injector, control: NgControl, renderer: Renderer2, el: ElementRef, toggle: string);
    ngOnInit(): void;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrCheckbox, "[clrCheckbox],[clrToggle]", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrCheckbox, [null, null, { optional: true; self: true; }, null, null, { attribute: "clrToggle"; }]>;
}

export declare class ClrCheckboxContainer extends ClrAbstractContainer implements AfterContentInit {
    checkboxes: QueryList<ClrCheckbox>;
    set clrInline(value: boolean | string);
    get clrInline(): boolean | string;
    protected controlClassService: ControlClassService;
    protected ifControlStateService: IfControlStateService;
    protected layoutService: LayoutService;
    protected ngControlService: NgControlService;
    role: string;
    constructor(layoutService: LayoutService, controlClassService: ControlClassService, ngControlService: NgControlService, ifControlStateService: IfControlStateService);
    ngAfterContentInit(): void;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrCheckboxContainer, "clr-checkbox-container,clr-toggle-container", never, { "clrInline": "clrInline"; }, {}, ["checkboxes"], ["label", "clr-checkbox-wrapper,clr-toggle-wrapper", "clr-control-helper", "clr-control-error", "clr-control-success"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrCheckboxContainer, [{ optional: true; }, null, null, null]>;
}

export declare class ClrCheckboxModule {
    constructor();
    static ɵfac: i0.ɵɵFactoryDef<ClrCheckboxModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<ClrCheckboxModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ClrCheckboxModule, [typeof i1.ClrCheckbox, typeof i2.ClrCheckboxContainer, typeof i3.ClrCheckboxWrapper], [typeof i4.CommonModule, typeof i5.ClrIconModule, typeof i6.ClrCommonFormsModule, typeof i7.ClrHostWrappingModule], [typeof i6.ClrCommonFormsModule, typeof i1.ClrCheckbox, typeof i2.ClrCheckboxContainer, typeof i3.ClrCheckboxWrapper]>;
}

export declare class ClrCheckboxWrapper implements DynamicWrapper, OnInit, OnDestroy {
    _dynamic: boolean;
    label: ClrLabel;
    toggle: boolean;
    constructor(toggleService: BehaviorSubject<boolean>);
    ngOnDestroy(): void;
    ngOnInit(): void;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrCheckboxWrapper, "clr-checkbox-wrapper,clr-toggle-wrapper", never, {}, {}, ["label"], ["[clrCheckbox],[clrToggle]", "label"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrCheckboxWrapper, never>;
}

export declare class ClrCombobox<T> extends WrappedFormControl<ClrComboboxContainer> implements ControlValueAccessor, LoadingListener, AfterContentInit {
    get ariaControls(): string;
    get ariaDescribedBySelection(): string;
    get ariaOwns(): string;
    clrInputChange: EventEmitter<string>;
    clrOpenChange: Observable<boolean>;
    clrSelectionChange: Observable<ComboboxModel<T>>;
    commonStrings: ClrCommonStringsService;
    control: NgControl;
    get displayField(): string;
    protected el: ElementRef;
    focused: boolean;
    focusedPill: any;
    get id(): string;
    set id(id: string);
    protected index: number;
    invalid: boolean;
    set multiSelect(value: boolean | string);
    get multiSelect(): boolean | string;
    get multiSelectModel(): T[];
    get openState(): boolean;
    optionSelected: ClrOptionSelected<T>;
    optionSelectionService: OptionSelectionService<T>;
    placeholder: string;
    protected renderer: Renderer2;
    set searchText(text: string);
    get searchText(): string;
    smartPosition: ClrPopoverPosition;
    textbox: ElementRef;
    trigger: ElementRef;
    constructor(vcr: ViewContainerRef, injector: Injector, control: NgControl, renderer: Renderer2, el: ElementRef, optionSelectionService: OptionSelectionService<T>, commonStrings: ClrCommonStringsService, toggleService: ClrPopoverToggleService, positionService: ClrPopoverPositionService, controlStateService: IfControlStateService, containerService: ComboboxContainerService, platformId: any, ariaService: AriaService, focusHandler: ComboboxFocusHandler<T>, cdr: ChangeDetectorRef);
    focusFirstActive(): void;
    focusInput(): void;
    getActiveDescendant(): string;
    getSelectionAriaLabel(): string;
    inputId(): string;
    loadingStateChange(state: ClrLoadingState): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onBlur(): void;
    onFocus(): void;
    onKeyUp(event: KeyboardEvent): void;
    registerOnChange(onChange: any): void;
    registerOnTouched(onTouched: any): void;
    setDisabledState(): void;
    unselect(item: T): void;
    writeValue(value: T | T[]): void;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrCombobox<any>, "clr-combobox", never, { "placeholder": "placeholder"; "multiSelect": "clrMulti"; }, { "clrInputChange": "clrInputChange"; "clrOpenChange": "clrOpenChange"; "clrSelectionChange": "clrSelectionChange"; }, ["optionSelected"], ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrCombobox<any>, [null, null, { optional: true; self: true; }, null, null, null, null, null, null, { optional: true; }, { optional: true; }, null, null, null, null]>;
}

export declare class ClrComboboxContainer extends ClrAbstractContainer implements AfterContentInit, AfterViewInit {
    controlContainer: ElementRef;
    label: ClrLabel;
    constructor(ifControlStateService: IfControlStateService, layoutService: LayoutService, controlClassService: ControlClassService, ngControlService: NgControlService, containerService: ComboboxContainerService, el: ElementRef);
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrComboboxContainer, "clr-combobox-container", never, {}, {}, ["label"], ["label", "clr-combobox", "clr-control-helper", "clr-control-error", "clr-control-success"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrComboboxContainer, [null, { optional: true; }, null, null, null, null]>;
}

export declare class ClrComboboxModule {
    constructor();
    static ɵfac: i0.ɵɵFactoryDef<ClrComboboxModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<ClrComboboxModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ClrComboboxModule, [typeof i1.ClrCombobox, typeof i2.ClrComboboxContainer, typeof i3.ClrOptions, typeof i4.ClrOption, typeof i5.ClrOptionSelected, typeof i6.ClrOptionItems], [typeof i7.CommonModule, typeof i8.FormsModule, typeof i9.ClrIconModule, typeof i10.ClrKeyFocusModule, typeof i11.ClrCommonFormsModule, typeof i12.ClrConditionalModule, typeof i13.ClrPopoverModuleNext, typeof i14.ClrSpinnerModule], [typeof i11.ClrCommonFormsModule, typeof i1.ClrCombobox, typeof i2.ClrComboboxContainer, typeof i3.ClrOptions, typeof i4.ClrOption, typeof i5.ClrOptionSelected, typeof i12.ClrConditionalModule, typeof i6.ClrOptionItems]>;
}

export declare class ClrCommonFormsModule {
    constructor();
    static ɵfac: i0.ɵɵFactoryDef<ClrCommonFormsModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<ClrCommonFormsModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ClrCommonFormsModule, [typeof i1.ClrLabel, typeof i2.ClrControlError, typeof i3.ClrControlSuccess, typeof i4.ClrControlHelper, typeof i5.ClrIfError, typeof i6.ClrIfSuccess, typeof i7.ClrForm, typeof i8.ClrLayout, typeof i9.ClrControlContainer, typeof i10.ClrControl], [typeof i11.CommonModule, typeof i12.ClrIconModule], [typeof i1.ClrLabel, typeof i2.ClrControlError, typeof i3.ClrControlSuccess, typeof i4.ClrControlHelper, typeof i5.ClrIfError, typeof i6.ClrIfSuccess, typeof i7.ClrForm, typeof i8.ClrLayout, typeof i9.ClrControlContainer, typeof i10.ClrControl]>;
}

export interface ClrCommonStrings {
    alertCloseButtonAriaLabel: string;
    allColumnsSelected: string;
    close: string;
    collapse: string;
    columnSeparatorAriaLabel?: string;
    columnSeparatorDescription?: string;
    comboboxDelete: string;
    comboboxNoResults: string;
    comboboxOpen: string;
    comboboxSearching: string;
    comboboxSelected: string;
    comboboxSelection: string;
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
    delete?: string;
    detailExpandableAriaLabel: string;
    detailPaneEnd: string;
    detailPaneStart: string;
    expand: string;
    filterItems: string;
    firstPage: string;
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
    selection?: string;
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
    static ɵfac: i0.ɵɵFactoryDef<ClrCommonStringsService, never>;
    static ɵprov: i0.ɵɵInjectableDef<ClrCommonStringsService>;
}

export declare class ClrConditionalModule {
    static ɵfac: i0.ɵɵFactoryDef<ClrConditionalModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<ClrConditionalModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ClrConditionalModule, [typeof i1.ClrIfActive, typeof i2.ClrIfOpen, typeof i3.ClrIfExpanded], [typeof i4.CommonModule], [typeof i1.ClrIfActive, typeof i2.ClrIfOpen, typeof i3.ClrIfExpanded]>;
}

export declare class ClrControl extends WrappedFormControl<ClrControlContainer> {
    protected index: number;
    constructor(vcr: ViewContainerRef, injector: Injector, control: NgControl, renderer: Renderer2, el: ElementRef);
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrControl, "[clrControl]", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrControl, [null, null, { optional: true; self: true; }, null, null]>;
}

export declare class ClrControlContainer extends ClrAbstractContainer {
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrControlContainer, "clr-control-container", never, {}, {}, never, ["label", "*", "clr-control-helper", "clr-control-error", "clr-control-success"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrControlContainer, never>;
}

export declare class ClrControlError extends ClrAbstractControl {
    protected containerIdService: ContainerIdService;
    protected controlIdService: ControlIdService;
    controlIdSuffix: string;
    constructor(controlIdService: ControlIdService, containerIdService: ContainerIdService);
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrControlError, "clr-control-error", never, {}, {}, never, ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrControlError, [{ optional: true; }, { optional: true; }]>;
}

export declare class ClrControlHelper extends ClrAbstractControl {
    protected containerIdService: ContainerIdService;
    protected controlIdService: ControlIdService;
    controlIdSuffix: string;
    constructor(controlIdService: ControlIdService, containerIdService: ContainerIdService);
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrControlHelper, "clr-control-helper", never, {}, {}, never, ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrControlHelper, [{ optional: true; }, { optional: true; }]>;
}

export declare class ClrControlSuccess extends ClrAbstractControl {
    protected containerIdService: ContainerIdService;
    protected controlIdService: ControlIdService;
    controlIdSuffix: string;
    constructor(controlIdService: ControlIdService, containerIdService: ContainerIdService);
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrControlSuccess, "clr-control-success", never, {}, {}, never, ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrControlSuccess, [{ optional: true; }, { optional: true; }]>;
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
    clrDgDisablePageFocus: boolean;
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
    selectAllId: string;
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
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrDatagrid<any>, "clr-datagrid", never, { "loading": "clrDgLoading"; "selected": "clrDgSelected"; "singleSelected": "clrDgSingleSelected"; "clrDgSingleSelectionAriaLabel": "clrDgSingleSelectionAriaLabel"; "clrDgSingleActionableAriaLabel": "clrDgSingleActionableAriaLabel"; "clrDetailExpandableAriaLabel": "clrDetailExpandableAriaLabel"; "clrDgDisablePageFocus": "clrDgDisablePageFocus"; "clrDgPreserveSelection": "clrDgPreserveSelection"; "rowSelectionMode": "clrDgRowSelection"; }, { "refresh": "clrDgRefresh"; "selectedChanged": "clrDgSelectedChange"; "singleSelectedChanged": "clrDgSingleSelectedChange"; }, ["iterator", "placeholder", "columns", "rows"], ["clr-dg-action-bar", "clr-dg-placeholder", "clr-dg-footer", "[clrIfDetail],clr-dg-detail"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrDatagrid<any>, never>;
}

export declare class ClrDatagridActionBar {
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrDatagridActionBar, "clr-dg-action-bar", never, {}, {}, never, ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrDatagridActionBar, never>;
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
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrDatagridActionOverflow, "clr-dg-action-overflow", never, { "open": "clrDgActionOverflowOpen"; }, { "openChange": "clrDgActionOverflowOpenChange"; }, never, ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrDatagridActionOverflow, never>;
}

export declare class ClrDatagridCell implements OnInit {
    get _view(): any;
    signpost: QueryList<ClrSignpost>;
    constructor(vcr: ViewContainerRef);
    ngOnInit(): void;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrDatagridCell, "clr-dg-cell", never, {}, {}, ["signpost"], ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrDatagridCell, never>;
}

export declare class ClrDatagridColumn<T = any> extends DatagridFilterRegistrar<T, ClrDatagridFilterInterface<T>> implements OnDestroy, OnInit, OnChanges {
    get _view(): any;
    get ariaSort(): "none" | "ascending" | "descending";
    get colType(): 'string' | 'number';
    set colType(value: 'string' | 'number');
    commonStrings: ClrCommonStringsService;
    customFilter: boolean;
    get field(): string;
    set field(field: string);
    get filterValue(): any;
    set filterValue(newValue: any);
    filterValueChange: EventEmitter<any>;
    set projectedFilter(custom: any);
    showSeparator: boolean;
    get sortBy(): ClrDatagridComparatorInterface<T> | string;
    set sortBy(comparator: ClrDatagridComparatorInterface<T> | string);
    get sortDirection(): 'up' | 'down' | null;
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
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    sort(reverse?: boolean): void;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrDatagridColumn<any>, "clr-dg-column", never, { "colType": "clrDgColType"; "field": "clrDgField"; "sortBy": "clrDgSortBy"; "sorted": "clrDgSorted"; "sortOrder": "clrDgSortOrder"; "updateFilterValue": "clrFilterValue"; }, { "sortedChange": "clrDgSortedChange"; "sortOrderChange": "clrDgSortOrderChange"; "filterValueChange": "clrFilterValueChange"; }, ["projectedFilter"], ["clr-dg-filter, clr-dg-string-filter, clr-dg-numeric-filter", "*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrDatagridColumn<any>, never>;
}

export declare class ClrDatagridColumnSeparator implements AfterViewInit, OnDestroy {
    columnSeparatorId: string;
    commonString: ClrCommonStringsService;
    get descriptionId(): string;
    constructor(columnResizerService: ColumnResizerService, renderer: Renderer2, ngZone: NgZone, tableSizeService: TableSizeService, commonString: ClrCommonStringsService, document: any, columnSeparatorId: string);
    hideTracker(): void;
    moveTracker(movedBy: number): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    showTracker(): void;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrDatagridColumnSeparator, "clr-dg-column-separator", never, {}, {}, never, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrDatagridColumnSeparator, never>;
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
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrDatagridColumnToggle, "clr-dg-column-toggle", never, {}, {}, ["customToggleTitle", "customToggleButton"], ["clr-dg-column-toggle-title", "clr-dg-column-toggle-button"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrDatagridColumnToggle, never>;
}

export declare class ClrDatagridColumnToggleButton {
    get allHideablesVisible(): boolean;
    get clrAllSelected(): Observable<boolean>;
    constructor(columnsService: ColumnsService);
    selectAll(): void;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrDatagridColumnToggleButton, "clr-dg-column-toggle-button", never, {}, { "clrAllSelected": "clrAllSelected"; }, never, ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrDatagridColumnToggleButton, never>;
}

export declare class ClrDatagridColumnToggleTitle {
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrDatagridColumnToggleTitle, "clr-dg-column-toggle-title", never, {}, {}, never, ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrDatagridColumnToggleTitle, never>;
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
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrDatagridDetail, "clr-dg-detail", never, {}, {}, ["header"], ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrDatagridDetail, never>;
}

export declare class ClrDatagridDetailBody {
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrDatagridDetailBody, "clr-dg-detail-body", never, {}, {}, never, ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrDatagridDetailBody, never>;
}

export declare class ClrDatagridDetailHeader {
    commonStrings: ClrCommonStringsService;
    detailService: DetailService;
    get titleId(): string;
    constructor(detailService: DetailService, commonStrings: ClrCommonStringsService);
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrDatagridDetailHeader, "clr-dg-detail-header", never, {}, {}, never, ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrDatagridDetailHeader, never>;
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
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrDatagridFilter<any>, "clr-dg-filter", never, { "open": "clrDgFilterOpen"; "customFilter": "clrDgFilter"; }, { "openChange": "clrDgFilterOpenChange"; }, never, ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrDatagridFilter<any>, never>;
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
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrDatagridFooter<any>, "clr-dg-footer", never, {}, {}, ["toggle"], ["clr-dg-column-toggle", "*", "clr-dg-pagination"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrDatagridFooter<any>, never>;
}

export declare class ClrDatagridHideableColumn implements OnDestroy {
    set clrDgHidden(hidden: boolean);
    set clrDgHideableColumn(value: {
        hidden: boolean;
    } | string);
    hiddenChange: EventEmitter<boolean>;
    constructor(titleTemplateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef, columnsService: ColumnsService, columnState: BehaviorSubject<ColumnState>);
    ngOnDestroy(): void;
    ngOnInit(): void;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrDatagridHideableColumn, "[clrDgHideableColumn]", never, { "clrDgHideableColumn": "clrDgHideableColumn"; "clrDgHidden": "clrDgHidden"; }, { "hiddenChange": "clrDgHiddenChange"; }, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrDatagridHideableColumn, [null, null, null, { optional: true; }]>;
}

export declare class ClrDatagridItems<T> implements DoCheck, OnDestroy {
    set rawItems(items: T[]);
    template: TemplateRef<NgForOfContext<T>>;
    set trackBy(value: TrackByFunction<T>);
    constructor(template: TemplateRef<NgForOfContext<T>>, differs: IterableDiffers, items: Items, vcr: ViewContainerRef);
    ngDoCheck(): void;
    ngOnDestroy(): void;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrDatagridItems<any>, "[clrDgItems][clrDgItemsOf]", never, { "rawItems": "clrDgItemsOf"; "trackBy": "clrDgItemsTrackBy"; }, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrDatagridItems<any>, never>;
}

export declare class ClrDatagridItemsTrackBy<T = any> {
    set trackBy(value: TrackByFunction<T>);
    constructor(_items: Items<T>);
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrDatagridItemsTrackBy<any>, "[ngForTrackBy]", never, { "trackBy": "ngForTrackBy"; }, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrDatagridItemsTrackBy<any>, [{ optional: true; }]>;
}

export declare class ClrDatagridModule {
    constructor();
    static ɵfac: i0.ɵɵFactoryDef<ClrDatagridModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<ClrDatagridModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ClrDatagridModule, [typeof i1.ClrDatagrid, typeof i2.ClrDatagridActionBar, typeof i3.ClrDatagridActionOverflow, typeof i4.ClrDatagridColumn, typeof i5.ClrDatagridColumnSeparator, typeof i6.ClrDatagridColumnToggle, typeof i7.ClrDatagridHideableColumn, typeof i8.ClrDatagridFilter, typeof i9.ClrDatagridItems, typeof i10.ClrDatagridItemsTrackBy, typeof i11.ClrDatagridRow, typeof i12.ClrDatagridRowDetail, typeof i13.DatagridDetailRegisterer, typeof i14.ClrDatagridCell, typeof i15.ClrDatagridFooter, typeof i16.ClrDatagridPagination, typeof i17.ClrDatagridPageSize, typeof i18.ClrDatagridPlaceholder, typeof i19.ClrDatagridColumnToggleButton, typeof i20.ClrDatagridColumnToggleTitle, typeof i21.ClrDatagridDetail, typeof i22.ClrIfDetail, typeof i23.ClrDatagridDetailHeader, typeof i24.ClrDatagridDetailBody, typeof i25.WrappedCell, typeof i26.WrappedColumn, typeof i27.WrappedRow, typeof i28.DatagridMainRenderer, typeof i29.DatagridHeaderRenderer, typeof i30.DatagridRowRenderer, typeof i31.DatagridCellRenderer, typeof i32.DatagridWillyWonka, typeof i33.ActionableOompaLoompa, typeof i34.ExpandableOompaLoompa, typeof i35.DatagridStringFilter, typeof i36.DatagridNumericFilter], [typeof i37.CommonModule, typeof i38.ClrIconModule, typeof i39.ClrFormsModule, typeof i40.FormsModule, typeof i41.ClrLoadingModule, typeof i42.ClrConditionalModule, typeof i43.ClrOutsideClickModule, typeof i44.ClrExpandableAnimationModule, typeof i45.ClrDragAndDropModule, typeof i46.ClrSpinnerModule, typeof i47.ClrPopoverModuleNext, typeof i48.ClrFocusTrapModule, typeof i49.ClrFocusOnViewInitModule], [typeof i1.ClrDatagrid, typeof i2.ClrDatagridActionBar, typeof i3.ClrDatagridActionOverflow, typeof i4.ClrDatagridColumn, typeof i5.ClrDatagridColumnSeparator, typeof i6.ClrDatagridColumnToggle, typeof i7.ClrDatagridHideableColumn, typeof i8.ClrDatagridFilter, typeof i9.ClrDatagridItems, typeof i10.ClrDatagridItemsTrackBy, typeof i11.ClrDatagridRow, typeof i12.ClrDatagridRowDetail, typeof i13.DatagridDetailRegisterer, typeof i14.ClrDatagridCell, typeof i15.ClrDatagridFooter, typeof i16.ClrDatagridPagination, typeof i17.ClrDatagridPageSize, typeof i18.ClrDatagridPlaceholder, typeof i19.ClrDatagridColumnToggleButton, typeof i20.ClrDatagridColumnToggleTitle, typeof i21.ClrDatagridDetail, typeof i22.ClrIfDetail, typeof i23.ClrDatagridDetailHeader, typeof i24.ClrDatagridDetailBody, typeof i25.WrappedCell, typeof i26.WrappedColumn, typeof i27.WrappedRow, typeof i28.DatagridMainRenderer, typeof i29.DatagridHeaderRenderer, typeof i30.DatagridRowRenderer, typeof i31.DatagridCellRenderer, typeof i32.DatagridWillyWonka, typeof i33.ActionableOompaLoompa, typeof i34.ExpandableOompaLoompa, typeof i35.DatagridStringFilter, typeof i36.DatagridNumericFilter]>;
}

export interface ClrDatagridNumericFilterInterface<T> {
    accepts(item: T, low: number, high: number): boolean;
}

export declare class ClrDatagridPageSize {
    page: Page;
    pageSizeOptions: number[];
    constructor(page: Page);
    ngOnInit(): void;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrDatagridPageSize, "clr-dg-page-size", never, { "pageSizeOptions": "clrPageSizeOptions"; }, {}, never, ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrDatagridPageSize, never>;
}

export declare class ClrDatagridPagination implements OnDestroy, OnInit {
    _pageSizeComponent: ClrDatagridPageSize;
    commonStrings: ClrCommonStringsService;
    currentChanged: EventEmitter<number>;
    get currentPage(): number | string;
    set currentPage(page: number | string);
    currentPageInputRef: ElementRef;
    detailService: DetailService;
    disableCurrentPageInput: boolean;
    get firstItem(): number;
    get lastItem(): number;
    get lastPage(): number | string;
    set lastPage(last: number | string);
    get middlePages(): number[];
    page: Page;
    get pageSize(): number | string;
    set pageSize(size: number | string);
    get totalItems(): number | string;
    set totalItems(total: number | string);
    constructor(page: Page, commonStrings: ClrCommonStringsService, detailService: DetailService);
    next(): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    previous(): void;
    updateCurrentPage(event: any): void;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrDatagridPagination, "clr-dg-pagination", never, { "disableCurrentPageInput": "clrDgPageInputDisabled"; "pageSize": "clrDgPageSize"; "totalItems": "clrDgTotalItems"; "lastPage": "clrDgLastPage"; "currentPage": "clrDgPage"; }, { "currentChanged": "clrDgPageChange"; }, ["_pageSizeComponent"], ["clr-dg-page-size", "*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrDatagridPagination, never>;
}

export declare class ClrDatagridPlaceholder<T = any> {
    get emptyDatagrid(): boolean;
    constructor(items: Items<T>);
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrDatagridPlaceholder<any>, "clr-dg-placeholder", never, {}, {}, never, ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrDatagridPlaceholder<any>, never>;
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
    set clrDgSelectable(value: boolean | string);
    get clrDgSelectable(): boolean | string;
    commonStrings: ClrCommonStringsService;
    detailButton: HTMLButtonElement;
    detailService: DetailService;
    dgCells: QueryList<ClrDatagridCell>;
    displayCells: boolean;
    expand: DatagridIfExpandService;
    expandAnimation: ClrExpandableAnimation;
    expandAnimationTrigger: boolean;
    expandableId: string;
    get expanded(): boolean | string;
    set expanded(value: boolean | string);
    expandedChange: EventEmitter<boolean>;
    globalExpandable: ExpandableRowsCount;
    id: string;
    item: T;
    radioId: string;
    replaced: boolean;
    rowActionService: RowActionService;
    get selected(): boolean | string;
    set selected(value: boolean | string);
    selectedChanged: EventEmitter<boolean>;
    selection: Selection<T>;
    constructor(selection: Selection<T>, rowActionService: RowActionService, globalExpandable: ExpandableRowsCount, expand: DatagridIfExpandService, detailService: DetailService, displayMode: DisplayModeService, vcr: ViewContainerRef, renderer: Renderer2, el: ElementRef, commonStrings: ClrCommonStringsService);
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    toggle(selected?: boolean): void;
    toggleExpand(): void;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrDatagridRow<any>, "clr-dg-row", never, { "item": "clrDgItem"; "selected": "clrDgSelected"; "clrDgSelectable": "clrDgSelectable"; "expanded": "clrDgExpanded"; "clrDgDetailOpenLabel": "clrDgDetailOpenLabel"; "clrDgDetailCloseLabel": "clrDgDetailCloseLabel"; }, { "selectedChanged": "clrDgSelectedChange"; "expandedChange": "clrDgExpandedChange"; }, ["dgCells"], ["clr-dg-row-detail", "clr-dg-action-overflow", "clr-dg-cell"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrDatagridRow<any>, never>;
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
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrDatagridRowDetail, "clr-dg-row-detail", never, { "replace": "clrDgReplace"; "_beginningOfExpandableContentAriaText": "clrRowDetailBeginningAriaText"; "_endOfExpandableContentAriaText": "clrRowDetailEndAriaText"; }, {}, ["cells"], ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrDatagridRowDetail, never>;
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
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrDatalist, "datalist", never, { "id": "id"; }, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrDatalist, [{ optional: true; }]>;
}

export declare class ClrDatalistContainer extends ClrAbstractContainer {
    focus: boolean;
    protected ifControlStateService: IfControlStateService;
    constructor(controlClassService: ControlClassService, layoutService: LayoutService, ngControlService: NgControlService, focusService: FocusService, ifControlStateService: IfControlStateService);
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrDatalistContainer, "clr-datalist-container", never, {}, {}, never, ["label", "[clrDatalistInput]", "datalist", "clr-control-helper", "clr-control-error", "clr-control-success"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrDatalistContainer, [null, { optional: true; }, null, null, null]>;
}

export declare class ClrDatalistInput extends WrappedFormControl<ClrDatalistContainer> implements AfterContentInit {
    listValue: string;
    constructor(focusService: FocusService, vcr: ViewContainerRef, injector: Injector, control: NgControl, renderer: Renderer2, el: ElementRef, datalistIdService: DatalistIdService);
    ngAfterContentInit(): void;
    triggerFocus(): void;
    triggerValidation(): void;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrDatalistInput, "[clrDatalistInput]", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrDatalistInput, [{ optional: true; }, null, null, { optional: true; self: true; }, null, null, null]>;
}

export declare class ClrDatalistModule {
    constructor();
    static ɵfac: i0.ɵɵFactoryDef<ClrDatalistModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<ClrDatalistModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ClrDatalistModule, [typeof i1.ClrDatalist, typeof i2.ClrDatalistInput, typeof i3.ClrDatalistContainer], [typeof i4.CommonModule, typeof i5.ClrInputModule, typeof i6.ClrIconModule], [typeof i1.ClrDatalist, typeof i2.ClrDatalistInput, typeof i3.ClrDatalistContainer]>;
}

export declare class ClrDataModule {
    static ɵfac: i0.ɵɵFactoryDef<ClrDataModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<ClrDataModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ClrDataModule, never, never, [typeof i1.ClrDatagridModule, typeof i2.ClrStackViewModule, typeof i3.ClrTreeViewModule]>;
}

export declare class ClrDateContainer extends ClrAbstractContainer implements AfterViewInit {
    set actionButton(button: ElementRef);
    set clrPosition(position: string);
    commonStrings: ClrCommonStringsService;
    protected controlClassService: ControlClassService;
    focus: boolean;
    protected ifControlStateService: IfControlStateService;
    get isEnabled(): boolean;
    get isInputDateDisabled(): boolean;
    protected layoutService: LayoutService;
    protected ngControlService: NgControlService;
    get open(): boolean;
    get popoverPosition(): ClrPopoverPosition;
    constructor(toggleService: ClrPopoverToggleService, dateNavigationService: DateNavigationService, datepickerEnabledService: DatepickerEnabledService, dateFormControlService: DateFormControlService, commonStrings: ClrCommonStringsService, focusService: FocusService, viewManagerService: ViewManagerService, controlClassService: ControlClassService, layoutService: LayoutService, ngControlService: NgControlService, ifControlStateService: IfControlStateService);
    ngAfterViewInit(): void;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrDateContainer, "clr-date-container", never, { "clrPosition": "clrPosition"; }, {}, never, ["label", "[clrDate]", "clr-control-helper", "clr-control-error", "clr-control-success"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrDateContainer, [null, null, null, null, null, null, null, null, { optional: true; }, null, null]>;
}

export declare class ClrDateInput extends WrappedFormControl<ClrDateContainer> implements OnInit, AfterViewInit, OnDestroy {
    protected control: NgControl;
    set date(date: Date | string);
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
    static ngAcceptInputType_date: Date | null | string;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrDateInput, "[clrDate]", never, { "placeholder": "placeholder"; "date": "clrDate"; "min": "min"; "max": "max"; "disabled": "disabled"; }, { "dateChange": "clrDateChange"; }, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrDateInput, [null, null, null, null, { optional: true; self: true; }, { optional: true; }, { optional: true; }, { optional: true; }, { optional: true; }, { optional: true; }, null, { optional: true; }, null]>;
}

export declare class ClrDatepickerModule {
    constructor();
    static ɵfac: i0.ɵɵFactoryDef<ClrDatepickerModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<ClrDatepickerModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ClrDatepickerModule, [typeof i1.ClrDay, typeof i2.ClrDateContainer, typeof i3.ClrDateInput, typeof i4.ClrDatepickerViewManager, typeof i5.ClrMonthpicker, typeof i6.ClrYearpicker, typeof i7.ClrDaypicker, typeof i8.ClrCalendar], [typeof i9.CommonModule, typeof i10.ClrHostWrappingModule, typeof i11.ClrConditionalModule, typeof i12.ClrPopoverModuleNext, typeof i13.ClrIconModule, typeof i14.ClrFocusTrapModule, typeof i15.ClrCommonFormsModule], [typeof i1.ClrDay, typeof i2.ClrDateContainer, typeof i3.ClrDateInput, typeof i4.ClrDatepickerViewManager, typeof i5.ClrMonthpicker, typeof i6.ClrYearpicker, typeof i7.ClrDaypicker, typeof i8.ClrCalendar]>;
}

export declare class ClrDatepickerViewManager {
    get isDayView(): boolean;
    get isMonthView(): boolean;
    get isYearView(): boolean;
    constructor(viewManagerService: ViewManagerService);
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrDatepickerViewManager, "clr-datepicker-view-manager", never, {}, {}, never, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrDatepickerViewManager, never>;
}

export declare class ClrDay {
    dayString: string;
    set dayView(day: DayViewModel);
    get dayView(): DayViewModel;
    constructor(_dateNavigationService: DateNavigationService, _toggleService: ClrPopoverToggleService, dateFormControlService: DateFormControlService);
    onDayViewFocus(): void;
    selectDay(): void;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrDay, "clr-day", never, { "dayView": "clrDayView"; }, {}, never, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrDay, never>;
}

export declare class ClrDaypicker {
    get calendarMonth(): string;
    get calendarYear(): number;
    commonStrings: ClrCommonStringsService;
    get monthAttrString(): string;
    get yearAttrString(): string;
    constructor(_viewManagerService: ViewManagerService, _dateNavigationService: DateNavigationService, _localeHelperService: LocaleHelperService, commonStrings: ClrCommonStringsService);
    changeToMonthView(): void;
    changeToYearView(): void;
    currentMonth(): void;
    nextMonth(): void;
    previousMonth(): void;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrDaypicker, "clr-daypicker", never, {}, {}, never, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrDaypicker, never>;
}

export declare class ClrDragAndDropModule {
    static ɵfac: i0.ɵɵFactoryDef<ClrDragAndDropModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<ClrDragAndDropModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ClrDragAndDropModule, [typeof i1.ClrDraggable, typeof i2.ClrDroppable, typeof i3.ClrIfDragged, typeof i4.ClrDragHandle, typeof i5.ClrDraggableGhost], [typeof i6.CommonModule], [typeof i1.ClrDraggable, typeof i2.ClrDroppable, typeof i3.ClrIfDragged, typeof i4.ClrDragHandle, typeof i5.ClrDraggableGhost]>;
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
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrDraggable<any>, "[clrDraggable]", never, { "dataTransfer": "clrDraggable"; "group": "clrGroup"; "dragStartDelay": "clrDragStartDelay"; }, { "dragStartEmitter": "clrDragStart"; "dragMoveEmitter": "clrDragMove"; "dragEndEmitter": "clrDragEnd"; }, ["customGhost"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrDraggable<any>, never>;
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
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrDraggableGhost<any>, "clr-draggable-ghost", never, {}, {}, never, ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrDraggableGhost<any>, [null, { optional: true; }, { optional: true; }, null, null]>;
}

export declare class ClrDragHandle<T> implements OnDestroy {
    constructor(el: ElementRef, dragHandleRegistrar: DragHandleRegistrarService<T>);
    ngOnDestroy(): void;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrDragHandle<any>, "[clrDragHandle]", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrDragHandle<any>, [null, { optional: true; }]>;
}

export declare class ClrDropdown implements OnDestroy {
    isMenuClosable: boolean;
    parent: ClrDropdown;
    toggleService: ClrPopoverToggleService;
    constructor(parent: ClrDropdown, toggleService: ClrPopoverToggleService, cdr: ChangeDetectorRef, dropdownService: RootDropdownService);
    ngOnDestroy(): void;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrDropdown, "clr-dropdown", never, { "isMenuClosable": "clrCloseMenuOnItemClick"; }, {}, never, ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrDropdown, [{ optional: true; skipSelf: true; }, null, null, null]>;
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
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrDropdownItem, "[clrDropdownItem]", never, { "disabled": "clrDisabled"; "disabledDeprecated": "disabled"; "dropdownItemId": "id"; }, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrDropdownItem, never>;
}

export declare class ClrDropdownMenu extends AbstractPopover implements AfterContentInit, OnDestroy {
    items: QueryList<FocusableItem>;
    set position(position: string);
    constructor(injector: Injector, parentHost: ElementRef<HTMLElement>, nested: ClrDropdownMenu, focusHandler: DropdownFocusHandler);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrDropdownMenu, "clr-dropdown-menu", never, { "position": "clrPosition"; }, {}, ["items"], ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrDropdownMenu, [null, { optional: true; }, { optional: true; skipSelf: true; }, null]>;
}

export declare class ClrDropdownModule {
    static ɵfac: i0.ɵɵFactoryDef<ClrDropdownModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<ClrDropdownModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ClrDropdownModule, [typeof i1.ClrDropdown, typeof i2.ClrDropdownMenu, typeof i3.ClrDropdownTrigger, typeof i4.ClrDropdownItem], [typeof i5.CommonModule], [typeof i1.ClrDropdown, typeof i2.ClrDropdownMenu, typeof i3.ClrDropdownTrigger, typeof i4.ClrDropdownItem, typeof i6.ClrConditionalModule, typeof i7.ClrIconModule]>;
}

export declare class ClrDropdownTrigger {
    get active(): boolean;
    isRootLevelToggle: boolean;
    constructor(dropdown: ClrDropdown, toggleService: ClrPopoverToggleService, el: ElementRef<HTMLElement>, focusHandler: DropdownFocusHandler);
    onDropdownTriggerClick(event: any): void;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrDropdownTrigger, "[clrDropdownTrigger],[clrDropdownToggle]", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrDropdownTrigger, never>;
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
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrDroppable<any>, "[clrDroppable]", never, { "group": "clrGroup"; "dropTolerance": "clrDropTolerance"; }, { "dragStartEmitter": "clrDragStart"; "dragMoveEmitter": "clrDragMove"; "dragEndEmitter": "clrDragEnd"; "dragLeaveEmitter": "clrDragLeave"; "dragEnterEmitter": "clrDragEnter"; "dropEmitter": "clrDrop"; }, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrDroppable<any>, never>;
}

export interface ClrDropToleranceInterface {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
}

export declare class ClrEmphasisModule {
    static ɵfac: i0.ɵɵFactoryDef<ClrEmphasisModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<ClrEmphasisModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ClrEmphasisModule, never, never, [typeof i1.ClrAlertModule]>;
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
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrExpandableAnimation, "clr-expandable-animation", never, { "clrExpandTrigger": "clrExpandTrigger"; }, {}, never, ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrExpandableAnimation, never>;
}

export declare class ClrFocusOnViewInit implements AfterViewInit {
    set isEnabled(value: boolean | string);
    constructor(el: ElementRef, platformId: any, focusOnViewInit: boolean, document: any, renderer: Renderer2);
    ngAfterViewInit(): void;
    onFocusout(): void;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrFocusOnViewInit, "[clrFocusOnViewInit]", never, { "isEnabled": "clrFocusOnViewInit"; }, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrFocusOnViewInit, never>;
}

export declare class ClrFocusOnViewInitModule {
    static ɵfac: i0.ɵɵFactoryDef<ClrFocusOnViewInitModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<ClrFocusOnViewInitModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ClrFocusOnViewInitModule, [typeof i1.ClrFocusOnViewInit], [typeof i2.CommonModule], [typeof i1.ClrFocusOnViewInit]>;
}

export declare class ClrForm {
    set labelSize(size: number | string);
    labels: QueryList<ClrLabel>;
    layoutService: LayoutService;
    constructor(layoutService: LayoutService, markControlService: MarkControlService);
    markAsTouched(): void;
    onFormSubmit(): void;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrForm, "[clrForm]", never, { "labelSize": "clrLabelSize"; }, {}, ["labels"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrForm, never>;
}

export declare enum ClrFormLayout {
    VERTICAL = "vertical",
    HORIZONTAL = "horizontal",
    COMPACT = "compact"
}

export declare class ClrFormsModule {
    static ɵfac: i0.ɵɵFactoryDef<ClrFormsModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<ClrFormsModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ClrFormsModule, never, [typeof i1.CommonModule], [typeof i2.ClrCommonFormsModule, typeof i3.ClrCheckboxModule, typeof i4.ClrComboboxModule, typeof i5.ClrDatepickerModule, typeof i6.ClrInputModule, typeof i7.ClrPasswordModule, typeof i8.ClrRadioModule, typeof i9.ClrSelectModule, typeof i10.ClrTextareaModule, typeof i11.ClrRangeModule, typeof i12.ClrDatalistModule]>;
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
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrHeader, "clr-header", never, {}, {}, never, ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrHeader, never>;
}

export declare class ClrIconCustomTag {
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrIconCustomTag, "clr-icon", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrIconCustomTag, never>;
}

export declare class ClrIconModule {
    static ɵfac: i0.ɵɵFactoryDef<ClrIconModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<ClrIconModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ClrIconModule, [typeof i1.ClrIconCustomTag, typeof i1.CdsIconCustomTag], [typeof i2.CommonModule], [typeof i1.ClrIconCustomTag, typeof i1.CdsIconCustomTag]>;
}

export declare class ClrIfActive implements OnDestroy {
    set active(value: boolean | string);
    get active(): boolean | string;
    activeChange: EventEmitter<boolean>;
    constructor(ifActiveService: IfActiveService, id: number, template: TemplateRef<any>, container: ViewContainerRef);
    ngOnDestroy(): void;
    updateView(value: boolean): void;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrIfActive, "[clrIfActive]", never, { "active": "clrIfActive"; }, { "activeChange": "clrIfActiveChange"; }, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrIfActive, never>;
}

export declare class ClrIfDetail implements OnInit, OnDestroy {
    set state(model: any);
    stateChange: EventEmitter<any>;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, detailService: DetailService);
    ngOnDestroy(): void;
    ngOnInit(): void;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrIfDetail, "[clrIfDetail]", never, { "state": "clrIfDetail"; }, { "stateChange": "clrIfDetailChange"; }, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrIfDetail, never>;
}

export declare class ClrIfDragged<T> implements OnDestroy {
    constructor(template: TemplateRef<any>, container: ViewContainerRef, dragEventListener: DragEventListenerService<T>);
    ngOnDestroy(): void;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrIfDragged<any>, "[clrIfDragged]", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrIfDragged<any>, [null, { optional: true; skipSelf: true; }, { optional: true; }]>;
}

export declare class ClrIfError extends AbstractIfState {
    error: string;
    constructor(ifControlStateService: IfControlStateService, ngControlService: NgControlService, template: TemplateRef<any>, container: ViewContainerRef);
    protected handleState(state: CONTROL_STATE): void;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrIfError, "[clrIfError]", never, { "error": "clrIfError"; }, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrIfError, [{ optional: true; }, { optional: true; }, null, null]>;
}

export declare class ClrIfExpanded implements OnInit, OnDestroy {
    get expanded(): boolean | string;
    set expanded(value: boolean | string);
    expandedChange: EventEmitter<boolean>;
    constructor(template: TemplateRef<any>, container: ViewContainerRef, el: ElementRef, renderer: Renderer2, expand: IfExpandService);
    ngOnDestroy(): void;
    ngOnInit(): void;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrIfExpanded, "[clrIfExpanded]", never, { "expanded": "clrIfExpanded"; }, { "expandedChange": "clrIfExpandedChange"; }, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrIfExpanded, [{ optional: true; }, null, null, null, null]>;
}

export declare class ClrIfOpen implements OnDestroy {
    set open(value: boolean | string);
    get open(): boolean | string;
    openChange: EventEmitter<boolean>;
    constructor(toggleService: ClrPopoverToggleService, template: TemplateRef<any>, container: ViewContainerRef);
    ngOnDestroy(): void;
    updateView(value: boolean): void;
    static ngAcceptInputType_open: boolean | '';
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrIfOpen, "[clrIfOpen]", never, { "open": "clrIfOpen"; }, { "openChange": "clrIfOpenChange"; }, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrIfOpen, never>;
}

export declare class ClrIfSuccess extends AbstractIfState {
    constructor(ifControlStateService: IfControlStateService, ngControlService: NgControlService, template: TemplateRef<any>, container: ViewContainerRef);
    protected handleState(state: CONTROL_STATE): void;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrIfSuccess, "[clrIfSuccess]", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrIfSuccess, [{ optional: true; }, { optional: true; }, null, null]>;
}

export declare class ClrInput extends WrappedFormControl<ClrInputContainer> {
    protected index: number;
    constructor(vcr: ViewContainerRef, injector: Injector, control: NgControl, renderer: Renderer2, el: ElementRef);
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrInput, "[clrInput]", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrInput, [null, null, { optional: true; self: true; }, null, null]>;
}

export declare class ClrInputContainer extends ClrAbstractContainer {
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrInputContainer, "clr-input-container", never, {}, {}, never, ["label", "[clrInput]", "clr-control-helper", "clr-control-error", "clr-control-success"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrInputContainer, never>;
}

export declare class ClrInputModule {
    constructor();
    static ɵfac: i0.ɵɵFactoryDef<ClrInputModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<ClrInputModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ClrInputModule, [typeof i1.ClrInput, typeof i2.ClrInputContainer], [typeof i3.CommonModule, typeof i4.FormsModule, typeof i5.ClrIconModule, typeof i6.ClrCommonFormsModule], [typeof i6.ClrCommonFormsModule, typeof i1.ClrInput, typeof i2.ClrInputContainer]>;
}

export declare class ClrLabel implements OnInit, OnDestroy {
    forAttr: string;
    get labelText(): string;
    constructor(controlIdService: ControlIdService, layoutService: LayoutService, ngControlService: NgControlService, renderer: Renderer2, el: ElementRef);
    disableGrid(): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrLabel, "label", never, { "forAttr": "for"; }, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrLabel, [{ optional: true; }, { optional: true; }, { optional: true; }, null, null]>;
}

export declare class ClrLayout implements OnInit {
    layout: ClrFormLayout | string;
    layoutService: LayoutService;
    constructor(layoutService: LayoutService);
    ngOnInit(): void;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrLayout, "[clrForm][clrLayout]", never, { "layout": "clrLayout"; }, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrLayout, never>;
}

export declare class ClrLayoutModule {
    static ɵfac: i0.ɵɵFactoryDef<ClrLayoutModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<ClrLayoutModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ClrLayoutModule, never, never, [typeof i1.ClrMainContainerModule, typeof i2.ClrNavigationModule, typeof i3.ClrTabsModule, typeof i4.ClrVerticalNavModule]>;
}

export declare class ClrLoading implements OnDestroy {
    get loadingState(): boolean | string | ClrLoadingState;
    set loadingState(value: boolean | string | ClrLoadingState);
    constructor(listener: LoadingListener);
    ngOnDestroy(): void;
    static ngAcceptInputType_loadingState: boolean | ClrLoadingState | null | string;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrLoading, "[clrLoading]", never, { "loadingState": "clrLoading"; }, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrLoading, [{ optional: true; }]>;
}

export declare class ClrLoadingButton implements LoadingListener {
    buttonState: typeof ClrLoadingState;
    clrLoadingChange: EventEmitter<ClrLoadingState>;
    disabled: boolean;
    el: ElementRef;
    state: ClrLoadingState;
    constructor(el: ElementRef, renderer: Renderer2);
    loadingStateChange(state: ClrLoadingState): void;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrLoadingButton, "button[clrLoading]", never, { "disabled": "disabled"; }, { "clrLoadingChange": "clrLoadingChange"; }, never, ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrLoadingButton, never>;
}

export declare class ClrLoadingButtonModule {
    static ɵfac: i0.ɵɵFactoryDef<ClrLoadingButtonModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<ClrLoadingButtonModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ClrLoadingButtonModule, [typeof i1.ClrLoadingButton], [typeof i2.CommonModule], [typeof i1.ClrLoadingButton]>;
}

export declare class ClrLoadingModule {
    static ɵfac: i0.ɵɵFactoryDef<ClrLoadingModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<ClrLoadingModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ClrLoadingModule, [typeof i1.ClrLoading], [typeof i2.CommonModule], [typeof i1.ClrLoading]>;
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
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrMainContainer, "clr-main-container", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrMainContainer, never>;
}

export declare class ClrMainContainerModule {
    static ɵfac: i0.ɵɵFactoryDef<ClrMainContainerModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<ClrMainContainerModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ClrMainContainerModule, [typeof i1.ClrMainContainer], [typeof i2.CommonModule, typeof i3.ClrIconModule], [typeof i1.ClrMainContainer]>;
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
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrModal, "clr-modal", never, { "_open": "clrModalOpen"; "closable": "clrModalClosable"; "size": "clrModalSize"; "staticBackdrop": "clrModalStaticBackdrop"; "skipAnimation": "clrModalSkipAnimation"; "bypassScrollService": "clrModalOverrideScrollService"; "stopClose": "clrModalPreventClose"; }, { "_openChanged": "clrModalOpenChange"; "altClose": "clrModalAlternateClose"; }, never, [".modal-nav", ".modal-title", ".modal-body", ".modal-footer"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrModal, never>;
}

export declare class ClrModalBody implements OnDestroy {
    constructor(ngZone: NgZone, renderer: Renderer2, host: ElementRef<HTMLElement>);
    ngOnDestroy(): void;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrModalBody, ".modal-body", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrModalBody, never>;
}

export declare class ClrModalModule {
    constructor();
    static ɵfac: i0.ɵɵFactoryDef<ClrModalModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<ClrModalModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ClrModalModule, [typeof i1.ClrModal, typeof i2.ClrModalBody], [typeof i3.CommonModule, typeof i4.ClrIconModule, typeof i5.ClrFocusTrapModule, typeof i6.ClrFocusOnViewInitModule], [typeof i1.ClrModal, typeof i2.ClrModalBody, typeof i4.ClrIconModule, typeof i6.ClrFocusOnViewInitModule]>;
}

export declare class ClrMonthpicker implements AfterViewInit {
    get calendarMonthIndex(): number;
    get monthNames(): ReadonlyArray<string>;
    constructor(_viewManagerService: ViewManagerService, _localeHelperService: LocaleHelperService, _dateNavigationService: DateNavigationService, _datepickerFocusService: DatepickerFocusService, _elRef: ElementRef);
    changeMonth(monthIndex: number): void;
    getTabIndex(monthIndex: number): number;
    ngAfterViewInit(): void;
    onKeyDown(event: KeyboardEvent): void;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrMonthpicker, "clr-monthpicker", never, {}, {}, never, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrMonthpicker, never>;
}

export declare class ClrNavigationModule {
    static ɵfac: i0.ɵɵFactoryDef<ClrNavigationModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<ClrNavigationModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ClrNavigationModule, [typeof i1.ClrHeader, typeof i2.ClrNavLevel, typeof i3.NavDetectionOompaLoompa, typeof i4.MainContainerWillyWonka], [typeof i5.CommonModule, typeof i6.ClrIconModule, typeof i7.ClrDropdownModule], [typeof i1.ClrHeader, typeof i2.ClrNavLevel, typeof i3.NavDetectionOompaLoompa, typeof i4.MainContainerWillyWonka]>;
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
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrNavLevel, "[clr-nav-level]", never, { "_level": "clr-nav-level"; }, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrNavLevel, never>;
}

export declare class ClrOption<T> implements OnInit {
    commonStrings: ClrCommonStringsService;
    elRef: ElementRef;
    get focusClass(): boolean;
    set optionId(id: string);
    get optionId(): string;
    optionProxy: OptionProxy<T>;
    get selected(): boolean;
    set value(value: T);
    get value(): T;
    constructor(elRef: ElementRef, commonStrings: ClrCommonStringsService, focusHandler: ComboboxFocusHandler<T>, optionSelectionService: OptionSelectionService<T>, autoId: string);
    ngOnInit(): void;
    onClick(): void;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrOption<any>, "clr-option", never, { "optionId": "id"; "value": "clrValue"; }, {}, never, ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrOption<any>, never>;
}

export declare class ClrOptionItems<T> implements DoCheck, OnDestroy {
    set field(field: string);
    set rawItems(items: T[]);
    template: TemplateRef<NgForOfContext<T>>;
    set trackBy(value: TrackByFunction<T>);
    constructor(template: TemplateRef<NgForOfContext<T>>, differs: IterableDiffers, optionService: OptionSelectionService<T>, positionService: ClrPopoverPositionService, vcr: ViewContainerRef);
    ngDoCheck(): void;
    ngOnDestroy(): void;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrOptionItems<any>, "[clrOptionItems][clrOptionItemsOf]", never, { "rawItems": "clrOptionItemsOf"; "trackBy": "clrOptionItemsTrackBy"; "field": "clrOptionItemsField"; }, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrOptionItems<any>, never>;
}

export declare class ClrOptions<T> implements AfterViewInit, LoadingListener, OnDestroy {
    _items: QueryList<ClrOption<T>>;
    commonStrings: ClrCommonStringsService;
    get emptyOptions(): boolean;
    id: number;
    set items(items: QueryList<ClrOption<T>>);
    get items(): QueryList<ClrOption<T>>;
    loading: boolean;
    optionSelectionService: OptionSelectionService<T>;
    set optionsId(id: string);
    get optionsId(): string;
    constructor(optionSelectionService: OptionSelectionService<T>, id: number, ariaService: AriaService, el: ElementRef, commonStrings: ClrCommonStringsService, focusHandler: ComboboxFocusHandler<T>, toggleService: ClrPopoverToggleService, parentHost: ElementRef, document: any);
    loadingStateChange(state: ClrLoadingState): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    searchText(input: string): string;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrOptions<any>, "clr-options", never, { "optionsId": "id"; }, {}, ["items"], ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrOptions<any>, [null, null, null, null, null, null, null, { optional: true; }, null]>;
}

export declare class ClrOptionSelected<T> {
    selected: T;
    template: TemplateRef<{
        $implicit: T;
    }>;
    constructor(template: TemplateRef<{
        $implicit: T;
    }>);
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrOptionSelected<any>, "[clrOptionSelected]", never, { "selected": "clrOptionSelected"; }, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrOptionSelected<any>, never>;
}

export declare class ClrPassword extends WrappedFormControl<ClrPasswordContainer> implements OnInit, OnDestroy {
    protected index: number;
    constructor(vcr: ViewContainerRef, injector: Injector, control: NgControl, renderer: Renderer2, el: ElementRef, focusService: FocusService, toggleService: BehaviorSubject<boolean>);
    triggerFocus(): void;
    triggerValidation(): void;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrPassword, "[clrPassword]", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrPassword, [null, null, { optional: true; self: true; }, null, null, { optional: true; }, { optional: true; }]>;
}

export declare class ClrPasswordContainer extends ClrAbstractContainer {
    set clrToggle(state: boolean);
    get clrToggle(): boolean;
    commonStrings: ClrCommonStringsService;
    focus: boolean;
    focusService: FocusService;
    show: boolean;
    constructor(ifControlStateService: IfControlStateService, layoutService: LayoutService, controlClassService: ControlClassService, ngControlService: NgControlService, focusService: FocusService, toggleService: BehaviorSubject<boolean>, commonStrings: ClrCommonStringsService);
    toggle(): void;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrPasswordContainer, "clr-password-container", never, { "clrToggle": "clrToggle"; }, {}, never, ["label", "[clrPassword]", "clr-control-helper", "clr-control-error", "clr-control-success"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrPasswordContainer, [null, { optional: true; }, null, null, null, null, null]>;
}

export declare class ClrPasswordModule {
    constructor();
    static ɵfac: i0.ɵɵFactoryDef<ClrPasswordModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<ClrPasswordModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ClrPasswordModule, [typeof i1.ClrPassword, typeof i2.ClrPasswordContainer], [typeof i3.CommonModule, typeof i4.FormsModule, typeof i5.ClrIconModule, typeof i6.ClrCommonFormsModule], [typeof i6.ClrCommonFormsModule, typeof i1.ClrPassword, typeof i2.ClrPasswordContainer]>;
}

export declare class ClrPopoverAnchor {
    constructor(smartEventService: ClrPopoverEventsService, element: ElementRef);
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrPopoverAnchor, "[clrPopoverAnchor]", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrPopoverAnchor, never>;
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
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrPopoverContent, "[clrPopoverContent]", never, { "open": "clrPopoverContent"; "contentAt": "clrPopoverContentAt"; "outsideClickClose": "clrPopoverContentOutsideClickToClose"; "scrollToClose": "clrPopoverContentScrollToClose"; }, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrPopoverContent, never>;
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
    static ɵfac: i0.ɵɵFactoryDef<ClrPopoverEventsService, never>;
    static ɵprov: i0.ɵɵInjectableDef<ClrPopoverEventsService>;
}

export declare class ClrPopoverModule {
    static ɵfac: i0.ɵɵFactoryDef<ClrPopoverModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<ClrPopoverModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ClrPopoverModule, never, never, [typeof i1.ClrDropdownModule, typeof i2.ClrSignpostModule, typeof i3.ClrTooltipModule]>;
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
    static ɵfac: i0.ɵɵFactoryDef<ClrPopoverPositionService, never>;
    static ɵprov: i0.ɵɵInjectableDef<ClrPopoverPositionService>;
}

export declare class ClrPopoverToggleService {
    set open(value: boolean);
    get open(): boolean;
    get openChange(): Observable<boolean>;
    set openEvent(event: Event);
    get openEvent(): Event;
    get originalEvent(): Event;
    get popoverAligned(): Observable<HTMLElement>;
    getEventChange(): Observable<Event>;
    popoverAlignedEmit(popoverNode: HTMLElement): void;
    toggleWithEvent(event: any): void;
    static ɵfac: i0.ɵɵFactoryDef<ClrPopoverToggleService, never>;
    static ɵprov: i0.ɵɵInjectableDef<ClrPopoverToggleService>;
}

export declare class ClrProgressBar {
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
    max: number | string;
    get progressClass(): boolean;
    get successClass(): boolean;
    get value(): number | string;
    set value(value: number | string);
    displayStringValue(): boolean;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrProgressBar, "clr-progress-bar", never, { "id": "id"; "max": "clrMax"; "displayval": "clrDisplayval"; "value": "clrValue"; "clrLabeled": "clrLabeled"; "clrFade": "clrFade"; "clrLoop": "clrLoop"; "clrSuccess": "clrSuccess"; "clrDanger": "clrDanger"; "clrFlash": "clrFlash"; "clrFlashDanger": "clrFlashDanger"; }, {}, never, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrProgressBar, never>;
}

export declare class ClrProgressBarModule {
    static ɵfac: i0.ɵɵFactoryDef<ClrProgressBarModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<ClrProgressBarModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ClrProgressBarModule, [typeof i1.ClrProgressBar], [typeof i2.CommonModule], [typeof i1.ClrProgressBar]>;
}

export declare class ClrRadio extends WrappedFormControl<ClrRadioWrapper> {
    constructor(vcr: ViewContainerRef, injector: Injector, control: NgControl, renderer: Renderer2, el: ElementRef);
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrRadio, "[clrRadio]", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrRadio, [null, null, { optional: true; self: true; }, null, null]>;
}

export declare class ClrRadioContainer extends ClrAbstractContainer implements AfterContentInit {
    set clrInline(value: boolean | string);
    get clrInline(): boolean | string;
    protected controlClassService: ControlClassService;
    protected ifControlStateService: IfControlStateService;
    protected layoutService: LayoutService;
    protected ngControlService: NgControlService;
    radios: QueryList<ClrRadio>;
    role: string;
    constructor(layoutService: LayoutService, controlClassService: ControlClassService, ngControlService: NgControlService, ifControlStateService: IfControlStateService);
    ngAfterContentInit(): void;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrRadioContainer, "clr-radio-container", never, { "clrInline": "clrInline"; }, {}, ["radios"], ["label", "clr-radio-wrapper", "clr-control-helper", "clr-control-error", "clr-control-success"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrRadioContainer, [{ optional: true; }, null, null, null]>;
}

export declare class ClrRadioModule {
    constructor();
    static ɵfac: i0.ɵɵFactoryDef<ClrRadioModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<ClrRadioModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ClrRadioModule, [typeof i1.ClrRadio, typeof i2.ClrRadioContainer, typeof i3.ClrRadioWrapper], [typeof i4.CommonModule, typeof i5.ClrCommonFormsModule, typeof i6.ClrHostWrappingModule, typeof i7.ClrIconModule], [typeof i5.ClrCommonFormsModule, typeof i1.ClrRadio, typeof i2.ClrRadioContainer, typeof i3.ClrRadioWrapper]>;
}

export declare class ClrRadioWrapper implements DynamicWrapper, OnInit {
    _dynamic: boolean;
    label: ClrLabel;
    ngOnInit(): void;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrRadioWrapper, "clr-radio-wrapper", never, {}, {}, ["label"], ["[clrRadio]", "label"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrRadioWrapper, never>;
}

export declare class ClrRange extends WrappedFormControl<ClrRangeContainer> {
    constructor(vcr: ViewContainerRef, injector: Injector, control: NgControl, renderer: Renderer2, el: ElementRef);
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrRange, "[clrRange]", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrRange, [null, null, { optional: true; self: true; }, null, null]>;
}

export declare class ClrRangeContainer extends ClrAbstractContainer {
    set hasProgress(val: boolean);
    get hasProgress(): boolean;
    protected ifControlStateService: IfControlStateService;
    constructor(layoutService: LayoutService, controlClassService: ControlClassService, ngControlService: NgControlService, renderer: Renderer2, idService: ControlIdService, ifControlStateService: IfControlStateService);
    getRangeProgressFillWidth(): string;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrRangeContainer, "clr-range-container", never, { "hasProgress": "clrRangeHasProgress"; }, {}, never, ["label", "[clrRange]", "clr-control-helper", "clr-control-error", "clr-control-success"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrRangeContainer, [{ optional: true; }, null, null, null, null, null]>;
}

export declare class ClrRangeModule {
    constructor();
    static ɵfac: i0.ɵɵFactoryDef<ClrRangeModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<ClrRangeModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ClrRangeModule, [typeof i1.ClrRange, typeof i2.ClrRangeContainer], [typeof i3.CommonModule, typeof i4.ClrCommonFormsModule, typeof i5.ClrHostWrappingModule, typeof i6.ClrIconModule], [typeof i4.ClrCommonFormsModule, typeof i1.ClrRange, typeof i2.ClrRangeContainer]>;
}

export declare class ClrRecursiveForOf<T> implements OnChanges, OnDestroy {
    getChildren: (node: T) => AsyncArray<T>;
    nodes: T | T[];
    constructor(template: TemplateRef<ClrRecursiveForOfContext<T>>, featuresService: TreeFeaturesService<T>, cdr: ChangeDetectorRef);
    ngOnChanges(): void;
    ngOnDestroy(): void;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrRecursiveForOf<any>, "[clrRecursiveFor][clrRecursiveForOf]", never, { "nodes": "clrRecursiveForOf"; "getChildren": "clrRecursiveForGetChildren"; }, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrRecursiveForOf<any>, never>;
}

export interface ClrRecursiveForOfContext<T> {
    $implicit: T;
    clrModel: TreeNodeModel<T>;
}

export declare class ClrSelect extends WrappedFormControl<ClrSelectContainer> {
    protected index: number;
    constructor(vcr: ViewContainerRef, injector: Injector, control: NgControl, renderer: Renderer2, el: ElementRef);
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrSelect, "[clrSelect]", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrSelect, [null, null, { optional: true; self: true; }, null, null]>;
}

export declare class ClrSelectContainer extends ClrAbstractContainer {
    protected controlClassService: ControlClassService;
    protected ifControlStateService: IfControlStateService;
    protected layoutService: LayoutService;
    multiple: SelectMultipleControlValueAccessor;
    protected ngControlService: NgControlService;
    constructor(layoutService: LayoutService, controlClassService: ControlClassService, ngControlService: NgControlService, ifControlStateService: IfControlStateService);
    ngOnInit(): void;
    wrapperClass(): "clr-multiselect-wrapper" | "clr-select-wrapper";
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrSelectContainer, "clr-select-container", never, {}, {}, ["multiple"], ["label", "[clrSelect]", "clr-control-helper", "clr-control-error", "clr-control-success"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrSelectContainer, [{ optional: true; }, null, null, null]>;
}

export declare enum ClrSelectedState {
    UNSELECTED = 0,
    SELECTED = 1,
    INDETERMINATE = 2
}

export declare class ClrSelectModule {
    constructor();
    static ɵfac: i0.ɵɵFactoryDef<ClrSelectModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<ClrSelectModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ClrSelectModule, [typeof i1.ClrSelect, typeof i2.ClrSelectContainer], [typeof i3.CommonModule, typeof i4.FormsModule, typeof i5.ClrIconModule, typeof i6.ClrCommonFormsModule], [typeof i6.ClrCommonFormsModule, typeof i1.ClrSelect, typeof i2.ClrSelectContainer]>;
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
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrSignpost, "clr-signpost", never, {}, {}, ["customTrigger"], ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrSignpost, never>;
}

export declare class ClrSignpostContent extends AbstractPopover implements OnDestroy {
    commonStrings: ClrCommonStringsService;
    get position(): string;
    set position(position: string);
    signpostContentId: string;
    constructor(injector: Injector, parentHost: ElementRef, commonStrings: ClrCommonStringsService, signpostContentId: string, signpostIdService: SignpostIdService, signpostFocusManager: SignpostFocusManager, platformId: any, document: any);
    close(): void;
    ngOnDestroy(): void;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrSignpostContent, "clr-signpost-content", never, { "position": "clrPosition"; }, {}, never, ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrSignpostContent, [null, { optional: true; }, null, null, null, null, null, null]>;
}

export declare class ClrSignpostModule {
    constructor();
    static ɵfac: i0.ɵɵFactoryDef<ClrSignpostModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<ClrSignpostModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ClrSignpostModule, [typeof i1.ClrSignpost, typeof i2.ClrSignpostContent, typeof i3.ClrSignpostTrigger], [typeof i4.CommonModule, typeof i5.ClrIconModule, typeof i6.ClrFocusOnViewInitModule], [typeof i1.ClrSignpost, typeof i2.ClrSignpostContent, typeof i3.ClrSignpostTrigger, typeof i7.ClrConditionalModule]>;
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
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrSignpostTrigger, "[clrSignpostTrigger]", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrSignpostTrigger, never>;
}

export declare class ClrSpinner {
    set clrInline(value: boolean | string);
    set clrInverse(value: boolean | string);
    set clrMedium(value: boolean | string);
    set clrSmall(value: boolean | string);
    get inlineClass(): boolean;
    get inverseClass(): boolean;
    get mediumClass(): boolean;
    get smallClass(): boolean;
    get spinnerClass(): boolean;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrSpinner, "clr-spinner", never, { "clrInline": "clrInline"; "clrInverse": "clrInverse"; "clrSmall": "clrSmall"; "clrMedium": "clrMedium"; }, {}, never, ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrSpinner, never>;
}

export declare class ClrSpinnerModule {
    static ɵfac: i0.ɵɵFactoryDef<ClrSpinnerModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<ClrSpinnerModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ClrSpinnerModule, [typeof i1.ClrSpinner], [typeof i2.CommonModule], [typeof i1.ClrSpinner]>;
}

export declare class ClrStackBlock implements OnInit {
    get ariaExpanded(): string;
    ariaLevel: number;
    ariaPosinset: number;
    ariaSetsize: number;
    get caretDirection(): string;
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
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrStackBlock, "clr-stack-block", never, { "expanded": "clrSbExpanded"; "expandable": "clrSbExpandable"; "setChangedValue": "clrSbNotifyChange"; "ariaLevel": "clrStackViewLevel"; "ariaSetsize": "clrStackViewSetsize"; "ariaPosinset": "clrStackViewPosinset"; }, { "expandedChange": "clrSbExpandedChange"; }, never, ["clr-stack-label", "*", "clr-stack-block"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrStackBlock, [{ optional: true; skipSelf: true; }, null, null]>;
}

export declare class ClrStackContentInput {
    uniqueId: string;
    constructor(uniqueId: string);
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrStackContentInput, "[clrStackInput]", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrStackContentInput, never>;
}

export declare class ClrStackHeader {
    stackView: ClrStackView;
    constructor(stackView: ClrStackView);
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrStackHeader, "clr-stack-header", never, {}, {}, never, ["*", ".stack-action"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrStackHeader, never>;
}

export declare class ClrStackInput extends StackControl {
    stackView: ClrStackView;
    type: string;
    constructor(stackView: ClrStackView);
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrStackInput, "clr-stack-input", never, { "model": "clrModel"; "type": "type"; }, { "modelChange": "clrModelChange"; }, never, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrStackInput, never>;
}

export declare class ClrStackSelect extends StackControl {
    stackView: ClrStackView;
    constructor(stackView: ClrStackView);
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrStackSelect, "clr-stack-select", never, { "model": "clrModel"; }, { "modelChange": "clrModelChange"; }, never, ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrStackSelect, never>;
}

export declare class ClrStackView {
    editable: boolean;
    get editing(): boolean;
    set editing(value: boolean);
    editingChange: EventEmitter<boolean>;
    save: EventEmitter<void>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrStackView, "clr-stack-view", never, {}, { "save": "clrStackSave"; }, never, ["clr-stack-header", "*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrStackView, never>;
}

export declare class ClrStackViewCustomTags {
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrStackViewCustomTags, "clr-stack-label, clr-stack-content", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrStackViewCustomTags, never>;
}

export declare class ClrStackViewModule {
    constructor();
    static ɵfac: i0.ɵɵFactoryDef<ClrStackViewModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<ClrStackViewModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ClrStackViewModule, [typeof i1.ClrStackView, typeof i2.ClrStackHeader, typeof i3.ClrStackBlock, typeof i4.ClrStackContentInput, typeof i5.ClrStackViewCustomTags, typeof i6.ClrStackInput, typeof i7.ClrStackSelect], [typeof i8.CommonModule, typeof i9.FormsModule, typeof i10.ClrIconModule, typeof i11.ClrExpandableAnimationModule], [typeof i1.ClrStackView, typeof i2.ClrStackHeader, typeof i3.ClrStackBlock, typeof i4.ClrStackContentInput, typeof i5.ClrStackViewCustomTags, typeof i6.ClrStackInput, typeof i7.ClrStackSelect]>;
}

export declare class ClrStepButton implements OnInit {
    submitButton: boolean;
    type: ClrStepButtonType | string;
    constructor(clrStep: ClrStepperPanel, stepperService: StepperService);
    navigateToNextPanel(): void;
    ngOnInit(): void;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrStepButton, "[clrStepButton]", never, { "type": "clrStepButton"; }, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrStepButton, never>;
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
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrStepper, "form[clrStepper]", never, { "initialPanel": "clrInitialStep"; }, {}, ["panels"], ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrStepper, [{ optional: true; }, { optional: true; }, null]>;
}

export declare class ClrStepperModule {
    static ɵfac: i0.ɵɵFactoryDef<ClrStepperModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<ClrStepperModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ClrStepperModule, [typeof i1.ClrStepper, typeof i2.ClrStepButton, typeof i3.ClrStepperPanel, typeof i4.StepperOompaLoompa, typeof i5.StepperWillyWonka], [typeof i6.CommonModule, typeof i7.ClrIconModule, typeof i8.ClrAccordionModule], [typeof i1.ClrStepper, typeof i2.ClrStepButton, typeof i3.ClrStepperPanel, typeof i4.StepperOompaLoompa, typeof i5.StepperWillyWonka, typeof i8.ClrAccordionModule]>;
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
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrStepperPanel, "clr-stepper-panel", never, {}, {}, never, ["clr-accordion-title, clr-step-title", "clr-accordion-description, clr-step-description", "*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrStepperPanel, [null, null, { optional: true; }, { optional: true; }, null, null, null]>;
}

export declare class ClrTab {
    get active(): boolean;
    id: number;
    ifActiveService: IfActiveService;
    tabContent: ClrTabContent;
    tabLink: ClrTabLink;
    constructor(ifActiveService: IfActiveService, id: number, tabsService: TabsService);
    ngOnDestroy(): void;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrTab, "clr-tab", never, {}, {}, ["tabLink", "tabContent"], ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrTab, never>;
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
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrTabContent, "clr-tab-content", never, { "tabContentId": "id"; }, {}, never, ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrTabContent, never>;
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
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrTabLink, "[clrTabLink]", never, { "inOverflow": "clrTabLinkInOverflow"; "tabLinkId": "id"; }, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrTabLink, never>;
}

export declare class ClrTabOverflowContent {
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrTabOverflowContent, "clr-tab-overflow-content", never, {}, {}, never, ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrTabOverflowContent, never>;
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
    set layout(layout: TabsLayout | string);
    get layout(): TabsLayout | string;
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
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrTabs, "clr-tabs", never, { "layout": "clrLayout"; }, {}, ["tabs"], never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrTabs, never>;
}

export declare class ClrTabsModule {
    constructor();
    static ɵfac: i0.ɵɵFactoryDef<ClrTabsModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<ClrTabsModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ClrTabsModule, [typeof i1.ClrTabContent, typeof i2.ClrTab, typeof i3.ClrTabs, typeof i4.ClrTabOverflowContent, typeof i5.ClrTabLink, typeof i6.TabsWillyWonka, typeof i7.ActiveOompaLoompa], [typeof i8.CommonModule, typeof i9.ClrConditionalModule, typeof i10.ClrIconModule, typeof i11.ClrTemplateRefModule, typeof i12.ClrKeyFocusModule], [typeof i1.ClrTabContent, typeof i2.ClrTab, typeof i3.ClrTabs, typeof i4.ClrTabOverflowContent, typeof i5.ClrTabLink, typeof i6.TabsWillyWonka, typeof i7.ActiveOompaLoompa, typeof i9.ClrConditionalModule]>;
}

export declare class ClrTextarea extends WrappedFormControl<ClrTextareaContainer> {
    protected index: number;
    constructor(vcr: ViewContainerRef, injector: Injector, control: NgControl, renderer: Renderer2, el: ElementRef);
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrTextarea, "[clrTextarea]", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrTextarea, [null, null, { optional: true; self: true; }, null, null]>;
}

export declare class ClrTextareaContainer extends ClrAbstractContainer {
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrTextareaContainer, "clr-textarea-container", never, {}, {}, never, ["label", "[clrTextarea]", "clr-control-helper", "clr-control-error", "clr-control-success"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrTextareaContainer, never>;
}

export declare class ClrTextareaModule {
    constructor();
    static ɵfac: i0.ɵɵFactoryDef<ClrTextareaModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<ClrTextareaModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ClrTextareaModule, [typeof i1.ClrTextarea, typeof i2.ClrTextareaContainer], [typeof i3.CommonModule, typeof i4.FormsModule, typeof i5.ClrIconModule, typeof i6.ClrCommonFormsModule], [typeof i6.ClrCommonFormsModule, typeof i1.ClrTextarea, typeof i2.ClrTextareaContainer]>;
}

export declare class ClrTimeline {
    get isVertical(): boolean;
    layout: ClrTimelineLayout;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrTimeline, "clr-timeline", never, { "layout": "clrLayout"; }, {}, never, ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrTimeline, never>;
}

export declare enum ClrTimelineLayout {
    HORIZONTAL = "horizontal",
    VERTICAL = "vertical"
}

export declare class ClrTimelineModule {
    constructor();
    static ɵfac: i0.ɵɵFactoryDef<ClrTimelineModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<ClrTimelineModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ClrTimelineModule, [typeof i1.ClrTimeline, typeof i2.ClrTimelineStep, typeof i3.ClrTimelineStepDescription, typeof i4.ClrTimelineStepHeader, typeof i5.ClrTimelineStepTitle], [typeof i6.CommonModule, typeof i7.ClrIconModule, typeof i8.ClrSpinnerModule], [typeof i1.ClrTimeline, typeof i2.ClrTimelineStep, typeof i3.ClrTimelineStepDescription, typeof i4.ClrTimelineStepHeader, typeof i5.ClrTimelineStepTitle, typeof i7.ClrIconModule, typeof i8.ClrSpinnerModule]>;
}

export declare class ClrTimelineStep {
    get iconAriaCurrent(): boolean;
    get iconAriaLabel(): string;
    get iconShape(): string;
    get iconStatus(): string;
    get isProcessing(): boolean;
    state: ClrTimelineStepState;
    stepTitle: ElementRef;
    stepTitleText: string;
    constructor(iconAttributeService: TimelineIconAttributeService, platformId: any);
    ngAfterContentInit(): void;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrTimelineStep, "clr-timeline-step", never, { "state": "clrState"; }, {}, ["stepTitle"], ["clr-timeline-step-header", "clr-timeline-step-title", "clr-timeline-step-description"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrTimelineStep, never>;
}

export declare class ClrTimelineStepDescription {
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrTimelineStepDescription, "clr-timeline-step-description", never, {}, {}, never, ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrTimelineStepDescription, never>;
}

export declare class ClrTimelineStepHeader {
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrTimelineStepHeader, "clr-timeline-step-header", never, {}, {}, never, ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrTimelineStepHeader, never>;
}

export declare enum ClrTimelineStepState {
    NOT_STARTED = "not-started",
    CURRENT = "current",
    PROCESSING = "processing",
    SUCCESS = "success",
    ERROR = "error"
}

export declare class ClrTimelineStepTitle {
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrTimelineStepTitle, "clr-timeline-step-title", never, {}, {}, never, ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrTimelineStepTitle, never>;
}

export declare class ClrTooltip {
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrTooltip, "clr-tooltip", never, {}, {}, never, ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrTooltip, never>;
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
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrTooltipContent, "clr-tooltip-content", never, { "id": "id"; "position": "clrPosition"; "size": "clrSize"; }, {}, never, ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrTooltipContent, [null, { optional: true; }, null, null]>;
}

export declare class ClrTooltipModule {
    static ɵfac: i0.ɵɵFactoryDef<ClrTooltipModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<ClrTooltipModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ClrTooltipModule, [typeof i1.ClrTooltip, typeof i2.ClrTooltipTrigger, typeof i3.ClrTooltipContent], [typeof i4.CommonModule], [typeof i1.ClrTooltip, typeof i2.ClrTooltipTrigger, typeof i3.ClrTooltipContent, typeof i5.ClrConditionalModule, typeof i6.ClrIconModule]>;
}

export declare class ClrTooltipTrigger {
    ariaDescribedBy: string;
    constructor(toggleService: ClrPopoverToggleService, tooltipIdService: TooltipIdService);
    hideTooltip(): void;
    ngOnDestroy(): void;
    showTooltip(): void;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrTooltipTrigger, "[clrTooltipTrigger]", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrTooltipTrigger, never>;
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
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrTree<any>, "clr-tree", never, { "lazy": "clrLazy"; }, {}, ["rootNodes"], ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrTree<any>, never>;
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
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrTreeNode<any>, "clr-tree-node", never, { "selected": "clrSelected"; "expandable": "clrExpandable"; "expanded": "clrExpanded"; }, { "selectedChange": "clrSelectedChange"; "expandedChange": "clrExpandedChange"; }, ["treeNodeLinkList"], ["*", "clr-tree-node", "[clrIfExpanded]"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrTreeNode<any>, [null, null, { optional: true; skipSelf: true; }, null, null, null, null, null]>;
}

export declare class ClrTreeNodeLink {
    constructor(el: ElementRef);
    activate(): void;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrTreeNodeLink, ".clr-treenode-link", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrTreeNodeLink, never>;
}

export declare class ClrTreeViewModule {
    constructor();
    static ɵfac: i0.ɵɵFactoryDef<ClrTreeViewModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<ClrTreeViewModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ClrTreeViewModule, [typeof i1.ClrTree, typeof i2.ClrTreeNode, typeof i3.ClrRecursiveForOf, typeof i4.ClrTreeNodeLink, typeof i5.RecursiveChildren], [typeof i6.CommonModule, typeof i7.ClrIconModule, typeof i8.ClrLoadingModule], [typeof i1.ClrTree, typeof i2.ClrTreeNode, typeof i3.ClrRecursiveForOf, typeof i4.ClrTreeNodeLink]>;
}

export declare class ClrVerticalNav implements OnDestroy {
    get ariaExpanded(): string;
    get collapsed(): boolean | string;
    set collapsed(value: boolean | string);
    get collapsible(): boolean | string;
    set collapsible(value: boolean | string);
    commonStrings: ClrCommonStringsService;
    get hasIcons(): boolean;
    get hasNavGroups(): boolean;
    constructor(_navService: VerticalNavService, _navIconService: VerticalNavIconService, _navGroupRegistrationService: VerticalNavGroupRegistrationService, commonStrings: ClrCommonStringsService);
    ngOnDestroy(): void;
    toggleByButton(): void;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrVerticalNav, "clr-vertical-nav", never, { "collapsible": "clrVerticalNavCollapsible"; "collapsed": "clrVerticalNavCollapsed"; }, { "_collapsedChanged": "clrVerticalNavCollapsedChange"; }, never, ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrVerticalNav, never>;
}

export declare class ClrVerticalNavGroup implements AfterContentInit, OnDestroy {
    commonStrings: ClrCommonStringsService;
    get expandAnimationState(): string;
    set expandAnimationState(value: string);
    get expanded(): boolean;
    set expanded(value: boolean);
    expandedChange: EventEmitter<boolean>;
    set userExpandedInput(value: boolean | string);
    constructor(_itemExpand: IfExpandService, _navGroupRegistrationService: VerticalNavGroupRegistrationService, _navGroupService: VerticalNavGroupService, _navService: VerticalNavService, commonStrings: ClrCommonStringsService);
    collapseGroup(): void;
    expandAnimationDone($event: AnimationEvent): void;
    expandGroup(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    toggleExpand(): void;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrVerticalNavGroup, "clr-vertical-nav-group", never, { "userExpandedInput": "clrVerticalNavGroupExpanded"; }, { "expandedChange": "clrVerticalNavGroupExpandedChange"; }, never, ["[clrVerticalNavLink]", "[clrVerticalNavIcon]", "*", "[clrIfExpanded], clr-vertical-nav-group-children"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrVerticalNavGroup, never>;
}

export declare class ClrVerticalNavGroupChildren {
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrVerticalNavGroupChildren, "clr-vertical-nav-group-children", never, {}, {}, never, ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrVerticalNavGroupChildren, never>;
}

export declare class ClrVerticalNavIcon implements OnDestroy {
    constructor(_verticalNavIconService: VerticalNavIconService);
    ngOnDestroy(): void;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrVerticalNavIcon, "[clrVerticalNavIcon]", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrVerticalNavIcon, never>;
}

export declare class ClrVerticalNavLink {
    constructor(_navGroupService: VerticalNavGroupService);
    expandParentNavGroup(): void;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrVerticalNavLink, "[clrVerticalNavLink]", never, {}, {}, never, ["[clrVerticalNavIcon]", "*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrVerticalNavLink, [{ optional: true; }]>;
}

export declare class ClrVerticalNavModule {
    constructor();
    static ɵfac: i0.ɵɵFactoryDef<ClrVerticalNavModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<ClrVerticalNavModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ClrVerticalNavModule, [typeof i1.ClrVerticalNav, typeof i2.ClrVerticalNavLink, typeof i3.ClrVerticalNavGroup, typeof i4.ClrVerticalNavGroupChildren, typeof i5.ClrVerticalNavIcon], [typeof i6.CommonModule, typeof i7.ClrIconModule, typeof i8.ClrConditionalModule, typeof i9.ClrFocusOnViewInitModule], [typeof i1.ClrVerticalNav, typeof i2.ClrVerticalNavLink, typeof i3.ClrVerticalNavGroup, typeof i4.ClrVerticalNavGroupChildren, typeof i5.ClrVerticalNavIcon, typeof i8.ClrConditionalModule, typeof i7.ClrIconModule, typeof i9.ClrFocusOnViewInitModule]>;
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
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrWizard, "clr-wizard", never, { "size": "clrWizardSize"; "closable": "clrWizardClosable"; "forceForward": "clrWizardForceForwardNavigation"; "clrWizardOpen": "clrWizardOpen"; "stopNext": "clrWizardPreventDefaultNext"; "stopCancel": "clrWizardPreventDefaultCancel"; "stopNavigation": "clrWizardPreventNavigation"; "disableStepnav": "clrWizardDisableStepnav"; "_stopModalAnimations": "clrWizardPreventModalAnimation"; }, { "_openChanged": "clrWizardOpenChange"; "onCancel": "clrWizardOnCancel"; "wizardFinished": "clrWizardOnFinish"; "onReset": "clrWizardOnReset"; "currentPageChanged": "clrWizardCurrentPageChanged"; "onMoveNext": "clrWizardOnNext"; "onMovePrevious": "clrWizardOnPrevious"; }, ["pages", "headerActions"], ["clr-wizard-title", "clr-wizard-header-action", "*", "clr-wizard-button"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrWizard, never>;
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
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrWizardButton, "clr-wizard-button", never, { "type": "type"; "disabled": "clrWizardButtonDisabled"; "hidden": "clrWizardButtonHidden"; }, { "wasClicked": "clrWizardButtonClicked"; }, never, ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrWizardButton, never>;
}

export declare class ClrWizardCustomTags {
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrWizardCustomTags, "clr-wizard-title, clr-wizard-pagetitle", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrWizardCustomTags, never>;
}

export declare class ClrWizardHeaderAction {
    _id: string;
    disabled: boolean;
    headerActionClicked: EventEmitter<string>;
    get id(): string;
    title: string;
    click(): void;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrWizardHeaderAction, "clr-wizard-header-action", never, { "title": "title"; "_id": "id"; "disabled": "clrWizardHeaderActionDisabled"; }, { "headerActionClicked": "actionClicked"; }, never, ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrWizardHeaderAction, never>;
}

export declare class ClrWizardModule {
    constructor();
    static ɵfac: i0.ɵɵFactoryDef<ClrWizardModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<ClrWizardModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ClrWizardModule, [typeof i1.ClrWizard, typeof i2.ClrWizardPage, typeof i3.ClrWizardStepnav, typeof i4.ClrWizardStepnavItem, typeof i5.ClrWizardButton, typeof i6.ClrWizardHeaderAction, typeof i7.ClrWizardCustomTags, typeof i8.ClrWizardPageTitle, typeof i9.ClrWizardPageNavTitle, typeof i10.ClrWizardPageButtons, typeof i11.ClrWizardPageHeaderActions], [typeof i12.CommonModule, typeof i13.ClrModalModule, typeof i14.ClrAlertModule], [typeof i1.ClrWizard, typeof i2.ClrWizardPage, typeof i3.ClrWizardStepnav, typeof i4.ClrWizardStepnavItem, typeof i5.ClrWizardButton, typeof i6.ClrWizardHeaderAction, typeof i7.ClrWizardCustomTags, typeof i8.ClrWizardPageTitle, typeof i9.ClrWizardPageNavTitle, typeof i10.ClrWizardPageButtons, typeof i11.ClrWizardPageHeaderActions]>;
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
    preventDefault: boolean | string;
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
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrWizardPage, "clr-wizard-page", never, { "nextStepDisabled": "clrWizardPageNextDisabled"; "previousStepDisabled": "clrWizardPagePreviousDisabled"; "hasError": "clrWizardPageHasError"; "preventDefault": "clrWizardPagePreventDefault"; "stopCancel": "clrWizardPagePreventDefaultCancel"; "stopNext": "clrWizardPagePreventDefaultNext"; "_id": "id"; }, { "nextStepDisabledChange": "clrWizardPageNextDisabledChange"; "previousStepDisabledChange": "clrWizardPagePreviousDisabledChange"; "stopCancelChange": "clrWizardPagePreventDefaultCancelChange"; "onCommit": "clrWizardPageOnCommit"; "onLoad": "clrWizardPageOnLoad"; "pageOnCancel": "clrWizardPageOnCancel"; "finishButtonClicked": "clrWizardPageFinish"; "previousButtonClicked": "clrWizardPagePrevious"; "nextButtonClicked": "clrWizardPageNext"; "dangerButtonClicked": "clrWizardPageDanger"; "primaryButtonClicked": "clrWizardPagePrimary"; "customButtonClicked": "clrWizardPageCustomButton"; }, ["pageTitle", "pageNavTitle", "_buttons", "_headerActions"], ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrWizardPage, never>;
}

export declare class ClrWizardPageButtons {
    pageButtonsTemplateRef: TemplateRef<any>;
    constructor(pageButtonsTemplateRef: TemplateRef<any>);
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrWizardPageButtons, "[clrPageButtons]", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrWizardPageButtons, never>;
}

export declare class ClrWizardPageHeaderActions {
    pageHeaderActionsTemplateRef: TemplateRef<any>;
    constructor(pageHeaderActionsTemplateRef: TemplateRef<any>);
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrWizardPageHeaderActions, "[clrPageHeaderActions]", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrWizardPageHeaderActions, never>;
}

export declare class ClrWizardPageNavTitle {
    pageNavTitleTemplateRef: TemplateRef<any>;
    constructor(pageNavTitleTemplateRef: TemplateRef<any>);
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrWizardPageNavTitle, "[clrPageNavTitle]", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrWizardPageNavTitle, never>;
}

export declare class ClrWizardPageTitle {
    pageTitleTemplateRef: TemplateRef<any>;
    constructor(pageTitleTemplateRef: TemplateRef<any>);
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ClrWizardPageTitle, "[clrPageTitle]", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrWizardPageTitle, never>;
}

export declare class ClrWizardStepnav {
    pageService: PageCollectionService;
    constructor(pageService: PageCollectionService);
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrWizardStepnav, "clr-wizard-stepnav", never, {}, {}, never, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrWizardStepnav, never>;
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
    get stepAriaCurrent(): string;
    constructor(navService: WizardNavigationService, pageCollection: PageCollectionService);
    click(): void;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrWizardStepnavItem, "[clr-wizard-stepnav-item]", never, { "page": "page"; }, {}, never, ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<ClrWizardStepnavItem, never>;
}

export declare class ClrYearpicker implements AfterViewInit {
    get calendarYear(): number;
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
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ClrYearpicker, "clr-yearpicker", never, {}, {}, never, never>;
    static ɵfac: i0.ɵɵFactoryDef<ClrYearpicker, never>;
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
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DatagridNumericFilter<any>, "clr-dg-numeric-filter", never, { "customNumericFilter": "clrDgNumericFilter"; "value": "clrFilterValue"; }, { "filterValueChange": "clrFilterValueChange"; }, never, never>;
    static ɵfac: i0.ɵɵFactoryDef<DatagridNumericFilter<any>, never>;
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
    commonStrings: ClrCommonStringsService;
    set customStringFilter(value: ClrDatagridStringFilterInterface<T> | RegisteredFilter<T, DatagridStringFilterImpl<T>>);
    filterContainer: ClrDatagridFilter<T>;
    filterValueChange: EventEmitter<any>;
    input: ElementRef;
    open: boolean;
    get value(): string;
    set value(value: string);
    constructor(filters: FiltersProvider<T>, domAdapter: DomAdapter, commonStrings: ClrCommonStringsService, smartToggleService: ClrPopoverToggleService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DatagridStringFilter<any>, "clr-dg-string-filter", never, { "customStringFilter": "clrDgStringFilter"; "value": "clrFilterValue"; }, { "filterValueChange": "clrFilterValueChange"; }, never, never>;
    static ɵfac: i0.ɵɵFactoryDef<DatagridStringFilter<any>, never>;
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
    abstract loadingStateChange(state: ClrLoadingState | string): void;
}

export declare class MainContainerWillyWonka extends WillyWonka {
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<MainContainerWillyWonka, "clr-main-container", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<MainContainerWillyWonka, never>;
}

export declare class NavDetectionOompaLoompa extends OompaLoompa {
    get flavor(): number;
    constructor(cdr: ChangeDetectorRef, willyWonka: MainContainerWillyWonka, responsiveNavService: ResponsiveNavigationService);
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NavDetectionOompaLoompa, "clr-header", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<NavDetectionOompaLoompa, [null, { optional: true; }, null]>;
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
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<WrappedFormControl<any>, never, never, { "id": "id"; }, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<WrappedFormControl<any>, never>;
}
