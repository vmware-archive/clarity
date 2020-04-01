/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import * as RELEASES from '../../../releases/release-list.json';

export const VERSIONS = {};

organize();

function organize() {
  Object.keys(RELEASES.all).forEach(version => {
    const [major, minor] = version.split('.');

    if (major !== '0') {
      if (!VERSIONS[`v${major}`]) {
        VERSIONS[`v${major}`] = [];
      }
      VERSIONS[`v${major}`].push(version);
    } else {
      if (!VERSIONS[`v0.${minor}`]) {
        VERSIONS[`v0.${minor}`] = [];
      }
      VERSIONS[`v0.${minor}`].push(version);
    }
  });

  Object.keys(VERSIONS).forEach(major => {
    VERSIONS[major].sort((a, b) => compareReleases(a, b));
  });
}

export function compareReleases(rA, rB) {
  const returnA = -1;
  const returnB = 1;
  // Simple string comparison for equality
  if (rA === rB) {
    return 0;
  }
  // Place these in order of importance, if any others are ever needed. alpha is lower than beta, etc.
  const modifiers = ['alpha', 'beta', 'rc'];

  const splitA = rA.split('-');
  const splitB = rB.split('-');
  const versionA = splitA[0].split('.').map(part => parseInt(part, 10));
  const versionB = splitB[0].split('.').map(part => parseInt(part, 10));

  // Check the main semver numbers
  for (let i = 0; i < 3; i++) {
    if (versionA[i] > versionB[i]) {
      return returnA;
    } else if (versionA[i] < versionB[i]) {
      return returnB;
    }
  }

  // Ok, need to compare against -modifier.version
  const modifierA = splitA[1] ? splitA[1].split('.') : [];
  const modifierB = splitB[1] ? splitB[1].split('.') : [];

  // Check special case of -patch
  if (modifierA.indexOf('patch') === 0) {
    return returnA;
  } else if (modifierB.indexOf('patch') === 0) {
    return returnB;
  }

  // Compare modifiers
  for (let i = 0; i < 2; i++) {
    const indexA = modifiers.indexOf(modifierA[0]);
    const indexB = modifiers.indexOf(modifierB[0]);

    // If modifiers are different we can compute
    if (indexA !== -1 && indexB !== -1) {
      // Case where modifiers are equal like rc.1 and rc.2
      if (indexA === indexB) {
        const modVersionA = modifierA[1] || 0;
        const modVersionB = modifierB[1] || 0;
        return modVersionA > modVersionB ? returnA : returnB;
      }
      return indexA > indexB ? returnA : returnB;
    } else if (indexA > indexB) {
      // Here the B has no modifier, so is newer
      return returnB;
    } else if (indexA < indexB) {
      // Here the A has no modifier, so it is newer
      return returnA;
    }
  }

  // Otherwise, we have an unknown value provided
  return -2;
}
