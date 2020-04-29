import { RefObject } from 'react';

export const useSetAttribute = <Target extends HTMLElement>(ref: RefObject<Target>) =>
  [
    (name: string, value: string) =>
      ref?.current?.getAttribute(name) !== value ? ref?.current?.setAttribute(name, value) : undefined,
    (name: string) =>
      ref?.current?.getAttribute(name) ? ref.current.removeAttribute(name) : undefined
  ] as const;

export default useSetAttribute;
