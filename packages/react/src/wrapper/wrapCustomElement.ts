import { createElement, DOMAttributes, useEffect, useRef } from 'react';
import { usePropertyToAttribute } from './usePropertyToAttribute';
import { withRef } from './withRef';

/**
 * Wrap custom element to be "react compatible".
 *
 * @param tagName Name of the component being wrapped.
 */
export const wrapCustomElement = <WrappedElement extends HTMLElement = HTMLElement>(tagName: string) =>
  withRef<WrappedElement, Partial<Omit<WrappedElement, 'children'> & DOMAttributes<WrappedElement>>>(
    `CustomElement(${tagName})`,
    ({ children, ...properties }, passedRef) => {
      const ref = useRef<WrappedElement>(null);
      const propertyToAttribute = usePropertyToAttribute<WrappedElement>(ref);

      if (passedRef) {
        // If is a RefCallback
        if (typeof passedRef === 'function') {
          passedRef(ref.current);
        } else {
          // If is a RefObject
          if (typeof passedRef === 'object') {
            passedRef.current = ref.current;
          }
        }
      }

      useEffect(() => {
        Object.entries(properties).forEach(([property, value]) =>
          propertyToAttribute(property as keyof WrappedElement, value as WrappedElement[keyof WrappedElement])
        );
      }, [properties, propertyToAttribute]);

      return createElement(tagName, { ref }, children);
    }
  );

export default wrapCustomElement;
