export declare const accessibility1Icon: IconShapeTuple;

export declare const accessibility2Icon: IconShapeTuple;

export declare const addTextIcon: IconShapeTuple;

export declare const alarmClockIcon: IconShapeTuple;

export declare const alarmOffIcon: IconShapeTuple;

export declare const angleDoubleIcon: IconShapeTuple;

export declare const angleIcon: IconShapeTuple;

export declare const arrowIcon: IconShapeTuple;

export declare const asteriskIcon: IconShapeTuple;

export declare const banIcon: IconShapeTuple;

export declare const barsIcon: IconShapeTuple;

export declare const bellIcon: IconShapeTuple;

export declare const betaIcon: IconShapeTuple;

export declare const boltIcon: IconShapeTuple;

export declare const bookIcon: IconShapeTuple;

export declare const briefcaseIcon: IconShapeTuple;

export declare const bubbleExclamationIcon: IconShapeTuple;

export declare const bugIcon: IconShapeTuple;

export declare const bullseyeIcon: IconShapeTuple;

export declare const calendarIcon: IconShapeTuple;

export declare const checkCircleIcon: IconShapeTuple;

export declare const checkIcon: IconShapeTuple;

export declare const childArrowIcon: IconShapeTuple;

export declare const circleArrowIcon: IconShapeTuple;

export declare const circleIcon: IconShapeTuple;

export declare class ClarityIcons {
    static readonly registry: IconRegistrySources;
    static add(shapes: IconShapeSources): void;
    static addAliases(...aliases: IconAlias[]): void;
    static addIcons(...shapes: IconShapeTuple[]): void;
    static alias(alias: IconAliasLegacyObject): void;
    static get(shapeName?: string): string | IconRegistrySources;
}

export declare const clipboardIcon: IconShapeTuple;

export declare const clockIcon: IconShapeTuple;

export declare const cloneIcon: IconShapeTuple;

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

export declare const collapseCardIcon: IconShapeTuple;

export declare const colorPickerIcon: IconShapeTuple;

export declare const commonStringsDefault: ClrCommonStrings;

export declare class CommonStringsService {
    readonly keys: Readonly<ClrCommonStrings>;
    localize(overrides: ClrCommonStrings): void;
    parse(source: string, tokens?: {
        [key: string]: string;
    }): string;
}

export declare const copyIcon: IconShapeTuple;

export declare const copyToClipboardIcon: IconShapeTuple;

export declare const coreCollectionAliases: IconAlias[];

export declare const coreCollectionIcons: IconShapeTuple[];

export declare const crosshairsIcon: IconShapeTuple;

export declare const cursorArrowIcon: IconShapeTuple;

export declare const cursorHandClickIcon: IconShapeTuple;

export declare const cursorHandGrabIcon: IconShapeTuple;

export declare const cursorHandIcon: IconShapeTuple;

export declare const cursorHandOpenIcon: IconShapeTuple;

export declare const cursorMoveIcon: IconShapeTuple;

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

export declare const detailsIcon: IconShapeTuple;

export declare const dotCircleIcon: IconShapeTuple;

export declare const downloadIcon: IconShapeTuple;

export declare const dragHandleCornerIcon: IconShapeTuple;

export declare const dragHandleIcon: IconShapeTuple;

export declare const ellipsisHorizontalIcon: IconShapeTuple;

export declare const ellipsisVerticalIcon: IconShapeTuple;

export declare const eraserIcon: IconShapeTuple;

export declare const errorStandardIcon: IconShapeTuple;

export declare const essentialCollectionAliases: IconAlias[];

export declare const essentialCollectionIcons: IconShapeTuple[];

export declare const eventIcon: IconShapeTuple;

export declare const exclamationCircleIcon: IconShapeTuple;

export declare const exclamationTriangleIcon: IconShapeTuple;

export declare const expandCardIcon: IconShapeTuple;

export declare const eyeHideIcon: IconShapeTuple;

export declare const eyeIcon: IconShapeTuple;

export declare const fileGroupIcon: IconShapeTuple;

export declare const fileIcon: IconShapeTuple;

export declare const fileSettingsIcon: IconShapeTuple;

export declare const fileZipIcon: IconShapeTuple;

export declare const filter2Icon: IconShapeTuple;

export declare const filterGridCircleIcon: IconShapeTuple;

export declare const filterGridIcon: IconShapeTuple;

export declare const filterIcon: IconShapeTuple;

export declare const filterOffIcon: IconShapeTuple;

export declare const firewallIcon: IconShapeTuple;

export declare const firstAidIcon: IconShapeTuple;

export declare const fishIcon: IconShapeTuple;

export declare const flameIcon: IconShapeTuple;

export declare const folderIcon: IconShapeTuple;

export declare const folderOpenIcon: IconShapeTuple;

export declare const formIcon: IconShapeTuple;

export declare const fuelIcon: IconShapeTuple;

