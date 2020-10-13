/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

/**
 * sleep() is used in animation code and also in some unit tests where async behavior needs to
 * be tested.
 *
 * Use sleep() inside an async function to delay execution for a short period of time.
 *
 * ```
 * async function ohai() {
 *    await sleep(55); // delays execution by at least 55 ms
 *    return 'ohai';
 * }
 * ```
 *
 * NOTE: the time sent to sleep is the MINIMUM time duration to execution. It is not and will not
 * be the exact time to execution.
 *
 */
export function sleep(millisecondsToWait = 10) {
  return new Promise(resolve => setTimeout(resolve, millisecondsToWait));
}
