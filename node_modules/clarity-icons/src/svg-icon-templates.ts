/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/* tslint:disable:max-line-length */
export const SVG_ICON_TEMPLATES: any = {

    "vm-bug": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>vm-bug</title>
                <rect class="outer-shape background" fill-opacity="0.25" fill="#DDDDDD" opacity="0.6" x="0" y="0" width="36" height="36" rx="3"/>
                <path class="inner-shape" d="M7.63948376,13.8762402 C7.32265324,13.2097082 6.53978152,12.9085139 5.80923042,13.219934 C5.07771043,13.5322837 4.80932495,14.3103691 5.13972007,14.9769011 L8.20725954,21.3744923 C8.68977207,22.3784735 9.19844491,22.9037044 10.1528121,22.9037044 C11.1720955,22.9037044 11.6168209,22.3310633 12.0983646,21.3744923 C12.0983646,21.3744923 14.7744682,15.7847341 14.8015974,15.7261685 C14.8287266,15.6666733 14.9149588,15.4863286 15.1872199,15.4872582 C15.4178182,15.490047 15.6106294,15.6657437 15.6106294,15.9018652 L15.6106294,21.3698443 C15.6106294,22.212073 16.0979865,22.9037044 17.0349134,22.9037044 C17.9718403,22.9037044 18.4785754,22.212073 18.4785754,21.3698443 L18.4785754,16.8965503 C18.4785754,16.0338702 19.1219254,15.4742436 20.0007183,15.4742436 C20.8785423,15.4742436 21.4637583,16.0524624 21.4637583,16.8965503 L21.4637583,21.3698443 C21.4637583,22.212073 21.9520842,22.9037044 22.8880423,22.9037044 C23.8240003,22.9037044 24.3326731,22.212073 24.3326731,21.3698443 L24.3326731,16.8965503 C24.3326731,16.0338702 24.9750543,15.4742436 25.8538472,15.4742436 C26.7307023,15.4742436 27.3168871,16.0524624 27.3168871,16.8965503 L27.3168871,21.3698443 C27.3168871,22.212073 27.8052131,22.9037044 28.74214,22.9037044 C29.6771291,22.9037044 30.1848331,22.212073 30.1848331,21.3698443 L30.1848331,16.2783582 C30.1848331,14.4070488 28.6181207,13.0962956 26.7307023,13.0962956 C24.8452216,13.0962956 23.6651006,14.3475536 23.6651006,14.3475536 C23.037253,13.5666793 22.1720247,13.0972252 20.7089847,13.0972252 C19.164557,13.0972252 17.8129406,14.3475536 17.8129406,14.3475536 C17.1841241,13.5666793 16.1154267,13.0972252 15.2308204,13.0972252 C13.8617638,13.0972252 12.7746572,13.675444 12.1119292,15.1302871 L10.1528121,19.5608189 L7.63948376,13.8762402" id="Fill-4" fill="#FFFFFF"/>
            </svg>
        `,

    "user": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>user</title>
                <path class="outer-shape" d="M18.08,16.9a7.45,7.45,0,1,1,7.45-7.45A7.46,7.46,0,0,1,18.08,16.9Zm0-12.9a5.45,5.45,0,1,0,5.45,5.45A5.46,5.46,0,0,0,18.08,4Z"/>
                <path class="outer-shape" d="M30.05,33.86H6.13a2,2,0,0,1-2-2V25.33a1,1,0,0,1,.2-.59,17.72,17.72,0,0,1,13.81-6c9.09,0,13.55,5.76,13.74,6a1,1,0,0,1,.2.59v6.53A2,2,0,0,1,30.05,33.86Zm-24-8.17v6.13c0,.06,0,.09.07.09H30.05s.07,0,.07-.09V25.63a15.82,15.82,0,0,0-12-5A16.27,16.27,0,0,0,6.06,25.69Z"/>
            </svg>
        `,

    get "avatar" () {
        return this["user"];
    },

    "plus": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>plus</title>
                <path class="outer-shape" d="M30,17H19V6a1,1,0,1,0-2,0V17H6a1,1,0,0,0-1,1,.91.91,0,0,0,1,.94H17V30a1,1,0,1,0,2,0V19H30a1,1,0,0,0,1-1A1,1,0,0,0,30,17Z"/>
            </svg>
        `,

    get "add" () {
        return this["plus"];
    },

    "line-chart": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>line chart</title>
                <path class="outer-shape" d="M32,5H4A2,2,0,0,0,2,7V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V7A2,2,0,0,0,32,5ZM4,29V7H32V29Z"/>
                <polygon class="inner-shape"
                        points="22.28 25.5 15.61 15.56 9.65 24.28 5.42 20.53 6.75 19.04 9.28 21.28 15.63 12 22.38 22.06 28.97 13.35 30.57 14.55 22.28 25.5"/>
            </svg>
        `,

    get "analytics" () {
        return this["line-chart"];
    },

    "bookmark": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>bookmark</title>
                <path class="outer-shape" d="M26,34a2,2,0,0,1-1.41-.58L18,26.82l-6.54,6.52A2,2,0,0,1,8,31.93V4a2,2,0,0,1,2-2H26a2,2,0,0,1,2,2V32a2,2,0,0,1-2,2Zm0-2h0V4H10V31.93L18,24Z"/>
            </svg>
        `,

    "calendar": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>calendar</title>
                <path class="outer-shape" d="M32.25,6H29V8h3V30H4V8H7V6H3.75A1.78,1.78,0,0,0,2,7.81V30.19A1.78,1.78,0,0,0,3.75,32h28.5A1.78,1.78,0,0,0,34,30.19V7.81A1.78,1.78,0,0,0,32.25,6Z"/>
                <rect class="inner-shape" x="8" y="14" width="2" height="2"/>
                <rect class="inner-shape" x="14" y="14" width="2" height="2"/>
                <rect class="inner-shape" x="20" y="14" width="2" height="2"/>
                <rect class="inner-shape" x="26" y="14" width="2" height="2"/>
                <rect class="inner-shape" x="8" y="19" width="2" height="2"/>
                <rect class="inner-shape" x="14" y="19" width="2" height="2"/>
                <rect class="inner-shape" x="20" y="19" width="2" height="2"/>
                <rect class="inner-shape" x="26" y="19" width="2" height="2"/>
                <rect class="inner-shape" x="8" y="24" width="2" height="2"/>
                <rect class="inner-shape" x="14" y="24" width="2" height="2"/>
                <rect class="inner-shape" x="20" y="24" width="2" height="2"/>
                <rect class="inner-shape" x="26" y="24" width="2" height="2"/>
                <path class="inner-shape" d="M10,10a1,1,0,0,0,1-1V3A1,1,0,0,0,9,3V9A1,1,0,0,0,10,10Z"/>
                <path class="inner-shape" d="M26,10a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V9A1,1,0,0,0,26,10Z"/>
                <rect class="outer-shape" x="13" y="6" width="10" height="2"/>
            </svg>
        `,

    get "date" () {
        return this["calendar"];
    },

    "ban": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>ban</title>
                <path class="outer-shape" d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2ZM4,18A13.93,13.93,0,0,1,7.43,8.85L27.15,28.57A14,14,0,0,1,4,18Zm24.57,9.15L8.85,7.43A14,14,0,0,1,28.57,27.15Z"/>
            </svg>
        `,

    get "cancel" () {
        return this["ban"];
    },

    "angle": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>angle</title>
                <path class="outer-shape" d="M29,24.5a1,1,0,0,1-.71-.29L18,13.91,7.71,24.21a1,1,0,0,1-1.41-1.41L18,11.09,29.71,22.79A1,1,0,0,1,29,24.5Z"/>
            </svg>
        `,

    get "caret" () {
        return this["angle"];
    },

    "bar-chart": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>bar-chart</title>
                <path class="outer-shape" d="M33,30H32V7a2,2,0,0,0-2-2H26a2,2,0,0,0-2,2V30H22V12a2,2,0,0,0-2-2H16a2,2,0,0,0-2,2V30H12V18a2,2,0,0,0-2-2H6a2,2,0,0,0-2,2V30H3a1,1,0,0,0,0,2H33a1,1,0,0,0,0-2ZM10,30H6V18h4Zm10,0H16V12h4Zm10,0H26V7h4Z"/>
            </svg>
        `,

    "angle-double": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>angle-double</title>
                <path class="outer-shape" d="M29,19.41a1,1,0,0,1-.71-.29L18,8.83,7.71,19.12a1,1,0,0,1-1.41-1.41L18,6,29.71,17.71A1,1,0,0,1,29,19.41Z"/>
                <path class="outer-shape" d="M29,30.41a1,1,0,0,1-.71-.29L18,19.83,7.71,30.12a1,1,0,0,1-1.41-1.41L18,17,29.71,28.71A1,1,0,0,1,29,30.41Z"/>
            </svg>
        `,

    get "collapse" () {
        return this["angle-double"];
    },

    "step-forward": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>step-forward</title>
                <path class="outer-shape" d="M5,32.23a2,2,0,0,1-2-2V5.77A2,2,0,0,1,6.17,4.14L23.23,16.38a2,2,0,0,1,0,3.25h0L6.17,31.86A2,2,0,0,1,5,32.23ZM5,5.77V30.23L22.07,18Z"/>
                <path class="outer-shape" d="M31,32H28a2,2,0,0,1-2-2V6a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2V30A2,2,0,0,1,31,32ZM28,6V30h3V6Z"/>
            </svg>
        `,

    "times-circle": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>times-circle</title>
                <path class="inner-shape" d="M19.61,18l4.86-4.86a1,1,0,0,0-1.41-1.41L18.2,16.54l-4.89-4.89a1,1,0,0,0-1.41,1.41L16.78,18,12,22.72a1,1,0,1,0,1.41,1.41l4.77-4.77,4.74,4.74a1,1,0,0,0,1.41-1.41Z"/>
                <path class="outer-shape" d="M18,34A16,16,0,1,1,34,18,16,16,0,0,1,18,34ZM18,4A14,14,0,1,0,32,18,14,14,0,0,0,18,4Z"/>
            </svg>
        `,

    get "remove" () {
        return this["times-circle"];
    },

    "cloud": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>cloud</title>
                <path class="outer-shape" d="M27.14,33H10.62C5.67,33,1,28.19,1,23.1a10,10,0,0,1,8-9.75,10.19,10.19,0,0,1,20.33,1.06A10.07,10.07,0,0,1,29,16.66a8.29,8.29,0,0,1,6,8C35,29.1,31.33,33,27.14,33ZM19.09,6.23a8.24,8.24,0,0,0-8.19,8l0,.87-.86.1A7.94,7.94,0,0,0,3,23.1c0,4,3.77,7.9,7.62,7.9H27.14C30.21,31,33,28,33,24.65a6.31,6.31,0,0,0-5.37-6.26l-1.18-.18.39-1.13A8.18,8.18,0,0,0,19.09,6.23Z"/>
            </svg>
        `,

    "dashboard-gauge": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>dashboard-gauge</title>
                <path class="inner-shape" d="M26.63,12l-1.41-1.41L19.3,16.37a3,3,0,1,0,1.41,1.42Z"/>
                <path class="outer-shape" d="M18,2.5A16.49,16.49,0,0,0,5.43,29.65l.3.35H30.33l.3-.35A16.49,16.49,0,0,0,18,2.5ZM29.39,28H6.67a14.51,14.51,0,0,1-3.1-8H6.81V18H3.58a14.44,14.44,0,0,1,4-9.08L9.72,11,11.13,9.6l-2-2a14.41,14.41,0,0,1,7.88-3V8h2V4.55A14.5,14.5,0,0,1,32.48,18H29v2h3.49A14.51,14.51,0,0,1,29.39,28Z"/>
            </svg>
        `,

    "datastore": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>datastore</title>
                <path class="outer-shape" d="M33,6.69h0c-.18-3.41-9.47-4.33-15-4.33S3,3.29,3,6.79V29.37c0,3.49,9.43,4.43,15,4.43s15-.93,15-4.43V6.79s0,0,0,0S33,6.7,33,6.69ZM18,31.8c-8,0-12.7-1.6-13-2.43V6.82C5.3,6,10,4.36,18,4.36c7.77,0,12.46,1.53,13,2.37-.52.87-5.21,2.39-13,2.39A37.6,37.6,0,0,1,7,7.76V9.85a43.53,43.53,0,0,0,11,1.27c4,0,9.93-.48,13-2v5.16c-.33.86-5.06,2.45-13,2.45A37.45,37.45,0,0,1,7,15.34v2.08A43.32,43.32,0,0,0,18,18.7c4,0,9.93-.48,13-2v5.17c-.33.86-5.06,2.45-13,2.45A37.45,37.45,0,0,1,7,22.92V25a43.32,43.32,0,0,0,11,1.28c4,0,9.93-.48,13-2v5.1C30.65,30.21,25.92,31.8,18,31.8Z"/>
            </svg>
        `,

    "times": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>times</title>
                <path class="outer-shape" d="M19.41,18l8.29-8.29a1,1,0,0,0-1.41-1.41L18,16.59,9.71,8.29A1,1,0,0,0,8.29,9.71L16.59,18,8.29,26.29a1,1,0,1,0,1.41,1.41L18,19.41l8.29,8.29a1,1,0,0,0,1.41-1.41Z"/>
            </svg>
        `,

    get "close" () {
        return this["times"];
    },

    "download": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>download</title>
                <path class="outer-shape" d="M31,32H5a1,1,0,0,1,0-2H31a1,1,0,0,1,0,2Z"/>
                <path class="outer-shape" d="M28.61,15.46a1,1,0,0,0-1.41,0L19,23.65V3a1,1,0,0,0-2,0V23.65L8.81,15.46a1,1,0,1,0-1.41,1.41L18,27.48,28.61,16.87A1,1,0,0,0,28.61,15.46Z"/>
            </svg>
        `,

    "pencil": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>pencil</title>
                <path class="outer-shape" d="M33.87,8.32,28,2.42a2.07,2.07,0,0,0-2.92,0L4.27,23.2l-1.9,8.2a2.06,2.06,0,0,0,2,2.5,2.14,2.14,0,0,0,.43,0L13.09,32,33.87,11.24A2.07,2.07,0,0,0,33.87,8.32ZM12.09,30.2,4.32,31.83l1.77-7.62L21.66,8.7l6,6ZM29,13.25l-6-6,3.48-3.46,5.9,6Z"/>
            </svg>
        `,

    get "edit" () {
        return this["pencil"];
    },

    "envelope": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>envelope</title>
                <path class="outer-shape" d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6ZM30.46,28H5.66l7-7.24-1.44-1.39L4,26.84V9.52L16.43,21.89a2,2,0,0,0,2.82,0L32,9.21v17.5l-7.36-7.36-1.41,1.41ZM5.31,8H30.38L17.84,20.47Z"/>
            </svg>
        `,

    get "email" () {
        return this["envelope"];
    },

    "exclamation-circle": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>exclamation-circle</title>
                <path class="inner-shape" d="M18,22.76a1,1,0,0,1-1-1V10.08a1,1,0,0,1,2,0V21.76A1,1,0,0,1,18,22.76Z"/>
                <circle class="inner-shape" cx="18" cy="25.97" r="1.33"/>
                <path class="outer-shape" d="M18,34A16,16,0,1,1,34,18,16,16,0,0,1,18,34ZM18,4A14,14,0,1,0,32,18,14,14,0,0,0,18,4Z"/>
            </svg>
        `,

    get "error" () {
        return this["exclamation-circle"];
    },

    "event": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>event</title>
                <path class="inner-shape" d="M16.17,25.86,10.81,20.5a1,1,0,0,1,1.41-1.41L16.17,23l8.64-8.64a1,1,0,0,1,1.41,1.41Z"/>
                <path class="outer-shape" d="M32.25,6H29V8h3V30H4V8H7V6H3.75A1.78,1.78,0,0,0,2,7.81V30.19A1.78,1.78,0,0,0,3.75,32h28.5A1.78,1.78,0,0,0,34,30.19V7.81A1.78,1.78,0,0,0,32.25,6Z"/>
                <path class="outer-shape" d="M10,10a1,1,0,0,0,1-1V3A1,1,0,0,0,9,3V9A1,1,0,0,0,10,10Z"/>
                <path class="outer-shape" d="M26,10a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V9A1,1,0,0,0,26,10Z"/>
                <rect class="outer-shape" x="13" y="6" width="10" height="2"/>
            </svg>
        `,

    "star": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>star</title>
                <path class="outer-shape" d="M27.19,34a2.22,2.22,0,0,1-1.24-.38l-7.46-5a.22.22,0,0,0-.25,0l-7.46,5A2.22,2.22,0,0,1,7.4,31.21l2.45-8.64a.23.23,0,0,0-.08-.24L2.71,16.78a2.22,2.22,0,0,1,1.29-4l9-.34a.23.23,0,0,0,.2-.15l3.1-8.43a2.22,2.22,0,0,1,4.17,0l3.1,8.43a.23.23,0,0,0,.2.15l9,.34a2.22,2.22,0,0,1,1.29,4L27,22.33a.22.22,0,0,0-.08.24l2.45,8.64A2.23,2.23,0,0,1,27.19,34Zm-8.82-7.42A2.21,2.21,0,0,1,19.6,27l7.46,5a.22.22,0,0,0,.34-.25l-2.45-8.64a2.21,2.21,0,0,1,.77-2.35l7.06-5.55a.22.22,0,0,0-.13-.4l-9-.34a2.22,2.22,0,0,1-2-1.46l-3.1-8.43a.22.22,0,0,0-.42,0L15.06,13a2.22,2.22,0,0,1-2,1.46l-9,.34a.22.22,0,0,0-.13.4L11,20.76a2.22,2.22,0,0,1,.77,2.35L9.33,31.75a.21.21,0,0,0,.08.24.2.2,0,0,0,.26,0l7.46-5A2.22,2.22,0,0,1,18.36,26.62Z"/>
            </svg>
        `,

    get "favorite" () {
        return this["star"];
    },

    "file": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>file</title>
                <path class="outer-shape" d="M21.87,2H6A2,2,0,0,0,4,4.05V31.94A2,2,0,0,0,6,34h23.1A2,2,0,0,0,31,31.94V11ZM22,4.94,28.12,11H22ZM6,32V4H20v9h9l0,19Z"/>
            </svg>
        `,

    get "document" () {
        return this["file"];
    },

    "filter": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>filter</title>
                <path class="outer-shape" d="M33,4H3A1,1,0,0,0,2,5V6.67a1.79,1.79,0,0,0,.53,1.27L14,19.58v10.2l2,.76V19a1,1,0,0,0-.29-.71L4,6.59V6H32v.61L20.33,18.29A1,1,0,0,0,20,19l0,13.21L22,33V19.5L33.47,8A1.81,1.81,0,0,0,34,6.7V5A1,1,0,0,0,33,4Z"/>
            </svg>
        `,

    "flag": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>flag</title>
                <path class="outer-shape" d="M6,34a1,1,0,0,1-1-1V3A1,1,0,0,1,7,3V33A1,1,0,0,1,6,34Z"/>
                <path class="outer-shape" d="M30.55,3.82a1,1,0,0,0-1,0,14.9,14.9,0,0,1-6.13,1.16,13.11,13.11,0,0,1-5.18-1.49,12.78,12.78,0,0,0-5-1.45A10.86,10.86,0,0,0,9,2.85V5.08A8.8,8.8,0,0,1,13.25,4a11.22,11.22,0,0,1,4.2,1.28,14.84,14.84,0,0,0,6,1.66A18.75,18.75,0,0,0,29,6.12V18.95a16.16,16.16,0,0,1-5.58.93,13.11,13.11,0,0,1-5.18-1.49,12.78,12.78,0,0,0-5-1.45A10.86,10.86,0,0,0,9,17.79V20a8.8,8.8,0,0,1,4.25-1.08,11.22,11.22,0,0,1,4.2,1.28,14.84,14.84,0,0,0,6,1.66,16.79,16.79,0,0,0,7-1.37,1,1,0,0,0,.55-.89V4.67A1,1,0,0,0,30.55,3.82Z"/>
            </svg>
        `,

    "folder": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>folder</title>
                <path class="outer-shape" d="M32,7H16.28L14,4H4A2,2,0,0,0,2,6V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V9A2,2,0,0,0,32,7Zm0,22H4V12h9l2-2H4V6h9l2.3,3H32Z"/>
            </svg>
        `,

    get "directory" () {
        return this["folder"];
    },

    "users": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>users</title>
                <path class="inner-shape" d="M17.87,17.28A4.85,4.85,0,1,0,13,12.43,4.86,4.86,0,0,0,17.87,17.28Zm0-7.7A2.85,2.85,0,1,1,15,12.43,2.85,2.85,0,0,1,17.87,9.58Z"/>
                <path class="outer-shape" d="M32.71,16.68a10,10,0,0,0-7-2.45c-.27,0-.51,0-.77,0A7.22,7.22,0,0,1,24,16.37a10.56,10.56,0,0,1,1.69-.14A8.69,8.69,0,0,1,31,17.83V25h2V17Z"/>
                <path class="outer-shape" d="M23.44,7.76A2.43,2.43,0,1,1,25.7,11.1,2.4,2.4,0,0,1,25,11a7.3,7.3,0,0,1,.14,1.44c0,.21,0,.41,0,.62a4.36,4.36,0,0,0,.59.06,4.44,4.44,0,1,0-3.79-6.71A7.31,7.31,0,0,1,23.44,7.76Z"/>
                <path class="outer-shape" d="M12,16.37a7.22,7.22,0,0,1-.92-2.09c-.26,0-.49,0-.77,0a10,10,0,0,0-7,2.45L3,17v8H5V17.83a8.69,8.69,0,0,1,5.34-1.6A10.56,10.56,0,0,1,12,16.37Z"/>
                <path class="outer-shape" d="M10.3,13.1a4.36,4.36,0,0,0,.59-.06c0-.2,0-.41,0-.62A7.3,7.3,0,0,1,11,11a2.4,2.4,0,0,1-.71.12,2.44,2.44,0,1,1,2.26-3.34,7.31,7.31,0,0,1,1.53-1.38A4.43,4.43,0,1,0,10.3,13.1Z"/>
                <path class="inner-shape" d="M18.07,19a10.15,10.15,0,0,0-7.86,3.43l-.21.27V30.3A1.68,1.68,0,0,0,11.67,32H24.43A1.68,1.68,0,0,0,26.1,30.3V22.65l-.21-.27A10,10,0,0,0,18.07,19Zm6,11H12V23.39A8.38,8.38,0,0,1,18.07,21a8.25,8.25,0,0,1,6,2.39Z"/>
            </svg>
        `,

    get "group" () {
        return this["users"];
    },

    "home": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>home</title>
                <path class="outer-shape" d="M33.05,19a1,1,0,0,1-.71-.29L18.05,4.41,3.76,18.71a1,1,0,0,1-1.41-1.41l15-15a1,1,0,0,1,1.41,0l15,15A1,1,0,0,1,33.05,19Z"/>
                <path class="outer-shape" d="M28,17.92V32H23V23a1,1,0,0,0-1-1H14a1,1,0,0,0-1,1v9H8V18L6,20V32a2,2,0,0,0,2,2h6a1,1,0,0,0,1-1V24h6v8.91A1.11,1.11,0,0,0,22,34h6a2,2,0,0,0,2-2V19.92Z"/>
            </svg>
        `,

    get "house" () {
        return this["home"];
    },

    "info-circle": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>info-circle</title>
                <circle class="inner-shape" cx="17.97" cy="10.4" r="1.4"/>
                <path class="inner-shape" d="M21,25H19V14.05H16a1,1,0,1,0,0,2h1V25H15a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z"/>
                <path class="outer-shape" d="M18,34A16,16,0,1,1,34,18,16,16,0,0,1,18,34ZM18,4A14,14,0,1,0,32,18,14,14,0,0,0,18,4Z"/>
            </svg>
        `,

    get "info" () {
        return this["info-circle"];
    },

    "map-marker": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>map-marker</title>
                <path class="inner-shape" d="M18.22,18.15a5.73,5.73,0,1,1,5.73-5.73A5.73,5.73,0,0,1,18.22,18.15Zm0-9.46a3.73,3.73,0,1,0,3.73,3.73A3.73,3.73,0,0,0,18.22,8.69Z"/>
                <path class="outer-shape" d="M18.22,34.54l-.76-.89a99.61,99.61,0,0,1-6.14-8L11,25.13c-1.91-2.85-4.54-6.75-4.54-11.43a11.78,11.78,0,1,1,23.56,0c0,4.67-2.62,8.57-4.53,11.42l-.35.53a99.82,99.82,0,0,1-6.14,8Zm0-30.61a9.79,9.79,0,0,0-9.78,9.78c0,4.06,2.42,7.68,4.2,10.31l.35.53c1.72,2.58,4,5.47,5.23,6.9,1.18-1.43,3.51-4.32,5.23-6.9l.36-.53C25.58,21.38,28,17.77,28,13.71A9.79,9.79,0,0,0,18.22,3.93Z"/>
            </svg>
        `,

    get "map" () {
        return this["map-marker"];
    },

    get "location" () {
        return this["map-marker"];
    },

    "lock": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>lock</title>
                <path class="inner-shape" d="M18.09,20.59A2.41,2.41,0,0,0,17,25.14V28h2V25.23a2.41,2.41,0,0,0-.91-4.64Z"/>
                <path class="outer-shape" d="M26,15V10.72a8.2,8.2,0,0,0-8-8.36,8.2,8.2,0,0,0-8,8.36V15H7V32a2,2,0,0,0,2,2H27a2,2,0,0,0,2-2V15ZM12,10.72a6.2,6.2,0,0,1,6-6.36,6.2,6.2,0,0,1,6,6.36V15H12ZM9,32V17H27V32Z"/>
            </svg>
        `,


    "bars": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>bars</title>
                <path class="outer-shape" d="M32,29H4a1,1,0,0,1,0-2H32a1,1,0,0,1,0,2Z"/>
                <path class="outer-shape" d="M32,19H4a1,1,0,0,1,0-2H32a1,1,0,0,1,0,2Z"/>
                <path class="outer-shape" d="M32,9H4A1,1,0,0,1,4,7H32a1,1,0,0,1,0,2Z"/>
            </svg>
        `,

    get "menu" () {
        return this["bars"];
    },

    "bell": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>bell</title>
                <path class="outer-shape" d="M32.66,27.88A14.22,14.22,0,0,1,30.19,25a12.65,12.65,0,0,1-1.35-4.81V15.2A10.81,10.81,0,0,0,19.36,4.45V3.17a1.33,1.33,0,1,0-2.67,0V4.47A10.81,10.81,0,0,0,7.36,15.2v4.94A12.65,12.65,0,0,1,6,25a14.37,14.37,0,0,1-2.47,2.93,1,1,0,0,0-.34.75V30a1,1,0,0,0,1,1H32a1,1,0,0,0,1-1V28.64A1,1,0,0,0,32.66,27.88ZM5.27,29a16.12,16.12,0,0,0,2.44-3,14.25,14.25,0,0,0,1.65-5.86V15.2a8.74,8.74,0,1,1,17.47,0v4.94A14.25,14.25,0,0,0,28.48,26a16.12,16.12,0,0,0,2.44,3Z"/>
                <path class="inner-shape" d="M15.75,32A2.65,2.65,0,0,0,21,32Z"/>
            </svg>
        `,

    get "notification" () {
        return this["bell"];
    },

    "power": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>power</title>
                <path class="inner-shape" d="M18,21a1,1,0,0,1-1-1V4a1,1,0,0,1,2,0V20A1,1,0,0,1,18,21Z"/>
                <path class="outer-shape" d="M18,34.15a15,15,0,0,1-7.52-28,1,1,0,0,1,1,1.73,13,13,0,1,0,13,0,1,1,0,1,1,1-1.73,15,15,0,0,1-7.52,28Z"/>
            </svg>
        `,

    "pause": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>pause</title>
                <path class="outer-shape" d="M12.93,32H6.07A2.07,2.07,0,0,1,4,29.93V6.07A2.07,2.07,0,0,1,6.07,4h6.87A2.07,2.07,0,0,1,15,6.07V29.93A2.07,2.07,0,0,1,12.93,32ZM13,6H6V30h7Z"/>
                <path class="outer-shape" d="M29.93,32H23.07A2.07,2.07,0,0,1,21,29.93V6.07A2.07,2.07,0,0,1,23.07,4h6.87A2.07,2.07,0,0,1,32,6.07V29.93A2.07,2.07,0,0,1,29.93,32ZM30,6H23V30h7Z"/>
            </svg>
        `,

    "pin": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>pin</title>
                <path class="outer-shape" d="M33,16.59a1,1,0,0,1-.71-.29L19.7,3.71a1,1,0,0,1,1.41-1.41L33.71,14.89A1,1,0,0,1,33,16.59Z"/>
                <path class="outer-shape" d="M28.52,15.56l-1.41-1.41-7.2,7.2a1,1,0,0,0-.25,1,9,9,0,0,1-1.53,8.09L5.58,17.87a9,9,0,0,1,8.09-1.53,1,1,0,0,0,1-.25l7.2-7.2L20.44,7.48l-6.79,6.79A10.94,10.94,0,0,0,3.41,17.11a1,1,0,0,0,0,1.42l6.33,6.33L2.29,32.29a1,1,0,1,0,1.41,1.41l7.44-7.44,6.33,6.33a1,1,0,0,0,.71.29h0a1,1,0,0,0,.71-.3,11,11,0,0,0,2.84-10.24Z"/>
            </svg>
        `,

    "pop-out": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>pop-out</title>
                <path class="outer-shape" d="M27,33H5a2,2,0,0,1-2-2V9A2,2,0,0,1,5,7H15V9H5V31H27V21h2V31A2,2,0,0,1,27,33Z"/>
                <path class="inner-shape" d="M18,3a1,1,0,0,0,0,2H29.59L15.74,18.85a1,1,0,1,0,1.41,1.41L31,6.41V18a1,1,0,0,0,2,0V3Z"/>
            </svg>
        `,

    "refresh": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>refresh</title>
                <path class="outer-shape" d="M22.4,11.65a1.09,1.09,0,0,0,1.09,1.09H34.43V1.81a1.09,1.09,0,1,0-2.19,0V8.95a16.41,16.41,0,1,0,1.47,15.86,1.12,1.12,0,0,0-2.05-.9,14.18,14.18,0,1,1-1.05-13.36H23.5A1.09,1.09,0,0,0,22.4,11.65Z"/>
            </svg>
        `,

    "play": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>play</title>
                <path class="outer-shape" d="M8.07,31.6A2.07,2.07,0,0,1,6,29.53V6.32A2.07,2.07,0,0,1,9,4.47L32.21,16.08a2.07,2.07,0,0,1,0,3.7L9,31.38A2.06,2.06,0,0,1,8.07,31.6Zm0-25.34L8,6.32V29.53l.1.06L31.31,18a.06.06,0,0,0,0-.06Z"/>
            </svg>
        `,

    "search": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>search</title>
                <path class="outer-shape" d="M16.33,5.05A10.95,10.95,0,1,1,5.39,16,11,11,0,0,1,16.33,5.05m0-2.05a13,13,0,1,0,13,13,13,13,0,0,0-13-13Z"/>
                <path class="outer-shape" d="M35,33.29l-7.37-7.42-1.42,1.41,7.37,7.42A1,1,0,1,0,35,33.29Z"/>
            </svg>
        `,

    "cog": `
            <svg version="1.1" version="1.1" viewBox="0 0 36 36">
                <title>cog</title>
                <path class="inner-shape" d="M18.1,25c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7S22,25,18.1,25z M18.1,13c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5
                    S20.9,13,18.1,13z"/>
                <path class="outer-shape" d="M19.7,34h-3.4c-0.7,0-1.3-0.5-1.5-1.1L13.9,30c-0.5-0.2-1-0.4-1.5-0.6l-2.6,1.4c-0.6,0.3-1.4,0.2-1.9-0.3l-2.4-2.4
                    c-0.5-0.5-0.6-1.3-0.3-1.9l1.4-2.6c-0.2-0.5-0.4-1-0.6-1.5l-2.8-0.9C2.5,21,2,20.4,2,19.7v-3.4c0-0.7,0.5-1.3,1.1-1.5l2.8-0.9
                    c0.2-0.5,0.4-1.1,0.6-1.6L5.2,9.8C4.9,9.2,5,8.4,5.5,7.9l2.4-2.4C8.4,5,9.2,4.9,9.8,5.2l2.6,1.4c0.5-0.2,1-0.5,1.6-0.6l0.9-2.8
                    C15,2.5,15.6,2,16.3,2h3.4c0.7,0,1.3,0.5,1.5,1.1l0.9,2.8c0.5,0.2,1,0.4,1.5,0.6l2.6-1.4c0.6-0.3,1.4-0.2,1.9,0.3l2.4,2.4
                    c0.5,0.5,0.6,1.3,0.3,1.9l-1.4,2.6c0.2,0.5,0.4,1,0.6,1.5l2.8,0.9c0.7,0.2,1.2,0.8,1.2,1.6v3.4c0,0.7-0.5,1.3-1.1,1.5L30,22.1
                    c-0.2,0.5-0.4,1-0.6,1.5l1.4,2.6c0.3,0.6,0.2,1.4-0.3,1.9l-2.4,2.4c-0.5,0.5-1.3,0.6-1.9,0.3l-2.6-1.4c-0.5,0.2-1,0.4-1.5,0.6
                    l-0.9,2.9C21,33.5,20.4,34,19.7,34z M16.6,32h2.8l1.1-3.6l0.5-0.1c0.7-0.2,1.4-0.5,2.1-0.9l0.5-0.3l3.3,1.8l2-2l-1.8-3.3l0.3-0.5
                    c0.4-0.7,0.6-1.4,0.9-2.1l0.1-0.5l3.6-1.1v-2.8l-3.6-1.1L28.3,15c-0.2-0.7-0.5-1.5-0.9-2.1l-0.3-0.5l1.8-3.3l-2-2l-3.3,1.8l-0.5-0.3
                    c-0.7-0.4-1.4-0.7-2.1-0.9l-0.5-0.2L19.4,4h-2.8l-1.1,3.5L15,7.7c-0.8,0.2-1.5,0.5-2.2,0.9l-0.5,0.3L9.1,7.1l-2,2l1.7,3.3l-0.3,0.5
                    c-0.4,0.7-0.7,1.4-0.9,2.2l-0.2,0.5L4,16.6v2.8l3.6,1.1L7.7,21c0.2,0.7,0.5,1.5,0.9,2.1l0.3,0.5l-1.8,3.3l2,2l3.3-1.8l0.5,0.3
                    c0.7,0.4,1.4,0.6,2.1,0.9l0.5,0.1L16.6,32z"/>
            </svg>
        `,

    get "settings" () {
        return this.cog;
    },

    "share": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>share</title>
                <path class="outer-shape" d="M27.53,24a5,5,0,0,0-3.6,1.55L11.74,19.45a4.47,4.47,0,0,0,0-2.8l12.21-6.21a5.12,5.12,0,1,0-1.07-1.7L10.79,14.89a5,5,0,1,0,0,6.33l12.06,6.07A4.93,4.93,0,0,0,22.54,29a5,5,0,1,0,5-5Zm0-20a3,3,0,1,1-3,3A3,3,0,0,1,27.53,4ZM7,21a3,3,0,1,1,3-3A3,3,0,0,1,7,21ZM27.53,32a3,3,0,1,1,3-3A3,3,0,0,1,27.53,32Z"/>
            </svg>
        `,

    "stop": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>stop</title>
                <path class="outer-shape" d="M30,32H6a2,2,0,0,1-2-2V6A2,2,0,0,1,6,4H30a2,2,0,0,1,2,2V30A2,2,0,0,1,30,32ZM6,6V30H30V6Z"/>
            </svg>
        `,

    "check": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>check</title>
                <path class="outer-shape" d="M13.72,27.69,3.29,17.27a1,1,0,0,1,1.41-1.41l9,9L31.29,7.29a1,1,0,0,1,1.41,1.41Z"/>
            </svg>
        `,

    get "success" () {
        return this["check"];
    },

    "sync": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>sync</title>
                <path class="outer-shape" d="M32.84,15.72a1,1,0,1,0-2,.29A13.15,13.15,0,0,1,31,17.94,13,13,0,0,1,8.7,27h5.36a1,1,0,0,0,0-2h-9v9a1,1,0,1,0,2,0V28.2A15,15,0,0,0,32.84,15.72Z"/>
                <path class="outer-shape" d="M30.06,1A1.05,1.05,0,0,0,29,2V7.83A14.94,14.94,0,0,0,3,17.94a15.16,15.16,0,0,0,.2,2.48,1,1,0,0,0,1,.84h.16a1,1,0,0,0,.82-1.15A13.23,13.23,0,0,1,5,17.94a13,13,0,0,1,13-13A12.87,12.87,0,0,1,27.44,9H22.06a1,1,0,0,0,0,2H31V2A1,1,0,0,0,30.06,1Z"/>
            </svg>
        `,

    "tasks": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>tasks</title>
                <path class="outer-shape" d="M29.29,34H6.71A1.7,1.7,0,0,1,5,32.31V6.69A1.75,1.75,0,0,1,7,5H9V7H7V32H29V7H27V5h2.25A1.7,1.7,0,0,1,31,6.69V32.31A1.7,1.7,0,0,1,29.29,34Z"/>
                <path class="inner-shape" d="M16.66,25.76,11.3,20.4A1,1,0,0,1,12.72,19l3.94,3.94,8.64-8.64a1,1,0,0,1,1.41,1.41Z"/>
                <path class="inner-shape" d="M26,11H10V7.33A2.34,2.34,0,0,1,12.33,5h1.79a4,4,0,0,1,7.75,0h1.79A2.34,2.34,0,0,1,26,7.33ZM12,9H24V7.33A.33.33,0,0,0,23.67,7H20V6a2,2,0,0,0-4,0V7H12.33a.33.33,0,0,0-.33.33Z"/>
            </svg>
        `,

    "trash": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>trash</title>
                <path class="outer-shape" d="M27.14,34H8.86A2.93,2.93,0,0,1,6,31V11.23H8V31a.93.93,0,0,0,.86,1H27.14A.93.93,0,0,0,28,31V11.23h2V31A2.93,2.93,0,0,1,27.14,34Z"/>
                <path class="outer-shape" d="M30.78,9H5A1,1,0,0,1,5,7H30.78a1,1,0,0,1,0,2Z"/>
                <rect class="inner-shape" x="21" y="13" width="2" height="15"/>
                <rect class="inner-shape" x="13" y="13" width="2" height="15"/>
                <path class="outer-shape" d="M23,5.86H21.1V4H14.9V5.86H13V4a2,2,0,0,1,1.9-2h6.2A2,2,0,0,1,23,4Z"/>
            </svg>
        `,

    "unlock": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>unlock</title>
                <path class="inner-shape" d="M12,25.14V28h2V25.23a2.42,2.42,0,1,0-2-.09Z"/>
                <path class="outer-shape" d="M26,2a8.2,8.2,0,0,0-8,8.36V15H2V32a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V15H20V10.36A6.2,6.2,0,0,1,26,4a6.2,6.2,0,0,1,6,6.36v6.83a1,1,0,0,0,2,0V10.36A8.2,8.2,0,0,0,26,2ZM22,17V32H4V17Z"/>
            </svg>
        `,

    "upload": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>upload</title>
                <path class="outer-shape" d="M31,32H5a1,1,0,0,1,0-2H31a1,1,0,0,1,0,2Z"/>
                <path class="outer-shape" d="M28.61,14a1,1,0,0,1-1.41,0L19,5.85V26.5a1,1,0,0,1-2,0V5.85L8.81,14a1,1,0,0,1-1.41-1.41L18,2,28.61,12.63A1,1,0,0,1,28.61,14Z"/>
            </svg>
        `,

    "exclamation-triangle": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>exclamation-triangle</title>
                <path class="inner-shape" d="M17,11V22a1,1,0,0,0,2,0V11a1,1,0,0,0-2,0Z"/>
                <circle class="inner-shape" cx="18.04" cy="27" r="1.33"/>
                <path class="outer-shape" d="M34.76,30.05l-15-28h0a2,2,0,0,0-3.53,0l-15,28A2,2,0,0,0,3,33H33a2,2,0,0,0,1.76-2.95ZM3,31,18,3h0L33,31Z"/>
            </svg>
        `,

    get "warning" () {
        return this["exclamation-triangle"];
    },

};
