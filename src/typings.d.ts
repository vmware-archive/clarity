/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/**
 * We declare the module variable provided by the CommonJS module format,
 * so that the Typescript knows about it.
 */
declare var module: Module;

declare interface Module {
    // So far, we"re only using the id property.
    id: string;
}

interface Window {
    ClarityIcons: any;
    DOMPurify: any;
}
