import { Items } from "./providers/items";
import { Page } from "./providers/page";
export declare class DatagridPlaceholder {
    private items;
    private page;
    constructor(items: Items, page: Page);
    /**
     * Tests if the datagrid is empty, meaning it doesn't contain any items
     */
    readonly emptyDatagrid: boolean;
    /**
     * Number of empty rows to display to ensure we preserve a fixed height on the datagrid,
     * even if the last page has less items than the previous ones
     */
    readonly nbEmptyRows: number;
}
