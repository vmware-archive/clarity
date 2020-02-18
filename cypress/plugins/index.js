/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

require('dotenv').config();

module.exports = (on, config) => {
  // This is a simple plugin to capture env variables from the system, since a
  // plugin is the only way to access the NodeJS runtime.

  // Detect if there is a theme to use or fallback
  config.env.CLARITY_THEME = process.env.CLARITY_THEME || 'light';

  return config;
};
