/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {descriptorConfig} from "../utils/descriptor-config";

/* tslint:disable:max-line-length */
const commerceShapes: any = {

    "calculator": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img">
            <title>calculator</title>

            <path class="clr-i-outline clr-i-outline-path-1" d="M28,2H8A2,2,0,0,0,6,4V32a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V4A2,2,0,0,0,28,2ZM8,32V4H28V32Z"/>
            <path class="clr-i-outline clr-i-outline-path-2" d="M12,8H25.67V6H11a1,1,0,0,0-1,1v4.67h2Z"/>
            <polygon class="clr-i-outline clr-i-outline-path-3" points="12 16 10 16 10 18 14 18 14 14 12 14 12 16"/>
            <polygon class="clr-i-outline clr-i-outline-path-4" points="24 16 22 16 22 18 26 18 26 14 24 14 24 16"/>
            <polygon class="clr-i-outline clr-i-outline-path-5" points="18 16 16 16 16 18 20 18 20 14 18 14 18 16"/>
            <polygon class="clr-i-outline clr-i-outline-path-6" points="12 22 10 22 10 24 14 24 14 20 12 20 12 22"/>
            <polygon class="clr-i-outline clr-i-outline-path-7" points="24 22 22 22 22 24 26 24 26 20 24 20 24 22"/>
            <polygon class="clr-i-outline clr-i-outline-path-8" points="18 22 16 22 16 24 20 24 20 20 18 20 18 22"/>
            <polygon class="clr-i-outline clr-i-outline-path-9" points="12 28 10 28 10 30 14 30 14 26 12 26 12 28"/>
            <polygon class="clr-i-outline clr-i-outline-path-10" points="24 28 22 28 22 30 26 30 26 26 24 26 24 28"/>
            <polygon class="clr-i-outline clr-i-outline-path-11" points="18 28 16 28 16 30 20 30 20 26 18 26 18 28"/>

            <path class="clr-i-solid clr-i-solid-path-1" d="M28,2H8A2,2,0,0,0,6,4V32a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V4A2,2,0,0,0,28,2ZM12,28H10V26h2Zm0-6H10V20h2Zm0-6H10V14h2Zm7,12H17V26h2Zm0-6H17V20h2Zm0-6H17V14h2Zm7,12H24V26h2Zm0-6H24V20h2Zm0-6H24V14h2Zm0-7H10V5H26Z"/>
        </svg>
    `,

    "piggy-bank": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img">
            <title>piggy-bank</title>

            <path class="clr-i-outline clr-i-outline-path-1" d="M19.72,10.47a11.65,11.65,0,0,0-6.31.52A.8.8,0,1,0,14,12.48,10.11,10.11,0,0,1,19.44,12a.8.8,0,1,0,.28-1.57Z"/>
            <circle class="clr-i-outline clr-i-outline-path-2" cx="25.38" cy="16.71" r="1.36"/>
            <path class="clr-i-outline clr-i-outline-path-3" d="M35.51,18.63a1,1,0,0,0-.84-.44,3.42,3.42,0,0,1-2.09-1.12,17.35,17.35,0,0,1-2.63-3.78l2.88-4.5A1.89,1.89,0,0,0,33,7a1.77,1.77,0,0,0-1.33-1,10.12,10.12,0,0,0-5.39.75,12.72,12.72,0,0,0-2.72,1.63,16.94,16.94,0,0,0-5.16-1.39C11.31,6.3,4.83,10.9,4,17H4a2.56,2.56,0,0,1-1.38-1.53,1.81,1.81,0,0,1,.14-1.4,1.19,1.19,0,0,1,.43-.43,1.08,1.08,0,0,0-1.12-1.85A3.31,3.31,0,0,0,.91,13a4,4,0,0,0-.33,3.08A4.76,4.76,0,0,0,3,18.95l.92.46a17.58,17.58,0,0,0,1.82,7l.17.38A23,23,0,0,0,9.2,31.88a1,1,0,0,0,.75.34h4.52a1,1,0,0,0,.92-1.38L15,29.94l1.18.13a20.33,20.33,0,0,0,4,0c.37.6.77,1.2,1.21,1.79a1,1,0,0,0,.8.41h4.34a1,1,0,0,0,.92-1.39c-.17-.4-.34-.83-.47-1.2-.18-.53-.32-1-.43-1.45A13.18,13.18,0,0,0,29.56,26a12.5,12.5,0,0,0,3,0,1,1,0,0,0,.78-.62l2.26-5.81A1,1,0,0,0,35.51,18.63Zm-3.78,5.44a11.37,11.37,0,0,1-2.35-.11h0a8.2,8.2,0,0,1-2.53-.87,1,1,0,0,0-.93,1.77,11.72,11.72,0,0,0,1.29.58,8,8,0,0,1-1.8,1.16l-1.06.48s.49,2.19.82,3.16H22.79c-.24-.34-1.45-2.36-1.45-2.36l-.67.09a18.53,18.53,0,0,1-4.25.12c-.66-.06-1.76-.2-2.62-.35l-1.55-.27s.63,2.43.75,2.74v0H10.42A20.57,20.57,0,0,1,7.76,26l-.18-.39A14.62,14.62,0,0,1,6,17.48c.54-5.19,6.12-9.11,12.19-8.54a15.47,15.47,0,0,1,5.08,1.48l.62.29.5-.47A10.29,10.29,0,0,1,27,8.54a8.25,8.25,0,0,1,4-.65l-3.38,5.29.25.5h0a21.16,21.16,0,0,0,3.31,4.84,6.49,6.49,0,0,0,2.14,1.39Z"/>

            <path class="clr-i-solid clr-i-solid-path-1" d="M35,18.87A5.83,5.83,0,0,1,33,17.61a21.63,21.63,0,0,1-3.29-4.84l3.39-5.29a.9.9,0,0,0-.54-1.38,9.67,9.67,0,0,0-5.13.72,12,12,0,0,0-3.13,2A17.37,17.37,0,0,0,18.6,7.15C11.8,6.52,5.27,10.9,4.54,17l-.14-.07A2.76,2.76,0,0,1,2.9,15.29a2,2,0,0,1,.15-1.55,1.32,1.32,0,0,1,.47-.48,1.08,1.08,0,1,0-1.12-1.85,3.45,3.45,0,0,0-1.23,1.25A4.16,4.16,0,0,0,.84,15.9a5,5,0,0,0,2.57,3l1,.54a18.62,18.62,0,0,0,2,7.3,23,23,0,0,0,3,4.79,1,1,0,0,0,.8.38h3.61a.52.52,0,0,0,.4-.75L14,30.38a11,11,0,0,1-.33-1.18c.91.16,2.08.31,2.87.38a20.07,20.07,0,0,0,3.12,0c.39.7.79,1.33,1.15,1.85a.93.93,0,0,0,.77.41h3.11a.65.65,0,0,0,.61-.85c-.23-.74-.53-1.75-.71-2.37a15.9,15.9,0,0,0,3.75-1.76c.16-.11.32-.26.48-.39a13.77,13.77,0,0,1-2.42-1,.8.8,0,0,1,.74-1.42,11.64,11.64,0,0,0,3.18,1.1,13.31,13.31,0,0,0,2.68.12,1,1,0,0,0,.9-.66l1.73-4.44A1,1,0,0,0,35,18.87ZM13.79,11.59a.86.86,0,0,1-.3.05.85.85,0,0,1-.3-1.64,12.41,12.41,0,0,1,6.69-.55.85.85,0,1,1-.3,1.67A10.75,10.75,0,0,0,13.79,11.59Zm12.52,6.12a1.44,1.44,0,1,1,1.44-1.44A1.44,1.44,0,0,1,26.32,17.72Z"/>
        </svg>
    `,

    "shopping-bag": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img">
            <title>shopping-bag</title>

            <path class="clr-i-outline clr-i-outline-path-1" d="M25,12V9.05a7,7,0,1,0-14,0v7a1,1,0,0,0,2,0V14h8V12H13V9.05a5,5,0,1,1,10,0V16a1,1,0,1,0,2,0V14h5V32H6V14H9V12H4V32.09A1.91,1.91,0,0,0,5.91,34H30.09A1.91,1.91,0,0,0,32,32.09V12Z"/>

            <path class="clr-i-solid clr-i-solid-path-1" d="M13,9.22a5,5,0,1,1,10,0V12h2V9.22a7,7,0,1,0-14,0V12h2Z"/>
            <path class="clr-i-solid clr-i-solid-path-2" d="M25,12v3.1a1,1,0,1,1-2,0V12H13v3.1a1,1,0,0,1-2,0V12H4V32a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V12Z"/>
        </svg>
    `,

    "shopping-cart": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="can-alert can-badge has-solid" role="img">
            <title>shopping-cart</title>

            <circle cx="13.33" cy="29.75" r="2.25" class="clr-i-outline clr-i-outline-path-1" />
            <circle cx="27" cy="29.75" r="2.25" class="clr-i-outline clr-i-outline-path-2" />
            <path d="M33.08,5.37A1,1,0,0,0,32.31,5H11.49l.65,2H31L28.33,19h-15L8.76,4.53a1,1,0,0,0-.66-.65L4,2.62a1,1,0,1,0-.59,1.92L7,5.64l4.59,14.5L9.95,21.48l-.13.13A2.66,2.66,0,0,0,9.74,25,2.75,2.75,0,0,0,12,26H28.69a1,1,0,0,0,0-2H11.84a.67.67,0,0,1-.56-1l2.41-2H29.13a1,1,0,0,0,1-.78l3.17-14A1,1,0,0,0,33.08,5.37Z" class="clr-i-outline clr-i-outline-path-3" />
            <circle cx="13.33" cy="29.75" r="2.25" class="clr-i-outline--alerted clr-i-outline-path-1--alerted" />
            <circle cx="27" cy="29.75" r="2.25" class="clr-i-outline--alerted clr-i-outline-path-2--alerted" />
            <polygon points="20.71 7 21.87 5 11.49 5 12.14 7 20.71 7" class="clr-i-outline--alerted clr-i-outline-path-3--alerted" />
            <path d="M29.15,15.4,28.33,19h-15L8.76,4.53a1,1,0,0,0-.66-.65L4,2.62a1,1,0,1,0-.59,1.92L7,5.64l4.59,14.5L9.95,21.48l-.13.13A2.66,2.66,0,0,0,9.74,25,2.75,2.75,0,0,0,12,26H28.69a1,1,0,0,0,0-2H11.84a.67.67,0,0,1-.56-1l2.41-2H29.13a1,1,0,0,0,1-.78l1.09-4.82Z" class="clr-i-outline--alerted clr-i-outline-path-4--alerted" />
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-outline--alerted clr-i-outline-path-5--alerted clr-i-alert" />
            <circle cx="13.33" cy="29.75" r="2.25" class="clr-i-outline--badged clr-i-outline-path-1--badged" />
            <circle cx="27" cy="29.75" r="2.25" class="clr-i-outline--badged clr-i-outline-path-2--badged" />
            <path d="M22.57,7a7.52,7.52,0,0,1-.07-1,7.52,7.52,0,0,1,.07-1H11.49l.65,2Z" class="clr-i-outline--badged clr-i-outline-path-3--badged" />
            <path d="M30,13.5l-.42,0L28.33,19h-15L8.76,4.53a1,1,0,0,0-.66-.65L4,2.62a1,1,0,1,0-.59,1.92L7,5.64l4.59,14.5L9.95,21.48l-.13.13A2.66,2.66,0,0,0,9.74,25,2.75,2.75,0,0,0,12,26H28.69a1,1,0,0,0,0-2H11.84a.67.67,0,0,1-.56-1l2.41-2H29.13a1,1,0,0,0,1-.78l1.57-6.91A7.51,7.51,0,0,1,30,13.5Z" class="clr-i-outline--badged clr-i-outline-path-4--badged" />
            <circle cx="30" cy="6" r="5"  class="clr-i-outline--badged clr-i-outline-path-5--badged clr-i-badge" />
            <circle cx="13.5" cy="29.5" r="2.5" class="clr-i-solid clr-i-solid-path-1" />
            <circle cx="26.5" cy="29.5" r="2.5" class="clr-i-solid clr-i-solid-path-2" />
            <path d="M33.1,6.39A1,1,0,0,0,32.31,6H9.21L8.76,4.57a1,1,0,0,0-.66-.65L4,2.66a1,1,0,1,0-.59,1.92L7,5.68l4.58,14.47L9.95,21.49l-.13.13A2.66,2.66,0,0,0,9.74,25,2.75,2.75,0,0,0,12,26H28.69a1,1,0,0,0,0-2H11.84a.67.67,0,0,1-.56-1l2.41-2H29.12a1,1,0,0,0,1-.76l3.2-13A1,1,0,0,0,33.1,6.39Z" class="clr-i-solid clr-i-solid-path-3" />
            <circle cx="13.5" cy="29.5" r="2.5" class="clr-i-solid--alerted clr-i-solid-path-1--alerted" />
            <circle cx="26.5" cy="29.5" r="2.5" class="clr-i-solid--alerted clr-i-solid-path-2--alerted" />
            <path d="M22.23,15.4A3.68,3.68,0,0,1,19,9.89L21.29,6H9.21L8.76,4.57a1,1,0,0,0-.66-.65L4,2.66a1,1,0,1,0-.59,1.92L7,5.68l4.58,14.47L9.95,21.49l-.13.13A2.66,2.66,0,0,0,9.74,25,2.75,2.75,0,0,0,12,26H28.69a1,1,0,0,0,0-2H11.84a.67.67,0,0,1-.56-1l2.41-2H29.12a1,1,0,0,0,1-.76l1.19-4.84Z" class="clr-i-solid--alerted clr-i-solid-path-3--alerted" />
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-solid--alerted clr-i-solid-path-4--alerted clr-i-alert" />
            <circle cx="13.5" cy="29.5" r="2.5" class="clr-i-solid--badged clr-i-solid-path-1--badged" />
            <circle cx="26.5" cy="29.5" r="2.5" class="clr-i-solid--badged clr-i-solid-path-2--badged" />
            <path d="M30,13.5A7.5,7.5,0,0,1,22.5,6H9.21L8.76,4.57a1,1,0,0,0-.66-.65L4,2.66a1,1,0,1,0-.59,1.92L7,5.68l4.58,14.47L9.95,21.49l-.13.13A2.66,2.66,0,0,0,9.74,25,2.75,2.75,0,0,0,12,26H28.69a1,1,0,0,0,0-2H11.84a.67.67,0,0,1-.56-1l2.41-2H29.12a1,1,0,0,0,1-.76l1.71-7A7.49,7.49,0,0,1,30,13.5Z" class="clr-i-solid--badged clr-i-solid-path-3--badged" />
            <circle cx="30" cy="6" r="5"  class="clr-i-solid--badged clr-i-solid-path-4--badged clr-i-badge" />
        </svg>`,

    "wallet": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img">
            <title>wallet</title>

            <path class="clr-i-outline clr-i-outline-path-1" d="M32,15H31V9a1,1,0,0,0-1-1H6a1,1,0,0,1-1-.82V6.82A1,1,0,0,1,6,6H29.58a1,1,0,0,0,0-2H6A3,3,0,0,0,3,7a3.08,3.08,0,0,0,0,.36V27.93A4.1,4.1,0,0,0,7.13,32H30a1,1,0,0,0,1-1V25h1a1,1,0,0,0,1-1V16A1,1,0,0,0,32,15ZM29,30H7.13A2.11,2.11,0,0,1,5,27.93V9.88A3.11,3.11,0,0,0,6,10H29v5H22a5,5,0,0,0,0,10h7Zm2-7H22a3,3,0,0,1,0-6H31Z"/>
            <circle class="clr-i-outline clr-i-outline-path-2" cx="23.01" cy="20" r="1.5"/>

            <path class="clr-i-solid clr-i-solid-path-1" d="M32.94,14H31V9a1,1,0,0,0-1-1H6A1,1,0,0,1,5,7H5V7A1,1,0,0,1,6,6H29.6a1,1,0,1,0,0-2H6A2.94,2.94,0,0,0,3,6.88v21A4.13,4.13,0,0,0,7.15,32H30a1,1,0,0,0,1-1V26h1.94a.93.93,0,0,0,1-.91v-10A1.08,1.08,0,0,0,32.94,14ZM32,24l-8.58,0a3.87,3.87,0,0,1-3.73-4,3.87,3.87,0,0,1,3.73-4L32,16Z"/>
            <circle class="clr-i-solid clr-i-solid-path-2" cx="24.04" cy="19.92" r="1.5"/>
        </svg>
    `,

    "store": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img">
            <title>store</title>

            <path class="clr-i-outline clr-i-outline-path-1" d="M28,30H16V22H14v8H8V22H6v8a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V22H28Z"/>
            <path class="clr-i-outline clr-i-outline-path-2" d="M33.79,13.27,29.71,5.11A2,2,0,0,0,27.92,4H8.08A2,2,0,0,0,6.29,5.11L2.21,13.27a2,2,0,0,0-.21.9v3.08a2,2,0,0,0,.46,1.28A4.67,4.67,0,0,0,6,20.13a4.72,4.72,0,0,0,3-1.07,4.73,4.73,0,0,0,6,0,4.73,4.73,0,0,0,6,0,4.73,4.73,0,0,0,6,0,4.72,4.72,0,0,0,6.53-.52A2,2,0,0,0,34,17.26V14.17A2,2,0,0,0,33.79,13.27ZM30,18.13A2.68,2.68,0,0,1,27.82,17L27,15.88,26.19,17a2.71,2.71,0,0,1-4.37,0L21,15.88,20.19,17a2.71,2.71,0,0,1-4.37,0L15,15.88,14.19,17a2.71,2.71,0,0,1-4.37,0L9,15.88,8.18,17A2.68,2.68,0,0,1,6,18.13a2.64,2.64,0,0,1-2-.88V14.17L8.08,6H27.92L32,14.16v.67l0,2.39A2.67,2.67,0,0,1,30,18.13Z"/>

            <path class="clr-i-solid clr-i-solid-path-1" d="M28,30H16V22H14v8H8V22H6v8a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V22H28Z"/>
            <path class="clr-i-solid clr-i-solid-path-2" d="M33.79,13.27,29.71,5.11A2,2,0,0,0,27.92,4H8.08A2,2,0,0,0,6.29,5.11L2.21,13.27a2,2,0,0,0-.21.9v3.08a2,2,0,0,0,.46,1.28A4.67,4.67,0,0,0,6,20.13a4.72,4.72,0,0,0,3-1.07,4.73,4.73,0,0,0,6,0,4.73,4.73,0,0,0,6,0,4.73,4.73,0,0,0,6,0,4.72,4.72,0,0,0,6.53-.52A2,2,0,0,0,34,17.26V14.17A2,2,0,0,0,33.79,13.27ZM15,14.4v1.52L14.18,17a2.71,2.71,0,0,1-4.37,0L9,15.88V14.4L11.59,6H16Zm12,1.48L26.19,17a2.71,2.71,0,0,1-4.37,0L21,15.88l0,0V14.4L20,6h4.45L27,14.4Z"/>
        </svg>
    `,

    "euro": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img">
            <title>euro</title>

            <path class="clr-i-outline clr-i-outline-path-1" d="M31.48,28.49a1,1,0,0,0-1.38-.32A12,12,0,0,1,12.45,22H24.16a1,1,0,0,0,0-2H11.93a11.16,11.16,0,0,1,0-4H24.16a1,1,0,0,0,0-2H12.45A12,12,0,0,1,30.06,7.8a1,1,0,0,0,1.06-1.7A14,14,0,0,0,10.34,14H3.54a1,1,0,1,0,0,2H9.91a14,14,0,0,0-.16,2,14,14,0,0,0,.16,2H3.54a1,1,0,1,0,0,2h6.8a14,14,0,0,0,20.83,7.87A1,1,0,0,0,31.48,28.49Z"/>

            <path class="clr-i-solid clr-i-solid-path-1" d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm7.42,25.16A10.88,10.88,0,0,1,9.23,21H5.84a1,1,0,0,1,0-2h3c0-.35-.05-.71-.05-1.07s0-.63,0-.93h-3a1,1,0,0,1,0-2H9.19A10.86,10.86,0,0,1,25.38,8.69a1.25,1.25,0,0,1-1.32,2.12A8.36,8.36,0,0,0,11.82,15h9.36a1,1,0,0,1,0,2H11.33a7.72,7.72,0,0,0,0,2h9.82a1,1,0,0,1,0,2H11.87a8.36,8.36,0,0,0,12.22,4,1.25,1.25,0,1,1,1.33,2.12Z"/>
        </svg>
    `,

    "dollar": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img">
            <title>dollar</title>

            <path class="clr-i-outline clr-i-outline-path-1" d="M26,21.15a6.91,6.91,0,0,0-4.38-3.32A26,26,0,0,0,19,17.19V8.12A10.05,10.05,0,0,1,23.86,10a1,1,0,0,0,1.33-1.5A11.75,11.75,0,0,0,19,6.1V3a1,1,0,0,0-2,0V6c-4.4.1-6.83,2.29-7.57,4.18A5.56,5.56,0,0,0,11.66,17,13.2,13.2,0,0,0,17,18.84V28a12.3,12.3,0,0,1-7.14-2.74A1,1,0,1,0,8.49,26.7,14.09,14.09,0,0,0,17,30v3a1,1,0,0,0,2,0V30c2.82-.19,6.07-1.09,7.3-4.76A5.33,5.33,0,0,0,26,21.15ZM12.79,15.32a3.57,3.57,0,0,1-1.49-4.39C11.41,10.63,12.53,8.12,17,8v8.8A10.7,10.7,0,0,1,12.79,15.32ZM24.4,24.56c-.72,2.14-2.32,3.17-5.4,3.4V19.23c.64.14,1.3.3,2,.51a5,5,0,0,1,3.19,2.32A3.34,3.34,0,0,1,24.4,24.56Z"/>

            <path class="clr-i-solid clr-i-solid-path-1"
                d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm7.65,21.59c-1,3-3.61,3.84-5.9,4v2a1.25,1.25,0,0,1-2.5,0V27.59A11.47,11.47,0,0,1,11,25a1.25,1.25,0,1,1,1.71-1.83,9.11,9.11,0,0,0,4.55,1.94V18.83a9.63,9.63,0,0,1-3.73-1.41,4.8,4.8,0,0,1-1.91-5.84c.59-1.51,2.42-3.23,5.64-3.51V6.25a1.25,1.25,0,0,1,2.5,0V8.11a9.67,9.67,0,0,1,4.9,2A1.25,1.25,0,0,1,23,11.95a7.14,7.14,0,0,0-3.24-1.31v6.13c.6.13,1.24.27,1.91.48a5.85,5.85,0,0,1,3.69,2.82A4.64,4.64,0,0,1,25.65,23.59Z"/>
            <path class="clr-i-solid clr-i-solid-path-2" d="M20.92,19.64c-.4-.12-.79-.22-1.17-.3v5.76c2-.2,3.07-.9,3.53-2.3a2.15,2.15,0,0,0-.15-1.58A3.49,3.49,0,0,0,20.92,19.64Z"/>
            <path class="clr-i-solid clr-i-solid-path-3" d="M13.94,12.48a2.31,2.31,0,0,0,1,2.87,6.53,6.53,0,0,0,2.32.92V10.55C15.16,10.8,14.19,11.84,13.94,12.48Z"/>
        </svg>
    `,

    "credit-card": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="has-solid" role="img">
            <title>credit-card</title>

            <path d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6Zm0,2,0,12H4L4,8ZM4,28V24H32v4Z" class="clr-i-outline clr-i-outline-path-1" />
            <rect x="7" y="3" width="22" height="30" rx="0.96" ry="0.96" transform="translate(36) rotate(90)" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2" class="clr-i-solid clr-i-solid-path-1" />
            <path d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6Zm0,18H4V20H32Z" class="clr-i-solid clr-i-solid-path-2" />
        </svg>`,

    "bank":
        `<svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid can-badge can-alert"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img">
            <title>bank</title>

            <path d="M3.5,13.56,18,5.23l14.5,8.33a1,1,0,0,0,1-1.73L18,2.92,2.5,11.83a1,1,0,1,0,1,1.73Z" class="clr-i-outline clr-i-outline-path-1"/>
            <path d="M4,26a1,1,0,0,0,1,1H31a1,1,0,0,0,0-2H28V17.63H26V25H19V17.63H17V25H10V17.63H8V25H5A1,1,0,0,0,4,26Z" class="clr-i-outline clr-i-outline-path-2"/>
            <rect x="5.02" y="14" width="26" height="2" class="clr-i-outline clr-i-outline-path-3"/>
            <path d="M33,29H3a1,1,0,0,0,0,2H33a1,1,0,0,0,0-2Z" class="clr-i-outline clr-i-outline-path-4"/>
            <path d="M22.15,11.58h3.21L18.65,7.72a.8.8,0,0,0-.8,0l-6.72,3.86h3.21l3.9-2.24Z" class="clr-i-outline clr-i-outline-path-5"/>

            <path d="M4,26a1,1,0,0,0,1,1H31a1,1,0,0,0,0-2H28V17.63H26V25H19V17.63H17V25H10V17.63H8V25H5A1,1,0,0,0,4,26Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>
            <rect x="5.02" y="14" width="26" height="2" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>
            <path d="M33,29H3a1,1,0,0,0,0,2H33a1,1,0,0,0,0-2Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"/>
            <path d="M22.15,11.58h3.21L18.65,7.72a.8.8,0,0,0-.8,0l-6.72,3.86h3.21l3.9-2.24Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"/>
            <path d="M22.5,6c0-.16,0-.32,0-.48L18,2.92,2.5,11.83a1,1,0,1,0,1,1.73L18,5.23,22.77,8A7.49,7.49,0,0,1,22.5,6Z" class="clr-i-outline--badged clr-i-outline-path-4--badged"/>
            <path d="M31.94,13.24l.56.32a1,1,0,0,0,1.44-1.19A7.45,7.45,0,0,1,31.94,13.24Z" class="clr-i-outline--badged clr-i-outline-path-5--badged"/>
            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-6--badged clr-i-badge"/>

            <path d="M4,26a1,1,0,0,0,1,1H31a1,1,0,0,0,0-2H28V17.63H26V25H19V17.63H17V25H10V17.63H8V25H5A1,1,0,0,0,4,26Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/>
            <path d="M33,29H3a1,1,0,0,0,0,2H33a1,1,0,0,0,0-2Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"/>
            <path d="M22.5,15A3.51,3.51,0,0,1,20,14H5v2H31V15Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"/>
            <path d="M19.46,9.74l.68-1.17-1.49-.85a.8.8,0,0,0-.8,0l-6.72,3.86h3.21l3.9-2.24,1.1.63C19.39,9.89,19.42,9.81,19.46,9.74Z" class="clr-i-outline--alerted clr-i-outline-path-4--alerted"/>
            <path d="M22.05,5.25,18,2.92,2.5,11.83a1,1,0,1,0,1,1.73L18,5.23,21.05,7Z" class="clr-i-outline--alerted clr-i-outline-path-5--alerted"/>
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-6--alerted clr-i-alert"/>

            <path d="M3.5,13.56,5,12.68V16H31V12.71l1.48.85a1,1,0,0,0,1-1.73L18,2.92,2.5,11.83a1,1,0,1,0,1,1.73ZM17.85,7.11a.8.8,0,0,1,.8,0L25.37,11H22.15l-3.9-2.24L14.35,11H11.14Z" class="clr-i-solid clr-i-solid-path-1"/>
            <path d="M32.85,27H32v-.85A1.15,1.15,0,0,0,30.85,25H28V17.63H24V25H20V17.63H16V25H12V17.63H8V25H5.15A1.15,1.15,0,0,0,4,26.15V27H3.15A1.15,1.15,0,0,0,2,28.15V31H34V28.15A1.15,1.15,0,0,0,32.85,27Z" class="clr-i-solid clr-i-solid-path-2"/>

            <path d="M32.85,27H32v-.85A1.15,1.15,0,0,0,30.85,25H28V17.63H24V25H20V17.63H16V25H12V17.63H8V25H5.15A1.15,1.15,0,0,0,4,26.15V27H3.15A1.15,1.15,0,0,0,2,28.15V31H34V28.15A1.15,1.15,0,0,0,32.85,27Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>
            <path d="M30,13.5A7.47,7.47,0,0,1,24.39,11H22.15l-3.9-2.24L14.35,11H11.14l6.72-3.86a.8.8,0,0,1,.8,0l5,2.87A7.45,7.45,0,0,1,22.5,6c0-.16,0-.32,0-.48L18,2.92,2.5,11.83a1,1,0,1,0,1,1.73L5,12.68V16H31V13.42A7.53,7.53,0,0,1,30,13.5Z" class="clr-i-solid--badged clr-i-solid-path-2--badged"/>
            <path d="M31.94,13.24l.56.32a1,1,0,0,0,1.44-1.19A7.45,7.45,0,0,1,31.94,13.24Z" class="clr-i-solid--badged clr-i-solid-path-3--badged"/>
            <circle cx="30" cy="6" r="5"  class="clr-i-solid--badged clr-i-solid-path-4--badged clr-i-badge"/>

            <path d="M32.85,27H32v-.85A1.15,1.15,0,0,0,30.85,25H28V17.63H24V25H20V17.63H16V25H12V17.63H8V25H5.15A1.15,1.15,0,0,0,4,26.15V27H3.15A1.15,1.15,0,0,0,2,28.15V31H34V28.15A1.15,1.15,0,0,0,32.85,27Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"/>
            <path d="M22.5,15a3.51,3.51,0,0,1-3-5.26l.14-.24-1.35-.78L14.35,11H11.14l6.72-3.86a.8.8,0,0,1,.8,0l1.75,1,1.65-2.86L18,2.92,2.5,11.83a1,1,0,1,0,1,1.73L5,12.68V16H31V15Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted"/>
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-solid--alerted clr-i-solid-path-3--alerted clr-i-alert"/>

        </svg>`,

    "dollar-bill": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img">
            <title>dollar bill</title>

            <path class="clr-i-outline clr-i-outline-path-1" d="M32,8H4a2,2,0,0,0-2,2V26a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V10A2,2,0,0,0,32,8Zm0,6a4.25,4.25,0,0,1-3.9-4H32Zm0,1.62v4.83A5.87,5.87,0,0,0,26.49,26h-17A5.87,5.87,0,0,0,4,20.44V15.6A5.87,5.87,0,0,0,9.51,10h17A5.87,5.87,0,0,0,32,15.6ZM7.9,10A4.25,4.25,0,0,1,4,14V10ZM4,22.06A4.25,4.25,0,0,1,7.9,26H4ZM28.1,26A4.25,4.25,0,0,1,32,22.06V26Z"/>
            <path class="clr-i-outline clr-i-outline-path-2" d="M18,10.85c-3.47,0-6.3,3.21-6.3,7.15s2.83,7.15,6.3,7.15,6.3-3.21,6.3-7.15S21.47,10.85,18,10.85Zm0,12.69c-2.59,0-4.7-2.49-4.7-5.55s2.11-5.55,4.7-5.55,4.7,2.49,4.7,5.55S20.59,23.55,18,23.55Z"/>

            <path class="clr-i-solid clr-i-solid-path-1" d="M32,8H4a2,2,0,0,0-2,2V26a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V10A2,2,0,0,0,32,8ZM4,26V21.15A5.18,5.18,0,0,1,8.79,26ZM4,14.85V10H8.79A5.18,5.18,0,0,1,4,14.85ZM18,25.15c-3.47,0-6.3-3.21-6.3-7.15s2.83-7.15,6.3-7.15,6.3,3.21,6.3,7.15S21.47,25.15,18,25.15ZM32,26H27.25A5.18,5.18,0,0,1,32,21.15Zm0-11.15A5.18,5.18,0,0,1,27.25,10H32Z"/>
            <ellipse class="clr-i-solid clr-i-solid-path-2" cx="18" cy="18" rx="4" ry="4.72"/>
        </svg>
    `

};

Object.defineProperty(commerceShapes, "savings", descriptorConfig(commerceShapes["piggy-bank"]));

if (typeof window !== "undefined" && window.hasOwnProperty("ClarityIcons")) {
    window.ClarityIcons.add(commerceShapes);
}

export {commerceShapes as CommerceShapes};
