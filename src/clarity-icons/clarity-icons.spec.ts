/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {removeWhitespace, resetShapes, testAllShapes} from "./helpers.spec";
import {ClarityIcons} from "./index";
import {AllShapes} from "./shapes/all-shapes";
import {CommerceShapes} from "./shapes/commerce-shapes";
import {CoreShapes} from "./shapes/core-shapes";
import {EssentialShapes} from "./shapes/essential-shapes";
import {MediaShapes} from "./shapes/media-shapes";
import {SocialShapes} from "./shapes/social-shapes";
import {TechnologyShapes} from "./shapes/technology-shapes";
import {TravelShapes} from "./shapes/travel-shapes";

describe("ClarityIcons", () => {

    afterEach(() => {
        resetShapes();
    });

    describe("Global object for the API", () => {
        it("should set a global object", () => {
            expect(window.ClarityIcons).not.toBeUndefined();
        });
    });

    describe("ClarityIconsApi.get()", () => {

        it("should return all icons when no argument is passed in", () => {

            ClarityIcons.add(CommerceShapes);
            ClarityIcons.add(EssentialShapes);
            ClarityIcons.add(SocialShapes);
            ClarityIcons.add(MediaShapes);
            ClarityIcons.add(TravelShapes);
            ClarityIcons.add(TechnologyShapes);

            const currentAllShapes = Object.assign({}, CoreShapes, CommerceShapes, EssentialShapes, SocialShapes,
                                                   MediaShapes, TravelShapes, TechnologyShapes);
            testAllShapes(ClarityIcons, currentAllShapes);
        });

        it("should return the shapes from CommerceShapes and CoreShapes sets " +
               "if the EssentialShapes set is added in.",
           () => {
               ClarityIcons.add(CommerceShapes);
               const currentAllShapes = Object.assign({}, CoreShapes, CommerceShapes);
               testAllShapes(ClarityIcons, currentAllShapes);
           });

        it("should return the shapes from EssentialShapes and CoreShapes sets " +
               "if the EssentialShapes set is added in.",
           () => {
               ClarityIcons.add(EssentialShapes);
               const currentAllShapes = Object.assign({}, CoreShapes, EssentialShapes);
               testAllShapes(ClarityIcons, currentAllShapes);
           });

        it("should return the shapes from MediaShapes and CoreShapes sets " +
               "if the EssentialShapes set is added in.",
           () => {
               ClarityIcons.add(MediaShapes);
               const currentAllShapes = Object.assign({}, CoreShapes, MediaShapes);
               testAllShapes(ClarityIcons, currentAllShapes);
           });

        it("should return the shapes from SocialShapes and CoreShapes sets " +
               "if the SocialShapes set is added in.",
           () => {
               ClarityIcons.add(SocialShapes);
               const currentAllShapes = Object.assign({}, CoreShapes, SocialShapes);
               testAllShapes(ClarityIcons, currentAllShapes);
           });

        it("should return the shapes from TravelShapes and CoreShapes sets " +
               "if the EssentialShapes set is added in.",
           () => {
               ClarityIcons.add(TravelShapes);
               const currentAllShapes = Object.assign({}, CoreShapes, TravelShapes);
               testAllShapes(ClarityIcons, currentAllShapes);
           });

        it("should return the shapes from TechnologyShapes and CoreShapes sets " +
               "if the TechnologyShapes set is added in.",
           () => {
               ClarityIcons.add(TechnologyShapes);
               const currentAllShapes = Object.assign({}, CoreShapes, TechnologyShapes);
               testAllShapes(ClarityIcons, currentAllShapes);
           });

        it("should return all icons from all sets if the AllShapes set is added in", () => {
            ClarityIcons.add(AllShapes);
            const currentAllShapes = Object.assign({}, CoreShapes, CommerceShapes, EssentialShapes, MediaShapes,
                                                   SocialShapes, TravelShapes, TechnologyShapes);
            testAllShapes(ClarityIcons, currentAllShapes);
        });

        it("should return EssentialShapes['pencil'] when 'pencil' is passed in after including EssentialShapes", () => {

            ClarityIcons.add(EssentialShapes);

            const expected = `
                <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img">
                    <title>pencil</title>
    
                    <path class="clr-i-outline clr-i-outline-path-1" d="M33.87,8.32,28,2.42a2.07,2.07,0,0,0-2.92,0L4.27,23.2l-1.9,8.2a2.06,2.06,0,0,0,2,2.5,2.14,2.14,0,0,0,.43,0L13.09,32,33.87,11.24A2.07,2.07,0,0,0,33.87,8.32ZM12.09,30.2,4.32,31.83l1.77-7.62L21.66,8.7l6,6ZM29,13.25l-6-6,3.48-3.46,5.9,6Z"/>
    
                    <path class="clr-i-solid clr-i-solid-path-1" d="M4.22,23.2l-1.9,8.2a2.06,2.06,0,0,0,2,2.5,2.14,2.14,0,0,0,.43,0L13,32,28.84,16.22,20,7.4Z"/>
                    <path class="clr-i-solid clr-i-solid-path-2" d="M33.82,8.32l-5.9-5.9a2.07,2.07,0,0,0-2.92,0L21.72,5.7l8.83,8.83,3.28-3.28A2.07,2.07,0,0,0,33.82,8.32Z"/>
                </svg>
            `;
            expect(removeWhitespace(expected)).toEqual(removeWhitespace(ClarityIcons.get("pencil")));
        });

        it("should throw an error if the requested shape doesn't exist", () => {
            const nonExistingShape = "non-existing-icon";
            const expectedErrorMessage = `'${nonExistingShape}' is not found in the Clarity Icons set.`;

            expect(() => {
                ClarityIcons.get(nonExistingShape);
            }).toThrowError(expectedErrorMessage);
        });
    });

    describe("ClarityIconsApi.add()", () => {
        it("should throw an error if the argument is not a valid object literal", () => {
            const expectedErrorMessage = `The argument must be an object literal passed in the following pattern: 
                { "shape-name": "shape-template" }`;

            expect(() => {
                ClarityIcons.add();
            }).toThrowError(expectedErrorMessage);
        });

        it("should throw an error if an empty string is set for a shape name.", () => {
            const expectedErrorMessage = `Shape name or alias must be a non-empty string!`;
            expect(() => {
                ClarityIcons.add({"": ""});
            }).toThrowError(expectedErrorMessage);
        });

        it("should throw an error if a shape name contains a white space.", () => {
            const expectedErrorMessage = `Shape name or alias must not contain any whitespace characters!`;
            expect(() => {
                ClarityIcons.add({"invalid shapename": ""});
            }).toThrowError(expectedErrorMessage);
            expect(() => {
                ClarityIcons.add({" invalidShapename": ""});
            }).toThrowError(expectedErrorMessage);
            expect(() => {
                ClarityIcons.add({"invalidShapename ": ""});
            }).toThrowError(expectedErrorMessage);
        });

        it("should allow non-SVG to be assigned to ClarityIcons", () => {
            const anImgTag = "<img src=\"../assets/logo.png\">";
            const aDivTag = "<div class=\"div-with-bgimg\"></div>";
            const aFaIcon = "<span class=\"fa-icon fa-target\"></span>";

            expect(() => {
                ClarityIcons.add({"an-img": anImgTag});
            }).not.toThrowError();

            expect(() => {
                ClarityIcons.add({"a-bgimg": aDivTag});
            }).not.toThrowError();

            expect(() => {
                ClarityIcons.add({"fa-icon": aFaIcon});
            }).not.toThrowError();

            expect(ClarityIcons.get("an-img")).toEqual(anImgTag);
            expect(ClarityIcons.get("a-bgimg")).toEqual(aDivTag);
            expect(ClarityIcons.get("fa-icon")).toEqual(aFaIcon);
        });

        it("should throw an error if an empty string is set for a shape name.", () => {
            const expectedErrorMessage = `Shape name or alias must be a non-empty string!`;
            expect(() => {
                ClarityIcons.add({"": ""});
            }).toThrowError(expectedErrorMessage);
        });

        it("should add a new shape if a new shape name and template is passed in", () => {
            const currentShapeNumber = Object.keys(ClarityIcons.get()).length;

            const shapeName = "shape-name";
            const shapeTemplate = "<svg><title>shape template</title></svg>";
            const shape = {[shapeName]: shapeTemplate};

            ClarityIcons.add(shape);

            expect(currentShapeNumber).toBe(Object.keys(ClarityIcons.get()).length - 1);
            expect(ClarityIcons.get(shapeName)).toBe(shapeTemplate);
        });

        it("should add new shapes if multiple shape names and templates are passed in one by one", () => {
            const currentShapeNumber = Object.keys(ClarityIcons.get()).length;

            const shapeName1 = "shape-name-1";
            const shapeTemplate1 = "<svg><title>shape template 1</title></svg>";
            const shape1 = {[shapeName1]: shapeTemplate1};

            const shapeName2 = "shape-name-2";
            const shapeTemplate2 = "<svg><title>shape template 2</title></svg>";
            const shape2 = {[shapeName2]: shapeTemplate2};

            const shapeName3 = "shape-name-3";
            const shapeTemplate3 = "<svg><title>shape template 3</title></svg>";
            const shape3 = {[shapeName3]: shapeTemplate3};

            ClarityIcons.add(shape1);
            ClarityIcons.add(shape2);
            ClarityIcons.add(shape3);

            expect(currentShapeNumber).toBe(Object.keys(ClarityIcons.get()).length - 3);
            expect(ClarityIcons.get(shapeName1)).toBe(shapeTemplate1);
            expect(ClarityIcons.get(shapeName2)).toBe(shapeTemplate2);
            expect(ClarityIcons.get(shapeName3)).toBe(shapeTemplate3);
        });

        it("should add new shapes if multiple shape names and templates are passed in one object", () => {
            const currentShapeNumber = Object.keys(ClarityIcons.get()).length;

            const shapeNameA = "shape-name-a";
            const shapeTemplateA = "<svg><title>shape template A</title></svg>";
            const shapeA = {[shapeNameA]: shapeTemplateA};

            const shapeNameB = "shape-name-b";
            const shapeTemplateB = "<svg><title>shape template B</title></svg>";
            const shapeB = {[shapeNameB]: shapeTemplateB};

            const shapeNameC = "shape-name-c";
            const shapeTemplateC = "<svg><title>shape template C</title></svg>";
            const shapeC = {[shapeNameC]: shapeTemplateC};

            const multipleShapes = Object.assign({}, shapeA, shapeB, shapeC);

            ClarityIcons.add(multipleShapes);

            expect(currentShapeNumber).toBe(Object.keys(ClarityIcons.get()).length - 3);
            expect(ClarityIcons.get(shapeNameA)).toBe(shapeTemplateA);
            expect(ClarityIcons.get(shapeNameB)).toBe(shapeTemplateB);
            expect(ClarityIcons.get(shapeNameC)).toBe(shapeTemplateC);
        });

        it("should allow override", () => {
            const currentShapeNumber = Object.keys(ClarityIcons.get()).length;

            const shapeNameA = "shape-name-same";
            const shapeTemplateA = "<svg><title>shape template A</title></svg>";
            const shapeA = {[shapeNameA]: shapeTemplateA};

            const shapeNameB = "shape-name-same";
            const shapeTemplateB = "<svg><title>shape template B</title></svg>";
            const shapeB = {[shapeNameB]: shapeTemplateB};

            ClarityIcons.add(shapeA);
            ClarityIcons.add(shapeB);

            // Even though ClarityIcons.add() is called twice, only one more property should be added in
            // as the former one is replaced by the latter one.

            expect(currentShapeNumber).toBe(Object.keys(ClarityIcons.get()).length - 1);
            expect(ClarityIcons.get(shapeNameA)).toBe(shapeTemplateB);
        });
    });

    describe("ClarityIconsApi.alias()", () => {

        it("should throw an error if the argument is not a valid object literal", () => {
            const expectedErrorMessage = `The argument must be an object literal passed in the following pattern: 
                { "shape-name": ["alias-name", ...] }`;

            expect(() => {
                ClarityIcons.alias();
            }).toThrowError(expectedErrorMessage);
        });

        it("should throw an error if the shape name doesn't exist", () => {
            const shapeName = "pen";
            const expectedErrorMessage =
                "The icon '" + shapeName + "' you are trying to set an alias to doesn't exist!";

            expect(() => {
                ClarityIcons.alias({[shapeName]: ["write"]});
            }).toThrowError(expectedErrorMessage);
        });

        it("should allow aliases if the shape name exists", () => {

            ClarityIcons.add(CoreShapes);
            const currentShapeNumber = Object.keys(ClarityIcons.get()).length;

            ClarityIcons.alias({"check": ["check-mark", "success-mark"]});

            expect(currentShapeNumber).toBe(Object.keys(ClarityIcons.get()).length - 2);
            expect(ClarityIcons.get("check-mark")).toBe(ClarityIcons.get("check"));
            expect(ClarityIcons.get("success-mark")).toBe(ClarityIcons.get("check"));
        });

        it("should allow to create an alias from another alias name", () => {

            ClarityIcons.add(CoreShapes);
            ClarityIcons.alias({"check": ["success-mark"]});

            const currentShapeNumber = Object.keys(ClarityIcons.get()).length;

            ClarityIcons.alias({"success-mark": ["ok-mark"]});

            expect(currentShapeNumber).toBe(Object.keys(ClarityIcons.get()).length - 1);
            expect(ClarityIcons.get("success-mark")).toBe(ClarityIcons.get("check"));
            expect(ClarityIcons.get("ok-mark")).toBe(ClarityIcons.get("check"));
        });

        it("should allow to create a new shape by overriding existing alias name", () => {

            ClarityIcons.add(CoreShapes);
            ClarityIcons.alias({"check": ["success-mark"]});

            const currentShapeNumber = Object.keys(ClarityIcons.get()).length;
            const shapeTemplateOverrideAlias = "<svg><title>shape template override alias</title></svg>";
            ClarityIcons.add({"success-mark": shapeTemplateOverrideAlias});

            // Even though ClarityIcons.add() is called once, no new shapes should be added in
            // as the existing icons's template is replaced by a new template only.

            expect(currentShapeNumber).toBe(Object.keys(ClarityIcons.get()).length);
            expect(ClarityIcons.get("success-mark")).toBe(shapeTemplateOverrideAlias);
        });
    });

    describe("ClarityIcon Custom Element", () => {
        beforeEach(() => {
            spyOn(console, "error");
        });

        it("should insert the SVG markup", () => {
            const clarityIcon = document.createElement("clr-icon");
            clarityIcon.setAttribute("shape", "home");

            const divSampleElement = document.createElement("div");
            divSampleElement.innerHTML = ClarityIcons.get("home");

            const clarityIconInnerHTML = clarityIcon.innerHTML;

            expect(clarityIconInnerHTML).toBe(divSampleElement.innerHTML);
        });

        it("should insert the SVG markup of error icon if the shape doesn't exist", () => {
            const clarityIcon = document.createElement("clr-icon");
            const nonExistingShape = "non-existing-shape";

            clarityIcon.setAttribute("shape", nonExistingShape);

            const clarityIconInnerHTML = clarityIcon.innerHTML;
            const divSampleElement = document.createElement("div");
            divSampleElement.innerHTML = ClarityIcons.get("error");

            expect(clarityIconInnerHTML).toBe(divSampleElement.innerHTML);
            expect(console.error).toHaveBeenCalled();
        });

        it("should control a size of an icon through size attribute", () => {
            const clarityIcon = document.createElement("clr-icon");
            clarityIcon.setAttribute("shape", "home");
            clarityIcon.setAttribute("size", "25");

            expect(clarityIcon.style.width).toBe("25px");
            expect(clarityIcon.style.height).toBe("25px");
        });
    });

    describe("SVG Icon Markups", () => {
        const testIconStyles = (shapes: any, exceptions?: string[]) => {

            let allShapes = Object.keys(shapes);

            if (exceptions && exceptions.length > 0) {
                allShapes = allShapes.filter((shape) => {
                    if (exceptions.indexOf(shape) === -1) {
                        return shape;
                    }
                });
            }

            for (const shapeName in allShapes) {
                if (allShapes.hasOwnProperty(shapeName)) {
                    const template: string = allShapes[shapeName];

                    expect(template.includes("fill=")).toBe(false);
                    expect(template.includes("style=")).toBe(false);
                }
            }
        };

        it("CoreShapes should not include fill attribute", () => {
            testIconStyles(CoreShapes, ["vm-bug"]);
        });

        it("CommerceShapes should not include fill attribute", () => {
            testIconStyles(CommerceShapes);
        });

        it("EssentialShapes should not include fill attribute", () => {
            testIconStyles(EssentialShapes);
        });

        it("MediaShapes should not include fill attribute", () => {
            testIconStyles(MediaShapes);
        });

        it("SocialShapes should not include fill attribute", () => {
            testIconStyles(SocialShapes);
        });

        it("TravelShapes should not include fill attribute", () => {
            testIconStyles(TravelShapes);
        });

        it("TechnologyShapes should not include fill attribute", () => {
            testIconStyles(TechnologyShapes);
        });

        it("No two shapes should have the same name unless their templates are identical", () => {
            const allShapeTemplates: any =
                [CoreShapes, EssentialShapes, CommerceShapes, MediaShapes, SocialShapes, TechnologyShapes];
            const shapesTested: any = {};
            const duplicatesFound: string[] = [];
            const removeSpacesBreaks = (template: string): string => {
                return template.replace(/\n|\r/g, "").replace(/\s/g, "");
            };

            allShapeTemplates.map((shapeTemplates: any) => {
                for (const shapeName in shapeTemplates) {
                    if (shapeTemplates.hasOwnProperty(shapeName)) {
                        if (!shapesTested.hasOwnProperty(shapeName)) {
                            shapesTested[shapeName] = shapeTemplates[shapeName];
                        } else {
                            duplicatesFound.push(shapeName);
                            expect(removeSpacesBreaks(shapeTemplates[shapeName]))
                                .toBe(removeSpacesBreaks(shapesTested[shapeName]));
                        }
                    }
                }
            });

            if (duplicatesFound.length > 0) {
                console.log("Duplicated Icons: " + duplicatesFound);
            }
        });
    });
});
