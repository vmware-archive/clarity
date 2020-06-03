/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const lock = fs.readFileSync(path.join(process.cwd(), 'yarn.lock'), { encoding: 'utf8' });

if (lock.search('build-artifactory.eng.vmware.com') !== -1) {
  console.error('Package lock file has internal registry entries, run `yarn lock:fix` to fix the file.');
  process.exit(1);
}
