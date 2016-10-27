//Isolated tests for services: https://angular.io/docs/ts/latest/guide/testing.html#!#isolated-service-tests
import { ClrResponsiveNavigationService } from "./clrResponsiveNavigationService";
import { ClrResponsiveNavCodes } from "./clrResponsiveNavCodes";

describe("ResponsiveNavigationService", () => {
    let service: ClrResponsiveNavigationService;

    beforeEach(() => {
        service = new ClrResponsiveNavigationService();
    });

    it("#initializes an empty nav level list", () => {
        expect(service.responsiveNavList.length).toBe(0);
    });

    it("#registers Nav Level 1", () => {
        service.registerNav(ClrResponsiveNavCodes.NAV_LEVEL_1);
        expect(service.responsiveNavList.length).toBe(1);
        expect(service.responsiveNavList[0]).toBe(ClrResponsiveNavCodes.NAV_LEVEL_1);
    });

    it("#registers Nav Level 2", () => {
        service.registerNav(ClrResponsiveNavCodes.NAV_LEVEL_2);
        expect(service.responsiveNavList.length).toBe(1);
        expect(service.responsiveNavList[0]).toBe(ClrResponsiveNavCodes.NAV_LEVEL_2);
    });

    it("#registers maximun 2 nav levels", () => {
        service.registerNav(ClrResponsiveNavCodes.NAV_LEVEL_1);
        service.registerNav(ClrResponsiveNavCodes.NAV_LEVEL_2);
        service.registerNav(ClrResponsiveNavCodes.NAV_LEVEL_1);
        expect(service.responsiveNavList.length).toBe(2);
    });

    it("#unregisters nav levels", () => {
        expect(service.responsiveNavList.length).toBe(0);
        service.registerNav(ClrResponsiveNavCodes.NAV_LEVEL_1);
        expect(service.responsiveNavList.length).toBe(1);
        service.unregisterNav(ClrResponsiveNavCodes.NAV_LEVEL_1);
        expect(service.responsiveNavList.length).toBe(0);
    });
});
