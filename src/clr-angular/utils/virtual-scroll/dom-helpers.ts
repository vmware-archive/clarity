/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

/*
 * TODO: make this part of a global DOM adapter service at some point, merging it with the one from the Datagrid?
 */

export function ratioBottomReady(container: HTMLElement, ignore: number = 0) {
  return (container.scrollHeight - container.scrollTop - ignore) / container.clientHeight - 1;
}

export function ratioTopReady(container: HTMLElement, ignore: number = 0) {
  return (container.scrollTop - ignore) / container.clientHeight;
}

export function offsetHeight(nodes: HTMLElement[]) {
  return nodes.reduce((totalHeight: number, node: HTMLElement) => {
    return totalHeight + node.offsetHeight;
  }, 0);
}

export function preserveScrollAfterAppend<T>(container: HTMLElement, operation: () => T): T {
  const previousScroll = container.scrollTop;
  const result = operation();
  container.scrollTop = previousScroll;
  return result;
}

export function preserveScrollAfterPrepend<T>(container: HTMLElement, operation: () => T): T {
  const previousHeight = container.scrollHeight;
  const previousScroll = container.scrollTop;
  const result = operation();
  if (container.scrollTop === previousScroll) {
    container.scrollTop += container.scrollHeight - previousHeight;
  }
  return result;
}

/*
 * These last functions are dumb, but I do want to make sure DOM access is all grouped in this file.
 * We can maybe add guards and make them smarter in the future, to be compatible with webworkers.
 */
export function getScrollTop(el: HTMLElement) {
  return el.scrollTop;
}
export function setScrollTop(el: HTMLElement, value: number) {
  el.scrollTop = value;
}

export function startListening(el: HTMLElement, eventName: string, listener: (event: Event) => boolean | void) {
  el.addEventListener(eventName, listener);
}
export function stopListening(el: HTMLElement, eventName: string, listener: (event: Event) => boolean | void) {
  el.removeEventListener(eventName, listener);
}
