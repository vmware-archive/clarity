/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ClarityIcons } from "./index";
import { CoreShapes } from "./shapes/core-shapes";
import { BasicShapes } from "./shapes/basic-shapes";
import { EssentialShapes } from "./shapes/essential-shapes";
import { SocialShapes } from "./shapes/social-shapes";
import { TechnologyShapes } from "./shapes/technology-shapes";


describe("ClarityIcons", () => {

    describe("Global object for the API", () => {

        it("should set a global object", () => {

            expect(window.ClarityIcons).not.toBeUndefined();
        });
    });

    describe("ClarityIconsApi.get()", () => {

        let testAllShapes = (expectedShapes: any) => {

            expect(Object.keys(ClarityIcons.get()).length).toEqual(Object.keys(expectedShapes).length);

            for (let shape in expectedShapes) {

                if (expectedShapes.hasOwnProperty(shape)) {

                    expect(expectedShapes[ shape ].trim()).toEqual(ClarityIcons.get(shape).trim());
                }
            }
        };

        it("should return all icons when no argument is passed in", () => {

            testAllShapes(CoreShapes);
        });

        it("should return CoreShapes['success'] when 'success' is passed in", () => {

            expect(ClarityIcons.get("success").trim()).toEqual(CoreShapes[ "success" ].trim());
        });

        it("should return CoreShapes['check'] when 'check' is passed in", () => {

            expect(ClarityIcons.get("check").trim()).toEqual(CoreShapes[ "check" ].trim());
        });

        it("should return all icons when no argument is passed in passed after including EssentialShapes", () => {

            ClarityIcons.add(EssentialShapes);
            let currentAllShapes = Object.assign({}, CoreShapes, EssentialShapes);

            testAllShapes(currentAllShapes);
        });

        it("should return EssentialShapes['pencil'] when 'pencil' is passed in after including EssentialShapes", () => {

            expect(ClarityIcons.get("pencil").trim()).toEqual(EssentialShapes[ "pencil" ].trim());
        });

        it("should throw an error if the requested shape doesn't exist", () => {

            let nonExistingShape = "non-existing-icon";
            let expectedErrorMessage = `'${nonExistingShape}' is not found in the Clarity Icons set.`;

            expect(() => {
                ClarityIcons.get(nonExistingShape);
            }).toThrowError(expectedErrorMessage);
        });


    });

    describe("ClarityIconsApi.add()", () => {


        it("should throw an error if the argument is not a valid object literal", () => {

            let expectedErrorMessage =
                `The argument must be an object literal passed in the following pattern: 
                { "shape-name": "shape-template" }`;

            expect(() => {
                ClarityIcons.add();
            }).toThrowError(expectedErrorMessage);


        });

        it("should throw an error if an empty string is set for a shape name.", () => {

            let expectedErrorMessage = `Shape name or alias must be a non-empty string!`;
            expect(() => {
                ClarityIcons.add({ "": "" });
            }).toThrowError(expectedErrorMessage);
        });

        it("should throw an error if a shape name contains a white space.", () => {

            let expectedErrorMessage = `Shape name or alias must not contain any whitespace characters!`;
            expect(() => {
                ClarityIcons.add({ "invalid shapename": "" });
            }).toThrowError(expectedErrorMessage);
            expect(() => {
                ClarityIcons.add({ " invalidShapename": "" });
            }).toThrowError(expectedErrorMessage);
            expect(() => {
                ClarityIcons.add({ "invalidShapename ": "" });
            }).toThrowError(expectedErrorMessage);
        });

        it("should throw an error if template is not a SVG markup", () => {

            let expectedErrorMessage = `Template must be SVG markup!`;
            expect(() => {
                ClarityIcons.add({ "shapename": "<shape-template>" });
            })
                .toThrowError(expectedErrorMessage);
            expect(() => {
                ClarityIcons.add({ "shapename": "<svg><shape-template>" });
            })
                .toThrowError(expectedErrorMessage);
            expect(() => {
                ClarityIcons.add({ "shapename": "<shape-template></svg>" });
            })
                .toThrowError(expectedErrorMessage);
        });

        it("should throw an error if an empty string is set for a shape name.", () => {

            let expectedErrorMessage = `Shape name or alias must be a non-empty string!`;
            expect(() => {
                ClarityIcons.add({ "": "" });
            }).toThrowError(expectedErrorMessage);
        });

        it("should add a new shape if a new shape name and template is passed in", () => {

            let currentShapeNumber = Object.keys(ClarityIcons.get()).length;

            let shapeName = "shape-name";
            let shapeTemplate = "<svg><title>shape template</title></svg>";
            let shape = { [shapeName]: shapeTemplate };

            ClarityIcons.add(shape);

            expect(currentShapeNumber).toBe(Object.keys(ClarityIcons.get()).length - 1);
            expect(ClarityIcons.get(shapeName)).toBe(shapeTemplate);
        });

        it("should add new shapes if multiple shape names and templates are passed in one by one", () => {

            let currentShapeNumber = Object.keys(ClarityIcons.get()).length;

            let shapeName1 = "shape-name-1";
            let shapeTemplate1 = "<svg><title>shape template 1</title></svg>";
            let shape1 = { [shapeName1]: shapeTemplate1 };

            let shapeName2 = "shape-name-2";
            let shapeTemplate2 = "<svg><title>shape template 2</title></svg>";
            let shape2 = { [shapeName2]: shapeTemplate2 };

            let shapeName3 = "shape-name-3";
            let shapeTemplate3 = "<svg><title>shape template 3</title></svg>";
            let shape3 = { [shapeName3]: shapeTemplate3 };

            ClarityIcons.add(shape1);
            ClarityIcons.add(shape2);
            ClarityIcons.add(shape3);

            expect(currentShapeNumber).toBe(Object.keys(ClarityIcons.get()).length - 3);
            expect(ClarityIcons.get(shapeName1)).toBe(shapeTemplate1);
            expect(ClarityIcons.get(shapeName2)).toBe(shapeTemplate2);
            expect(ClarityIcons.get(shapeName3)).toBe(shapeTemplate3);
        });

        it("should add new shapes if multiple shape names and templates are passed in one object", () => {

            let currentShapeNumber = Object.keys(ClarityIcons.get()).length;

            let shapeNameA = "shape-name-a";
            let shapeTemplateA = "<svg><title>shape template A</title></svg>";
            let shapeA = { [shapeNameA]: shapeTemplateA };

            let shapeNameB = "shape-name-b";
            let shapeTemplateB = "<svg><title>shape template B</title></svg>";
            let shapeB = { [shapeNameB]: shapeTemplateB };

            let shapeNameC = "shape-name-c";
            let shapeTemplateC = "<svg><title>shape template C</title></svg>";
            let shapeC = { [shapeNameC]: shapeTemplateC };

            let multipleShapes = Object.assign({}, shapeA, shapeB, shapeC);

            ClarityIcons.add(multipleShapes);

            expect(currentShapeNumber).toBe(Object.keys(ClarityIcons.get()).length - 3);
            expect(ClarityIcons.get(shapeNameA)).toBe(shapeTemplateA);
            expect(ClarityIcons.get(shapeNameB)).toBe(shapeTemplateB);
            expect(ClarityIcons.get(shapeNameC)).toBe(shapeTemplateC);
        });

        it("should allow override", () => {

            let currentShapeNumber = Object.keys(ClarityIcons.get()).length;

            let shapeNameA = "shape-name-same";
            let shapeTemplateA = "<svg><title>shape template A</title></svg>";
            let shapeA = { [shapeNameA]: shapeTemplateA };

            let shapeNameB = "shape-name-same";
            let shapeTemplateB = "<svg><title>shape template B</title></svg>";
            let shapeB = { [shapeNameB]: shapeTemplateB };

            ClarityIcons.add(shapeA);
            ClarityIcons.add(shapeB);

            //Even though ClarityIcons.add() is called twice, only one more property should be added in
            //as the former one is replaced by the latter one.

            expect(currentShapeNumber).toBe(Object.keys(ClarityIcons.get()).length - 1);
            expect(ClarityIcons.get(shapeNameA)).toBe(shapeTemplateB);

        });
    });

    describe("ClarityIconsApi.alias()", () => {

        it("should throw an error if the argument is not a valid object literal", () => {

            let expectedErrorMessage =
                `The argument must be an object literal passed in the following pattern: 
                { "shape-name": ["alias-name", ...] }`;

            expect(() => {
                ClarityIcons.alias();
            }).toThrowError(expectedErrorMessage);


        });

        it("should throw an error if the shape name doesn't exist", () => {

            let shapeName = "pen";
            let expectedErrorMessage = "The icon '" + shapeName + "' you are trying to set an alias to doesn't exist!";

            expect(() => {
                ClarityIcons.alias({ [shapeName]: [ "write" ] });
            }).toThrowError(expectedErrorMessage);

        });

        it("should allow aliases if the shape name exists", () => {

            let currentShapeNumber = Object.keys(ClarityIcons.get()).length;

            ClarityIcons.alias({ "check": [ "check-mark", "success-mark" ] });

            expect(currentShapeNumber).toBe(Object.keys(ClarityIcons.get()).length - 2);
            expect(ClarityIcons.get("check-mark")).toBe(ClarityIcons.get("check"));
            expect(ClarityIcons.get("success-mark")).toBe(ClarityIcons.get("check"));


        });

        it("should allow to create an alias from another alias name", () => {

            let currentShapeNumber = Object.keys(ClarityIcons.get()).length;

            ClarityIcons.alias({ "success-mark": [ "ok-mark" ] });

            expect(currentShapeNumber).toBe(Object.keys(ClarityIcons.get()).length - 1);
            expect(ClarityIcons.get("success-mark")).toBe(ClarityIcons.get("check"));
            expect(ClarityIcons.get("ok-mark")).toBe(ClarityIcons.get("check"));

        });

        it("should allow to create a new shape by overriding existing alias name", () => {

            let currentShapeNumber = Object.keys(ClarityIcons.get()).length;

            let shapeTemplateOverrideAlias = "<svg><title>shape template override alias</title></svg>";

            ClarityIcons.add({ "ok-mark": shapeTemplateOverrideAlias });

            //Even though ClarityIcons.add() is called once, no new shapes should be added in
            //as the existing icons's template is replaced by a new template only.

            expect(currentShapeNumber).toBe(Object.keys(ClarityIcons.get()).length);
            expect(ClarityIcons.get("ok-mark")).toBe(shapeTemplateOverrideAlias);

        });


    });

    describe("ClarityIcon Custom Element", () => {

        beforeEach(() => {
            spyOn(console, "error");
        });

        it("should insert the SVG markup", () => {

            let clarityIcon = document.createElement("clr-icon");
            clarityIcon.setAttribute("shape", "home");

            let divSampleElement = document.createElement("div");
            divSampleElement.innerHTML = ClarityIcons.get("home");

            let clarityIconInnerHTML = clarityIcon.innerHTML;

            expect(clarityIconInnerHTML).toBe(divSampleElement.innerHTML);

        });

        it("should insert the SVG markup of error icon if the shape doesn't exist", () => {

            let clarityIcon = document.createElement("clr-icon");
            let nonExistingShape = "non-existing-shape";

            clarityIcon.setAttribute("shape", nonExistingShape);
            let clarityIconInnerHTML = clarityIcon.innerHTML;

            let divSampleElement = document.createElement("div");
            divSampleElement.innerHTML = ClarityIcons.get("error");

            expect(clarityIconInnerHTML).toBe(divSampleElement.innerHTML);
            expect(console.error).toHaveBeenCalled();

        });

        it("should control a size of an icon through size attribute", () => {

            let clarityIcon = document.createElement("clr-icon");
            clarityIcon.setAttribute("shape", "home");
            clarityIcon.setAttribute("size", "25");

            expect(clarityIcon.style.width).toBe("25px");
            expect(clarityIcon.style.height).toBe("25px");

        });

    });

    describe("SVG Icon Markups", () => {

        let testIconStyles = (shapes: any, exceptions?: string[]) => {

            let allShapes = Object.keys(shapes);

            if (exceptions && exceptions.length > 0) {

                allShapes = allShapes.filter((shape) => {
                    if (exceptions.indexOf(shape) === -1) {
                        return shape;
                    }
                });

            }

            for (let shapeName in allShapes) {

                if (allShapes.hasOwnProperty(shapeName)) {

                    let template: string = allShapes[ shapeName ];

                    expect(template.includes("fill=")).toBe(false);
                    expect(template.includes("style=")).toBe(false);

                }
            }

        };

        it("CoreShapes should not include fill attribute", () => {

            testIconStyles(CoreShapes, [ "vm-bug" ]);
        });

        it("BasicShapes should not include fill attribute", () => {

            testIconStyles(BasicShapes);
        });

        it("EssentialShapes should not include fill attribute", () => {

            testIconStyles(EssentialShapes);
        });

        it("SocialShapes should not include fill attribute", () => {


            testIconStyles(SocialShapes);
        });

        it("TechnologyShapes should not include fill attribute", () => {

            testIconStyles(TechnologyShapes);
        });

        it("No two shapes should have the same name unless their templates are identical", () => {

            let allShapeTemplates: any = [ CoreShapes, EssentialShapes, SocialShapes, TechnologyShapes ];
            let shapesTested: any = {};
            let removeSpacesBreaks = (template: string): string => {
                return template.replace(/\n|\r/g, "").replace(/\s/g, "");
            };

            allShapeTemplates.map((shapeTemplates: any) => {
                for (let shapeName in shapeTemplates) {
                    if (shapeTemplates.hasOwnProperty(shapeName)) {

                        if (!shapesTested.hasOwnProperty(shapeName)) {
                            shapesTested[ shapeName ] = shapeTemplates[ shapeName ];
                        } else {
                            expect(removeSpacesBreaks(shapeTemplates[ shapeName ]))
                                .toBe(removeSpacesBreaks(shapesTested[ shapeName ]));
                        }
                    }
                }
            });

        });

    });


});
