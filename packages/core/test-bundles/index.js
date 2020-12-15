import '@cds/core/badge/register.js';
import '@cds/core/icon/register.js';
import { ClarityIcons, userIcon } from '@cds/core/icon';
import { I18nService } from '@cds/core';
import { inputStyles } from '@cds/core/input';

ClarityIcons.addIcons(userIcon);
console.log(I18nService);

// test that we only pull this single item in and the side effects are isolated to register.js
console.log(inputStyles);
