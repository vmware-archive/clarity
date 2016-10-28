import { EventEmitter, QueryList } from "@angular/core";
import { TabLink } from "./tab-link";
import { TabContent } from "./tab-content";
export declare class Tabs {
    id: string;
    tabLinkChildren: QueryList<TabLink>;
    tabContentChildren: QueryList<TabContent>;
    _currentTabIndex: number;
    _currentTabLink: TabLink;
    _currentTabContent: TabContent;
    currentTabIndexChanged: EventEmitter<number>;
    currentTabLinkChanged: EventEmitter<TabLink>;
    currentTabContentChanged: EventEmitter<TabContent>;
    constructor();
    setUpLinksAndContents(): void;
    ngAfterContentInit(): void;
    overrideTabContentChildren(tabContentChildren: QueryList<TabContent>): void;
    overrideTabLinkChildren(tabLinks: QueryList<TabLink>): void;
    readonly tabLinks: TabLink[];
    readonly tabContents: TabContent[];
    currentTabContent: TabContent;
    currentTabIndex: number;
    currentTabLink: TabLink;
    selectTab(tabLink: TabLink): void;
}
