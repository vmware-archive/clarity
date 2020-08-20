import { RefObject } from 'react';
import { useAddEventListener } from './useAddEventListener';
import { useSetAttribute } from './useSetAttribute';

/**
 * React property to element attribute setter hook.
 *
 * @param ref Ref to the DOM element.
 */
export const usePropertyToAttribute = <Target extends HTMLElement>(ref: RefObject<Target>) => {
  const addEventListener = useAddEventListener(ref);
  const [setAttribute, removeAttribute] = useSetAttribute(ref);
  const reactProperties: (keyof Target | 'ref')[] = ['children', 'className', 'localName', 'ref', 'style'];

  return (property: keyof Target, value: Target[typeof property]) => {
    if (!reactProperties.includes(property) && typeof property === 'string') {
      if (typeof value === 'function') {
        return addEventListener(property, (value as unknown) as EventListener);
      } else {
        if (ref.current) {
          ref.current[property as keyof Target] = value;
        }
        if (typeof value === 'string') {
          return setAttribute(property, value);
        } else {
          return value !== null && value !== undefined
            ? setAttribute(property, JSON.stringify(value))
            : removeAttribute(property);
        }
      }
    }
  };
};

export default usePropertyToAttribute;
