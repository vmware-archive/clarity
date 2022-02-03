import { CdsToggleGroup as ToggleGroup, CdsToggle as Toggle } from '@cds/core/toggle';
import '@cds/core/toggle/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index.js';

export const CdsToggleGroup = createComponent(React, 'cds-toggle-group', ToggleGroup, {}, 'CdsToggleGroup');
export const CdsToggle = createComponent(React, 'cds-toggle', Toggle, {}, 'CdsToggle');

logReactVersion(React);
