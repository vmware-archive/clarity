import '@cds/core/badge/register.js';
import '@cds/core/icon/register.js';
import { ClarityIcons, userIcon } from '@cds/core/icon';
import { CommonStringsService } from '@cds/core';
import { inputStyles } from '@cds/core/input';

ClarityIcons.addIcons(userIcon);
console.log(CommonStringsService);

// test that we only pull this single item in and the side effects are isolated to register.js
console.log(inputStyles);
