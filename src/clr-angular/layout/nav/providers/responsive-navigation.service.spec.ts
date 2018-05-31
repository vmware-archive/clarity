/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
// Isolated tests for services: https://angular.io/docs/ts/latest/guide/testing.html#!#isolated-service-tests
import { ResponsiveNavCodes } from '../responsive-nav-codes';
import { ResponsiveNavigationService } from './responsive-navigation.service';

describe('ResponsiveNavigationService', () => {
  let service: ResponsiveNavigationService;

  beforeEach(() => {
    service = new ResponsiveNavigationService();
  });

  it('#initializes an empty nav level list', () => {
    expect(service.responsiveNavList.length).toBe(0);
  });

  it('#registers Nav Level 1', () => {
    service.registerNav(ResponsiveNavCodes.NAV_LEVEL_1);
    expect(service.responsiveNavList.length).toBe(1);
    expect(service.responsiveNavList[0]).toBe(ResponsiveNavCodes.NAV_LEVEL_1);
  });

  it('#registers Nav Level 2', () => {
    service.registerNav(ResponsiveNavCodes.NAV_LEVEL_2);
    expect(service.responsiveNavList.length).toBe(1);
    expect(service.responsiveNavList[0]).toBe(ResponsiveNavCodes.NAV_LEVEL_2);
  });

  it('#registers maximun 2 nav levels', () => {
    service.registerNav(ResponsiveNavCodes.NAV_LEVEL_1);
    service.registerNav(ResponsiveNavCodes.NAV_LEVEL_2);
    service.registerNav(ResponsiveNavCodes.NAV_LEVEL_1);
    expect(service.responsiveNavList.length).toBe(2);
  });

  it('#unregisters nav levels', () => {
    expect(service.responsiveNavList.length).toBe(0);
    service.registerNav(ResponsiveNavCodes.NAV_LEVEL_1);
    expect(service.responsiveNavList.length).toBe(1);
    service.unregisterNav(ResponsiveNavCodes.NAV_LEVEL_1);
    expect(service.responsiveNavList.length).toBe(0);
  });
});
