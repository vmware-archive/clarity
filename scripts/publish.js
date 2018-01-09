/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
const shell = require('shelljs');
const prompt = require('prompt');
const colors = require('colors/safe');
const version = require('../package.json').version;
const path = require('path');

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
        const npm = path.join(process.cwd(), 'node_modules', '.bin', 'npm');
        shell.exec(`${npm} publish dist/clr-ui; ${npm} publish dist/clr-angular/clr-angular-${version}.tgz; ${npm} publish dist/clr-icons`);
        console.log(colors.green(`Clarity v${version} successfully published to npm!`));
    } else {
        console.log(colors.red('Nah, just kidding for now!'));
    }
});


