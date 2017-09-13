const RELEASES = require("../../../releases/release-list.json");

export const MAJORS: string[] = [];
export const MINORS: { [major: string]: string[] } = {};
export const PATCHES: { [minor: string]: string[] } = {};

organize();

function organize() {
    for (let releaseNumber in RELEASES.all) {
        let parts = releaseNumber.split(".");
        let major = parts[0];
        let minor = parts[0] + "." + parts[1];
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

export function compareReleases(rA, rB) {
    let splitA = rA.split(".").map(part => parseInt(part, 10));
    let splitB = rB.split(".").map(part => parseInt(part, 10));
    let countA = 0;
    let countB = 0;

    if (rA.indexOf("-") > -1 && rB.indexOf("-") > -1) {
        let minorVersionA = rA.split("-")[1].split(".");
        let minorVersionB = rB.split("-")[1].split(".");
        if (minorVersionA[0] < minorVersionB[0]) {
            countA++;
        } else {
            countB++;
        }
    }

    for (let i in splitA) {
        if (splitA[i] < splitB[i]) {
            countA++;
        } else if (splitA[i] > splitB[i]) {
            countB++;
        }
    }

    if (countA > countB) {
        return 1;
    } else if (countB > countA) {
        return -1;
    }
    return 0;
}
