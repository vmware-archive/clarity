/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export function logReactVersion(react: { version: string }) {
  if (window && (window as any).CDS && !(window as any).CDS._react.version) {
    (window as any).CDS._react.version = react.version;
  }
}
