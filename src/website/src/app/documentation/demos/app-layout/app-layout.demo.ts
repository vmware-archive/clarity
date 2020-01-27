/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { ClarityDocComponent } from '../clarity-doc';

const HTML_EXAMPLE = `
html {
    /* 
     * the following line of CSS would change pre-3.0 Clarity to a 20px vertical rhythm with a 
     * 5px grid in 2.0 and * earlier
     */
    font-size: 20px;

    /* for 3.0 and later versions, divide the preferred root value by 1.2 to get a pixel 
     * equivalency 
     */
    font-size: calc(20px/1.2);

    /* ...or do the math yourself so you don't need calc()! */
    font-size: 16.666667px;

    /* 
     * It's recommended, however, that percentage units be used to allow for accessible browser text 
     * resizing.  Given that our current 24px baseline lives on top of a 20px (125%) root font size, we 
     * would need to divide our preferred baseline by 0.192 to get the percentage we need.
     * 
     * So the following percentage would produce a UI that follows a design with a 20px vertical rhythm 
     * and 5px grid – 20 ÷ 0.192 = 104.166667.
     */
    font-size: 104.1667%;

    /* 
     * The following percentage would produce a UI that follows a design with a 28px vertical rhythm 
     * and 7px grid.
     * 28 ÷ 0.192 = 145.83333
     */
    font-size: 145.83333%;

    /* 
     * The following percentage would produce a UI that follows a design with a 32px vertical rhythm 
     * and 8px grid – 32 ÷ 0.192 = 166.66667.
     */
    font-size: 166.66667%;
}
`;

@Component({
  selector: 'clr-app-layout-demo',
  templateUrl: './app-layout.demo.html',
  host: {
    '[class.content-area]': 'true',
    '[class.dox-content-panel]': 'true',
  },
})
export class AppLayoutDemo extends ClarityDocComponent {
  constructor() {
    super('app-layout');
  }
  newLayout = true;
  htmlExample = HTML_EXAMPLE;
}
