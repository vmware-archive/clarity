import {ComponentFixture, TestBed} from "@angular/core/testing";
import {Component} from "@angular/core";
import {ClarityModule} from "../clarity.module";

@Component({
    template: `
        <pre>
            <code clr-code-highlight="language-html">
                &lt;span aria-hidden=&quot;true&quot;&gt;&amp;times;&lt;/span&gt;
            </code>
        </pre>
   `
})
class TestComponent {
}

describe("CodeHighlight", () => {
    let fixture: ComponentFixture<any>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ClarityModule],
            declarations: [TestComponent]
        });
        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
    });

    afterEach(() => {
        fixture.destroy();
    });

    it("extends a language-* class on the code tag", () => {
        expect(fixture.nativeElement.querySelector("code.language-html")).not.toBeNull();
    });
});
