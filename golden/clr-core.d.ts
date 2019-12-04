export declare const angleDoubleIcon: IconShapeTuple;

export declare const angleIcon: IconShapeTuple;

export declare const arrowIcon: IconShapeTuple;

export declare const barsIcon: IconShapeTuple;

export declare const bellIcon: IconShapeTuple;

export declare const calendarIcon: IconShapeTuple;

export declare const checkCircleIcon: IconShapeTuple;

export declare const checkIcon: IconShapeTuple;

export declare class ClarityIcons {
    static readonly registry: IconRegistrySources;
    static add(shapes: IconShapeSources): void;
    static addAliases(...aliases: IconAlias[]): void;
    static addIcons(...shapes: IconShapeTuple[]): void;
    static alias(alias: IconAliasLegacyObject): void;
    static get(shapeName?: string): string | IconRegistrySources;
}

export declare const cloudIcon: IconShapeTuple;

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
    detailPaneEnd?: string;
    detailPaneStart?: string;
    expand?: string;
    firstPage?: string;
    formErrorSummary?: string;
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
    verticalNavGroupToggle?: string;
    verticalNavToggle?: string;
    warning?: string;
}

export declare enum ClrLoadingState {
    DEFAULT = 0,
    LOADING = 1,
    SUCCESS = 2,
    ERROR = 3
}

export declare const cogIcon: IconShapeTuple;

export declare const commonStringsDefault: ClrCommonStrings;

export declare class CommonStringsService {
    readonly keys: Readonly<ClrCommonStrings>;
    localize(overrides: ClrCommonStrings): void;
    parse(source: string, tokens?: {
        [key: string]: string;
    }): string;
}

export declare const coreCollectionAliases: IconAlias[];

export declare const coreCollectionIcons: IconShapeTuple[];

export declare class CwcBadge extends LitElement {
    color: 'gray' | 'purple' | 'blue' | 'orange' | 'light-blue';
    status: 'info' | 'success' | 'warning' | 'danger';
    render(): import("lit-element").TemplateResult;
    static readonly styles: import("lit-element").CSSResult;
}

export declare class CwcButton extends CwcBaseButton {
    action: 'default' | 'outline' | 'link';
    icon: '';
    loadingState: ClrLoadingState;
    size: 'default' | 'sm';
    status: 'default' | 'primary' | 'inverse' | 'success' | 'warning' | 'danger';
    connectedCallback(): void;
    render(): import("lit-element").TemplateResult;
    static readonly styles: import("lit-element").CSSResult;
}

export declare class CwcIcon extends IconMixinClass {
    dir: string;
    flip: string;
    id: string;
    shape: string;
    size: string;
    title: string;
    connectedCallback(): void;
    firstUpdated(): void;
    protected render(): import("lit-element").TemplateResult;
    updateSVGAttributes(): Promise<void>;
    updated(changedProperties: any): void;
    static readonly styles: import("lit-element").CSSResult;
}

export declare class CwcTag extends CwcBaseButton {
    color: '1' | '2' | '3' | '4' | '5';
    status: 'info' | 'success' | 'warning' | 'danger';
    static readonly styles: import("lit-element").CSSResult;
}

export declare class CwcTestDropdown extends LitElement {
    open: boolean;
    title: string;
    render(): import("lit-element").TemplateResult;
    toggle(): void;
    static readonly styles: import("lit-element").CSSResult;
}

export declare const ellipsisHorizontalIcon: IconShapeTuple;

export declare const ellipsisVerticalIcon: IconShapeTuple;

export declare const errorStandardIcon: IconShapeTuple;

export declare const eventIcon: IconShapeTuple;

export declare const exclamationCircleIcon: IconShapeTuple;

export declare const exclamationTriangleIcon: IconShapeTuple;

export declare const eyeHideIcon: IconShapeTuple;

export declare const eyeIcon: IconShapeTuple;

export declare const filterGridCircleIcon: IconShapeTuple;

export declare const filterGridIcon: IconShapeTuple;

export declare const folderIcon: IconShapeTuple;

export declare const folderOpenIcon: IconShapeTuple;

export declare const helpInfoIcon: IconShapeTuple;

export declare const homeIcon: IconShapeTuple;

export declare const imageIcon: IconShapeTuple;

export declare const infoCircleIcon: IconShapeTuple;

export declare const infoStandardIcon: IconShapeTuple;

export declare function loadCoreIconSet(): void;

export declare function runCssVarsPolyfill(config?: {}): void;

export declare const searchIcon: IconShapeTuple;

export declare const stepForward2Icon: IconShapeTuple;

export declare const successStandardIcon: IconShapeTuple;

export declare const timesIcon: IconShapeTuple;

export declare const unknownIcon: IconShapeTuple;

export declare const unknownStatusIcon: IconShapeTuple;

export declare const userIcon: IconShapeTuple;

export declare const viewColumnsIcon: IconShapeTuple;

export declare const vmBugIcon: IconShapeTuple;

export declare const warningStandardIcon: IconShapeTuple;
