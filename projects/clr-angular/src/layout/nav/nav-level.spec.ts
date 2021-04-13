/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ClrNavLevel } from './nav-level';
import { ResponsiveNavigationService } from './providers/responsive-navigation.service';
import { ResponsiveNavCodes } from './responsive-nav-codes';

describe('NavLevelDirective', () => {
  let service: ResponsiveNavigationService;
  let navLevel: ClrNavLevel;

  beforeEach(() => {
    service = new ResponsiveNavigationService();
    navLevel = new ClrNavLevel(service, null); // null because we are just testing the directive functions
    navLevel._level = 1;
  });

  it('#level is set to 1', () => {
    expect(navLevel.level).toBe(ResponsiveNavCodes.NAV_LEVEL_1);
  });

  it('#level is set to 2', () => {
    navLevel._level = 2;
    expect(navLevel.level).toBe(ResponsiveNavCodes.NAV_LEVEL_2);
  });

  it('#registers nav on init. sends the registration code on registerNavSubject in the service', () => {
    service.registerNav(ResponsiveNavCodes.NAV_LEVEL_1);
    service.registeredNavs.subscribe(navArray => {
      expect(navArray[0]).toBe(ResponsiveNavCodes.NAV_LEVEL_1);
    });
  });

  it('#sends the open code on controlNavSubject in the service when open() is called', () => {
    navLevel.open();
    service.navControl.subscribe(controlMessage => {
      expect(controlMessage.controlCode).toBe(ResponsiveNavCodes.NAV_OPEN);
    });
  });

  it('#sends the close code on controlNavSubject when close() is called', () => {
    navLevel.close();
    service.navControl.subscribe(controlMessage => {
      expect(controlMessage.controlCode).toBe(ResponsiveNavCodes.NAV_CLOSE);
    });
  });

  it('#unregisters itself from the registerNavSubject when ngOnDestroy() is called', () => {
    navLevel.ngOnDestroy();
    service.registeredNavs.subscribe(navArray => {
      expect(navArray.length).toBe(0);
    });
  });
});
