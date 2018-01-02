/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {AlertIconAndTypesService} from "./icon-and-types.service";

export default function(): void {
    describe("Alert Icon and Types Service", function() {
        let testMe: AlertIconAndTypesService;

        function testShape(alertType: string): string {
            return testMe.iconInfoFromType(alertType).shape;
        }

        function testCssClass(alertType: string): string {
            return testMe.iconInfoFromType(alertType).cssClass;
        }

        beforeEach(() => {
            testMe = new AlertIconAndTypesService();
        });

        afterEach(() => {
            testMe = null;
        });

        describe("alertType()", function() {
            it("alertType is 'info' by default", function() {
                expect(testMe.alertType).toBe("info");
            });

            it("can change alertType to another valid type", function() {
                expect(testMe.alertType).toBe("info");
                testMe.alertType = "danger";
                expect(testMe.alertType).toBe("danger");
            });

            it("will not change alertType to an invalid type", function() {
                expect(testMe.alertType).toBe("info");
                testMe.alertType = "ohai";
                expect(testMe.alertType).toBe("info");
                expect(testMe.alertType).not.toBe("ohai");
            });
        });

        describe("alertIconShape()", function() {
            it("returns shape based on alertType if not set", function() {
                expect(testMe.alertType).toBe("info");
                expect(testMe.alertIconShape).toBe("info-circle");
            });

            it("can change alertIconShape", function() {
                expect(testMe.alertIconShape).toBe("info-circle");
                testMe.alertIconShape = "house";
                expect(testMe.alertIconShape).toBe("house");
            });

            it("will set to empty string and return based on alertType if set to junk", function() {
                expect(testMe.alertIconShape).toBe("info-circle");
                testMe.alertIconShape = null;
                expect(testMe.alertIconShape).toBe("info-circle");
            });
        });

        describe("iconInfoFromType()", function() {
            it("returns default shape as fallthrough", function() {
                expect(testShape(null)).toBe("info-circle");
                expect(testShape("ohai")).toBe("info-circle");
            });

            it("returns .alert-info class as fallthrough", function() {
                expect(testCssClass(null)).toBe("alert-info");
                expect(testCssClass("ohai")).toBe("alert-info");
            });

            it("returns warning icon", function() {
                expect(testShape("warning")).toBe("exclamation-triangle");
            });

            it("returns .alert-warning", function() {
                expect(testCssClass("warning")).toBe("alert-warning");
            });

            it("returns danger icon", function() {
                expect(testShape("danger")).toBe("exclamation-circle");
            });

            it("returns .alert-danger", function() {
                expect(testCssClass("danger")).toBe("alert-danger");
            });

            it("returns success icon", function() {
                expect(testShape("success")).toBe("check-circle");
            });

            it("returns .alert-success", function() {
                expect(testCssClass("success")).toBe("alert-success");
            });

            it("returns info icon", function() {
                expect(testShape("info")).toBe("info-circle");
            });

            it("returns .alert-info", function() {
                expect(testCssClass("info")).toBe("alert-info");
            });
        });

        describe("iconInfoFromType() -- deprecated types", function() {
            it("returns warning icon", function() {
                expect(testShape("alert-warning")).toBe("exclamation-triangle");
            });

            it("returns danger icon", function() {
                expect(testShape("alert-danger")).toBe("exclamation-circle");
            });

            it("returns success icon", function() {
                expect(testShape("alert-success")).toBe("check-circle");
            });

            it("returns info icon", function() {
                expect(testShape("alert-info")).toBe("info-circle");
            });

            it("returns .alert-warning", function() {
                expect(testCssClass("alert-warning")).toBe("alert-warning");
            });

            it("returns .alert-danger", function() {
                expect(testCssClass("alert-danger")).toBe("alert-danger");
            });

            it("returns .alert-success", function() {
                expect(testCssClass("alert-success")).toBe("alert-success");
            });

            it("returns .alert-info", function() {
                expect(testCssClass("alert-info")).toBe("alert-info");
            });
        });
    });
}