export declare const gridViewIcon: IconShapeTuple;

export declare const helpIcon: IconShapeTuple;

export declare const helpInfoIcon: IconShapeTuple;

export declare const historyIcon: IconShapeTuple;

export declare const homeIcon: IconShapeTuple;

export declare const hourglassIcon: IconShapeTuple;

export declare const idBadgeIcon: IconShapeTuple;

export declare const imageIcon: IconShapeTuple;

export declare const infoCircleIcon: IconShapeTuple;

export declare const infoStandardIcon: IconShapeTuple;

export declare const keyIcon: IconShapeTuple;

export declare const landscapeIcon: IconShapeTuple;

export declare const libraryIcon: IconShapeTuple;

export declare const lightbulbIcon: IconShapeTuple;

export declare const listIcon: IconShapeTuple;

export declare function loadCoreIconSet(): void;

export declare function loadEssentialIconSet(): void;

export declare const lockIcon: IconShapeTuple;

export declare const loginIcon: IconShapeTuple;

export declare const logoutIcon: IconShapeTuple;

export declare const minusCircleIcon: IconShapeTuple;

export declare const minusIcon: IconShapeTuple;

export declare const moonIcon: IconShapeTuple;

export declare const newIcon: IconShapeTuple;

export declare const noAccessIcon: IconShapeTuple;

export declare const noteIcon: IconShapeTuple;

export declare const objectsIcon: IconShapeTuple;

export declare const organizationIcon: IconShapeTuple;

export declare const paperclipIcon: IconShapeTuple;

export declare const pasteIcon: IconShapeTuple;

export declare const pencilIcon: IconShapeTuple;

export declare const pinboardIcon: IconShapeTuple;

export declare const pinIcon: IconShapeTuple;

export declare const plusCircleIcon: IconShapeTuple;

export declare const plusIcon: IconShapeTuple;

export declare const popOutIcon: IconShapeTuple;

export declare const portraitIcon: IconShapeTuple;

export declare const printerIcon: IconShapeTuple;

export declare const recycleIcon: IconShapeTuple;

export declare const redoIcon: IconShapeTuple;

export declare const refreshIcon: IconShapeTuple;

export declare const repeatIcon: IconShapeTuple;

export declare const resizeIcon: IconShapeTuple;

export declare function runCssVarsPolyfill(config?: {}): void;

export declare const scissorsIcon: IconShapeTuple;

export declare const scrollIcon: IconShapeTuple;

export declare const searchIcon: IconShapeTuple;

export declare const shrinkIcon: IconShapeTuple;

export declare const sliderIcon: IconShapeTuple;

export declare const snowflakeIcon: IconShapeTuple;

export declare const sortByIcon: IconShapeTuple;

export declare const stepForward2Icon: IconShapeTuple;

export declare const successStandardIcon: IconShapeTuple;

export declare const sunIcon: IconShapeTuple;

export declare const switchIcon: IconShapeTuple;

export declare const syncIcon: IconShapeTuple;

export declare const tableIcon: IconShapeTuple;

export declare const tagIcon: IconShapeTuple;

export declare const tagsIcon: IconShapeTuple;

export declare const targetIcon: IconShapeTuple;

export declare const thermometerIcon: IconShapeTuple;

export declare const timesCircleIcon: IconShapeTuple;

export declare const timesIcon: IconShapeTuple;

export declare const toolsIcon: IconShapeTuple;

export declare const trashIcon: IconShapeTuple;

export declare const treeIcon: IconShapeTuple;

export declare const treeViewIcon: IconShapeTuple;

export declare const twoWayArrowsIcon: IconShapeTuple;

export declare const undoIcon: IconShapeTuple;

export declare const unknownIcon: IconShapeTuple;

export declare const unknownStatusIcon: IconShapeTuple;

export declare const unlockIcon: IconShapeTuple;

export declare const uploadIcon: IconShapeTuple;

export declare const userIcon: IconShapeTuple;

export declare const usersIcon: IconShapeTuple;

export declare const viewCardsIcon: IconShapeTuple;

export declare const viewColumnsIcon: IconShapeTuple;

export declare const viewListIcon: IconShapeTuple;

export declare const vmBugIcon: IconShapeTuple;

export declare const vmBugInverseIcon: IconShapeTuple;

export declare const volumeIcon: IconShapeTuple;

export declare const wandIcon: IconShapeTuple;

export declare const warningStandardIcon: IconShapeTuple;

export declare const windowCloseIcon: IconShapeTuple;

export declare const windowMaxIcon: IconShapeTuple;

export declare const windowMinIcon: IconShapeTuple;

export declare const windowRestoreIcon: IconShapeTuple;

export declare const worldIcon: IconShapeTuple;

export declare const wrenchIcon: IconShapeTuple;

export declare const zoomInIcon: IconShapeTuple;

export declare const zoomOutIcon: IconShapeTuple;
