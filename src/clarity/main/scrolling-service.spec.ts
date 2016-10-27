import {inject} from "@angular/core/testing";
import {ScrollingService} from "./scrolling-service";
import {DOCUMENT} from "@angular/platform-browser";

describe("ScrollingService", () => {
    let scrollingService: ScrollingService;
    let document: any;

    beforeEach(inject([DOCUMENT], (doc: any) => {
        document = doc;
        scrollingService = new ScrollingService(document);
    }));

    it("Toggles no-scrolling class on body", () => {
        expect(document.body.classList.contains("no-scrolling")).toBe(false);
        scrollingService.stopScrolling();
        expect(document.body.classList.contains("no-scrolling")).toBe(true);
        scrollingService.resumeScrolling();
        expect(document.body.classList.contains("no-scrolling")).toBe(false);
    });

});
