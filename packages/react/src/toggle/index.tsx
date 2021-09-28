import { CdsToggleGroup as ToggleGroup, CdsToggle as Toggle } from '@cds/core/toggle';
import '@cds/core/toggle/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils';

export const CdsToggleGroup = createComponent(React, 'cds-toggle-group', ToggleGroup);
export const CdsToggle = createComponent(React, 'cds-toggle', Toggle);

/**
 * Setting displayName on the prototype is a workaround for now.
 * See: https://github.com/lit/lit/issues/2154
 * Follow: https://github.com/lit/lit/pull/2155
 */
CdsToggleGroup.displayName = 'CdsToggleGroup';
CdsToggle.displayName = 'CdsToggle';

logReactVersion(React);
