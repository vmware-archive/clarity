/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

/* tslint:disable:max-line-length */
const technologyShapes: any = {


    "line-chart": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-badge has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>line chart</title>

                <path class="clr-i-outline clr-i-outline-path-1" d="M32,5H4A2,2,0,0,0,2,7V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V7A2,2,0,0,0,32,5ZM4,29V7H32V29Z"/>
                <polygon class="clr-i-outline clr-i-outline-path-2" points="22.28 25.5 15.61 15.56 9.65 24.28 5.42 20.53 6.75 19.04 9.28 21.28 15.63 12 22.38 22.06 28.97 13.35 30.57 14.55 22.28 25.5"/>

                <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M32,13.22V29H4V7H22.57a7.52,7.52,0,0,1-.07-1,7.52,7.52,0,0,1,.07-1H4A2,2,0,0,0,2,7V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V12.34A7.45,7.45,0,0,1,32,13.22Z"/>
                <polygon class="clr-i-outline--badged clr-i-outline-path-2--badged" points="15.63 12 9.28 21.28 6.75 19.04 5.42 20.53 9.65 24.28 15.61 15.56 22.28 25.5 30.57 14.55 28.97 13.35 22.38 22.06 15.63 12"/>
                <circle class="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge" cx="30" cy="6" r="5"/>

                <path class="clr-i-solid clr-i-solid-path-1" d="M32,5H4A2,2,0,0,0,2,7V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V7A2,2,0,0,0,32,5ZM22.56,25.94l-7.1-10.58L9.12,24.64l-4.5-4L6,19.05l2.7,2.39,6.76-9.88,7.19,10.71,7-9.27,1.7,1.28Z"/>

                <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M30.32,13.48l1.06.8L22.56,25.94l-7.1-10.58L9.12,24.64l-4.5-4L6,19.05l2.7,2.39,6.76-9.88,7.19,10.71,6.66-8.81A7.44,7.44,0,0,1,22.57,5H4A2,2,0,0,0,2,7V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V12.34A7.45,7.45,0,0,1,30.32,13.48Z"/>
                <circle class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" cx="30" cy="6" r="5"/>
            </svg>
        `,

    get "analytics"() {
        return this[ "line-chart" ];
    },

    "dashboard": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-badge has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>dashboard</title>

                <path class="clr-i-outline clr-i-outline-path-1" d="M25.18,12.32l-5.91,5.81a3,3,0,1,0,1.41,1.42l5.92-5.81Z"/>
                <path class="clr-i-outline clr-i-outline-path-2" d="M18,4.25A16.49,16.49,0,0,0,5.4,31.4l.3.35H30.3l.3-.35A16.49,16.49,0,0,0,18,4.25Zm11.34,25.5H6.66a14.43,14.43,0,0,1-3.11-7.84H7v-2H3.55A14.41,14.41,0,0,1,7,11.29l2.45,2.45,1.41-1.41L8.43,9.87A14.41,14.41,0,0,1,17,6.29v3.5h2V6.3a14.47,14.47,0,0,1,13.4,13.61H28.92v2h3.53A14.43,14.43,0,0,1,29.34,29.75Z"/>

                <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M15.85,18.69a3,3,0,1,0,4.83.85l5.92-5.81-1.41-1.41-5.91,5.81A3,3,0,0,0,15.85,18.69Z"/>
                <path class="clr-i-outline--badged clr-i-outline-path-2--badged" d="M32.58,13a7.45,7.45,0,0,1-2.06.44,14.4,14.4,0,0,1,1.93,6.43H28.92v2h3.53a14.43,14.43,0,0,1-3.11,7.84H6.66a14.43,14.43,0,0,1-3.11-7.84H7v-2H3.55A14.41,14.41,0,0,1,7,11.29l2.45,2.45,1.41-1.41L8.43,9.87A14.41,14.41,0,0,1,17,6.29v3.5h2V6.3A14.41,14.41,0,0,1,22.58,7a7.52,7.52,0,0,1-.08-1,7.52,7.52,0,0,1,.09-1.09A16.49,16.49,0,0,0,5.4,31.4l.3.35H30.3l.3-.35a16.45,16.45,0,0,0,2-18.36Z"/>
                <circle class="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge" cx="30" cy="6" r="5"/>

                <path class="clr-i-solid clr-i-solid-path-1" d="M18,4.25A16.49,16.49,0,0,0,5.4,31.4l.3.35H30.3l.3-.35A16.49,16.49,0,0,0,18,4.25Zm8.6,9.48-5.92,5.81a3,3,0,1,1-1.41-1.42l5.91-5.81Zm-23,6.17H7v2H3.56c0-.39-.05-.77-.05-1.17S3.53,20.18,3.55,19.9Zm4.88-10,2.46,2.46L9.47,13.74,7,11.29A14.57,14.57,0,0,1,8.43,9.87ZM19,9.79H17V6.29c.32,0,.63,0,1,0s.7,0,1,.05ZM32.49,20.74c0,.39,0,.79-.05,1.17H28.92v-2h3.53C32.47,20.18,32.49,20.46,32.49,20.74Z"/>

                <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M32.58,13a7.46,7.46,0,0,1-10-8.12A16.49,16.49,0,0,0,5.4,31.4l.3.35H30.3l.3-.35a16.45,16.45,0,0,0,2-18.36ZM17,6.29c.32,0,.63,0,1,0s.7,0,1,.05v3.5H17ZM7,21.91H3.56c0-.39-.05-.77-.05-1.17s0-.56,0-.83H7Zm2.51-8.16L7,11.29A14.57,14.57,0,0,1,8.43,9.87l2.46,2.46Zm10.62,9.19a3,3,0,1,1-.82-4.81l5.91-5.81,1.41,1.41-5.92,5.81A3,3,0,0,1,20.09,22.93Zm12.35-1H28.92v-2h3.53c0,.28,0,.55,0,.83S32.47,21.52,32.44,21.91Z"/>
                <circle class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" cx="30" cy="6" r="5"/>
            </svg>
        `,

    "host": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-alert can-badge has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>host</title>

                <path class="clr-i-outline clr-i-outline-path-1" d="M18,24.3a2.48,2.48,0,1,0,2.48,2.47A2.48,2.48,0,0,0,18,24.3Zm0,3.6a1.13,1.13,0,1,1,1.13-1.12A1.13,1.13,0,0,1,18,27.9Z"/><rect x="13.5" y="20.7" width="9" height="1.44"/>
                <path class="clr-i-outline clr-i-outline-path-2" d="M25.65,3.6H10.35A1.35,1.35,0,0,0,9,4.95V32.4H27V4.95A1.35,1.35,0,0,0,25.65,3.6Zm-.45,27H10.8V5.4H25.2Z"/>
                <rect class="clr-i-outline clr-i-outline-path-3" x="12.6" y="7.2" width="10.8" height="1.44"/>
                <rect class="clr-i-outline clr-i-outline-path-4" x="12.6" y="10.8" width="10.8" height="1.44"/>

                <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M15.2,27.8c0,1.5,1.2,2.8,2.8,2.8s2.8-1.2,2.8-2.8S19.5,25,18,25S15.2,26.2,15.2,27.8z M19.2,27.8c0,0.7-0.6,1.2-1.2,1.2s-1.2-0.6-1.2-1.2s0.6-1.2,1.2-1.2S19.2,27.1,19.2,27.8z"/>
                <rect class="clr-i-outline--alerted clr-i-outline-path-2--alerted" x="13" y="21" width="10" height="1.6"/>
                <polygon class="clr-i-outline--alerted clr-i-outline-path-3--alerted" points="21.3,6 12,6 12,7.6 20.4,7.6"/>
                <path class="clr-i-outline--alerted clr-i-outline-path-4--alerted" d="M12,11.6h6.6c0-0.6,0.2-1.1,0.4-1.6h-7V11.6z"/>
                <path class="clr-i-outline--alerted clr-i-outline-path-5--alerted" d="M26,15.4V32H10V4h12.5l1.1-2H9.5C8.7,2,8,2.7,8,3.5V34h20V15.4H26z"/>
                <path class="clr-i-outline--alerted clr-i-outline-path-6--alerted clr-i-alert" d="M26.9,1.1L21.1,11c-0.4,0.6-0.2,1.4,0.3,1.8c0.2,0.2,0.5,0.2,0.8,0.2h11.5c0.7,0,1.3-0.5,1.3-1.2c0-0.3-0.1-0.5-0.2-0.8l-5.7-9.9c-0.4-0.6-1.1-0.8-1.8-0.5C27.1,0.8,27,1,26.9,1.1z"/>

                <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M15.2,27.8c0,1.5,1.2,2.8,2.8,2.8s2.8-1.2,2.8-2.8S19.5,25,18,25S15.2,26.2,15.2,27.8z M19.2,27.8c0,0.7-0.6,1.2-1.2,1.2s-1.2-0.6-1.2-1.2s0.6-1.2,1.2-1.2S19.2,27.1,19.2,27.8z"/>
                <rect class="clr-i-outline--badged clr-i-outline-path-2--badged" x="13" y="21" width="10" height="1.6"/>
                <path class="clr-i-outline--badged clr-i-outline-path-3--badged" d="M24,10.5c-0.1-0.2-0.2-0.3-0.3-0.5H12v1.6h12V10.5z"/>
                <path class="clr-i-outline--badged clr-i-outline-path-4--badged" d="M12,6v1.6h10.7c-0.1-0.5-0.2-1.1-0.2-1.6H12z"/>
                <path class="clr-i-outline--badged clr-i-outline-path-5--badged" d="M26,12.3V32H10V4h12.8c0.2-0.7,0.5-1.4,0.9-2H9.5C8.7,2,8,2.7,8,3.5V34h20V13.2C27.3,13,26.6,12.7,26,12.3z"/>
                <circle class="clr-i-outline--badged clr-i-outline-path-6--badged clr-i-badge" cx="30" cy="6" r="5"/>

                <path class="clr-i-solid clr-i-solid-path-1" d="M26.5,2h-17C8.7,2,8,2.7,8,3.5V34h20V3.5C28,2.7,27.3,2,26.5,2z M18,30.5c-1.5,0-2.8-1.2-2.8-2.8S16.5,25,18,25s2.8,1.2,2.8,2.8S19.5,30.5,18,30.5z M23,22.6H13V21h10V22.6z M24,11.6H12V10h12V11.6z M24,7.6H12V6h12V7.6z"/>
                <circle class="clr-i-solid clr-i-solid-path-2" cx="18" cy="27.8" r="1.2"/>

                <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M22.2,15.3c-2,0-3.7-1.6-3.7-3.7H12V10h6.9c0-0.1,0.1-0.2,0.1-0.2l1.2-2.2H12V6h9.2l2.3-4h-14C8.7,2,8,2.7,8,3.5V34h20V15.3H22.2z M18,30.5c-1.5,0-2.8-1.2-2.8-2.8S16.5,25,18,25s2.8,1.2,2.8,2.8S19.5,30.5,18,30.5z M23,22.6H13V21h10V22.6z"/>
                <circle class="clr-i-solid--alerted clr-i-solid-path-2--alerted" cx="18" cy="27.8" r="1.2"/>
                <path class="clr-i-solid--alerted clr-i-solid-path-3--alerted clr-i-alert" d="M26.9,1l-5.7,9.9c-0.3,0.6-0.1,1.4,0.5,1.7c0.2,0.1,0.4,0.2,0.6,0.2h11.4c0.7,0,1.3-0.6,1.3-1.3c0-0.2-0.1-0.4-0.2-0.6L29.1,1c-0.4-0.6-1.1-0.8-1.8-0.5C27.1,0.7,27,0.8,26.9,1z"/>

                <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M24,10.3v1.2H12V10h11.8c-0.5-0.7-0.8-1.5-1-2.4H12V6h10.5c0,0,0-0.1,0-0.1c0-1.4,0.4-2.7,1.1-3.9H9.5C8.7,2,8,2.7,8,3.5V34h20V13.1C26.4,12.6,25,11.7,24,10.3z M18,30.5c-1.5,0-2.8-1.2-2.8-2.8S16.5,25,18,25s2.8,1.2,2.8,2.8S19.5,30.5,18,30.5zM23,22.6H13V21h10V22.6z"/>
                <circle class="clr-i-solid--badged clr-i-solid-path-2--badged" cx="18" cy="27.8" r="1.2"/>
                <circle class="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge" cx="30" cy="5.9" r="5"/>
            </svg>
        `,

    get "server"() {
        return this[ "host" ];
    },

    "storage": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-alert can-badge has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>storage</title>

                <path class="clr-i-outline clr-i-outline-path-1" d="M33,6.69h0c-.18-3.41-9.47-4.33-15-4.33S3,3.29,3,6.78V29.37c0,3.49,9.43,4.43,15,4.43s15-.93,15-4.43V6.78s0,0,0,0S33,6.7,33,6.69Zm-2,7.56c-.33.86-5.06,2.45-13,2.45A37.45,37.45,0,0,1,7,15.34v2.08A43.32,43.32,0,0,0,18,18.7c4,0,9.93-.48,13-2v5.17c-.33.86-5.06,2.45-13,2.45A37.45,37.45,0,0,1,7,22.92V25a43.32,43.32,0,0,0,11,1.28c4,0,9.93-.48,13-2v5.1c-.35.86-5.08,2.45-13,2.45S5.3,30.2,5,29.37V6.82C5.3,6,10,4.36,18,4.36c7.77,0,12.46,1.53,13,2.37-.52.87-5.21,2.39-13,2.39A37.6,37.6,0,0,1,7,7.76V9.85a43.53,43.53,0,0,0,11,1.27c4,0,9.93-.48,13-2Z"/>

                <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M19.51,9.09,18,9.11A37.6,37.6,0,0,1,7,7.76V9.85a43.53,43.53,0,0,0,11,1.27h.61A3.66,3.66,0,0,1,19,9.89Z"/>
                <path class="clr-i-outline--alerted clr-i-outline-path-2--alerted" d="M28.83,15.4A38.37,38.37,0,0,1,18,16.7,37.45,37.45,0,0,1,7,15.34v2.08A43.33,43.33,0,0,0,18,18.7c4,0,9.93-.48,13-2v5.17c-.33.86-5.06,2.45-13,2.45A37.45,37.45,0,0,1,7,22.92V25a43.33,43.33,0,0,0,11,1.28c4,0,9.93-.48,13-2v5.1c-.35.86-5.08,2.45-13,2.45S5.3,30.2,5,29.37V6.82C5.3,6,10,4.36,18,4.36c1.5,0,2.89.06,4.15.16l1.1-1.9c-1.86-.18-3.7-.26-5.25-.26-5.57,0-15,.93-15,4.43V29.37c0,3.49,9.43,4.43,15,4.43s15-.93,15-4.43v-14Z"/>
                <path class="clr-i-outline--alerted clr-i-outline-path-3--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>

                <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M7,7.76V9.85a43.53,43.53,0,0,0,11,1.27,54.82,54.82,0,0,0,6.2-.36,7.5,7.5,0,0,1-1.13-1.88c-1.5.15-3.2.24-5.07.24A37.6,37.6,0,0,1,7,7.76Z"/>
                <path class="clr-i-outline--badged clr-i-outline-path-2--badged" d="M31,13.43v.82c-.33.86-5.06,2.45-13,2.45A37.45,37.45,0,0,1,7,15.34v2.08A43.33,43.33,0,0,0,18,18.7c4,0,9.93-.48,13-2v5.17c-.33.86-5.06,2.45-13,2.45A37.45,37.45,0,0,1,7,22.92V25a43.33,43.33,0,0,0,11,1.28c4,0,9.93-.48,13-2v5.1c-.35.86-5.08,2.45-13,2.45S5.3,30.2,5,29.37V6.82C5.3,6,10,4.36,18,4.36c1.7,0,3.25.08,4.64.2a7.44,7.44,0,0,1,.67-1.94c-1.88-.18-3.75-.26-5.31-.26-5.57,0-15,.93-15,4.43V29.37c0,3.49,9.43,4.43,15,4.43s15-.93,15-4.43V12.87A7.45,7.45,0,0,1,31,13.43Z"/>
                <circle class="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge" cx="30" cy="6" r="5"/>

                <path class="clr-i-solid clr-i-solid-path-1" d="M17.91,18.28c8.08,0,14.66-1.74,15.09-3.94V8.59c-.43,2.2-7,3.94-15.09,3.94A39.4,39.4,0,0,1,6.25,11V9a39.4,39.4,0,0,0,11.66,1.51C26,10.53,32.52,8.79,33,6.61h0C32.8,3.2,23.52,2.28,18,2.28S3,3.21,3,6.71V29.29c0,3.49,9.43,4.43,15,4.43s15-.93,15-4.43V24.09C32.57,26.28,26,28,17.91,28A39.4,39.4,0,0,1,6.25,26.52v-2A39.4,39.4,0,0,0,17.91,26C26,26,32.57,24.28,33,22.09V16.34c-.43,2.2-7,3.94-15.09,3.94A39.4,39.4,0,0,1,6.25,18.77v-2A39.4,39.4,0,0,0,17.91,18.28Z"/>

                <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M17.91,20.28A39.4,39.4,0,0,1,6.25,18.77v-2a39.4,39.4,0,0,0,11.66,1.51c6.9,0,12.7-1.27,14.51-3H22.23a3.67,3.67,0,0,1-3.55-2.75h-.77A39.4,39.4,0,0,1,6.25,11V9a39.4,39.4,0,0,0,11.66,1.51h.82A3.64,3.64,0,0,1,19,9.75l4.17-7.22c-1.85-.18-3.68-.25-5.21-.25-5.57,0-15,.93-15,4.43V29.29c0,3.49,9.43,4.43,15,4.43s15-.93,15-4.43V24.09C32.57,26.28,26,28,17.91,28A39.4,39.4,0,0,1,6.25,26.52v-2A39.4,39.4,0,0,0,17.91,26C26,26,32.57,24.28,33,22.09V16.34C32.57,18.53,26,20.28,17.91,20.28Z"/>
                <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert" d="M26.85,1l-5.72,9.91a1.28,1.28,0,0,0,1.1,1.91H33.68a1.28,1.28,0,0,0,1.1-1.91L29.06,1A1.28,1.28,0,0,0,26.85,1Z"/>

                <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M17.91,18.28c8.08,0,14.66-1.74,15.09-3.94v-1.6a7.47,7.47,0,0,1-7.38-.8,48.3,48.3,0,0,1-7.71.59A39.4,39.4,0,0,1,6.25,11V9a39.4,39.4,0,0,0,11.66,1.51,51,51,0,0,0,6-.34,7.46,7.46,0,0,1-.59-7.65c-1.87-.18-3.73-.26-5.28-.26-5.57,0-15,.93-15,4.43V29.29c0,3.49,9.43,4.43,15,4.43s15-.93,15-4.43V24.09C32.57,26.28,26,28,17.91,28A39.4,39.4,0,0,1,6.25,26.52v-2A39.4,39.4,0,0,0,17.91,26C26,26,32.57,24.28,33,22.09V16.34c-.43,2.2-7,3.94-15.09,3.94A39.4,39.4,0,0,1,6.25,18.77v-2A39.4,39.4,0,0,0,17.91,18.28Z"/>
                <circle class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" cx="30" cy="5.86" r="5"/>
            </svg>
        `,


    "bar-chart": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-badge has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>bar-chart</title>

                <path class="clr-i-outline clr-i-outline-path-1" d="M33,30H32V7a2,2,0,0,0-2-2H26a2,2,0,0,0-2,2V30H22V12a2,2,0,0,0-2-2H16a2,2,0,0,0-2,2V30H12V18a2,2,0,0,0-2-2H6a2,2,0,0,0-2,2V30H3a1,1,0,0,0,0,2H33a1,1,0,0,0,0-2ZM10,30H6V18h4Zm10,0H16V12h4Zm10,0H26V7h4Z"/>

                <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M33,30H32V13.22a7.49,7.49,0,0,1-2,.28V30H26V12.34a7.53,7.53,0,0,1-2-1.85V30H22V12a2,2,0,0,0-2-2H16a2,2,0,0,0-2,2V30H12V18a2,2,0,0,0-2-2H6a2,2,0,0,0-2,2V30H3a1,1,0,0,0,0,2H33a1,1,0,0,0,0-2ZM10,30H6V18h4Zm10,0H16V12h4Z"/>
                <circle class="clr-i-outline--badged clr-i-outline-path-2--badged clr-i-badge" cx="30" cy="6" r="5"/>

                <path class="clr-i-solid clr-i-solid-path-1" d="M33,30H30V7a2,2,0,0,0-2-2H26a2,2,0,0,0-2,2V30H21V12a2,2,0,0,0-2-2H17a2,2,0,0,0-2,2V30H12V18a2,2,0,0,0-2-2H8a2,2,0,0,0-2,2V30H3a1,1,0,0,0,0,2H33a1,1,0,0,0,0-2Z"/>

                <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M33,30H30V13.5a7.48,7.48,0,0,1-6-3V30H21V12a2,2,0,0,0-2-2H17a2,2,0,0,0-2,2V30H12V18a2,2,0,0,0-2-2H8a2,2,0,0,0-2,2V30H3a1,1,0,0,0,0,2H33a1,1,0,0,0,0-2Z"/>
                <circle class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" cx="30" cy="6" r="5"/>
            </svg>
        `,

    "cluster": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-badge can-alert has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">    
            <title>cluster</title>   
            <path d="M31.36,8H27.5v2H31V30H27.5v2H33V9.67A1.65,1.65,0,0,0,31.36,8Z" class="clr-i-outline clr-i-outline-path-1"/>   
            <path d="M5,10H8.5V8H4.64A1.65,1.65,0,0,0,3,9.67V32H8.5V30H5Z" class="clr-i-outline clr-i-outline-path-2"/><ellipse cx="18.01" cy="25.99" rx="1.8" ry="1.79" class="clr-i-outline clr-i-outline-path-3"/>   
            <path d="M24.32,4H11.68A1.68,1.68,0,0,0,10,5.68V32H26V5.68A1.68,1.68,0,0,0,24.32,4ZM24,30H12V6H24Z" class="clr-i-outline clr-i-outline-path-4"/>    
            <rect x="13.5" y="9.21" width="9" height="1.6" class="clr-i-outline clr-i-outline-path-5"/>
            <path d="M5,10H8.5V8H4.64A1.65,1.65,0,0,0,3,9.67V32H8.5V30H5Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/><ellipse cx="18.01" cy="25.99" rx="1.8" ry="1.79" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"/>   
            <path d="M19,9.89l.39-.68H13.5v1.6h5.17A3.65,3.65,0,0,1,19,9.89Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"/>   
            <path d="M24,30H12V6h9.29l1.15-2H11.68A1.68,1.68,0,0,0,10,5.68V32H26V15.4H24Z" class="clr-i-outline--alerted clr-i-outline-path-4--alerted"/>    
            <polygon points="31 15.4 31 30 27.5 30 27.5 32 33 32 33 15.4 31 15.4" class="clr-i-outline--alerted clr-i-outline-path-5--alerted"/>
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-6--alerted clr-i-alert"/>
            <path d="M5,10H8.5V8H4.64A1.65,1.65,0,0,0,3,9.67V32H8.5V30H5Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/><ellipse cx="18.01" cy="25.99" rx="1.8" ry="1.79" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>    
            <rect x="13.5" y="9.21" width="9" height="1.6" class="clr-i-outline--badged clr-i-outline-path-3--badged"/>   
            <path d="M24,10.49V30H12V6H22.5a7.49,7.49,0,0,1,.28-2H11.68A1.68,1.68,0,0,0,10,5.68V32H26V12.34A7.53,7.53,0,0,1,24,10.49Z" class="clr-i-outline--badged clr-i-outline-path-4--badged"/>   
            <path d="M31,13.43V30H27.5v2H33V12.87A7.45,7.45,0,0,1,31,13.43Z" class="clr-i-outline--badged clr-i-outline-path-5--badged"/>    
            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-6--badged clr-i-badge"/>
            <path d="M31.36,8H27.5V32H33V9.67A1.65,1.65,0,0,0,31.36,8Z" class="clr-i-solid clr-i-solid-path-1"/>   
            <path d="M3,9.67V32H8.5V8H4.64A1.65,1.65,0,0,0,3,9.67Z" class="clr-i-solid clr-i-solid-path-2"/>   
            <path d="M24.32,4H11.68A1.68,1.68,0,0,0,10,5.68V32H26V5.68A1.68,1.68,0,0,0,24.32,4ZM18,27.79A1.79,1.79,0,1,1,19.81,26,1.8,1.8,0,0,1,18,27.79ZM23,10.6H13V9H23Z" class="clr-i-solid clr-i-solid-path-3"/>
            <path d="M3,9.67V32H8.5V8H4.64A1.65,1.65,0,0,0,3,9.67Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"/>    
            <rect x="27.5" y="15.4" width="5.5" height="16.6" class="clr-i-solid--alerted clr-i-solid-path-2--alerted"/>   
            <path d="M19,13.56a3.68,3.68,0,0,1-.31-3H13V9h6.56l2.89-5H11.68A1.68,1.68,0,0,0,10,5.68V32H26V15.4H22.23A3.69,3.69,0,0,1,19,13.56ZM18,27.79A1.79,1.79,0,1,1,19.81,26,1.8,1.8,0,0,1,18,27.79Z" class="clr-i-solid--alerted clr-i-solid-path-3--alerted"/>   
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-solid--alerted clr-i-solid-path-4--alerted clr-i-alert"/>
            <path d="M3,9.67V32H8.5V8H4.64A1.65,1.65,0,0,0,3,9.67Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>   
            <path d="M22.5,6a7.49,7.49,0,0,1,.28-2H11.68A1.68,1.68,0,0,0,10,5.68V32H26V12.34A7.49,7.49,0,0,1,22.5,6ZM18,27.79A1.79,1.79,0,1,1,19.81,26,1.8,1.8,0,0,1,18,27.79ZM23,10.6H13V9H23Z" class="clr-i-solid--badged clr-i-solid-path-2--badged"/>   
            <path d="M30,13.5a7.47,7.47,0,0,1-2.5-.44V32H33V12.87A7.47,7.47,0,0,1,30,13.5Z" class="clr-i-solid--badged clr-i-solid-path-3--badged"/>    
            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-4--badged clr-i-badge"/>
        </svg>`,

    "app": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-alert can-badge has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>app</title>
            <polygon points="8 8 4 8 4 10 10 10 10 4 8 4 8 8" class="clr-i-outline clr-i-outline-path-1"/>
            <polygon points="19 8 15 8 15 10 21 10 21 4 19 4 19 8" class="clr-i-outline clr-i-outline-path-2"/>
            <polygon points="30 4 30 8 26 8 26 10 32 10 32 4 30 4" class="clr-i-outline clr-i-outline-path-3"/>
            <polygon points="8 19 4 19 4 21 10 21 10 15 8 15 8 19" class="clr-i-outline clr-i-outline-path-4"/>
            <polygon points="19 19 15 19 15 21 21 21 21 15 19 15 19 19" class="clr-i-outline clr-i-outline-path-5"/>
            <polygon points="30 19 26 19 26 21 32 21 32 15 30 15 30 19" class="clr-i-outline clr-i-outline-path-6"/>
            <polygon points="8 30 4 30 4 32 10 32 10 26 8 26 8 30" class="clr-i-outline clr-i-outline-path-7"/>
            <polygon points="19 30 15 30 15 32 21 32 21 26 19 26 19 30" class="clr-i-outline clr-i-outline-path-8"/>
            <polygon points="30 30 26 30 26 32 32 32 32 26 30 26 30 30" class="clr-i-outline clr-i-outline-path-9"/>
            <polygon points="8 8 4 8 4 10 10 10 10 4 8 4 8 8" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>
            <polygon points="19 8 15 8 15 10 21 10 21 4 19 4 19 8" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>
            <polygon points="8 19 4 19 4 21 10 21 10 15 8 15 8 19" class="clr-i-outline--badged clr-i-outline-path-3--badged"/>
            <polygon points="19 19 15 19 15 21 21 21 21 15 19 15 19 19" class="clr-i-outline--badged clr-i-outline-path-4--badged"/>
            <polygon points="30 19 26 19 26 21 32 21 32 15 30 15 30 19" class="clr-i-outline--badged clr-i-outline-path-5--badged"/>
            <polygon points="8 30 4 30 4 32 10 32 10 26 8 26 8 30" class="clr-i-outline--badged clr-i-outline-path-6--badged"/>
            <polygon points="19 30 15 30 15 32 21 32 21 26 19 26 19 30" class="clr-i-outline--badged clr-i-outline-path-7--badged"/>
            <polygon points="30 30 26 30 26 32 32 32 32 26 30 26 30 30" class="clr-i-outline--badged clr-i-outline-path-8--badged"/>
            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-9--badged clr-i-badge"/>
            <polygon points="8 8 4 8 4 10 10 10 10 4 8 4 8 8" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/>
            <polygon points="8 19 4 19 4 21 10 21 10 15 8 15 8 19" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"/>
            <polygon points="19 19 15 19 15 21 21 21 21 15 19 15 19 19" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"/>
            <polygon points="30 15 30 19 26 19 26 21 32 21 32 15 30 15" class="clr-i-outline--alerted clr-i-outline-path-4--alerted"/>
            <polygon points="8 30 4 30 4 32 10 32 10 26 8 26 8 30" class="clr-i-outline--alerted clr-i-outline-path-5--alerted"/>
            <polygon points="19 30 15 30 15 32 21 32 21 26 19 26 19 30" class="clr-i-outline--alerted clr-i-outline-path-6--alerted"/>
            <polygon points="30 30 26 30 26 32 32 32 32 26 30 26 30 30" class="clr-i-outline--alerted clr-i-outline-path-7--alerted"/>
            <path d="M19,8H15v2h4L19,9.89,21,6.5V4H19Z" class="clr-i-outline--alerted clr-i-outline-path-8--alerted"/>
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-9--alerted clr-i-alert"/>
            <rect x="4" y="4" width="6" height="6" class="clr-i-solid clr-i-solid-path-1"/>
            <rect x="4" y="15" width="6" height="6" class="clr-i-solid clr-i-solid-path-2"/>
            <rect x="4" y="26" width="6" height="6" class="clr-i-solid clr-i-solid-path-3"/>
            <rect x="15" y="4" width="6" height="6" class="clr-i-solid clr-i-solid-path-4"/>
            <rect x="15" y="15" width="6" height="6" class="clr-i-solid clr-i-solid-path-5"/>
            <rect x="15" y="26" width="6" height="6" class="clr-i-solid clr-i-solid-path-6"/>
            <rect x="26" y="4" width="6" height="6" class="clr-i-solid clr-i-solid-path-7"/>
            <rect x="26" y="15" width="6" height="6" class="clr-i-solid clr-i-solid-path-8"/>
            <rect x="26" y="26" width="6" height="6" class="clr-i-solid clr-i-solid-path-9"/>
            <rect x="4" y="4" width="6" height="6" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"/>
            <rect x="4" y="15" width="6" height="6" class="clr-i-solid--alerted clr-i-solid-path-2--alerted"/>
            <rect x="4" y="26" width="6" height="6" class="clr-i-solid--alerted clr-i-solid-path-3--alerted"/>
            <rect x="15" y="15" width="6" height="6" class="clr-i-solid--alerted clr-i-solid-path-4--alerted"/>
            <rect x="15" y="26" width="6" height="6" class="clr-i-solid--alerted clr-i-solid-path-5--alerted"/>
            <rect x="26" y="15" width="6" height="6" class="clr-i-solid--alerted clr-i-solid-path-6--alerted"/>
            <rect x="26" y="26" width="6" height="6" class="clr-i-solid--alerted clr-i-solid-path-7--alerted"/>
            <path d="M15,10h4L19,9.89,21,6.5V4H15Z" class="clr-i-solid--alerted clr-i-solid-path-8--alerted"/>
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-solid--alerted clr-i-solid-path-9--alerted clr-i-alert"/>
            <rect x="4" y="4" width="6" height="6" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>
            <rect x="4" y="15" width="6" height="6" class="clr-i-solid--badged clr-i-solid-path-2--badged"/>
            <rect x="4" y="26" width="6" height="6" class="clr-i-solid--badged clr-i-solid-path-3--badged"/>
            <rect x="15" y="4" width="6" height="6" class="clr-i-solid--badged clr-i-solid-path-4--badged"/>
            <rect x="15" y="15" width="6" height="6" class="clr-i-solid--badged clr-i-solid-path-5--badged"/>
            <rect x="15" y="26" width="6" height="6" class="clr-i-solid--badged clr-i-solid-path-6--badged"/>
            <rect x="26" y="15" width="6" height="6" class="clr-i-solid--badged clr-i-solid-path-7--badged"/>
            <rect x="26" y="26" width="6" height="6" class="clr-i-solid--badged clr-i-solid-path-8--badged"/>
            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-9--badged clr-i-badge"/>
        </svg>`,

    "building": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-alert can-badge has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">    
            <title>building</title>   
            <path d="M19.88,3H6.12A2.12,2.12,0,0,0,4,5.12V33H22V5.12A2.12,2.12,0,0,0,19.88,3ZM20,31H17V28H9v3H6V5.12A.12.12,0,0,1,6.12,5H19.88a.12.12,0,0,1,.12.12Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>    
            <rect x="8" y="8" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>    
            <rect x="12" y="8" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-3--badged"/>    
            <rect x="16" y="8" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-4--badged"/>    
            <rect x="8" y="13" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-5--badged"/>    
            <rect x="12" y="13" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-6--badged"/>    
            <rect x="16" y="13" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-7--badged"/>    
            <rect x="8" y="18" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-8--badged"/>    
            <rect x="12" y="18" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-9--badged"/>    
            <rect x="16" y="18" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-10--badged"/>    
            <rect x="8" y="23" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-11--badged"/>    
            <rect x="12" y="23" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-12--badged"/>    
            <rect x="16" y="23" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-13--badged"/>    
            <rect x="23" y="13" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-14--badged"/>    
            <rect x="27" y="13" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-15--badged"/>    
            <rect x="23" y="18" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-16--badged"/>    
            <rect x="27" y="18" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-17--badged"/>    
            <rect x="23" y="23" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-18--badged"/>    
            <rect x="27" y="23" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-19--badged"/>   
            <path d="M31,13.43V31H23v2H33V12.87A7.45,7.45,0,0,1,31,13.43Z" class="clr-i-outline--badged clr-i-outline-path-20--badged"/>    
            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-21--badged clr-i-badge"/>
            <rect x="8" y="8" width="2" height="2" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/>    
            <rect x="12" y="8" width="2" height="2" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"/>    
            <rect x="16" y="8" width="2" height="2" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"/>    
            <rect x="8" y="13" width="2" height="2" class="clr-i-outline--alerted clr-i-outline-path-4--alerted"/>    
            <rect x="12" y="13" width="2" height="2" class="clr-i-outline--alerted clr-i-outline-path-5--alerted"/>    
            <rect x="16" y="13" width="2" height="2" class="clr-i-outline--alerted clr-i-outline-path-6--alerted"/>    
            <rect x="8" y="18" width="2" height="2" class="clr-i-outline--alerted clr-i-outline-path-7--alerted"/>    
            <rect x="12" y="18" width="2" height="2" class="clr-i-outline--alerted clr-i-outline-path-8--alerted"/>    
            <rect x="16" y="18" width="2" height="2" class="clr-i-outline--alerted clr-i-outline-path-9--alerted"/>    
            <rect x="8" y="23" width="2" height="2" class="clr-i-outline--alerted clr-i-outline-path-10--alerted"/>    
            <rect x="12" y="23" width="2" height="2" class="clr-i-outline--alerted clr-i-outline-path-11--alerted"/>    
            <rect x="16" y="23" width="2" height="2" class="clr-i-outline--alerted clr-i-outline-path-12--alerted"/>    
            <rect x="23" y="18" width="2" height="2" class="clr-i-outline--alerted clr-i-outline-path-13--alerted"/>    
            <rect x="27" y="18" width="2" height="2" class="clr-i-outline--alerted clr-i-outline-path-14--alerted"/>    
            <rect x="23" y="23" width="2" height="2" class="clr-i-outline--alerted clr-i-outline-path-15--alerted"/>    
            <rect x="27" y="23" width="2" height="2" class="clr-i-outline--alerted clr-i-outline-path-16--alerted"/>   
            <path d="M20,31H17V28H9v3H6V5.12A.12.12,0,0,1,6.12,5H19.88a.12.12,0,0,1,.12.12V8.24l2-3.41A2.12,2.12,0,0,0,19.88,3H6.12A2.12,2.12,0,0,0,4,5.12V33H22V15.38a3.68,3.68,0,0,1-2-.74Z" class="clr-i-outline--alerted clr-i-outline-path-17--alerted"/>    
            <polygon points="31 15.4 31 31 23 31 23 33 33 33 33 15.4 31 15.4" class="clr-i-outline--alerted clr-i-outline-path-18--alerted"/>
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-19--alerted clr-i-alert"/>
            <path d="M31,8H22V33H33V10A2,2,0,0,0,31,8ZM26,25H24V23h2Zm0-5H24V18h2Zm0-5H24V13h2Zm4,10H28V23h2Zm0-5H28V18h2Zm0-5H28V13h2Z" class="clr-i-solid clr-i-solid-path-1"/>   
            <path d="M17.88,3H6.12A2.12,2.12,0,0,0,4,5.12V33H9V30h6v3h5V5.12A2.12,2.12,0,0,0,17.88,3ZM9,25H7V23H9Zm0-5H7V18H9Zm0-5H7V13H9Zm0-5H7V8H9Zm4,15H11V23h2Zm0-5H11V18h2Zm0-5H11V13h2Zm0-5H11V8h2Zm4,15H15V23h2Zm0-5H15V18h2Zm0-5H15V13h2Zm0-5H15V8h2Z" class="clr-i-solid clr-i-solid-path-2"/>
            <path d="M17.88,3H6.12A2.12,2.12,0,0,0,4,5.12V33H9V30h6v3h5V14.64a3.67,3.67,0,0,1-1-4.76l1-1.65V5.12A2.12,2.12,0,0,0,17.88,3ZM9,25H7V23H9Zm0-5H7V18H9Zm0-5H7V13H9Zm0-5H7V8H9Zm4,15H11V23h2Zm0-5H11V18h2Zm0-5H11V13h2Zm0-5H11V8h2Zm4,15H15V23h2Zm0-5H15V18h2Zm0-5H15V13h2Zm0-5H15V8h2Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"/>   
            <path d="M22.23,15.4l-.23,0V33H33V15.4ZM26,25H24V23h2Zm0-5H24V18h2Zm4,5H28V23h2Zm0-5H28V18h2Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted"/>   
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-solid--alerted clr-i-solid-path-3--alerted clr-i-alert"/>
            <path d="M17.88,3H6.12A2.12,2.12,0,0,0,4,5.12V33H9V30h6v3h5V5.12A2.12,2.12,0,0,0,17.88,3ZM9,25H7V23H9Zm0-5H7V18H9Zm0-5H7V13H9Zm0-5H7V8H9Zm4,15H11V23h2Zm0-5H11V18h2Zm0-5H11V13h2Zm0-5H11V8h2Zm4,15H15V23h2Zm0-5H15V18h2Zm0-5H15V13h2Zm0-5H15V8h2Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>   
            <path d="M30,13.5V15H28V13.22A7.5,7.5,0,0,1,22.78,8H22V33H33V12.87A7.47,7.47,0,0,1,30,13.5ZM26,25H24V23h2Zm0-5H24V18h2Zm0-5H24V13h2Zm4,10H28V23h2Zm0-5H28V18h2Z" class="clr-i-solid--badged clr-i-solid-path-2--badged"/>    
            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge"/>
            <path d="M31,8H23v2h8V31H23v2H33V10A2,2,0,0,0,31,8Z" class="clr-i-outline clr-i-outline-path-1"/>   
            <path d="M19.88,3H6.12A2.12,2.12,0,0,0,4,5.12V33H22V5.12A2.12,2.12,0,0,0,19.88,3ZM20,31H17V28H9v3H6V5.12A.12.12,0,0,1,6.12,5H19.88a.12.12,0,0,1,.12.12Z" class="clr-i-outline clr-i-outline-path-2"/>    
            <rect x="8" y="8" width="2" height="2" class="clr-i-outline clr-i-outline-path-3"/>    
            <rect x="12" y="8" width="2" height="2" class="clr-i-outline clr-i-outline-path-4"/>    
            <rect x="16" y="8" width="2" height="2" class="clr-i-outline clr-i-outline-path-5"/>    
            <rect x="8" y="13" width="2" height="2" class="clr-i-outline clr-i-outline-path-6"/>    
            <rect x="12" y="13" width="2" height="2" class="clr-i-outline clr-i-outline-path-7"/>    
            <rect x="16" y="13" width="2" height="2" class="clr-i-outline clr-i-outline-path-8"/>    
            <rect x="8" y="18" width="2" height="2" class="clr-i-outline clr-i-outline-path-9"/>    
            <rect x="12" y="18" width="2" height="2" class="clr-i-outline clr-i-outline-path-10"/>    
            <rect x="16" y="18" width="2" height="2" class="clr-i-outline clr-i-outline-path-11"/>    
            <rect x="8" y="23" width="2" height="2" class="clr-i-outline clr-i-outline-path-12"/>    
            <rect x="12" y="23" width="2" height="2" class="clr-i-outline clr-i-outline-path-13"/>    
            <rect x="16" y="23" width="2" height="2" class="clr-i-outline clr-i-outline-path-14"/>    
            <rect x="23" y="13" width="2" height="2" class="clr-i-outline clr-i-outline-path-15"/>    
            <rect x="27" y="13" width="2" height="2" class="clr-i-outline clr-i-outline-path-16"/>    
            <rect x="23" y="18" width="2" height="2" class="clr-i-outline clr-i-outline-path-17"/>    
            <rect x="27" y="18" width="2" height="2" class="clr-i-outline clr-i-outline-path-18"/>    
            <rect x="23" y="23" width="2" height="2" class="clr-i-outline clr-i-outline-path-19"/>    
            <rect x="27" y="23" width="2" height="2" class="clr-i-outline clr-i-outline-path-20"/>
        </svg>`,

    "cpu": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-alert can-badge has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">    
            <title>cpu</title>   
            <path d="M23.08,23.07h-11v1.5H23.83a.75.75,0,0,0,.75-.75V11.33h-1.5Z" class="clr-i-outline clr-i-outline-path-1"/>   
            <path d="M32.2,18.15a.8.8,0,1,0,0-1.6H30v-5.4h2.2a.8.8,0,1,0,0-1.6H30V8.1A2.1,2.1,0,0,0,27.9,6H26.35V3.8a.8.8,0,1,0-1.6,0V6h-5.4V3.8a.8.8,0,1,0-1.6,0V6h-5.4V3.8a.8.8,0,1,0-1.6,0V6H8.1A2.1,2.1,0,0,0,6,8.1V9.55H3.8a.8.8,0,1,0,0,1.6H6v5.4H3.8a.8.8,0,1,0,0,1.6H6v5.4H3.8a.8.8,0,1,0,0,1.6H6V27.9A2.1,2.1,0,0,0,8.1,30h2.65v2.2a.8.8,0,1,0,1.6,0V30h5.4v2.2a.8.8,0,1,0,1.6,0V30h5.4v2.2a.8.8,0,1,0,1.6,0V30H27.9A2.1,2.1,0,0,0,30,27.9V25.15h2.2a.8.8,0,1,0,0-1.6H30v-5.4ZM28,27.9a.1.1,0,0,1-.1.1H8.1a.1.1,0,0,1-.1-.1V8.1A.1.1,0,0,1,8.1,8H27.9a.1.1,0,0,1,.1.1Z" class="clr-i-outline clr-i-outline-path-2"/>
            
            <path d="M12.06,24.57H23.83a.75.75,0,0,0,.75-.75V11.33h-1.5V23.07h-11Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>
            <path d="M32.2,23.55H30v-5.4h2.2a.8.8,0,1,0,0-1.6H30V13.5a7.49,7.49,0,0,1-2-.28V27.9a.1.1,0,0,1-.1.1H8.1a.1.1,0,0,1-.1-.1V8.1A.1.1,0,0,1,8.1,8H22.78a7.49,7.49,0,0,1-.28-2H19.35V3.8a.8.8,0,1,0-1.6,0V6h-5.4V3.8a.8.8,0,1,0-1.6,0V6H8.1A2.1,2.1,0,0,0,6,8.1V9.55H3.8a.8.8,0,1,0,0,1.6H6v5.4H3.8a.8.8,0,1,0,0,1.6H6v5.4H3.8a.8.8,0,1,0,0,1.6H6V27.9A2.1,2.1,0,0,0,8.1,30h2.65v2.2a.8.8,0,1,0,1.6,0V30h5.4v2.2a.8.8,0,1,0,1.6,0V30h5.4v2.2a.8.8,0,1,0,1.6,0V30H27.9A2.1,2.1,0,0,0,30,27.9V25.15h2.2a.8.8,0,1,0,0-1.6Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>
            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge"/>
            
            <path d="M32.2,23.55H30v-5.4h2.2a.8.8,0,1,0,0-1.6H30V15.4H28V27.9a.1.1,0,0,1-.1.1H8.1a.1.1,0,0,1-.1-.1V8.1A.1.1,0,0,1,8.1,8h12l1.15-2H19.35V3.8a.8.8,0,1,0-1.6,0V6h-5.4V3.8a.8.8,0,1,0-1.6,0V6H8.1A2.1,2.1,0,0,0,6,8.1V9.55H3.8a.8.8,0,1,0,0,1.6H6v5.4H3.8a.8.8,0,1,0,0,1.6H6v5.4H3.8a.8.8,0,1,0,0,1.6H6V27.9A2.1,2.1,0,0,0,8.1,30h2.65v2.2a.8.8,0,1,0,1.6,0V30h5.4v2.2a.8.8,0,1,0,1.6,0V30h5.4v2.2a.8.8,0,1,0,1.6,0V30H27.9A2.1,2.1,0,0,0,30,27.9V25.15h2.2a.8.8,0,1,0,0-1.6Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/>
            <path d="M12.06,24.57H23.83a.75.75,0,0,0,.75-.75V15.4h-1.5v7.67h-11Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted" />
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted clr-i-alert" clr-i-alert />
               
            
            <path d="M32.2,23.55H30v-5.4h2.2a.8.8,0,1,0,0-1.6H30V15.4H25v8.41A1.18,1.18,0,0,1,24,25H13V23H23V15.4h-.77A3.68,3.68,0,0,1,19,9.89L21.29,6H19.35V3.8a.8.8,0,1,0-1.6,0V6h-5.4V3.8a.8.8,0,1,0-1.6,0V6H8.1A2.1,2.1,0,0,0,6,8.1V9.55H3.8a.8.8,0,1,0,0,1.6H6v5.4H3.8a.8.8,0,1,0,0,1.6H6v5.4H3.8a.8.8,0,1,0,0,1.6H6V27.9A2.1,2.1,0,0,0,8.1,30h2.65v2.2a.8.8,0,1,0,1.6,0V30h5.4v2.2a.8.8,0,1,0,1.6,0V30h5.4v2.2a.8.8,0,1,0,1.6,0V30H27.9A2.1,2.1,0,0,0,30,27.9V25.15h2.2a.8.8,0,1,0,0-1.6Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"/>
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-solid--alerted clr-i-solid-path-3--alerted clr-i-alert"/>
            
            <path d="M32.2,23.55H30v-5.4h2.2a.8.8,0,1,0,0-1.6H30V13.5a7.46,7.46,0,0,1-5-1.92V23.81A1.18,1.18,0,0,1,24,25H13V23H23V11h1.42A7.46,7.46,0,0,1,22.5,6H19.35V3.8a.8.8,0,1,0-1.6,0V6h-5.4V3.8a.8.8,0,1,0-1.6,0V6H8.1A2.1,2.1,0,0,0,6,8.1V9.55H3.8a.8.8,0,1,0,0,1.6H6v5.4H3.8a.8.8,0,1,0,0,1.6H6v5.4H3.8a.8.8,0,1,0,0,1.6H6V27.9A2.1,2.1,0,0,0,8.1,30h2.65v2.2a.8.8,0,1,0,1.6,0V30h5.4v2.2a.8.8,0,1,0,1.6,0V30h5.4v2.2a.8.8,0,1,0,1.6,0V30H27.9A2.1,2.1,0,0,0,30,27.9V25.15h2.2a.8.8,0,1,0,0-1.6Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>
            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge"/>
            <path d="M32.2,18.15a.8.8,0,1,0,0-1.6H30v-5.4h2.2a.8.8,0,1,0,0-1.6H30V8.1A2.1,2.1,0,0,0,27.9,6H26.35V3.8a.8.8,0,1,0-1.6,0V6h-5.4V3.8a.8.8,0,1,0-1.6,0V6h-5.4V3.8a.8.8,0,1,0-1.6,0V6H8.1A2.1,2.1,0,0,0,6,8.1V9.55H3.8a.8.8,0,1,0,0,1.6H6v5.4H3.8a.8.8,0,1,0,0,1.6H6v5.4H3.8a.8.8,0,1,0,0,1.6H6V27.9A2.1,2.1,0,0,0,8.1,30h2.65v2.2a.8.8,0,1,0,1.6,0V30h5.4v2.2a.8.8,0,1,0,1.6,0V30h5.4v2.2a.8.8,0,1,0,1.6,0V30H27.9A2.1,2.1,0,0,0,30,27.9V25.15h2.2a.8.8,0,1,0,0-1.6H30v-5.4ZM25,23.81A1.18,1.18,0,0,1,24,25H13V23H23V11h2Z" class="clr-i-solid clr-i-solid-path-1"/>
        </svg>`,

    "memory": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-alert can-badge has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">    
            <title>memory</title>    
            <rect x="8" y="12" width="4" height="8" class="clr-i-outline clr-i-outline-path-1"/>    
            <rect x="16" y="12" width="4" height="8" class="clr-i-outline clr-i-outline-path-2"/>    
            <rect x="24" y="12" width="4" height="8" class="clr-i-outline clr-i-outline-path-3"/>   
            <path d="M15,27H4V17H2V27a2,2,0,0,0,2,2H16.61V25.55h2.26V24H15Z" class="clr-i-outline clr-i-outline-path-4"/>   
            <path d="M32,7H4A2,2,0,0,0,2,9v4H4V9H32v4h2V9A2,2,0,0,0,32,7Z" class="clr-i-outline clr-i-outline-path-5"/>   
            <path d="M32,27H19v2H32a2,2,0,0,0,2-2V17H32Z" class="clr-i-outline clr-i-outline-path-6"/>
            <rect x="8" y="12" width="4" height="8" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/>   
            <path d="M15,27H4V17H2V27a2,2,0,0,0,2,2H16.61V25.55h2.26V24H15Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"/>   
            <path d="M32,17V27H19v2H32a2,2,0,0,0,2-2V17Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"/>   
            <path d="M19,13.56A3.66,3.66,0,0,1,18.57,12H16v8h4V14.64A3.67,3.67,0,0,1,19,13.56Z" class="clr-i-outline--alerted clr-i-outline-path-4--alerted"/>    
            <rect x="24" y="15.4" width="4" height="4.6" class="clr-i-outline--alerted clr-i-outline-path-5--alerted"/>   
            <path d="M4,9H19.56l1.15-2H4A2,2,0,0,0,2,9v4H4Z" class="clr-i-outline--alerted clr-i-outline-path-6--alerted"/>   
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-7--alerted clr-i-alert"/>
            <rect x="8" y="12" width="4" height="8" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>    
            <rect x="16" y="12" width="4" height="8" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>   
            <path d="M15,27H4V17H2V27a2,2,0,0,0,2,2H16.61V25.55h2.26V24H15Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"/>   
            <path d="M32,17V27H19v2H32a2,2,0,0,0,2-2V17Z" class="clr-i-outline--badged clr-i-outline-path-4--badged"/>   
            <path d="M28,13.22A7.46,7.46,0,0,1,25.51,12H24v8h4Z" class="clr-i-outline--badged clr-i-outline-path-5--badged"/>   
            <path d="M4,9H23.13a7.45,7.45,0,0,1-.55-2H4A2,2,0,0,0,2,9v4H4Z" class="clr-i-outline--badged clr-i-outline-path-6--badged"/>    
            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-7--badged clr-i-badge"/>
            <path d="M34,13V9a2,2,0,0,0-2-2H4A2,2,0,0,0,2,9v4H4v4H2V27a2,2,0,0,0,2,2H16.61V25.55H19V29H32a2,2,0,0,0,2-2V17H32V13ZM12,20H8V12h4Zm8,0H16V12h4Zm8,0H24V12h4Z" class="clr-i-solid clr-i-solid-path-1"/>
            <path d="M32,17V15.07H28V20H24V15.07H22.23A3.68,3.68,0,0,1,20,14.31V20H16V12h2.61A3.68,3.68,0,0,1,19,9.55L20.52,7H4A2,2,0,0,0,2,9v4H4v4H2V27a2,2,0,0,0,2,2H16.61V25.55H19V29H32a2,2,0,0,0,2-2V17ZM12,20H8V12h4Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"/>   
            <path d="M26.85.8l-5.72,9.91a1.28,1.28,0,0,0,1.1,1.91H33.68a1.28,1.28,0,0,0,1.1-1.91L29.06.8A1.28,1.28,0,0,0,26.85.8Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert"/>
            <path d="M32,17V13.22a7.33,7.33,0,0,1-4,0V20H24V12h1.51a7.48,7.48,0,0,1-2.94-5H4A2,2,0,0,0,2,9v4H4v4H2V27a2,2,0,0,0,2,2H16.61V25.55H19V29H32a2,2,0,0,0,2-2V17ZM12,20H8V12h4Zm8,0H16V12h4Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>    
            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge"/>
        </svg>`,

    "data-cluster": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-alert can-badge has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">    
            <title>data-cluster</title>   
            <path d="M26.5,4.08C22.77,4.08,19,5.4,19,7.91V9.5a18.75,18.75,0,0,1,2,.2V7.91c0-.65,2.09-1.84,5.5-1.84S32,7.27,32,7.91V18.24c0,.54-1.46,1.44-3.9,1.73v2c3.13-.32,5.9-1.6,5.9-3.75V7.91C34,5.4,30.23,4.08,26.5,4.08Z" class="clr-i-outline clr-i-outline-path-1"/>   
            <path d="M4,18.24V7.91c0-.65,2.09-1.84,5.5-1.84S15,7.27,15,7.91V9.7a18.75,18.75,0,0,1,2-.2V7.91c0-2.52-3.77-3.84-7.5-3.84S2,5.4,2,7.91V18.24C2,20.4,4.77,21.67,7.9,22V20C5.46,19.68,4,18.78,4,18.24Z" class="clr-i-outline clr-i-outline-path-2"/>   
            <path d="M18,10.85c-4.93,0-8.65,1.88-8.65,4.38V27.54c0,2.5,3.72,4.38,8.65,4.38s8.65-1.88,8.65-4.38V15.23C26.65,12.73,22.93,10.85,18,10.85Zm6.65,7.67c-.85,1-3.42,2-6.65,2A14.49,14.49,0,0,1,14,20v1.46a16.33,16.33,0,0,0,4,.47,12.76,12.76,0,0,0,6.65-1.56v3.12c-.85,1-3.42,2-6.65,2a14.49,14.49,0,0,1-4-.53v1.46a16.33,16.33,0,0,0,4,.47,12.76,12.76,0,0,0,6.65-1.56v2.29c0,.95-2.65,2.38-6.65,2.38s-6.65-1.43-6.65-2.38V15.23c0-.95,2.65-2.38,6.65-2.38s6.65,1.43,6.65,2.38Z" class="clr-i-outline clr-i-outline-path-3"/>
            <path d="M4,18.24V7.91c0-.65,2.09-1.84,5.5-1.84S15,7.27,15,7.91V9.7a18.75,18.75,0,0,1,2-.2V7.91c0-2.52-3.77-3.84-7.5-3.84S2,5.4,2,7.91V18.24C2,20.4,4.77,21.67,7.9,22V20C5.46,19.68,4,18.78,4,18.24Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/>   
            <path d="M24.65,18.52c-.85,1-3.42,2-6.65,2A14.49,14.49,0,0,1,14,20v1.46a16.33,16.33,0,0,0,4,.47,12.76,12.76,0,0,0,6.65-1.56v3.12c-.85,1-3.42,2-6.65,2a14.49,14.49,0,0,1-4-.53v1.46a16.33,16.33,0,0,0,4,.47,12.76,12.76,0,0,0,6.65-1.56v2.29c0,.95-2.65,2.38-6.65,2.38s-6.65-1.43-6.65-2.38V15.23c0-.95,2.65-2.38,6.65-2.38l.75,0a3.69,3.69,0,0,1-.08-2l-.66,0c-4.93,0-8.65,1.88-8.65,4.38V27.54c0,2.5,3.72,4.38,8.65,4.38s8.65-1.88,8.65-4.38V15.4h-2Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"/>   
            <path d="M22,4.8c-1.75.63-3,1.68-3,3.12V9.5l.25,0Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"/>   
            <path d="M33.68,15.4H32v2.84c0,.54-1.46,1.44-3.9,1.73v2c3.13-.32,5.9-1.6,5.9-3.75V15.38Z" class="clr-i-outline--alerted clr-i-outline-path-4--alerted"/>   
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-5--alerted clr-i-alert"/>
            <path d="M4,18.24V7.91c0-.65,2.09-1.84,5.5-1.84S15,7.27,15,7.91V9.7a18.75,18.75,0,0,1,2-.2V7.91c0-2.52-3.77-3.84-7.5-3.84S2,5.4,2,7.91V18.24C2,20.4,4.77,21.67,7.9,22V20C5.46,19.68,4,18.78,4,18.24Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>   
            <path d="M18,10.85c-4.93,0-8.65,1.88-8.65,4.38V27.54c0,2.5,3.72,4.38,8.65,4.38s8.65-1.88,8.65-4.38V15.23C26.65,12.73,22.93,10.85,18,10.85Zm6.65,7.67c-.85,1-3.42,2-6.65,2A14.49,14.49,0,0,1,14,20v1.46a16.33,16.33,0,0,0,4,.47,12.76,12.76,0,0,0,6.65-1.56v3.12c-.85,1-3.42,2-6.65,2a14.49,14.49,0,0,1-4-.53v1.46a16.33,16.33,0,0,0,4,.47,12.76,12.76,0,0,0,6.65-1.56v2.29c0,.95-2.65,2.38-6.65,2.38s-6.65-1.43-6.65-2.38V15.23c0-.95,2.65-2.38,6.65-2.38s6.65,1.43,6.65,2.38Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>   
            <path d="M21,7.91c0-.33.55-.8,1.54-1.18,0-.24,0-.48,0-.73a7.52,7.52,0,0,1,.14-1.41C20.55,5.19,19,6.3,19,7.91V9.5a18.75,18.75,0,0,1,2,.2Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"/>   
            <path d="M32,13.22v5c0,.54-1.46,1.44-3.9,1.73v2c3.13-.32,5.9-1.6,5.9-3.75v-5.9A7.45,7.45,0,0,1,32,13.22Z" class="clr-i-outline--badged clr-i-outline-path-4--badged"/>    
            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-5--badged clr-i-badge"/>
            <path d="M26.5,4.08C22.77,4.08,19,5.4,19,7.91V9.48c5.3.26,9,2.6,9,5.76v6.7l.05.06c3.13-.32,5.9-1.6,5.9-3.75V7.91C34,5.4,30.23,4.08,26.5,4.08Z" class="clr-i-solid clr-i-solid-path-1"/>   
            <path d="M17,9.48V7.91c0-2.52-3.77-3.84-7.5-3.84S2,5.4,2,7.91V18.24C2,20.4,4.77,21.67,7.9,22L8,21.93v-6.7C8,12.08,11.7,9.74,17,9.48Z" class="clr-i-solid clr-i-solid-path-2"/>   
            <path d="M18,10.85c-4.93,0-8.65,1.88-8.65,4.38V27.54c0,2.5,3.72,4.38,8.65,4.38s8.65-1.88,8.65-4.38V25.38A13.58,13.58,0,0,1,18,28a16.77,16.77,0,0,1-6-1V25.27a14.5,14.5,0,0,0,6,1.17c4.21,0,7.65-1.23,8.63-3.23V20.47C24.8,22,21.72,23,18,23a16.77,16.77,0,0,1-6-1V20.23a14.5,14.5,0,0,0,6,1.17c4.21,0,7.65-1.11,8.63-3.11V15.23C26.65,12.73,22.93,10.85,18,10.85Z" class="clr-i-solid clr-i-solid-path-3"/>
            <path d="M17,9.48V7.91c0-2.52-3.77-3.84-7.5-3.84S2,5.4,2,7.91V18.24C2,20.4,4.77,21.67,7.9,22L8,21.93v-6.7C8,12.08,11.7,9.74,17,9.48Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"/>   
            <path d="M19,13.56a3.68,3.68,0,0,1-.39-2.7l-.66,0c-4.93,0-8.65,1.88-8.65,4.38V27.54c0,2.5,3.72,4.38,8.65,4.38s8.65-1.88,8.65-4.38V25.38A13.58,13.58,0,0,1,18,28a16.77,16.77,0,0,1-6-1V25.27a14.5,14.5,0,0,0,6,1.17c4.21,0,7.65-1.23,8.63-3.23V20.47C24.8,22,21.72,23,18,23a16.77,16.77,0,0,1-6-1V20.23a14.5,14.5,0,0,0,6,1.17c4.21,0,7.65-1.11,8.63-3.11V15.4H22.23A3.69,3.69,0,0,1,19,13.56Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted"/>   
            <path d="M22,4.8c-1.75.63-3,1.68-3,3.12V9.48l.27,0Z" class="clr-i-solid--alerted clr-i-solid-path-3--alerted"/>   
            <path d="M33.68,15.4H28v6.53l.05.06c3.13-.32,5.9-1.6,5.9-3.75V15.38Z" class="clr-i-solid--alerted clr-i-solid-path-4--alerted"/>   
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-solid--alerted clr-i-solid-path-5--alerted clr-i-alert"/>
            <path d="M17,9.48V7.91c0-2.52-3.77-3.84-7.5-3.84S2,5.4,2,7.91V18.24C2,20.4,4.77,21.67,7.9,22L8,21.93v-6.7C8,12.08,11.7,9.74,17,9.48Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>   
            <path d="M18,10.85c-4.93,0-8.65,1.88-8.65,4.38V27.54c0,2.5,3.72,4.38,8.65,4.38s8.65-1.88,8.65-4.38V25.38A13.58,13.58,0,0,1,18,28a16.77,16.77,0,0,1-6-1V25.27a14.5,14.5,0,0,0,6,1.17c4.21,0,7.65-1.23,8.63-3.23V20.47C24.8,22,21.72,23,18,23a16.77,16.77,0,0,1-6-1V20.23a14.5,14.5,0,0,0,6,1.17c4.21,0,7.65-1.11,8.63-3.11V15.23C26.65,12.73,22.93,10.85,18,10.85Z" class="clr-i-solid--badged clr-i-solid-path-2--badged"/>   
            <path d="M22.5,6a7.52,7.52,0,0,1,.14-1.4C20.55,5.19,19,6.3,19,7.91V9.48a15.33,15.33,0,0,1,5,1A7.46,7.46,0,0,1,22.5,6Z" class="clr-i-solid--badged clr-i-solid-path-3--badged"/>   
            <path d="M30,13.49A7.47,7.47,0,0,1,27.35,13a4,4,0,0,1,.7,2.23v6.7l.05.06c3.13-.32,5.9-1.6,5.9-3.75V12.33A7.46,7.46,0,0,1,30,13.49Z" class="clr-i-solid--badged clr-i-solid-path-4--badged"/>    
            <circle cx="30" cy="5.99" r="5" class="clr-i-solid--badged clr-i-solid-path-5--badged clr-i-badge"/>
        </svg>`,

    "resource-pool": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-alert can-badge has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">     
            <title>resource-pool</title>   
            <path d="M33.68,15.4H31.73a14,14,0,0,1,.22,1.6H17.49L8.3,28.07A14,14,0,0,1,22.09,4.62l1-1.76A16,16,0,1,0,34,18a16,16,0,0,0-.23-2.61ZM18,32a13.91,13.91,0,0,1-8.16-2.65L18.43,19H31.95A14,14,0,0,1,18,32Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/>   
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted clr-i-alert"/>
            <path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2ZM4,18a14,14,0,0,1,27.95-1H17.49L8.3,28.07A14,14,0,0,1,4,18ZM18,32a13.91,13.91,0,0,1-8.16-2.65L18.43,19H31.95A14,14,0,0,1,18,32Z" class="clr-i-outline clr-i-outline-path-1"/>
            <path d="M31.2,13.4a13.91,13.91,0,0,1,.75,3.6H17.49L8.3,28.07A14,14,0,0,1,22.61,4.8a7.43,7.43,0,0,1,.58-1.92,16.06,16.06,0,1,0,9.93,9.93A7.43,7.43,0,0,1,31.2,13.4ZM18,32a13.91,13.91,0,0,1-8.16-2.65L18.43,19H31.95A14,14,0,0,1,18,32Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>    
            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-2--badged clr-i-badge"/>
            <path d="M8.57,30.9A16,16,0,0,0,33.95,19H18.43Z" class="clr-i-solid clr-i-solid-path-1"/>   
            <path d="M33.95,17A16,16,0,1,0,7,29.6L17.49,17Z" class="clr-i-solid clr-i-solid-path-2"/>
            <path d="M8.57,30.9A16,16,0,0,0,33.95,19H18.43Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>   
            <path d="M33.95,17a15.91,15.91,0,0,0-.84-4.18,7.49,7.49,0,0,1-9.92-9.94A16,16,0,0,0,7,29.6L17.49,17Z" class="clr-i-solid--badged clr-i-solid-path-2--badged"/>    
            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge"/>
            <path d="M8.57,30.9A16,16,0,0,0,33.95,19H18.43Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"/>   
            <path d="M33.95,17a16,16,0,0,0-.18-1.61H22.23A3.68,3.68,0,0,1,19,9.89l4.06-7A16,16,0,0,0,7,29.6L17.49,17Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted"/>   
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-solid--alerted clr-i-solid-path-3--alerted clr-i-alert"/>
        </svg>`,

    "shield": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-alert can-badge has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">    
            <title>shield</title>   
            <path d="M31.25,7.4a43.79,43.79,0,0,1-6.62-2.35,45,45,0,0,1-6.08-3.21L18,1.5l-.54.35a45,45,0,0,1-6.08,3.21A43.79,43.79,0,0,1,4.75,7.4L4,7.59v8.34c0,13.39,13.53,18.4,13.66,18.45l.34.12.34-.12c.14,0,13.66-5.05,13.66-18.45V7.59ZM30,15.93c0,11-10,15.61-12,16.43-2-.82-12-5.44-12-16.43V9.14a47.54,47.54,0,0,0,6.18-2.25,48.23,48.23,0,0,0,5.82-3,48.23,48.23,0,0,0,5.82,3A47.54,47.54,0,0,0,30,9.14Z" class="clr-i-outline clr-i-outline-path-1"/>
            <path d="M30,15.4v.53c0,11-10,15.61-12,16.43-2-.82-12-5.44-12-16.43V9.14a47.54,47.54,0,0,0,6.18-2.25,48.23,48.23,0,0,0,5.82-3c1,.64,2.2,1.27,3.43,1.89l1-1.74a41.1,41.1,0,0,1-3.89-2.18L18,1.5l-.54.35a45,45,0,0,1-6.08,3.21A43.79,43.79,0,0,1,4.75,7.4L4,7.59v8.34c0,13.39,13.53,18.4,13.66,18.45l.34.12.34-.12c.14,0,13.66-5.05,13.66-18.45V15.4Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/>
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted clr-i-alert"/>
            <path d="M30,13.5v2.43c0,11-10,15.61-12,16.43-2-.82-12-5.44-12-16.43V9.14a47.54,47.54,0,0,0,6.18-2.25,48.23,48.23,0,0,0,5.82-3,46.19,46.19,0,0,0,4.51,2.42c0-.1,0-.19,0-.29a7.49,7.49,0,0,1,.23-1.83,41.61,41.61,0,0,1-4.19-2.33L18,1.5l-.54.35a45,45,0,0,1-6.08,3.21A43.79,43.79,0,0,1,4.75,7.4L4,7.59v8.34c0,13.39,13.53,18.4,13.66,18.45l.34.12.34-.12c.14,0,13.66-5.05,13.66-18.45V13.22A7.49,7.49,0,0,1,30,13.5Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>    
            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-2--badged clr-i-badge"/>
            <path d="M31.25,7.4a43.79,43.79,0,0,1-6.62-2.35,45,45,0,0,1-6.08-3.21L18,1.5l-.54.35a45,45,0,0,1-6.08,3.21A43.79,43.79,0,0,1,4.75,7.4L4,7.59v8.34c0,13.39,13.53,18.4,13.66,18.45l.34.12.34-.12c.14,0,13.66-5.05,13.66-18.45V7.59Z" class="clr-i-solid clr-i-solid-path-1"/>
            <path d="M22.23,15.4A3.68,3.68,0,0,1,19,9.89L22.43,4a41.1,41.1,0,0,1-3.89-2.18L18,1.5l-.54.35a45,45,0,0,1-6.08,3.21A43.79,43.79,0,0,1,4.75,7.4L4,7.59v8.34c0,13.39,13.53,18.4,13.66,18.45l.34.12.34-.12c.14,0,13.66-5.05,13.66-18.45V15.4Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"/>   
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert"/>
            <path d="M30,13.5a7.47,7.47,0,0,1-7.27-9.33,41.61,41.61,0,0,1-4.19-2.33L18,1.5l-.54.35a45,45,0,0,1-6.08,3.21A43.79,43.79,0,0,1,4.75,7.4L4,7.59v8.34c0,13.39,13.53,18.4,13.66,18.45l.34.12.34-.12c.14,0,13.66-5.05,13.66-18.45V13.22A7.49,7.49,0,0,1,30,13.5Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>    
            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge"/>
        </svg>`,

    "shield-check": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">        
            <title>shield-check</title>   
            <path d="M31.25,7.4a43.79,43.79,0,0,1-6.62-2.35,45,45,0,0,1-6.08-3.21L18,1.5l-.54.35a45,45,0,0,1-6.08,3.21A43.79,43.79,0,0,1,4.75,7.4L4,7.59v8.34c0,13.39,13.53,18.4,13.66,18.45l.34.12.34-.12c.14,0,13.66-5.05,13.66-18.45V7.59ZM30,15.93c0,11-10,15.61-12,16.43-2-.82-12-5.44-12-16.43V9.14a47.54,47.54,0,0,0,6.18-2.25,48.23,48.23,0,0,0,5.82-3,48.23,48.23,0,0,0,5.82,3A47.54,47.54,0,0,0,30,9.14Z" class="clr-i-outline clr-i-outline-path-1"/>   
            <path d="M10.88,16.87a1,1,0,0,0-1.41,1.41l6,6L26.4,13.77A1,1,0,0,0,25,12.33l-9.47,9.19Z" class="clr-i-outline clr-i-outline-path-2"/>
            <path d="M31.25,7.4a43.79,43.79,0,0,1-6.62-2.35,45,45,0,0,1-6.08-3.21L18,1.5l-.54.35a45,45,0,0,1-6.08,3.21A43.79,43.79,0,0,1,4.75,7.4L4,7.59v8.34c0,13.39,13.53,18.4,13.66,18.45l.34.12.34-.12c.14,0,13.66-5.05,13.66-18.45V7.59Zm-4.57,6.65L15.51,24.9,9.19,18.57a1.4,1.4,0,0,1,2-2L15.54,21,24.73,12a1.4,1.4,0,1,1,2,2Z" class="clr-i-solid clr-i-solid-path-1"/>
        </svg>`,

    "shield-x": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">        
            <title>shield-x</title>   
            <path d="M31.25,7.4a43.79,43.79,0,0,1-6.62-2.35,45,45,0,0,1-6.08-3.21L18,1.5l-.54.35a45,45,0,0,1-6.08,3.21A43.79,43.79,0,0,1,4.75,7.4L4,7.59v8.34c0,13.39,13.53,18.4,13.66,18.45l.34.12.34-.12c.14,0,13.66-5.05,13.66-18.45V7.59ZM30,15.93c0,11-10,15.61-12,16.43-2-.82-12-5.44-12-16.43V9.14a47.54,47.54,0,0,0,6.18-2.25,48.23,48.23,0,0,0,5.82-3,48.23,48.23,0,0,0,5.82,3A47.54,47.54,0,0,0,30,9.14Z" class="clr-i-outline clr-i-outline-path-1"/>   
            <path d="M22.81,10.79,18,15.61l-4.81-4.81a1,1,0,0,0-1.41,1.41L16.59,17l-4.81,4.81a1,1,0,1,0,1.41,1.41L18,18.43l4.81,4.81a1,1,0,0,0,1.41-1.41L19.41,17l4.81-4.81a1,1,0,0,0-1.41-1.41Z" class="clr-i-outline clr-i-outline-path-2"/>
            <path d="M31.25,7.4a43.79,43.79,0,0,1-6.62-2.35,45,45,0,0,1-6.08-3.21L18,1.5l-.54.35a45,45,0,0,1-6.08,3.21A43.79,43.79,0,0,1,4.75,7.4L4,7.59v8.34c0,13.39,13.53,18.4,13.66,18.45l.34.12.34-.12c.14,0,13.66-5.05,13.66-18.45V7.59ZM24.51,21.55a1.4,1.4,0,0,1-2,2L18,19l-4.53,4.53a1.43,1.43,0,0,1-2,0,1.4,1.4,0,0,1,0-2L16,17l-4.53-4.53a1.4,1.4,0,1,1,2-2L18,15l4.53-4.53a1.4,1.4,0,0,1,2,2L20,17Z" class="clr-i-solid clr-i-solid-path-1"/>
        </svg>`,

    "import": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-alert can-badge has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">    
            <title>import</title>   
            <path d="M28,4H14.87L8,10.86V15h2V13.61h7.61V6H28V30H8a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V6A2,2,0,0,0,28,4ZM16,12H10v-.32L15.7,6H16Z" class="clr-i-outline clr-i-outline-path-1"/>   
            <path d="M11.94,26.28a1,1,0,1,0,1.41,1.41L19,22l-5.68-5.68a1,1,0,0,0-1.41,1.41L15.2,21H3a1,1,0,1,0,0,2H15.23Z" class="clr-i-outline clr-i-outline-path-2"/>
            <path d="M11.94,26.28a1,1,0,1,0,1.41,1.41L19,22l-5.68-5.68a1,1,0,0,0-1.41,1.41L15.2,21H3a1,1,0,1,0,0,2H15.23Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/>   
            <path d="M28,15.4V30H8a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V15.4Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"/>   
            <path d="M10,13.61h7.61V6h3.68l1.15-2H14.87L8,10.86V15h2Zm0-1.92L15.7,6H16v6H10Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"/>   
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-4--alerted clr-i-alert"/>
            <path d="M11.94,26.28a1,1,0,1,0,1.41,1.41L19,22l-5.68-5.68a1,1,0,0,0-1.41,1.41L15.2,21H3a1,1,0,1,0,0,2H15.23Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>   
            <path d="M28,13.22V30H8a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V13.5A7.49,7.49,0,0,1,28,13.22Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>   
            <path d="M10,13.61h7.61V6H22.5a7.49,7.49,0,0,1,.28-2H14.87L8,10.86V15h2Zm0-1.92L15.7,6H16v6H10Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"/>    
            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge"/>
            <path d="M3,21a1,1,0,1,0,0,2H8V21Z" class="clr-i-solid clr-i-solid-path-1"/>   
            <path d="M28,4H14.87L8,10.86V21H15.2l-3.25-3.25a1,1,0,0,1,1.41-1.41L19,22l-5.68,5.68a1,1,0,0,1-1.41-1.41L15.23,23H8v7a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V6A2,2,0,0,0,28,4ZM16,12H10v-.32L15.69,6H16Z" class="clr-i-solid clr-i-solid-path-2"/>
            <path d="M3,21a1,1,0,1,0,0,2H8V21Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"/>   
            <path d="M22.23,15.4A3.68,3.68,0,0,1,19,9.89L22.45,4H14.87L8,10.86V21H15.2l-3.25-3.25a1,1,0,0,1,1.41-1.41L19,22l-5.68,5.68a1,1,0,0,1-1.41-1.41L15.23,23H8v7a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V15.4ZM16,12H10v-.32L15.69,6H16Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted"/>   
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-solid--alerted clr-i-solid-path-3--alerted clr-i-alert"/>
            <path d="M3,21a1,1,0,1,0,0,2H8V21Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>   
            <path d="M22.5,6a7.49,7.49,0,0,1,.28-2H14.87L8,10.86V21H15.2l-3.25-3.25a1,1,0,0,1,1.41-1.41L19,22l-5.68,5.68a1,1,0,0,1-1.41-1.41L15.23,23H8v7a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V13.5A7.5,7.5,0,0,1,22.5,6ZM16,12H10v-.32L15.69,6H16Z" class="clr-i-solid--badged clr-i-solid-path-2--badged"/>    
            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge"/>
        </svg>`,

    "export": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-alert can-badge has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">    
            <title>export</title>   
            <path d="M6,13.61h7.61V6H24v8.38h2V6a2,2,0,0,0-2-2H10.87L4,10.87V30a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2H6Zm0-1.92L11.69,6H12v6H6Z" class="clr-i-outline clr-i-outline-path-1"/>   
            <path d="M28.32,16.35a1,1,0,0,0-1.41,1.41L30.16,21H18a1,1,0,0,0,0,2H30.19l-3.28,3.28a1,1,0,1,0,1.41,1.41L34,22Z" class="clr-i-outline clr-i-outline-path-2"/>
            <path d="M28.32,16.35a1,1,0,0,0-1.41,1.41L30.16,21H18a1,1,0,0,0,0,2H30.19l-3.28,3.28a1,1,0,1,0,1.41,1.41L34,22Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/>   
            <path d="M6,13.61h7.61V6h7.68l1.15-2H10.87L4,10.87V30a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2H6Zm0-1.92L11.69,6H12v6H6Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"/>   
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted clr-i-alert"/>
            <path d="M28.32,16.35a1,1,0,0,0-1.41,1.41L30.16,21H18a1,1,0,0,0,0,2H30.19l-3.28,3.28a1,1,0,1,0,1.41,1.41L34,22Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>   
            <path d="M26,12.34a7.53,7.53,0,0,1-2-1.85v3.89h2Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>   
            <path d="M6,13.61h7.61V6H22.5a7.49,7.49,0,0,1,.28-2H10.87L4,10.87V30a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2H6Zm0-1.92L11.69,6H12v6H6Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"/>    
            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge"/>
            <path d="M17,22a1,1,0,0,1,1-1h8V6a2,2,0,0,0-2-2H10.87L4,10.86V30a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2V23H18A1,1,0,0,1,17,22ZM12,12H6v-.32L11.69,6H12Z" class="clr-i-solid clr-i-solid-path-1"/>   
            <path d="M29.32,16.35a1,1,0,0,0-1.41,1.41L31.16,21H26v2h5.19l-3.28,3.28a1,1,0,1,0,1.41,1.41L35,22Z" class="clr-i-solid clr-i-solid-path-2"/>
            <path d="M29.32,16.35a1,1,0,0,0-1.41,1.41L31.16,21H26v2h5.19l-3.28,3.28a1,1,0,1,0,1.41,1.41L35,22Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"/>   
            <path d="M17,22a1,1,0,0,1,1-1h8V15.4H22.23A3.68,3.68,0,0,1,19,9.89L22.45,4H10.87L4,10.86V30a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2V23H18A1,1,0,0,1,17,22ZM12,12H6v-.32L11.69,6H12Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted"/>   
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-solid--alerted clr-i-solid-path-3--alerted clr-i-alert"/>
            <path d="M29.32,16.35a1,1,0,0,0-1.41,1.41L31.16,21H26v2h5.19l-3.28,3.28a1,1,0,1,0,1.41,1.41L35,22Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>   
            <path d="M17,22a1,1,0,0,1,1-1h8V12.34A7.46,7.46,0,0,1,22.78,4H10.87L4,10.86V30a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2V23H18A1,1,0,0,1,17,22ZM12,12H6v-.32L11.69,6H12Z" class="clr-i-solid--badged clr-i-solid-path-2--badged"/>    
            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge"/>
        </svg>`,

    "upload-cloud": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-alert can-badge"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">    
            <title>upload-cloud</title>   
            <path d="M30.31,13c0-.1,0-.21,0-.32a10.26,10.26,0,0,0-10.45-10,10.47,10.47,0,0,0-9.6,6.1A9.74,9.74,0,0,0,1.6,18.4,9.62,9.62,0,0,0,11.25,28H15V26H11.25A7.65,7.65,0,0,1,11,10.74l.67,0,.23-.63a8.43,8.43,0,0,1,8-5.4,8.26,8.26,0,0,1,8.45,8,7.75,7.75,0,0,1,0,.8l-.08.72.65.3A6,6,0,0,1,26.38,26H21v2h5.38a8,8,0,0,0,3.93-15Z" class="clr-i-outline clr-i-outline-path-1"/>   
            <path d="M22.28,21.85A1,1,0,0,0,23,20.14l-5-5-5,5a1,1,0,0,0,1.41,1.41L17,19V31.25a1,1,0,1,0,2,0V19l2.57,2.57A1,1,0,0,0,22.28,21.85Z" class="clr-i-outline clr-i-outline-path-2"/>
            <path d="M22.28,21.85A1,1,0,0,0,23,20.14l-5-5-5,5a1,1,0,0,0,1.41,1.41L17,19V31.25a1,1,0,1,0,2,0V19l2.57,2.57A1,1,0,0,0,22.28,21.85Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/>   
            <path d="M3.6,18.38A7.71,7.71,0,0,1,11,10.74l.67,0,.23-.63a8.43,8.43,0,0,1,8-5.4,8.81,8.81,0,0,1,2,.25l1-1.8a10.8,10.8,0,0,0-3.07-.45,10.47,10.47,0,0,0-9.6,6.1A9.74,9.74,0,0,0,1.6,18.4,9.62,9.62,0,0,0,11.25,28H15V26H11.25A7.66,7.66,0,0,1,3.6,18.38Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"/>   
            <path d="M32.9,15.4H30.21A6,6,0,0,1,26.38,26H21v2h5.38A8,8,0,0,0,32.9,15.4Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"/>   
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-4--alerted clr-i-alert"/>
            <path d="M22.28,21.85A1,1,0,0,0,23,20.14l-5-5-5,5a1,1,0,0,0,1.41,1.41L17,19V31.25a1,1,0,1,0,2,0V19l2.57,2.57A1,1,0,0,0,22.28,21.85Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>   
            <path d="M30.92,13.44a7.13,7.13,0,0,1-2.63-.14c0,.08,0,.15,0,.23l-.08.72.65.3A6,6,0,0,1,26.38,26H21v2h5.38a8,8,0,0,0,4.54-14.56Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>   
            <path d="M3.6,18.38A7.71,7.71,0,0,1,11,10.74l.67,0,.23-.63a8.43,8.43,0,0,1,8-5.4,8.79,8.79,0,0,1,2.68.42,7.45,7.45,0,0,1,.5-1.94,10.79,10.79,0,0,0-3.18-.48,10.47,10.47,0,0,0-9.6,6.1A9.74,9.74,0,0,0,1.6,18.4,9.62,9.62,0,0,0,11.25,28H15V26H11.25A7.66,7.66,0,0,1,3.6,18.38Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"/>    
            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge"/>
        </svg>`,

    "download-cloud": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-alert can-badge"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">    
            <title>download-cloud</title>   
            <path d="M30.31,13c0-.1,0-.21,0-.32a10.26,10.26,0,0,0-10.45-10,10.47,10.47,0,0,0-9.6,6.1A9.65,9.65,0,0,0,10.89,28a3,3,0,0,1,0-2A7.65,7.65,0,0,1,11,10.74l.67,0,.23-.63a8.43,8.43,0,0,1,8-5.4,8.26,8.26,0,0,1,8.45,8,7.75,7.75,0,0,1,0,.8l-.08.72.65.3A6,6,0,0,1,26.38,26H25.09a3,3,0,0,1,0,2h1.28a8,8,0,0,0,3.93-15Z" class="clr-i-outline clr-i-outline-path-1"/>   
            <path d="M22.28,26.07a1,1,0,0,0-.71.29L19,28.94V16.68a1,1,0,1,0-2,0V28.94l-2.57-2.57A1,1,0,0,0,13,27.78l5,5,5-5a1,1,0,0,0-.71-1.71Z" class="clr-i-outline clr-i-outline-path-2"/>
            <path d="M22.28,26.07a1,1,0,0,0-.71.29L19,28.94V16.68a1,1,0,1,0-2,0V28.94l-2.57-2.57A1,1,0,0,0,13,27.78l5,5,5-5a1,1,0,0,0-.71-1.71Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/>   
            <path d="M19.87,4.69a8.81,8.81,0,0,1,2,.25l1-1.8a10.8,10.8,0,0,0-3.07-.45,10.47,10.47,0,0,0-9.6,6.1A9.65,9.65,0,0,0,10.89,28a3,3,0,0,1,0-2A7.65,7.65,0,0,1,11,10.74l.67,0,.23-.63A8.43,8.43,0,0,1,19.87,4.69Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"/>   
            <path d="M32.9,15.4H30.21A6,6,0,0,1,26.38,26H25.09a3,3,0,0,1,0,2h1.28A8,8,0,0,0,32.9,15.4Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"/>   
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-4--alerted clr-i-alert"/>
            <path d="M22.28,26.07a1,1,0,0,0-.71.29L19,28.94V16.68a1,1,0,1,0-2,0V28.94l-2.57-2.57A1,1,0,0,0,13,27.78l5,5,5-5a1,1,0,0,0-.71-1.71Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>   
            <path d="M19.87,4.69a8.79,8.79,0,0,1,2.68.42,7.45,7.45,0,0,1,.5-1.94,10.79,10.79,0,0,0-3.18-.48,10.47,10.47,0,0,0-9.6,6.1A9.65,9.65,0,0,0,10.89,28a3,3,0,0,1,0-2A7.65,7.65,0,0,1,11,10.74l.67,0,.23-.63A8.43,8.43,0,0,1,19.87,4.69Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>   
            <path d="M30.92,13.44a7.13,7.13,0,0,1-2.63-.14c0,.08,0,.15,0,.23l-.08.72.65.3A6,6,0,0,1,26.38,26H25.09a3,3,0,0,1,0,2h1.28a8,8,0,0,0,4.54-14.61Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"/>    
            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge"/>
        </svg>`,

    "plugin": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-alert can-badge has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">     
            <title>plugin</title>   
            <path d="M29.81,16H29V8.83a2,2,0,0,0-2-2H21A5.14,5.14,0,0,0,16.51,2,5,5,0,0,0,11,6.83H4a2,2,0,0,0-2,2V17H4.81A3.13,3.13,0,0,1,8,19.69,3,3,0,0,1,7.22,22,3,3,0,0,1,5,23H2v8.83a2,2,0,0,0,2,2H27a2,2,0,0,0,2-2V26h1a5,5,0,0,0,5-5.51A5.15,5.15,0,0,0,29.81,16Zm2.41,7A3,3,0,0,1,30,24H27v7.83H4V25H5a5,5,0,0,0,5-5.51A5.15,5.15,0,0,0,4.81,15H4V8.83h9V7a3,3,0,0,1,1-2.22A3,3,0,0,1,16.31,4,3.13,3.13,0,0,1,19,7.19V8.83h8V18h2.81A3.13,3.13,0,0,1,33,20.69,3,3,0,0,1,32.22,23Z" class="clr-i-outline clr-i-outline-path-1"/>
            <path d="M29.81,16H29v-.6H27V18h2.81A3.13,3.13,0,0,1,33,20.69,3,3,0,0,1,32.22,23,3,3,0,0,1,30,24H27v7.83H4V25H5a5,5,0,0,0,5-5.51A5.15,5.15,0,0,0,4.81,15H4V8.83h9V7a3,3,0,0,1,1-2.22A3,3,0,0,1,16.31,4,3.13,3.13,0,0,1,19,7.19V8.83h.66L21,6.59A5.12,5.12,0,0,0,16.51,2,5,5,0,0,0,11,6.83H4a2,2,0,0,0-2,2V17H4.81A3.13,3.13,0,0,1,8,19.69,3,3,0,0,1,7.22,22,3,3,0,0,1,5,23H2v8.83a2,2,0,0,0,2,2H27a2,2,0,0,0,2-2V26h1a5,5,0,0,0,5-5.51A5.15,5.15,0,0,0,29.81,16Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/>   
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted clr-i-alert"/>
            <path d="M29.81,16H29V13.43a7.45,7.45,0,0,1-2-.55V18h2.81A3.13,3.13,0,0,1,33,20.69,3,3,0,0,1,32.22,23,3,3,0,0,1,30,24H27v7.83H4V25H5a5,5,0,0,0,5-5.51A5.15,5.15,0,0,0,4.81,15H4V8.83h9V7a3,3,0,0,1,1-2.22A3,3,0,0,1,16.31,4,3.13,3.13,0,0,1,19,7.19V8.83h4.06a7.44,7.44,0,0,1-.51-2H21A5.14,5.14,0,0,0,16.51,2,5,5,0,0,0,11,6.83H4a2,2,0,0,0-2,2V17H4.81A3.13,3.13,0,0,1,8,19.69,3,3,0,0,1,7.22,22,3,3,0,0,1,5,23H2v8.83a2,2,0,0,0,2,2H27a2,2,0,0,0,2-2V26h1a5,5,0,0,0,5-5.51A5.15,5.15,0,0,0,29.81,16Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>    
            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-2--badged clr-i-badge"/>
            <path d="M29.81,16H29V8.83a2,2,0,0,0-2-2H21A5.14,5.14,0,0,0,16.51,2,5,5,0,0,0,11,6.83H4a2,2,0,0,0-2,2V17H4.81A3.13,3.13,0,0,1,8,19.69,3,3,0,0,1,7.22,22,3,3,0,0,1,5,23H2v8.83a2,2,0,0,0,2,2H27a2,2,0,0,0,2-2V26h1a5,5,0,0,0,5-5.51A5.15,5.15,0,0,0,29.81,16Z" class="clr-i-solid clr-i-solid-path-1"/>
            <path d="M29.81,16H29v-.6H22.23A3.68,3.68,0,0,1,19,9.89L21,6.59A5.12,5.12,0,0,0,16.51,2,5,5,0,0,0,11,6.83H4a2,2,0,0,0-2,2V17H4.81A3.13,3.13,0,0,1,8,19.69,3,3,0,0,1,7.22,22,3,3,0,0,1,5,23H2v8.83a2,2,0,0,0,2,2H27a2,2,0,0,0,2-2V26h1a5,5,0,0,0,5-5.51A5.15,5.15,0,0,0,29.81,16Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"/>   
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert"/>
            <path d="M29.81,16H29V13.43a7.5,7.5,0,0,1-6.45-6.59H21A5.14,5.14,0,0,0,16.51,2,5,5,0,0,0,11,6.83H4a2,2,0,0,0-2,2V17H4.81A3.13,3.13,0,0,1,8,19.69,3,3,0,0,1,7.22,22,3,3,0,0,1,5,23H2v8.83a2,2,0,0,0,2,2H27a2,2,0,0,0,2-2V26h1a5,5,0,0,0,5-5.51A5.15,5.15,0,0,0,29.81,16Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>    
            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge"/>
        </svg>`,

    "computer": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-alert can-badge has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">     
            <title>computer</title>    
            <polygon points="9.6 22.88 9.6 10.6 24.4 10.6 25.98 9 8 9 8 22.88 9.6 22.88" class="clr-i-outline clr-i-outline-path-1"/>
            <path d="M6,7H30V23h2V6.5A1.5,1.5,0,0,0,30.5,5H5.5A1.5,1.5,0,0,0,4,6.5V23H6Z" class="clr-i-outline clr-i-outline-path-2"/>   
            <path d="M1,25v3.4A2.6,2.6,0,0,0,3.6,31H32.34a2.6,2.6,0,0,0,2.6-2.6V25Zm32,3.4a.6.6,0,0,1-.6.6H3.56a.6.6,0,0,1-.6-.6V26.53h9.95a1.64,1.64,0,0,0,1.5,1h7.13a1.64,1.64,0,0,0,1.5-1H33Z" class="clr-i-outline clr-i-outline-path-3"/>
            <path d="M1,25v3.4A2.6,2.6,0,0,0,3.6,31H32.34a2.6,2.6,0,0,0,2.6-2.6V25Zm32,3.4a.6.6,0,0,1-.6.6H3.56a.6.6,0,0,1-.6-.6V26.53h9.95a1.64,1.64,0,0,0,1.5,1h7.13a1.64,1.64,0,0,0,1.5-1H33Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/>   
            <path d="M9.6,22.88V10.6h9.14A3.64,3.64,0,0,1,19,9.89L19.56,9H8V22.88Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"/>   
            <path d="M6,7H20.71l1.15-2H5.5A1.5,1.5,0,0,0,4,6.5V23H6Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"/>    
            <rect x="30" y="15.4" width="2" height="7.6" class="clr-i-outline--alerted clr-i-outline-path-4--alerted"/>   
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-5--alerted clr-i-alert"/>
            <path d="M1,25v3.4A2.6,2.6,0,0,0,3.6,31H32.34a2.6,2.6,0,0,0,2.6-2.6V25Zm32,3.4a.6.6,0,0,1-.6.6H3.56a.6.6,0,0,1-.6-.6V26.53h9.95a1.64,1.64,0,0,0,1.5,1h7.13a1.64,1.64,0,0,0,1.5-1H33Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>   
            <path d="M22.5,6a7.52,7.52,0,0,1,.07-1H5.5A1.5,1.5,0,0,0,4,6.5V23H6V7H22.57A7.52,7.52,0,0,1,22.5,6Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>   
            <path d="M30,13.5V23h2V13.22A7.49,7.49,0,0,1,30,13.5Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"/>   
            <path d="M23.13,9H8V22.88H9.6V10.6H24.08A7.49,7.49,0,0,1,23.13,9Z" class="clr-i-outline--badged clr-i-outline-path-4--badged"/>    
            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-5--badged clr-i-badge"/>
            <path d="M23.81,26c-.35.9-.94,1.5-1.61,1.5H13.74c-.68,0-1.26-.6-1.61-1.5H1v1.75A2.45,2.45,0,0,0,3.6,30H32.4A2.45,2.45,0,0,0,35,27.75V26Z" class="clr-i-solid clr-i-solid-path-1"/>   
            <path d="M7,10H29V24h3V7.57A1.54,1.54,0,0,0,30.5,6H5.5A1.54,1.54,0,0,0,4,7.57V24H7Z" class="clr-i-solid clr-i-solid-path-2"/>
            <path d="M23.81,26c-.35.9-.94,1.5-1.61,1.5H13.74c-.68,0-1.26-.6-1.61-1.5H1v1.75A2.45,2.45,0,0,0,3.6,30H32.4A2.45,2.45,0,0,0,35,27.75V26Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"/>    
            <rect x="29" y="15.4" width="3" height="8.6" class="clr-i-solid--alerted clr-i-solid-path-2--alerted"/>   
            <path d="M7,10H19L19,9.89,21.29,6H5.5A1.54,1.54,0,0,0,4,7.57V24H7Z" class="clr-i-solid--alerted clr-i-solid-path-3--alerted"/>   
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-solid--alerted clr-i-solid-path-4--alerted clr-i-alert"/>
            <path d="M23.81,26c-.35.9-.94,1.5-1.61,1.5H13.74c-.68,0-1.26-.6-1.61-1.5H1v1.75A2.45,2.45,0,0,0,3.6,30H32.4A2.45,2.45,0,0,0,35,27.75V26Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>   
            <path d="M7,10H23.66A7.46,7.46,0,0,1,22.5,6H5.5A1.54,1.54,0,0,0,4,7.57V24H7Z" class="clr-i-solid--badged clr-i-solid-path-2--badged"/>   
            <path d="M32,13.22a7.14,7.14,0,0,1-3,.2V24h3Z" class="clr-i-solid--badged clr-i-solid-path-3--badged"/>    
            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-4--badged clr-i-badge"/>
        </svg>`,

    "display": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-alert can-badge has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">    
            <title>display</title>   
            <path d="M32.5,3H3.5A1.5,1.5,0,0,0,2,4.5v21A1.5,1.5,0,0,0,3.5,27h29A1.5,1.5,0,0,0,34,25.5V4.5A1.5,1.5,0,0,0,32.5,3ZM32,25H4V5H32Z" class="clr-i-outline clr-i-outline-path-1"/>    
            <polygon points="7.7 8.76 28.13 8.76 29.94 7.16 6.1 7.16 6.1 23 7.7 23 7.7 8.76" class="clr-i-outline clr-i-outline-path-2"/>
            <path d="M26,32H24.26a3.61,3.61,0,0,1-1.5-2.52V28.13H21.24V29.5A4.2,4.2,0,0,0,22.17,32H13.83a4.2,4.2,0,0,0,.93-2.52V28.13H13.24V29.5A3.61,3.61,0,0,1,11.74,32H9.94a1,1,0,1,0,0,2H26.06a.92.92,0,0,0,1-1A1,1,0,0,0,26,32Z" class="clr-i-outline clr-i-outline-path-3"/>
            <path d="M26,32H24.26a3.61,3.61,0,0,1-1.5-2.52V28.13H21.24V29.5A4.2,4.2,0,0,0,22.17,32H13.83a4.2,4.2,0,0,0,.93-2.52V28.13H13.24V29.5A3.61,3.61,0,0,1,11.74,32H9.94a1,1,0,1,0,0,2H26.06a.92.92,0,0,0,1-1A1,1,0,0,0,26,32Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/>   
            <path d="M33.68,15.4H32V25H4V5H21.87L23,3H3.5A1.5,1.5,0,0,0,2,4.5v21A1.5,1.5,0,0,0,3.5,27h29A1.5,1.5,0,0,0,34,25.5V15.38Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"/>    
            <polygon points="7.7 23 7.7 8.76 19.7 8.76 20.62 7.16 6.1 7.16 6.1 23 7.7 23" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"/>
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-4--alerted clr-i-alert"/>
            <path d="M26,32H24.26a3.61,3.61,0,0,1-1.5-2.52V28.13H21.24V29.5A4.2,4.2,0,0,0,22.17,32H13.83a4.2,4.2,0,0,0,.93-2.52V28.13H13.24V29.5A3.61,3.61,0,0,1,11.74,32H9.94a1,1,0,1,0,0,2H26.06a.92.92,0,0,0,1-1A1,1,0,0,0,26,32Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>   
            <path d="M6.1,23H7.7V8.76H23a7.44,7.44,0,0,1-.43-1.6H6.1Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>   
            <path d="M32,13.22V25H4V5H22.57a7.45,7.45,0,0,1,.55-2H3.5A1.5,1.5,0,0,0,2,4.5v21A1.5,1.5,0,0,0,3.5,27h29A1.5,1.5,0,0,0,34,25.5V12.34A7.45,7.45,0,0,1,32,13.22Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"/>    
            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge"/>
            <path d="M26,32H24.26a3.61,3.61,0,0,1-1.5-2.52V28.13H13.24V29.5A3.61,3.61,0,0,1,11.74,32H9.94a1,1,0,1,0,0,2H26.06a.92.92,0,0,0,1-1A1,1,0,0,0,26,32Z" class="clr-i-solid clr-i-solid-path-1"/>   
            <path d="M32.5,3H3.5A1.5,1.5,0,0,0,2,4.5v21A1.5,1.5,0,0,0,3.5,27h29A1.5,1.5,0,0,0,34,25.5V4.5A1.5,1.5,0,0,0,32.5,3ZM31,21.83H5V7H31Z" class="clr-i-solid clr-i-solid-path-2"/>
            <path d="M26,32H24.26a3.61,3.61,0,0,1-1.5-2.52V28.13H13.24V29.5A3.61,3.61,0,0,1,11.74,32H9.94a1,1,0,1,0,0,2H26.06a.92.92,0,0,0,1-1A1,1,0,0,0,26,32Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"/>   
            <path d="M33.68,15.4H31v6.43H5V7H20.71L23,3H3.5A1.5,1.5,0,0,0,2,4.5v21A1.5,1.5,0,0,0,3.5,27h29A1.5,1.5,0,0,0,34,25.5V15.38Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted"/>   
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-solid--alerted clr-i-solid-path-3--alerted clr-i-alert"/>
            <path d="M26,32H24.26a3.61,3.61,0,0,1-1.5-2.52V28.13H13.24V29.5A3.61,3.61,0,0,1,11.74,32H9.94a1,1,0,1,0,0,2H26.06a.92.92,0,0,0,1-1A1,1,0,0,0,26,32Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>   
            <path d="M31,13.43v8.41H5V7H22.57a7.29,7.29,0,0,1,.55-4H3.5A1.5,1.5,0,0,0,2,4.5v21A1.5,1.5,0,0,0,3.5,27h29A1.5,1.5,0,0,0,34,25.5V12.34A7.44,7.44,0,0,1,31,13.43Z" class="clr-i-solid--badged clr-i-solid-path-2--badged"/>    
            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge"/>
        </svg>`


};

if (window.hasOwnProperty("ClarityIcons")) {

    window[ "ClarityIcons" ].add(technologyShapes);
}

export { technologyShapes as TechnologyShapes };