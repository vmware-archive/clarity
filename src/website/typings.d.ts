/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
declare module '*.html' {
  // eslint-disable-next-line
  var _: string;
  export default _;
}
declare module '!raw-loader!*' {
  const contents: string;
  export = contents;
}

interface Window {
  ClarityIcons: any;
  ga: any;
  trackSurveyAlert(eventLabel: string, externalLink?: boolean);
  trackIconSearch(searchedIcon: string, numberOfMatches: number);
}
