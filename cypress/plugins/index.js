/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

require('dotenv').config();

module.exports = (on, config) => {
  // This is a simple plugin to capture env variables from the system, since a
  // plugin is the only way to access the NodeJS runtime.

  // Detect if there is a theme to use or fallback
  config.env.CLARITY_THEME = process.env.CLARITY_THEME || 'light';

  // If we don't have a BATCH ID already, try to build one from Travis then fallback.
  config.env.APPLITOOLS_BATCH_ID =
    process.env.APPLITOOLS_BATCH_ID || `localhost-${config.env.CLARITY_THEME}-${Date.now()}`;

  return config;
};
require('@applitools/eyes-cypress')(module);
