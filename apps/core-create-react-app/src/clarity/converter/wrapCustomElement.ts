import {
  createElement,
  DOMAttributes,
  FunctionComponent,
  useEffect,
  useRef
} from 'react';
import usePropertyToAttribute from './usePropertyToAttribute';

// Special thanks to Lucas Ciruzzi who contributed the React wrapper
// original source https://codesandbox.io/s/custom-elements-wrapped-mzfx7 

export const wrapCustomElement = <Properties = {}>(tagName: string) =>
  Object.assign((({ children, ...properties }) => {
      const ref = useRef<HTMLElement>(null);
      const propertyToAttribute = usePropertyToAttribute(ref);

      useEffect(() => {
        Object.keys(properties).map(property => propertyToAttribute(property, (properties as any)[property]));
      }, [properties, propertyToAttribute]);

      return createElement(tagName, { ref }, children);
    }) as FunctionComponent<Partial<Omit<Properties, 'children'> & DOMAttributes<HTMLElement>>>,
    {
      displayName: `customElement(${tagName})`
    }
  );

export default wrapCustomElement;
