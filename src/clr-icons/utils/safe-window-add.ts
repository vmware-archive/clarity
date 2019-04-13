import { ClarityIconsApi } from '../clr-icons-api';

/**
 * Shapes object interface.
 */
interface Shapes {
  [shapeName: string]: string;
}

/**
 * Safely adds icon shapes to the window ClarityIcons instance.
 * @param shapes Object with shapes.
 */
export const safeWindowAdd = (shapes: Shapes) => {
  if (
    typeof window !== 'undefined' &&
    window.ClarityIcons !== undefined &&
    window.ClarityIcons instanceof ClarityIconsApi
  ) {
    window.ClarityIcons.add(shapes);
  }
};

export default safeWindowAdd;
