import { CdsCard as Card } from '@cds/core/card';
import '@cds/core/card/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index.js';

export const CdsCard = createComponent(React, 'cds-card', Card, {}, 'CdsCard');

logReactVersion(React);
