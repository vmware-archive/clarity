import { forwardRef, ForwardRefRenderFunction } from 'react';

/**
 * Wraps forwardRef and adds a required displayName field.
 *
 * @param displayName Component displayName.
 * @param Component Component to be forwarded.
 */
export const withRef = <HTMLElementType, Props = HTMLElementType>(
  displayName: string,
  Component: ForwardRefRenderFunction<HTMLElementType, Props>
) => {
  const ForwardedComponent = forwardRef(Component);
  ForwardedComponent.displayName = displayName;

  return ForwardedComponent;
};

export default withRef;
