import { ClrResponsiveNavigationService } from "./clrResponsiveNavigationService";
import { NavLevelDirective } from "./navLevelDirective";
import { ClrResponsiveNavCodes } from "./clrResponsiveNavCodes";

describe("NavLevel1Directive", () => {
    let service: ClrResponsiveNavigationService;
    let navLevel: NavLevelDirective;

    beforeEach(() => {
        service = new ClrResponsiveNavigationService();
        navLevel = new NavLevelDirective(service, null); //null because we are just testing the directive functions
        navLevel._level = 1;
    });

    it("#level is set to 1", () => {
        expect(navLevel.level).toBe(ClrResponsiveNavCodes.NAV_LEVEL_1);
    });

    it("#level is set to 2", () => {
        navLevel._level = 2;
        expect(navLevel.level).toBe(ClrResponsiveNavCodes.NAV_LEVEL_2);
    });

    it("#registers nav on init. sends the registration code on registerNavSubject in the service", () => {
        service.registerNav(ClrResponsiveNavCodes.NAV_LEVEL_1);
        expect(service.registerNavSubject.getValue()[0]).toBe(ClrResponsiveNavCodes.NAV_LEVEL_1);
    });

    it("#sends the open code on controlNavSubject in the service when open() is called", () => {
        navLevel.open();
        expect(service.controlNavSubject.getValue().controlCode).toBe(
            ClrResponsiveNavCodes.NAV_OPEN
        );
    });

    it("#sends the close code on controlNavSubject when close() is called", () => {
        navLevel.close();
        expect(service.controlNavSubject.getValue().controlCode).toBe(
            ClrResponsiveNavCodes.NAV_CLOSE
        );
    });

    it("#unregisters itself from the registerNavSubject when ngOnDestroy() is called", () => {
        navLevel.ngOnDestroy();
        expect(service.registerNavSubject.getValue().length).toBe(0);
    });
});
