/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const colors = require('colors/safe');
const shell = require('shelljs');
const VERSION = require('../package.json').version;

const packagePath = `../../dist/clr-angular/clr-angular-${VERSION}.tgz`;
const installCommand = `npm i ${packagePath} --no-save`;

// Moving to the ks-app root to work.
console.log(colors.yellow('Testing Clarity Artifacts for AOT'));
process.chdir('./src/ks-app');

// Do package installations.
console.log(colors.yellow(`Installing latest @clr/angular with: ${packagePath}`));
shell.exec('npm i');
shell.exec(installCommand);

// Compile ks-app for production.
// NOTE: this must stay here (after the script cd's into src/ks-app)!!
let status = shell.exec('npm run build --preserve-symlinks');
console.log(colors.yellow('Testing Clarity AOT on ks-app'));
if (status.code === 0) {
    console.log(colors.green('Clarity passed AOT compilation in the ks-app.'));
} else {
    console.log(colors.red(`AOT compilation failed on ks-app!! Status: ${status.code}\n`));
    process.exit(status.code);
}