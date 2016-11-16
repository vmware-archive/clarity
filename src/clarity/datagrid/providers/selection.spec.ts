/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Selection} from "./selection";
import {Items} from "./items";
import {TestBed} from "@angular/core/testing";
import {Sort} from "./sort";
import {Filters} from "./filters";
import {Page} from "./page";

const numberSort = (a: number, b: number) => a - b;

export default function(): void {
    describe("Selection provider", function() {
        beforeEach(function() {
            TestBed.configureTestingModule({
                providers: [Selection, Sort, Filters, Page, Items]
            });

            this.selectionInstance = TestBed.get(Selection);
            this.itemsInstance = TestBed.get(Items);
            this.itemsInstance.smartenUp();
            this.itemsInstance.all = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        });

        afterEach(function() {
            this.selectionInstance.destroy();
            this.itemsInstance.destroy();
        });

        it("starts inactive", function() {
            expect(this.selectionInstance.selectable).toBe(false);
            expect(this.selectionInstance.current).toBeUndefined();
            this.selectionInstance.setSelected(4, true);
            expect(this.selectionInstance.current).toBeUndefined();
        });

        it("can select/deselect items", function() {
            this.selectionInstance.selectable = true;
            this.selectionInstance.setSelected(4, true);
            expect(this.selectionInstance.current).toEqual([4]);
            this.selectionInstance.setSelected(2, true);
            expect(this.selectionInstance.current).toEqual([4, 2]);
        });

        it("can select/deselect all items at once", function() {
            this.selectionInstance.selectable = true;
            this.selectionInstance.toggleAll();
            expect(this.selectionInstance.current).toEqual(this.itemsInstance.displayed);
            this.selectionInstance.toggleAll();
            expect(this.selectionInstance.current).toEqual([]);
            this.selectionInstance.setSelected(4, true);
            expect(this.selectionInstance.current).toEqual([4]);
            this.selectionInstance.toggleAll();
            expect(this.selectionInstance.current.sort(numberSort)).toEqual(this.itemsInstance.displayed);
        });

        it("can detect if an item is selected", function() {
            this.selectionInstance.selectable = true;
            expect(this.selectionInstance.isSelected(4)).toBe(false);
            this.selectionInstance.setSelected(4, true);
            expect(this.selectionInstance.isSelected(4)).toBe(true);
            this.selectionInstance.setSelected(4, false);
            expect(this.selectionInstance.isSelected(4)).toBe(false);
        });

        it("can detect if all items are selected", function() {
            this.selectionInstance.selectable = true;
            expect(this.selectionInstance.isAllSelected()).toBe(false);
            this.selectionInstance.setSelected(4, true);
            expect(this.selectionInstance.isAllSelected()).toBe(false);
            this.selectionInstance.current = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
            expect(this.selectionInstance.isAllSelected()).toBe(true);
        });

        it("accepts pre-selected items", function() {
            this.selectionInstance.selectable = true;
            this.selectionInstance.current = [4, 2];
            expect(this.selectionInstance.isSelected(1)).toBe(false);
            expect(this.selectionInstance.isSelected(2)).toBe(true);
            expect(this.selectionInstance.isSelected(3)).toBe(false);
            expect(this.selectionInstance.isSelected(4)).toBe(true);
        });


        it("exposes an Observable to follow selection changes", function() {
            let nbChanges = 0;
            let currentSelection: any[];
            this.selectionInstance.change.subscribe((items: any[]) => {
                nbChanges++;
                currentSelection = items;
            });
            expect(currentSelection).toBeUndefined();
            this.selectionInstance.selectable = true;
            expect(currentSelection).toEqual([]);
            this.selectionInstance.setSelected(4, true);
            expect(this.selectionInstance.current).toEqual([4]);
            this.selectionInstance.toggleAll();
            expect(this.selectionInstance.current.sort(numberSort)).toEqual(this.itemsInstance.displayed);
            this.selectionInstance.toggleAll();
            expect(this.selectionInstance.current).toEqual([]);
            expect(nbChanges).toBe(4);
        });
    });
};