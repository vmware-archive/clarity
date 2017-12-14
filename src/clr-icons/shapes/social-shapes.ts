/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {descriptorConfig} from "../utils/descriptor-config";

/* tslint:disable:max-line-length */

const socialShapes: any = {

    "share": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" role="img">
                <title>share</title>

                <path class="clr-i-outline clr-i-outline-path-1" d="M27.53,24a5,5,0,0,0-3.6,1.55L11.74,19.45a4.47,4.47,0,0,0,0-2.8l12.21-6.21a5.12,5.12,0,1,0-1.07-1.7L10.79,14.89a5,5,0,1,0,0,6.33l12.06,6.07A4.93,4.93,0,0,0,22.54,29a5,5,0,1,0,5-5Zm0-20a3,3,0,1,1-3,3A3,3,0,0,1,27.53,4ZM7,21a3,3,0,1,1,3-3A3,3,0,0,1,7,21ZM27.53,32a3,3,0,1,1,3-3A3,3,0,0,1,27.53,32Z"/>

                <path class="clr-i-solid clr-i-solid-path-1" d="M27.53,24a5,5,0,0,0-3.6,1.55L11.74,19.45a4.47,4.47,0,0,0,0-2.8l12.21-6.21a5.12,5.12,0,1,0-1.07-1.7L10.79,14.89a5,5,0,1,0,0,6.33l12.06,6.07A4.93,4.93,0,0,0,22.54,29a5,5,0,1,0,5-5Z"/>
            </svg>
        `,

    "star": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" role="img">
                <title>star</title>

                <path class="clr-i-outline clr-i-outline-path-1" d="M27.19,34a2.22,2.22,0,0,1-1.24-.38l-7.46-5a.22.22,0,0,0-.25,0l-7.46,5A2.22,2.22,0,0,1,7.4,31.21l2.45-8.64a.23.23,0,0,0-.08-.24L2.71,16.78a2.22,2.22,0,0,1,1.29-4l9-.34a.23.23,0,0,0,.2-.15l3.1-8.43a2.22,2.22,0,0,1,4.17,0l3.1,8.43a.23.23,0,0,0,.2.15l9,.34a2.22,2.22,0,0,1,1.29,4L27,22.33a.22.22,0,0,0-.08.24l2.45,8.64A2.23,2.23,0,0,1,27.19,34Zm-8.82-7.42A2.21,2.21,0,0,1,19.6,27l7.46,5a.22.22,0,0,0,.34-.25l-2.45-8.64a2.21,2.21,0,0,1,.77-2.35l7.06-5.55a.22.22,0,0,0-.13-.4l-9-.34a2.22,2.22,0,0,1-2-1.46l-3.1-8.43a.22.22,0,0,0-.42,0L15.06,13a2.22,2.22,0,0,1-2,1.46l-9,.34a.22.22,0,0,0-.13.4L11,20.76a2.22,2.22,0,0,1,.77,2.35L9.33,31.75a.21.21,0,0,0,.08.24.2.2,0,0,0,.26,0l7.46-5A2.22,2.22,0,0,1,18.36,26.62Z"/>

                <path class="clr-i-solid clr-i-solid-path-1" d="M34,16.78a2.22,2.22,0,0,0-1.29-4l-9-.34a.23.23,0,0,1-.2-.15L20.4,3.89a2.22,2.22,0,0,0-4.17,0l-3.1,8.43a.23.23,0,0,1-.2.15l-9,.34a2.22,2.22,0,0,0-1.29,4l7.06,5.55a.23.23,0,0,1,.08.24L7.35,31.21a2.22,2.22,0,0,0,3.38,2.45l7.46-5a.22.22,0,0,1,.25,0l7.46,5a2.2,2.2,0,0,0,2.55,0,2.2,2.2,0,0,0,.83-2.4l-2.45-8.64a.22.22,0,0,1,.08-.24Z"/>
            </svg>
        `,

    "half-star": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" role="img">
                <title>half-star</title>

                <path class="clr-i-outline clr-i-outline-path-1" d="M34,16.78a2.22,2.22,0,0,0-1.29-4l-9-.34a.23.23,0,0,1-.2-.15L20.4,3.89a2.22,2.22,0,0,0-4.17,0l-3.1,8.43a.23.23,0,0,1-.2.15l-9,.34a2.22,2.22,0,0,0-1.29,4l7.06,5.55a.22.22,0,0,1,.08.24L7.35,31.21A2.23,2.23,0,0,0,9.49,34a2.22,2.22,0,0,0,1.24-.38l7.46-5a.22.22,0,0,1,.25,0l7.46,5a2.22,2.22,0,0,0,3.38-2.45l-2.45-8.64a.23.23,0,0,1,.08-.24ZM18.33,26.62h0a2.21,2.21,0,0,0-1.24.38L9.62,32a.22.22,0,0,1-.34-.25l2.45-8.64A2.21,2.21,0,0,0,11,20.76L3.9,15.21a.22.22,0,0,1,.13-.4l9-.34A2.22,2.22,0,0,0,15,13l3.1-8.43a.2.2,0,0,1,.21-.15h0Z"/>

                <path class="clr-i-solid clr-i-solid-path-1" d="M34,16.78a2.22,2.22,0,0,0-1.29-4l-9-.34a.23.23,0,0,1-.2-.15L20.4,3.89a2.22,2.22,0,0,0-4.17,0l-3.1,8.43a.23.23,0,0,1-.2.15l-9,.34a2.22,2.22,0,0,0-1.29,4l7.06,5.55a.23.23,0,0,1,.08.24L7.35,31.21a2.22,2.22,0,0,0,3.38,2.45l7.46-5a.22.22,0,0,1,.25,0l7.46,5a2.2,2.2,0,0,0,2.55,0,2.2,2.2,0,0,0,.83-2.4l-2.45-8.64a.22.22,0,0,1,.08-.24ZM24.9,23.11l2.45,8.64A.22.22,0,0,1,27,32l-7.46-5a2.21,2.21,0,0,0-1.24-.38h0V4.44h0a.2.2,0,0,1,.21.15L21.62,13a2.22,2.22,0,0,0,2,1.46l9,.34a.22.22,0,0,1,.13.4l-7.06,5.55A2.21,2.21,0,0,0,24.9,23.11Z"/>
            </svg>
        `,


    "bookmark": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" role="img">
                <title>bookmark</title>

                <path class="clr-i-outline clr-i-outline-path-1" d="M26,34a2,2,0,0,1-1.41-.58L18,26.82l-6.54,6.52A2,2,0,0,1,8,31.93V4a2,2,0,0,1,2-2H26a2,2,0,0,1,2,2V32a2,2,0,0,1-2,2Zm0-2h0V4H10V31.93L18,24Z"/>

                <path class="clr-i-solid clr-i-solid-path-1" d="M26,2H10A2,2,0,0,0,8,4V31.93a2,2,0,0,0,3.42,1.41l6.54-6.52,6.63,6.6A2,2,0,0,0,28,32V4A2,2,0,0,0,26,2Z"/>
            </svg>
        `,


    "envelope": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-alert can-badge has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" role="img">
                <title>envelope</title>

                <path class="clr-i-outline clr-i-outline-path-1" d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6ZM30.46,28H5.66l7-7.24-1.44-1.39L4,26.84V9.52L16.43,21.89a2,2,0,0,0,2.82,0L32,9.21v17.5l-7.36-7.36-1.41,1.41ZM5.31,8H30.38L17.84,20.47Z"/>

                <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M32,13.08V26.71l-7.36-7.36-1.41,1.41L30.46,28H5.66l7-7.24-1.44-1.39L4,26.84V9.52L16.43,21.89a2,2,0,0,0,2.82,0l8.83-8.78a7.44,7.44,0,0,1-2-.85l-8.26,8.21L5.31,8H22.81a7.49,7.49,0,0,1-.31-2H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V12.2A7.45,7.45,0,0,1,32,13.08Z"/>
                <circle class="clr-i-outline--badged clr-i-outline-path-2--badged clr-i-badge" cx="30" cy="5.86" r="5"/>

                <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M33.68,15.26H32V26.71l-7.36-7.36-1.41,1.41L30.46,28H5.66l7-7.24-1.44-1.39L4,26.84V9.52L16.43,21.89a2,2,0,0,0,2.82,0l6.66-6.63H23.08l-5.24,5.21L5.31,8H20.06l1.15-2H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V15.24Z"/>
                <path class="clr-i-outline--alerted clr-i-outline-path-2--alerted clr-i-alert" d="M26.85,1l-5.72,9.91a1.28,1.28,0,0,0,1.1,1.91H33.68a1.28,1.28,0,0,0,1.1-1.91L29.06,1A1.28,1.28,0,0,0,26.85,1Z"/>

                <path class="clr-i-solid clr-i-solid-path-1" d="M32.33,6a2,2,0,0,0-.41,0h-28a2,2,0,0,0-.53.08L17.84,20.47Z"/>
                <path class="clr-i-solid clr-i-solid-path-2" d="M33.81,7.39,19.25,21.89a2,2,0,0,1-2.82,0L2,7.5a2,2,0,0,0-.07.5V28a2,2,0,0,0,2,2h28a2,2,0,0,0,2-2V8A2,2,0,0,0,33.81,7.39ZM5.3,28H3.91V26.57l7.27-7.21,1.41,1.41Zm26.61,0H30.51l-7.29-7.23,1.41-1.41,7.27,7.21Z"/>

                <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M26,12.34A7.49,7.49,0,0,1,22.5,6H3.92a2,2,0,0,0-.53.08L17.84,20.47Z"/>
                <path class="clr-i-solid--badged clr-i-solid-path-2--badged" d="M30,13.5a7.49,7.49,0,0,1-2-.29l-8.71,8.68a2,2,0,0,1-2.82,0L2,7.5a2,2,0,0,0-.07.5V28a2,2,0,0,0,2,2h28a2,2,0,0,0,2-2V12.39A7.45,7.45,0,0,1,30,13.5ZM5.3,28H3.91V26.57l7.27-7.21,1.41,1.41Zm26.61,0H30.51l-7.29-7.23,1.41-1.41,7.27,7.21Z"/>
                <circle class="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge" cx="30" cy="6" r="5"/>

                <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M33.68,15.4H25.77l-6.52,6.49a2,2,0,0,1-2.82,0L2,7.5a2,2,0,0,0-.07.5V28a2,2,0,0,0,2,2h28a2,2,0,0,0,2-2V15.38ZM5.3,28H3.91V26.57l7.27-7.21,1.41,1.41Zm26.61,0H30.51l-7.29-7.23,1.41-1.41,7.27,7.21Z"/>
                <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted" d="M22.94,15.4h-.7A3.68,3.68,0,0,1,19,9.89L21.29,6H3.92a2,2,0,0,0-.53.08L17.84,20.47Z"/>
                <path class="clr-i-solid--alerted clr-i-solid-path-3--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>
            </svg>
        `,


    "calendar": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-alert can-badge has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" role="img">
                <title>calendar</title>
                <path class="clr-i-outline clr-i-outline-path-1" d="M32.25,6H29V8h3V30H4V8H7V6H3.75A1.78,1.78,0,0,0,2,7.81V30.19A1.78,1.78,0,0,0,3.75,32h28.5A1.78,1.78,0,0,0,34,30.19V7.81A1.78,1.78,0,0,0,32.25,6Z"/>
                <rect class="clr-i-outline clr-i-outline-path-2" x="8" y="14" width="2" height="2"/>
                <rect class="clr-i-outline clr-i-outline-path-3" x="14" y="14" width="2" height="2"/>
                <rect class="clr-i-outline clr-i-outline-path-4" x="20" y="14" width="2" height="2"/>
                <rect class="clr-i-outline clr-i-outline-path-5" x="26" y="14" width="2" height="2"/>
                <rect class="clr-i-outline clr-i-outline-path-6" x="8" y="19" width="2" height="2"/>
                <rect class="clr-i-outline clr-i-outline-path-7" x="14" y="19" width="2" height="2"/>
                <rect class="clr-i-outline clr-i-outline-path-8" x="20" y="19" width="2" height="2"/>
                <rect class="clr-i-outline clr-i-outline-path-9" x="26" y="19" width="2" height="2"/>
                <rect class="clr-i-outline clr-i-outline-path-10" x="8" y="24" width="2" height="2"/>
                <rect class="clr-i-outline clr-i-outline-path-11" x="14" y="24" width="2" height="2"/>
                <rect class="clr-i-outline clr-i-outline-path-12" x="20" y="24" width="2" height="2"/>
                <rect class="clr-i-outline clr-i-outline-path-13" x="26" y="24" width="2" height="2"/>
                <path class="clr-i-outline clr-i-outline-path-14" d="M10,10a1,1,0,0,0,1-1V3A1,1,0,0,0,9,3V9A1,1,0,0,0,10,10Z"/>
                <path class="clr-i-outline clr-i-outline-path-15" d="M26,10a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V9A1,1,0,0,0,26,10Z"/>
                <rect class="clr-i-outline clr-i-outline-path-16" x="13" y="6" width="10" height="2"/>

                <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M32,13.22V30H4V8H7V6H3.75A1.78,1.78,0,0,0,2,7.81V30.19A1.78,1.78,0,0,0,3.75,32h28.5A1.78,1.78,0,0,0,34,30.19V12.34A7.45,7.45,0,0,1,32,13.22Z"/>
                <rect class="clr-i-outline--badged clr-i-outline-path-2--badged" x="8" y="14" width="2" height="2"/>
                <rect class="clr-i-outline--badged clr-i-outline-path-3--badged" x="14" y="14" width="2" height="2"/>
                <rect class="clr-i-outline--badged clr-i-outline-path-4--badged" x="20" y="14" width="2" height="2"/>
                <rect class="clr-i-outline--badged clr-i-outline-path-5--badged" x="26" y="14" width="2" height="2"/>
                <rect class="clr-i-outline--badged clr-i-outline-path-6--badged" x="8" y="19" width="2" height="2"/>
                <rect class="clr-i-outline--badged clr-i-outline-path-7--badged" x="14" y="19" width="2" height="2"/>
                <rect class="clr-i-outline--badged clr-i-outline-path-8--badged" x="20" y="19" width="2" height="2"/>
                <rect class="clr-i-outline--badged clr-i-outline-path-9--badged" x="26" y="19" width="2" height="2"/>
                <rect class="clr-i-outline--badged clr-i-outline-path-10--badged" x="8" y="24" width="2" height="2"/>
                <rect class="clr-i-outline--badged clr-i-outline-path-11--badged" x="14" y="24" width="2" height="2"/>
                <rect class="clr-i-outline--badged clr-i-outline-path-12--badged" x="20" y="24" width="2" height="2"/>
                <rect class="clr-i-outline--badged clr-i-outline-path-13--badged" x="26" y="24" width="2" height="2"/>
                <path class="clr-i-outline--badged clr-i-outline-path-14--badged" d="M10,10a1,1,0,0,0,1-1V3A1,1,0,0,0,9,3V9A1,1,0,0,0,10,10Z"/>
                <path class="clr-i-outline--badged clr-i-outline-path-15--badged" d="M22.5,6H13V8h9.78A7.49,7.49,0,0,1,22.5,6Z"/>
                <circle class="clr-i-outline--badged clr-i-outline-path-16--badged clr-i-badge" cx="30" cy="6" r="5"/>

                <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M33.68,15.4H32V30H4V8H7V6H3.75A1.78,1.78,0,0,0,2,7.81V30.19A1.78,1.78,0,0,0,3.75,32h28.5A1.78,1.78,0,0,0,34,30.19V15.38Z"/>
                <rect class="clr-i-outline--alerted clr-i-outline-path-2--alerted" x="8" y="14" width="2" height="2"/>
                <rect class="clr-i-outline--alerted clr-i-outline-path-3--alerted" x="14" y="14" width="2" height="2"/>
                <rect class="clr-i-outline--alerted clr-i-outline-path-4--alerted" x="8" y="19" width="2" height="2"/>
                <rect class="clr-i-outline--alerted clr-i-outline-path-5--alerted" x="14" y="19" width="2" height="2"/>
                <rect class="clr-i-outline--alerted clr-i-outline-path-6--alerted" x="20" y="19" width="2" height="2"/>
                <rect class="clr-i-outline--alerted clr-i-outline-path-7--alerted" x="26" y="19" width="2" height="2"/>
                <rect class="clr-i-outline--alerted clr-i-outline-path-8--alerted" x="8" y="24" width="2" height="2"/>
                <rect class="clr-i-outline--alerted clr-i-outline-path-9--alerted" x="14" y="24" width="2" height="2"/>
                <rect class="clr-i-outline--alerted clr-i-outline-path-10--alerted" x="20" y="24" width="2" height="2"/>
                <rect class="clr-i-outline--alerted clr-i-outline-path-11--alerted" x="26" y="24" width="2" height="2"/>
                <path class="clr-i-outline--alerted clr-i-outline-path-12--alerted" d="M10,10a1,1,0,0,0,1-1V3A1,1,0,0,0,9,3V9A1,1,0,0,0,10,10Z"/><polygon points="21.29 6 13 6 13 8 20.14 8 21.29 6"/>
                <path class="clr-i-outline--alerted clr-i-outline-path-13--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>

                <path class="clr-i-solid clr-i-solid-path-1" d="M32.25,6h-4V9a2.2,2.2,0,1,1-4.4,0V6H12.2V9A2.2,2.2,0,0,1,7.8,9V6h-4A1.78,1.78,0,0,0,2,7.81V30.19A1.78,1.78,0,0,0,3.75,32h28.5A1.78,1.78,0,0,0,34,30.19V7.81A1.78,1.78,0,0,0,32.25,6ZM10,26H8V24h2Zm0-5H8V19h2Zm0-5H8V14h2Zm6,10H14V24h2Zm0-5H14V19h2Zm0-5H14V14h2Zm6,10H20V24h2Zm0-5H20V19h2Zm0-5H20V14h2Zm6,10H26V24h2Zm0-5H26V19h2Zm0-5H26V14h2Z"/>
                <path class="clr-i-solid clr-i-solid-path-2" d="M10,10a1,1,0,0,0,1-1V3A1,1,0,0,0,9,3V9A1,1,0,0,0,10,10Z"/>
                <path class="clr-i-solid clr-i-solid-path-3" d="M26,10a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V9A1,1,0,0,0,26,10Z"/>

                <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M10,10a1,1,0,0,0,1-1V3A1,1,0,0,0,9,3V9A1,1,0,0,0,10,10Z"/>
                <path class="clr-i-solid--badged clr-i-solid-path-2--badged" d="M30,13.5A7.5,7.5,0,0,1,22.5,6H12.2V9A2.2,2.2,0,0,1,7.8,9V6h-4A1.78,1.78,0,0,0,2,7.81V30.19A1.78,1.78,0,0,0,3.75,32h28.5A1.78,1.78,0,0,0,34,30.19V12.34A7.45,7.45,0,0,1,30,13.5ZM10,26H8V24h2Zm0-5H8V19h2Zm0-5H8V14h2Zm6,10H14V24h2Zm0-5H14V19h2Zm0-5H14V14h2Zm6,10H20V24h2Zm0-5H20V19h2Zm0-5H20V14h2Zm6,10H26V24h2Zm0-5H26V19h2Zm0-5H26V14h2Z"/>
                <circle class="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge" cx="30" cy="6" r="5"/>

                <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M33.68,15.4H22.23A3.68,3.68,0,0,1,19,9.89L21.29,6H12.2V9A2.2,2.2,0,0,1,7.8,9V6h-4A1.78,1.78,0,0,0,2,7.81V30.19A1.78,1.78,0,0,0,3.75,32h28.5A1.78,1.78,0,0,0,34,30.19V15.38ZM10,26H8V24h2Zm0-5H8V19h2Zm0-5H8V14h2Zm6,10H14V24h2Zm0-5H14V19h2Zm0-5H14V14h2Zm6,10H20V24h2Zm0-5H20V19h2Zm6,5H26V24h2Zm0-5H26V19h2Z"/>
                <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted" d="M10,10a1,1,0,0,0,1-1V3A1,1,0,0,0,9,3V9A1,1,0,0,0,10,10Z"/>
                <path class="clr-i-solid--alerted clr-i-solid-path-3--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>

            </svg>
        `,


    "event": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-alert can-badge has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" role="img">
                <title>event</title>

                <path class="clr-i-outline clr-i-outline-path-1" d="M16.17,25.86,10.81,20.5a1,1,0,0,1,1.41-1.41L16.17,23l8.64-8.64a1,1,0,0,1,1.41,1.41Z"/>
                <path class="clr-i-outline clr-i-outline-path-2" d="M32.25,6H29V8h3V30H4V8H7V6H3.75A1.78,1.78,0,0,0,2,7.81V30.19A1.78,1.78,0,0,0,3.75,32h28.5A1.78,1.78,0,0,0,34,30.19V7.81A1.78,1.78,0,0,0,32.25,6Z"/>
                <path class="clr-i-outline clr-i-outline-path-3" d="M10,10a1,1,0,0,0,1-1V3A1,1,0,0,0,9,3V9A1,1,0,0,0,10,10Z"/>
                <path class="clr-i-outline clr-i-outline-path-4" d="M26,10a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V9A1,1,0,0,0,26,10Z"/>
                <rect class="clr-i-outline clr-i-outline-path-5" x="13" y="6" width="10" height="2"/>

                <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M10.81,20.5l5.36,5.36L26.22,15.81a1,1,0,0,0-1.41-1.41L16.17,23l-3.94-3.94a1,1,0,0,0-1.41,1.41Z"/>
                <path class="clr-i-outline--badged clr-i-outline-path-2--badged" d="M10,10a1,1,0,0,0,1-1V3A1,1,0,0,0,9,3V9A1,1,0,0,0,10,10Z"/>
                <path class="clr-i-outline--badged clr-i-outline-path-3--badged" d="M32,13.22V30H4V8H7V6H3.75A1.78,1.78,0,0,0,2,7.81V30.19A1.78,1.78,0,0,0,3.75,32h28.5A1.78,1.78,0,0,0,34,30.19V12.34A7.45,7.45,0,0,1,32,13.22Z"/>
                <path class="clr-i-outline--badged clr-i-outline-path-4--badged" d="M22.5,6H13V8h9.78A7.49,7.49,0,0,1,22.5,6Z"/>
                <circle class="clr-i-outline--badged clr-i-outline-path-5--badged clr-i-badge" cx="30" cy="6" r="5"/>

                <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M10,10a1,1,0,0,0,1-1V3A1,1,0,0,0,9,3V9A1,1,0,0,0,10,10Z"/>
                <path class="clr-i-outline--alerted clr-i-outline-path-2--alerted" d="M10.81,20.5l5.36,5.36L26.22,15.81a1,1,0,0,0,.23-.41H23.8L16.17,23l-3.94-3.94a1,1,0,0,0-1.41,1.41Z"/>
                <polygon class="clr-i-outline--alerted clr-i-outline-path-3--alerted" points="21.29 6 13 6 13 8 20.14 8 21.29 6"/>
                <path class="clr-i-outline--alerted clr-i-outline-path-4--alerted" d="M33.68,15.4H32V30H4V8H7V6H3.75A1.78,1.78,0,0,0,2,7.81V30.19A1.78,1.78,0,0,0,3.75,32h28.5A1.78,1.78,0,0,0,34,30.19V15.38Z"/>
                <path class="clr-i-outline--alerted clr-i-outline-path-5--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>

                <path class="clr-i-solid clr-i-solid-path-1" d="M10,10a1,1,0,0,0,1-1V3A1,1,0,0,0,9,3V9A1,1,0,0,0,10,10Z"/>
                <path class="clr-i-solid clr-i-solid-path-2" d="M26,10a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V9A1,1,0,0,0,26,10Z"/>
                <path class="clr-i-solid clr-i-solid-path-3" d="M32.25,6h-4V9a2.2,2.2,0,0,1-4.4,0V6H12.2V9A2.2,2.2,0,0,1,7.8,9V6h-4A1.78,1.78,0,0,0,2,7.81V30.19A1.78,1.78,0,0,0,3.75,32h28.5A1.78,1.78,0,0,0,34,30.19V7.81A1.78,1.78,0,0,0,32.25,6ZM25.94,16.58l-9.67,9.67L11,20.94A1.36,1.36,0,0,1,12.9,19l3.38,3.38L24,14.66a1.36,1.36,0,1,1,1.93,1.93Z"/>

                <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M10,10a1,1,0,0,0,1-1V3A1,1,0,0,0,9,3V9A1,1,0,0,0,10,10Z"/>
                <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted" d="M33.68,15.4H26.3a1.34,1.34,0,0,1-.36,1.18l-9.67,9.67L11,20.94A1.36,1.36,0,0,1,12.9,19l3.38,3.38,7-7h-1A3.68,3.68,0,0,1,19,9.89L21.29,6H12.2V9A2.2,2.2,0,0,1,7.8,9V6h-4A1.78,1.78,0,0,0,2,7.81V30.19A1.78,1.78,0,0,0,3.75,32h28.5A1.78,1.78,0,0,0,34,30.19V15.38Z"/>
                <path class="clr-i-solid--alerted clr-i-solid-path-3--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>

                <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M10,10a1,1,0,0,0,1-1V3A1,1,0,0,0,9,3V9A1,1,0,0,0,10,10Z"/>
                <path class="clr-i-solid--badged clr-i-solid-path-2--badged" d="M30,13.5A7.5,7.5,0,0,1,22.5,6H12.2V9A2.2,2.2,0,0,1,7.8,9V6h-4A1.78,1.78,0,0,0,2,7.81V30.19A1.78,1.78,0,0,0,3.75,32h28.5A1.78,1.78,0,0,0,34,30.19V12.34A7.45,7.45,0,0,1,30,13.5Zm-4.06,3.08-9.67,9.67L11,20.94A1.36,1.36,0,0,1,12.9,19l3.38,3.38L24,14.66a1.36,1.36,0,1,1,1.93,1.93Z"/>
                <circle class="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge" cx="30" cy="6" r="5"/>
            </svg>
        `,

    "tasks": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-alert can-badge has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" role="img">
                <title>tasks</title>
                <path class="clr-i-outline clr-i-outline-path-1" d="M29.29,34H6.71A1.7,1.7,0,0,1,5,32.31V6.69A1.75,1.75,0,0,1,7,5H9V7H7V32H29V7H27V5h2.25A1.7,1.7,0,0,1,31,6.69V32.31A1.7,1.7,0,0,1,29.29,34Z"/>
                <path class="clr-i-outline clr-i-outline-path-2" d="M16.66,25.76,11.3,20.4A1,1,0,0,1,12.72,19l3.94,3.94,8.64-8.64a1,1,0,0,1,1.41,1.41Z"/>
                <path class="clr-i-outline clr-i-outline-path-3" d="M26,11H10V7.33A2.34,2.34,0,0,1,12.33,5h1.79a4,4,0,0,1,7.75,0h1.79A2.34,2.34,0,0,1,26,7.33ZM12,9H24V7.33A.33.33,0,0,0,23.67,7H20V6a2,2,0,0,0-4,0V7H12.33a.33.33,0,0,0-.33.33Z"/>

                <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M19,9.89,19.56,9H12V7.33A.33.33,0,0,1,12.33,7H16V6a2,2,0,0,1,4,0V7h.71l1.16-2a4,4,0,0,0-7.74,0H12.33A2.34,2.34,0,0,0,10,7.33V11h8.64A3.65,3.65,0,0,1,19,9.89Z"/>
                <path class="clr-i-outline--alerted clr-i-outline-path-2--alerted" d="M24.19,15.4l-7.53,7.53L12.72,19A1,1,0,0,0,11.3,20.4l5.36,5.36L26.71,15.71a1,1,0,0,0,.2-.31Z"/>
                <path class="clr-i-outline--alerted clr-i-outline-path-3--alerted" d="M29,15.4V32H7V7H9V5H7A1.75,1.75,0,0,0,5,6.69V32.31A1.7,1.7,0,0,0,6.71,34H29.29A1.7,1.7,0,0,0,31,32.31V15.4Z"/>
                <path class="clr-i-outline--alerted clr-i-outline-path-4--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>

                <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M12.72,19A1,1,0,0,0,11.3,20.4l5.36,5.36L26.71,15.71a1,1,0,0,0-1.41-1.41l-8.64,8.64Z"/>
                <path class="clr-i-outline--badged clr-i-outline-path-2--badged" d="M23.13,9H12V7.33A.33.33,0,0,1,12.33,7H16V6a2,2,0,0,1,4,0V7h2.57a7.52,7.52,0,0,1-.07-1,7.52,7.52,0,0,1,.07-1h-.7a4,4,0,0,0-7.75,0H12.33A2.34,2.34,0,0,0,10,7.33V11H24.42A7.5,7.5,0,0,1,23.13,9Z"/>
                <path class="clr-i-outline--badged clr-i-outline-path-3--badged" d="M30,13.5a7.52,7.52,0,0,1-1-.07V32H7V7H9V5H7A1.75,1.75,0,0,0,5,6.69V32.31A1.7,1.7,0,0,0,6.71,34H29.29A1.7,1.7,0,0,0,31,32.31V13.43A7.52,7.52,0,0,1,30,13.5Z"/>
                <circle class="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge" cx="30" cy="6" r="5"/>

                <path class="clr-i-solid clr-i-solid-path-1" d="M29.29,4.95h-7.2a4.31,4.31,0,0,0-8.17,0H7A1.75,1.75,0,0,0,5,6.64V32.26a1.7,1.7,0,0,0,1.71,1.69H29.29A1.7,1.7,0,0,0,31,32.26V6.64A1.7,1.7,0,0,0,29.29,4.95Zm-18,3a1,1,0,0,1,1-1h3.44V6.32a2.31,2.31,0,0,1,4.63,0V7h3.44a1,1,0,0,1,1,1V9.8H11.25Zm14.52,9.23-9.12,9.12-5.24-5.24a1.4,1.4,0,0,1,2-2l3.26,3.26,7.14-7.14a1.4,1.4,0,1,1,2,2Z"/>

                <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M25.88,15.4a1.38,1.38,0,0,1-.11,1.81l-9.12,9.12-5.24-5.24a1.4,1.4,0,0,1,2-2l3.26,3.26,7-7H22.23A3.68,3.68,0,0,1,19,9.89l0-.09H11.25V8a1,1,0,0,1,1-1h3.44V6.32a2.31,2.31,0,0,1,4.63,0V7h.42L22,4.76a4.3,4.3,0,0,0-8.09.19H7A1.75,1.75,0,0,0,5,6.64V32.26a1.7,1.7,0,0,0,1.71,1.69H29.29A1.7,1.7,0,0,0,31,32.26V15.4Z"/>
                <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>

                <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M30,13.5a7.49,7.49,0,0,1-6.46-3.7H11.25V8a1,1,0,0,1,1-1h3.44V6.32a2.31,2.31,0,0,1,4.63,0V7h2.26a7.53,7.53,0,0,1-.07-1,7.53,7.53,0,0,1,.08-1.05h-.5a4.31,4.31,0,0,0-8.17,0H7A1.75,1.75,0,0,0,5,6.64V32.26a1.7,1.7,0,0,0,1.71,1.69H29.29A1.7,1.7,0,0,0,31,32.26V13.43A7.52,7.52,0,0,1,30,13.5Zm-4.23,3.71-9.12,9.12-5.24-5.24a1.4,1.4,0,0,1,2-2l3.26,3.26,7.14-7.14a1.4,1.4,0,1,1,2,2Z"/>
                <circle class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" cx="30" cy="6" r="5"/>
            </svg>
        `,

    "flag": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" role="img">
                <title>flag</title>

                <path class="clr-i-outline clr-i-outline-path-1" d="M6,34a1,1,0,0,1-1-1V3A1,1,0,0,1,7,3V33A1,1,0,0,1,6,34Z"/>
                <path class="clr-i-outline clr-i-outline-path-2" d="M30.55,3.82a1,1,0,0,0-1,0,14.9,14.9,0,0,1-6.13,1.16,13.11,13.11,0,0,1-5.18-1.49,12.78,12.78,0,0,0-5-1.45A10.86,10.86,0,0,0,9,2.85V5.08A8.8,8.8,0,0,1,13.25,4a11.22,11.22,0,0,1,4.2,1.28,14.84,14.84,0,0,0,6,1.66A18.75,18.75,0,0,0,29,6.12V18.95a16.16,16.16,0,0,1-5.58.93,13.11,13.11,0,0,1-5.18-1.49,12.78,12.78,0,0,0-5-1.45A10.86,10.86,0,0,0,9,17.79V20a8.8,8.8,0,0,1,4.25-1.08,11.22,11.22,0,0,1,4.2,1.28,14.84,14.84,0,0,0,6,1.66,16.79,16.79,0,0,0,7-1.37,1,1,0,0,0,.55-.89V4.67A1,1,0,0,0,30.55,3.82Z"/>

                <path class="clr-i-solid clr-i-solid-path-1" d="M5.92,2a1,1,0,0,0-1,1V33a1,1,0,0,0,2,0V3A1,1,0,0,0,5.92,2Z"/>
                <path class="clr-i-solid clr-i-solid-path-2" d="M30.5,3.82a1,1,0,0,0-1,0,14.9,14.9,0,0,1-6.13,1.16,13.11,13.11,0,0,1-5.18-1.49A12.78,12.78,0,0,0,13.2,2,10.86,10.86,0,0,0,9,2.85V20a8.8,8.8,0,0,1,4.25-1.08,11.22,11.22,0,0,1,4.2,1.28,14.84,14.84,0,0,0,6,1.66,16.79,16.79,0,0,0,7-1.37,1,1,0,0,0,.55-.89V4.67A1,1,0,0,0,30.5,3.82Z"/>
            </svg>
        `,

    "inbox": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-badge"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" role="img">
            <title>inbox</title>   
            <path d="M12.23,13.09a1,1,0,0,0,0,1.41L18,20.3l5.79-5.79a1,1,0,0,0-1.41-1.41L19,16.47V2A1,1,0,0,0,18,1a1,1,0,0,0-1,1v14.5l-3.38-3.38A1,1,0,0,0,12.23,13.09Z" class="clr-i-outline clr-i-outline-path-1"/>   
            <path d="M29.5,5H22V7h7V21H23.61l-.1.89a5.42,5.42,0,0,1-10.77,0l-.1-.89H7V7h7V5H6.5A1.5,1.5,0,0,0,5,6.5v25A1.5,1.5,0,0,0,6.5,33h23A1.5,1.5,0,0,0,31,31.5V6.5A1.5,1.5,0,0,0,29.5,5ZM29,31H7V23h3.91a7.42,7.42,0,0,0,14.44,0H29Z" class="clr-i-outline clr-i-outline-path-2"/>
            <path d="M12.23,13.09a1,1,0,0,0,0,1.41L18,20.3l5.79-5.79a1,1,0,0,0-1.41-1.41L19,16.47V2A1,1,0,0,0,18,1a1,1,0,0,0-1,1v14.5l-3.38-3.38A1,1,0,0,0,12.23,13.09Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>   
            <path d="M30,13.5a7.52,7.52,0,0,1-1-.07V21H23.61l-.1.89a5.42,5.42,0,0,1-10.77,0l-.1-.89H7V7h7V5H6.5A1.5,1.5,0,0,0,5,6.5v25A1.5,1.5,0,0,0,6.5,33h23A1.5,1.5,0,0,0,31,31.5V13.43A7.52,7.52,0,0,1,30,13.5ZM29,31H7V23h3.91a7.42,7.42,0,0,0,14.44,0H29Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>    
            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge"/>
        </svg>`,


    "heart": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" role="img">
            <title>heart</title>   
            <path d="M18,32.43a1,1,0,0,1-.61-.21C11.83,27.9,8,24.18,5.32,20.51,1.9,15.82,1.12,11.49,3,7.64c1.34-2.75,5.19-5,9.69-3.69A9.87,9.87,0,0,1,18,7.72a9.87,9.87,0,0,1,5.31-3.77c4.49-1.29,8.35.94,9.69,3.69,1.88,3.85,1.1,8.18-2.32,12.87C28,24.18,24.17,27.9,18.61,32.22A1,1,0,0,1,18,32.43ZM10.13,5.58A5.9,5.9,0,0,0,4.8,8.51c-1.55,3.18-.85,6.72,2.14,10.81A57.13,57.13,0,0,0,18,30.16,57.13,57.13,0,0,0,29.06,19.33c3-4.1,3.69-7.64,2.14-10.81-1-2-4-3.59-7.34-2.65a8,8,0,0,0-4.94,4.2,1,1,0,0,1-1.85,0,7.93,7.93,0,0,0-4.94-4.2A7.31,7.31,0,0,0,10.13,5.58Z" class="clr-i-outline clr-i-outline-path-1"/>
            <path d="M33,7.64c-1.34-2.75-5.2-5-9.69-3.69A9.87,9.87,0,0,0,18,7.72a9.87,9.87,0,0,0-5.31-3.77C8.19,2.66,4.34,4.89,3,7.64c-1.88,3.85-1.1,8.18,2.32,12.87C8,24.18,11.83,27.9,17.39,32.22a1,1,0,0,0,1.23,0c5.55-4.31,9.39-8,12.07-11.71C34.1,15.82,34.88,11.49,33,7.64Z" class="clr-i-solid clr-i-solid-path-1"/>
        </svg>`,

    "heart-broken": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" role="img">
            <title>heart-broken</title>   
            <path d="M33,7.64c-1.34-2.75-5.09-5-9.69-3.69a9.87,9.87,0,0,0-6,4.84,18.9,18.9,0,0,0-2.23,5.33l5.28,2.34-4.6,4.37,3.49,4.1,1.52-1.3L18.54,21l5.4-5.13L17.58,13A16.23,16.23,0,0,1,19.75,8.9a7.68,7.68,0,0,1,4.11-3c3.34-.89,6.34.6,7.34,2.65,1.55,3.18.85,6.72-2.14,10.81A57.16,57.16,0,0,1,18,30.16,57.16,57.16,0,0,1,6.94,19.33c-3-4.1-3.69-7.64-2.14-10.81a5.9,5.9,0,0,1,5.33-2.93,7.31,7.31,0,0,1,2,.29,7.7,7.7,0,0,1,3.38,2l.15-.3a10.66,10.66,0,0,1,1-1.41,9.64,9.64,0,0,0-3.94-2.22C8.2,2.66,4.34,4.89,3,7.64c-1.88,3.85-1.1,8.18,2.32,12.87C8,24.18,11.83,27.9,17.39,32.22a1,1,0,0,0,1.23,0c5.55-4.31,9.39-8,12.07-11.71C34.1,15.82,34.88,11.49,33,7.64Z" class="clr-i-outline clr-i-outline-path-1"/>
            <path d="M33,7.64c-1.34-2.75-5.2-5-9.69-3.69A11.55,11.55,0,0,0,18.19,7.5a16.89,16.89,0,0,0-2.48,4.56L22.27,15,16.7,20.26,19,23l-1.57,1.34-3.6-4.22,4.74-4.51-5.44-2.41a19.49,19.49,0,0,1,2.3-5.5,14.77,14.77,0,0,1,1.06-1.54l.06,0a9.66,9.66,0,0,0-3.89-2.18C8.19,2.66,4.34,4.89,3,7.64c-1.88,3.85-1.1,8.18,2.32,12.87C8,24.18,11.83,27.9,17.39,32.22a1,1,0,0,0,1.23,0c5.55-4.31,9.39-8,12.07-11.71C34.1,15.82,34.88,11.49,33,7.64Z" class="clr-i-solid clr-i-solid-path-1"/>
        </svg>`,

    "talk-bubbles": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-badge has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" role="img">
            <title>talk-bubbles</title>   
            <path d="M23,26a1,1,0,0,1-1,1H8c-.22,0-.43.2-.61.33L4,30V14a1,1,0,0,1,1-1H8.86V11H5a3,3,0,0,0-3,3V32a1,1,0,0,0,.56.89,1,1,0,0,0,1-.1L8.71,29H22.15A2.77,2.77,0,0,0,25,26.13V25H23Z" class="clr-i-outline clr-i-outline-path-1"/>   
            <path d="M31,4H14a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3H27.55l4.78,3.71a1,1,0,0,0,1,.11,1,1,0,0,0,.57-.9V7A3,3,0,0,0,31,4ZM32,22.94,28.5,20.21a1,1,0,0,0-.61-.21H14a1,1,0,0,1-1-1V7a1,1,0,0,1,1-1H31A1.1,1.1,0,0,1,32,7.06Z" class="clr-i-outline clr-i-outline-path-2"/>
            <path d="M23,26a1,1,0,0,1-1,1H8c-.22,0-.43.2-.61.33L4,30V14a1,1,0,0,1,1-1H8.86V11H5a3,3,0,0,0-3,3V32a1,1,0,0,0,.56.89,1,1,0,0,0,1-.1L8.71,29H22.15A2.77,2.77,0,0,0,25,26.13V25H23Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>   
            <path d="M32,13.22v9.72L28.5,20.21a1,1,0,0,0-.61-.21H14a1,1,0,0,1-1-1V7a1,1,0,0,1,1-1H22.5a7.49,7.49,0,0,1,.28-2H14a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3H27.55l4.78,3.71a1,1,0,0,0,1,.11,1,1,0,0,0,.57-.9V12.37A7.45,7.45,0,0,1,32,13.22Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>    
            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge"/>
            <path d="M8,19V11H5a3,3,0,0,0-3,3V32a1,1,0,0,0,.56.89,1,1,0,0,0,1-.1L8.71,29H22.15A2.77,2.77,0,0,0,25,26.13V25H14A6,6,0,0,1,8,19Z" class="clr-i-solid clr-i-solid-path-1"/>   
            <path d="M31,4H14a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3H27.55l4.78,3.71a1,1,0,0,0,1,.11,1,1,0,0,0,.57-.9V7A3,3,0,0,0,31,4Z" class="clr-i-solid clr-i-solid-path-2"/>
            <path d="M8,19V11H5a3,3,0,0,0-3,3V32a1,1,0,0,0,.56.89,1,1,0,0,0,1-.1L8.71,29H22.15A2.77,2.77,0,0,0,25,26.13V25H14A6,6,0,0,1,8,19Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>   
            <path d="M30,13.5A7.48,7.48,0,0,1,22.78,4H14a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3H27.55l4.78,3.71a1,1,0,0,0,1,.11,1,1,0,0,0,.57-.9V12.37A7.45,7.45,0,0,1,30,13.5Z" class="clr-i-solid--badged clr-i-solid-path-2--badged"/>    
            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge"/>
        </svg>`,

    "chat-bubble": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" class="can-badge has-solid" role="img">
            <title>chat-bubble</title>

            <path d="M18,2.5c-8.82,0-16,6.28-16,14s7.18,14,16,14a18,18,0,0,0,4.88-.68l5.53,3.52a1,1,0,0,0,1.54-.84l0-6.73a13,13,0,0,0,4-9.27C34,8.78,26.82,2.5,18,2.5ZM28.29,24.61a1,1,0,0,0-.32.73l0,5.34-4.38-2.79a1,1,0,0,0-.83-.11A16,16,0,0,1,18,28.5c-7.72,0-14-5.38-14-12s6.28-12,14-12,14,5.38,14,12A11.08,11.08,0,0,1,28.29,24.61Z" class="clr-i-outline clr-i-outline-path-1" />
            <path d="M25,15.5H11a1,1,0,0,0,0,2H25a1,1,0,0,0,0-2Z" class="clr-i-outline clr-i-outline-path-2" />
            <path d="M21.75,20.5h-7.5a1,1,0,0,0,0,2h7.5a1,1,0,0,0,0-2Z" class="clr-i-outline clr-i-outline-path-3" />
            <path d="M11.28,12.5H24.72a1,1,0,0,0,0-2H11.28a1,1,0,0,0,0,2Z" class="clr-i-outline clr-i-outline-path-4" />
            <path d="M33.38,12.69a7.43,7.43,0,0,1-1.89.66A10.35,10.35,0,0,1,32,16.5a11.08,11.08,0,0,1-3.71,8.11,1,1,0,0,0-.32.73l0,5.34-4.38-2.79a1,1,0,0,0-.83-.11A16,16,0,0,1,18,28.5c-7.72,0-14-5.38-14-12s6.28-12,14-12a16,16,0,0,1,4.55.66A7.44,7.44,0,0,1,23,3.22a18,18,0,0,0-5-.72c-8.82,0-16,6.28-16,14s7.18,14,16,14a18,18,0,0,0,4.88-.68l5.53,3.52a1,1,0,0,0,1.54-.84l0-6.73a13,13,0,0,0,4-9.27A12.32,12.32,0,0,0,33.38,12.69Z" class="clr-i-outline--badged clr-i-outline-path-1--badged" />
            <path d="M11,15.5a1,1,0,0,0,0,2H25a1,1,0,0,0,0-2Z" class="clr-i-outline--badged clr-i-outline-path-2--badged" />
            <path d="M14.25,20.5a1,1,0,0,0,0,2h7.5a1,1,0,0,0,0-2Z" class="clr-i-outline--badged clr-i-outline-path-3--badged" />
            <path d="M10.28,11.5a1,1,0,0,0,1,1H24.72a1,1,0,0,0,.83-.47A7.53,7.53,0,0,1,24,10.5H11.28A1,1,0,0,0,10.28,11.5Z" class="clr-i-outline--badged clr-i-outline-path-4--badged" />
            <circle cx="30" cy="6" r="5"  class="clr-i-outline--badged clr-i-outline-path-5--badged clr-i-badge" />
            <path d="M18,2.5c-8.82,0-16,6.28-16,14s7.18,14,16,14a18,18,0,0,0,4.88-.68l5.53,3.52a1,1,0,0,0,1.54-.84l0-6.73a13,13,0,0,0,4-9.27C34,8.78,26.82,2.5,18,2.5Zm8,14a1,1,0,0,1-1,1H11a1,1,0,0,1,0-2H25A1,1,0,0,1,26,16.5Zm-3.25,5a1,1,0,0,1-1,1h-7.5a1,1,0,0,1,0-2h7.5A1,1,0,0,1,22.75,21.5Zm-12.47-10a1,1,0,0,1,1-1H24.72a1,1,0,0,1,0,2H11.28A1,1,0,0,1,10.28,11.5Z" class="clr-i-solid clr-i-solid-path-1" />
            <path d="M30,13.25a7.46,7.46,0,0,1-4.35-1.4,1,1,0,0,1-.93.65H11.28a1,1,0,0,1,0-2H24.2A7.46,7.46,0,0,1,23,3.2a18,18,0,0,0-5-.7c-8.82,0-16,6.28-16,14s7.18,14,16,14a18,18,0,0,0,4.88-.68l5.53,3.52a1,1,0,0,0,1.54-.84l0-6.73a13,13,0,0,0,4-9.27,12.34,12.34,0,0,0-.68-4A7.46,7.46,0,0,1,30,13.25ZM21.75,22.5h-7.5a1,1,0,0,1,0-2h7.5a1,1,0,0,1,0,2Zm3.25-5H11a1,1,0,0,1,0-2H25a1,1,0,0,1,0,2Z" class="clr-i-solid--badged clr-i-solid-path-1--badged" />
            <circle cx="30" cy="5.75" r="5"  class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" />
        </svg>`,

    "picture": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-badge has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" role="img">
            <title>picture</title>   
            <path d="M32,4H4A2,2,0,0,0,2,6V30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V6A2,2,0,0,0,32,4ZM4,30V6H32V30Z" class="clr-i-outline clr-i-outline-path-1"/>   
            <path d="M8.92,14a3,3,0,1,0-3-3A3,3,0,0,0,8.92,14Zm0-4.6A1.6,1.6,0,1,1,7.33,11,1.6,1.6,0,0,1,8.92,9.41Z" class="clr-i-outline clr-i-outline-path-2"/>   
            <path d="M22.78,15.37l-5.4,5.4-4-4a1,1,0,0,0-1.41,0L5.92,22.9v2.83l6.79-6.79L16,22.18l-3.75,3.75H15l8.45-8.45L30,24V21.18l-5.81-5.81A1,1,0,0,0,22.78,15.37Z" class="clr-i-outline clr-i-outline-path-3"/>
            <path d="M11.93,11a3,3,0,1,0-3,3A3,3,0,0,0,11.93,11Zm-4.6,0a1.6,1.6,0,1,1,1.6,1.6A1.6,1.6,0,0,1,7.33,11Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>   
            <path d="M17.38,20.77l-4-4a1,1,0,0,0-1.41,0L5.92,22.9v2.83l6.79-6.79L16,22.18l-3.75,3.75H15l8.45-8.45L30,24V21.18l-5.81-5.81a1,1,0,0,0-1.41,0Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>   
            <path d="M32,13.22V30H4V6H22.5a7.49,7.49,0,0,1,.28-2H4A2,2,0,0,0,2,6V30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V12.34A7.45,7.45,0,0,1,32,13.22Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"/>    
            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge"/>
            <path d="M32,4H4A2,2,0,0,0,2,6V30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V6A2,2,0,0,0,32,4ZM8.92,8a3,3,0,1,1-3,3A3,3,0,0,1,8.92,8ZM6,27V22.9l6-6.08a1,1,0,0,1,1.41,0L16,19.35,8.32,27Zm24,0H11.15l6.23-6.23,5.4-5.4a1,1,0,0,1,1.41,0L30,21.18Z" class="clr-i-solid clr-i-solid-path-1"/>
            <path d="M30,13.5A7.48,7.48,0,0,1,22.78,4H4A2,2,0,0,0,2,6V30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V12.34A7.46,7.46,0,0,1,30,13.5ZM8.92,8a3,3,0,1,1-3,3A3,3,0,0,1,8.92,8ZM6,27V22.9l6-6.08a1,1,0,0,1,1.41,0L16,19.35,8.32,27Zm24,0H11.15l6.23-6.23,5.4-5.4a1,1,0,0,1,1.41,0L30,21.18Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>    
            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge"/>
        </svg>`,

    "happy-face": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" role="img">
            <title>happy-face</title>   
            <path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,30A14,14,0,1,1,32,18,14,14,0,0,1,18,32Z" class="clr-i-outline clr-i-outline-path-1"/>    
            <circle cx="10.89" cy="13.89" r="2" class="clr-i-outline clr-i-outline-path-2"/>    
            <circle cx="25.05" cy="13.89" r="2" class="clr-i-outline clr-i-outline-path-3"/>   
            <path d="M18.13,28.21a8.67,8.67,0,0,0,8.26-6H9.87A8.67,8.67,0,0,0,18.13,28.21Z" class="clr-i-outline clr-i-outline-path-4"/>
            <path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2ZM8.89,13.89a2,2,0,1,1,2,2A2,2,0,0,1,8.89,13.89Zm9.24,14.32a8.67,8.67,0,0,1-8.26-6H26.38A8.67,8.67,0,0,1,18.13,28.21Zm6.93-12.32a2,2,0,1,1,2-2A2,2,0,0,1,25.05,15.89Z" class="clr-i-solid clr-i-solid-path-1"/>
        </svg>`,

    "neutral-face": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" role="img">
            <title>neutral-face</title>   
            <path d="M24.05,22.06h-12a1,1,0,0,0,0,2h12a1,1,0,0,0,0-2Z" class="clr-i-outline clr-i-outline-path-1"/>   
            <path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,30A14,14,0,1,1,32,18,14,14,0,0,1,18,32Z" class="clr-i-outline clr-i-outline-path-2"/>    
            <circle cx="25.16" cy="14.28" r="1.8" class="clr-i-outline clr-i-outline-path-3"/>    
            <circle cx="11.16" cy="14.28" r="1.8" class="clr-i-outline clr-i-outline-path-4"/>
            <path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm7.05,21.06a1,1,0,0,1-1,1h-12a1,1,0,0,1,0-2h12A1,1,0,0,1,25.05,23.06ZM27,14.28a1.8,1.8,0,1,1-1.8-1.8A1.8,1.8,0,0,1,27,14.28Zm-15.8,1.8a1.8,1.8,0,1,1,1.8-1.8A1.8,1.8,0,0,1,11.16,16.08Z" class="clr-i-solid clr-i-solid-path-1"/>
        </svg>`,

    "sad-face": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" role="img">
            <title>sad-face</title>
            <path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,30A14,14,0,1,1,32,18,14,14,0,0,1,18,32Z" class="clr-i-outline clr-i-outline-path-1"/>
            <circle cx="25.16" cy="14.28" r="1.8" class="clr-i-outline clr-i-outline-path-2"/>
            <circle cx="11.41" cy="14.28" r="1.8" class="clr-i-outline clr-i-outline-path-3"/>
            <path d="M18.16,20a9,9,0,0,0-7.33,3.78,1,1,0,1,0,1.63,1.16,7,7,0,0,1,11.31-.13,1,1,0,0,0,1.6-1.2A9,9,0,0,0,18.16,20Z" class="clr-i-outline clr-i-outline-path-4"/>
            <path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm9,12.28a1.8,1.8,0,1,1-1.8-1.8A1.8,1.8,0,0,1,27,14.28Zm-15.55,1.8a1.8,1.8,0,1,1,1.8-1.8A1.8,1.8,0,0,1,11.41,16.08Zm14,7.53a1,1,0,0,1-1.6,1.2,7,7,0,0,0-11.31.13,1,1,0,1,1-1.63-1.16,9,9,0,0,1,14.54-.17Z" class="clr-i-solid clr-i-solid-path-1"/>
        </svg>`,

    "thumbs-up": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" class="has-solid" role="img">
            <title>thumb-up</title>
    
            <path d="M24,26c-2.92,1.82-7.3,4-9.37,4h-6a16.68,16.68,0,0,1-3.31-6.08A26.71,26.71,0,0,1,4,16h9V6a2.05,2.05,0,0,1,1.26-1.69c.77,2,2.62,6.57,4.23,8.72A11.39,11.39,0,0,0,24,16.91V14.78a9.13,9.13,0,0,1-3.91-3c-1.88-2.51-4.29-9.11-4.31-9.17A1,1,0,0,0,14.59,2C13.25,2.38,11,3.6,11,6v8H3a1,1,0,0,0-1,1,29,29,0,0,0,1.4,9.62c1.89,5.4,4.1,7.14,4.2,7.22a1,1,0,0,0,.61.21h6.42c2.43,0,6.55-2,9.37-3.63Z" class="clr-i-outline clr-i-outline-path-1" />
            <path d="M34,31H27a1,1,0,0,1-1-1V14a1,1,0,0,1,1-1h7Zm-6-2h4V15H28Z" class="clr-i-outline clr-i-outline-path-2" />
            <path d="M19.63,12.12C17.51,9.28,14.88,2,14.88,2S12,2.83,12,5.25V15H2.23a29.46,29.46,0,0,0,1.44,9.74C5.61,30.27,7.8,32,7.8,32h6.86C16.9,32,21,30.06,24,28.31V15.51A10.84,10.84,0,0,1,19.63,12.12Z" class="clr-i-solid clr-i-solid-path-1" />
            <path d="M27,13a1,1,0,0,0-1,1V30a1,1,0,0,0,1,1h7V13Z" class="clr-i-solid clr-i-solid-path-2" />
        </svg>`,

    "thumbs-down": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" class="has-solid" role="img">
            <title>thumb-down</title>
    
            <path d="M12,10c2.92-1.82,7.3-4,9.37-4h6a16.68,16.68,0,0,1,3.31,6.08A26.71,26.71,0,0,1,32,20H23V30a2.05,2.05,0,0,1-1.26,1.69c-.77-2-2.62-6.57-4.23-8.72A11.39,11.39,0,0,0,12,19.09v2.13a9.13,9.13,0,0,1,3.91,3c1.88,2.51,4.29,9.11,4.31,9.17a1,1,0,0,0,1.19.63C22.75,33.62,25,32.4,25,30V22h8a1,1,0,0,0,1-1,29,29,0,0,0-1.4-9.62c-1.89-5.4-4.1-7.14-4.2-7.22A1,1,0,0,0,27.79,4H21.37C18.94,4,14.83,6,12,7.63Z" class="clr-i-outline clr-i-outline-path-1" />
            <path d="M2,5H9a1,1,0,0,1,1,1V22a1,1,0,0,1-1,1H2ZM8,7H4V21H8Z" class="clr-i-outline clr-i-outline-path-2" />
            <path d="M16.37,23.84c2.12,2.84,4.76,10.07,4.76,10.07S24,33.13,24,30.71V21h9.77a29.46,29.46,0,0,0-1.44-9.74C30.39,5.68,28.2,4,28.2,4H21.35C19.1,4,15,5.9,12,7.65v12.8A10.84,10.84,0,0,1,16.37,23.84Z" class="clr-i-solid clr-i-solid-path-1" />
            <path d="M9,23a1,1,0,0,0,1-1V6A1,1,0,0,0,9,5H2V23Z" class="clr-i-solid clr-i-solid-path-2" />
        </svg>`


};

Object.defineProperty(socialShapes, "favorite", descriptorConfig(socialShapes.star));
Object.defineProperty(socialShapes, "email", descriptorConfig(socialShapes.envelope));
Object.defineProperty(socialShapes, "date", descriptorConfig(socialShapes.calendar));

if (typeof window !== "undefined" && window.hasOwnProperty("ClarityIcons")) {
    window.ClarityIcons.add(socialShapes);
}

export {socialShapes as SocialShapes};
