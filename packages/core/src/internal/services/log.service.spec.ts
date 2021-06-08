/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { LogService } from './log.service.js';
import '@cds/core/badge/register.js'; // trigger global setup

describe('LogService', () => {
  it('should not log when in a test environment', () => {
    spyOn(console, 'log');
    spyOn(console, 'warn');
    spyOn(console, 'error');

    LogService.log('test log...');
    LogService.warn('test warn...');
    LogService.error('test error...');

    expect(console.log).not.toHaveBeenCalled();
    expect(console.warn).not.toHaveBeenCalled();
    expect(console.error).not.toHaveBeenCalled();
  });

  it('should log when not in a test environment', () => {
    const jasmine = window.jasmine;
    window.jasmine = undefined;

    spyOn(console, 'log');
    spyOn(console, 'warn');
    spyOn(console, 'error');

    LogService.log('test log...');
    LogService.warn('test warn...');
    LogService.error('test error...');

    expect(console.log).toHaveBeenCalled();
    expect(console.warn).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalled();

    window.jasmine = jasmine;
  });

  it('should log when not in a production environment', () => {
    window.CDS.environment.production = true;

    spyOn(console, 'log');
    spyOn(console, 'warn');
    spyOn(console, 'error');

    LogService.log('test log...');
    LogService.warn('test warn...');
    LogService.error('test error...');

    expect(console.log).not.toHaveBeenCalled();
    expect(console.warn).not.toHaveBeenCalled();
    expect(console.error).not.toHaveBeenCalled();

    window.CDS.environment.production = false;
  });
});
