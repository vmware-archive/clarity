import {
    ContentChildren,
    Component,
    EventEmitter,
    forwardRef,
    QueryList,
    Output, Input
} from "@angular/core";
import {TabLink} from "./tab-link";
import {TabContent} from "./tab-content";

let nbTabsComponents: number = 0;

@Component({
    selector: "clr-tabs",
    templateUrl: "./tabs.html"
})
export class Tabs {
    id: string;

    @ContentChildren(forwardRef(() => TabLink)) tabLinkChildren: QueryList<TabLink>;
    @ContentChildren(forwardRef(() => TabContent)) tabContentChildren: QueryList<TabContent>;

    @Input("clrTabsCurrentTabIndex") _currentTabIndex: number = -1;
    @Input("clrTabsCurrentTabLink") _currentTabLink: TabLink;
    @Input("clrTabsCurrentTabContent") _currentTabContent: TabContent;

    @Output("clrTabsCurrentTabIndexChanged") currentTabIndexChanged: EventEmitter<number> =
        new EventEmitter<number>(false);
    @Output("clrTabsCurrentTabLinkChanged") currentTabLinkChanged: EventEmitter<TabLink> =
        new EventEmitter<TabLink>(false);
    @Output("clrTabsCurrentTabContentChanged") currentTabContentChanged: EventEmitter<TabContent> =
        new EventEmitter<TabContent>(false);

    constructor() {
        this.id = "clr-tabs-" + (nbTabsComponents++);
    }

    setUpLinksAndContents(): void {
        // first, iterate over tab links and contents and assign id's if it doesn't exist
        // also set the active tab index; future active tab index will override the earlier one if there are multiple
        this.tabLinks.forEach((tabLink: TabLink, index: number) => {
            if (!tabLink.id) {
                tabLink.id =  this.id + "-tab-" + index;
            }
            if (tabLink.active) {
                this.currentTabLink  = tabLink;
                this.currentTabIndex = index;
            }
        });

        this.tabContents.forEach((tabContent: TabContent, index: number) => {
            if (!tabContent.id) {
                tabContent.id = this.id + "-content-" + index;
            }
            if (tabContent.active) {
                this.currentTabContent = tabContent;
            }
        });

        // second, iterate over tab links and contents to set the aria attributes
        this.tabLinks.forEach((tabLink: TabLink, index: number) => {
            if (index < this.tabContents.length) {
                tabLink.ariaControls =  this.tabContents[index].id;
            }
        });

        this.tabContents.forEach((tabContent: TabContent, index: number) => {
            if (index < this.tabLinks.length) {
                tabContent.ariaLabelledBy =  this.tabLinks[index].id;
            }
        });

        // third, set first one as active if there's no active tab link or tab content
        if (!this.currentTabLink && this.tabLinks.length > 0) {
            this.selectTab(this.tabLinks[0]);
        }
    }

    ngAfterContentInit(): void {
        this.setUpLinksAndContents();

        this.tabLinkChildren.changes.subscribe(children => {
            this.setUpLinksAndContents();
        });
        this.tabContentChildren.changes.subscribe(children => {
            this.setUpLinksAndContents();
        });
    }

    overrideTabContentChildren(tabContentChildren: QueryList<TabContent>) {
        this.tabContentChildren = tabContentChildren;
        this.setUpLinksAndContents();
    }

    overrideTabLinkChildren(tabLinks: QueryList<TabLink>) {
        this.tabLinkChildren = tabLinks;
        this.setUpLinksAndContents();
    }

    get tabLinks(): TabLink[] {
        return this.tabLinkChildren.toArray();
    }

    get tabContents(): TabContent[] {
        return this.tabContentChildren.toArray();
    }

    get currentTabContent(): TabContent {
        return this._currentTabContent;
    }

    set currentTabContent(tabContent: TabContent) {
        this._currentTabContent = tabContent;
        this.currentTabContentChanged.emit(tabContent);
    }

    get currentTabIndex(): number {
        return this._currentTabIndex;
    }

    set currentTabIndex(index: number) {
        this._currentTabIndex = index;
        this.currentTabIndexChanged.emit(index);
    }

    get currentTabLink(): TabLink {
        return this._currentTabLink;
    }

    set currentTabLink(tabLink: TabLink) {
        this._currentTabLink = tabLink;
        this.currentTabLinkChanged.emit(tabLink);
    }

    selectTab(tabLink: TabLink): void {
        // deactivate all tabs and contents
        this.tabLinks.forEach((tab: TabLink) => tab.active = false);
        this.tabContents.forEach((tabContent: TabContent) => tabContent.active = false);

        // activate the selected Tab
        let index: number = this.tabLinks.indexOf(tabLink);
        tabLink.active = true;
        this.currentTabLink = tabLink;
        this.currentTabIndex = index;

        // activate the matching content if it exists; if we have a tabLink with no associated content, it'll show blank
        let selectedTabContent: TabContent = null;
        if (index < this.tabContents.length) {
            selectedTabContent = this.tabContents[index];
            this.currentTabContent = selectedTabContent;
            selectedTabContent.active = true;
        }

    }
}