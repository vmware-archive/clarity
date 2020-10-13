import { CdsIcon as Icon } from '@cds/core/icon';
import '@cds/core/icon/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsIconType = Icon;
/**
 * If using JSX or TSX, import the icon name from `@cds/core/icon` and include it in the `shape` prop to improve type safety:
 *
 * ```tsx
 * import { ClarityIcons, userIcon, userIconName } from '@cds/core/icon';
 * import { CdsIcon } from '@cds/react/icon';
 *
 * ClarityIcons.addIcons(userIcon);
 *
 * <CdsIcon shape={userIconName} />
 * ```
 */
export class CdsIcon extends createReactComponent<CdsIconType>('cds-icon') {}
