/*
 * Copyright (c) 2016-2020 VMware, Inc.
 * All Rights ReserveThis software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import * as glob from 'glob';
import { extractFilename, DocDemos, parseStories, saveCoreDemos } from './utils';

const stories: DocDemos[] = [];
// Note: even though this is in the parse directory, it executes the scripts form the build directory, one level up from here.
const fileArray: string[] = glob.sync('../src/**/*.stories.ts');

// Parse the demos from all stories files
fileArray.forEach(file => {
  // each file may have an array of stories with templates
  const docDemos: DocDemos = {
    componentName: extractFilename(file),
    stories: parseStories(file),
  };
  stories.push(docDemos);
});

// Note: even though this is in the parse directory, it executes the scripts form the build directory, one level up from here.const saveDirectory
const progress: boolean = saveCoreDemos(stories, '../../../apps/website/data/core-demos.json'); // file path is hard coded in this utility

if (progress) {
  console.log(`Core demo data generated in website data folder.`);
  process.exit(0);
} else {
  process.exit(1);
}
