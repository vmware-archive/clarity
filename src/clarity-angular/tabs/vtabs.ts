/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component, Input, Output, AfterContentInit, ContentChildren, QueryList, EventEmitter} from "@angular/core";

import {VTabsNavLink} from "./vtabs-nav-link";
import {VTabsContent} from "./vtabs-content";

let nbVTabLinks: number = 0;

/**
 * @class VTabs
 *
 * @description
 * This Component represents the container for a clr-vtabs element.
 * Proper use requires users to pass in clr-vtabs-nav-group(s) or clr-vtabs-nav-links to set the navigation elements.
 * Corresponding clr-vtabs-content items should map in number and position to the activation link.
 *
 * It always sets the class of .vtabs on its host.
 * It exposes the @Input "clrReversed" which defaults to false and can be used to reverse the content and nav elements.
 */
@Component({
    selector: "clr-vtabs",
    template: `
            <div class="vtabs-nav">
                <ng-content select="clr-vtabs-nav-group"></ng-content>
                <clr-vtabs-nav-group>
                    <ng-content ngProjectAs="clr-vtabs-nav-link" select="clr-vtabs-nav-link"></ng-content>
                </clr-vtabs-nav-group>
            </div>
            <ng-content select="clr-vtabs-content"></ng-content>
    `,
    host: {
        "[class.vtabs]": "true",
        "[class.is-reversed]": "reversed"
    },
    providers: []
})
export class VTabs implements AfterContentInit {

    /**
     * @property vtabLinks
     *
     * @description
     * A QueryList of all VTabNavLink items.
     */
    @ContentChildren(VTabsNavLink, {descendants: true}) vtabLinks: QueryList<VTabsNavLink>;

    /**
     * @property vtabContents
     *
     * @description
     * A QueryList of all VTabContent items.
     */
    @ContentChildren(VTabsContent, {descendants: true}) vtabContents: QueryList<VTabsContent>;

    /**
     * @description
     * Input binding that allows the navigation to be on left or right hand side. Left side is default.
     *
     * @type {boolean}
     */
    @Input("clrReversed") public reversed: boolean = false;

    /**
     * @property linkChange
     *
     * @description
     * EventEmitter for the tab link change event.
     *
     * @type {EventEmitter<VTabsNavLink>}
     */
    @Output("clrVTabsNavChange") linkChange: EventEmitter<VTabsNavLink> = new EventEmitter<VTabsNavLink>(false);

    /**
     * @property contentChange
     *
     * @description
     * EventEmitter for the content change event.
     * @type {EventEmitter<VTabsContent>}
     */
    @Output("clrVTabsContentChange") contentChange: EventEmitter<VTabsContent> = new EventEmitter<VTabsContent>(false);

    /**
     * @property activeLink
     *
     * @description
     * A placeholder to use when there is a preset active link that is not the first one in the QueryLists
     *
     * @type {boolean}
     */
    activatedLink: number;

    /**
     * @function ngAfterContentInit
     *
     * @description
     * Angular Lifecycle method used to:
     *
     * 1. Set up all of the VTabNavLinks with uniq id
     * 2. Subscribe to the activatedChange for each link
     * 3. Check to see if there is already an active link
     * 4. Sets the first link and first content as active, if needed.
     *
     * No params, called as part of the angular lifecycle
     */
    ngAfterContentInit() {
        // Initialize tabs and content.

        this.vtabLinks.forEach((link, index) => {
            link.id = "clr-vtab-link-" + nbVTabLinks.toString();
            nbVTabLinks++;
            this.mapContentId(index, link.id);
            // subscribe to the links click event
            link.activatedChange.subscribe((updatedLink: VTabsNavLink) => {
                this.updateForActiveLink(updatedLink);
            });

            //check for activated link
            if (link.activated) {
                this.activatedLink = index;
            }
        });

        // Activate the first tab and content if nothing has been set with the VTabsNavLink.activated @Input().
        if (!this.activatedLink) {
            let testLink = this.vtabLinks.first;
            testLink.activated = true;

            let testContent: VTabsContent = this.vtabContents.first;
            testContent.activated = true;
        } else {
            this.activateTabContentAtIndex(this.activatedLink);
        }
    }

    /**
     * @function updateForActiveLink
     *
     * @description
     * Method to update all the VTabNavLinks when an activatedChange event is heard by:
     *
     * 1. Deactivating all the linkItem.ids that don't match the updatedLink passed as arg
     * 2. Identifying the index of the newly activated tab link so we can activate corresponding VTabContent
     * 3. Activating the corresponding VTabsContent item.
     *
     * @param updatedLink -  a VTabNavLink that was clicked on.
     *
     */
    updateForActiveLink(updatedLink: VTabsNavLink) {
        let linkIndex: number; // Map between link and content
        this.vtabLinks.forEach((linkItem: VTabsNavLink, index: number) => {
            if (linkItem.id !== updatedLink.id) {
                linkItem.activated = false;
            } else {
                linkIndex = index; // Position of the link that was clicked.
                this.activatedLink = index;
            }
        });

        // Update content for index
        if (typeof linkIndex !== "undefined") { // Remember, remember 0 is also false.
            this.activateTabContentAtIndex(linkIndex);
        }

        // Broadcast the link change event
        this.linkChange.emit(updatedLink);
    }

    /**
     * @function activateTabContentAtIndex
     *
     * @description
     * Method to update VTabContent items as follows:
     *
     * 1. Deactivate all VTabContent items not equal to the linkIndex arg
     * 2. Activate the VTabContent iotem that has the same index as the linkIndex arg
     *
     * @param linkIndex - the index to activate in this.vtabsContent QueryList
     */
    activateTabContentAtIndex(linkIndex: number) {
        this.vtabContents.forEach((content, contentIndex) => {
            if (contentIndex === linkIndex) {
                content.activated = true;
                this.contentChange.emit(content); // Broadcast the content that was activated.
            } else {
                content.activated = false;
            }
        });
    }

    /**
     * @function mapContentId
     *
     * @description
     * Method that sets VTabContent items to the corresponding VTabNavLink item.
     * Called during the ngAfterContentInit method when iterating over the QueryList of VTabNavLinks
     *
     * @param linkIndex - the index of the link calling this method
     * @param id - the id string to set for the matching VTabContent item
     */
    mapContentId(linkIndex: number, id: string) {
        this.vtabContents.forEach((content, contentIndex) => {
            if (linkIndex === contentIndex) {
                content.id = id;
            }
        });
    }
}
