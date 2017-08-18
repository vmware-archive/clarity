import { Component, OnInit } from '@angular/core';

const INTRO_EXAMPLE = `
<clr-icon shape="info-circle"></clr-icon>
`;

const SIZE_EXAMPLE = `
<!--A. SETTING THE SIZE THROUGH CLR-ICON SIZE ATTRIBUTE-->
<clr-icon shape="info-circle" size="12"></clr-icon>
<clr-icon shape="info-circle" size="16"></clr-icon>
<clr-icon shape="info-circle" size="36"></clr-icon>
<clr-icon shape="info-circle" size="48"></clr-icon>
<clr-icon shape="info-circle" size="64"></clr-icon>
<clr-icon shape="info-circle" size="72"></clr-icon>

<!--B. SETTING THE SIZE IN STYLE ATTRIBUTE-->
<clr-icon shape="info-circle" style="width: 12px; height: 12px;"></clr-icon>
<clr-icon shape="info-circle" style="width: 16px; height: 16px;"></clr-icon>
<clr-icon shape="info-circle" style="width: 36px; height: 36px;"></clr-icon>
<clr-icon shape="info-circle" style="width: 48px; height: 48px;"></clr-icon>
<clr-icon shape="info-circle" style="width: 64px; height: 64px;"></clr-icon>
<clr-icon shape="info-circle" style="width: 72px; height: 72px;"></clr-icon>
`;

const COLOR_EXAMPLE = `
<clr-icon shape="info-circle"></clr-icon>
<clr-icon shape="info-circle" class="is-highlight"></clr-icon>
<clr-icon shape="info-circle" class="is-error"></clr-icon>
<clr-icon shape="info-circle" class="is-warning"></clr-icon>
<clr-icon shape="info-circle" class="is-success"></clr-icon>
<clr-icon shape="info-circle" class="is-info"></clr-icon>`;

const INVERSE_EXAMPLE = `
<clr-icon shape="info-circle" class="is-inverse"></clr-icon>`;

const DIRECTION_EXAMPLE = `
<!--A. SETTING THE ROTATION DIRECTION THROUGH CLR-ICON SHAPE ATTRIBUTE-->
<clr-icon shape="caret up"></clr-icon>
<clr-icon shape="caret right"></clr-icon>
<clr-icon shape="caret down"></clr-icon>
<clr-icon shape="caret left"></clr-icon>

<!--B. SETTING THE ROTATION DIRECTION THROUGH CLR-ICON DIR ATTRIBUTE-->
<clr-icon shape="caret" dir="up"></clr-icon>
<clr-icon shape="caret" dir="right"></clr-icon>
<clr-icon shape="caret" dir="down"></clr-icon>
<clr-icon shape="caret" dir="left"></clr-icon>

<!--C. SETTING THE ROTATION DIRECTION IN STYLE ATTRIBUTE-->
<clr-icon shape="caret" style="transform: rotate(0deg);"></clr-icon>
<clr-icon shape="caret" style="transform: rotate(90deg);"></clr-icon>
<clr-icon shape="caret" style="transform: rotate(180deg);"></clr-icon>
<clr-icon shape="caret" style="transform: rotate(270deg);"></clr-icon>
`;

const FLIP_EXAMPLE = `
<clr-icon shape="floppy"></clr-icon>
<clr-icon shape="floppy" flip="horizontal"></clr-icon>
<clr-icon shape="floppy" flip="vertical"></clr-icon>
`;

const DIRECTION_EXAMPLE_DIR = `
<clr-icon shape="caret" dir="up"></clr-icon>
<clr-icon shape="caret" dir="right"></clr-icon>
<clr-icon shape="caret" dir="down"></clr-icon>
<clr-icon shape="caret" dir="left"></clr-icon>
`;

const DIRECTION_EXAMPLE_FLIP = `
<clr-icon shape="floppy"></clr-icon>
<clr-icon shape="floppy" flip="horizontal"></clr-icon>
<clr-icon shape="floppy" flip="vertical"></clr-icon>
`;


const VARIANTS_EXAMPLE = `
<clr-icon shape="user"></clr-icon>
<clr-icon shape="user" class="has-alert"></clr-icon>
<clr-icon shape="user" class="has-badge"></clr-icon>
<clr-icon shape="user" class="is-solid"></clr-icon>
<clr-icon shape="user" class="is-solid has-alert"></clr-icon>
<clr-icon shape="user" class="is-solid has-badge"></clr-icon>
<clr-icon shape="user" class="is-solid has-badge--success"></clr-icon>
`;


@Component({
    selector: 'icons-how-to-use',
    templateUrl: './icons-how-to-use.component.html',
    styleUrls: ['./icons-how-to-use.component.scss']
})
export class IconsHowToUseComponent {

    introExample = INTRO_EXAMPLE;
    sizeExamples = SIZE_EXAMPLE;
    colorExample = COLOR_EXAMPLE;
    inverseColorExample = INVERSE_EXAMPLE;
    directionExample = DIRECTION_EXAMPLE;
    flipExample = FLIP_EXAMPLE;
    orientationExampleDir = DIRECTION_EXAMPLE_DIR;
    orientationExampleFlip = DIRECTION_EXAMPLE_FLIP;
    variantExample = VARIANTS_EXAMPLE;


}
