/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
// Isolated tests for services: https://angular.io/docs/ts/latest/guide/testing.html#!#isolated-service-tests
import { ResponsiveNavCodes } from '../responsive-nav-codes';
import { ResponsiveNavigationService } from './responsive-navigation.service';
import { ResponsiveNavControlMessage } from '../responsive-nav-control-message';

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

  it('should notify updates of registered navs', () => {
    let navs = [];
    service.registeredNavs.subscribe(n => (navs = n));
    expect(navs.length).toBe(0);
    service.registerNav(ResponsiveNavCodes.NAV_LEVEL_1);
    expect(navs.length).toBe(1);
  });

  it('should notify if subscription is late, example: header is dynamically added later', () => {
    let navs = [];
    service.registerNav(ResponsiveNavCodes.NAV_LEVEL_1);
    service.registeredNavs.subscribe(n => (navs = n));
    expect(navs.length).toBe(1);
  });

  it('should send control messages to nav controls', () => {
    let controlMessage: ResponsiveNavControlMessage = null;
    service.navControl.subscribe(message => (controlMessage = message));
    expect(controlMessage).toBe(null);
    service.sendControlMessage('control_code', 1);
    expect(controlMessage.controlCode).toBe('control_code');
    expect(controlMessage.navLevel).toBe(1);
  });
});
