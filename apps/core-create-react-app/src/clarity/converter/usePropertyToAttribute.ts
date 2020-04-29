import { RefObject } from 'react';
import useAddEventListener from './useAddEventListener';
import useSetAttribute from './useSetAttribute';

export const usePropertyToAttribute = <Target extends HTMLElement>(ref: RefObject<Target>) => {
  const addEventListener = useAddEventListener(ref);
  const [setAttribute, removeAttribute] = useSetAttribute(ref);
  const reactProperties = [
    'children',
    'className',
    'localName',
    'ref',
    'style'
  ];

  return <Value>(property: string, value: Value | EventListener) => {
    if (!reactProperties.includes(property)) {
      if (typeof value === 'function') {
        addEventListener(property, value as EventListener);
      } else {
        (ref?.current as any)[property] = value;

        switch (typeof value) {
          case 'bigint':
          case 'number':
          case 'object':
          case 'undefined':
            value !== null && value !== undefined ? setAttribute(property, JSON.stringify(value)) : removeAttribute(property);
            break;
          case 'string':
            setAttribute(property, value);
            break;
          case 'boolean':
            value ? setAttribute(property, property) : removeAttribute(property);
            break;
        }
      }
    }
  };
};

export default usePropertyToAttribute;
