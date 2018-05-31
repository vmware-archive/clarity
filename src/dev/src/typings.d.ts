/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/**
 * We declare the module variable provided by the CommonJS module format,
 * so that the Typescript knows about it.
 */
declare var window: Window;

interface Window {
  ClarityIcons: any;
}

interface ClarityIconElement extends HTMLElement {
  clrIconUniqId: string;
}
