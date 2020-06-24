import '@clr/core/badge/register.js';
import '@clr/core/icon/register.js';
import { ClarityIcons, userIcon } from '@clr/core/icon';
import { CommonStringsService } from '@clr/core';
import { inputStyles } from '@clr/core/input';

ClarityIcons.addIcons(userIcon);
console.log(CommonStringsService);

// test that we only pull this single item in and the side effects are isolated to register.js
console.log(inputStyles);
