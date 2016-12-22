/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/* tslint:disable:max-line-length */
export const SVG_ICON_TEMPLATES: any = {

    "home": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>home</title>

                <path class="clr-i-outline clr-i-outline-path-1" d="M33.71,17.29l-15-15a1,1,0,0,0-1.41,0l-15,15a1,1,0,0,0,1.41,1.41L18,4.41,32.29,18.71a1,1,0,0,0,1.41-1.41Z"/>
                <path class="clr-i-outline clr-i-outline-path-2" d="M28,32h-5V22H13V32H8V18L6,20V32a2,2,0,0,0,2,2h7V24h6V34h7a2,2,0,0,0,2-2V19.76l-2-2Z"/>

                <path class="clr-i-solid clr-i-solid-path-1" d="M33,19a1,1,0,0,1-.71-.29L18,4.41,3.71,18.71a1,1,0,0,1-1.41-1.41l15-15a1,1,0,0,1,1.41,0l15,15A1,1,0,0,1,33,19Z"/>
                <path class="clr-i-solid clr-i-solid-path-2" d="M18,7.79,6,19.83V32a2,2,0,0,0,2,2h7V24h6V34h7a2,2,0,0,0,2-2V19.76Z"/>
            </svg>
        `,

    get "house"() {
        return this["home"];
    },

    "bars": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>bars</title>
                <path class="clr-i-outline clr-i-outline-path-1" d="M32,29H4a1,1,0,0,1,0-2H32a1,1,0,0,1,0,2Z"/>
                <path class="clr-i-outline clr-i-outline-path-2" d="M32,19H4a1,1,0,0,1,0-2H32a1,1,0,0,1,0,2Z"/>
                <path class="clr-i-outline clr-i-outline-path-3" d="M32,9H4A1,1,0,0,1,4,7H32a1,1,0,0,1,0,2Z"/>
            </svg>
        `,

    get "menu"() {
        return this["bars"];
    },

    "cog": `
            <svg version="1.1" version="1.1" viewBox="0 0 36 36" class="can-alert can-badge has-solid">
                <title>cog</title>

                <path class="clr-i-outline clr-i-outline-path-1" d="M18.1,11c-3.9,0-7,3.1-7,7s3.1,7,7,7c3.9,0,7-3.1,7-7S22,11,18.1,11z M18.1,23c-2.8,0-5-2.2-5-5s2.2-5,5-5c2.8,0,5,2.2,5,5S20.9,23,18.1,23z"/>
                <path class="clr-i-outline clr-i-outline-path-2" d="M32.8,14.7L30,13.8l-0.6-1.5l1.4-2.6c0.3-0.6,0.2-1.4-0.3-1.9l-2.4-2.4c-0.5-0.5-1.3-0.6-1.9-0.3l-2.6,1.4l-1.5-0.6l-0.9-2.8C21,2.5,20.4,2,19.7,2h-3.4c-0.7,0-1.3,0.5-1.4,1.2L14,6c-0.6,0.1-1.1,0.3-1.6,0.6L9.8,5.2C9.2,4.9,8.4,5,7.9,5.5L5.5,7.9C5,8.4,4.9,9.2,5.2,9.8l1.3,2.5c-0.2,0.5-0.4,1.1-0.6,1.6l-2.8,0.9C2.5,15,2,15.6,2,16.3v3.4c0,0.7,0.5,1.3,1.2,1.5L6,22.1l0.6,1.5l-1.4,2.6c-0.3,0.6-0.2,1.4,0.3,1.9l2.4,2.4c0.5,0.5,1.3,0.6,1.9,0.3l2.6-1.4l1.5,0.6l0.9,2.9c0.2,0.6,0.8,1.1,1.5,1.1h3.4c0.7,0,1.3-0.5,1.5-1.1l0.9-2.9l1.5-0.6l2.6,1.4c0.6,0.3,1.4,0.2,1.9-0.3l2.4-2.4c0.5-0.5,0.6-1.3,0.3-1.9l-1.4-2.6l0.6-1.5l2.9-0.9c0.6-0.2,1.1-0.8,1.1-1.5v-3.4C34,15.6,33.5,14.9,32.8,14.7z M32,19.4l-3.6,1.1L28.3,21c-0.3,0.7-0.6,1.4-0.9,2.1l-0.3,0.5l1.8,3.3l-2,2l-3.3-1.8l-0.5,0.3c-0.7,0.4-1.4,0.7-2.1,0.9l-0.5,0.1L19.4,32h-2.8l-1.1-3.6L15,28.3c-0.7-0.3-1.4-0.6-2.1-0.9l-0.5-0.3l-3.3,1.8l-2-2l1.8-3.3l-0.3-0.5c-0.4-0.7-0.7-1.4-0.9-2.1l-0.1-0.5L4,19.4v-2.8l3.4-1l0.2-0.5c0.2-0.8,0.5-1.5,0.9-2.2l0.3-0.5L7.1,9.1l2-2l3.2,1.8l0.5-0.3c0.7-0.4,1.4-0.7,2.2-0.9l0.5-0.2L16.6,4h2.8l1.1,3.5L21,7.7c0.7,0.2,1.4,0.5,2.1,0.9l0.5,0.3l3.3-1.8l2,2l-1.8,3.3l0.3,0.5c0.4,0.7,0.7,1.4,0.9,2.1l0.1,0.5l3.6,1.1V19.4z"/>

                <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M11.1,18c0,3.9,3.1,7,7,7c3.9,0,7-3.1,7-7s-3.1-7-7-7C14.2,11,11.1,14.1,11.1,18z M23.1,18c0,2.8-2.2,5-5,5c-2.8,0-5-2.2-5-5s2.2-5,5-5C20.9,13,23.1,15.2,23.1,18z"/>
                <path class="clr-i-outline--badged clr-i-outline-path-2--badged" d="M32.8,14.7L30,13.8l-0.1-0.3c-0.8,0-1.6-0.2-2.4-0.4c0.3,0.6,0.6,1.3,0.8,1.9l0.1,0.5l3.6,1.1v2.8l-3.6,1.1L28.3,21c-0.3,0.7-0.6,1.4-0.9,2.1l-0.3,0.5l1.8,3.3l-2,2l-3.3-1.8l-0.5,0.3c-0.7,0.4-1.4,0.7-2.1,0.9l-0.5,0.1L19.4,32h-2.8l-1.1-3.6L15,28.3c-0.7-0.3-1.4-0.6-2.1-0.9l-0.5-0.3l-3.3,1.8l-2-2l1.8-3.3l-0.3-0.5c-0.4-0.7-0.7-1.4-0.9-2.1l-0.1-0.5L4,19.4v-2.8l3.4-1l0.2-0.5c0.2-0.8,0.5-1.5,0.9-2.2l0.3-0.5L7.1,9.1l2-2l3.2,1.8l0.5-0.3c0.7-0.4,1.4-0.7,2.2-0.9l0.5-0.2L16.6,4h2.8l1.1,3.5L21,7.7c0.7,0.2,1.3,0.5,1.9,0.8c-0.3-0.8-0.4-1.6-0.4-2.5l-0.4-0.2l-0.9-2.8C21,2.5,20.4,2,19.7,2h-3.4c-0.7,0-1.3,0.5-1.4,1.2L14,6c-0.6,0.1-1.1,0.3-1.6,0.6L9.8,5.2C9.2,4.9,8.4,5,7.9,5.5L5.5,7.9C5,8.4,4.9,9.2,5.2,9.8l1.3,2.5c-0.2,0.5-0.4,1.1-0.6,1.6l-2.8,0.9C2.5,15,2,15.6,2,16.3v3.4c0,0.7,0.5,1.3,1.2,1.5L6,22.1l0.6,1.5l-1.4,2.6c-0.3,0.6-0.2,1.4,0.3,1.9l2.4,2.4c0.5,0.5,1.3,0.6,1.9,0.3l2.6-1.4l1.5,0.6l0.9,2.9c0.2,0.6,0.8,1.1,1.5,1.1h3.4c0.7,0,1.3-0.5,1.5-1.1l0.9-2.9l1.5-0.6l2.6,1.4c0.6,0.3,1.4,0.2,1.9-0.3l2.4-2.4c0.5-0.5,0.6-1.3,0.3-1.9l-1.4-2.6l0.6-1.5l2.9-0.9c0.6-0.2,1.1-0.8,1.1-1.5v-3.4C34,15.6,33.5,14.9,32.8,14.7z"/>
                <circle class="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge" cx="30" cy="6" r="5"/>

                <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M33.7,15.4h-5.3v0.1l3.6,1.1v2.8l-3.6,1.1L28.3,21c-0.3,0.7-0.6,1.4-0.9,2.1l-0.3,0.5l1.8,3.3l-2,2l-3.3-1.8l-0.5,0.3c-0.7,0.4-1.4,0.7-2.1,0.9l-0.5,0.1L19.4,32h-2.8l-1.1-3.6L15,28.3c-0.7-0.3-1.4-0.6-2.1-0.9l-0.5-0.3l-3.3,1.8l-2-2l1.8-3.3l-0.3-0.5c-0.4-0.7-0.7-1.4-0.9-2.1l-0.1-0.5L4,19.4v-2.8l3.4-1l0.2-0.5c0.2-0.8,0.5-1.5,0.9-2.2l0.3-0.5L7.1,9.1l2-2l3.2,1.8l0.5-0.3c0.7-0.4,1.4-0.7,2.2-0.9l0.5-0.2L16.6,4h2.8l1.1,3.4l1.4-2.3l-0.6-2C21,2.4,20.4,2,19.7,2h-3.4c-0.7,0-1.3,0.5-1.4,1.2L14,6c-0.6,0.1-1.1,0.3-1.6,0.6L9.8,5.2C9.2,4.9,8.4,5,7.9,5.5L5.5,7.9C5,8.4,4.9,9.2,5.2,9.8l1.3,2.5c-0.2,0.5-0.4,1.1-0.6,1.6l-2.8,0.9C2.5,15,2,15.6,2,16.3v3.4c0,0.7,0.5,1.3,1.2,1.5L6,22.1l0.6,1.5l-1.4,2.6c-0.3,0.6-0.2,1.4,0.3,1.9l2.4,2.4c0.5,0.5,1.3,0.6,1.9,0.3l2.6-1.4l1.5,0.6l0.9,2.9c0.2,0.6,0.8,1.1,1.5,1.1h3.4c0.7,0,1.3-0.5,1.5-1.1l0.9-2.9l1.5-0.6l2.6,1.4c0.6,0.3,1.4,0.2,1.9-0.3l2.4-2.4c0.5-0.5,0.6-1.3,0.3-1.9l-1.4-2.6l0.6-1.5l2.9-0.9c0.6-0.2,1.1-0.8,1.1-1.5v-3.4C34,16,33.9,15.7,33.7,15.4z"/>
                <path class="clr-i-outline--alerted clr-i-outline-path-2--alerted" d="M18.1,23c-2.8,0-5-2.2-5-5s2.2-5,5-5c0.2,0,0.5,0,0.7,0.1c-0.2-0.6-0.3-1.3-0.2-2h-0.5c-3.9,0-7,3.1-7,7c0,3.9,3.1,7,7,7c3.9,0,7-3.1,7-7c0-0.9-0.2-1.8-0.5-2.6h-2.2c0.5,0.8,0.7,1.6,0.7,2.5C23.1,20.8,20.9,23,18.1,23z"/>
                <path class="clr-i-outline--alerted clr-i-outline-path-3--alerted clr-i-alert" d="M26.9,1.1L21.1,11c-0.4,0.6-0.2,1.4,0.3,1.8c0.2,0.2,0.5,0.2,0.8,0.2h11.5c0.7,0,1.3-0.5,1.3-1.2c0-0.3-0.1-0.5-0.2-0.8l-5.7-9.9c-0.4-0.6-1.1-0.8-1.8-0.5C27.1,0.8,27,1,26.9,1.1z"/>

                <path class="clr-i-solid clr-i-solid-path-1" d="M32.57,15.72l-3.35-1a11.65,11.65,0,0,0-.95-2.33l1.64-3.07a.61.61,0,0,0-.11-.72L27.41,6.2a.61.61,0,0,0-.72-.11L23.64,7.72a11.62,11.62,0,0,0-2.36-1l-1-3.31A.61.61,0,0,0,19.69,3H16.31a.61.61,0,0,0-.58.43l-1,3.3a11.63,11.63,0,0,0-2.38,1l-3-1.62a.61.61,0,0,0-.72.11L6.2,8.59a.61.61,0,0,0-.11.72l1.62,3a11.63,11.63,0,0,0-1,2.37l-3.31,1a.61.61,0,0,0-.43.58v3.38a.61.61,0,0,0,.43.58l3.33,1a11.62,11.62,0,0,0,1,2.33L6.09,26.69a.61.61,0,0,0,.11.72L8.59,29.8a.61.61,0,0,0,.72.11l3.09-1.65a11.65,11.65,0,0,0,2.3.94l1,3.37a.61.61,0,0,0,.58.43h3.38a.61.61,0,0,0,.58-.43l1-3.38a11.63,11.63,0,0,0,2.28-.94l3.11,1.66a.61.61,0,0,0,.72-.11l2.39-2.39a.61.61,0,0,0,.11-.72l-1.66-3.1a11.63,11.63,0,0,0,.95-2.29l3.37-1a.61.61,0,0,0,.43-.58V16.31A.61.61,0,0,0,32.57,15.72ZM18,23.5A5.5,5.5,0,1,1,23.5,18,5.5,5.5,0,0,1,18,23.5Z"/>

                <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M32.57,15.72l-3.35-1a12.12,12.12,0,0,0-.47-1.32,7.49,7.49,0,0,1-6.14-6.16,11.82,11.82,0,0,0-1.33-.48l-1-3.31A.61.61,0,0,0,19.69,3H16.31a.61.61,0,0,0-.58.43l-1,3.3a11.63,11.63,0,0,0-2.38,1l-3-1.62a.61.61,0,0,0-.72.11L6.2,8.59a.61.61,0,0,0-.11.72l1.62,3a11.63,11.63,0,0,0-1,2.37l-3.31,1a.61.61,0,0,0-.43.58v3.38a.61.61,0,0,0,.43.58l3.33,1a11.62,11.62,0,0,0,1,2.33L6.09,26.69a.61.61,0,0,0,.11.72L8.59,29.8a.61.61,0,0,0,.72.11l3.09-1.65a11.65,11.65,0,0,0,2.3.94l1,3.37a.61.61,0,0,0,.58.43h3.38a.61.61,0,0,0,.58-.43l1-3.38a11.63,11.63,0,0,0,2.28-.94l3.11,1.66a.61.61,0,0,0,.72-.11l2.39-2.39a.61.61,0,0,0,.11-.72l-1.66-3.1a11.63,11.63,0,0,0,.95-2.29l3.37-1a.61.61,0,0,0,.43-.58V16.31A.61.61,0,0,0,32.57,15.72ZM18,23.5A5.5,5.5,0,1,1,23.5,18,5.5,5.5,0,0,1,18,23.5Z"/>
                <circle class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" cx="30" cy="6" r="5"/>

                <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M32.57,15.72,31.5,15.4H22.85A5.5,5.5,0,1,1,18,12.5a5.53,5.53,0,0,1,.65,0A3.68,3.68,0,0,1,19,9.89l2.09-3.62-.86-2.83A.61.61,0,0,0,19.69,3H16.31a.61.61,0,0,0-.58.43l-1,3.3a11.63,11.63,0,0,0-2.38,1l-3-1.62a.61.61,0,0,0-.72.11L6.2,8.59a.61.61,0,0,0-.11.72l1.62,3a11.63,11.63,0,0,0-1,2.37l-3.31,1a.61.61,0,0,0-.43.58v3.38a.61.61,0,0,0,.43.58l3.33,1a11.62,11.62,0,0,0,1,2.33L6.09,26.69a.61.61,0,0,0,.11.72L8.59,29.8a.61.61,0,0,0,.72.11l3.09-1.65a11.65,11.65,0,0,0,2.3.94l1,3.37a.61.61,0,0,0,.58.43h3.38a.61.61,0,0,0,.58-.43l1-3.38a11.63,11.63,0,0,0,2.28-.94l3.11,1.66a.61.61,0,0,0,.72-.11l2.39-2.39a.61.61,0,0,0,.11-.72l-1.66-3.1a11.63,11.63,0,0,0,.95-2.29l3.37-1a.61.61,0,0,0,.43-.58V16.31A.61.61,0,0,0,32.57,15.72Z"/>
                <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>

            </svg>
        `,

    get "settings"() {
        return this.cog;
    },

    "pencil": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>pencil</title>

                <path class="clr-i-outline clr-i-outline-path-1" d="M33.87,8.32,28,2.42a2.07,2.07,0,0,0-2.92,0L4.27,23.2l-1.9,8.2a2.06,2.06,0,0,0,2,2.5,2.14,2.14,0,0,0,.43,0L13.09,32,33.87,11.24A2.07,2.07,0,0,0,33.87,8.32ZM12.09,30.2,4.32,31.83l1.77-7.62L21.66,8.7l6,6ZM29,13.25l-6-6,3.48-3.46,5.9,6Z"/>

                <path class="clr-i-solid clr-i-solid-path-1" d="M4.22,23.2l-1.9,8.2a2.06,2.06,0,0,0,2,2.5,2.14,2.14,0,0,0,.43,0L13,32,28.84,16.22,20,7.4Z"/>
                <path class="clr-i-solid clr-i-solid-path-2" d="M33.82,8.32l-5.9-5.9a2.07,2.07,0,0,0-2.92,0L21.72,5.7l8.83,8.83,3.28-3.28A2.07,2.07,0,0,0,33.82,8.32Z"/>
            </svg>
        `,

    get "edit"() {
        return this["pencil"];
    },

    "refresh": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>refresh</title>
                <path class="clr-i-outline clr-i-outline-path-1" d="M22.4,11.65a1.09,1.09,0,0,0,1.09,1.09H34.43V1.81a1.09,1.09,0,1,0-2.19,0V8.95a16.41,16.41,0,1,0,1.47,15.86,1.12,1.12,0,0,0-2.05-.9,14.18,14.18,0,1,1-1.05-13.36H23.5A1.09,1.09,0,0,0,22.4,11.65Z"/>
            </svg>
        `,


    "sync": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>sync</title>
                <path class="clr-i-outline clr-i-outline-path-1" d="M32.84,15.72a1,1,0,1,0-2,.29A13.15,13.15,0,0,1,31,17.94,13,13,0,0,1,8.7,27h5.36a1,1,0,0,0,0-2h-9v9a1,1,0,1,0,2,0V28.2A15,15,0,0,0,32.84,15.72Z"/>
                <path class="clr-i-outline clr-i-outline-path-2" d="M30.06,1A1.05,1.05,0,0,0,29,2V7.83A14.94,14.94,0,0,0,3,17.94a15.16,15.16,0,0,0,.2,2.48,1,1,0,0,0,1,.84h.16a1,1,0,0,0,.82-1.15A13.23,13.23,0,0,1,5,17.94a13,13,0,0,1,13-13A12.87,12.87,0,0,1,27.44,9H22.06a1,1,0,0,0,0,2H31V2A1,1,0,0,0,30.06,1Z"/>
            </svg>
        `,


    "search": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>search</title>
                <path class="clr-i-outline clr-i-outline-path-1" d="M16.33,5.05A10.95,10.95,0,1,1,5.39,16,11,11,0,0,1,16.33,5.05m0-2.05a13,13,0,1,0,13,13,13,13,0,0,0-13-13Z"/>
                <path class="clr-i-outline clr-i-outline-path-2" d="M35,33.29l-7.37-7.42-1.42,1.41,7.37,7.42A1,1,0,1,0,35,33.29Z"/>
            </svg>
        `,


    "share": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>share</title>

                <path class="clr-i-outline clr-i-outline-path-1" d="M27.53,24a5,5,0,0,0-3.6,1.55L11.74,19.45a4.47,4.47,0,0,0,0-2.8l12.21-6.21a5.12,5.12,0,1,0-1.07-1.7L10.79,14.89a5,5,0,1,0,0,6.33l12.06,6.07A4.93,4.93,0,0,0,22.54,29a5,5,0,1,0,5-5Zm0-20a3,3,0,1,1-3,3A3,3,0,0,1,27.53,4ZM7,21a3,3,0,1,1,3-3A3,3,0,0,1,7,21ZM27.53,32a3,3,0,1,1,3-3A3,3,0,0,1,27.53,32Z"/>

                <path class="clr-i-solid clr-i-solid-path-1" d="M27.53,24a5,5,0,0,0-3.6,1.55L11.74,19.45a4.47,4.47,0,0,0,0-2.8l12.21-6.21a5.12,5.12,0,1,0-1.07-1.7L10.79,14.89a5,5,0,1,0,0,6.33l12.06,6.07A4.93,4.93,0,0,0,22.54,29a5,5,0,1,0,5-5Z"/>
            </svg>
        `,

    "view-list": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>view-list</title>
                <rect class="clr-i-outline clr-i-outline-path-1" x="2" y="8" width="2" height="2"/>
                <path class="clr-i-outline clr-i-outline-path-2" d="M7,10H31a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2Z"/>
                <rect class="clr-i-outline clr-i-outline-path-3" x="2" y="14" width="2" height="2"/>
                <path class="clr-i-outline clr-i-outline-path-4" d="M31,14H7a1,1,0,0,0,0,2H31a1,1,0,0,0,0-2Z"/>
                <rect class="clr-i-outline clr-i-outline-path-5" x="2" y="20" width="2" height="2"/>
                <path class="clr-i-outline clr-i-outline-path-6" d="M31,20H7a1,1,0,0,0,0,2H31a1,1,0,0,0,0-2Z"/>
                <rect class="clr-i-outline clr-i-outline-path-7" x="2" y="26" width="2" height="2"/>
                <path class="clr-i-outline clr-i-outline-path-8" d="M31,26H7a1,1,0,0,0,0,2H31a1,1,0,0,0,0-2Z"/>
            </svg>
        `,

    "view-cards": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>view-cards</title>
                <path class="clr-i-outline clr-i-outline-path-1" d="M15,17H2V15H15V6h2v9A2,2,0,0,1,15,17Z"/>
                <path class="clr-i-outline clr-i-outline-path-2" d="M32,17H19V15H32V6h2v9A2,2,0,0,1,32,17Z"/>
                <path class="clr-i-outline clr-i-outline-path-3" d="M15,30H2V28H15V20h2v8A2,2,0,0,1,15,30Z"/>
                <path class="clr-i-outline clr-i-outline-path-4" d="M32,30H19V28H32V20h2v8A2,2,0,0,1,32,30Z"/>
            </svg>
        `,

    "view-columns": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>view-columns</title>
                <path class="clr-i-outline clr-i-outline-path-1" d="M31,5H5A2,2,0,0,0,3,7V29a2,2,0,0,0,2,2H31a2,2,0,0,0,2-2V7A2,2,0,0,0,31,5ZM13,29H5V7h8Zm10,0H15V7h8Z"/>
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


    "bell": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-badge has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>bell</title>

                <path class="clr-i-outline clr-i-outline-path-1" d="M32.51,27.83A14.4,14.4,0,0,1,30,24.9a12.63,12.63,0,0,1-1.35-4.81V15.15A10.81,10.81,0,0,0,19.21,4.4V3.11a1.33,1.33,0,1,0-2.67,0V4.42A10.81,10.81,0,0,0,7.21,15.15v4.94A12.63,12.63,0,0,1,5.86,24.9a14.4,14.4,0,0,1-2.47,2.93,1,1,0,0,0-.34.75v1.36a1,1,0,0,0,1,1h27.8a1,1,0,0,0,1-1V28.58A1,1,0,0,0,32.51,27.83ZM5.13,28.94a16.17,16.17,0,0,0,2.44-3,14.24,14.24,0,0,0,1.65-5.85V15.15a8.74,8.74,0,1,1,17.47,0v4.94a14.24,14.24,0,0,0,1.65,5.85,16.17,16.17,0,0,0,2.44,3Z"/>
                <path class="clr-i-outline clr-i-outline-path-2" d="M18,34.28A2.67,2.67,0,0,0,20.58,32H15.32A2.67,2.67,0,0,0,18,34.28Z"/>

                <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M18,34.28A2.67,2.67,0,0,0,20.58,32H15.32A2.67,2.67,0,0,0,18,34.28Z"/>
                <path class="clr-i-outline--badged clr-i-outline-path-2--badged" d="M32.51,27.83A14.4,14.4,0,0,1,30,24.9a12.63,12.63,0,0,1-1.35-4.81V15.15a10.92,10.92,0,0,0-.16-1.79,7.44,7.44,0,0,1-2.24-.84,8.89,8.89,0,0,1,.4,2.64v4.94a14.24,14.24,0,0,0,1.65,5.85,16.17,16.17,0,0,0,2.44,3H5.13a16.17,16.17,0,0,0,2.44-3,14.24,14.24,0,0,0,1.65-5.85V15.15A8.8,8.8,0,0,1,18,6.31a8.61,8.61,0,0,1,4.76,1.44A7.49,7.49,0,0,1,22.5,6c0-.21,0-.42,0-.63a10.58,10.58,0,0,0-3.32-1V3.11a1.33,1.33,0,1,0-2.67,0V4.42A10.81,10.81,0,0,0,7.21,15.15v4.94A12.63,12.63,0,0,1,5.86,24.9a14.4,14.4,0,0,1-2.47,2.93,1,1,0,0,0-.34.75v1.36a1,1,0,0,0,1,1h27.8a1,1,0,0,0,1-1V28.58A1,1,0,0,0,32.51,27.83Z"/>
                <circle class="clr-i-outline--badged clr-i-outline-path-1--badged clr-i-badge" cx="30" cy="6" r="5"/>

                <path class="clr-i-solid clr-i-solid-path-1" d="M32.85,28.13l-.34-.3A14.37,14.37,0,0,1,30,24.9a12.63,12.63,0,0,1-1.35-4.81V15.15A10.81,10.81,0,0,0,19.21,4.4V3.11a1.33,1.33,0,1,0-2.67,0V4.42A10.81,10.81,0,0,0,7.21,15.15v4.94A12.63,12.63,0,0,1,5.86,24.9a14.4,14.4,0,0,1-2.47,2.93l-.34.3v2.82H32.85Z"/>
                <path class="clr-i-solid clr-i-solid-path-2" d="M15.32,32a2.65,2.65,0,0,0,5.25,0Z"/>

                <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M18,34.28A2.67,2.67,0,0,0,20.58,32H15.32A2.67,2.67,0,0,0,18,34.28Z"/>
                <path class="clr-i-solid--badged clr-i-solid-path-2--badged" d="M32.85,28.13l-.34-.3A14.37,14.37,0,0,1,30,24.9a12.63,12.63,0,0,1-1.35-4.81V15.15a10.92,10.92,0,0,0-.16-1.79A7.5,7.5,0,0,1,22.5,6c0-.21,0-.42,0-.63a10.57,10.57,0,0,0-3.32-1V3.11a1.33,1.33,0,1,0-2.67,0V4.42A10.81,10.81,0,0,0,7.21,15.15v4.94A12.63,12.63,0,0,1,5.86,24.9a14.4,14.4,0,0,1-2.47,2.93l-.34.3v2.82H32.85Z"/>
                <circle class="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge" cx="30" cy="6" r="5"/>
            </svg>
        `,

    get "notification"() {
        return this["bell"];
    },

    "times": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>times</title>
                <path class="clr-i-outline clr-i-outline-path-1" d="M19.41,18l8.29-8.29a1,1,0,0,0-1.41-1.41L18,16.59,9.71,8.29A1,1,0,0,0,8.29,9.71L16.59,18,8.29,26.29a1,1,0,1,0,1.41,1.41L18,19.41l8.29,8.29a1,1,0,0,0,1.41-1.41Z"/>
            </svg>
        `,

    get "close"() {
        return this["times"];
    },

    "check": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>check</title>
                <path class="clr-i-outline clr-i-outline-path-1" d="M13.72,27.69,3.29,17.27a1,1,0,0,1,1.41-1.41l9,9L31.29,7.29a1,1,0,0,1,1.41,1.41Z"/>
            </svg>
        `,

    get "success"() {
        return this["check"];
    },

    "check-circle": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>check-circle</title>

                <path class="clr-i-outline clr-i-outline-path-1" d="M18,6A12,12,0,1,0,30,18,12,12,0,0,0,18,6Zm0,22A10,10,0,1,1,28,18,10,10,0,0,1,18,28Z"/>
                <path class="clr-i-outline clr-i-outline-path-2" d="M16.34,23.74l-5-5a1,1,0,0,1,1.41-1.41l3.59,3.59,6.78-6.78a1,1,0,0,1,1.41,1.41Z"/>

                <path class="clr-i-solid clr-i-solid-path-1" d="M30,18A12,12,0,1,1,18,6,12,12,0,0,1,30,18Zm-4.77-2.16a1.4,1.4,0,0,0-2-2l-6.77,6.77L13,17.16a1.4,1.4,0,0,0-2,2l5.45,5.45Z"/>
            </svg>
    `,

    "info-circle": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>info-circle</title>

                <circle class="clr-i-outline clr-i-outline-path-1"  cx="17.93" cy="11.9" r="1.4"/>
                <path class="clr-i-outline clr-i-outline-path-2"  d="M21,23H19V15H16a1,1,0,0,0,0,2h1v6H15a1,1,0,1,0,0,2h6a1,1,0,0,0,0-2Z"/>
                <path class="clr-i-outline clr-i-outline-path-3"  d="M18,6A12,12,0,1,0,30,18,12,12,0,0,0,18,6Zm0,22A10,10,0,1,1,28,18,10,10,0,0,1,18,28Z"/>

                <path class="clr-i-solid clr-i-solid-path-1" d="M18,6A12,12,0,1,0,30,18,12,12,0,0,0,18,6Zm-2,5.15a2,2,0,1,1,2,2A2,2,0,0,1,15.9,11.15ZM23,24a1,1,0,0,1-1,1H15a1,1,0,1,1,0-2h2V17H16a1,1,0,0,1,0-2h4v8h2A1,1,0,0,1,23,24Z"/>

            </svg>
        `,

    get "info"() {
        return this["info-circle"];
    },

    "exclamation-triangle": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>exclamation-triangle</title>

                <path class="clr-i-outline clr-i-outline-path-1" d="M18,21.32a1.3,1.3,0,0,0,1.3-1.3V14a1.3,1.3,0,1,0-2.6,0v6A1.3,1.3,0,0,0,18,21.32Z"/>
                <circle class="clr-i-outline clr-i-outline-path-2" cx="17.95" cy="24.27" r="1.5"/>
                <path class="clr-i-outline clr-i-outline-path-3" d="M30.33,25.54,20.59,7.6a3,3,0,0,0-5.27,0L5.57,25.54A3,3,0,0,0,8.21,30H27.69a3,3,0,0,0,2.64-4.43Zm-1.78,1.94a1,1,0,0,1-.86.49H8.21a1,1,0,0,1-.88-1.48L17.07,8.55a1,1,0,0,1,1.76,0l9.74,17.94A1,1,0,0,1,28.55,27.48Z"/>

                <path class="clr-i-solid clr-i-solid-path-1" d="M30.33,25.54,20.59,7.6a3,3,0,0,0-5.27,0L5.57,25.54A3,3,0,0,0,8.21,30H27.69a3,3,0,0,0,2.64-4.43ZM16.46,12.74a1.49,1.49,0,0,1,3,0v6.89a1.49,1.49,0,1,1-3,0ZM18,26.25a1.72,1.72,0,1,1,1.72-1.72A1.72,1.72,0,0,1,18,26.25Z"/>
            </svg>
        `,

    get "warning"() {
        return this["exclamation-triangle"];
    },

    "exclamation-circle": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>exclamation-circle</title>

                <path class="clr-i-outline clr-i-outline-path-1" d="M18,6A12,12,0,1,0,30,18,12,12,0,0,0,18,6Zm0,22A10,10,0,1,1,28,18,10,10,0,0,1,18,28Z"/>
                <path class="clr-i-outline clr-i-outline-path-2" d="M18,20.07a1.3,1.3,0,0,1-1.3-1.3v-6a1.3,1.3,0,1,1,2.6,0v6A1.3,1.3,0,0,1,18,20.07Z"/>
                <circle class="clr-i-outline clr-i-outline-path-3" cx="17.95" cy="23.02" r="1.5"/>

                <path class="clr-i-solid clr-i-solid-path-1" d="M18,6A12,12,0,1,0,30,18,12,12,0,0,0,18,6Zm-1.49,6a1.49,1.49,0,0,1,3,0v6.89a1.49,1.49,0,1,1-3,0ZM18,25.5a1.72,1.72,0,1,1,1.72-1.72A1.72,1.72,0,0,1,18,25.5Z"/>
            </svg>
        `,

    get "error"() {
        return this["exclamation-circle"];
    },

    "envelope": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-alert can-badge has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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

    get "email"() {
        return this["envelope"];
    },

    "ban": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>ban</title>
                <path class="clr-i-outline clr-i-outline-path-1" d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2ZM4,18A13.93,13.93,0,0,1,7.43,8.85L27.15,28.57A14,14,0,0,1,4,18Zm24.57,9.15L8.85,7.43A14,14,0,0,1,28.57,27.15Z"/>
            </svg>
        `,

    get "cancel"() {
        return this["ban"];
    },

    "download": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-alert can-badge"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>download</title>

                <path class="clr-i-outline clr-i-outline-path-1" d="M31,31H5a1,1,0,0,0,0,2H31a1,1,0,0,0,0-2Z"/>
                <path class="clr-i-outline clr-i-outline-path-2" d="M18,29.48,28.61,18.87a1,1,0,0,0-1.41-1.41L19,25.65V5a1,1,0,0,0-2,0V25.65L8.81,17.46a1,1,0,1,0-1.41,1.41Z"/>

                <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M31,31H5a1,1,0,0,0,0,2H31a1,1,0,0,0,0-2Z"/>
                <path class="clr-i-outline--badged clr-i-outline-path-2--badged" d="M18,29.48,28.61,18.87a1,1,0,0,0-1.41-1.41L19,25.65V5a1,1,0,0,0-2,0V25.65L8.81,17.46a1,1,0,1,0-1.41,1.41Z"/>
                <circle class="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge" cx="30" cy="6" r="5"/>

                <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M31,31H5a1,1,0,0,0,0,2H31a1,1,0,0,0,0-2Z"/>
                <path class="clr-i-outline--alerted clr-i-outline-path-2--alerted" d="M18,29.48,28.61,18.87a1,1,0,0,0-1.41-1.41L19,25.65V5a1,1,0,0,0-2,0V25.65L8.81,17.46a1,1,0,1,0-1.41,1.41Z"/>
                <path class="clr-i-outline--alerted clr-i-outline-path-3--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>
            </svg>
        `,

    "upload": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-alert can-badge"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>upload</title>

                <path class="clr-i-outline clr-i-outline-path-1" d="M31,31H5a1,1,0,0,0,0,2H31a1,1,0,0,0,0-2Z"/>
                <path class="clr-i-outline clr-i-outline-path-1" d="M8.81,15,17,6.83V27.48a1,1,0,0,0,2,0V6.83L27.19,15a1,1,0,0,0,1.41-1.41L18,3,7.39,13.61A1,1,0,1,0,8.81,15Z"/>

                <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M31,31H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h26c0.6,0,1-0.4,1-1S31.6,31,31,31z"/>
                <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M8.8,15L17,6.8v20.6c0,0.6,0.4,1,1,1s1-0.4,1-1V6.8L20.1,8l1-1.8L18,3L7.4,13.6C7,14,6.9,14.6,7.2,15s1,0.5,1.4,0.1C8.7,15.1,8.8,15.1,8.8,15z"/>
                <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted clr-i-alert" d="M26.9,1.1L21.1,11c-0.4,0.6-0.2,1.4,0.3,1.8c0.2,0.2,0.5,0.2,0.8,0.2h11.5c0.7,0,1.3-0.5,1.3-1.2c0-0.3-0.1-0.5-0.2-0.8l-5.7-9.9c-0.4-0.6-1.1-0.8-1.8-0.5C27.1,0.8,27,1,26.9,1.1z"/>

                <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M31,31H5a1,1,0,0,0,0,2H31a1,1,0,0,0,0-2Z"/>
                <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M8.81,15,17,6.83V27.48a1,1,0,0,0,2,0V6.83L27.19,15a1,1,0,0,0,1.41-1.41L18,3,7.39,13.61A1,1,0,1,0,8.81,15Z"/>
                <circle class="clr-i-outline--badged clr-i-outline-path-1--badged clr-i-badge" cx="30" cy="6" r="5"/>
            </svg>
        `,


    "lock": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>lock</title>
                <path class="clr-i-outline clr-i-outline-path-1" d="M18.09,20.59A2.41,2.41,0,0,0,17,25.14V28h2V25.23a2.41,2.41,0,0,0-.91-4.64Z"/>
                <path class="clr-i-outline clr-i-outline-path-2" d="M26,15V10.72a8.2,8.2,0,0,0-8-8.36,8.2,8.2,0,0,0-8,8.36V15H7V32a2,2,0,0,0,2,2H27a2,2,0,0,0,2-2V15ZM12,10.72a6.2,6.2,0,0,1,6-6.36,6.2,6.2,0,0,1,6,6.36V15H12ZM9,32V17H27V32Z"/>

                <path class="clr-i-solid clr-i-solid-path-1" d="M26,15V10.72a8.2,8.2,0,0,0-8-8.36,8.2,8.2,0,0,0-8,8.36V15H7V32a2,2,0,0,0,2,2H27a2,2,0,0,0,2-2V15ZM19,25.23V28H17V25.14a2.4,2.4,0,1,1,2,.09ZM24,15H12V10.72a6.2,6.2,0,0,1,6-6.36,6.2,6.2,0,0,1,6,6.36Z"/>
            </svg>
        `,

    "unlock": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>unlock</title>

                <path class="clr-i-outline clr-i-outline-path-1" d="M12,25.14V28h2V25.23a2.42,2.42,0,1,0-2-.09Z"/>
                <path class="clr-i-outline clr-i-outline-path-2" d="M26,2a8.2,8.2,0,0,0-8,8.36V15H2V32a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V15H20V10.36A6.2,6.2,0,0,1,26,4a6.2,6.2,0,0,1,6,6.36v6.83a1,1,0,0,0,2,0V10.36A8.2,8.2,0,0,0,26,2ZM22,17V32H4V17Z"/>

                <path class="clr-i-solid clr-i-solid-path-1" d="M26,2a8.2,8.2,0,0,0-8,8.36V15H2V32a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V15H20V10.36A6.2,6.2,0,0,1,26,4a6.2,6.2,0,0,1,6,6.36v6.83a1,1,0,0,0,2,0V10.36A8.2,8.2,0,0,0,26,2ZM14,25.23V28H12V25.14a2.4,2.4,0,1,1,2,.09Z"/>
            </svg>
        `,

    "star": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>star</title>

                <path class="clr-i-outline clr-i-outline-path-1" d="M27.19,34a2.22,2.22,0,0,1-1.24-.38l-7.46-5a.22.22,0,0,0-.25,0l-7.46,5A2.22,2.22,0,0,1,7.4,31.21l2.45-8.64a.23.23,0,0,0-.08-.24L2.71,16.78a2.22,2.22,0,0,1,1.29-4l9-.34a.23.23,0,0,0,.2-.15l3.1-8.43a2.22,2.22,0,0,1,4.17,0l3.1,8.43a.23.23,0,0,0,.2.15l9,.34a2.22,2.22,0,0,1,1.29,4L27,22.33a.22.22,0,0,0-.08.24l2.45,8.64A2.23,2.23,0,0,1,27.19,34Zm-8.82-7.42A2.21,2.21,0,0,1,19.6,27l7.46,5a.22.22,0,0,0,.34-.25l-2.45-8.64a2.21,2.21,0,0,1,.77-2.35l7.06-5.55a.22.22,0,0,0-.13-.4l-9-.34a2.22,2.22,0,0,1-2-1.46l-3.1-8.43a.22.22,0,0,0-.42,0L15.06,13a2.22,2.22,0,0,1-2,1.46l-9,.34a.22.22,0,0,0-.13.4L11,20.76a2.22,2.22,0,0,1,.77,2.35L9.33,31.75a.21.21,0,0,0,.08.24.2.2,0,0,0,.26,0l7.46-5A2.22,2.22,0,0,1,18.36,26.62Z"/>

                <path class="clr-i-solid clr-i-solid-path-1" d="M34,16.78a2.22,2.22,0,0,0-1.29-4l-9-.34a.23.23,0,0,1-.2-.15L20.4,3.89a2.22,2.22,0,0,0-4.17,0l-3.1,8.43a.23.23,0,0,1-.2.15l-9,.34a2.22,2.22,0,0,0-1.29,4l7.06,5.55a.23.23,0,0,1,.08.24L7.35,31.21a2.22,2.22,0,0,0,3.38,2.45l7.46-5a.22.22,0,0,1,.25,0l7.46,5a2.2,2.2,0,0,0,2.55,0,2.2,2.2,0,0,0,.83-2.4l-2.45-8.64a.22.22,0,0,1,.08-.24Z"/>
            </svg>
        `,

    "half-star": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>half-star</title>

                <path class="clr-i-outline clr-i-outline-path-1" d="M34,16.78a2.22,2.22,0,0,0-1.29-4l-9-.34a.23.23,0,0,1-.2-.15L20.4,3.89a2.22,2.22,0,0,0-4.17,0l-3.1,8.43a.23.23,0,0,1-.2.15l-9,.34a2.22,2.22,0,0,0-1.29,4l7.06,5.55a.22.22,0,0,1,.08.24L7.35,31.21A2.23,2.23,0,0,0,9.49,34a2.22,2.22,0,0,0,1.24-.38l7.46-5a.22.22,0,0,1,.25,0l7.46,5a2.22,2.22,0,0,0,3.38-2.45l-2.45-8.64a.23.23,0,0,1,.08-.24ZM18.33,26.62h0a2.21,2.21,0,0,0-1.24.38L9.62,32a.22.22,0,0,1-.34-.25l2.45-8.64A2.21,2.21,0,0,0,11,20.76L3.9,15.21a.22.22,0,0,1,.13-.4l9-.34A2.22,2.22,0,0,0,15,13l3.1-8.43a.2.2,0,0,1,.21-.15h0Z"/>

                <path class="clr-i-solid clr-i-solid-path-1" d="M34,16.78a2.22,2.22,0,0,0-1.29-4l-9-.34a.23.23,0,0,1-.2-.15L20.4,3.89a2.22,2.22,0,0,0-4.17,0l-3.1,8.43a.23.23,0,0,1-.2.15l-9,.34a2.22,2.22,0,0,0-1.29,4l7.06,5.55a.23.23,0,0,1,.08.24L7.35,31.21a2.22,2.22,0,0,0,3.38,2.45l7.46-5a.22.22,0,0,1,.25,0l7.46,5a2.2,2.2,0,0,0,2.55,0,2.2,2.2,0,0,0,.83-2.4l-2.45-8.64a.22.22,0,0,1,.08-.24ZM24.9,23.11l2.45,8.64A.22.22,0,0,1,27,32l-7.46-5a2.21,2.21,0,0,0-1.24-.38h0V4.44h0a.2.2,0,0,1,.21.15L21.62,13a2.22,2.22,0,0,0,2,1.46l9,.34a.22.22,0,0,1,.13.4l-7.06,5.55A2.21,2.21,0,0,0,24.9,23.11Z"/>
            </svg>
        `,

    get "favorite"() {
        return this["star"];
    },

    "plus": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>plus</title>
                <path class="clr-i-outline clr-i-outline-path-1" d="M30,17H19V6a1,1,0,1,0-2,0V17H6a1,1,0,0,0-1,1,.91.91,0,0,0,1,.94H17V30a1,1,0,1,0,2,0V19H30a1,1,0,0,0,1-1A1,1,0,0,0,30,17Z"/>
            </svg>
        `,

    get "add"() {
        return this["plus"];
    },


    "user": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-alert can-badge has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>user</title>

                <path class="clr-i-outline clr-i-outline-path-1" d="M18,17.17a6.81,6.81,0,1,1,6.81-6.81A6.81,6.81,0,0,1,18,17.17ZM18,5.55a4.81,4.81,0,1,0,4.81,4.81A4.81,4.81,0,0,0,18,5.55Z"/>
                <path class="clr-i-outline clr-i-outline-path-2" d="M28.76,32.45H7.24a2,2,0,0,1-1.94-2V24.65A1,1,0,0,1,5.5,24,16.08,16.08,0,0,1,18,18.55,15.9,15.9,0,0,1,30.5,24a1,1,0,0,1,.2.6v5.88A2,2,0,0,1,28.76,32.45ZM7.3,25v5.47l21.4,0V25A14.14,14.14,0,0,0,18,20.55,14.44,14.44,0,0,0,7.3,25Z"/>

                <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M26.46,32.45H4.94a2,2,0,0,1-1.94-2V24.65A1,1,0,0,1,3.21,24a16.08,16.08,0,0,1,12.53-5.49A15.9,15.9,0,0,1,28.2,24a1,1,0,0,1,.2.6v5.88A2,2,0,0,1,26.46,32.45ZM5,25v5.47l21.4,0V25a14.14,14.14,0,0,0-10.67-4.42A14.44,14.44,0,0,0,5,25Z"/>
                <path class="clr-i-outline--alerted clr-i-outline-path-2--alerted" d="M19.19,13.64A4.81,4.81,0,1,1,20,8.18l1.13-2a6.81,6.81,0,1,0-.36,8.71A3.68,3.68,0,0,1,19.19,13.64Z"/>
                <path class="clr-i-outline--alerted clr-i-outline-path-3--alerted clr-i-alert" d="M26.85,1l-5.72,9.91a1.28,1.28,0,0,0,1.1,1.91H33.68a1.28,1.28,0,0,0,1.1-1.91L29.06,1A1.28,1.28,0,0,0,26.85,1Z"/>

                <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M28.76,32.45H7.24a2,2,0,0,1-1.94-2V24.65A1,1,0,0,1,5.51,24,16.08,16.08,0,0,1,18,18.55,15.9,15.9,0,0,1,30.5,24a1,1,0,0,1,.2.6v5.88A2,2,0,0,1,28.76,32.45ZM7.3,25v5.47l21.4,0V25A14.14,14.14,0,0,0,18,20.55,14.44,14.44,0,0,0,7.3,25Z"/>
                <path class="clr-i-outline--badged clr-i-outline-path-2--badged" d="M22.5,5.86c0-.19,0-.38,0-.56a6.8,6.8,0,1,0,2.21,5.91A7.47,7.47,0,0,1,22.5,5.86ZM18,15.17a4.81,4.81,0,1,1,4.81-4.81A4.81,4.81,0,0,1,18,15.17Z"/>
                <circle class="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge" cx="30" cy="5.86" r="5"/>

                <path class="clr-i-solid clr-i-solid-path-1" d="M30.5,24A15.9,15.9,0,0,0,18,18.55,16.08,16.08,0,0,0,5.5,24a1,1,0,0,0-.21.61v5.84a2,2,0,0,0,1.94,2H28.76a2,2,0,0,0,1.94-2V24.61A1,1,0,0,0,30.5,24Z"/>
                <circle class="clr-i-solid clr-i-solid-path-2" cx="17.99" cy="10.36" r="6.81"/>

                <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M30.5,24A15.9,15.9,0,0,0,18,18.55,16.08,16.08,0,0,0,5.5,24a1,1,0,0,0-.21.61v5.84a2,2,0,0,0,1.94,2H28.76a2,2,0,0,0,1.94-2V24.61A1,1,0,0,0,30.5,24Z"/>
                <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted" d="M18,17.17a6.77,6.77,0,0,0,4.56-1.77h-.32A3.68,3.68,0,0,1,19,9.89l2.91-5a6.8,6.8,0,1,0-4,12.33Z"/>
                <path class="clr-i-solid--alerted clr-i-solid-path-3--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>

                <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M30.5,24A15.9,15.9,0,0,0,18,18.55,16.08,16.08,0,0,0,5.5,24a1,1,0,0,0-.21.61v5.84a2,2,0,0,0,1.94,2H28.76a2,2,0,0,0,1.94-2V24.61A1,1,0,0,0,30.5,24Z"/>
                <path class="clr-i-solid--badged clr-i-solid-path-2--badged" d="M18,17.17a6.81,6.81,0,0,0,6.73-5.84A7.47,7.47,0,0,1,22.5,6c0-.23,0-.47,0-.7A6.8,6.8,0,1,0,18,17.17Z"/>
                <circle class="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge" cx="30" cy="6" r="5"/>
            </svg>
        `,

    get "avatar"() {
        return this["user"];
    },

    "users": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-alert can-badge has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>users</title>

                <path class="clr-i-outline clr-i-outline-path-1" d="M11.09,14.57c.1,0,.2,0,.31,0a6.43,6.43,0,0,1,.09-2,2.09,2.09,0,1,1,1.47-3,6.58,6.58,0,0,1,1.55-1.31,4.09,4.09,0,1,0-3.42,6.33Z"/>
                <path class="clr-i-outline clr-i-outline-path-2" d="M13,18.14a6.53,6.53,0,0,1-1.28-2.2l-.63,0a8.67,8.67,0,0,0-6.43,2.52l-.24.28v7h2V19.51a7,7,0,0,1,4.67-1.6A8.09,8.09,0,0,1,13,18.14Z"/>
                <path class="clr-i-outline clr-i-outline-path-3" d="M31.35,18.42A8.59,8.59,0,0,0,25,15.91c-.32,0-.6,0-.9.06a6.53,6.53,0,0,1-1.35,2.25A7.9,7.9,0,0,1,25,17.91a6.94,6.94,0,0,1,4.64,1.58v6.27h2V18.7Z"/>
                <path class="clr-i-outline clr-i-outline-path-4" d="M23,9.77a2.09,2.09,0,1,1,2,2.8,2.06,2.06,0,0,1-.69-.13,6.53,6.53,0,0,1,.15,1.38,6.59,6.59,0,0,1,0,.68,4,4,0,0,0,.57.06,4.09,4.09,0,1,0-3.49-6.2A6.59,6.59,0,0,1,23,9.77Z"/>
                <path class="clr-i-outline clr-i-outline-path-5" d="M17.86,18.3a4.47,4.47,0,1,0-4.47-4.47A4.47,4.47,0,0,0,17.86,18.3Zm0-6.93a2.47,2.47,0,1,1-2.47,2.47A2.47,2.47,0,0,1,17.86,11.37Z"/>
                <path class="clr-i-outline clr-i-outline-path-6" d="M18.1,19.73A9.69,9.69,0,0,0,11,22.47l-.25.28v7.33a1.57,1.57,0,0,0,1.61,1.54H23.83a1.57,1.57,0,0,0,1.61-1.54V22.73l-.25-.28A9.58,9.58,0,0,0,18.1,19.73Zm5.33,9.88H12.73V23.55a8.08,8.08,0,0,1,5.37-1.82,8,8,0,0,1,5.33,1.8Z"/>

                <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M11.09,14.57c.1,0,.2,0,.31,0a6.43,6.43,0,0,1,.09-2,2.09,2.09,0,1,1,1.47-3,6.58,6.58,0,0,1,1.55-1.31,4.09,4.09,0,1,0-3.42,6.33Z"/>
                <path class="clr-i-outline--alerted clr-i-outline-path-2--alerted" d="M13,18.14a6.53,6.53,0,0,1-1.28-2.2l-.63,0a8.67,8.67,0,0,0-6.43,2.52l-.24.28v7h2V19.51a7,7,0,0,1,4.67-1.6A8.09,8.09,0,0,1,13,18.14Z"/>
                <path class="clr-i-outline--alerted clr-i-outline-path-3--alerted" d="M31.35,18.42A8.59,8.59,0,0,0,25,15.91c-.32,0-.6,0-.9.06a6.53,6.53,0,0,1-1.35,2.25A7.9,7.9,0,0,1,25,17.91a6.94,6.94,0,0,1,4.64,1.58v6.27h2V18.7Z"/>
                <path class="clr-i-outline--alerted clr-i-outline-path-4--alerted" d="M18.1,19.73A9.69,9.69,0,0,0,11,22.47l-.25.28v7.33a1.57,1.57,0,0,0,1.61,1.54H23.83a1.57,1.57,0,0,0,1.61-1.54V22.73l-.25-.28A9.58,9.58,0,0,0,18.1,19.73Zm5.33,9.88H12.73V23.55a8.08,8.08,0,0,1,5.37-1.82,8,8,0,0,1,5.33,1.8Z"/>
                <path class="clr-i-outline--alerted clr-i-outline-path-5--alerted" d="M20.28,14.27a2.46,2.46,0,1,1-2.42-2.89,2.44,2.44,0,0,1,1,.24,3.67,3.67,0,0,1,.43-2,4.41,4.41,0,0,0-1.48-.27A4.47,4.47,0,1,0,22.14,15,3.69,3.69,0,0,1,20.28,14.27Z"/>
                <path class="clr-i-outline--alerted clr-i-outline-path-6--alerted clr-i-alert" d="M27.18.8l-5.72,9.91a1.28,1.28,0,0,0,1.1,1.91H34a1.28,1.28,0,0,0,1.1-1.91L29.39.8A1.28,1.28,0,0,0,27.18.8Z"/>

                <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M11.09,14.57c.1,0,.2,0,.31,0a6.43,6.43,0,0,1,.09-2,2.09,2.09,0,1,1,1.47-3,6.58,6.58,0,0,1,1.55-1.31,4.09,4.09,0,1,0-3.42,6.33Z"/>
                <path class="clr-i-outline--badged clr-i-outline-path-2--badged" d="M13,18.14a6.53,6.53,0,0,1-1.28-2.2l-.63,0a8.67,8.67,0,0,0-6.43,2.52l-.24.28v7h2V19.51a7,7,0,0,1,4.67-1.6A8.09,8.09,0,0,1,13,18.14Z"/>
                <path class="clr-i-outline--badged clr-i-outline-path-3--badged" d="M31.35,18.42A8.59,8.59,0,0,0,25,15.91c-.32,0-.6,0-.9.06a6.53,6.53,0,0,1-1.35,2.25A7.9,7.9,0,0,1,25,17.91a6.94,6.94,0,0,1,4.64,1.58v6.27h2V18.7Z"/>
                <path class="clr-i-outline--badged clr-i-outline-path-4--badged" d="M17.86,18.3a4.47,4.47,0,1,0-4.47-4.47A4.47,4.47,0,0,0,17.86,18.3Zm0-6.93a2.47,2.47,0,1,1-2.47,2.47A2.47,2.47,0,0,1,17.86,11.37Z"/>
                <path class="clr-i-outline--badged clr-i-outline-path-5--badged" d="M18.1,19.73A9.69,9.69,0,0,0,11,22.47l-.25.28v7.33a1.57,1.57,0,0,0,1.61,1.54H23.83a1.57,1.57,0,0,0,1.61-1.54V22.73l-.25-.28A9.58,9.58,0,0,0,18.1,19.73Zm5.33,9.88H12.73V23.55a8.08,8.08,0,0,1,5.37-1.82,8,8,0,0,1,5.33,1.8Z"/>
                <path class="clr-i-outline--badged clr-i-outline-path-6--badged" d="M26.37,12a2,2,0,0,1-2.09.42,6.53,6.53,0,0,1,.15,1.38,6.59,6.59,0,0,1,0,.68,4,4,0,0,0,.57.06,4.08,4.08,0,0,0,3.3-1.7A7.45,7.45,0,0,1,26.37,12Z"/>
                <path class="clr-i-outline--badged clr-i-outline-path-7--badged" d="M22.95,6.93a4.16,4.16,0,0,0-1.47,1.44A6.59,6.59,0,0,1,23,9.77a2.1,2.1,0,0,1,.59-.83A7.44,7.44,0,0,1,22.95,6.93Z"/>
                <circle class="clr-i-outline--badged clr-i-outline-path-8--badged clr-i-badge" cx="30.33" cy="5.67" r="5"/>

                <path class="clr-i-solid clr-i-solid-path-1" d="M12,16.14q-.43,0-.87,0a8.67,8.67,0,0,0-6.43,2.52l-.24.28v8.28H8.54v-4.7l.55-.62.25-.29a11,11,0,0,1,4.71-2.86A6.59,6.59,0,0,1,12,16.14Z"/>
                <path class="clr-i-solid clr-i-solid-path-2" d="M31.34,18.63a8.67,8.67,0,0,0-6.43-2.52,10.47,10.47,0,0,0-1.09.06,6.59,6.59,0,0,1-2,2.45,10.91,10.91,0,0,1,5,3l.25.28.54.62v4.71h3.94V18.91Z"/>
                <path class="clr-i-solid clr-i-solid-path-3" d="M11.1,14.19c.11,0,.2,0,.31,0a6.45,6.45,0,0,1,3.11-6.29,4.09,4.09,0,1,0-3.42,6.33Z"/>
                <path class="clr-i-solid clr-i-solid-path-4" d="M24.43,13.44a6.54,6.54,0,0,1,0,.69,4.09,4.09,0,0,0,.58.05h.19A4.09,4.09,0,1,0,21.47,8,6.53,6.53,0,0,1,24.43,13.44Z"/><circle cx="17.87" cy="13.45" r="4.47"/>
                <path class="clr-i-solid clr-i-solid-path-5" d="M18.11,20.3A9.69,9.69,0,0,0,11,23l-.25.28v6.33a1.57,1.57,0,0,0,1.6,1.54H23.84a1.57,1.57,0,0,0,1.6-1.54V23.3L25.2,23A9.58,9.58,0,0,0,18.11,20.3Z"/>

                <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M12,16.14q-.43,0-.87,0a8.67,8.67,0,0,0-6.43,2.52l-.24.28v8.28H8.54v-4.7l.55-.62.25-.29a11,11,0,0,1,4.71-2.86A6.59,6.59,0,0,1,12,16.14Z"/>
                <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted" d="M31.34,18.63a8.67,8.67,0,0,0-6.43-2.52,10.47,10.47,0,0,0-1.09.06,6.59,6.59,0,0,1-2,2.45,10.91,10.91,0,0,1,5,3l.25.28.54.62v4.71h3.94V18.91Z"/>
                <path class="clr-i-solid--alerted clr-i-solid-path-3--alerted" d="M11.1,14.19c.11,0,.2,0,.31,0a6.45,6.45,0,0,1,3.11-6.29,4.09,4.09,0,1,0-3.42,6.33Z"/>
                <path class="clr-i-solid--alerted clr-i-solid-path-4--alerted" d="M18.11,20.3A9.69,9.69,0,0,0,11,23l-.25.28v6.33a1.57,1.57,0,0,0,1.6,1.54H23.84a1.57,1.57,0,0,0,1.6-1.54V23.3L25.2,23A9.58,9.58,0,0,0,18.11,20.3Z"/>
                <path class="clr-i-solid--alerted clr-i-solid-path-5--alerted" d="M17.87,17.92a4.46,4.46,0,0,0,4-2.54A3.67,3.67,0,0,1,19,9.89l.35-.61A4.42,4.42,0,0,0,17.87,9a4.47,4.47,0,1,0,0,8.93Z"/>
                <path class="clr-i-solid--alerted clr-i-solid-path-6--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>

                <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M12,16.14q-.43,0-.87,0a8.67,8.67,0,0,0-6.43,2.52l-.24.28v8.28H8.54v-4.7l.55-.62.25-.29a11,11,0,0,1,4.71-2.86A6.58,6.58,0,0,1,12,16.14Z"/>
                <path class="clr-i-solid--badged clr-i-solid-path-2--badged" d="M31.34,18.63a8.67,8.67,0,0,0-6.43-2.52,10.47,10.47,0,0,0-1.09.06,6.59,6.59,0,0,1-2,2.45,10.91,10.91,0,0,1,5,3l.25.28.54.62v4.71h3.94V18.91Z"/>
                <path class="clr-i-solid--badged clr-i-solid-path-3--badged" d="M11.1,14.19c.11,0,.2,0,.31,0a6.45,6.45,0,0,1,3.11-6.29,4.09,4.09,0,1,0-3.42,6.33Z"/><circle cx="17.87" cy="13.45" r="4.47"/>
                <path class="clr-i-solid--badged clr-i-solid-path-4--badged" d="M18.11,20.3A9.69,9.69,0,0,0,11,23l-.25.28v6.33a1.57,1.57,0,0,0,1.6,1.54H23.84a1.57,1.57,0,0,0,1.6-1.54V23.3L25.2,23A9.58,9.58,0,0,0,18.11,20.3Z"/>
                <path class="clr-i-solid--badged clr-i-solid-path-5--badged" d="M24.43,13.44a6.54,6.54,0,0,1,0,.69,4.09,4.09,0,0,0,.58.05h.19a4.05,4.05,0,0,0,2.52-1,7.5,7.5,0,0,1-5.14-6.32A4.13,4.13,0,0,0,21.47,8,6.53,6.53,0,0,1,24.43,13.44Z"/>
                <circle class="clr-i-solid--badged clr-i-solid-path-6--badged clr-i-badge" cx="30" cy="6" r="5"/>
            </svg>
        `,

    get "group"() {
        return this["users"];
    },


    "file": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-alert can-badge has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>file</title>
                
                <path class="clr-i-outline clr-i-outline-path-1" d="M21.89,4H7.83A1.88,1.88,0,0,0,6,5.91V30.09A1.88,1.88,0,0,0,7.83,32H28.17A1.88,1.88,0,0,0,30,30.09V11.92Zm-.3,2.49,6,5.9h-6ZM8,30V6H20v8h8V30Z"/>

                <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M21.59,12.39V6.49l1.07,1a7.31,7.31,0,0,1,0-2.82L21.89,4H7.83A1.88,1.88,0,0,0,6,5.91V30.09A1.88,1.88,0,0,0,7.83,32H28.17A1.88,1.88,0,0,0,30,30.09V13.5a7.45,7.45,0,0,1-3.91-1.11ZM28,30H8V6H20v8h8Z"/>
                <circle class="clr-i-outline--badged clr-i-outline-path-2--badged clr-i-badge" cx="30" cy="6" r="5"/>

                <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M28,15.4V30H8V6H20V8.25l2.25-3.9L21.89,4H7.83A1.88,1.88,0,0,0,6,5.91V30.09A1.88,1.88,0,0,0,7.83,32H28.17A1.88,1.88,0,0,0,30,30.09V15.4Z"/>
                <path class="clr-i-outline--alerted clr-i-outline-path-2--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>

                <path class="clr-i-solid clr-i-solid-path-1" d="M21.89,4H7.83A1.88,1.88,0,0,0,6,5.91V30.09A1.88,1.88,0,0,0,7.83,32H28.17A1.88,1.88,0,0,0,30,30.09V11.92ZM21,13V5.84L28.3,13Z"/>

                <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M27.25,13H21V5.84l1.64,1.6a7.25,7.25,0,0,1,0-2.74L21.89,4H7.83A1.88,1.88,0,0,0,6,5.91V30.09A1.88,1.88,0,0,0,7.83,32H28.17A1.88,1.88,0,0,0,30,30.09V13.5A7.47,7.47,0,0,1,27.25,13Z"/>
                <circle class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" cx="30" cy="6" r="5"/>

                <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M22.2,15.4c-2,0-3.7-1.6-3.7-3.6c0-0.7,0.2-1.3,0.5-1.9l3.2-5.5L21.9,4H7.8C6.8,4,6,4.9,6,5.9v24.2c0,1,0.8,1.9,1.8,1.9h20.3c1,0,1.8-0.9,1.8-1.9V15.4H22.2z"/>
                <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert" d="M26.9,1.1L21.1,11c-0.4,0.6-0.2,1.4,0.3,1.8c0.2,0.2,0.5,0.2,0.8,0.2h11.5c0.7,0,1.3-0.5,1.3-1.2c0-0.3-0.1-0.5-0.2-0.8l-5.7-9.9c-0.4-0.6-1.1-0.8-1.8-0.5C27.1,0.8,27,1,26.9,1.1z"/>
            </svg>
        `,

    get "document"() {
        return this["file"];
    },

    "folder": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-alert can-badge has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>folder</title>

                <path class="clr-i-outline clr-i-outline-path-1" d="M32,7H16.28L14,4H4A2,2,0,0,0,2,6V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V9A2,2,0,0,0,32,7Zm0,22H4V12h9l2-2H4V6h9l2.3,3H32Z"/>

                <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M32,13.22V29H4V12h9l2-2H4V6h9l2.3,3h7.83a7.45,7.45,0,0,1-.55-2H16.28L14,4H4A2,2,0,0,0,2,6V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V12.34A7.45,7.45,0,0,1,32,13.22Z"/>
                <circle class="clr-i-outline--badged clr-i-outline-path-2--badged clr-i-badge" cx="30" cy="6" r="5"/>

                <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M33.68,15.4H32V29H4V12h9l2-2H4V6h9l2.3,3h4.26l1.15-2H16.28L14,4H4A2,2,0,0,0,2,6V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V15.38Z"/>
                <path class="clr-i-outline--alerted clr-i-outline-path-2--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>

                <path class="clr-i-solid clr-i-solid-path-1" d="M32,7H16.28L14,4H4A2,2,0,0,0,2,6v4H15l-2.73,2H2V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V9A2,2,0,0,0,32,7Z"/>

                <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M33.68,15.4H22.23A3.68,3.68,0,0,1,19,9.89L20.71,7H16.28L14,4H4A2,2,0,0,0,2,6v4H15l-2.73,2H2V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V15.38Z"/>
                <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>

                <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M30,13.5A7.5,7.5,0,0,1,22.57,7H16.28L14,4H4A2,2,0,0,0,2,6v4H15l-2.73,2H2V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V12.34A7.45,7.45,0,0,1,30,13.5Z"/>
                <circle class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" cx="30" cy="6" r="5"/>

            </svg>
        `,

    get "directory"() {
        return this["folder"];
    },

    "calendar": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-alert can-badge has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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

    get "date"() {
        return this["calendar"];
    },

    "flag": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>flag</title>

                <path class="clr-i-outline clr-i-outline-path-1" d="M6,34a1,1,0,0,1-1-1V3A1,1,0,0,1,7,3V33A1,1,0,0,1,6,34Z"/>
                <path class="clr-i-outline clr-i-outline-path-2" d="M30.55,3.82a1,1,0,0,0-1,0,14.9,14.9,0,0,1-6.13,1.16,13.11,13.11,0,0,1-5.18-1.49,12.78,12.78,0,0,0-5-1.45A10.86,10.86,0,0,0,9,2.85V5.08A8.8,8.8,0,0,1,13.25,4a11.22,11.22,0,0,1,4.2,1.28,14.84,14.84,0,0,0,6,1.66A18.75,18.75,0,0,0,29,6.12V18.95a16.16,16.16,0,0,1-5.58.93,13.11,13.11,0,0,1-5.18-1.49,12.78,12.78,0,0,0-5-1.45A10.86,10.86,0,0,0,9,17.79V20a8.8,8.8,0,0,1,4.25-1.08,11.22,11.22,0,0,1,4.2,1.28,14.84,14.84,0,0,0,6,1.66,16.79,16.79,0,0,0,7-1.37,1,1,0,0,0,.55-.89V4.67A1,1,0,0,0,30.55,3.82Z"/>

                <path class="clr-i-solid clr-i-solid-path-1" d="M5.92,2a1,1,0,0,0-1,1V33a1,1,0,0,0,2,0V3A1,1,0,0,0,5.92,2Z"/>
                <path class="clr-i-solid clr-i-solid-path-2" d="M30.5,3.82a1,1,0,0,0-1,0,14.9,14.9,0,0,1-6.13,1.16,13.11,13.11,0,0,1-5.18-1.49A12.78,12.78,0,0,0,13.2,2,10.86,10.86,0,0,0,9,2.85V20a8.8,8.8,0,0,1,4.25-1.08,11.22,11.22,0,0,1,4.2,1.28,14.84,14.84,0,0,0,6,1.66,16.79,16.79,0,0,0,7-1.37,1,1,0,0,0,.55-.89V4.67A1,1,0,0,0,30.5,3.82Z"/>
            </svg>
        `,

    "pop-out": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>pop-out</title>
                <path class="clr-i-outline clr-i-outline-path-1" d="M27,33H5a2,2,0,0,1-2-2V9A2,2,0,0,1,5,7H15V9H5V31H27V21h2V31A2,2,0,0,1,27,33Z"/>
                <path class="clr-i-outline clr-i-outline-path-2" d="M18,3a1,1,0,0,0,0,2H29.59L15.74,18.85a1,1,0,1,0,1.41,1.41L31,6.41V18a1,1,0,0,0,2,0V3Z"/>
            </svg>
        `,

    "filter": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>filter</title>

                <path class="clr-i-outline clr-i-outline-path-1" d="M33,4H3A1,1,0,0,0,2,5V6.67a1.79,1.79,0,0,0,.53,1.27L14,19.58v10.2l2,.76V19a1,1,0,0,0-.29-.71L4,6.59V6H32v.61L20.33,18.29A1,1,0,0,0,20,19l0,13.21L22,33V19.5L33.47,8A1.81,1.81,0,0,0,34,6.7V5A1,1,0,0,0,33,4Z"/>
                <path class="clr-i-solid clr-i-solid-path-1" d="M22,33V19.5L33.47,8A1.81,1.81,0,0,0,34,6.7V5a1,1,0,0,0-1-1H3A1,1,0,0,0,2,5V6.67a1.79,1.79,0,0,0,.53,1.27L14,19.58v10.2Z"/>

            </svg>
        `,


    "pin": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>pin</title>

                <path class="clr-i-outline clr-i-outline-path-1" d="M33,16.59a1,1,0,0,1-.71-.29L19.7,3.71a1,1,0,0,1,1.41-1.41L33.71,14.89A1,1,0,0,1,33,16.59Z"/>
                <path class="clr-i-outline clr-i-outline-path-2" d="M28.52,15.56l-1.41-1.41-7.2,7.2a1,1,0,0,0-.25,1,9,9,0,0,1-1.53,8.09L5.58,17.87a9,9,0,0,1,8.09-1.53,1,1,0,0,0,1-.25l7.2-7.2L20.44,7.48l-6.79,6.79A10.94,10.94,0,0,0,3.41,17.11a1,1,0,0,0,0,1.42l6.33,6.33L2.29,32.29a1,1,0,1,0,1.41,1.41l7.44-7.44,6.33,6.33a1,1,0,0,0,.71.29h0a1,1,0,0,0,.71-.3,11,11,0,0,0,2.84-10.24Z"/>

                <path class="clr-i-solid clr-i-solid-path-1" d="M33,16.71a1,1,0,0,1-.71-.29L19.7,3.82a1,1,0,0,1,1.41-1.41L33.71,15A1,1,0,0,1,33,16.71Z"/>
                <path class="clr-i-solid clr-i-solid-path-2" d="M20.44,7.59l-6.79,6.79A10.94,10.94,0,0,0,3.41,17.22a1,1,0,0,0,0,1.42L9.73,25,2.29,32.41a1,1,0,1,0,1.41,1.41l7.44-7.44,6.33,6.33a1,1,0,0,0,.71.29h0a1,1,0,0,0,.71-.3,11,11,0,0,0,2.84-10.24l6.79-6.79Z"/>
            </svg>
        `,

    "trash": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>trash</title>

                <path class="clr-i-outline clr-i-outline-path-1" d="M27.14,34H8.86A2.93,2.93,0,0,1,6,31V11.23H8V31a.93.93,0,0,0,.86,1H27.14A.93.93,0,0,0,28,31V11.23h2V31A2.93,2.93,0,0,1,27.14,34Z"/>
                <path class="clr-i-outline clr-i-outline-path-2" d="M30.78,9H5A1,1,0,0,1,5,7H30.78a1,1,0,0,1,0,2Z"/>
                <rect class="clr-i-outline clr-i-outline-path-3" x="21" y="13" width="2" height="15"/>
                <rect class="clr-i-outline clr-i-outline-path-4" x="13" y="13" width="2" height="15"/>
                <path class="clr-i-outline clr-i-outline-path-5" d="M23,5.86H21.1V4H14.9V5.86H13V4a2,2,0,0,1,1.9-2h6.2A2,2,0,0,1,23,4Z"/>

                <path class="clr-i-solid clr-i-solid-path-1" d="M6,9V31a2.93,2.93,0,0,0,2.86,3H27.09A2.93,2.93,0,0,0,30,31V9Zm9,20H13V14h2Zm8,0H21V14h2Z"/>
                <path class="clr-i-solid clr-i-solid-path-2" d="M30.73,5H23V4A2,2,0,0,0,21,2h-6.2A2,2,0,0,0,13,4V5H5A1,1,0,1,0,5,7H30.73a1,1,0,0,0,0-2Z"/>
            </svg>
        `,

    "cloud": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-alert can-badge has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>cloud</title>

                <path class="clr-i-outline clr-i-outline-path-1" d="M27.14,33H10.62C5.67,33,1,28.19,1,23.1a10,10,0,0,1,8-9.75,10.19,10.19,0,0,1,20.33,1.06A10.07,10.07,0,0,1,29,16.66a8.29,8.29,0,0,1,6,8C35,29.1,31.33,33,27.14,33ZM19.09,6.23a8.24,8.24,0,0,0-8.19,8l0,.87-.86.1A7.94,7.94,0,0,0,3,23.1c0,4,3.77,7.9,7.62,7.9H27.14C30.21,31,33,28,33,24.65a6.31,6.31,0,0,0-5.37-6.26l-1.18-.18.39-1.13A8.18,8.18,0,0,0,19.09,6.23Z"/>

                <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M29,16.66a10.07,10.07,0,0,0,.25-2.24c0-.33,0-.65,0-1a7.45,7.45,0,0,1-2.1-.54,8,8,0,0,1-.3,4.16l-.39,1.13,1.18.18a6.31,6.31,0,0,1,5.37,6.26C32.95,28,30.16,31,27.09,31H10.57c-3.84,0-7.62-3.91-7.62-7.9a7.94,7.94,0,0,1,7-7.89l.86-.1,0-.87a8.24,8.24,0,0,1,8.19-8A8.13,8.13,0,0,1,22.58,7a7.53,7.53,0,0,1-.08-1,7.51,7.51,0,0,1,.09-1.12A10.13,10.13,0,0,0,19,4.23,10.26,10.26,0,0,0,8.91,13.36a10,10,0,0,0-8,9.75c0,5.09,4.67,9.9,9.62,9.9H27.09c4.19,0,7.86-3.9,7.86-8.35A8.29,8.29,0,0,0,29,16.66Z"/>
                <circle class="clr-i-outline--badged clr-i-outline-path-2--badged clr-i-badge" cx="30" cy="6" r="5"/>

                <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M29,16.66a10.14,10.14,0,0,0,.2-1.3h-2a8.28,8.28,0,0,1-.37,1.72l-.39,1.13,1.18.18a6.31,6.31,0,0,1,5.37,6.26C32.95,28,30.16,31,27.09,31H10.57c-3.84,0-7.62-3.91-7.62-7.9a7.94,7.94,0,0,1,7-7.89l.86-.1,0-.87A8.16,8.16,0,0,1,21,6.47l1-1.8A10.19,10.19,0,0,0,8.91,13.36a10,10,0,0,0-8,9.75c0,5.09,4.67,9.9,9.62,9.9H27.09c4.19,0,7.86-3.9,7.86-8.35A8.29,8.29,0,0,0,29,16.66Z"/>
                <path class="clr-i-outline--alerted clr-i-outline-path-2--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>

                <path class="clr-i-solid clr-i-solid-path-1" d="M29,16.66a10.07,10.07,0,0,0,.25-2.24A10.19,10.19,0,0,0,8.91,13.36,10,10,0,0,0,1,23.1C1,28.19,5.62,33,10.57,33H27.09C31.28,33,35,29.1,35,24.65A8.29,8.29,0,0,0,29,16.66Z"/>

                <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M29,16.66a10.07,10.07,0,0,0,.25-2.24c0-.33,0-.65,0-1a7.44,7.44,0,0,1-6.6-8.58A10.13,10.13,0,0,0,19,4.23,10.26,10.26,0,0,0,8.91,13.36,10,10,0,0,0,1,23.1C1,28.19,5.62,33,10.57,33H27.09C31.28,33,35,29.1,35,24.65A8.29,8.29,0,0,0,29,16.66Z"/>
                <circle class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" cx="30" cy="6" r="5"/>

                <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M29,16.66a10.15,10.15,0,0,0,.2-1.26h-7A3.68,3.68,0,0,1,19,9.89l3-5.21A10.19,10.19,0,0,0,8.91,13.36,10,10,0,0,0,1,23.1C1,28.19,5.62,33,10.57,33H27.09C31.28,33,35,29.1,35,24.65A8.29,8.29,0,0,0,29,16.66Z"/>
                <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>
            </svg>
        `,

    "map-marker": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-badge has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>map-marker</title>

                <path class="clr-i-outline clr-i-outline-path-1" d="M18,6.72a5.73,5.73,0,1,0,5.73,5.73A5.73,5.73,0,0,0,18,6.72Zm0,9.46a3.73,3.73,0,1,1,3.73-3.73A3.73,3.73,0,0,1,18,16.17Z"/>
                <path class="clr-i-outline clr-i-outline-path-2" d="M18,2A11.79,11.79,0,0,0,6.22,13.73c0,4.67,2.62,8.58,4.54,11.43l.35.52a99.61,99.61,0,0,0,6.14,8l.76.89.76-.89a99.82,99.82,0,0,0,6.14-8l.35-.53c1.91-2.85,4.53-6.75,4.53-11.42A11.79,11.79,0,0,0,18,2ZM23.59,24l-.36.53c-1.72,2.58-4,5.47-5.23,6.9-1.18-1.43-3.51-4.32-5.23-6.9L12.42,24c-1.77-2.64-4.2-6.25-4.2-10.31a9.78,9.78,0,1,1,19.56,0C27.78,17.79,25.36,21.4,23.59,24Z"/>

                <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M18,6.72a5.73,5.73,0,1,0,5.73,5.73A5.73,5.73,0,0,0,18,6.72Zm0,9.46a3.73,3.73,0,1,1,3.73-3.73A3.73,3.73,0,0,1,18,16.17Z"/>
                <path class="clr-i-outline--badged clr-i-outline-path-2--badged" d="M29.77,13.49a7.49,7.49,0,0,1-2-.33c0,.19,0,.38,0,.57,0,4.06-2.42,7.67-4.19,10.31l-.36.53c-1.72,2.58-4,5.47-5.23,6.9-1.18-1.43-3.51-4.32-5.23-6.9L12.42,24c-1.77-2.64-4.2-6.25-4.2-10.31A9.77,9.77,0,0,1,22.56,5.09a7.45,7.45,0,0,1,.52-2A11.75,11.75,0,0,0,6.22,13.73c0,4.67,2.62,8.58,4.54,11.43l.35.52a99.61,99.61,0,0,0,6.14,8l.76.89.76-.89a99.82,99.82,0,0,0,6.14-8l.35-.53c1.91-2.85,4.53-6.75,4.53-11.42C29.78,13.65,29.77,13.57,29.77,13.49Z"/>
                <circle class="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge" cx="30" cy="6" r="5"/>

                <path class="clr-i-solid clr-i-solid-path-1" d="M18,2A11.79,11.79,0,0,0,6.22,13.73c0,4.67,2.62,8.58,4.54,11.43l.35.52a99.61,99.61,0,0,0,6.14,8l.76.89.76-.89a99.82,99.82,0,0,0,6.14-8l.35-.53c1.91-2.85,4.53-6.75,4.53-11.42A11.79,11.79,0,0,0,18,2Zm0,17a6.56,6.56,0,1,1,6.56-6.56A6.56,6.56,0,0,1,18,19Z"/>
                <circle class="clr-i-solid clr-i-solid-path-2" cx="18" cy="12.44" r="3.73"/>

                <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M29.77,13.49A7.47,7.47,0,0,1,24.38,11a6.58,6.58,0,1,1-1.61-3,7.42,7.42,0,0,1,.31-4.84A11.75,11.75,0,0,0,6.22,13.73c0,4.67,2.62,8.58,4.54,11.43l.35.52a99.61,99.61,0,0,0,6.14,8l.76.89.76-.89a99.82,99.82,0,0,0,6.14-8l.35-.53c1.91-2.85,4.53-6.75,4.53-11.42C29.78,13.65,29.77,13.57,29.77,13.49Z"/>
                <circle class="clr-i-solid--badged clr-i-solid-path-2--badged" cx="18" cy="12.44" r="3.73"/>
                <circle class="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge" cx="30" cy="6" r="5"/>
            </svg>
        `,

    get "map"() {
        return this["map-marker"];
    },

    "times-circle": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>times-circle</title>
                <path class="clr-i-outline clr-i-outline-path-1" d="M19.61,18l4.86-4.86a1,1,0,0,0-1.41-1.41L18.2,16.54l-4.89-4.89a1,1,0,0,0-1.41,1.41L16.78,18,12,22.72a1,1,0,1,0,1.41,1.41l4.77-4.77,4.74,4.74a1,1,0,0,0,1.41-1.41Z"/>
                <path class="clr-i-outline clr-i-outline-path-2" d="M18,34A16,16,0,1,1,34,18,16,16,0,0,1,18,34ZM18,4A14,14,0,1,0,32,18,14,14,0,0,0,18,4Z"/>

                <path class="clr-i-solid clr-i-solid-path-1" d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm8,22.1a1.4,1.4,0,0,1-2,2l-6-6L12,26.12a1.4,1.4,0,1,1-2-2L16,18.08,9.83,11.86a1.4,1.4,0,1,1,2-2L18,16.1l6.17-6.17a1.4,1.4,0,1,1,2,2L20,18.08Z"/>
            </svg>
        `,

    get "remove"() {
        return this["times-circle"];
    },


    "play": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>play</title>

                <path class="clr-i-outline clr-i-outline-path-1" d="M8.07,31.6A2.07,2.07,0,0,1,6,29.53V6.32A2.07,2.07,0,0,1,9,4.47L32.21,16.08a2.07,2.07,0,0,1,0,3.7L9,31.38A2.06,2.06,0,0,1,8.07,31.6Zm0-25.34L8,6.32V29.53l.1.06L31.31,18a.06.06,0,0,0,0-.06Z"/>

                <path class="clr-i-solid clr-i-solid-path-1" d="M32.16,16.08,8.94,4.47A2.07,2.07,0,0,0,6,6.32V29.53a2.06,2.06,0,0,0,3,1.85L32.16,19.77a2.07,2.07,0,0,0,0-3.7Z"/>
            </svg>
        `,

    "pause": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>pause</title>
                <path class="clr-i-outline clr-i-outline-path-1" d="M12.93,32H6.07A2.07,2.07,0,0,1,4,29.93V6.07A2.07,2.07,0,0,1,6.07,4h6.87A2.07,2.07,0,0,1,15,6.07V29.93A2.07,2.07,0,0,1,12.93,32ZM13,6H6V30h7Z"/>
                <path class="clr-i-outline clr-i-outline-path-2" d="M29.93,32H23.07A2.07,2.07,0,0,1,21,29.93V6.07A2.07,2.07,0,0,1,23.07,4h6.87A2.07,2.07,0,0,1,32,6.07V29.93A2.07,2.07,0,0,1,29.93,32ZM30,6H23V30h7Z"/>

                <rect class="clr-i-solid clr-i-solid-path-1" x="3.95" y="4" width="11" height="28" rx="2.07" ry="2.07"/>
                <rect class="clr-i-solid clr-i-solid-path-2" x="20.95" y="4" width="11" height="28" rx="2.07" ry="2.07"/>
            </svg>
        `,

    "step-forward": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>step-forward</title>

                <path class="clr-i-outline clr-i-outline-path-1" d="M5,32.23a2,2,0,0,1-2-2V5.77A2,2,0,0,1,6.17,4.14L23.23,16.38a2,2,0,0,1,0,3.25h0L6.17,31.86A2,2,0,0,1,5,32.23ZM5,5.77V30.23L22.07,18Z"/>
                <path class="clr-i-outline clr-i-outline-path-2" d="M31,32H28a2,2,0,0,1-2-2V6a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2V30A2,2,0,0,1,31,32ZM28,6V30h3V6Z"/>

                <path class="clr-i-solid clr-i-solid-path-1" d="M5,31.9a2,2,0,0,1-2-2V5.44A2,2,0,0,1,6.12,3.81L23.18,16a2,2,0,0,1,0,3.25h0L6.12,31.52A2,2,0,0,1,5,31.9Z"/>
                <rect class="clr-i-solid clr-i-solid-path-2" x="25.95" y="3.67" width="7" height="28" rx="2" ry="2"/>
            </svg>
        `,

    "stop": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>stop</title>

                <path class="clr-i-outline clr-i-outline-path-1" d="M30,32H6a2,2,0,0,1-2-2V6A2,2,0,0,1,6,4H30a2,2,0,0,1,2,2V30A2,2,0,0,1,30,32ZM6,6V30H30V6Z"/>

                <rect class="clr-i-solid clr-i-solid-path-1" x="3.96" y="4" width="27.99" height="28" rx="2" ry="2"/>
            </svg>
        `,

    "angle-double": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>angle-double</title>
                <path class="clr-i-outline clr-i-outline-path-1" d="M29,19.41a1,1,0,0,1-.71-.29L18,8.83,7.71,19.12a1,1,0,0,1-1.41-1.41L18,6,29.71,17.71A1,1,0,0,1,29,19.41Z"/>
                <path class="clr-i-outline clr-i-outline-path-2" d="M29,30.41a1,1,0,0,1-.71-.29L18,19.83,7.71,30.12a1,1,0,0,1-1.41-1.41L18,17,29.71,28.71A1,1,0,0,1,29,30.41Z"/>
            </svg>
        `,

    get "collapse"() {
        return this["angle-double"];
    },

    "angle": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>angle</title>
                <path class="clr-i-outline clr-i-outline-path-1" d="M29.52,22.52,18,10.6,6.48,22.52a1.7,1.7,0,0,0,2.45,2.36L18,15.49l9.08,9.39a1.7,1.7,0,0,0,2.45-2.36Z"/>
            </svg>
        `,

    get "caret"() {
        return this["angle"];
    },

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
        return this["line-chart"];
    },

    "event": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-alert can-badge has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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

    "bookmark": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>bookmark</title>

                <path class="clr-i-outline clr-i-outline-path-1" d="M26,34a2,2,0,0,1-1.41-.58L18,26.82l-6.54,6.52A2,2,0,0,1,8,31.93V4a2,2,0,0,1,2-2H26a2,2,0,0,1,2,2V32a2,2,0,0,1-2,2Zm0-2h0V4H10V31.93L18,24Z"/>

                <path class="clr-i-solid clr-i-solid-path-1" d="M26,2H10A2,2,0,0,0,8,4V31.93a2,2,0,0,0,3.42,1.41l6.54-6.52,6.63,6.6A2,2,0,0,0,28,32V4A2,2,0,0,0,26,2Z"/>
            </svg>
        `,

    "power": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-alert can-badge has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>power</title>

                <path class="clr-i-outline clr-i-outline-path-1" d="M18,21a1,1,0,0,1-1-1V4a1,1,0,0,1,2,0V20A1,1,0,0,1,18,21Z"/>
                <path class="clr-i-outline clr-i-outline-path-2" d="M18,34.15a15,15,0,0,1-7.52-28,1,1,0,0,1,1,1.73,13,13,0,1,0,13,0,1,1,0,1,1,1-1.73,15,15,0,0,1-7.52,28Z"/>

                <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M18,21a1,1,0,0,0,1-1V4a1,1,0,0,0-2,0V20A1,1,0,0,0,18,21Z"/>
                <path class="clr-i-outline--alerted clr-i-outline-path-2--alerted" d="M32.51,15.4H30.44a13,13,0,1,1-19-7.5,1,1,0,0,0-1-1.73A15,15,0,1,0,33,19.15,14.9,14.9,0,0,0,32.51,15.4Z"/>
                <path class="clr-i-outline--alerted clr-i-outline-path-3--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>

                <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M18,21a1,1,0,0,1-1-1V4a1,1,0,0,1,2,0V20A1,1,0,0,1,18,21Z"/>
                <path class="clr-i-outline--badged clr-i-outline-path-2--badged" d="M30,13.5l-.31,0A13,13,0,1,1,11.48,7.9a1,1,0,0,0-1-1.73,15,15,0,1,0,21.31,7.1A7.49,7.49,0,0,1,30,13.5Z"/>
                <circle class="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge" cx="30" cy="6" r="5"/>

                <path class="clr-i-solid clr-i-solid-path-1" d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm.06,17.68a1.28,1.28,0,0,1-1.29-1.28V8.65a1.29,1.29,0,0,1,2.58,0V18.4A1.28,1.28,0,0,1,18.06,19.68ZM18,27.79A9.88,9.88,0,0,1,12.17,9.85a1.4,1.4,0,0,1,1.94.31,1.37,1.37,0,0,1-.31,1.92,7.18,7.18,0,1,0,11.43,5.8,7.07,7.07,0,0,0-3-5.76A1.37,1.37,0,0,1,22,10.2a1.4,1.4,0,0,1,1.94-.29A9.88,9.88,0,0,1,18,27.79Z"/>

                <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M33.68,15.4h-6A9.7,9.7,0,0,1,28,17.89a10,10,0,1,1-15.83-8,1.4,1.4,0,0,1,1.94.31,1.37,1.37,0,0,1-.31,1.92,7.18,7.18,0,1,0,11.43,5.8,7.08,7.08,0,0,0-.45-2.49H22.23A3.69,3.69,0,0,1,19.35,14v4.4a1.29,1.29,0,0,1-2.58,0V8.65a1.29,1.29,0,0,1,2.58,0v.71l3.76-6.51A16,16,0,1,0,34,18a16,16,0,0,0-.23-2.61Z"/>
                <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>

                <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M30,13.5a7.47,7.47,0,0,1-3.57-.9A9.83,9.83,0,0,1,28,17.89a10,10,0,1,1-15.83-8,1.4,1.4,0,0,1,1.94.31,1.37,1.37,0,0,1-.31,1.92,7.18,7.18,0,1,0,11.43,5.8,7.07,7.07,0,0,0-3-5.76A1.37,1.37,0,0,1,22,10.2a1.38,1.38,0,0,1,1.52-.49,7.45,7.45,0,0,1-.3-6.83,16.06,16.06,0,1,0,9.93,9.93A7.46,7.46,0,0,1,30,13.5ZM16.77,8.65a1.29,1.29,0,0,1,2.58,0V18.4a1.29,1.29,0,0,1-2.58,0Z"/>
                <circle class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" cx="30" cy="6" r="5"/>
            </svg>
        `,

    "tasks": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-alert can-badge has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
        return this["host"];
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
        `

};
