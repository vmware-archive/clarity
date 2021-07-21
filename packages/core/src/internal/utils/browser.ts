/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

/**
 * Hacks/workarounds for specific browsers, only when absolutly needed
 */

/** Used to detect safari for a11y behavior corrections */
export function isSafari() {
  return (navigator.vendor.match(/apple/i) || '').length > 0;
}

/** Used to detect Win for NVDA for a11y behavior corrections */
export function isWindows() {
  return (navigator.platform.match(/Win/i) || '').length > 0;
}
