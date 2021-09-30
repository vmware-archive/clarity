import { CdsIcon as Icon } from '@cds/core/icon';
import '@cds/core/icon/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils';

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
export const CdsIcon = createComponent(React, 'cds-icon', Icon);

/**
 * Setting displayName on the prototype is a workaround for now.
 * See: https://github.com/lit/lit/issues/2154
 * Follow: https://github.com/lit/lit/pull/2155
 */
CdsIcon.displayName = 'CdsIcon';

logReactVersion(React);
