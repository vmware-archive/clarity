/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ComponentFixture, TestBed, fakeAsync, tick} from "@angular/core/testing";
import {Component} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {ClarityModule} from "../clarity.module";
import {MaskDefinition} from "./interfaces/mask-definition";
import {Mask} from "./interfaces/mask";
import {DataMask} from "./mask/data-mask";

@Component({
    template: `
        <form>
            <section class="form-block">
                <div class="form-group">
                    <input type="text" id="formFields_mask1" (error)="onError($event)" 
                            clr-mask="9?9?9.9?9?9.9?9?9.9?9?9" size="45"/>
                    <label for="formFields_mask2" aria-haspopup="true" role="tooltip" 
                           class="tooltip tooltip-validation invalid tooltip-sm">
                        <input type="text" id="formFields_mask2" (error)="onError($event)" 
                            clr-mask="(999)-999 9999"/>
                        <span class="tooltip-content">
                            {{errorMessage}}
                        </span>
                    </label>
                </div>
            </section>
        </form>
   `
})
class TestComponent {
    errorFlag: boolean = false;
    errorMessage: string;

    onError($event: any): void {
        this.errorFlag = true;
        this.errorMessage = $event;
    }
}


class CustomMaskDefinition implements MaskDefinition {
    matchPattern: any = {
        "#" : /^[0-9]?$/, // to indicate only numbers
        "9" : /^[0-9]?$/, // to indicate only numbers
        "Z" : /^[a-zA-Z]?$/, // to indicate any character a-z and A-Z
        "*" : /^[a-zA-z0-9]?$/, // to indicate any character a-z, A-Z and 0-9
        "OPTIONAL_CHAR" : "%"
    };
};

@Component({
    template: `
        <form>
            <section class="form-block">
                <div class="form-group">
                    <input type="text" id="formFields_mask1" (error)="onError($event)" 
                            clr-mask="9%9%9.9%9%9.9%9%9.9%9%9" [definition]="customMask" 
                            size="45"/>
                </div>
            </section>
        </form>
   `
})
class CustomMaskDefinitionComponent {
    errorFlag: boolean = false;
    errorMessage: string;
    customMask: Mask = new DataMask(new CustomMaskDefinition());

    onError($event: any): void {
        this.errorFlag = true;
        this.errorMessage = $event;
    }
}

@Component({
    template: `
        <form>
            <section class="form-block">
                <div class="form-group">
                    <input type="text" id="formFields_mask1" clr-mask="9?9?9.9?9?9.9?9?9.9?9?9"
                    [(ngModel)]="inputValue" name="inputValueName"/>
                </div>
            </section>
        </form>
   `
})
class TestComponentWithNgModelBinding {
    inputValue: string = "123456789123";
}

