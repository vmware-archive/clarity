const RELEASES = require("../../../releases/release-list.json");

export const MAJORS: string[] = [];
export const MINORS: {[major: string]: string[]} = {};
export const PATCHES: {[minor: string]: string[]} = {};

organize();
sortAll();

function organize() {
  for (let releaseNumber in RELEASES.all) {
    let parts = releaseNumber.split(".");
    let major = parts[0];
    let minor = parts[0]+"."+parts[1];
    if (!MINORS[major]) {
      MAJORS.push(major);
      MINORS[major] = [];
    }
    if (!PATCHES[minor]) {
      MINORS[major].push(minor);
      PATCHES[minor] = [];
    }
    PATCHES[minor].push(releaseNumber);
  }
}

function sortAll() {
  MAJORS.sort(compareReleases);
  for (let major in MINORS) {
    MINORS[major].sort(compareReleases);
  }
  for (let minor in PATCHES) {
    PATCHES[minor].sort(compareReleases);
  }
}

export function compareReleases(rA, rB) {
  let splitA = rA.split(".").map(part => parseInt(part));
  let splitB = rB.split(".").map(part => parseInt(part));
  for (let i in splitA) {
    if (splitA[i] < splitB[i]) {
      return 1;
    } else if (splitA[i] > splitB[i]) {
      return -1;
    }
  }
  return 0;
}
