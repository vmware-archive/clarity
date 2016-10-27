/**
 * We declare the module variable provided by the CommonJS module format,
 * so that the Typescript knows about it.
 */
declare var module: Module;

declare interface Module {
    // So far, we"re only using the id property.
    id: string;
}

declare var customElements: CustomElements;

declare interface CustomElements {
    define: any;
}