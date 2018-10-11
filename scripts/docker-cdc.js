#!/usr/bin/env node

/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const program = require('commander');
const shell = require('shelljs');
const ip = require('ip');

function generateRootUrl() {
  let myIp = ip.address();
  return `http://${myIp}:3000/`;
}

// Define the cli interactions we support, help text
program
  .version('1.0.0')
  .description('A utility for managing Clarity css regression with gemini')
  .option('-t, --test', 'Run a set of css regression tests: cdc -t set1 set2')
  .option('-c, --configuration <configuration>', 'Define which app configuration to build', null, '')
  .option('-u, --update', 'Generate a set of reference images: cdc -u set1 set2')
  .parse(process.argv);

console.log('Clarity Docker Control for Gemini CSS Regression Testing');
console.log('--------------------------------------------------------');
console.log();

/**********
 * Run gemini tests based on the args given:
 * - If we are testing but no component list is specified, run all tests
 * - NOTE, you have to pass at least 1 set as the args cdc -t set1 set2
 */
if (program.test) {
  console.log('Clarity sets to test: ', program.args);
  console.log('--------------');
  runGemini({ action: 'test', args: program.args });
}

/**********
 * Generate/update reference images based on the args given:
 * - If we are generating but no component list is specified, generate all the images
 * - NOTE, you have to pass at least 1 set as the args cdc -r set1 set2
 */
if (program.update) {
  console.log('Clarity sets to update: ', program.args);
  console.log('----------------');
  runGemini({ action: 'update', args: program.args });
}

/********
 * @description
 * A centralized function to start/stop the docker container and execute the correct test/update command.
 * @param config
 */
function runGemini(config) {
  const ngConfig = program.configuration ? '-c ' + program.configuration : '';
  shell.exec(`ng build dev ${ngConfig}`);
  let server = shell.exec('node_modules/.bin/lite-server --baseDir=dist/dev', { async: true });
  let status = shell.exec(
    'docker run --rm --name=clarity_chrome -d -p 4444:4444 selenium/standalone-chrome@sha256:b899f16b6d963600ef6da8a8dd49e311146033ed66cb5af71eccb78ab378e19a'
  );
  let geminiStatus = 0;
  let screensDir = program.configuration ? `./gemini/${program.configuration}-screens` : './gemini/screens';
  if (status.code === 0) {
    config.args.forEach(function(arg) {
      let gemini = shell.exec(
        `node_modules/.bin/gemini ${
          config.action
        } gemini/tests/${arg} --html-reporter-path ./reports/gemini/${arg} --root-url ${generateRootUrl()} --screenshots-dir ${screensDir}`
      ); // TODO: A better way to build string cmds.
      geminiStatus += gemini.code; // add up any non-zero exit codes
    });
    shell.exec('docker stop clarity_chrome');
  } else {
    console.warn(
      'WARNING: Unable to start docker container for gemini. Is docker installed and running on your system?'
    );
  }
  server.kill();
  process.exit(geminiStatus); // this will kill the process so that the lite-server is killed with the exit code from gemini
}
