import { CdsDatalist as Datalist } from '@cds/core/datalist';
import '@cds/core/datalist/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index.js';

export const CdsDatalist = createComponent(React, 'cds-datalist', Datalist, {}, 'CdsDatalist');

logReactVersion(React);
