/**
 * Wrap custom CSS property with `var(...)`.
 * @param {string} property
 * @return {string}
 */
export function varCustomCssProperty(property) {
  if (!property) {
    throw Error('Empty property is passed');
  }

  if (!property.startsWith('--')) {
    throw Error('Custom property must be prefixed with "--"');
  }

  return `var(${property})`;
}
