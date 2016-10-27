import {ComponentFixture, TestBed} from "@angular/core/testing";
import {Component} from "@angular/core";

@Component({
    template: `
        <h1>Header1</h1>
        <h2>Header2</h2>
        <h3>Header3</h3>
        <h4>Header4</h4>
        <h5>Header2</h5>
        <h6>Header2</h6>
        <p>Paragraph</p>
        <div class="p1">P0 Styles</div>
        <div class="p1">P1 Styles</div>
        <div class="p2">P2 Styles</div>
        <div class="p3">P3 Styles</div>
        <div class="p4">P4 Styles</div>
   `
})
class TestComponent {
}

describe("Typography", () => {
    let fixture: ComponentFixture<any>;
    let compiled: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent]
        });

        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        compiled = fixture.nativeElement;
    });

    afterEach(() => {
        fixture.destroy();
    });

    //Starting with just font sizes. Typography is going to change. Will add more tests
    //when I update Typography
    it("checks if h1 has the correct styles", () => {
        let h1: HTMLElement = compiled.querySelector("h1");
        expect(window.getComputedStyle(h1, null).getPropertyValue("font-size")).toEqual("32px");
    });

    it("checks if h2 has the correct styles", () => {
        let h2: HTMLElement = compiled.querySelector("h2");
        expect(window.getComputedStyle(h2, null).getPropertyValue("font-size")).toEqual("28px");
    });

    it("checks if h3 has the correct styles", () => {
        let h3: HTMLElement = compiled.querySelector("h3");
        expect(window.getComputedStyle(h3, null).getPropertyValue("font-size")).toEqual("22px");
    });

    it("checks if h4 has the correct styles", () => {
        let h4: HTMLElement = compiled.querySelector("h4");
        expect(window.getComputedStyle(h4, null).getPropertyValue("font-size")).toEqual("18px");
    });

    it("checks if h5 has the correct styles", () => {
        let h5: HTMLElement = compiled.querySelector("h5");
        expect(window.getComputedStyle(h5, null).getPropertyValue("font-size")).toEqual("16px");
    });

    it("checks if h6 has the correct styles", () => {
        let h6: HTMLElement = compiled.querySelector("h6");
        expect(window.getComputedStyle(h6, null).getPropertyValue("font-size")).toEqual("14px");
    });
});