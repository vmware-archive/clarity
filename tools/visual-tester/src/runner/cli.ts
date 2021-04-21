#!/usr/bin/env node
const { run, defaultOptions } = require('./index');
const packageJson = require('../../package.json');

const argv = require('minimist')(process.argv.slice(2), {
  default: defaultOptions,
});

const banner = `
██╗   ██╗██╗███████╗██╗   ██╗ █████╗ ██╗     ██████╗ ██╗███████╗███████╗
██║   ██║██║██╔════╝██║   ██║██╔══██╗██║     ██╔══██╗██║██╔════╝██╔════╝
██║   ██║██║███████╗██║   ██║███████║██║     ██║  ██║██║█████╗  █████╗
╚██╗ ██╔╝██║╚════██║██║   ██║██╔══██║██║     ██║  ██║██║██╔══╝  ██╔══╝
 ╚████╔╝ ██║███████║╚██████╔╝██║  ██║███████╗██████╔╝██║██║     ██║██╗
  ╚═══╝  ╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═════╝ ╚═╝╚═╝     ╚═╝╚═╝
`.trimRight();

if (argv.showBanner) {
  console.log(banner);
  console.log(`================== v${packageJson.version}`);
}

run(argv);
