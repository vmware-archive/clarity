import { browserFeatures } from '../utils/supports.js';

/**
 * @internal
 * This base class allows us to conditionally apply the css shim needed
 * for Safari to use CSS Gap API. CSS Gap is used within our layout utilities.
 *
 * The shim is loaded in the `base.element.scss` and conditionally applied
 * when the `_nfg` (no flex gap) attribute is on the component. Unfortunately
 * there is no way to detect flex gap support with only CSS and JS is required.
 *
 * The Class is applied during the registration step of the custom element.
 * This shim CSS is also applied at the global level for applications in
 * the `module.shims.css` file.
 *
 * Once Safari ships Flex Gap support this can be removed. Currently Safari
 * supports Flex Gap in the Safari Technical Preview so it should be available
 * in the next major release.
 */
export function applyCSSGapShim(elementClass: any) {
  class GapShim extends elementClass {
    connectedCallback() {
      super.connectedCallback();
      this.setAttribute('_nfg', '');
    }
  }
  return browserFeatures.supports.flexGap ? elementClass : GapShim;
}
