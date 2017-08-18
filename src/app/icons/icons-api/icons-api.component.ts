import { Component, OnInit } from '@angular/core';

const API_IMPORTS = `
import { ClarityIcons } from 'clarity-icons';
`;

const CHECK_ICON_TEMPLATE = `
<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36" version="1.1">
    <title>check</title>
    <path d="M13.72,27.69,3.29,17.27a1,1,0,0,1,1.41-1.41l9,9L31.29,7.29a1,1,0,0,1,1.41,1.41Z" class="clr-i-outline clr-i-outline-path-1"></path>
</svg>
`;

const ADD_CUSTOM_ICON = `ClarityIcons.add({"my-custom-icon": "<svg ... >[your SVG code goes here]</svg>"});`;
const ADD_CUSTOM_ICON_RESULT = `<clr-icon shape="my-custom-icon" size="24"></clr-icon>`;

const ALIAS_ICON = `ClarityIcons.alias({"bell": ["alarm", "oh-noehz"]});`;
const ALIAS_ICON_RESULT = `
<clr-icon shape="bell"></clr-icon>
<clr-icon shape="alarm"></clr-icon>
<clr-icon shape="oh-noehz"></clr-icon>`;

@Component({
    selector: 'icons-api',
    templateUrl: './icons-api.component.html',
    styleUrls: ['./icons-api.component.scss']
})
export class IconsApiComponent {

    apiImports = API_IMPORTS;
    checkIconTemplate = CHECK_ICON_TEMPLATE;
    addCustomIcon = ADD_CUSTOM_ICON;
    addCustomIconResult = ADD_CUSTOM_ICON_RESULT;
    aliasIcon = ALIAS_ICON;
    aliasIconResult = ALIAS_ICON_RESULT;

}
