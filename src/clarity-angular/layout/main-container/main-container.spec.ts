/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Component, ViewChild } from "@angular/core";

import { ClrResponsiveNavCodes } from "../nav/clrResponsiveNavCodes";
import { ClrResponsiveNavControlMessage } from "../nav/clrResponsiveNavControlMessage";
import { MainContainer } from "./main-container";
import { ClrMainContainerModule } from "./main-container.module";
import { ClrNavigationModule } from "../nav/navigation.module";

@Component({
    template: `
        <clr-main-container>
            Test
        </clr-main-container>
   `
})
class TestComponent {
    @ViewChild(MainContainer) mainContainerInstance: MainContainer;
}

describe("MainContainer", () => {
    let fixture: ComponentFixture<any>;
    let compiled: any;
    let controlOpenNav1Message: ClrResponsiveNavControlMessage =
        new ClrResponsiveNavControlMessage(
            ClrResponsiveNavCodes.NAV_OPEN,
            ClrResponsiveNavCodes.NAV_LEVEL_1
        );
    let controlOpenNav2Message: ClrResponsiveNavControlMessage =
        new ClrResponsiveNavControlMessage(
            ClrResponsiveNavCodes.NAV_OPEN,
            ClrResponsiveNavCodes.NAV_LEVEL_2
        );
    let controlCloseNav1Message: ClrResponsiveNavControlMessage =
        new ClrResponsiveNavControlMessage(
            ClrResponsiveNavCodes.NAV_CLOSE,
            ClrResponsiveNavCodes.NAV_LEVEL_1
        );
    let controlCloseNav2Message: ClrResponsiveNavControlMessage =
        new ClrResponsiveNavControlMessage(
            ClrResponsiveNavCodes.NAV_CLOSE,
            ClrResponsiveNavCodes.NAV_LEVEL_2
        );
    let controlCloseAllMessage: ClrResponsiveNavControlMessage =
        new ClrResponsiveNavControlMessage(
            ClrResponsiveNavCodes.NAV_CLOSE_ALL,
            -999
        );
    let controlNav1ToggleMessage: ClrResponsiveNavControlMessage =
        new ClrResponsiveNavControlMessage(
            ClrResponsiveNavCodes.NAV_TOGGLE,
            ClrResponsiveNavCodes.NAV_LEVEL_1
        );
    let controlNav2ToggleMessage: ClrResponsiveNavControlMessage =
        new ClrResponsiveNavControlMessage(
            ClrResponsiveNavCodes.NAV_TOGGLE,
            ClrResponsiveNavCodes.NAV_LEVEL_2
        );


    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ClrMainContainerModule, ClrNavigationModule],
            declarations: [TestComponent]
        });

        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        compiled = fixture.nativeElement;
    });

    afterEach(() => {
        fixture.destroy();
    });

    it("projects content", () => {
        expect(compiled.textContent).toMatch(/Test/);
    });

    it(
        "toggles the ClrResponsiveNavCodes.NAV_CLASS_HAMBURGER_MENU class to the host when NAV_LEVEL_1 is passed",
        () => {
            let instance: MainContainer = fixture.componentInstance.mainContainerInstance;

            instance.processMessage(controlNav1ToggleMessage);
            expect(compiled.querySelector("." + ClrResponsiveNavCodes.NAV_CLASS_HAMBURGER_MENU)).not.toBeNull();

            instance.processMessage(controlNav1ToggleMessage);
            expect(compiled.querySelector("." + ClrResponsiveNavCodes.NAV_CLASS_HAMBURGER_MENU)).toBeNull();
        }
    );

    it(
        "toggles the ClrResponsiveNavCodes.NAV_CLASS_OVERFLOW_MENU class to the host when NAV_LEVEL_2 is passed",
        () => {
            let instance: MainContainer = fixture.componentInstance.mainContainerInstance;

            instance.processMessage(controlNav2ToggleMessage);
            expect(compiled.querySelector("." + ClrResponsiveNavCodes.NAV_CLASS_OVERFLOW_MENU)).not.toBeNull();

            instance.processMessage(controlNav2ToggleMessage);
            expect(compiled.querySelector("." + ClrResponsiveNavCodes.NAV_CLASS_OVERFLOW_MENU)).toBeNull();
        }
    );

    it(
        "removes the open trigger classes when NAV_CLOSE_ALL is passed",
        () => {
            let instance: MainContainer = fixture.componentInstance.mainContainerInstance;

            instance.processMessage(controlOpenNav1Message);
            expect(compiled.querySelector("." + ClrResponsiveNavCodes.NAV_CLASS_HAMBURGER_MENU)).not.toBeNull();

            instance.processMessage(controlCloseAllMessage);
            expect(compiled.querySelector("." + ClrResponsiveNavCodes.NAV_CLASS_HAMBURGER_MENU)).toBeNull();

            instance.processMessage(controlOpenNav2Message);
            expect(compiled.querySelector("." + ClrResponsiveNavCodes.NAV_CLASS_OVERFLOW_MENU)).not.toBeNull();

            instance.processMessage(controlCloseAllMessage);
            expect(compiled.querySelector("." + ClrResponsiveNavCodes.NAV_CLASS_OVERFLOW_MENU)).toBeNull();
        }
    );

    it(
        "adds the NAV_CLASS_HAMBURGER_MENU class when NAV_OPEN_LEVEL_1 is passed",
        () => {
            let instance: MainContainer = fixture.componentInstance.mainContainerInstance;

            instance.processMessage(controlOpenNav1Message);
            expect(compiled.querySelector("." + ClrResponsiveNavCodes.NAV_CLASS_HAMBURGER_MENU)).not.toBeNull();

            //sending open code twice
            instance.processMessage(controlOpenNav1Message);
            expect(compiled.querySelector("." + ClrResponsiveNavCodes.NAV_CLASS_HAMBURGER_MENU)).not.toBeNull();
        }
    );

    it(
        "removes the NAV_CLASS_HAMBURGER_MENU class when NAV_CLOSE_LEVEL_1 is passed",
        () => {
            let instance: MainContainer = fixture.componentInstance.mainContainerInstance;
            instance.processMessage(controlOpenNav1Message);
            expect(compiled.querySelector("." + ClrResponsiveNavCodes.NAV_CLASS_HAMBURGER_MENU)).not.toBeNull();

            instance.processMessage(controlCloseNav1Message);
            expect(compiled.querySelector("." + ClrResponsiveNavCodes.NAV_CLASS_HAMBURGER_MENU)).toBeNull();

            //sending close code twice
            instance.processMessage(controlCloseNav1Message);
            expect(compiled.querySelector("." + ClrResponsiveNavCodes.NAV_CLASS_HAMBURGER_MENU)).toBeNull();
        }
    );

    it(
        "adds the NAV_CLASS_OVERFLOW_MENU class when NAV_OPEN_LEVEL_2 is passed",
        () => {
            let instance: MainContainer = fixture.componentInstance.mainContainerInstance;
            instance.processMessage(controlOpenNav2Message);
            expect(compiled.querySelector("." + ClrResponsiveNavCodes.NAV_CLASS_OVERFLOW_MENU)).not.toBeNull();

            //sending open code twice
            instance.processMessage(controlOpenNav2Message);
            expect(compiled.querySelector("." + ClrResponsiveNavCodes.NAV_CLASS_OVERFLOW_MENU)).not.toBeNull();
        }
    );

    it(
        "removes the NAV_CLASS_OVERFLOW_MENU class when NAV_CLOSE_LEVEL_2 is passed",
        () => {
            let instance: MainContainer = fixture.componentInstance.mainContainerInstance;
            instance.processMessage(controlOpenNav2Message);
            expect(compiled.querySelector("." + ClrResponsiveNavCodes.NAV_CLASS_OVERFLOW_MENU)).not.toBeNull();

            instance.processMessage(controlCloseNav2Message);
            expect(compiled.querySelector("." + ClrResponsiveNavCodes.NAV_CLASS_OVERFLOW_MENU)).toBeNull();

            //sending close code twice
            instance.processMessage(controlCloseNav2Message);
            expect(compiled.querySelector("." + ClrResponsiveNavCodes.NAV_CLASS_OVERFLOW_MENU)).toBeNull();
        }
    );
});
