/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClrNavigationModule } from '../nav/navigation.module';
import { ResponsiveNavCodes } from '../nav/responsive-nav-codes';
import { ResponsiveNavControlMessage } from '../nav/responsive-nav-control-message';

import { ClrMainContainer } from './main-container';
import { ClrMainContainerModule } from './main-container.module';

@Component({
  template: `
        <clr-main-container>
            Test
        </clr-main-container>
   `,
})
class TestComponent {
  @ViewChild(ClrMainContainer) mainContainerInstance: ClrMainContainer;
}

describe('MainContainer', () => {
  let fixture: ComponentFixture<any>;
  let compiled: any;
  const controlOpenNav1Message: ResponsiveNavControlMessage = new ResponsiveNavControlMessage(
    ResponsiveNavCodes.NAV_OPEN,
    ResponsiveNavCodes.NAV_LEVEL_1
  );
  const controlOpenNav2Message: ResponsiveNavControlMessage = new ResponsiveNavControlMessage(
    ResponsiveNavCodes.NAV_OPEN,
    ResponsiveNavCodes.NAV_LEVEL_2
  );
  const controlCloseNav1Message: ResponsiveNavControlMessage = new ResponsiveNavControlMessage(
    ResponsiveNavCodes.NAV_CLOSE,
    ResponsiveNavCodes.NAV_LEVEL_1
  );
  const controlCloseNav2Message: ResponsiveNavControlMessage = new ResponsiveNavControlMessage(
    ResponsiveNavCodes.NAV_CLOSE,
    ResponsiveNavCodes.NAV_LEVEL_2
  );
  const controlCloseAllMessage: ResponsiveNavControlMessage = new ResponsiveNavControlMessage(
    ResponsiveNavCodes.NAV_CLOSE_ALL,
    -999
  );
  const controlNav1ToggleMessage: ResponsiveNavControlMessage = new ResponsiveNavControlMessage(
    ResponsiveNavCodes.NAV_TOGGLE,
    ResponsiveNavCodes.NAV_LEVEL_1
  );
  const controlNav2ToggleMessage: ResponsiveNavControlMessage = new ResponsiveNavControlMessage(
    ResponsiveNavCodes.NAV_TOGGLE,
    ResponsiveNavCodes.NAV_LEVEL_2
  );

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ClrMainContainerModule, ClrNavigationModule],
      declarations: [TestComponent],
    });

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('projects content', () => {
    expect(compiled.textContent).toMatch(/Test/);
  });

  it('toggles the ResponsiveNavCodes.NAV_CLASS_HAMBURGER_MENU class to the host when NAV_LEVEL_1 is passed', () => {
    const instance: ClrMainContainer = fixture.componentInstance.mainContainerInstance;

    instance.processMessage(controlNav1ToggleMessage);
    expect(compiled.querySelector('.' + ResponsiveNavCodes.NAV_CLASS_HAMBURGER_MENU)).not.toBeNull();

    instance.processMessage(controlNav1ToggleMessage);
    expect(compiled.querySelector('.' + ResponsiveNavCodes.NAV_CLASS_HAMBURGER_MENU)).toBeNull();
  });

  it('toggles the ResponsiveNavCodes.NAV_CLASS_OVERFLOW_MENU class to the host when NAV_LEVEL_2 is passed', () => {
    const instance: ClrMainContainer = fixture.componentInstance.mainContainerInstance;

    instance.processMessage(controlNav2ToggleMessage);
    expect(compiled.querySelector('.' + ResponsiveNavCodes.NAV_CLASS_OVERFLOW_MENU)).not.toBeNull();

    instance.processMessage(controlNav2ToggleMessage);
    expect(compiled.querySelector('.' + ResponsiveNavCodes.NAV_CLASS_OVERFLOW_MENU)).toBeNull();
  });

  it('removes the open trigger classes when NAV_CLOSE_ALL is passed', () => {
    const instance: ClrMainContainer = fixture.componentInstance.mainContainerInstance;

    instance.processMessage(controlOpenNav1Message);
    expect(compiled.querySelector('.' + ResponsiveNavCodes.NAV_CLASS_HAMBURGER_MENU)).not.toBeNull();

    instance.processMessage(controlCloseAllMessage);
    expect(compiled.querySelector('.' + ResponsiveNavCodes.NAV_CLASS_HAMBURGER_MENU)).toBeNull();

    instance.processMessage(controlOpenNav2Message);
    expect(compiled.querySelector('.' + ResponsiveNavCodes.NAV_CLASS_OVERFLOW_MENU)).not.toBeNull();

    instance.processMessage(controlCloseAllMessage);
    expect(compiled.querySelector('.' + ResponsiveNavCodes.NAV_CLASS_OVERFLOW_MENU)).toBeNull();
  });

  it('adds the NAV_CLASS_HAMBURGER_MENU class when NAV_OPEN_LEVEL_1 is passed', () => {
    const instance: ClrMainContainer = fixture.componentInstance.mainContainerInstance;

    instance.processMessage(controlOpenNav1Message);
    expect(compiled.querySelector('.' + ResponsiveNavCodes.NAV_CLASS_HAMBURGER_MENU)).not.toBeNull();

    // sending open code twice
    instance.processMessage(controlOpenNav1Message);
    expect(compiled.querySelector('.' + ResponsiveNavCodes.NAV_CLASS_HAMBURGER_MENU)).not.toBeNull();
  });

  it('removes the NAV_CLASS_HAMBURGER_MENU class when NAV_CLOSE_LEVEL_1 is passed', () => {
    const instance: ClrMainContainer = fixture.componentInstance.mainContainerInstance;
    instance.processMessage(controlOpenNav1Message);
    expect(compiled.querySelector('.' + ResponsiveNavCodes.NAV_CLASS_HAMBURGER_MENU)).not.toBeNull();

    instance.processMessage(controlCloseNav1Message);
    expect(compiled.querySelector('.' + ResponsiveNavCodes.NAV_CLASS_HAMBURGER_MENU)).toBeNull();

    // sending close code twice
    instance.processMessage(controlCloseNav1Message);
    expect(compiled.querySelector('.' + ResponsiveNavCodes.NAV_CLASS_HAMBURGER_MENU)).toBeNull();
  });

  it('adds the NAV_CLASS_OVERFLOW_MENU class when NAV_OPEN_LEVEL_2 is passed', () => {
    const instance: ClrMainContainer = fixture.componentInstance.mainContainerInstance;
    instance.processMessage(controlOpenNav2Message);
    expect(compiled.querySelector('.' + ResponsiveNavCodes.NAV_CLASS_OVERFLOW_MENU)).not.toBeNull();

    // sending open code twice
    instance.processMessage(controlOpenNav2Message);
    expect(compiled.querySelector('.' + ResponsiveNavCodes.NAV_CLASS_OVERFLOW_MENU)).not.toBeNull();
  });

  it('removes the NAV_CLASS_OVERFLOW_MENU class when NAV_CLOSE_LEVEL_2 is passed', () => {
    const instance: ClrMainContainer = fixture.componentInstance.mainContainerInstance;
    instance.processMessage(controlOpenNav2Message);
    expect(compiled.querySelector('.' + ResponsiveNavCodes.NAV_CLASS_OVERFLOW_MENU)).not.toBeNull();

    instance.processMessage(controlCloseNav2Message);
    expect(compiled.querySelector('.' + ResponsiveNavCodes.NAV_CLASS_OVERFLOW_MENU)).toBeNull();

    // sending close code twice
    instance.processMessage(controlCloseNav2Message);
    expect(compiled.querySelector('.' + ResponsiveNavCodes.NAV_CLASS_OVERFLOW_MENU)).toBeNull();
  });
});
