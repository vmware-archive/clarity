/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

/* tslint:disable:max-line-length */
export const essentialShapes: any = {

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
        return this[ "pencil" ];
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

    "users": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-alert can-badge has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>users</title>

                <path class="clr-i-outline clr-i-outline-path-1" d="M17.9,17.3c2.7,0,4.8-2.2,4.8-4.9c0-2.7-2.2-4.8-4.9-4.8c-2.7,0-4.8,2.2-4.8,4.8C13,15.1,15.2,17.3,17.9,17.3z M17.8,9.6C17.9,9.6,17.9,9.6,17.8,9.6c1.6,0,2.9,1.3,2.9,2.9s-1.3,2.8-2.9,2.8c-1.6,0-2.8-1.3-2.8-2.8C15,10.9,16.3,9.6,17.8,9.6z"/>
                <path class="clr-i-outline clr-i-outline-path-2" d="M32.7,16.7c-1.9-1.7-4.4-2.6-7-2.5c-0.3,0-0.5,0-0.8,0c-0.2,0.8-0.5,1.5-0.9,2.1c0.6-0.1,1.1-0.1,1.7-0.1c1.9-0.1,3.8,0.5,5.3,1.6V25h2v-8L32.7,16.7z"/>
                <path class="clr-i-outline clr-i-outline-path-3" d="M23.4,7.8c0.5-1.2,1.9-1.8,3.2-1.3c1.2,0.5,1.8,1.9,1.3,3.2c-0.4,0.9-1.3,1.5-2.2,1.5c-0.2,0-0.5,0-0.7-0.1c0.1,0.5,0.1,1,0.1,1.4c0,0.2,0,0.4,0,0.6c0.2,0,0.4,0.1,0.6,0.1c2.5,0,4.5-2,4.5-4.4c0-2.5-2-4.5-4.4-4.5c-1.6,0-3,0.8-3.8,2.2C22.5,6.8,23,7.2,23.4,7.8z"/>
                <path class="clr-i-outline clr-i-outline-path-4" d="M12,16.4c-0.4-0.6-0.7-1.3-0.9-2.1c-0.3,0-0.5,0-0.8,0c-2.6-0.1-5.1,0.8-7,2.4L3,17v8h2v-7.2c1.6-1.1,3.4-1.7,5.3-1.6C10.9,16.2,11.5,16.3,12,16.4z"/>
                <path class="clr-i-outline clr-i-outline-path-5" d="M10.3,13.1c0.2,0,0.4,0,0.6-0.1c0-0.2,0-0.4,0-0.6c0-0.5,0-1,0.1-1.4c-0.2,0.1-0.5,0.1-0.7,0.1c-1.3,0-2.4-1.1-2.4-2.4c0-1.3,1.1-2.4,2.4-2.4c1,0,1.9,0.6,2.3,1.5c0.4-0.5,1-1,1.5-1.4c-1.3-2.1-4-2.8-6.1-1.5c-2.1,1.3-2.8,4-1.5,6.1C7.3,12.3,8.7,13.1,10.3,13.1z"/>
                <path class="clr-i-outline clr-i-outline-path-6" d="M26.1,22.7l-0.2-0.3c-2-2.2-4.8-3.5-7.8-3.4c-3-0.1-5.9,1.2-7.9,3.4L10,22.7v7.6c0,0.9,0.7,1.7,1.7,1.7c0,0,0,0,0,0h12.8c0.9,0,1.7-0.8,1.7-1.7c0,0,0,0,0,0V22.7z M24.1,30H12v-6.6c1.6-1.6,3.8-2.4,6.1-2.4c2.2-0.1,4.4,0.8,6,2.4V30z"/>

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
                <path class="clr-i-solid clr-i-solid-path-4" d="M24.43,13.44a6.54,6.54,0,0,1,0,.69,4.09,4.09,0,0,0,.58.05h.19A4.09,4.09,0,1,0,21.47,8,6.53,6.53,0,0,1,24.43,13.44Z"/>
                <circle class="clr-i-solid clr-i-solid-path-5" cx="17.87" cy="13.45" r="4.47"/>
                <path class="clr-i-solid clr-i-solid-path-6" d="M18.11,20.3A9.69,9.69,0,0,0,11,23l-.25.28v6.33a1.57,1.57,0,0,0,1.6,1.54H23.84a1.57,1.57,0,0,0,1.6-1.54V23.3L25.2,23A9.58,9.58,0,0,0,18.11,20.3Z"/>

                <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M12,16.14q-.43,0-.87,0a8.67,8.67,0,0,0-6.43,2.52l-.24.28v8.28H8.54v-4.7l.55-.62.25-.29a11,11,0,0,1,4.71-2.86A6.59,6.59,0,0,1,12,16.14Z"/>
                <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted" d="M31.34,18.63a8.67,8.67,0,0,0-6.43-2.52,10.47,10.47,0,0,0-1.09.06,6.59,6.59,0,0,1-2,2.45,10.91,10.91,0,0,1,5,3l.25.28.54.62v4.71h3.94V18.91Z"/>
                <path class="clr-i-solid--alerted clr-i-solid-path-3--alerted" d="M11.1,14.19c.11,0,.2,0,.31,0a6.45,6.45,0,0,1,3.11-6.29,4.09,4.09,0,1,0-3.42,6.33Z"/>
                <path class="clr-i-solid--alerted clr-i-solid-path-4--alerted" d="M18.11,20.3A9.69,9.69,0,0,0,11,23l-.25.28v6.33a1.57,1.57,0,0,0,1.6,1.54H23.84a1.57,1.57,0,0,0,1.6-1.54V23.3L25.2,23A9.58,9.58,0,0,0,18.11,20.3Z"/>
                <path class="clr-i-solid--alerted clr-i-solid-path-5--alerted" d="M17.87,17.92a4.46,4.46,0,0,0,4-2.54A3.67,3.67,0,0,1,19,9.89l.35-.61A4.42,4.42,0,0,0,17.87,9a4.47,4.47,0,1,0,0,8.93Z"/>
                <path class="clr-i-solid--alerted clr-i-solid-path-6--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>

                <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M12,16.14q-.43,0-.87,0a8.67,8.67,0,0,0-6.43,2.52l-.24.28v8.28H8.54v-4.7l.55-.62.25-.29a11,11,0,0,1,4.71-2.86A6.58,6.58,0,0,1,12,16.14Z"/>
                <path class="clr-i-solid--badged clr-i-solid-path-2--badged" d="M31.34,18.63a8.67,8.67,0,0,0-6.43-2.52,10.47,10.47,0,0,0-1.09.06,6.59,6.59,0,0,1-2,2.45,10.91,10.91,0,0,1,5,3l.25.28.54.62v4.71h3.94V18.91Z"/>
                <path class="clr-i-solid--badged clr-i-solid-path-3--badged" d="M11.1,14.19c.11,0,.2,0,.31,0a6.45,6.45,0,0,1,3.11-6.29,4.09,4.09,0,1,0-3.42,6.33Z"/>
                <circle class="clr-i-solid--badged clr-i-solid-path-4--badged" cx="17.87" cy="13.45" r="4.47"/>
                <path class="clr-i-solid--badged clr-i-solid-path-5--badged" d="M18.11,20.3A9.69,9.69,0,0,0,11,23l-.25.28v6.33a1.57,1.57,0,0,0,1.6,1.54H23.84a1.57,1.57,0,0,0,1.6-1.54V23.3L25.2,23A9.58,9.58,0,0,0,18.11,20.3Z"/>
                <path class="clr-i-solid--badged clr-i-solid-path-6--badged" d="M24.43,13.44a6.54,6.54,0,0,1,0,.69,4.09,4.09,0,0,0,.58.05h.19a4.05,4.05,0,0,0,2.52-1,7.5,7.5,0,0,1-5.14-6.32A4.13,4.13,0,0,0,21.47,8,6.53,6.53,0,0,1,24.43,13.44Z"/>
                <circle class="clr-i-solid--badged clr-i-solid-path-7--badged clr-i-badge" cx="30" cy="6" r="5"/>
            </svg>
        `,

    get "group"() {
        return this[ "users" ];
    },


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

    "angle-double": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>angle-double</title>
                <path class="clr-i-outline clr-i-outline-path-1" d="M29,19.41a1,1,0,0,1-.71-.29L18,8.83,7.71,19.12a1,1,0,0,1-1.41-1.41L18,6,29.71,17.71A1,1,0,0,1,29,19.41Z"/>
                <path class="clr-i-outline clr-i-outline-path-2" d="M29,30.41a1,1,0,0,1-.71-.29L18,19.83,7.71,30.12a1,1,0,0,1-1.41-1.41L18,17,29.71,28.71A1,1,0,0,1,29,30.41Z"/>
            </svg>
        `,

    get "collapse"() {
        return this[ "angle-double" ];
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
        return this[ "file" ];
    },

    "plus": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>plus</title>
                <path class="clr-i-outline clr-i-outline-path-1" d="M30,17H19V6a1,1,0,1,0-2,0V17H6a1,1,0,0,0-1,1,.91.91,0,0,0,1,.94H17V30a1,1,0,1,0,2,0V19H30a1,1,0,0,0,1-1A1,1,0,0,0,30,17Z"/>
            </svg>
        `,

    get "add"() {
        return this[ "plus" ];
    },

    "ban": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>ban</title>
                <path class="clr-i-outline clr-i-outline-path-1" d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2ZM4,18A13.93,13.93,0,0,1,7.43,8.85L27.15,28.57A14,14,0,0,1,4,18Zm24.57,9.15L8.85,7.43A14,14,0,0,1,28.57,27.15Z"/>
            </svg>
        `,

    get "cancel"() {
        return this[ "ban" ];
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
        return this[ "times-circle" ];
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
                <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>

                <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M30,13.5a7.47,7.47,0,0,1-3.57-.9A9.83,9.83,0,0,1,28,17.89a10,10,0,1,1-15.83-8,1.4,1.4,0,0,1,1.94.31,1.37,1.37,0,0,1-.31,1.92,7.18,7.18,0,1,0,11.43,5.8,7.07,7.07,0,0,0-3-5.76A1.37,1.37,0,0,1,22,10.2a1.38,1.38,0,0,1,1.52-.49,7.45,7.45,0,0,1-.3-6.83,16.06,16.06,0,1,0,9.93,9.93A7.46,7.46,0,0,1,30,13.5ZM16.77,8.65a1.29,1.29,0,0,1,2.58,0V18.4a1.29,1.29,0,0,1-2.58,0Z"/>
                <circle class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" cx="30" cy="6" r="5"/>
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

    "plus-circle": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">    
            <title>plus-circle</title>   
            <path d="M26.17,17H19V9.83a1,1,0,0,0-2,0V17H9.83a1,1,0,0,0,0,2H17v7.17a1,1,0,0,0,2,0V19h7.17a1,1,0,0,0,0-2Z" class="clr-i-outline clr-i-outline-path-1"/>   
            <path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,30A14,14,0,1,1,32,18,14,14,0,0,1,18,32Z" class="clr-i-outline clr-i-outline-path-2"/>
            <path d="M34,18A16,16,0,1,1,18,2,16,16,0,0,1,34,18Zm-8.41-1.5H19.5V10.41a1.5,1.5,0,0,0-3,0V16.5H10.41a1.5,1.5,0,0,0,0,3H16.5v6.09a1.5,1.5,0,0,0,3,0V19.5h6.09a1.5,1.5,0,0,0,0-3Z" class="clr-i-solid clr-i-solid-path-1"/>
        </svg>`,

    "circle": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">    
            <title>circle</title>   
            <path d="M18,4A14,14,0,1,0,32,18,14,14,0,0,0,18,4Zm0,26A12,12,0,1,1,30,18,12,12,0,0,1,18,30Z" class="clr-i-outline clr-i-outline-path-1"/>
            <path d="M18,4A14,14,0,1,0,32,18,14,14,0,0,0,18,4Z" class="clr-i-solid clr-i-solid-path-1"/>
        </svg>`,

    "tag": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-alert can-badge has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">    
            <title>tag</title>    
            <circle cx="10.52" cy="10.52" r="1.43" class="clr-i-outline clr-i-outline-path-1"/>   
            <path d="M31.93,19.2,17.33,4.6A2,2,0,0,0,15.92,4L6,4A2,2,0,0,0,4,6l0,9.92a2,2,0,0,0,.59,1.41l14.6,14.6a2,2,0,0,0,2.83,0l9.9-9.9A2,2,0,0,0,31.93,19.2ZM20.62,30.52,6,15.91V6h9.92l14.6,14.62Z" class="clr-i-outline clr-i-outline-path-2"/>
            <circle cx="10.52" cy="10.52" r="1.43" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/>   
            <path d="M31.93,19.2l-3.8-3.8H25.31l5.22,5.22-9.9,9.9L6,15.91V6h9.92l3.41,3.41,1-1.78-3-3A2,2,0,0,0,15.92,4L6,4A2,2,0,0,0,4,6l0,9.92a2,2,0,0,0,.59,1.41l14.6,14.6a2,2,0,0,0,2.83,0l9.9-9.9A2,2,0,0,0,31.93,19.2Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"/>   
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted clr-i-alert"/>
            <circle cx="10.52" cy="10.52" r="1.43" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>   
            <path d="M31.93,19.2,17.33,4.6A2,2,0,0,0,15.92,4L6,4A2,2,0,0,0,4,6l0,9.92a2,2,0,0,0,.59,1.41l14.6,14.6a2,2,0,0,0,2.83,0l9.9-9.9A2,2,0,0,0,31.93,19.2ZM20.62,30.52,6,15.91V6h9.92l14.6,14.62Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>    
            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge"/>
            <path d="M31.93,19.2,17.33,4.6A2,2,0,0,0,15.92,4L6,4A2,2,0,0,0,4,6l0,9.92a2,2,0,0,0,.59,1.41l14.6,14.6a2,2,0,0,0,2.83,0l9.9-9.9A2,2,0,0,0,31.93,19.2ZM9.65,11.31a1.66,1.66,0,1,1,1.66-1.66A1.66,1.66,0,0,1,9.65,11.31Z" class="clr-i-solid clr-i-solid-path-1"/>
            <path d="M28.46,15.73H22.23A3.68,3.68,0,0,1,19,10.22l1.43-2.47L17.33,4.6A2,2,0,0,0,15.92,4L6,4A2,2,0,0,0,4,6l0,9.92a2,2,0,0,0,.59,1.41l14.6,14.6a2,2,0,0,0,2.83,0l9.9-9.9a2,2,0,0,0,0-2.83ZM9.65,11.31a1.66,1.66,0,1,1,1.66-1.66A1.66,1.66,0,0,1,9.65,11.31Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"/>   
            <path d="M26.85,1.47l-5.72,9.91a1.28,1.28,0,0,0,1.1,1.91H33.68a1.28,1.28,0,0,0,1.1-1.91L29.06,1.47A1.28,1.28,0,0,0,26.85,1.47Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert"/>
            <path d="M31.93,19.2,17.33,4.6A2,2,0,0,0,15.92,4L6,4A2,2,0,0,0,4,6l0,9.92a2,2,0,0,0,.59,1.41l14.6,14.6a2,2,0,0,0,2.83,0l9.9-9.9A2,2,0,0,0,31.93,19.2ZM9.65,11.31a1.66,1.66,0,1,1,1.66-1.66A1.66,1.66,0,0,1,9.65,11.31Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>    
            <circle cx="30" cy="6.33" r="5" class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge"/>
        </svg>`,

    "history": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">    
            <title>history</title>   
            <path d="M18,9.83a1,1,0,0,0-1,1v8.72l5.9,4A1,1,0,0,0,24,21.88l-5-3.39V10.83A1,1,0,0,0,18,9.83Z" class="clr-i-outline clr-i-outline-path-1"/>   
            <path d="M18,2A16.09,16.09,0,0,0,4,10.26V5.2a1,1,0,0,0-2,0V14h8.8a1,1,0,0,0,0-2H5.35A14,14,0,1,1,8.58,28.35a1,1,0,0,0-1.35,1.48A16,16,0,1,0,18,2Z" class="clr-i-outline clr-i-outline-path-2"/>
        </svg>`,

    "alarm-clock": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-alert can-badge has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">    
            <title>alarm-clock</title>   
            <path d="M31.47,3.84a5.78,5.78,0,0,0-7.37-.63,16.08,16.08,0,0,1,8.2,7.65A5.73,5.73,0,0,0,31.47,3.84Z" class="clr-i-outline clr-i-outline-path-1"/>   
            <path d="M11.42,3.43a5.77,5.77,0,0,0-7.64.41,5.72,5.72,0,0,0-.38,7.64A16.08,16.08,0,0,1,11.42,3.43Z" class="clr-i-outline clr-i-outline-path-2"/>   
            <path d="M16.4,4.09A14,14,0,0,0,8.11,27.88L5.56,30.43A1,1,0,1,0,7,31.84l2.66-2.66a13.9,13.9,0,0,0,16.88-.08l2.74,2.74a1,1,0,0,0,1.41-1.41L28,27.78A14,14,0,0,0,16.4,4.09ZM19.58,29.9A12,12,0,1,1,29.92,19.56,12,12,0,0,1,19.58,29.9Z" class="clr-i-outline clr-i-outline-path-3"/>   
            <path d="M24.92,20.34l-6.06-3V9.5a.9.9,0,0,0-1.8,0v9L24.12,22a.9.9,0,1,0,.79-1.62Z" class="clr-i-outline clr-i-outline-path-4"/>
            <path d="M11.42,3.43a5.77,5.77,0,0,0-7.64.41,5.72,5.72,0,0,0-.38,7.64A16.08,16.08,0,0,1,11.42,3.43Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/>   
            <path d="M18.86,9.5a.9.9,0,0,0-1.8,0v9L24.12,22a.9.9,0,1,0,.79-1.62l-6.06-3Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"/>   
            <path d="M28,27.78A13.88,13.88,0,0,0,31.77,15.4h-2a12.07,12.07,0,1,1-8.67-9l1-1.8a14,14,0,0,0-14,23.27L5.56,30.43A1,1,0,1,0,7,31.84l2.66-2.66a13.9,13.9,0,0,0,16.88-.08l2.74,2.74a1,1,0,0,0,1.41-1.41Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"/>   
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-4--alerted clr-i-alert"/>
            <path d="M11.42,3.43a5.77,5.77,0,0,0-7.64.41,5.72,5.72,0,0,0-.38,7.64A16.08,16.08,0,0,1,11.42,3.43Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"/>   
            <path d="M28,27.78A13.88,13.88,0,0,0,31.77,15.4H22.23A3.69,3.69,0,0,1,19,13.56L19,13.4v3.78L25,20.1a1,1,0,1,1-.87,1.8L17,18.44V9.69a1,1,0,0,1,2,0V10L19,9.89l3-5.28a14,14,0,0,0-14,23.27L5.56,30.43A1,1,0,1,0,7,31.84l2.66-2.66a13.9,13.9,0,0,0,16.88-.08l2.74,2.74a1,1,0,0,0,1.41-1.41Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted"/>   
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-solid--alerted clr-i-solid-path-3--alerted clr-i-alert"/>
            <path d="M11.42,3.43a5.77,5.77,0,0,0-7.64.41,5.72,5.72,0,0,0-.38,7.64A16.08,16.08,0,0,1,11.42,3.43Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>   
            <path d="M28,27.78a13.89,13.89,0,0,0,3.21-14.39A7.46,7.46,0,0,1,22.5,6a7.52,7.52,0,0,1,.11-1.21A14,14,0,0,0,8.11,27.88L5.56,30.43A1,1,0,1,0,7,31.84l2.66-2.66a13.9,13.9,0,0,0,16.88-.08l2.74,2.74a1,1,0,0,0,1.41-1.41Zm-2.52-6.35a1,1,0,0,1-1.33.47L17,18.44V9.69a1,1,0,0,1,2,0v7.5L25,20.1A1,1,0,0,1,25.49,21.43Z" class="clr-i-solid--badged clr-i-solid-path-2--badged"/>    
            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge"/>
            <path d="M11.42,3.43a5.77,5.77,0,0,0-7.64.41,5.72,5.72,0,0,0-.38,7.64A16.08,16.08,0,0,1,11.42,3.43Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>   
            <path d="M18.86,9.5a.9.9,0,0,0-1.8,0v9L24.12,22a.9.9,0,1,0,.79-1.62l-6.06-3Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>   
            <path d="M28,27.78a13.89,13.89,0,0,0,3.21-14.39,7,7,0,0,1-2.11.05A12,12,0,1,1,22.56,6.9,7.54,7.54,0,0,1,22.5,6a7.52,7.52,0,0,1,.11-1.21A14,14,0,0,0,8.11,27.88L5.56,30.43A1,1,0,1,0,7,31.84l2.66-2.66a13.9,13.9,0,0,0,16.88-.08l2.74,2.74a1,1,0,0,0,1.41-1.41Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"/>    
            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge"/>
            <path d="M31.47,3.84a5.78,5.78,0,0,0-7.37-.63,16.08,16.08,0,0,1,8.2,7.65A5.73,5.73,0,0,0,31.47,3.84Z" class="clr-i-solid clr-i-solid-path-1"/>   
            <path d="M11.42,3.43a5.77,5.77,0,0,0-7.64.41,5.72,5.72,0,0,0-.38,7.64A16.08,16.08,0,0,1,11.42,3.43Z" class="clr-i-solid clr-i-solid-path-2"/>   
            <path d="M18,4A14,14,0,0,0,8.11,27.88L5.56,30.43A1,1,0,1,0,7,31.84l2.66-2.66a13.9,13.9,0,0,0,16.88-.08l2.74,2.74a1,1,0,0,0,1.41-1.41L28,27.78A14,14,0,0,0,18,4Zm7.47,17.43a1,1,0,0,1-1.33.47L17,18.44V9.69a1,1,0,0,1,2,0v7.5L25,20.1A1,1,0,0,1,25.49,21.43Z" class="clr-i-solid clr-i-solid-path-3"/>
        </svg>`,

    "arrow": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">    
            <title>arrow</title>   
            <path d="M27.66,15.61,18,6,8.34,15.61A1,1,0,1,0,9.75,17L17,9.81V28.94a1,1,0,1,0,2,0V9.81L26.25,17a1,1,0,0,0,1.41-1.42Z" class="clr-i-outline clr-i-outline-path-1"/>
        </svg>`,

    "circle-arrow": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">    
            <title>circle-arrow</title>   
            <path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,30A14,14,0,1,1,32,18,14,14,0,0,1,18,32Z" class="clr-i-outline clr-i-outline-path-1"/>   
            <path d="M18.08,8.26l-7.61,7.61a1,1,0,1,0,1.41,1.41L17,12.18v15a1,1,0,0,0,2,0V12l5.28,5.28a1,1,0,1,0,1.41-1.41Z" class="clr-i-outline clr-i-outline-path-2"/>
            <path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm8,15.57a1.43,1.43,0,0,1-2,0L19.4,13V27.14a1.4,1.4,0,0,1-2.8,0v-14l-4.43,4.43a1.4,1.4,0,0,1-2-2L18.08,7.7,26,15.59A1.4,1.4,0,0,1,26,17.57Z" class="clr-i-solid clr-i-solid-path-1"/>
        </svg>`,

    "copy": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">    
            <title>copy</title>   
            <path d="M29.5,7h-19A1.5,1.5,0,0,0,9,8.5v24A1.5,1.5,0,0,0,10.5,34h19A1.5,1.5,0,0,0,31,32.5V8.5A1.5,1.5,0,0,0,29.5,7ZM29,32H11V9H29Z" class="clr-i-outline clr-i-outline-path-1"/>   
            <path d="M26,3.5A1.5,1.5,0,0,0,24.5,2H5.5A1.5,1.5,0,0,0,4,3.5v24A1.5,1.5,0,0,0,5.5,29H6V4H26Z" class="clr-i-outline clr-i-outline-path-2"/>
            <path d="M27,3.56A1.56,1.56,0,0,0,25.43,2H5.57A1.56,1.56,0,0,0,4,3.56V28.44A1.56,1.56,0,0,0,5.57,30h.52V4.07H27Z" class="clr-i-solid clr-i-solid-path-1"/>    
            <rect x="8" y="6" width="23" height="28" rx="1.5" ry="1.5" class="clr-i-solid clr-i-solid-path-2"/>
        </svg>`,


    "eye": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">    
            <title>eye-show</title>   
            <path d="M33.62,17.53c-3.37-6.23-9.28-10-15.82-10S5.34,11.3,2,17.53L1.72,18l.26.48c3.37,6.23,9.28,10,15.82,10s12.46-3.72,15.82-10l.26-.48ZM17.8,26.43C12.17,26.43,7,23.29,4,18c3-5.29,8.17-8.43,13.8-8.43S28.54,12.72,31.59,18C28.54,23.29,23.42,26.43,17.8,26.43Z" class="clr-i-outline clr-i-outline-path-1"/>   
            <path d="M18.09,11.17A6.86,6.86,0,1,0,25,18,6.86,6.86,0,0,0,18.09,11.17Zm0,11.72A4.86,4.86,0,1,1,23,18,4.87,4.87,0,0,1,18.09,22.89Z" class="clr-i-outline clr-i-outline-path-2"/>
            <path d="M33.62,17.53c-3.37-6.23-9.28-10-15.82-10S5.34,11.3,2,17.53L1.72,18l.26.48c3.37,6.23,9.28,10,15.82,10s12.46-3.72,15.82-10l.26-.48ZM17.8,26.43C12.17,26.43,7,23.29,4,18c3-5.29,8.17-8.43,13.8-8.43S28.54,12.72,31.59,18C28.54,23.29,23.42,26.43,17.8,26.43Z" class="clr-i-solid clr-i-solid-path-1"/>    
            <circle cx="18.09" cy="18.03" r="6.86" class="clr-i-solid clr-i-solid-path-2"/>
        </svg>`,

    get "eye-show"() {
        return this[ "eye" ];
    },

    "eye-hide": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">    
            <title>eye-hide</title>   
            <path d="M25.19,20.4A6.78,6.78,0,0,0,25.62,18a6.86,6.86,0,0,0-6.86-6.86,6.79,6.79,0,0,0-2.37.43L18,13.23a4.78,4.78,0,0,1,.74-.06A4.87,4.87,0,0,1,23.62,18a4.79,4.79,0,0,1-.06.74Z" class="clr-i-outline clr-i-outline-path-1"/>   
            <path d="M34.29,17.53c-3.37-6.23-9.28-10-15.82-10a16.82,16.82,0,0,0-5.24.85L14.84,10a14.78,14.78,0,0,1,3.63-.47c5.63,0,10.75,3.14,13.8,8.43a17.75,17.75,0,0,1-4.37,5.1l1.42,1.42a19.93,19.93,0,0,0,5-6l.26-.48Z" class="clr-i-outline clr-i-outline-path-2"/>   
            <path d="M4.87,5.78l4.46,4.46a19.52,19.52,0,0,0-6.69,7.29L2.38,18l.26.48c3.37,6.23,9.28,10,15.82,10a16.93,16.93,0,0,0,7.37-1.69l5,5,1.75-1.5-26-26Zm9.75,9.75,6.65,6.65a4.81,4.81,0,0,1-2.5.72A4.87,4.87,0,0,1,13.9,18,4.81,4.81,0,0,1,14.62,15.53Zm-1.45-1.45a6.85,6.85,0,0,0,9.55,9.55l1.6,1.6a14.91,14.91,0,0,1-5.86,1.2c-5.63,0-10.75-3.14-13.8-8.43a17.29,17.29,0,0,1,6.12-6.3Z" class="clr-i-outline clr-i-outline-path-3"/>
            <path d="M18.37,11.17A6.79,6.79,0,0,0,16,11.6l8.8,8.8A6.78,6.78,0,0,0,25.23,18,6.86,6.86,0,0,0,18.37,11.17Z" class="clr-i-solid clr-i-solid-path-1"/>   
            <path d="M34.29,17.53c-3.37-6.23-9.28-10-15.82-10a16.82,16.82,0,0,0-5.24.85L14.84,10a14.78,14.78,0,0,1,3.63-.47c5.63,0,10.75,3.14,13.8,8.43a17.75,17.75,0,0,1-4.37,5.1l1.42,1.42a19.93,19.93,0,0,0,5-6l.26-.48Z" class="clr-i-solid clr-i-solid-path-2"/>   
            <path d="M4.87,5.78l4.46,4.46a19.52,19.52,0,0,0-6.69,7.29L2.38,18l.26.48c3.37,6.23,9.28,10,15.82,10a16.93,16.93,0,0,0,7.37-1.69l5,5,1.75-1.5-26-26Zm8.3,8.3a6.85,6.85,0,0,0,9.55,9.55l1.6,1.6a14.91,14.91,0,0,1-5.86,1.2c-5.63,0-10.75-3.14-13.8-8.43a17.29,17.29,0,0,1,6.12-6.3Z" class="clr-i-solid clr-i-solid-path-3"/>
        </svg>`,

    "help": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-badge has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">    
            <title>help</title>   
            <path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,30A14,14,0,1,1,32,18,14,14,0,0,1,18,32Z" class="clr-i-outline clr-i-outline-path-1"/>   
            <path d="M18.29,8.92a7.38,7.38,0,0,0-5.72,2.57,1,1,0,0,0-.32.71.92.92,0,0,0,.95.92,1.08,1.08,0,0,0,.71-.29,5.7,5.7,0,0,1,4.33-2c2.36,0,3.83,1.52,3.83,3.41v.05c0,2.21-1.76,3.44-4.54,3.65a.8.8,0,0,0-.76.92s0,2.32,0,2.75a1,1,0,0,0,1,.9h.11a1,1,0,0,0,.9-1V19.45c3-.42,5.43-2,5.43-5.28v-.05C24.18,11.12,21.84,8.92,18.29,8.92Z" class="clr-i-outline clr-i-outline-path-2"/>    
            <circle cx="17.78" cy="26.2" r="1.25" class="clr-i-outline clr-i-outline-path-3"/>
            <path d="M24.18,14.17v-.05c0-3-2.34-5.2-5.88-5.2a7.38,7.38,0,0,0-5.72,2.57,1,1,0,0,0-.32.71.92.92,0,0,0,.95.92,1.08,1.08,0,0,0,.71-.29,5.7,5.7,0,0,1,4.33-2c2.36,0,3.83,1.52,3.83,3.41v.05c0,2.21-1.76,3.44-4.54,3.65a.8.8,0,0,0-.76.92s0,2.32,0,2.75a1,1,0,0,0,1,.9h.11a1,1,0,0,0,.9-1V19.45C21.75,19,24.18,17.45,24.18,14.17Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>    
            <circle cx="17.78" cy="26.2" r="1.25" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>   
            <path d="M33.12,12.81a7.43,7.43,0,0,1-1.91.58,14.05,14.05,0,1,1-8.6-8.6,7.44,7.44,0,0,1,.58-1.91,16.06,16.06,0,1,0,9.93,9.93Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"/>    
            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge"/>
            <path d="M33.12,12.81a7.49,7.49,0,0,1-9.93-9.93,16.06,16.06,0,1,0,9.93,9.93Zm-15.34,15a1.65,1.65,0,1,1,1.65-1.65A1.65,1.65,0,0,1,17.78,27.85Zm1.37-8.06v1.72a1.37,1.37,0,0,1-1.3,1.36h-.11a1.34,1.34,0,0,1-1.39-1.3c0-.44,0-2.76,0-2.76a1.19,1.19,0,0,1,1.12-1.31c1.57-.12,4.18-.7,4.18-3.25,0-1.83-1.41-3.07-3.43-3.07a5.31,5.31,0,0,0-4,1.92,1.36,1.36,0,0,1-2.35-.9,1.43,1.43,0,0,1,.43-1,7.77,7.77,0,0,1,6-2.69c3.7,0,6.28,2.3,6.28,5.6C24.58,17.16,22.61,19.2,19.15,19.79Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>    
            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge"/>
            <path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm-.22,25.85a1.65,1.65,0,1,1,1.65-1.65A1.65,1.65,0,0,1,17.78,27.85Zm1.37-8.06v1.72a1.37,1.37,0,0,1-1.3,1.36h-.11a1.34,1.34,0,0,1-1.39-1.3c0-.44,0-2.76,0-2.76a1.19,1.19,0,0,1,1.12-1.31c1.57-.12,4.18-.7,4.18-3.25,0-1.83-1.41-3.07-3.43-3.07a5.31,5.31,0,0,0-4,1.92,1.36,1.36,0,0,1-2.35-.9,1.43,1.43,0,0,1,.43-1,7.77,7.77,0,0,1,6-2.69c3.7,0,6.28,2.3,6.28,5.6C24.58,17.16,22.61,19.2,19.15,19.79Z" class="clr-i-solid clr-i-solid-path-1"/>
        </svg>`,

    "logout": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">    
            <title>logout</title>   
            <path d="M7,6H23v9.8h2V6a2,2,0,0,0-2-2H7A2,2,0,0,0,5,6V30a2,2,0,0,0,2,2H23a2,2,0,0,0,2-2H7Z" class="clr-i-outline clr-i-outline-path-1"/>   
            <path d="M28.16,17.28a1,1,0,0,0-1.41,1.41L30.13,22H15.63a1,1,0,0,0-1,1,1,1,0,0,0,1,1h14.5l-3.38,3.46a1,1,0,1,0,1.41,1.41L34,23.07Z" class="clr-i-outline clr-i-outline-path-2"/>
            <path d="M23,4H7A2,2,0,0,0,5,6V30a2,2,0,0,0,2,2H23a2,2,0,0,0,2-2V24H15.63a1,1,0,0,1-1-1,1,1,0,0,1,1-1H25V6A2,2,0,0,0,23,4Z" class="clr-i-solid clr-i-solid-path-1"/>   
            <path d="M28.16,17.28a1,1,0,0,0-1.41,1.41L30.13,22H25v2h5.13l-3.38,3.46a1,1,0,1,0,1.41,1.41L34,23.07Z" class="clr-i-solid clr-i-solid-path-2"/>
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

    "printer": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid can-alert can-badge"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">       
            <title>printer</title>   
            <path d="M29,9H27V5H9V9H7a4,4,0,0,0-4,4V24H6.92V22.09H5V13a2,2,0,0,1,2-2H29a2,2,0,0,1,2,2v9H29.08V24H33V13A4,4,0,0,0,29,9ZM25,9H11V7H25Z" class="clr-i-outline clr-i-outline-path-1"/>   
            <path d="M28,18H8a1,1,0,0,0,0,2H9V32H27V20h1a1,1,0,0,0,0-2ZM25,30H11V20H25Z" class="clr-i-outline clr-i-outline-path-2"/>    
            <rect x="27" y="13.04" width="2" height="2" class="clr-i-outline clr-i-outline-path-3"/>
            <path d="M28,18H8a1,1,0,0,0,0,2H9V32H27V20h1a1,1,0,0,0,0-2ZM25,30H11V20H25Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/>    
            <polygon points="31 15.4 31 22.09 29.08 22.09 29.08 24 33 24 33 15.4 31 15.4" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"/>
            <path d="M5,13a2,2,0,0,1,2-2H18.64A3.65,3.65,0,0,1,19,9.89L19.54,9H11V7h9.71l1.13-2H9V9H7a4,4,0,0,0-4,4V24H6.92V22.09H5Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"/>   
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-4--alerted clr-i-alert"/>
            <path d="M28,18H8a1,1,0,0,0,0,2H9V32H27V20h1a1,1,0,0,0,0-2ZM25,30H11V20H25Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>    
            <rect x="27" y="13.04" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>   
            <path d="M33,12.88a7.45,7.45,0,0,1-2,.55v8.66H29.08V24H33V13C33,13,33,12.93,33,12.88Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"/>   
            <path d="M5,13a2,2,0,0,1,2-2H24.42a7.5,7.5,0,0,1-1.27-2H11V7H22.57a7.52,7.52,0,0,1-.07-1,7.54,7.54,0,0,1,.07-1H9V9H7a4,4,0,0,0-4,4V24H6.92V22.09H5Z" class="clr-i-outline--badged clr-i-outline-path-4--badged"/>    
            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-5--badged clr-i-badge"/>
            <path d="M29,9H27V5H9V9H7a4,4,0,0,0-4,4V24H9v8H27V24h6V13A4,4,0,0,0,29,9ZM25,24v6H11V19H25ZM25,9H11V7H25Zm4,6H27V13h2Z" class="clr-i-solid clr-i-solid-path-1"/>
            <path d="M22.23,15.4A3.68,3.68,0,0,1,19,9.89L19.54,9H11V7h9.71l1.13-2H9V9H7a4,4,0,0,0-4,4V24H9v8H27V24h6V15.4ZM25,24v6H11V19H25Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"/>   
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert"/>
            <path d="M33,12.88a7.3,7.3,0,0,1-4,.55V15H27V13h.32a7.52,7.52,0,0,1-4.18-4H11V7H22.57a7.52,7.52,0,0,1-.07-1,7.54,7.54,0,0,1,.07-1H9V9H7a4,4,0,0,0-4,4V24H9v8H27V24h6V13C33,13,33,12.93,33,12.88ZM25,24v6H11V19H25Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>    
            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge"/>
        </svg>`,

    "world": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid can-badge"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">    
            <title>world</title>   
            <path d="M26.54,18a19.38,19.38,0,0,0-.43-4h3.6a12.3,12.3,0,0,0-.67-1.6H25.69A19.72,19.72,0,0,0,22.8,6.53a12.3,12.3,0,0,0-2.55-.76,17.83,17.83,0,0,1,3.89,6.59H18.75V5.6c-.25,0-.51,0-.77,0s-.49,0-.73,0v6.77H11.86a17.83,17.83,0,0,1,3.9-6.6,12.28,12.28,0,0,0-2.54.75,19.72,19.72,0,0,0-2.91,5.85H6.94A12.3,12.3,0,0,0,6.26,14H9.89a19.38,19.38,0,0,0-.43,4,19.67,19.67,0,0,0,.5,4.37H6.42A12.34,12.34,0,0,0,7.16,24h3.23a19.32,19.32,0,0,0,2.69,5.36,12.28,12.28,0,0,0,2.61.79A17.91,17.91,0,0,1,12,24h5.26v6.34c.24,0,.49,0,.73,0s.51,0,.77,0V24H24a17.9,17.9,0,0,1-3.7,6.15,12.28,12.28,0,0,0,2.62-.81A19.32,19.32,0,0,0,25.61,24h3.2a12.34,12.34,0,0,0,.74-1.6H26A19.67,19.67,0,0,0,26.54,18Zm-9.29,4.37H11.51a17.69,17.69,0,0,1-.09-8.4h5.83Zm7.24,0H18.75V14h5.83A18.21,18.21,0,0,1,25,18,18.12,18.12,0,0,1,24.49,22.37Z" class="clr-i-outline clr-i-outline-path-1"/>   
            <path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,30A14,14,0,1,1,32,18,14,14,0,0,1,18,32Z" class="clr-i-outline clr-i-outline-path-2"/>
            <path d="M33.12,12.81a7.44,7.44,0,0,1-1.91.58,14.05,14.05,0,1,1-8.6-8.6,7.43,7.43,0,0,1,.58-1.91,16.06,16.06,0,1,0,9.93,9.93Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>   
            <path d="M20.25,5.77a17.83,17.83,0,0,1,3.89,6.59H18.75V5.6c-.25,0-.51,0-.77,0s-.49,0-.73,0v6.77H11.86a17.83,17.83,0,0,1,3.9-6.6,12.28,12.28,0,0,0-2.54.75,19.72,19.72,0,0,0-2.91,5.85H6.94A12.3,12.3,0,0,0,6.26,14H9.89a19.38,19.38,0,0,0-.43,4,19.67,19.67,0,0,0,.5,4.37H6.42A12.34,12.34,0,0,0,7.16,24h3.23a19.32,19.32,0,0,0,2.69,5.36,12.28,12.28,0,0,0,2.61.79A17.91,17.91,0,0,1,12,24h5.26v6.34c.24,0,.49,0,.73,0s.51,0,.77,0V24H24a17.9,17.9,0,0,1-3.7,6.15,12.28,12.28,0,0,0,2.62-.81A19.32,19.32,0,0,0,25.61,24h3.2a12.34,12.34,0,0,0,.74-1.6H26a19.67,19.67,0,0,0,.5-4.37,19.38,19.38,0,0,0-.43-4h3.6c-.06-.17-.12-.33-.19-.49a7.45,7.45,0,0,1-3.47-1.11h-.36c0-.11-.08-.21-.11-.32a7.48,7.48,0,0,1-3.06-5.62A12.41,12.41,0,0,0,20.25,5.77Zm-3,16.59H11.51a17.69,17.69,0,0,1-.09-8.4h5.83ZM25,18a18.12,18.12,0,0,1-.55,4.37H18.75V14h5.83A18.21,18.21,0,0,1,25,18Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>    
            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge"/>
            <path d="M10.05,18a20.46,20.46,0,0,0,.62,4.93h6.48V13.45H10.58A20.55,20.55,0,0,0,10.05,18Z" class="clr-i-solid clr-i-solid-path-1"/>   
            <path d="M18.85,13.45v9.48h6.48A20.46,20.46,0,0,0,26,18a20.55,20.55,0,0,0-.52-4.55Z" class="clr-i-solid clr-i-solid-path-2"/>   
            <path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2ZM30.22,24.71H26.6a21.8,21.8,0,0,1-3,6,13.86,13.86,0,0,1-3,.92,20.21,20.21,0,0,0,4.18-6.94H18.86v7.15c-.29,0-.57,0-.86,0s-.55,0-.83,0V24.71H11.22a20.21,20.21,0,0,0,4.18,6.95,13.86,13.86,0,0,1-2.94-.9,21.8,21.8,0,0,1-3-6.05H5.78a13.94,13.94,0,0,1-.83-1.81h4A22.2,22.2,0,0,1,8.37,18a21.88,21.88,0,0,1,.48-4.55H4.76a13.88,13.88,0,0,1,.76-1.81H9.33A22.26,22.26,0,0,1,12.61,5a13.86,13.86,0,0,1,2.87-.84,20.13,20.13,0,0,0-4.4,7.45h6.09V4c.28,0,.55,0,.83,0s.58,0,.86,0v7.64h6.09a20.13,20.13,0,0,0-4.39-7.44A13.89,13.89,0,0,1,23.43,5a22.26,22.26,0,0,1,3.27,6.59h3.77a13.89,13.89,0,0,1,.76,1.81H27.17A21.88,21.88,0,0,1,27.66,18a22.2,22.2,0,0,1-.57,4.93h4A13.94,13.94,0,0,1,30.22,24.71Z" class="clr-i-solid clr-i-solid-path-3"/>
            <path d="M10.05,18a20.46,20.46,0,0,0,.62,4.93h6.48V13.45H10.58A20.55,20.55,0,0,0,10.05,18Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>   
            <path d="M18.85,22.94h6.48A20.46,20.46,0,0,0,26,18a20.55,20.55,0,0,0-.52-4.55H18.85Z" class="clr-i-solid--badged clr-i-solid-path-2--badged"/>   
            <path d="M33.12,12.81a7.44,7.44,0,0,1-1.9.58v0H31a6.77,6.77,0,0,1-2.07,0h-1.8A21.88,21.88,0,0,1,27.66,18a22.2,22.2,0,0,1-.57,4.93h4a13.94,13.94,0,0,1-.83,1.81H26.6a21.8,21.8,0,0,1-3,6,13.86,13.86,0,0,1-3,.92,20.21,20.21,0,0,0,4.18-6.94H18.86v7.15c-.29,0-.57,0-.86,0s-.55,0-.83,0V24.71H11.22a20.21,20.21,0,0,0,4.18,6.95,13.86,13.86,0,0,1-2.94-.9,21.8,21.8,0,0,1-3-6.05H5.78a13.94,13.94,0,0,1-.83-1.81h4A22.2,22.2,0,0,1,8.37,18a21.88,21.88,0,0,1,.48-4.55H4.76a13.88,13.88,0,0,1,.76-1.81H9.33A22.26,22.26,0,0,1,12.61,5a13.86,13.86,0,0,1,2.87-.84,20.13,20.13,0,0,0-4.4,7.45h6.09V4c.28,0,.55,0,.83,0s.58,0,.86,0v7.64h6.09l0-.13a7.47,7.47,0,0,1-2.36-4.76,20.37,20.37,0,0,0-2-2.55,14.23,14.23,0,0,1,2.06.56,7.44,7.44,0,0,1,.57-1.86,16.06,16.06,0,1,0,9.93,9.93Z" class="clr-i-solid--badged clr-i-solid-path-3--badged"/>    
            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-4--badged clr-i-badge"/>
        </svg>`,

    "lightbulb": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid can-badge"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">    
            <title>lightbulb</title>   
            <path d="M18,2.25a11,11,0,0,0-11,11,10.68,10.68,0,0,0,1,4.63,16.36,16.36,0,0,0,1.12,1.78,17,17,0,0,1,2,3.47,16.19,16.19,0,0,1,.59,4h2A18.17,18.17,0,0,0,13,22.44a18.46,18.46,0,0,0-2.22-3.92,15.79,15.79,0,0,1-1-1.54A8.64,8.64,0,0,1,9,13.23a9,9,0,0,1,18.07,0A8.64,8.64,0,0,1,26.21,17a15.79,15.79,0,0,1-1,1.54A18.46,18.46,0,0,0,23,22.44a18.17,18.17,0,0,0-.71,4.71h2a16.19,16.19,0,0,1,.59-4,17,17,0,0,1,2-3.47A16.31,16.31,0,0,0,28,17.86a10.68,10.68,0,0,0,1-4.63A11,11,0,0,0,18,2.25Z" class="clr-i-outline clr-i-outline-path-1"/>   
            <path d="M18.63,15.51a.8.8,0,0,0-1.13,0l-3,3,2.86,3.13v5.54H19V21l-2.24-2.45,1.89-1.89A.8.8,0,0,0,18.63,15.51Z" class="clr-i-outline clr-i-outline-path-2"/>   
            <path d="M23.86,29.15H12.11a.8.8,0,1,0,0,1.6H23.86a.8.8,0,0,0,0-1.6Z" class="clr-i-outline clr-i-outline-path-3"/>   
            <path d="M22,32.15H14a.8.8,0,1,0,0,1.6H22a.8.8,0,1,0,0-1.6Z" class="clr-i-outline clr-i-outline-path-4"/>   
            <path d="M17.32,10.89l-2.73,2.73a.8.8,0,0,0,1.13,1.13L18.45,12a.8.8,0,1,0-1.13-1.13Z" class="clr-i-outline clr-i-outline-path-5"/>
            <path d="M19,27.15V21l-2.24-2.45,1.89-1.89a.8.8,0,0,0-1.13-1.13l-3,3,2.86,3.13v5.54Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>   
            <path d="M23.86,29.15H12.11a.8.8,0,1,0,0,1.6H23.86a.8.8,0,0,0,0-1.6Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>   
            <path d="M22,32.15H14a.8.8,0,1,0,0,1.6H22a.8.8,0,1,0,0-1.6Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"/>   
            <path d="M15.72,14.75,18.45,12a.8.8,0,1,0-1.13-1.13l-2.73,2.73a.8.8,0,0,0,1.13,1.13Z" class="clr-i-outline--badged clr-i-outline-path-4--badged"/>   
            <path d="M27,12.88c0,.12,0,.23,0,.35A8.64,8.64,0,0,1,26.21,17a15.79,15.79,0,0,1-1,1.54A18.46,18.46,0,0,0,23,22.44a18.17,18.17,0,0,0-.71,4.71h2a16.19,16.19,0,0,1,.59-4,17,17,0,0,1,2-3.47A16.31,16.31,0,0,0,28,17.86a10.63,10.63,0,0,0,1-4.43A7.45,7.45,0,0,1,27,12.88Z" class="clr-i-outline--badged clr-i-outline-path-5--badged"/>   
            <path d="M13.71,27.15A18.17,18.17,0,0,0,13,22.44a18.46,18.46,0,0,0-2.22-3.92,15.79,15.79,0,0,1-1-1.54A8.64,8.64,0,0,1,9,13.23,9,9,0,0,1,22.53,5.47a7.45,7.45,0,0,1,.43-2,11,11,0,0,0-16,9.8,10.68,10.68,0,0,0,1,4.63,16.36,16.36,0,0,0,1.12,1.78,17,17,0,0,1,2,3.47,16.19,16.19,0,0,1,.59,4Z" class="clr-i-outline--badged clr-i-outline-path-6--badged"/>    
            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-7--badged clr-i-badge"/>
            <path d="M23.86,29.15H12.11a.8.8,0,1,0,0,1.6H23.86a.8.8,0,0,0,0-1.6Z" class="clr-i-solid clr-i-solid-path-1"/>   
            <path d="M22,32.15H14a.8.8,0,1,0,0,1.6H22a.8.8,0,1,0,0-1.6Z" class="clr-i-solid clr-i-solid-path-2"/>   
            <path d="M18,2.25a11,11,0,0,0-11,11,10.68,10.68,0,0,0,1,4.63,16.36,16.36,0,0,0,1.12,1.78,17,17,0,0,1,2,3.47,16.19,16.19,0,0,1,.59,4h5.69V21.61l-2.86-3.13,3-3a.8.8,0,0,1,1.13,1.13l-1.89,1.89L19,21v6.17H24.3a16.19,16.19,0,0,1,.59-4,17,17,0,0,1,2-3.47A16.31,16.31,0,0,0,28,17.86a10.68,10.68,0,0,0,1-4.63A11,11,0,0,0,18,2.25ZM18.45,12l-2.73,2.73a.8.8,0,1,1-1.13-1.13l2.73-2.73A.8.8,0,1,1,18.45,12Z" class="clr-i-solid clr-i-solid-path-3"/>
            <path d="M23.86,29.15H12.11a.8.8,0,1,0,0,1.6H23.86a.8.8,0,0,0,0-1.6Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>   
            <path d="M22,32.15H14a.8.8,0,1,0,0,1.6H22a.8.8,0,1,0,0-1.6Z" class="clr-i-solid--badged clr-i-solid-path-2--badged"/>   
            <path d="M22.5,6A7.47,7.47,0,0,1,23,3.44a11,11,0,0,0-16,9.8,10.68,10.68,0,0,0,1,4.63,16.36,16.36,0,0,0,1.12,1.78,17,17,0,0,1,2,3.47,16.19,16.19,0,0,1,.59,4h5.69V21.61l-2.86-3.13,3-3a.8.8,0,0,1,1.13,1.13l-1.89,1.89L19,21v6.17H24.3a16.19,16.19,0,0,1,.59-4,17,17,0,0,1,2-3.47A16.31,16.31,0,0,0,28,17.86a10.63,10.63,0,0,0,1-4.43A7.5,7.5,0,0,1,22.5,6Zm-4,6-2.73,2.73a.8.8,0,1,1-1.13-1.13l2.73-2.73A.8.8,0,1,1,18.45,12Z" class="clr-i-solid--badged clr-i-solid-path-3--badged"/>    
            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-4--badged clr-i-badge"/>
        </svg>`,

    "slider": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">    
            <title>slider</title>   
            <path d="M12,12.37A4,4,0,0,0,9,8.48V5A1,1,0,1,0,7,5V8.48a4,4,0,0,0,0,7.78V31a1,1,0,1,0,2,0V16.26A4,4,0,0,0,12,12.37Zm-4,2a2,2,0,1,1,2-2A2,2,0,0,1,8,14.4Z" class="clr-i-outline clr-i-outline-path-1"/>   
            <path d="M32,15.83a4,4,0,0,0-3-3.89V5a1,1,0,1,0-2,0v6.94a4,4,0,0,0,0,7.78V31a1,1,0,1,0,2,0V19.72A4,4,0,0,0,32,15.83Zm-4,2a2,2,0,1,1,2-2A2,2,0,0,1,28,17.87Z" class="clr-i-outline clr-i-outline-path-2"/>   
            <path d="M22,24.5a4,4,0,0,0-3-3.89V5a1,1,0,1,0-2,0V20.61a4,4,0,0,0,0,7.78V31a1,1,0,1,0,2,0V28.39A4,4,0,0,0,22,24.5Zm-4,2a2,2,0,1,1,2-2A2,2,0,0,1,18,26.53Z" class="clr-i-outline clr-i-outline-path-3"/>
            <path d="M9,9.29V5A1,1,0,1,0,7,5V9.3a3.22,3.22,0,0,0,0,6.11V31a1,1,0,1,0,2,0V15.43A3.22,3.22,0,0,0,9,9.29Z" class="clr-i-solid clr-i-solid-path-1"/>   
            <path d="M19,21.45V5a1,1,0,1,0-2,0V21.47a3.22,3.22,0,0,0,0,6.11V31a1,1,0,1,0,2,0V27.6a3.22,3.22,0,0,0,0-6.14Z" class="clr-i-solid clr-i-solid-path-2"/>   
            <path d="M29,12.75V5a1,1,0,1,0-2,0v7.76a3.22,3.22,0,0,0,0,6.11V31a1,1,0,1,0,2,0V18.89a3.22,3.22,0,0,0,0-6.14Z" class="clr-i-solid clr-i-solid-path-3"/>
        </svg>`,

    "camera": `
         <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">    
            <title>camera</title>   
            <path d="M32,8H24.7L23.64,5.28A2,2,0,0,0,21.78,4H14.22a2,2,0,0,0-1.87,1.28L11.3,8H4a2,2,0,0,0-2,2V30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V10A2,2,0,0,0,32,8Zm0,22H4V10h8.67l1.55-4h7.56l1.55,4H32Z" class="clr-i-outline clr-i-outline-path-1"/>   
            <path d="M9,19a9,9,0,1,0,9-9A9,9,0,0,0,9,19Zm16.4,0A7.4,7.4,0,1,1,18,11.6,7.41,7.41,0,0,1,25.4,19Z" class="clr-i-outline clr-i-outline-path-2"/>   
            <path d="M9.37,12.83a.8.8,0,0,0-.8-.8H6.17a.8.8,0,0,0,0,1.6h2.4A.8.8,0,0,0,9.37,12.83Z" class="clr-i-outline clr-i-outline-path-3"/>   
            <path d="M12.34,19a5.57,5.57,0,0,0,3.24,5l.85-1.37a4,4,0,1,1,4.11-6.61l.86-1.38A5.56,5.56,0,0,0,12.34,19Z" class="clr-i-outline clr-i-outline-path-4"/>
            <path d="M32,8H24.7L23.64,5.28A2,2,0,0,0,21.78,4H14.22a2,2,0,0,0-1.87,1.28L11.3,8H4a2,2,0,0,0-2,2V30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V10A2,2,0,0,0,32,8ZM6.17,13.63a.8.8,0,0,1,0-1.6h2.4a.8.8,0,0,1,0,1.6ZM18,28a9,9,0,1,1,9-9A9,9,0,0,1,18,28Z" class="clr-i-solid clr-i-solid-path-1"/>   
            <path d="M11.11,19.06a7.07,7.07,0,0,0,4.11,6.41l1.09-1.74a5,5,0,1,1,5.22-8.39l1.09-1.76a7.06,7.06,0,0,0-11.51,5.48Z" class="clr-i-solid clr-i-solid-path-2"/>
        </svg>`,

    "happy-face": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">    
            <title>happy-face</title>   
            <path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,30A14,14,0,1,1,32,18,14,14,0,0,1,18,32Z" class="clr-i-outline clr-i-outline-path-1"/>    
            <circle cx="10.89" cy="13.89" r="2" class="clr-i-outline clr-i-outline-path-2"/>    
            <circle cx="25.05" cy="13.89" r="2" class="clr-i-outline clr-i-outline-path-3"/>   
            <path d="M18.13,28.21a8.67,8.67,0,0,0,8.26-6H9.87A8.67,8.67,0,0,0,18.13,28.21Z" class="clr-i-outline clr-i-outline-path-4"/>
            <path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2ZM8.89,13.89a2,2,0,1,1,2,2A2,2,0,0,1,8.89,13.89Zm9.24,14.32a8.67,8.67,0,0,1-8.26-6H26.38A8.67,8.67,0,0,1,18.13,28.21Zm6.93-12.32a2,2,0,1,1,2-2A2,2,0,0,1,25.05,15.89Z" class="clr-i-solid clr-i-solid-path-1"/>
        </svg>`,

    "neutral-face": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">       
            <title>neutral-face</title>   
            <path d="M24.05,22.06h-12a1,1,0,0,0,0,2h12a1,1,0,0,0,0-2Z" class="clr-i-outline clr-i-outline-path-1"/>   
            <path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,30A14,14,0,1,1,32,18,14,14,0,0,1,18,32Z" class="clr-i-outline clr-i-outline-path-2"/>    
            <circle cx="25.16" cy="14.28" r="1.8" class="clr-i-outline clr-i-outline-path-3"/>    
            <circle cx="11.16" cy="14.28" r="1.8" class="clr-i-outline clr-i-outline-path-4"/>
            <path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm7.05,21.06a1,1,0,0,1-1,1h-12a1,1,0,0,1,0-2h12A1,1,0,0,1,25.05,23.06ZM27,14.28a1.8,1.8,0,1,1-1.8-1.8A1.8,1.8,0,0,1,27,14.28Zm-15.8,1.8a1.8,1.8,0,1,1,1.8-1.8A1.8,1.8,0,0,1,11.16,16.08Z" class="clr-i-solid clr-i-solid-path-1"/>
        </svg>`,

    "sad-face": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">       
            <title>sad-face</title>   
            <path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,30A14,14,0,1,1,32,18,14,14,0,0,1,18,32Z" class="clr-i-outline clr-i-outline-path-1"/>    
            <circle cx="25.16" cy="14.28" r="1.8" class="clr-i-outline clr-i-outline-path-2"/>    
            <circle cx="11.41" cy="14.28" r="1.8" class="clr-i-outline clr-i-outline-path-3"/>   
            <path d="M18.16,20a9,9,0,0,0-7.33,3.78,1,1,0,1,0,1.63,1.16,7,7,0,0,1,11.31-.13,1,1,0,0,0,1.6-1.2A9,9,0,0,0,18.16,20Z" class="clr-i-outline clr-i-outline-path-4"/>
            <path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm9,12.28a1.8,1.8,0,1,1-1.8-1.8A1.8,1.8,0,0,1,27,14.28Zm-15.55,1.8a1.8,1.8,0,1,1,1.8-1.8A1.8,1.8,0,0,1,11.41,16.08Zm14,7.53a1,1,0,0,1-1.6,1.2,7,7,0,0,0-11.31.13,1,1,0,1,1-1.63-1.16,9,9,0,0,1,14.54-.17Z" class="clr-i-solid clr-i-solid-path-1"/>
        </svg>`


};


if (window.hasOwnProperty("ClarityIcons")) {

    window[ "ClarityIcons" ].add(essentialShapes);
}

export { essentialShapes as EssentialShapes };