/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
// tslint:disable
declare module '*.html' {
  var _: string;
  export default _;
}
declare module '!raw-loader!*' {
  const contents: string;
  export = contents;
}

declare var window: Window;

interface Window {
  ClarityIcons: any;
  ga: any;
  trackHiringAlert(eventLabel: string, externalLink?: boolean);
  trackIconSearch(searchedIcon: string, numberOfMatches: number);
}
