/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CoreShapes } from "clarity-icons/shapes/core-shapes";
import { CommerceShapes } from "clarity-icons/shapes/commerce-shapes";
import { EssentialShapes } from "clarity-icons/shapes/essential-shapes";
import { MediaShapes } from "clarity-icons/shapes/media-shapes";
import { SocialShapes } from "clarity-icons/shapes/social-shapes";
import { TravelShapes } from "clarity-icons/shapes/travel-shapes";
import { TechnologyShapes } from "clarity-icons/shapes/technology-shapes";

import { ICONS_TAGS } from "./icons-tags"

const HIDE_ICONS = {
    "vm-bug": true
};


const ALL_ALIASES = {
    "house": "home",
    "settings": "cog",
    "success": "check",
    "close": "times",
    "warning": "exclamation-triangle",
    "error": "exclamation-circle",
    "info": "info-circle",
    "menu": "bars",
    "avatar": "user",
    "caret": "angle",
    "directory": "folder",
    "notification": "bell",
    "edit": "pencil",
    "note-edit": "note",
    "group": "users",
    "collapse": "angle-double",
    "document": "file",
    "add": "plus",
    "cancel": "ban",
    "remove": "times-circle",
    "eye-show": "eye",
    "sign-in": "login",
    "sign-out": "logout",
    "lightning": "bolt",
    "flow-chart": "organization",
    "alert": "bubble-exclamation",
    "pinned": "pinboard",
    "favorite": "star",
    "email": "envelope",
    "date": "calendar",
    "analytics": "line-chart",
    "server": "host",
    "command": "terminal",
    "mobile-phone": "mobile",
    "license": "certificate",
    "disconnected": "no-wifi",
    "receiver": "phone-handset",
    "design": "ruler-pencil",
    "plane": "airplane",
    "auto": "car"
};

function reversedAliases(originalKeyValue: any) {
    let reversed = {};

    for (let key in originalKeyValue) {
        if (originalKeyValue.hasOwnProperty(key)) {

            if (reversed[originalKeyValue[key]]) {
                reversed[originalKeyValue[key]].push(key);
            } else {
                reversed[originalKeyValue[key]] = [key];
            }

        }
    }

    return reversed;
}

function makeSetSearchable(set: any, defaultTags: string[] = []): any[] {

    let reversed_aliases = reversedAliases(ALL_ALIASES);

    let shapesNames = Object.keys(set);

    let searchableSet = shapesNames.map((name: string) => {

        // only return icons that are not aliases

        if (!ALL_ALIASES[name]) {

            let aliases = reversed_aliases[name] || [];
            let tags = ICONS_TAGS[name] || [];

            return {name: name, template: set[name], tags: aliases.concat(tags).concat(defaultTags), aliases: aliases}
        }
    })
        .filter((searchableIcon: any) => { if (searchableIcon) return searchableIcon; })
        .filter((hideIcon: any) => { if (!HIDE_ICONS[hideIcon.name]) return hideIcon; });

    return searchableSet;

}

export const IconsInventory = {

    "core-shapes": {
        searchableIcons: makeSetSearchable(CoreShapes, [])
    },
    "commerce-shapes": {
        searchableIcons: makeSetSearchable(CommerceShapes, [])
    },
    "essential-shapes": {
        searchableIcons: makeSetSearchable(EssentialShapes, [])
    },
    "media-shapes": {
        searchableIcons: makeSetSearchable(MediaShapes, [])
    },
    "social-shapes": {
        searchableIcons: makeSetSearchable(SocialShapes, [])
    },
    "travel-shapes": {
        searchableIcons: makeSetSearchable(TravelShapes, [])
    },
    "technology-shapes": {
        searchableIcons: makeSetSearchable(TechnologyShapes, [])
    }

};