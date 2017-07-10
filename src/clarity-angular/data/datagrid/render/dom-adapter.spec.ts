/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {DomAdapter} from "./dom-adapter";

/**
 * Having a little fun with Typescript just to see how it goes.
 */
interface UserContext {
    domAdapter: DomAdapter;
    element: HTMLElement;
}

export default function(): void {
    describe("DomAdapter", function() {
        beforeEach(function(this: UserContext) {
            this.domAdapter = new DomAdapter();
            this.element = document.createElement("div");
            this.element.appendChild(document.createTextNode("Hello"));
            document.body.appendChild(this.element);
        });

        afterEach(function(this: UserContext) {
            document.body.removeChild(this.element);
        });

        it("computes the scrollwidth of an element", function(this: UserContext) {
            let child = document.createElement("div");
            child.style.width = "123456px";
            child.style.height = "10px";
            this.element.appendChild(child);
            expect(this.domAdapter.scrollWidth(this.element)).toBe(123456);
        });

        it("computes the width of the scrollbar on an element", function(this: UserContext) {
            expect(this.domAdapter.scrollBarWidth(this.element)).toBe(0);
            this.element.style.overflow = "scroll";
            // This will actually fail on "good" OSX browsers, even though the behavior is correct.
            // So it runs only on PhantomJs at the moment.
            if (/PhantomJS/.test(window.navigator.userAgent)) {
                expect(this.domAdapter.scrollBarWidth(this.element)).toBeGreaterThan(0);
            }
        });

        it("computes the height of an element", function(this: UserContext) {
            let child = document.createElement("div");
            child.style.width = "10px";
            child.style.height = "1234px";
            this.element.replaceChild(child, this.element.firstChild);
            expect(this.domAdapter.computedHeight(this.element)).toBe(1234);
        });

        describe("user-defined width", function() {
            it("recognizes a width defined on the element", function(this: UserContext) {
                expect(this.domAdapter.userDefinedWidth(this.element)).toBe(0);
                this.element.style.width = "42px";
                expect(this.domAdapter.userDefinedWidth(this.element)).toBe(42);
            });

            it("recognizes a width defined in a CSS stylesheet", function(this: UserContext) {
                expect(this.domAdapter.userDefinedWidth(this.element)).toBe(0);
                let style = document.createElement("style");
                style.appendChild(document.createTextNode(".my-test { width: 42px; }"));
                document.body.appendChild(style);
                this.element.classList.add("my-test");
                expect(this.domAdapter.userDefinedWidth(this.element)).toBe(42);
                document.body.removeChild(style);
            });

            it("ignores padding and border", function(this: UserContext) {
                this.element.style.padding = "10px";
                this.element.style.border = "5px solid black";
                expect(this.domAdapter.userDefinedWidth(this.element)).toBe(0);
            });
        });

    });
};
