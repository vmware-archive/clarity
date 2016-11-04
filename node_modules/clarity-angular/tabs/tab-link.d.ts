import { Tabs } from "./tabs";
export declare class TabLink {
    private tabs;
    active: boolean;
    id: string;
    ariaControls: string;
    constructor(tabs: Tabs);
    onClick(): boolean;
}
