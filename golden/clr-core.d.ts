export declare class ClarityIcons {
    static readonly registry: {
        [x: string]: string;
    };
    static add(shapes: IconShapeSources): void;
    static addCollection(collection: IconCollection): void;
    static addIcon(shape: IconShapeTuple): void;
    static addIcons(shapes: IconShapeTuple[]): void;
    static alias(aliases: IconAlias): void;
    static get(shapeName?: string): string | IconShapeCollection;
    static has(shapeName: string): boolean;
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

export declare const commonStringsDefault: ClrCommonStrings;

export declare class CommonStringsService {
    readonly keys: Readonly<ClrCommonStrings>;
    localize(overrides: ClrCommonStrings): void;
    parse(source: string, tokens?: {
        [key: string]: string;
    }): string;
}

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

export declare function runCssVarsPolyfill(config?: {}): void;

export declare const unknownIcon: IconShapeTuple;

export declare const userIcon: IconShapeTuple;
