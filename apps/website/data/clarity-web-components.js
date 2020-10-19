/*
 * Copyright (c) 2016-2020 VMware, Inc.
 * All Rights ReserveThis software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import clarityWebComponents from '../dist/core/custom-elements.json';

export default {
  fetchApi(componentName) {
    // filter the json data for component name.
    console.log(clarityWebComponents);
    return { yes: true };
  },
};
