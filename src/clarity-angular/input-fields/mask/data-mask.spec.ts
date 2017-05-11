/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {DataMask} from "./data-mask";
import {DefaultMaskDefinition} from "../interfaces/mask-definition";

export default function(): void {
    describe("Data Mask", function() {
        beforeEach(function() {
            this.dataMask = new DataMask(new DefaultMaskDefinition());
        });

        it("test for basic input mask", function() {
            let maskedVal = this.dataMask.applyMask("##A*", "11");
            expect(maskedVal).toEqual("11");
        });

        it("test for phone number mask", function() {
            let maskedVal = this.dataMask.applyMask("(999) 999-9999", "0011194444");
            expect(maskedVal).toEqual("(001) 119-4444");
        });

        it("test for only number mask", function() {
            let maskedVal = this.dataMask.applyMask("###-###", "001119");
            expect(maskedVal).toEqual("001-119");

            maskedVal = this.dataMask.applyMask("999-999", "111222");
            expect(maskedVal).toEqual("111-222");
        });

        it("test for a-z,A-Z mask", function() {
            let maskedVal = this.dataMask.applyMask("AAAAA AAAAA (AAAA", "Input Field Test");
            expect(maskedVal).toEqual("Input Field (Test");
        });

        it("test for a-z,A-Z,0-9 mask", function() {
            let maskedVal = this.dataMask.applyMask("AAAAA AAAAA (****) (****)",
                "Input Field Test 0001");
            expect(maskedVal).toEqual("Input Field (Test) (0001");
        });

        it("test for invalid mask", function() {
            let maskedVal = this.dataMask.applyMask("AAAAA AAAAA",
                "Input 00001");
            expect(maskedVal).toEqual("Input ");
        });

        it("test for IP mask", function() {
            let maskedVal = this.dataMask.applyMask("999.999.999.999",
                "255255255255");
            expect(maskedVal).toEqual("255.255.255.255");
        });

        it("test for IP mask - optional", function() {
            let maskedVal = this.dataMask.applyMask("99?9?.99?9?.99?9?.99?9?",
                "25525");
            expect(maskedVal).toEqual("255.25");
        });

        it("test for brackets ()", function() {
            let maskedVal = this.dataMask.applyMask("(999)-999 999",
                "123456789");
            expect(maskedVal).toEqual("(123)-456 789");
        });

        it("test for nested brackets (())", function() {
            let maskedVal = this.dataMask.applyMask("((999)-999) 999",
                "123456789");
            expect(maskedVal).toEqual("((123)-456) 789");
        });

        it("test for optional chars", function() {
            let maskedVal = this.dataMask.applyMask("(999?)-999? 999",
                "123456789");
            expect(maskedVal).toEqual("(123)-456 789");
        });
    });
};


