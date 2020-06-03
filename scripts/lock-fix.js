/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const file = path.join(process.cwd(), 'yarn.lock');

let lock = fs.readFileSync(file, { encoding: 'utf8' });

lock = lock.replace(/http:\/\/build-artifactory\.eng\.vmware\.com\/api\/npm\/npm\//gim, 'https://registry.npmjs.org/');
lock = lock.replace(/https:\/\/build-artifactory\.eng\.vmware\.com\/api\/npm\/npm\//gim, 'https://registry.npmjs.org/');

fs.writeFileSync(file, lock, { encoding: 'utf8' });
