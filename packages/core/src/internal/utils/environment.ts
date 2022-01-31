import isNil from 'ramda/es/isNil.js';

export function isBrowser(win = window) {
  return !isNil(win);
}

export function isJestTest() {
  return (globalThis as any)?.process?.env?.JEST_WORKER_ID !== undefined;
}
