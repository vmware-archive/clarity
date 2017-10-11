/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
const shell = require('shelljs');
const prompt = require('prompt');
const colors = require('colors/safe');
const version = require('../package.json').version;

/*********
 * Build Clarity for release
 */
console.log(colors.green(`Building Clarity v${version}`));
shell.exec('npm run build');

/*********
 * Set up and start the publish process
 */
prompt.message = colors.red(`Are you ready to publish Clarity v${version} to npm?`);
prompt.delimiter = colors.green('><');
prompt.start();

/*********
 * Ask user if they are ready to publish this version of clarity
 */
prompt.get(['confirmation'], function (err, result) {
    if(/yes/i.test(result.confirmation) || /y/i.test(result.confirmation)) {
        shell.exec('npm publish dist/clarity-ui; npm publish dist/clarity-angular/clarity-angular-$npm_package_version.tgz; npm publish dist/clarity-icons');
        console.log(colors.green(`Clarity v${version} successfully published to npm!`));
    } else {
        console.log(colors.red('Nah, just kidding for now!'));
    }
});


