import {ClrSelectedState} from "@clr/angular";
import {of, timer} from "rxjs";
import {map} from "rxjs/operators";

export interface Group {
    name: string;
    selected: ClrSelectedState;
}

export interface Item {
    name: string;
    selected: ClrSelectedState;
}

class GroupImpl {
    constructor(public name: string, private _selected: ClrSelectedState,
                public items: Item[]) {}

    get selected() {
        return this._selected;
    }
    set selected(value: ClrSelectedState) {
        this._selected = value;
        if (value !== ClrSelectedState.INDETERMINATE) {
            this.items.forEach(item => item.selected = value);
        }
    }
}

const ALL_GROCERIES = [
    new GroupImpl("Dairy", ClrSelectedState.INDETERMINATE, [
        {
            name: "Milk",
            selected: ClrSelectedState.UNSELECTED,
        },
        {
            name: "Cheese",
            selected: ClrSelectedState.SELECTED,
        }
    ]),
    new GroupImpl("Vegetables", ClrSelectedState.UNSELECTED, [
        {
            name: "Carrots",
            selected: ClrSelectedState.UNSELECTED,
        },
        {
            name: "Potatoes",
            selected: ClrSelectedState.UNSELECTED,
        },
        {
            name: "Beans",
            selected: ClrSelectedState.UNSELECTED,
        }
    ])
];

export const GROCERY_SERVICE = {
    getGroups: () => of(ALL_GROCERIES)
};

export const ITEMS_SERVICE = {
    getItems: (group: Group) => timer(1000).pipe(map(() => (<any>group).items))
};