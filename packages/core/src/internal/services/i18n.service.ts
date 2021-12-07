/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { GlobalStateService } from './global.service.js';

export interface I18nStrings {
  [key: string]: { [key: string]: string | undefined };

  alert: {
    closeButtonAriaLabel: string;
    loading: string;
    info: string;
    success: string;
    warning: string;
    danger: string;
  };
  dropdown: {
    open: string;
  };
  file: {
    browse: string;
    files: string;
    removeFile: string;
  };
  modal: {
    closeButtonAriaLabel: string;
    contentStart: string;
    contentBox: string;
    contentEnd: string;
  };
  overlay: {
    closeButtonAriaLabel: string;
    contentStart: string;
    contentEnd: string;
  };
  popup: {
    closeButtonAriaLabel: string;
    contentStart: string;
    contentEnd: string;
  };
  password: {
    showButtonAriaLabel: string;
    hideButtonAriaLabel: string;
  };
  progress: {
    loading: string;
    looping: string;
  };
  treeview: {
    loading: string;
  };
}

export const componentStringsDefault = {
  actions: {
    sort: 'Sort',
    expand: 'Expand',
    close: 'Close',
    resize: 'Resize',
    filter: 'Filter',
  },
  alert: {
    closeButtonAriaLabel: 'Close',
    loading: 'Loading',
    info: 'Info',
    success: 'Success',
    warning: 'Warning',
    danger: 'Error',
  },
  dropdown: {
    open: 'Open',
  },
  file: {
    browse: 'browse',
    files: 'files',
    removeFile: 'remove file',
  },
  modal: {
    closeButtonAriaLabel: 'Close modal',
    contentStart: 'Beginning of modal content',
    contentBox: 'Scrollable modal body',
    contentEnd: 'End of modal content',
  },
  navigation: {
    navigationElement: 'navigation',
    navigationLabel: 'navigation menu',
    navigationAbridgedText: 'View abridged menu',
    navigationUnabridgedText: 'View unabridged menu',
  },
  overlay: {
    closeButtonAriaLabel: 'Close dialog',
    contentStart: 'Beginning of dialog content',
    contentEnd: 'End of dialog content',
  },
  popup: {
    closeButtonAriaLabel: 'Close popup',
    contentStart: 'Beginning of popup content',
    contentEnd: 'End of popup content',
  },
  password: {
    showButtonAriaLabel: 'Show password',
    hideButtonAriaLabel: 'Hide password',
  },
  progress: {
    loading: 'Loading',
    looping: 'Loading',
  },
  treeview: {
    loading: 'Loading',
  },
};

/**
 * We want the user to be able to not only override a subset of the keys (e.g. only override strings
 * for aalert) but also be able to override a subset of values for that key (e.g. only override
 * the closeButtonAriaLabel). This type is defined here for the localize method in the I18nService.
 */
type PartialRecursive<T> = T extends object ? { [K in keyof T]?: PartialRecursive<T[K]> } : T;

/**
 * I18nService is a static class that gives users the ability to use and override
 * strings within the components for internationalization / globalization. One
 * can override default values globally for their application or override per
 * component instance as needed.
 *
 * Use the localize method to override values globally. For per component instance,
 * use the i18n decorator.
 */
export class I18nService {
  static get keys(): Readonly<I18nStrings> {
    // intialize registry if not yet set
    if (Object.keys(GlobalStateService.state.i18nRegistry).length === 0) {
      GlobalStateService.state.i18nRegistry = { ...componentStringsDefault, ...GlobalStateService.state.i18nRegistry };
    }

    return { ...componentStringsDefault, ...GlobalStateService.state.i18nRegistry };
  }

  static localize(overrides: PartialRecursive<I18nStrings>) {
    GlobalStateService.state.i18nRegistry = {
      ...componentStringsDefault,
      ...GlobalStateService.state.i18nRegistry,
      ...(overrides as I18nStrings),
    };
  }
}
