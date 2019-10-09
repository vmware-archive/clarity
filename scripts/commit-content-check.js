#!/usr/bin/env node

/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

 const exec = require('child_process').execSync;
const result = [];

['fdescribe', 'fit'].forEach((test) => {
  const files = exec(`git --no-pager diff --staged -G"^\\s*${test}\\(" --name-only`, { encoding: 'utf8' }).split('\n');
  if (files && files.length > 1) {
    // trow the last empty line
    files.pop();
    result.push([test, files])
  }
})

// Check for debugger;
const files = exec(`git --no-pager diff --staged -G"debugger" --name-only`, { encoding: 'utf8' }).split('\n');
if (files && files.length > 1) {
  // trow the last empty line
  files.pop();
  result.push(['debugger', files])
}

if (result.length > 0) {
  console.log("❗️Git staged files include one or more illigal words, please remove them: \n")

  result.forEach((error) => {
    console.log("⚠️  file(s) below include '" + error[0] + "':\n");
    error[1].map((file) => { console.log("\x1b[31m", file, "\x1b[0m")})
    console.log("\n");
  })

  process.exit(1);
  return
}

return process.exit(0);