export declare enum ClrLoadingState {
    DEFAULT = 0,
    LOADING = 1,
    SUCCESS = 2,
    ERROR = 3
}

export declare class CwcButton extends CwcBaseButton {
    loadingState: ClrLoadingState;
    connectedCallback(): void;
    render(): import("lit-element").TemplateResult;
    static readonly styles: import("lit-element").CSSResult;
}

export declare class CwcTestDropdown extends LitElement {
    open: boolean;
    title: string;
    render(): import("lit-element").TemplateResult;
    toggle(): void;
    static readonly styles: import("lit-element").CSSResult;
}