export default function(): void {
    describe("InputField Mask component", function() {
        describe("InputField - Mask", () => {
            let fixture: ComponentFixture<any>;
            let compiled: any;

            beforeEach(() => {
                TestBed.configureTestingModule({
                    imports: [ClarityModule.forRoot()],
                    declarations: [TestComponent]
                });

                fixture = TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                compiled = fixture.nativeElement;
            });

            afterEach(() => {
                fixture.destroy();
            });

            it("test for ip number masked value on the input field with optional values", () => {
                let inputField: HTMLInputElement = (<HTMLInputElement>compiled.
                                                   querySelector("div > #formFields_mask1"));
                inputField.value = "9999";
                inputField.dispatchEvent(new Event("input"));
                fixture.detectChanges();
                expect(inputField.value).toEqual("999.9");

                inputField.value = "1234567";
                inputField.dispatchEvent(new Event("input"));
                fixture.detectChanges();
                expect(inputField.value).toEqual("123.456.7");

                inputField.value = "123456789123";
                inputField.dispatchEvent(new Event("input"));
                fixture.detectChanges();
                expect(inputField.value).toEqual("123.456.789.123");

                inputField.value = "1.2.3.4";
                inputField.dispatchEvent(new Event("input"));
                fixture.detectChanges();
                expect(inputField.value).toEqual("1.2.3.4");

                inputField.value = "10.20.255.255";
                inputField.dispatchEvent(new Event("input"));
                fixture.detectChanges();
                expect(inputField.value).toEqual("10.20.255.255");
            });

            it("test for phone masked value on the input field", () => {
                let inputField: HTMLInputElement = (<HTMLInputElement>compiled.
                                                   querySelector("div > label > #formFields_mask2"));
                inputField.value = "123";
                inputField.dispatchEvent(new Event("input"));
                fixture.detectChanges();
                expect(inputField.value).toEqual("(123");

                inputField.value = "1234567";
                inputField.dispatchEvent(new Event("input"));
                fixture.detectChanges();
                expect(inputField.value).toEqual("(123)-456 7");

                inputField.value = "123456789123";
                inputField.dispatchEvent(new Event("input"));
                fixture.detectChanges();
                expect(inputField.value).toEqual("(123)-456 7891");
            });

            it("test for invalid ip masked value on the input field", () => {
                let inputField: HTMLInputElement = (<HTMLInputElement>compiled.
                                                   querySelector("div > #formFields_mask1"));
                inputField.value = "aaa";
                inputField.dispatchEvent(new Event("input"));
                fixture.detectChanges();
                expect(inputField.value).toEqual("");
                expect(fixture.componentInstance.errorFlag).toEqual(true);
                expect(fixture.componentInstance.errorMessage).not.toBeNull();
                expect(fixture.componentInstance.errorMessage).
                                toEqual("Input character 'a' does not match the mask pattern");
            });

            it("test for invalid phone masked value on the input field with validation enabled", () => {
                let inputField: HTMLInputElement = (<HTMLInputElement>compiled.
                                        querySelector("div > label > #formFields_mask2"));
                let error: string = "Input character 'a' does not match the mask pattern";
                inputField.value = "aa";
                inputField.dispatchEvent(new Event("input"));
                fixture.detectChanges();
                expect(fixture.componentInstance.errorFlag).toEqual(true);
                expect(fixture.componentInstance.errorMessage).toEqual(error);
                fixture.detectChanges();
                expect(compiled.querySelector("div > label > span").textContent.trim()).
                       toEqual(error);
            });
        });


        describe("InputField - Custom Mask", () => {
            let fixture: ComponentFixture<any>;
            let compiled: any;

            beforeEach(() => {
                TestBed.configureTestingModule({
                    imports: [ClarityModule.forRoot()],
                    declarations: [CustomMaskDefinitionComponent]
                });

                fixture = TestBed.createComponent(CustomMaskDefinitionComponent);
                fixture.detectChanges();
                compiled = fixture.nativeElement;
            });

            afterEach(() => {
                fixture.destroy();
            });

            it("test for custom Mask definition", () => {
                let inputField: HTMLInputElement = (<HTMLInputElement>compiled.
                                        querySelector("div > #formFields_mask1"));
                inputField.value = "9999";
                inputField.dispatchEvent(new Event("input"));
                fixture.detectChanges();
                expect(inputField.value).toEqual("999.9");
            });

            it("test for custom Mask definition with valid mask", () => {
                let inputField: HTMLInputElement = (<HTMLInputElement>compiled.
                                        querySelector("div > #formFields_mask1"));
                inputField.value = "9.9.9.9";
                inputField.dispatchEvent(new Event("input"));
                fixture.detectChanges();
                expect(inputField.value).toEqual("9.9.9.9");
            });
        });

        describe("InputField - Mask with ngModel binding", () => {
            let fixture: ComponentFixture<any>;
            let compiled: any;

            beforeEach(() => {
                TestBed.configureTestingModule({
                    imports: [ClarityModule.forRoot(), FormsModule],
                    declarations: [TestComponentWithNgModelBinding]
                });

                fixture = TestBed.createComponent(TestComponentWithNgModelBinding);
                compiled = fixture.nativeElement;
            });

            afterEach(() => {
                fixture.destroy();
            });

            it("test for ngModel binding", fakeAsync(() => {
                fixture.detectChanges();
                tick(50);
                fixture.whenStable().then(() => {
                    let inputField: HTMLInputElement = (<HTMLInputElement>compiled.
                                        querySelector("div > input"));
                    expect(inputField.value).toEqual("123.456.789.123");
                });
            }));
        });
    });
}