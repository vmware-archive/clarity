/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { descriptorConfig } from "../utils/descriptor-config";

/* tslint:disable:max-line-length */
const technologyShapes: any = {
    "volume-up": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>volume up</title>

            <path class="clr-i-outline clr-i-outline-path-1" d="M23.41,25.25a1,1,0,0,1-.54-1.85,6.21,6.21,0,0,0-.19-10.65,1,1,0,1,1,1-1.73,8.21,8.21,0,0,1,.24,14.06A1,1,0,0,1,23.41,25.25Z"/>
            <path class="clr-i-outline clr-i-outline-path-2" d="M25.62,31.18a1,1,0,0,1-.45-1.89A12.44,12.44,0,0,0,25,6.89a1,1,0,1,1,.87-1.8,14.44,14.44,0,0,1,.24,26A1,1,0,0,1,25.62,31.18Z"/>
            <path class="clr-i-outline clr-i-outline-path-3" d="M18,32.06a2,2,0,0,1-1.42-.59L9.14,24H4a2,2,0,0,1-2-2V14a2,2,0,0,1,2-2H9.22l7.33-7.39A2,2,0,0,1,20,6v24a2,2,0,0,1-1.24,1.85A2,2,0,0,1,18,32.06ZM4,14v8H9.56a1,1,0,0,1,.71.3L18,30.06V6L10.35,13.7a1,1,0,0,1-.71.3ZM18,6Z"/>

            <path class="clr-i-solid clr-i-solid-path-1" d="M23.41,25.25a1,1,0,0,1-.54-1.85,6.21,6.21,0,0,0-.19-10.65,1,1,0,1,1,1-1.73,8.21,8.21,0,0,1,.24,14.06A1,1,0,0,1,23.41,25.25Z"/>
            <path class="clr-i-solid clr-i-solid-path-2" d="M25.62,31.18a1,1,0,0,1-.45-1.89A12.44,12.44,0,0,0,25,6.89a1,1,0,1,1,.87-1.8,14.44,14.44,0,0,1,.24,26A1,1,0,0,1,25.62,31.18Z"/>
            <path class="clr-i-solid clr-i-solid-path-3" d="M18.33,4,9.07,12h-6a1,1,0,0,0-1,1v9.92a1,1,0,0,0,1,1H8.88l9.46,8.24A1,1,0,0,0,20,31.43V4.72A1,1,0,0,0,18.33,4Z"/>
        </svg>
    `,

    "volume-down": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>volume down</title>

            <path class="clr-i-outline clr-i-outline-path-1" d="M23.41,25.11a1,1,0,0,1-.54-1.85,6.21,6.21,0,0,0-.19-10.65,1,1,0,1,1,1-1.73A8.21,8.21,0,0,1,23.94,25,1,1,0,0,1,23.41,25.11Z"/>
            <path class="clr-i-outline clr-i-outline-path-2" d="M18,32a2,2,0,0,1-1.42-.59L9.14,24H4a2,2,0,0,1-2-2V14a2,2,0,0,1,2-2H9.22l7.33-7.41A2,2,0,0,1,20,6V30a2,2,0,0,1-1.24,1.85A2,2,0,0,1,18,32ZM4,14v8H9.56a1,1,0,0,1,.71.28L18,30V6l-7.65,7.68a1,1,0,0,1-.71.3ZM18,6Z"/>

            <path class="clr-i-solid clr-i-solid-path-1" d="M23.41,25.11a1,1,0,0,1-.54-1.85,6.21,6.21,0,0,0-.19-10.65,1,1,0,1,1,1-1.73A8.21,8.21,0,0,1,23.94,25,1,1,0,0,1,23.41,25.11Z"/>
            <path class="clr-i-solid clr-i-solid-path-2" d="M18.34,3.87,9,12H3a1,1,0,0,0-1,1V23a1,1,0,0,0,1,1H8.83l9.51,8.3A1,1,0,0,0,20,31.55V4.62A1,1,0,0,0,18.34,3.87Z"/>
        </svg>
    `,

    "volume-mute": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>volume mute</title>

            <path class="clr-i-outline clr-i-outline-path-1" d="M3.61,6.41,9.19,12H4a2,2,0,0,0-2,2v8a2,2,0,0,0,2,2H9.14l7.41,7.47A2,2,0,0,0,18,32a2,2,0,0,0,.76-.15A2,2,0,0,0,20,30V22.77l5.89,5.89c-.25.15-.49.29-.75.42a1,1,0,0,0,.9,1.79,14.4,14.4,0,0,0,1.31-.75l2.28,2.28L31,31,5,5ZM18,30l-7.73-7.77A1,1,0,0,0,9.56,22H4V14H9.64a1,1,0,0,0,.71-.3l.26-.26L18,20.81Z"/>
            <path class="clr-i-outline clr-i-outline-path-2" d="M24.89,6.69A12.42,12.42,0,0,1,29,26.1l1.42,1.42A14.42,14.42,0,0,0,25.76,4.88a1,1,0,1,0-.87,1.8Z"/>
            <path class="clr-i-outline clr-i-outline-path-3" d="M22.69,12.62A6.27,6.27,0,0,1,25.8,18a6.17,6.17,0,0,1-1.24,3.71L26,23.13A8.15,8.15,0,0,0,27.8,18a8.28,8.28,0,0,0-4.1-7.11,1,1,0,1,0-1,1.73Z"/>
            <path class="clr-i-outline clr-i-outline-path-4" d="M18,6v9.15l2,2V6a2,2,0,0,0-3.42-1.41L12,9.17l1.41,1.41Z"/>

            <path class="clr-i-solid clr-i-solid-path-1" d="M24.87,6.69A12.42,12.42,0,0,1,28.75,26.3l1.42,1.42A14.43,14.43,0,0,0,25.74,4.88a1,1,0,0,0-.87,1.8Z"/>
            <path class="clr-i-solid clr-i-solid-path-2" d="M27.3,27.67h0l-3.84-3.84-.57-.57h0L4.63,5,3.21,6.41,8.8,12H3a1,1,0,0,0-1,1V23a1,1,0,0,0,1,1H8.83l9.51,8.3A1,1,0,0,0,20,31.55V23.2l5.59,5.59c-.17.1-.34.2-.51.29a1,1,0,0,0,.9,1.79c.37-.19.72-.4,1.08-.62l2.14,2.14L30.61,31l-3.25-3.25Z"/>
            <path class="clr-i-solid clr-i-solid-path-3" d="M22.69,12.62A6.27,6.27,0,0,1,25.8,18a6.17,6.17,0,0,1-1.42,3.92l1.42,1.42a8.16,8.16,0,0,0,2-5.34,8.28,8.28,0,0,0-4.1-7.11,1,1,0,1,0-1,1.73Z"/>
            <path class="clr-i-solid clr-i-solid-path-4" d="M20,4.62a1,1,0,0,0-1.66-.75l-6.42,5.6L20,17.54Z"/>
        </svg>
    `,

    "shuffle": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>shuffle</title>

            <path class="clr-i-outline clr-i-outline-path-1" d="M21.61,11h8.62l-3.3,3.3a1,1,0,1,0,1.41,1.42L34,10.08l-.71-.71h0L28.34,4.43a1,1,0,0,0-1.41,1.42L30.11,9H21a1,1,0,0,0-.86.5L17.5,14.09l1.16,2Z"/>
            <path class="clr-i-outline clr-i-outline-path-2" d="M11.07,25.07H3a1,1,0,0,0,0,2h8.65a1,1,0,0,0,.86-.5L15.18,22,14,20Z"/>
            <path class="clr-i-outline clr-i-outline-path-3" d="M28.34,20.17a1,1,0,0,0-1.41,1.42l3.5,3.5H21.61L12.51,9.53a1,1,0,0,0-.86-.5H3a1,1,0,1,0,0,2h8.07l9.1,15.55a1,1,0,0,0,.86.5H29.9l-3,3a1,1,0,0,0,1.41,1.42l4.95-4.94h0l.71-.71Z"/>
        </svg>
    `,

    "layers": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>layers</title>

            <path class="clr-i-outline clr-i-outline-path-1" d="M18,20.25a1,1,0,0,1-.43-.1l-15-7.09a1,1,0,0,1,0-1.81l15-7.09a1,1,0,0,1,.85,0l15,7.09a1,1,0,0,1,0,1.81l-15,7.09A1,1,0,0,1,18,20.25ZM5.34,12.16l12.66,6,12.66-6L18,6.18Z"/>
            <path class="clr-i-outline clr-i-outline-path-2" d="M18,26.16a1,1,0,0,1-.43-.1L2.57,19a1,1,0,1,1,.85-1.81L18,24.06l14.57-6.89A1,1,0,1,1,33.43,19l-15,7.09A1,1,0,0,1,18,26.16Z"/>
            <path class="clr-i-outline clr-i-outline-path-3" d="M18,32.07a1,1,0,0,1-.43-.1l-15-7.09a1,1,0,0,1,.85-1.81L18,30l14.57-6.89a1,1,0,1,1,.85,1.81L18.43,32A1,1,0,0,1,18,32.07Z"/>

            <path class="clr-i-solid clr-i-solid-path-1" d="M18,20.25a1,1,0,0,1-.43-.1l-15-7.09a1,1,0,0,1,0-1.81l15-7.09a1,1,0,0,1,.85,0l15,7.09a1,1,0,0,1,0,1.81l-15,7.09A1,1,0,0,1,18,20.25Z"/>
            <path class="clr-i-solid clr-i-solid-path-2" d="M18,26.16a1,1,0,0,1-.43-.1L2.57,19a1,1,0,1,1,.85-1.81L18,24.06l14.57-6.89A1,1,0,1,1,33.43,19l-15,7.09A1,1,0,0,1,18,26.16Z"/>
            <path class="clr-i-solid clr-i-solid-path-3" d="M18,32.07a1,1,0,0,1-.43-.1l-15-7.09a1,1,0,0,1,.85-1.81L18,30l14.57-6.89a1,1,0,1,1,.85,1.81L18.43,32A1,1,0,0,1,18,32.07Z"/>
        </svg>
    `,

    "block": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>block</title>

            <path class="clr-i-outline clr-i-outline-path-1" d="M31.42,9.09l-13-6a1,1,0,0,0-.84,0l-13,6A1,1,0,0,0,4,10V27a1,1,0,0,0,.58.91l13,6a1,1,0,0,0,.84,0l13-6A1,1,0,0,0,32,27V10A1,1,0,0,0,31.42,9.09ZM18,5.1,28.61,10,18,14.9,7.39,10ZM6,11.56l11,5.08v14.8L6,26.36ZM19,31.44V16.64l11-5.08v14.8Z"/>

            <path class="clr-i-solid clr-i-solid-path-1" d="M31.42,9.09l-13-6a1,1,0,0,0-.84,0l-13,6A1,1,0,0,0,4,10V27a1,1,0,0,0,.58.91l13,6a1,1,0,0,0,.84,0l13-6A1,1,0,0,0,32,27V10A1,1,0,0,0,31.42,9.09ZM18,14.9,7.39,10,18,5.1,28.61,10ZM30,26.36,19,31.44V16.64l11-5.08Z"/>
        </svg>
    `,

    "blocks-group": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>blocks group</title>

            <path class="clr-i-outline clr-i-outline-path-1"             d="M33.53,18.76,26.6,15.57V6.43A1,1,0,0,0,26,5.53l-7.5-3.45a1,1,0,0,0-.84,0l-7.5,3.45a1,1,0,0,0-.58.91v9.14L2.68,18.76a1,1,0,0,0-.58.91v9.78h0a1,1,0,0,0,.58.91l7.5,3.45a1,1,0,0,0,.84,0l7.08-3.26,7.08,3.26a1,1,0,0,0,.84,0l7.5-3.45a1,1,0,0,0,.58-.91h0V19.67A1,1,0,0,0,33.53,18.76Zm-2.81.91L25.61,22,20.5,19.67l5.11-2.35ZM18.1,4.08l5.11,2.35L18.1,8.78,13,6.43ZM10.6,17.31l5.11,2.35L10.6,22,5.49,19.67Zm6.5,11.49-6.5,3-6.5-3V21.23L10.18,24A1,1,0,0,0,11,24l6.08-2.8ZM11.6,15.57h0V8l6.08,2.8a1,1,0,0,0,.84,0L24.6,8v7.58h0l-6.5,3ZM32.11,28.81l-6.5,3-6.51-3V21.22L25.19,24A1,1,0,0,0,26,24l6.08-2.8Z"/>

            <path class="clr-i-solid clr-i-solid-path-1" d="M33.53,18.76,26.6,15.57V6.43A1,1,0,0,0,26,5.53l-7.5-3.45a1,1,0,0,0-.84,0l-7.5,3.45a1,1,0,0,0-.58.91v9.14L2.68,18.76a1,1,0,0,0-.58.91v9.78h0a1,1,0,0,0,.58.91l7.5,3.45a1,1,0,0,0,.84,0l7.08-3.26,7.08,3.26a1,1,0,0,0,.84,0l7.5-3.45a1,1,0,0,0,.58-.91h0V19.67A1,1,0,0,0,33.53,18.76ZM25.61,22,20.5,19.67l5.11-2.35,5.11,2.35Zm-1-6.44-6.44,3V10.87a1,1,0,0,0,.35-.08L24.6,8v7.58ZM18.1,4.08l5.11,2.35L18.1,8.78,13,6.43ZM10.6,17.31l5.11,2.35L10.6,22,5.49,19.67Zm6.5,11.49-6.5,3h0V24.11h0A1,1,0,0,0,11,24l6.08-2.8Zm15,0-6.46,3V24.11A1,1,0,0,0,26,24l6.08-2.8Z"/>
        </svg>
    `,

    "bundle": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>bundle</title>

            <path class="clr-i-outline clr-i-outline-path-1" d="M32.43,8.35l-13-6.21a1,1,0,0,0-.87,0l-15,7.24a1,1,0,0,0-.57.9V26.83a1,1,0,0,0,.6.92l13,6.19a1,1,0,0,0,.87,0l15-7.24a1,1,0,0,0,.57-.9V9.25A1,1,0,0,0,32.43,8.35ZM19,4.15,29.93,9.37l-5.05,2.44L14.21,6.46ZM17,15.64,6,10.41l5.9-2.85L22.6,12.91ZM5,12.13,16,17.4V31.46L5,26.2ZM18,31.45V17.36l13-6.29v14.1Z"/>

            <path class="clr-i-solid clr-i-solid-path-1" d="M32.43,8.35l-13-6.21a1,1,0,0,0-.87,0l-15,7.24a1,1,0,0,0-.57.9V26.83a1,1,0,0,0,.6.92l13,6.19a1,1,0,0,0,.87,0l15-7.24a1,1,0,0,0,.57-.9V9.25A1,1,0,0,0,32.43,8.35ZM19,4.15,29.93,9.37l-5.05,2.44L14.21,6.46ZM17,15.64,6,10.41l5.9-2.85L22.6,12.91Zm1,15.8V17.36l13-6.29v14.1Z"/>
        </svg>
    `,

    "wifi": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>wifi</title>

            <path class="clr-i-outline clr-i-outline-path-1" d="M33.55,8.2a28.1,28.1,0,0,0-31.11.08A1,1,0,1,0,3.56,9.94a26.11,26.11,0,0,1,28.89-.07,1,1,0,0,0,1.1-1.67Z"/>
            <path class="clr-i-outline clr-i-outline-path-2" d="M18.05,10.72A20.74,20.74,0,0,0,6.23,14.4,1,1,0,0,0,7.36,16,18.85,18.85,0,0,1,28.64,16a1,1,0,0,0,1.12-1.65A20.75,20.75,0,0,0,18.05,10.72Z"/>
            <path class="clr-i-outline clr-i-outline-path-3" d="M18.05,17.9a13.51,13.51,0,0,0-8,2.64,1,1,0,0,0,1.18,1.61,11.56,11.56,0,0,1,13.62-.08A1,1,0,1,0,26,20.46,13.52,13.52,0,0,0,18.05,17.9Z"/>
            <path class="clr-i-outline clr-i-outline-path-4" d="M18,24.42a4,4,0,1,0,4,4A4,4,0,0,0,18,24.42Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,18,30.42Z"/>

            <circle class="clr-i-solid clr-i-solid-path-1" cx="18" cy="29.54" r="3"/>
            <path class="clr-i-solid clr-i-solid-path-2" d="M32.76,9.38a27.87,27.87,0,0,0-29.57,0,1.51,1.51,0,0,0-.48,2.11l.11.17a1.49,1.49,0,0,0,2,.46,24.68,24.68,0,0,1,26.26,0,1.49,1.49,0,0,0,2-.46l.11-.17A1.51,1.51,0,0,0,32.76,9.38Z"/>
            <path class="clr-i-solid clr-i-solid-path-3" d="M28.82,15.44a20.59,20.59,0,0,0-21.7,0,1.51,1.51,0,0,0-.46,2.1l.11.17a1.49,1.49,0,0,0,2,.46,17.4,17.4,0,0,1,18.36,0,1.49,1.49,0,0,0,2-.46l.11-.17A1.51,1.51,0,0,0,28.82,15.44Z"/>
            <path class="clr-i-solid clr-i-solid-path-4" d="M24.88,21.49a13.41,13.41,0,0,0-13.82,0,1.5,1.5,0,0,0-.46,2.09l.1.16a1.52,1.52,0,0,0,2.06.44,10.27,10.27,0,0,1,10.42,0,1.52,1.52,0,0,0,2.06-.45l.1-.16A1.49,1.49,0,0,0,24.88,21.49Z"/>
        </svg>
    `,
    "rack-server": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid can-badge can-alert"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>rack server</title>

            <rect class="clr-i-outline--alerted clr-i-outline-path-1--alerted" x="10" y="17" width="14" height="2"/>
            <rect class="clr-i-outline--alerted clr-i-outline-path-2--alerted" x="6" y="25" width="2" height="2"/>
            <rect class="clr-i-outline--alerted clr-i-outline-path-3--alerted" x="10" y="25" width="14" height="2"/>
            <path class="clr-i-outline--alerted clr-i-outline-path-4--alerted" d="M18.64,11A3.65,3.65,0,0,1,19,9.89L19.56,9H10v2Z"/>
            <path class="clr-i-outline--alerted clr-i-outline-path-5--alerted" d="M33.68,15.4H32V21H4V15H20.58A3.67,3.67,0,0,1,19,13.56a3.63,3.63,0,0,1-.26-.56H4V7H20.71l1.15-2H4A2,2,0,0,0,2,7V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V15.38ZM4,29V23H32v6Z"/>
            <path class="clr-i-outline--alerted clr-i-outline-path-6--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>

            <rect class="clr-i-outline--badged clr-i-outline-path-1--badged" x="6" y="9" width="2" height="2"/>
            <rect class="clr-i-outline--badged clr-i-outline-path-2--badged" x="6" y="17" width="2" height="2"/>
            <rect class="clr-i-outline--badged clr-i-outline-path-3--badged" x="10" y="17" width="14" height="2"/>
            <rect class="clr-i-outline--badged clr-i-outline-path-4--badged" x="6" y="25" width="2" height="2"/>
            <rect class="clr-i-outline--badged clr-i-outline-path-5--badged" x="10" y="25" width="14" height="2"/>
            <path class="clr-i-outline--badged clr-i-outline-path-6--badged" d="M10,11H24v-.51A7.48,7.48,0,0,1,23.13,9H10Z"/>
            <path class="clr-i-outline--badged clr-i-outline-path-7--badged" d="M30,13.5a7.47,7.47,0,0,1-2.68-.5H4V7H22.57a7.52,7.52,0,0,1-.07-1,7.52,7.52,0,0,1,.07-1H4A2,2,0,0,0,2,7V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V12.34A7.46,7.46,0,0,1,30,13.5ZM4,15H32v6H4ZM4,29V23H32v6Z"/>
            <circle class="clr-i-outline--badged clr-i-outline-path-8--badged clr-i-badge" cx="30" cy="6" r="5"/>

            <rect class="clr-i-outline clr-i-outline-path-1" x="6" y="9" width="2" height="2"/>
            <rect class="clr-i-outline clr-i-outline-path-2" x="10" y="9" width="14" height="2"/>
            <rect class="clr-i-outline clr-i-outline-path-3" x="6" y="17" width="2" height="2"/>
            <rect class="clr-i-outline clr-i-outline-path-4" x="10" y="17" width="14" height="2"/>
            <path class="clr-i-outline clr-i-outline-path-5" d="M32,5H4A2,2,0,0,0,2,7V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V7A2,2,0,0,0,32,5ZM4,7H32v6H4Zm0,8H32v6H4ZM4,29V23H32v6Z"/>
            <rect class="clr-i-outline clr-i-outline-path-6" x="6" y="25" width="2" height="2"/>
            <rect class="clr-i-outline clr-i-outline-path-7" x="10" y="25" width="14" height="2"/>

            <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M2,30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V24H2Zm8-3H24v2H10ZM6,27H8v2H6Z"/>
            <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted" d="M19,9.89,19.56,9H10V7H20.71l1.73-3H4A2,2,0,0,0,2,6v6H18.57A3.67,3.67,0,0,1,19,9.89ZM8,9H6V7H8Z"/>
            <path class="clr-i-solid--alerted clr-i-solid-path-3--alerted" d="M33.68,15.4H22.23A3.69,3.69,0,0,1,19.35,14H2v8H34V15.38ZM8,19H6V17H8Zm16,0H10V17H24Z"/>
            <path class="clr-i-solid--alerted clr-i-solid-path-4--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>

            <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M2,14v8H34V14Zm6,5H6V17H8Zm16,0H10V17H24Z"/>
            <path class="clr-i-solid--badged clr-i-solid-path-2--badged" d="M2,30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V24H2Zm8-3H24v2H10ZM6,27H8v2H6Z"/>
            <path class="clr-i-solid--badged clr-i-solid-path-3--badged" d="M23.13,9H10V7H22.57a7.52,7.52,0,0,1-.07-1,7.49,7.49,0,0,1,.28-2H4A2,2,0,0,0,2,6v6H25.51A7.52,7.52,0,0,1,23.13,9ZM8,9H6V7H8Z"/>
            <circle class="clr-i-solid--badged clr-i-solid-path-4--badged clr-i-badge" cx="30" cy="6" r="5"/>

            <path class="clr-i-solid clr-i-solid-path-1" d="M2,22H34V14H2Zm8-5H24v2H10ZM6,17H8v2H6Z"/>
            <path class="clr-i-solid clr-i-solid-path-2" d="M32,4H4A2,2,0,0,0,2,6v6H34V6A2,2,0,0,0,32,4ZM8,9H6V7H8ZM24,9H10V7H24Z"/>
            <path class="clr-i-solid clr-i-solid-path-3" d="M2,30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V24H2Zm8-3H24v2H10ZM6,27H8v2H6Z"/>
        </svg>
    `,

    "hard-disk": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid can-badge can-alert"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>hard disk</title>

            <rect class="clr-i-outline--alerted clr-i-outline-path-1--alerted" x="6" y="20" width="24" height="2"/>
            <rect class="clr-i-outline--alerted clr-i-outline-path-2--alerted" x="26" y="24" width="4" height="2"/>
            <path class="clr-i-outline--alerted clr-i-outline-path-3--alerted" d="M34,21.08l-1.4-5.68H30.51l1.49,6V29H4V21.44L7.06,9h12.5l1.15-2H7.06A2,2,0,0,0,5.13,8.47L2,21.08a1,1,0,0,0,0,.24V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V21.31A1,1,0,0,0,34,21.08Z"/>
            <path class="clr-i-outline--alerted clr-i-outline-path-4--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>

            <rect class="clr-i-outline--badged clr-i-outline-path-1--badged" x="6" y="20" width="24" height="2"/>
            <rect class="clr-i-outline--badged clr-i-outline-path-2--badged" x="26" y="24" width="4" height="2"/>
            <path class="clr-i-outline--badged clr-i-outline-path-3--badged" d="M34,21.08,32,13.21a7.49,7.49,0,0,1-2,.29l2,7.94V29H4V21.44L7.06,9H23.13a7.45,7.45,0,0,1-.55-2H7.06A2,2,0,0,0,5.13,8.47L2,21.08a1,1,0,0,0,0,.24V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V21.31A1,1,0,0,0,34,21.08Z"/>
            <circle class="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge" cx="30" cy="6" r="5"/>

            <path class="clr-i-outline clr-i-outline-path-1" d="M34,21.08,30.86,8.43A2,2,0,0,0,28.94,7H7.06A2,2,0,0,0,5.13,8.47L2,21.08a1,1,0,0,0,0,.24V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V21.31A1,1,0,0,0,34,21.08ZM4,29V21.44L7.06,9H28.93L32,21.44V29Z"/>
            <rect class="clr-i-outline clr-i-outline-path-2" x="6" y="20" width="24" height="2"/>
            <rect class="clr-i-outline clr-i-outline-path-3" x="26" y="24" width="4" height="2"/>

            <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M2,22v7a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V22Zm28,5H26V25h4Z"/>
            <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted" d="M32.58,15.4H22.23A3.68,3.68,0,0,1,19,9.89L20.71,7H7.06A2,2,0,0,0,5.13,8.47L2.29,20H33.71Z"/>
            <path class="clr-i-solid--alerted clr-i-solid-path-3--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>

            <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M2,22v7a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V22Zm28,5H26V25h4Z"/>
            <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M32,13.21A7.47,7.47,0,0,1,22.57,7H7.06A2,2,0,0,0,5.13,8.47L2.29,20H33.71Z"/>
            <circle class="clr-i-solid--badged clr-i-solid-path-1--badged clr-i-badge" cx="30" cy="6" r="5"/>

            <path class="clr-i-solid clr-i-solid-path-1" d="M30.86,8.43A2,2,0,0,0,28.94,7H7.06A2,2,0,0,0,5.13,8.47L2.29,20H33.71Z"/>
            <path class="clr-i-solid clr-i-solid-path-2" d="M2,22v7a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V22Zm28,5H26V25h4Z"/>
        </svg>
    `,

    "backup-restore": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-alert can-badge has-solid"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>backup restore</title>

            <rect class="clr-i-outline--alerted clr-i-outline-path-1--alerted" x="6" y="22" width="24" height="2"/>
            <rect class="clr-i-outline--alerted clr-i-outline-path-2--alerted" x="26" y="26" width="4" height="2"/>
            <path class="clr-i-outline--alerted clr-i-outline-path-3--alerted" d="M13,9.92,17,6V19a1,1,0,1,0,2,0V6l1.47,1.46,1-1.79L18,2.16,11.61,8.5A1,1,0,0,0,13,9.92Z"/>
            <path class="clr-i-outline--alerted clr-i-outline-path-4--alerted" d="M31.58,15.4H29.46c1,2.85,2.31,6.37,2.54,7.08V30H4V22.48C4.28,21.65,7.05,14,7.05,14H15V12H7.07a1.92,1.92,0,0,0-1.9,1.32C2,22,2,22.1,2,22.33V30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V22.33C34,22.12,34,22,31.58,15.4Z"/>
            <path class="clr-i-outline--alerted clr-i-outline-path-5--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>

            <rect class="clr-i-outline--badged clr-i-outline-path-1--badged" x="6" y="22" width="24" height="2"/>
            <rect class="clr-i-outline--badged clr-i-outline-path-2--badged" x="26" y="26" width="4" height="2"/>
            <path class="clr-i-outline--badged clr-i-outline-path-3--badged" d="M13,9.92,17,6V19a1,1,0,1,0,2,0V6l4,3.95a1,1,0,0,0,.71.29l.11,0a7.46,7.46,0,0,1-1.25-3.52L18,2.16,11.61,8.5A1,1,0,0,0,13,9.92Z"/>
            <path class="clr-i-outline--badged clr-i-outline-path-4--badged" d="M30.87,13.45a7.55,7.55,0,0,1-.87.05A7.46,7.46,0,0,1,25.51,12H21v2h7.95C30,16.94,31.72,21.65,32,22.48V30H4V22.48C4.28,21.65,7.05,14,7.05,14H15V12H7.07a1.92,1.92,0,0,0-1.9,1.32C2,22,2,22.1,2,22.33V30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V22.33C34,22.1,34,22,30.87,13.45Z"/>
            <circle class="clr-i-outline--badged clr-i-outline-path-5--badged clr-i-badge" cx="30" cy="6" r="5"/>

            <rect class="clr-i-outline clr-i-outline-path-1" x="6" y="22" width="24" height="2"/>
            <rect class="clr-i-outline clr-i-outline-path-2" x="26" y="26" width="4" height="2"/>
            <path class="clr-i-outline clr-i-outline-path-3" d="M13,9.92,17,6V19a1,1,0,1,0,2,0V6l4,3.95A1,1,0,1,0,24.38,8.5L18,2.16,11.61,8.5A1,1,0,0,0,13,9.92Z"/>
            <path class="clr-i-outline clr-i-outline-path-4" d="M30.84,13.37A1.94,1.94,0,0,0,28.93,12H21v2h7.95C30,16.94,31.72,21.65,32,22.48V30H4V22.48C4.28,21.65,7.05,14,7.05,14H15V12H7.07a1.92,1.92,0,0,0-1.9,1.32C2,22,2,22.1,2,22.33V30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V22.33C34,22.1,34,22,30.84,13.37Z"/>

            <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M2,24v6a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V24Zm28,5H26V27h4Z"/>
            <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted" d="M13,9.92,17,6V18a1,1,0,1,0,2,0V6l1.47,1.46,1-1.79L18,2.16,11.61,8.5A1,1,0,0,0,13,9.92Z"/>
            <path class="clr-i-solid--alerted clr-i-solid-path-3--alerted" d="M31.58,15.4H22.23A3.62,3.62,0,0,1,21,15.16V18a3,3,0,1,1-6,0V12H7.07a1.92,1.92,0,0,0-1.9,1.32C2.86,19.68,2.24,21.43,2.07,22H33.93C33.79,21.49,33.28,20.07,31.58,15.4Z"/>
            <path class="clr-i-solid--alerted clr-i-solid-path-4--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>

            <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M2,24v6a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V24Zm28,5H26V27h4Z"/>
            <path class="clr-i-solid--badged clr-i-solid-path-2--badged" d="M13,9.92,17,6V18a1,1,0,1,0,2,0V6l4,3.95a1,1,0,0,0,.71.29l.11,0a7.46,7.46,0,0,1-1.25-3.52L18,2.16,11.61,8.5A1,1,0,0,0,13,9.92Z"/>
            <path class="clr-i-solid--badged clr-i-solid-path-3--badged" d="M30.87,13.45a7.55,7.55,0,0,1-.87.05A7.46,7.46,0,0,1,25.51,12H21v6a3,3,0,1,1-6,0V12H7.07a1.92,1.92,0,0,0-1.9,1.32C2.86,19.68,2.24,21.43,2.07,22H33.93C33.77,21.43,33.15,19.7,30.87,13.45Z"/>
            <circle class="clr-i-solid--badged clr-i-solid-path-4--badged clr-i-badge" cx="30" cy="6" r="5"/>

            <path class="clr-i-solid clr-i-solid-path-1" d="M2,24v6a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V24Zm28,5H26V27h4Z"/>
            <path class="clr-i-solid clr-i-solid-path-2" d="M30.84,13.37A1.94,1.94,0,0,0,28.93,12H21v6a3,3,0,1,1-6,0V12H7.07a1.92,1.92,0,0,0-1.9,1.32C2.86,19.68,2.24,21.43,2.07,22H33.93C33.77,21.43,33.14,19.69,30.84,13.37Z"/>
            <path class="clr-i-solid clr-i-solid-path-3" d="M13,9.92,17,6V18a1,1,0,1,0,2,0V6l4,3.95A1,1,0,1,0,24.38,8.5L18,2.16,11.61,8.5A1,1,0,0,0,13,9.92Z"/>
        </svg>
    `,

    "backup": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-alert can-badge has-solid"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>backup</title>

            <rect class="clr-i-outline--alerted clr-i-outline-path-1--alerted" x="6" y="22" width="24" height="2"/>
            <rect class="clr-i-outline--alerted clr-i-outline-path-2--alerted" x="26" y="26" width="4" height="2"/>
            <path class="clr-i-outline--alerted clr-i-outline-path-3--alerted" d="M18,19.84l4.47-4.44h-.23a3.67,3.67,0,0,1-2-.61L19,16V4a1,1,0,1,0-2,0V16l-4-3.95a1,1,0,0,0-1.41,1.42Z"/>
            <path class="clr-i-outline--alerted clr-i-outline-path-4--alerted" d="M31.58,15.4H29.46c1,2.85,2.31,6.37,2.54,7.08V30H4V22.48C4.28,21.65,7.05,14,7.05,14H9.58a3,3,0,0,1-.14-2H7.07a1.92,1.92,0,0,0-1.9,1.32C2,22,2,22.1,2,22.33V30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V22.33C34,22.12,34,22,31.58,15.4Z"/>
            <path class="clr-i-outline--alerted clr-i-outline-path-5--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>

            <rect class="clr-i-outline--badged clr-i-outline-path-1--badged" x="6" y="22" width="24" height="2"/>
            <rect class="clr-i-outline--badged clr-i-outline-path-2--badged" x="26" y="26" width="4" height="2"/>
            <path class="clr-i-outline--badged clr-i-outline-path-3--badged" d="M18,19.84l6.38-6.35A1,1,0,1,0,23,12.08L19,16V4a1,1,0,1,0-2,0V16l-4-3.95a1,1,0,0,0-1.41,1.42Z"/>
            <path class="clr-i-outline--badged clr-i-outline-path-4--badged" d="M30.87,13.45a7.55,7.55,0,0,1-.87.05,7.46,7.46,0,0,1-3.35-.8,3,3,0,0,1-.24,1.3h2.54C30,16.94,31.72,21.65,32,22.48V30H4V22.48C4.28,21.65,7.05,14,7.05,14H9.58a3,3,0,0,1-.14-2H7.07a1.92,1.92,0,0,0-1.9,1.32C2,22,2,22.1,2,22.33V30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V22.33C34,22.1,34,22,30.87,13.45Z"/>
            <circle class="clr-i-outline--badged clr-i-outline-path-5--badged clr-i-badge" cx="30" cy="6" r="5"/>

            <rect class="clr-i-outline clr-i-outline-path-1" x="6" y="22" width="24" height="2"/><rect x="26" y="26" width="4" height="2"/>
            <path class="clr-i-outline clr-i-outline-path-2"
                d="M30.84,13.37A1.94,1.94,0,0,0,28.93,12H26.55a3,3,0,0,1-.14,2h2.54C30,16.94,31.72,21.65,32,22.48V30H4V22.48C4.28,21.65,7.05,14,7.05,14H9.58a3,3,0,0,1-.14-2H7.07a1.92,1.92,0,0,0-1.9,1.32C2,22,2,22.1,2,22.33V30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V22.33C34,22.1,34,22,30.84,13.37Z"/>
            <path class="clr-i-outline clr-i-outline-path-3" d="M18,19.84l6.38-6.35A1,1,0,1,0,23,12.08L19,16V4a1,1,0,1,0-2,0V16l-4-3.95a1,1,0,0,0-1.41,1.42Z"/>

            <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M16.58,21.26,10.2,14.91A3,3,0,0,1,9.44,12H7.07a1.92,1.92,0,0,0-1.9,1.32C2.86,19.68,2.24,21.43,2.07,22H17.33Z"/>
            <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted" d="M2,24v6a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V24Zm28,4H26V26h4Z"/>
            <path class="clr-i-solid--alerted clr-i-solid-path-3--alerted" d="M18.66,22H33.93c-.15-.51-.65-1.93-2.35-6.6H25.3l-5.89,5.86Z"/>
            <path class="clr-i-solid--alerted clr-i-solid-path-4--alerted" d="M18,19.84l4.47-4.44h-.23a3.64,3.64,0,0,1-2-.61L19,16V4a1,1,0,1,0-2,0V16l-4-3.95a1,1,0,0,0-1.41,1.42Z"/>
            <path class="clr-i-solid--alerted clr-i-solid-path-5--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>

            <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M18,19.84l6.38-6.35A1,1,0,1,0,23,12.08L19,16V4a1,1,0,1,0-2,0V16l-4-3.95a1,1,0,0,0-1.41,1.42Z"/>
            <path class="clr-i-solid--badged clr-i-solid-path-2--badged" d="M16.58,21.26,10.2,14.91A3,3,0,0,1,9.44,12H7.07a1.92,1.92,0,0,0-1.9,1.32C2.86,19.68,2.24,21.43,2.07,22H17.33Z"/>
            <path class="clr-i-solid--badged clr-i-solid-path-3--badged" d="M2,24v6a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V24Zm28,4H26V26h4Z"/>
            <path class="clr-i-solid--badged clr-i-solid-path-4--badged" d="M18.66,22H33.93c-.17-.57-.79-2.3-3.06-8.55a7.55,7.55,0,0,1-.87.05,7.46,7.46,0,0,1-3.35-.8,3,3,0,0,1-.86,2.21l-6.38,6.35Z"/>
            <circle class="clr-i-solid--badged clr-i-solid-path-5--badged clr-i-badge" cx="30" cy="6" r="5"/>

            <path class="clr-i-solid clr-i-solid-path-1" d="M18,19.84l6.38-6.35A1,1,0,1,0,23,12.08L19,16V4a1,1,0,1,0-2,0V16l-4-3.95a1,1,0,0,0-1.41,1.42Z"/>
            <path class="clr-i-solid clr-i-solid-path-2" d="M19.41,21.26l-.74.74H33.93c-.17-.57-.79-2.31-3.09-8.63A1.94,1.94,0,0,0,28.93,12H26.55a3,3,0,0,1-.76,2.92Z"/>
            <path class="clr-i-solid clr-i-solid-path-3" d="M16.58,21.26,10.2,14.91A3,3,0,0,1,9.44,12H7.07a1.92,1.92,0,0,0-1.9,1.32C2.86,19.68,2.24,21.43,2.07,22H17.33Z"/>
            <path class="clr-i-solid clr-i-solid-path-4" d="M2,24v6a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V24Zm28,4H26V26h4Z"/>
        </svg>
    `,

    "devices": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>devices</title>

            <path class="clr-i-outline clr-i-outline-path-1" d="M32,13H24a2,2,0,0,0-2,2V30a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V15A2,2,0,0,0,32,13Zm0,2V26H24V15ZM24,30V27.6h8V30Z"/>
            <path class="clr-i-outline clr-i-outline-path-2" d="M20,22H4V6H28v5h2V6a2,2,0,0,0-2-2H4A2,2,0,0,0,2,6V22a2,2,0,0,0,2,2H20Z"/>
            <path class="clr-i-outline clr-i-outline-path-3" d="M20,26H9a1,1,0,0,0,0,2H20Z"/>

            <path class="clr-i-solid clr-i-solid-path-1" d="M32,13H24a2,2,0,0,0-2,2V30a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V15A2,2,0,0,0,32,13Zm0,2V28H24V15Z"/>
            <path class="clr-i-solid clr-i-solid-path-2" d="M28,4H4A2,2,0,0,0,2,6V22a2,2,0,0,0,2,2h8v2H9.32A1.2,1.2,0,0,0,8,27a1.2,1.2,0,0,0,1.32,1H19.92v-.37H20V22H4V6H28v5h2V6A2,2,0,0,0,28,4Z"/>
        </svg>
    `,

    "headphones": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>headphones</title>

            <path class="clr-i-outline clr-i-outline-path-1" d="M18,3A14.27,14.27,0,0,0,4,17.5V31H9.2A2.74,2.74,0,0,0,12,28.33V21.67A2.74,2.74,0,0,0,9.2,19H6V17.5A12.27,12.27,0,0,1,18,5,12.27,12.27,0,0,1,30,17.5V19H26.8A2.74,2.74,0,0,0,24,21.67v6.67A2.74,2.74,0,0,0,26.8,31H32V17.5A14.27,14.27,0,0,0,18,3ZM9.2,21a.75.75,0,0,1,.8.67v6.67a.75.75,0,0,1-.8.67H6V21ZM26,28.33V21.67a.75.75,0,0,1,.8-.67H30v8H26.8A.75.75,0,0,1,26,28.33Z"/>

            <path class="clr-i-solid clr-i-solid-path-1" d="M18,3A14.27,14.27,0,0,0,4,17.5V31H8.2A1.74,1.74,0,0,0,10,29.33V22.67A1.74,1.74,0,0,0,8.2,21H6V17.5A12.27,12.27,0,0,1,18,5,12.27,12.27,0,0,1,30,17.5V21H27.8A1.74,1.74,0,0,0,26,22.67v6.67A1.74,1.74,0,0,0,27.8,31H32V17.5A14.27,14.27,0,0,0,18,3Z"/>
        </svg>
    `,

    "keyboard": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>keyboard</title>

            <path class="clr-i-outline clr-i-outline-path-1" d="M32,8H4a2,2,0,0,0-2,2V26a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V10A2,2,0,0,0,32,8Zm0,18H4V10H32Z"/>
            <rect class="clr-i-outline clr-i-outline-path-2" x="7" y="13" width="2" height="2"/>
            <rect class="clr-i-outline clr-i-outline-path-3" x="11" y="13" width="2" height="2"/>
            <rect class="clr-i-outline clr-i-outline-path-4" x="15" y="13" width="2" height="2"/>
            <rect class="clr-i-outline clr-i-outline-path-5" x="19" y="13" width="2" height="2"/>
            <rect class="clr-i-outline clr-i-outline-path-6" x="23" y="13" width="2" height="2"/>
            <rect class="clr-i-outline clr-i-outline-path-7" x="27" y="13" width="2" height="2"/>
            <rect class="clr-i-outline clr-i-outline-path-8" x="7" y="17" width="2" height="2"/>
            <rect class="clr-i-outline clr-i-outline-path-9" x="11" y="17" width="2" height="2"/>
            <rect class="clr-i-outline clr-i-outline-path-10" x="15" y="17" width="2" height="2"/>
            <rect class="clr-i-outline clr-i-outline-path-11" x="19" y="17" width="2" height="2"/>
            <rect class="clr-i-outline clr-i-outline-path-12" x="23" y="17" width="2" height="2"/>
            <rect class="clr-i-outline clr-i-outline-path-13" x="27" y="17" width="2" height="2"/>
            <rect class="clr-i-outline clr-i-outline-path-14" x="27" y="22" width="1.94" height="2"/>
            <rect class="clr-i-outline clr-i-outline-path-15" x="7" y="22" width="2" height="2"/>
            <rect class="clr-i-outline clr-i-outline-path-16" x="11.13" y="22" width="13.75" height="2"/>

            <path class="clr-i-solid clr-i-solid-path-1" d="M32,8H4a2,2,0,0,0-2,2V26a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V10A2,2,0,0,0,32,8ZM19,13h2v2H19Zm0,4h2v2H19Zm-4-4h2v2H15Zm0,4h2v2H15Zm-4-4h2v2H11ZM9,24H7V22H9Zm0-5H7V17H9Zm0-4H7V13H9Zm2,2h2v2H11Zm13.88,7H11.13V22H24.88ZM25,19H23V17h2Zm0-4H23V13h2Zm3.94,9H27V22h1.94ZM29,19H27V17h2Zm0-4H27V13h2Z"/>
        </svg>
    `,

    "mouse": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="has-solid"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>mouse</title>

            <path class="clr-i-outline clr-i-outline-path-1" d="M18,34A10,10,0,0,1,8,24V12a10,10,0,0,1,20,0V24A10,10,0,0,1,18,34ZM18,4a8,8,0,0,0-8,8V24a8,8,0,0,0,16,0V12A8,8,0,0,0,18,4Z"/>
            <path class="clr-i-outline clr-i-outline-path-2" d="M18,15a1,1,0,0,1-1-1V10a1,1,0,0,1,2,0v4A1,1,0,0,1,18,15Z"/>

            <path class="clr-i-solid clr-i-solid-path-1" d="M18,2A10,10,0,0,0,8,12V24a10,10,0,0,0,20,0V12A10,10,0,0,0,18,2Zm1.3,11.44a1.3,1.3,0,0,1-2.6,0V10a1.3,1.3,0,0,1,2.6,0Z"/>
        </svg>
    `,


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

    "applications": `
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

    /*TODO: app is deprecated and will be replaced with a new shape in 0.9.0*/


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

    "floppy": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" class="can-alert can-badge has-solid"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>floppy</title>
            <path d="M27.36,4H6A2,2,0,0,0,4,6V30a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V8.78ZM25,30H11V22H25Zm5,0H27V22a2,2,0,0,0-2-2H11a2,2,0,0,0-2,2v8H6V6h4v6a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2H12V6H26.51L30,9.59Z" class="clr-i-outline clr-i-outline-path-1" />

            <path d="M30,13.5h0V30H27V22a2,2,0,0,0-2-2H11a2,2,0,0,0-2,2v8H6V6h4v6a2,2,0,0,0,2,2H24a2,2,0,0,0,2-1.68l-.43-.3H12V6H22.5a7.49,7.49,0,0,1,.28-2H6A2,2,0,0,0,4,6V30a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V13.22A7.49,7.49,0,0,1,30,13.5ZM25,30H11V22H25Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>
            <circle cx="30" cy="6" r="5" fill="#e62700" class="clr-i-outline--badged clr-i-outline-path-2--badged clr-i-badge"/>

            <path d="M30,15.4V30H27V22a2,2,0,0,0-2-2H11a2,2,0,0,0-2,2v8H6V6h4v6a2,2,0,0,0,2,2h7.35a3.54,3.54,0,0,1-.77-2H12V6h9.29l1.15-2H6A2,2,0,0,0,4,6V30a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V15.4ZM25,30H11V22H25Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/>
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted clr-i-alert"/>

            <path d="M27.36,4H6A2,2,0,0,0,4,6V30a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V8.78ZM26,30H10V21.5A1.5,1.5,0,0,1,11.5,20h13A1.5,1.5,0,0,1,26,21.5ZM24,14H12a2,2,0,0,1-2-2V6h2v6H26A2,2,0,0,1,24,14Z" class="clr-i-solid clr-i-solid-path-1"/>

            <path d="M30,13.5a7.46,7.46,0,0,1-4-1.18A2,2,0,0,1,24,14H12a2,2,0,0,1-2-2V6h2v6H25.54a7.45,7.45,0,0,1-2.76-8H6A2,2,0,0,0,4,6V30a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V13.22A7.49,7.49,0,0,1,30,13.5ZM26,30H10V21.5A1.5,1.5,0,0,1,11.5,20h13A1.5,1.5,0,0,1,26,21.5Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>
            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge"/>

            <path d="M22.23,15.4A3.69,3.69,0,0,1,19.35,14H12a2,2,0,0,1-2-2V6h2v6h6.58A3.67,3.67,0,0,1,19,9.89L22.45,4H6A2,2,0,0,0,4,6V30a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V15.4ZM26,30H10V21.5A1.5,1.5,0,0,1,11.5,20h13A1.5,1.5,0,0,1,26,21.5Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"/>
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted clr-i-alert"/>
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
        </svg>`,

    "terminal": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="can-alert can-badge has-solid">
            <title>terminal</title>

            <path d="M32,5H4A2,2,0,0,0,2,7V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V7A2,2,0,0,0,32,5ZM4,7H32V9.2H4ZM4,29V10.8H32V29Z" class="clr-i-outline clr-i-outline-path-1" />
            <rect x="17" y="23" width="6" height="2" class="clr-i-outline clr-i-outline-path-2" />
            <polygon points="7 15.68 13.79 18.8 7 21.91 7 24.11 16.6 19.7 16.6 17.89 7 13.48 7 15.68" class="clr-i-outline clr-i-outline-path-3" />
            <rect x="17" y="23" width="6" height="2" class="clr-i-outline--alerted clr-i-outline-path-1--alerted" />
            <polygon points="7 24.11 16.6 19.7 16.6 17.89 7 13.48 7 15.68 13.79 18.8 7 21.91 7 24.11" class="clr-i-outline--alerted clr-i-outline-path-2--alerted" />
            <path d="M33.68,15.4H32V29H4V10.8H18.68A3.66,3.66,0,0,1,19,9.89l.4-.69H4V7H20.71l1.15-2H4A2,2,0,0,0,2,7V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V15.38Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted" />
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-outline--alerted clr-i-outline-path-4--alerted clr-i-alert" />
            <rect x="17" y="23" width="6" height="2" class="clr-i-outline--badged clr-i-outline-path-1--badged" />
            <polygon points="7 24.11 16.6 19.7 16.6 17.89 7 13.48 7 15.68 13.79 18.8 7 21.91 7 24.11" class="clr-i-outline--badged clr-i-outline-path-2--badged" />
            <path d="M32,13.22V29H4V10.8H24.24a7.51,7.51,0,0,1-1-1.6H4V7H22.57a7.52,7.52,0,0,1-.07-1,7.52,7.52,0,0,1,.07-1H4A2,2,0,0,0,2,7V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V12.34A7.45,7.45,0,0,1,32,13.22Z" class="clr-i-outline--badged clr-i-outline-path-3--badged" />
            <circle cx="30" cy="6" r="5"  class="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge" />
            <path d="M32,5H4A2,2,0,0,0,2,7V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V7A2,2,0,0,0,32,5ZM6.8,15.81V13.17l10,4.59v2.08l-10,4.59V21.78l6.51-3ZM23.4,25.4H17V23h6.4ZM4,9.2V7H32V9.2Z" class="clr-i-solid clr-i-solid-path-1" />
            <path d="M33.68,15.4H22.23A3.68,3.68,0,0,1,19,9.89l.4-.69H4V7H20.71l1.15-2H4A2,2,0,0,0,2,7V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V15.38ZM16.8,19.83l-10,4.59V21.78l6.51-3-6.51-3V13.17l10,4.59Zm6.6,5.57H17V23h6.4Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted" />
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert" />
            <path d="M30,13.5a7.49,7.49,0,0,1-6.78-4.3H4V7H22.57a7.52,7.52,0,0,1-.07-1,7.52,7.52,0,0,1,.07-1H4A2,2,0,0,0,2,7V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V12.34A7.46,7.46,0,0,1,30,13.5ZM16.8,19.83l-10,4.59V21.78l6.51-3-6.51-3V13.17l10,4.59Zm6.6,5.57H17V23h6.4Z" class="clr-i-solid--badged clr-i-solid-path-1--badged" />
            <circle cx="30" cy="6" r="5"  class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" />
        </svg>`,


    "code": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="can-alert can-badge">
            <title>code</title>

            <path d="M13.71,12.59a1,1,0,0,0-1.39-.26L5.79,16.78a1,1,0,0,0,0,1.65l6.53,4.45a1,1,0,1,0,1.13-1.65L8.13,17.61,13.45,14A1,1,0,0,0,13.71,12.59Z" class="clr-i-outline clr-i-outline-path-1" />
            <path d="M30.21,16.78l-6.53-4.45A1,1,0,1,0,22.55,14l5.32,3.63-5.32,3.63a1,1,0,0,0,1.13,1.65l6.53-4.45a1,1,0,0,0,0-1.65Z" class="clr-i-outline clr-i-outline-path-2" />
            <path d="M19.94,9.83a.9.9,0,0,0-1.09.66L15.41,24.29a.9.9,0,0,0,.66,1.09l.22,0a.9.9,0,0,0,.87-.68l3.44-13.81A.9.9,0,0,0,19.94,9.83Z" class="clr-i-outline clr-i-outline-path-3" />
            <path d="M13.71,12.59a1,1,0,0,0-1.39-.26L5.79,16.78a1,1,0,0,0,0,1.65l6.53,4.45a1,1,0,1,0,1.13-1.65L8.13,17.61,13.45,14A1,1,0,0,0,13.71,12.59Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted" />
            <path d="M18.56,11.62,15.41,24.29a.9.9,0,0,0,.66,1.09l.22,0a.9.9,0,0,0,.87-.68L19.73,14.4a3.59,3.59,0,0,1-1.16-2.79Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted" />
            <path d="M30.21,16.78l-2-1.38H24.64l3.24,2.21-5.32,3.63a1,1,0,0,0,1.13,1.65l6.53-4.45a1,1,0,0,0,0-1.65Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted" />
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-outline--alerted clr-i-outline-path-4--alerted clr-i-alert" />
            <path d="M13.71,12.59a1,1,0,0,0-1.39-.26L5.79,16.78a1,1,0,0,0,0,1.65l6.53,4.45a1,1,0,1,0,1.13-1.65L8.13,17.61,13.45,14A1,1,0,0,0,13.71,12.59Z" class="clr-i-outline--badged clr-i-outline-path-1--badged" />
            <path d="M30.21,16.78l-6.53-4.45A1,1,0,1,0,22.55,14l5.32,3.63-5.32,3.63a1,1,0,0,0,1.13,1.65l6.53-4.45a1,1,0,0,0,0-1.65Z" class="clr-i-outline--badged clr-i-outline-path-2--badged" />
            <path d="M19.94,9.83a.9.9,0,0,0-1.09.66L15.41,24.29a.9.9,0,0,0,.66,1.09l.22,0a.9.9,0,0,0,.87-.68l3.44-13.81A.9.9,0,0,0,19.94,9.83Z" class="clr-i-outline--badged clr-i-outline-path-3--badged" />
            <circle cx="30" cy="6" r="5"  class="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge" />
        </svg>`,

    "application": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="has-solid">
            <title>application</title>

            <rect x="5" y="7" width="2" height="2" class="clr-i-outline clr-i-outline-path-1" />
            <rect x="9" y="7" width="2" height="2" class="clr-i-outline clr-i-outline-path-2" />
            <rect x="13" y="7" width="2" height="2" class="clr-i-outline clr-i-outline-path-3" />
            <path d="M32,4H4A2,2,0,0,0,2,6V30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V6A2,2,0,0,0,32,4ZM4,6H32v4.2H4ZM4,30V11.8H32V30Z" class="clr-i-outline clr-i-outline-path-4" />
            <path d="M32,4H4A2,2,0,0,0,2,6V30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V6A2,2,0,0,0,32,4Zm0,6.2H4V6H32Z" class="clr-i-solid clr-i-solid-path-1" />
            <rect x="5" y="7" width="2" height="2" class="clr-i-solid clr-i-solid-path-2" />
            <rect x="9" y="7" width="2" height="2" class="clr-i-solid clr-i-solid-path-3" />
            <rect x="13" y="7" width="2" height="2" class="clr-i-solid clr-i-solid-path-4" />
        </svg>`,

    "battery": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="can-alert can-badge has-solid">
            <title>battery</title>

            <path d="M18.59,11.77a1,1,0,0,0-1.73,1l2.5,4.34-6.07-1,5.29,10.59a1,1,0,0,0,1.79-.89l-3.53-7.08,6.38,1.06Z" class="clr-i-outline clr-i-outline-path-1" />
            <path d="M25.12,4H23V3.58A1.58,1.58,0,0,0,21.42,2H14.58A1.58,1.58,0,0,0,13,3.58V4H10.88A1.88,1.88,0,0,0,9,5.88V32.12A1.88,1.88,0,0,0,10.88,34H25.12A1.88,1.88,0,0,0,27,32.12V5.88A1.88,1.88,0,0,0,25.12,4ZM25,32H11V6h4V4h6V6h4Z" class="clr-i-outline clr-i-outline-path-2" />
            <path d="M18.59,11.77a1,1,0,0,0-1.73,1l2.5,4.34-6.07-1,5.29,10.59a1,1,0,0,0,1.79-.89l-3.53-7.08,6.38,1.06Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted" />
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-outline--alerted clr-i-outline-path-2--alerted clr-i-alert" />
            <path d="M25,15.4V32H11V6h4V4h6V6h.28l1.64-2.85A1.57,1.57,0,0,0,21.42,2H14.58A1.58,1.58,0,0,0,13,3.58V4H10.88A1.88,1.88,0,0,0,9,5.88V32.12A1.88,1.88,0,0,0,10.88,34H25.12A1.88,1.88,0,0,0,27,32.12V15.4Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted" />
            <circle cx="30" cy="6" r="5"  class="clr-i-outline--badged clr-i-outline-path-1--badged clr-i-badge" />
            <path d="M18.59,11.77a1,1,0,0,0-1.73,1l2.5,4.34-6.07-1,5.29,10.59a1,1,0,0,0,1.79-.89l-3.53-7.08,6.38,1.06Z" class="clr-i-outline--badged clr-i-outline-path-2--badged" />
            <path d="M25,11.58V32H11V6h4V4h6V6H22.5A7.47,7.47,0,0,1,23,3.38,1.57,1.57,0,0,0,21.42,2H14.58A1.58,1.58,0,0,0,13,3.58V4H10.88A1.88,1.88,0,0,0,9,5.88V32.12A1.88,1.88,0,0,0,10.88,34H25.12A1.88,1.88,0,0,0,27,32.12V12.87A7.5,7.5,0,0,1,25,11.58Z" class="clr-i-outline--badged clr-i-outline-path-3--badged" />
            <path d="M22,4V2.62A.6.6,0,0,0,21.42,2H14.58a.6.6,0,0,0-.58.62V4H10A1.09,1.09,0,0,0,9,5.07v28A1,1,0,0,0,10,34H26a1,1,0,0,0,1-.94v-28A1.09,1.09,0,0,0,26,4ZM20.26,25.44a1.2,1.2,0,0,1-2.15,1.07L12.65,15.56l6,1-2.29-4a1.2,1.2,0,1,1,2.08-1.2l4.83,8.37L16.9,18.7Z" class="clr-i-solid clr-i-solid-path-1" />
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-solid--alerted clr-i-solid-path-1--alerted clr-i-alert" />
            <path d="M22.23,15.4A3.66,3.66,0,0,1,20.55,15l2.76,4.79L16.9,18.7l3.36,6.73a1.2,1.2,0,0,1-2.15,1.07L12.65,15.56l6,1-2.29-4a1.2,1.2,0,1,1,2.08-1.2l.09.15A3.66,3.66,0,0,1,19,9.89L22.45,4H22V2.62A.6.6,0,0,0,21.42,2H14.58a.6.6,0,0,0-.58.62V4H10A1.09,1.09,0,0,0,9,5.07v28A1,1,0,0,0,10,34H26a1,1,0,0,0,1-.94V15.4Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted" />
            <circle cx="30" cy="6" r="5"  class="clr-i-solid--badged clr-i-solid-path-1--badged clr-i-badge" />
            <path d="M22.5,6a7.49,7.49,0,0,1,.28-2H22V2.62A.6.6,0,0,0,21.42,2H14.58a.6.6,0,0,0-.58.62V4H10A1.09,1.09,0,0,0,9,5.07v28A1,1,0,0,0,10,34H26a1,1,0,0,0,1-.94V12.87A7.5,7.5,0,0,1,22.5,6ZM20.26,25.44a1.2,1.2,0,0,1-2.15,1.07L12.65,15.56l6,1-2.29-4a1.2,1.2,0,1,1,2.08-1.2l4.83,8.37L16.9,18.7Z" class="clr-i-solid--badged clr-i-solid-path-2--badged" />
        </svg>`,

    "mobile": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="has-solid">
            <title>mobile</title>

            <path d="M25,4H11A2,2,0,0,0,9,6V30a2,2,0,0,0,2,2H25a2,2,0,0,0,2-2V6A2,2,0,0,0,25,4ZM11,6H25V24H11Zm0,24V26H25v4Z" class="clr-i-outline clr-i-outline-path-1" />
            <rect x="17" y="27" width="2" height="2" class="clr-i-outline clr-i-outline-path-2" />
            <path d="M25,4H11A2,2,0,0,0,9,6V30a2,2,0,0,0,2,2H25a2,2,0,0,0,2-2V6A2,2,0,0,0,25,4ZM19,30H17V28h2Zm-8-4V6H25V26Z" class="clr-i-solid clr-i-solid-path-1" />
        </svg>`,


    "tablet": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="has-solid">
            <title>tablet</title>

            <rect x="17" y="29" width="2" height="2" class="clr-i-outline clr-i-outline-path-1" />
            <path d="M30,2H6A2,2,0,0,0,4,4V32a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V4A2,2,0,0,0,30,2Zm0,2V26.38H6V4ZM6,32V28H30v4Z" class="clr-i-outline clr-i-outline-path-2" />
            <path d="M30,2H6A2,2,0,0,0,4,4V32a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V4A2,2,0,0,0,30,2ZM19,32H17V30h2ZM6,28V4H30V28Z" class="clr-i-solid clr-i-solid-path-1" />
        </svg>`,

    "network-globe": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="can-alert can-badge has-solid">
            <title>network-globe</title>

            <path d="M26.58,32h-18a1,1,0,1,0,0,2h18a1,1,0,0,0,0-2Z" class="clr-i-outline clr-i-outline-path-1" />
            <path d="M17.75,2a14,14,0,0,0-14,14c0,.45,0,.89.07,1.33l0,0h0A14,14,0,1,0,17.75,2Zm0,2a12,12,0,0,1,8.44,3.48c0,.33,0,.66,0,1A18.51,18.51,0,0,0,14,8.53a2.33,2.33,0,0,0-1.14-.61l-.25,0c-.12-.42-.23-.84-.32-1.27s-.14-.81-.19-1.22A11.92,11.92,0,0,1,17.75,4Zm-3,5.87A17,17,0,0,1,25.92,10a16.9,16.9,0,0,1-3.11,7,2.28,2.28,0,0,0-2.58.57c-.35-.2-.7-.4-1-.63a16,16,0,0,1-4.93-5.23,2.25,2.25,0,0,0,.47-1.77Zm-4-3.6c0,.21.06.43.1.64.09.44.21.87.33,1.3a2.28,2.28,0,0,0-1.1,2.25A18.32,18.32,0,0,0,5.9,14.22,12,12,0,0,1,10.76,6.27Zm0,15.71A2.34,2.34,0,0,0,9.2,23.74l-.64,0A11.94,11.94,0,0,1,5.8,16.92l.11-.19a16.9,16.9,0,0,1,4.81-4.89,2.31,2.31,0,0,0,2.28.63,17.53,17.53,0,0,0,5.35,5.65c.41.27.83.52,1.25.76A2.32,2.32,0,0,0,19.78,20a16.94,16.94,0,0,1-6.2,3.11A2.34,2.34,0,0,0,10.76,22Zm7,6a11.92,11.92,0,0,1-5.81-1.51l.28-.06a2.34,2.34,0,0,0,1.57-1.79,18.43,18.43,0,0,0,7-3.5,2.29,2.29,0,0,0,3-.62,17.41,17.41,0,0,0,4.32.56l.53,0A12,12,0,0,1,17.75,28Zm6.51-8.9a2.33,2.33,0,0,0-.33-1.19,18.4,18.4,0,0,0,3.39-7.37q.75.35,1.48.78a12,12,0,0,1,.42,8.2A16,16,0,0,1,24.27,19.11Z" class="clr-i-outline clr-i-outline-path-2" />
            <path d="M26.58,32h-18a1,1,0,1,0,0,2h18a1,1,0,0,0,0-2Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted" />
            <path d="M31.73,15.4h-2c0,.2,0,.4,0,.61a12,12,0,0,1-.53,3.52,16,16,0,0,1-5-.41,2.33,2.33,0,0,0-.33-1.19,18.87,18.87,0,0,0,1.62-2.52H23.83a17.29,17.29,0,0,1-1,1.54,2.28,2.28,0,0,0-2.58.57c-.35-.2-.7-.4-1-.63a16,16,0,0,1-4.93-5.23,2.25,2.25,0,0,0,.47-1.77A17.08,17.08,0,0,1,19.56,9l.87-1.51a18.59,18.59,0,0,0-6.39,1,2.33,2.33,0,0,0-1.14-.61l-.25,0c-.12-.42-.23-.84-.32-1.27s-.14-.81-.19-1.22A11.88,11.88,0,0,1,22,4.79L23,3A14,14,0,0,0,3.75,16c0,.45,0,.89.07,1.33l0,0h0A14,14,0,0,0,31.76,16C31.76,15.8,31.74,15.6,31.73,15.4Zm-21-9.13c0,.21.06.43.1.64.09.44.21.87.33,1.3a2.28,2.28,0,0,0-1.1,2.25A18.32,18.32,0,0,0,5.9,14.22,12,12,0,0,1,10.76,6.27Zm0,15.71A2.34,2.34,0,0,0,9.2,23.74l-.64,0A11.94,11.94,0,0,1,5.8,16.92l.11-.19a16.9,16.9,0,0,1,4.81-4.89,2.31,2.31,0,0,0,2.28.63,17.53,17.53,0,0,0,5.35,5.65c.41.27.83.52,1.25.76A2.32,2.32,0,0,0,19.78,20a16.94,16.94,0,0,1-6.2,3.11A2.34,2.34,0,0,0,10.76,22Zm7,6a11.92,11.92,0,0,1-5.81-1.51l.28-.06a2.34,2.34,0,0,0,1.57-1.79,18.43,18.43,0,0,0,7-3.5,2.29,2.29,0,0,0,3-.62,17.41,17.41,0,0,0,4.32.56l.53,0A12,12,0,0,1,17.75,28Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted" />
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-outline--alerted clr-i-outline-path-3--alerted clr-i-alert" />
            <path d="M26.58,32h-18a1,1,0,1,0,0,2h18a1,1,0,0,0,0-2Z" class="clr-i-outline--badged clr-i-outline-path-1--badged" />
            <path d="M31.5,13.35a7.54,7.54,0,0,1-1.5.15l-.51,0a11.91,11.91,0,0,1-.25,6,16,16,0,0,1-5-.41,2.33,2.33,0,0,0-.33-1.19,18.59,18.59,0,0,0,2.78-5.18,7.49,7.49,0,0,1-1.31-.82,17,17,0,0,1-2.61,5,2.28,2.28,0,0,0-2.58.57c-.35-.2-.7-.4-1-.63a16,16,0,0,1-4.93-5.23,2.25,2.25,0,0,0,.47-1.77,17,17,0,0,1,8.53-.62,7.43,7.43,0,0,1-.56-1.59A18.56,18.56,0,0,0,14,8.53a2.33,2.33,0,0,0-1.14-.61l-.25,0c-.12-.42-.23-.84-.32-1.27s-.14-.81-.19-1.22A11.92,11.92,0,0,1,22.57,5a7.45,7.45,0,0,1,.53-2A14,14,0,0,0,3.75,16c0,.45,0,.89.07,1.33l0,0h0a14,14,0,1,0,27.68-4ZM10.76,6.27c0,.21.06.43.1.64.09.44.21.87.33,1.3a2.28,2.28,0,0,0-1.1,2.25A18.32,18.32,0,0,0,5.9,14.22,12,12,0,0,1,10.76,6.27Zm0,15.71A2.34,2.34,0,0,0,9.2,23.74l-.64,0A11.94,11.94,0,0,1,5.8,16.92l.11-.19a16.9,16.9,0,0,1,4.81-4.89,2.31,2.31,0,0,0,2.28.63,17.53,17.53,0,0,0,5.35,5.65c.41.27.83.52,1.25.76A2.32,2.32,0,0,0,19.78,20a16.94,16.94,0,0,1-6.2,3.11A2.34,2.34,0,0,0,10.76,22Zm7,6a11.92,11.92,0,0,1-5.81-1.51l.28-.06a2.34,2.34,0,0,0,1.57-1.79,18.43,18.43,0,0,0,7-3.5,2.29,2.29,0,0,0,3-.62,17.41,17.41,0,0,0,4.32.56l.53,0A12,12,0,0,1,17.75,28Z" class="clr-i-outline--badged clr-i-outline-path-2--badged" />
            <circle cx="30" cy="6" r="5"  class="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge" />

            <path d="M26.58,32h-18a1,1,0,1,0,0,2h18a1,1,0,0,0,0-2Z" class="clr-i-solid clr-i-solid-path-1" />
            <path d="M14.72,9.87a2.25,2.25,0,0,1-.47,1.77,16,16,0,0,0,4.93,5.23c.34.23.69.43,1,.63a2.28,2.28,0,0,1,2.58-.57,16.9,16.9,0,0,0,3.11-7A17,17,0,0,0,14.72,9.87Z" class="clr-i-solid clr-i-solid-path-2" />
            <path d="M17.75,2a14,14,0,0,0-14,14c0,.45,0,.89.07,1.33l0,0h0A14,14,0,1,0,17.75,2ZM28.1,21.09a17.41,17.41,0,0,1-4.32-.56,2.29,2.29,0,0,1-3,.62,18.43,18.43,0,0,1-7,3.5,2.34,2.34,0,0,1-1.57,1.79l-.29.06a11.93,11.93,0,0,1-3.39-2.8l.66,0a2.33,2.33,0,0,1,4.37-.58A16.94,16.94,0,0,0,19.78,20a2.32,2.32,0,0,1-.18-1.17c-.42-.24-.84-.49-1.25-.76A17.53,17.53,0,0,1,13,12.47a2.31,2.31,0,0,1-2.28-.63,27.31,27.31,0,0,0-5,4.74c0-.2,0-.39,0-.57a12,12,0,0,1,.14-1.73,18.75,18.75,0,0,1,4.2-3.8,2.28,2.28,0,0,1,1.1-2.25c-.12-.43-.24-.86-.33-1.3,0-.14,0-.29-.11-.64a12,12,0,0,1,1.37-.87c.1.59.14.9.21,1.21s.2.85.32,1.27l.25,0A2.33,2.33,0,0,1,14,8.53a18.51,18.51,0,0,1,12.11-.07c0-.32,0-.65,0-1h0a12,12,0,0,1,2.62,3.85h0q-.73-.43-1.48-.78a18.4,18.4,0,0,1-3.39,7.37,2.33,2.33,0,0,1,.33,1.19,22,22,0,0,0,5,.45,11.88,11.88,0,0,1-.61,1.53Z" class="clr-i-solid clr-i-solid-path-3" />
            <path d="M26.58,32h-18a1,1,0,1,0,0,2h18a1,1,0,0,0,0-2Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted" />
            <path d="M31.73,15.4H25.56a18.87,18.87,0,0,1-1.62,2.52,2.33,2.33,0,0,1,.33,1.19,22,22,0,0,0,5,.45,11.88,11.88,0,0,1-.61,1.53H28.1a17.41,17.41,0,0,1-4.32-.56,2.29,2.29,0,0,1-3,.62,18.43,18.43,0,0,1-7,3.5,2.34,2.34,0,0,1-1.57,1.79l-.29.06a11.93,11.93,0,0,1-3.39-2.8l.66,0a2.33,2.33,0,0,1,4.37-.58A16.94,16.94,0,0,0,19.78,20a2.32,2.32,0,0,1-.18-1.17c-.42-.24-.84-.49-1.25-.76A17.53,17.53,0,0,1,13,12.47a2.31,2.31,0,0,1-2.28-.63,27.31,27.31,0,0,0-5,4.74c0-.2,0-.39,0-.57a12,12,0,0,1,.14-1.73,18.75,18.75,0,0,1,4.2-3.8,2.28,2.28,0,0,1,1.1-2.25c-.12-.43-.24-.86-.33-1.3,0-.14,0-.29-.11-.64a12,12,0,0,1,1.37-.87c.1.59.14.9.21,1.21s.2.85.32,1.27l.25,0A2.33,2.33,0,0,1,14,8.53a18.59,18.59,0,0,1,6.39-1L23,3A14,14,0,0,0,3.75,16c0,.45,0,.89.07,1.33l0,0h0A14,14,0,0,0,31.76,16C31.76,15.8,31.74,15.6,31.73,15.4Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted" />
            <path d="M14.26,11.64a16,16,0,0,0,4.93,5.23c.34.23.69.43,1,.63a2.28,2.28,0,0,1,2.58-.57,17.29,17.29,0,0,0,1-1.54h-1.6A3.68,3.68,0,0,1,19,9.89L19.56,9a17.08,17.08,0,0,0-4.84.88,2.25,2.25,0,0,1-.47,1.77Z" class="clr-i-solid--alerted clr-i-solid-path-3--alerted" />
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-solid--alerted clr-i-solid-path-4--alerted clr-i-alert" />


            <path d="M26.58,32h-18a1,1,0,1,0,0,2h18a1,1,0,0,0,0-2Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>
            <path d="M31.5,13.35a7.54,7.54,0,0,1-1.5.15,7.46,7.46,0,0,1-3.28-.76,18.59,18.59,0,0,1-2.78,5.18,2.33,2.33,0,0,1,.33,1.19,22,22,0,0,0,5,.45,11.88,11.88,0,0,1-.61,1.53H28.1a17.41,17.41,0,0,1-4.32-.56,2.29,2.29,0,0,1-3,.62,18.43,18.43,0,0,1-7,3.5,2.34,2.34,0,0,1-1.57,1.79l-.29.06a11.93,11.93,0,0,1-3.39-2.8l.66,0a2.33,2.33,0,0,1,4.37-.58A16.94,16.94,0,0,0,19.78,20a2.32,2.32,0,0,1-.18-1.17c-.42-.24-.84-.49-1.25-.76A17.53,17.53,0,0,1,13,12.47a2.31,2.31,0,0,1-2.28-.63,27.31,27.31,0,0,0-5,4.74c0-.2,0-.39,0-.57a12,12,0,0,1,.14-1.73,18.75,18.75,0,0,1,4.2-3.8,2.28,2.28,0,0,1,1.1-2.25c-.12-.43-.24-.86-.33-1.3,0-.14,0-.29-.11-.64a12,12,0,0,1,1.37-.87c.1.59.14.9.21,1.21s.2.85.32,1.27l.25,0A2.33,2.33,0,0,1,14,8.53a18.56,18.56,0,0,1,8.65-.87,7.45,7.45,0,0,1,.41-4.59A14,14,0,0,0,3.75,16c0,.45,0,.89.07,1.33l0,0h0a14,14,0,1,0,27.68-4Z" class="clr-i-solid--badged clr-i-solid-path-2--badged"/>
            <path d="M14.72,9.87a2.25,2.25,0,0,1-.47,1.77,16,16,0,0,0,4.93,5.23c.34.23.69.43,1,.63a2.28,2.28,0,0,1,2.58-.57,17,17,0,0,0,2.61-5,7.52,7.52,0,0,1-2.16-2.67A17,17,0,0,0,14.72,9.87Z" class="clr-i-solid--badged clr-i-solid-path-3--badged"/>
            <circle cx="30" cy="6" r="5" fill="#e62700" class="clr-i-solid--badged clr-i-solid-path-4--badged clr-i-badge"/>
        </svg>`,

    "network-settings": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="has-solid">
            <title>network-settings</title>

            <path d="M10.85,27.44a2.29,2.29,0,0,0,1.74-1.68c.54-.14,1.06-.32,1.59-.51v-1.2a2.77,2.77,0,0,1,.06-.51,17.44,17.44,0,0,1-1.82.62,2.28,2.28,0,0,0-4.28.63l-.45,0h0a11.93,11.93,0,0,1-2.88-7.27,17.79,17.79,0,0,1,5-4.72,2.23,2.23,0,0,0,2.29.56,18.52,18.52,0,0,0,4.47,5,2.74,2.74,0,0,1,.21-.24l.95-.91a16.9,16.9,0,0,1-4.35-4.79,2.27,2.27,0,0,0,.35-1.2c0-.07,0-.14,0-.22A17.69,17.69,0,0,1,25,11a17.49,17.49,0,0,1-1.15,3.34l.19,0h1.56a19,19,0,0,0,.91-2.72c.43.19.84.41,1.26.64a11.94,11.94,0,0,1,1,4.09l0,0A2.77,2.77,0,0,1,30,16a2.73,2.73,0,0,1,.68.1A14,14,0,1,0,16.08,31a2.72,2.72,0,0,1,0-2A11.93,11.93,0,0,1,10.85,27.44ZM16.76,5a12,12,0,0,1,8.61,3.66c0,.25,0,.51-.08.76a19.21,19.21,0,0,0-12.35.11A2.28,2.28,0,0,0,11.74,9a17,17,0,0,1-.61-2.53A11.92,11.92,0,0,1,16.76,5ZM9.66,7.36a18.72,18.72,0,0,0,.49,1.92,2.28,2.28,0,0,0-1.07,1.93s0,.1,0,.15A19.45,19.45,0,0,0,5,14.79,12,12,0,0,1,9.66,7.36Z" class="clr-i-outline clr-i-outline-path-1" />
            <path d="M25,21.19A3.84,3.84,0,1,0,28.88,25,3.87,3.87,0,0,0,25,21.19Zm0,6.08A2.24,2.24,0,1,1,27.28,25,2.26,2.26,0,0,1,25,27.27Z" class="clr-i-outline clr-i-outline-path-2" />
            <path d="M34.17,24.14a1.14,1.14,0,0,0-.7-1.1l-1.56-.46q-.11-.32-.26-.63l.72-1.33a1.14,1.14,0,0,0-.21-1.34l-1.34-1.32a1.14,1.14,0,0,0-1.34-.2l-1.34.71a7.28,7.28,0,0,0-.67-.28L27,16.71a1.14,1.14,0,0,0-1.08-.76H24a1.14,1.14,0,0,0-1.08.8l-.44,1.43a7.32,7.32,0,0,0-.68.28l-1.32-.7a1.14,1.14,0,0,0-1.33.19l-1.37,1.31a1.14,1.14,0,0,0-.21,1.35l.7,1.28q-.16.32-.28.65L16.58,23a1.13,1.13,0,0,0-.81,1.09v1.87A1.14,1.14,0,0,0,16.59,27l1.47.44q.12.32.28.64l-.72,1.35a1.14,1.14,0,0,0,.2,1.35l1.34,1.32a1.14,1.14,0,0,0,1.34.2l1.37-.72q.31.14.63.26l.44,1.47a1.14,1.14,0,0,0,1.09.8h1.9A1.14,1.14,0,0,0,27,33.31l.44-1.47c.21-.07.42-.16.62-.25l1.38.73a1.14,1.14,0,0,0,1.33-.2l1.34-1.32a1.14,1.14,0,0,0,.21-1.35l-.73-1.34q.14-.3.25-.6l1.5-.44A1.13,1.13,0,0,0,34.17,26Zm-1.6,1.5-2,.58-.12.42A5.55,5.55,0,0,1,30,27.73l-.21.38,1,1.79-.86.84-1.82-1-.37.2a5.78,5.78,0,0,1-1.12.46l-.42.12-.59,2H24.38l-.59-1.95-.42-.12A5.86,5.86,0,0,1,22.24,30l-.37-.2-1.81,1-.86-.85,1-1.82-.22-.38a5.6,5.6,0,0,1-.49-1.13l-.13-.41-1.95-.58V24.42l1.94-.58.12-.41a5.53,5.53,0,0,1,.49-1.14l.22-.39-1-1.73.87-.84,1.77.94.38-.21a5.8,5.8,0,0,1,1.17-.49l.41-.12.59-1.91h1.23l.58,1.9.41.12a5.79,5.79,0,0,1,1.16.48l.38.21,1.8-.95.86.85-1,1.77.21.38a5.53,5.53,0,0,1,.47,1.13l.12.42,1.93.57Z" class="clr-i-outline clr-i-outline-path-3" />
            <path d="M34,23.63,32,23a7.06,7.06,0,0,0-.58-1.41l1-1.86a.37.37,0,0,0-.07-.44L30.9,17.86a.37.37,0,0,0-.44-.07l-1.85,1a7,7,0,0,0-1.43-.61l-.61-2a.37.37,0,0,0-.36-.25h-2a.37.37,0,0,0-.35.26l-.61,2a7,7,0,0,0-1.44.61L20,17.8a.37.37,0,0,0-.44.07L18,19.31a.37.37,0,0,0-.07.44l1,1.82A7,7,0,0,0,18.35,23l-2,.61a.37.37,0,0,0-.26.35v2a.37.37,0,0,0,.26.35l2,.61A7,7,0,0,0,19,28.37l-1,1.9a.37.37,0,0,0,.07.44l1.45,1.45a.37.37,0,0,0,.44.07l1.87-1a7.06,7.06,0,0,0,1.39.57l.61,2a.37.37,0,0,0,.35.26h2a.37.37,0,0,0,.35-.26l.61-2a7,7,0,0,0,1.38-.57l1.89,1a.37.37,0,0,0,.44-.07l1.45-1.45a.37.37,0,0,0,.07-.44l-1-1.88A7,7,0,0,0,31.95,27l2-.61a.37.37,0,0,0,.26-.35V24A.37.37,0,0,0,34,23.63Zm-8.83,4.72A3.33,3.33,0,1,1,28.53,25,3.33,3.33,0,0,1,25.19,28.34Z" class="clr-i-solid clr-i-solid-path-1" />
            <path d="M10.85,27.44a2.29,2.29,0,0,0,1.74-1.68,19.71,19.71,0,0,0,1.89-.6V23.95a2,2,0,0,1,.09-.55,17.42,17.42,0,0,1-2.17.78,2.28,2.28,0,0,0-4.28.63l-.45,0h0a11.93,11.93,0,0,1-2.88-7.27,17.79,17.79,0,0,1,5-4.72,2.23,2.23,0,0,0,2.29.56,18.52,18.52,0,0,0,4.65,5.09,1.93,1.93,0,0,1,.23-.32l.89-.87a16.89,16.89,0,0,1-4.49-4.89,2.27,2.27,0,0,0,.35-1.2c0-.07,0-.14,0-.22A17.69,17.69,0,0,1,25,11a17.49,17.49,0,0,1-1.15,3.35,1.94,1.94,0,0,1,.31-.05h1.45a19.06,19.06,0,0,0,.9-2.7c.43.19.84.41,1.26.64a11.93,11.93,0,0,1,1,4.63l1-.51a2,2,0,0,1,.92-.23h.08A14,14,0,1,0,16.44,31a1.94,1.94,0,0,1,.12-1.46l.28-.53h-.07A11.91,11.91,0,0,1,10.85,27.44ZM16.76,5a12,12,0,0,1,8.61,3.66c0,.25,0,.51-.08.76a19.21,19.21,0,0,0-12.35.11A2.28,2.28,0,0,0,11.74,9a17,17,0,0,1-.61-2.53A11.92,11.92,0,0,1,16.76,5ZM9.66,7.36a18.72,18.72,0,0,0,.49,1.92,2.28,2.28,0,0,0-1.07,1.93s0,.1,0,.15A19.45,19.45,0,0,0,5,14.79,12,12,0,0,1,9.66,7.36Z" class="clr-i-solid clr-i-solid-path-2" />
        </svg>`,

    "network-switch": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="can-alert can-badge has-solid">
            <title>network-switch</title>

            <path d="M33.91,18.47,30.78,8.41A2,2,0,0,0,28.87,7H7.13A2,2,0,0,0,5.22,8.41L2.09,18.48a2,2,0,0,0-.09.59V27a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V19.06A2,2,0,0,0,33.91,18.47ZM32,27H4V19.06L7.13,9H28.87L32,19.06Z" class="clr-i-outline clr-i-outline-path-1" />
            <rect x="7.12" y="22" width="1.8" height="3" class="clr-i-outline clr-i-outline-path-2" />
            <rect x="12.12" y="22" width="1.8" height="3" class="clr-i-outline clr-i-outline-path-3" />
            <rect x="17.11" y="22" width="1.8" height="3" class="clr-i-outline clr-i-outline-path-4" />
            <rect x="22.1" y="22" width="1.8" height="3" class="clr-i-outline clr-i-outline-path-5" />
            <rect x="27.1" y="22" width="1.8" height="3" class="clr-i-outline clr-i-outline-path-6" />
            <rect x="6.23" y="18" width="23.69" height="1.4" class="clr-i-outline clr-i-outline-path-7" />
            <rect x="7.12" y="22" width="1.8" height="3" class="clr-i-outline--alerted clr-i-outline-path-1--alerted" />
            <rect x="12.12" y="22" width="1.8" height="3" class="clr-i-outline--alerted clr-i-outline-path-2--alerted" />
            <rect x="17.11" y="22" width="1.8" height="3" class="clr-i-outline--alerted clr-i-outline-path-3--alerted" />
            <rect x="22.1" y="22" width="1.8" height="3" class="clr-i-outline--alerted clr-i-outline-path-4--alerted" />
            <rect x="27.1" y="22" width="1.8" height="3" class="clr-i-outline--alerted clr-i-outline-path-5--alerted" />
            <rect x="6.23" y="18" width="23.69" height="1.4" class="clr-i-outline--alerted clr-i-outline-path-6--alerted" />
            <path d="M33.91,18.47,33,15.4H30.86L32,19.06V27H4V19.06L7.13,9H19.56l1.15-2H7.13A2,2,0,0,0,5.22,8.41L2.09,18.48a2,2,0,0,0-.09.59V27a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V19.06A2,2,0,0,0,33.91,18.47Z" class="clr-i-outline--alerted clr-i-outline-path-7--alerted" />
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-outline--alerted clr-i-outline-path-8--alerted clr-i-alert" />
            <rect x="7.12" y="22" width="1.8" height="3" class="clr-i-outline--badged clr-i-outline-path-1--badged" />
            <rect x="12.12" y="22" width="1.8" height="3" class="clr-i-outline--badged clr-i-outline-path-2--badged" />
            <rect x="17.11" y="22" width="1.8" height="3" class="clr-i-outline--badged clr-i-outline-path-3--badged" />
            <rect x="22.1" y="22" width="1.8" height="3" class="clr-i-outline--badged clr-i-outline-path-4--badged" />
            <rect x="27.1" y="22" width="1.8" height="3" class="clr-i-outline--badged clr-i-outline-path-5--badged" />
            <rect x="6.23" y="18" width="23.69" height="1.4" class="clr-i-outline--badged clr-i-outline-path-6--badged" />
            <path d="M33.91,18.47l-1.65-5.32a7.49,7.49,0,0,1-2,.33L32,19.06V27H4V19.06L7.13,9h16a7.45,7.45,0,0,1-.55-2H7.13A2,2,0,0,0,5.22,8.41L2.09,18.48a2,2,0,0,0-.09.59V27a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V19.06A2,2,0,0,0,33.91,18.47Z" class="clr-i-outline--badged clr-i-outline-path-7--badged" />
            <circle cx="30" cy="6" r="5"  class="clr-i-outline--badged clr-i-outline-path-8--badged clr-i-badge" />
            <path d="M33.91,18.47,30.78,8.41A2,2,0,0,0,28.87,7H7.13A2,2,0,0,0,5.22,8.41L2.09,18.48a2,2,0,0,0-.09.59V27a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V19.06A2,2,0,0,0,33.91,18.47ZM8.92,25H7.12V22h1.8Zm5,0h-1.8V22h1.8Zm5,0h-1.8V22h1.8Zm5,0H22.1V22h1.8Zm5,0H27.1V22h1.8ZM31,19.4H5V18H31Z" class="clr-i-solid clr-i-solid-path-1" />
            <path d="M33,15.4H22.23A3.68,3.68,0,0,1,19,9.89L20.71,7H7.13A2,2,0,0,0,5.22,8.41L2.09,18.48a2,2,0,0,0-.09.59V27a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V19.06a2,2,0,0,0-.09-.59ZM8.92,25H7.12V22h1.8Zm5,0h-1.8V22h1.8Zm5,0h-1.8V22h1.8Zm5,0H22.1V22h1.8Zm5,0H27.1V22h1.8ZM31,19.4H5V18H31Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted" />
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert" />
            <path d="M32.26,13.15A7.49,7.49,0,0,1,22.57,7H7.13A2,2,0,0,0,5.22,8.41L2.09,18.48a2,2,0,0,0-.09.59V27a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V19.06a2,2,0,0,0-.09-.59ZM8.92,25H7.12V22h1.8Zm5,0h-1.8V22h1.8Zm5,0h-1.8V22h1.8Zm5,0H22.1V22h1.8Zm5,0H27.1V22h1.8ZM31,19.4H5V18H31Z" class="clr-i-solid--badged clr-i-solid-path-1--badged" />
            <circle cx="30" cy="6" r="5"  class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" />
        </svg>`,

    "router": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="can-alert can-badge has-solid">
            <title>router</title>

            <path d="M18,14.87l5.11-5.14a1,1,0,1,0-1.42-1.41L19,11V3.33a1,1,0,0,0-2,0V11L14.31,8.32a1,1,0,1,0-1.42,1.41Z" class="clr-i-outline clr-i-outline-path-1" />
            <path d="M18,21.13l-5.11,5.14a1,1,0,0,0,1.42,1.41L17,25v7.69a1,1,0,0,0,2,0V25l2.69,2.71a1,1,0,0,0,1.42-1.41Z" class="clr-i-outline clr-i-outline-path-2" />
            <path d="M28.85,12.89a1,1,0,0,0-1.41,1.42L30.15,17H22.46a1,1,0,1,0,0,2h7.69l-2.71,2.69a1,1,0,0,0,1.41,1.42L34,18Z" class="clr-i-outline clr-i-outline-path-3" />
            <path d="M5.85,19h7.69a1,1,0,0,0,0-2H5.85l2.71-2.69a1,1,0,1,0-1.41-1.42L2,18l5.14,5.11a1,1,0,1,0,1.41-1.42Z" class="clr-i-outline clr-i-outline-path-4" />
            <path d="M18,21.13l-5.11,5.14a1,1,0,0,0,1.42,1.41L17,25v7.69a1,1,0,0,0,2,0V25l2.69,2.71a1,1,0,0,0,1.42-1.41Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted" />
            <path d="M5.85,19h7.69a1,1,0,0,0,0-2H5.85l2.71-2.69a1,1,0,1,0-1.41-1.42L2,18l5.14,5.11a1,1,0,1,0,1.41-1.42Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted" />
            <path d="M31.38,15.4H28.54L30.15,17H22.46a1,1,0,1,0,0,2h7.69l-2.71,2.69a1,1,0,0,0,1.41,1.42L34,18Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted" />
            <path d="M18,14.87l1.15-1.16-.1-.15A3.68,3.68,0,0,1,19,10V3.33a1,1,0,0,0-2,0V11L14.31,8.32a1,1,0,1,0-1.42,1.41Z" class="clr-i-outline--alerted clr-i-outline-path-4--alerted" />
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-outline--alerted clr-i-outline-path-5--alerted clr-i-alert" />
            <path d="M18,14.87l5.11-5.14a1,1,0,1,0-1.42-1.41L19,11V3.33a1,1,0,0,0-2,0V11L14.31,8.32a1,1,0,1,0-1.42,1.41Z" class="clr-i-outline--badged clr-i-outline-path-1--badged" />
            <path d="M18,21.13l-5.11,5.14a1,1,0,0,0,1.42,1.41L17,25v7.69a1,1,0,0,0,2,0V25l2.69,2.71a1,1,0,0,0,1.42-1.41Z" class="clr-i-outline--badged clr-i-outline-path-2--badged" />
            <path d="M28.85,12.89a1,1,0,0,0-1.41,1.42L30.15,17H22.46a1,1,0,1,0,0,2h7.69l-2.71,2.69a1,1,0,0,0,1.41,1.42L34,18Z" class="clr-i-outline--badged clr-i-outline-path-3--badged" />
            <path d="M5.85,19h7.69a1,1,0,0,0,0-2H5.85l2.71-2.69a1,1,0,1,0-1.41-1.42L2,18l5.14,5.11a1,1,0,1,0,1.41-1.42Z" class="clr-i-outline--badged clr-i-outline-path-4--badged" />
            <circle cx="30" cy="6" r="5"  class="clr-i-outline--badged clr-i-outline-path-5--badged clr-i-badge" />
            <path d="M18,1.67a16,16,0,1,0,16,16A16,16,0,0,0,18,1.67ZM13.86,9.92a.8.8,0,0,1,1.13,0l2.21,2.19V5.93a.8.8,0,0,1,1.6,0v6.18L21,9.92a.8.8,0,1,1,1.13,1.14L18,15.15l-4.14-4.1A.8.8,0,0,1,13.86,9.92ZM10.32,21.74a.8.8,0,0,1-1.13,0L5,17.67l4.19-4.09a.8.8,0,1,1,1.12,1.14l-2.2,2.14h6.27a.8.8,0,0,1,0,1.6H8.11l2.2,2.15A.8.8,0,0,1,10.32,21.74Zm11.82,3.67a.8.8,0,0,1-1.13,0L18.8,23.23V29.4a.8.8,0,0,1-1.6,0V23.23L15,25.42a.8.8,0,1,1-1.13-1.14L18,20.18l4.14,4.1A.8.8,0,0,1,22.14,25.41Zm4.67-3.66a.8.8,0,1,1-1.12-1.14l2.2-2.15H21.63a.8.8,0,0,1,0-1.6h6.27l-2.2-2.14a.8.8,0,1,1,1.12-1.14L31,17.67Z" class="clr-i-solid clr-i-solid-path-1" />
            <path d="M33.82,15.39H28.68L31,17.67l-4.19,4.09a.8.8,0,1,1-1.12-1.14l2.2-2.15H21.63a.8.8,0,0,1,0-1.6h6.27l-1.5-1.47H22.23a3.68,3.68,0,0,1-3-1.51L18,15.15l-4.14-4.1A.8.8,0,1,1,15,9.92l2.21,2.19V5.93a.8.8,0,0,1,1.6,0v4.49A3.65,3.65,0,0,1,19,9.89l4.22-7.31A16,16,0,1,0,34,17.67,16,16,0,0,0,33.82,15.39Zm-23.5,6.35a.8.8,0,0,1-1.13,0L5,17.67l4.19-4.09a.8.8,0,1,1,1.12,1.14l-2.2,2.14h6.27a.8.8,0,0,1,0,1.6H8.11l2.2,2.15A.8.8,0,0,1,10.32,21.74Zm11.82,3.67a.8.8,0,0,1-1.13,0L18.8,23.23V29.4a.8.8,0,0,1-1.6,0V23.23L15,25.42a.8.8,0,1,1-1.13-1.14L18,20.18l4.14,4.1A.8.8,0,0,1,22.14,25.41Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted" />
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert" />
            <path d="M33.22,12.76A7.49,7.49,0,0,1,23.32,2.6a16,16,0,1,0,9.9,10.17ZM13.86,9.92a.8.8,0,0,1,1.13,0l2.21,2.19V5.93a.8.8,0,0,1,1.6,0v6.18L21,9.92a.8.8,0,1,1,1.13,1.14L18,15.15l-4.14-4.1A.8.8,0,0,1,13.86,9.92ZM10.32,21.74a.8.8,0,0,1-1.13,0L5,17.67l4.19-4.09a.8.8,0,1,1,1.12,1.14l-2.2,2.14h6.27a.8.8,0,0,1,0,1.6H8.11l2.2,2.15A.8.8,0,0,1,10.32,21.74Zm11.82,3.67a.8.8,0,0,1-1.13,0L18.8,23.23V29.4a.8.8,0,0,1-1.6,0V23.23L15,25.42a.8.8,0,1,1-1.13-1.14L18,20.18l4.14,4.1A.8.8,0,0,1,22.14,25.41Zm4.67-3.66a.8.8,0,1,1-1.12-1.14l2.2-2.15H21.63a.8.8,0,0,1,0-1.6h6.27l-2.2-2.14a.8.8,0,1,1,1.12-1.14L31,17.67Z" class="clr-i-solid--badged clr-i-solid-path-1--badged" />
            <circle cx="30" cy="6" r="5"  class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" />
        </svg>`,

    "vm": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="can-alert can-badge has-solid">
            <title>vm</title>

            <path d="M11,5H25V8h2V5a2,2,0,0,0-2-2H11A2,2,0,0,0,9,5v6.85h2Z" class="clr-i-outline clr-i-outline-path-1" />
            <path d="M30,10H17v2h8v6h2V12h3V26H22V17a2,2,0,0,0-2-2H6a2,2,0,0,0-2,2V31a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V28h8a2,2,0,0,0,2-2V12A2,2,0,0,0,30,10ZM6,31V17H20v9H16V20H14v6a2,2,0,0,0,2,2h4v3Z" class="clr-i-outline clr-i-outline-path-2" />
            <path d="M11,5H21.87L23,3H11A2,2,0,0,0,9,5v6.85h2Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted" />
            <rect x="25.01" y="15.4" width="1.99" height="2.6" class="clr-i-outline--alerted clr-i-outline-path-2--alerted" />
            <path d="M30,15.4V26H22V17a2,2,0,0,0-2-2H6a2,2,0,0,0-2,2V31a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V28h8a2,2,0,0,0,2-2V15.4ZM6,31V17H20v9H16V20H14v6a2,2,0,0,0,2,2h4v3Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted" />
            <path d="M17,10v2h1.57A3.67,3.67,0,0,1,19,10Z" class="clr-i-outline--alerted clr-i-outline-path-4--alerted" />
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-outline--alerted clr-i-outline-path-5--alerted clr-i-alert" />
            <path d="M11,5H22.57a7.45,7.45,0,0,1,.55-2H11A2,2,0,0,0,9,5v6.85h2Z" class="clr-i-outline--badged clr-i-outline-path-1--badged" />
            <path d="M30,13.5h0V26H22V17a2,2,0,0,0-2-2H6a2,2,0,0,0-2,2V31a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V28h8a2,2,0,0,0,2-2V13.22A7.49,7.49,0,0,1,30,13.5ZM6,31V17H20v9H16V20H14v6a2,2,0,0,0,2,2h4v3Z" class="clr-i-outline--badged clr-i-outline-path-2--badged" />
            <path d="M17,12h8v6h2V12.87A7.52,7.52,0,0,1,23.66,10H17Z" class="clr-i-outline--badged clr-i-outline-path-3--badged" />
            <circle cx="30" cy="6" r="5"  class="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge" />
            <path d="M13.59,12a3.6,3.6,0,0,1,3.6-3.6H27V5a2,2,0,0,0-2-2H11A2,2,0,0,0,9,5v8.4h4.59Z" class="clr-i-solid clr-i-solid-path-1" />
            <path d="M30,10H17.19a2,2,0,0,0-2,2v1.4H20A3.6,3.6,0,0,1,23.6,17v8H22V17a2,2,0,0,0-2-2H6a2,2,0,0,0-2,2V31a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V29.6H17.19a3.6,3.6,0,0,1-3.6-3.6V20h1.6v6a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V12A2,2,0,0,0,30,10Z" class="clr-i-solid clr-i-solid-path-2" />
            <path d="M13.59,12a3.6,3.6,0,0,1,3.6-3.6h2.72L23,3H11A2,2,0,0,0,9,5v8.4h4.59Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted" />
            <path d="M17.19,10a2,2,0,0,0-2,2v1.4H19A3.68,3.68,0,0,1,19,10Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted" />
            <path d="M23.21,15.4A3.55,3.55,0,0,1,23.6,17v8H22V17a2,2,0,0,0-2-2H6a2,2,0,0,0-2,2V31a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V29.6H17.19a3.6,3.6,0,0,1-3.6-3.6V20h1.6v6a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V15.4Z" class="clr-i-solid--alerted clr-i-solid-path-3--alerted" />
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-solid--alerted clr-i-solid-path-4--alerted clr-i-alert" />
            <path d="M13.59,12a3.6,3.6,0,0,1,3.6-3.6H22.9A7.45,7.45,0,0,1,23.13,3H11A2,2,0,0,0,9,5v8.4h4.59Z" class="clr-i-solid--badged clr-i-solid-path-1--badged" />
            <path d="M30,13.5A7.49,7.49,0,0,1,23.66,10H17.19a2,2,0,0,0-2,2v1.4H20A3.6,3.6,0,0,1,23.6,17v8H22V17a2,2,0,0,0-2-2H6a2,2,0,0,0-2,2V31a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V29.6H17.19a3.6,3.6,0,0,1-3.6-3.6V20h1.6v6a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V13.22A7.49,7.49,0,0,1,30,13.5Z" class="clr-i-solid--badged clr-i-solid-path-2--badged" />
            <circle cx="30" cy="6" r="5"  class="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge" />
        </svg>`,

    "vmw-app": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="can-alert can-badge">
            <title>vmw-app</title>

            <polygon points="28 22 30 22 30 30 22 30 22 28 20 28 20 32 32 32 32 20 28 20 28 22" class="clr-i-outline clr-i-outline-path-1" />
            <polygon points="14 30 6 30 6 22 8 22 8 20 4 20 4 32 16 32 16 28 14 28 14 30" class="clr-i-outline clr-i-outline-path-2" />
            <polygon points="8 14 6 14 6 6 14 6 14 8 16 8 16 4 4 4 4 16 8 16 8 14" class="clr-i-outline clr-i-outline-path-3" />
            <polygon points="20 4 20 8 22 8 22 6 30 6 30 14 28 14 28 16 32 16 32 4 20 4" class="clr-i-outline clr-i-outline-path-4" />
            <rect x="11" y="11" width="6" height="6" class="clr-i-outline clr-i-outline-path-5" />
            <rect x="19" y="11" width="6" height="6" class="clr-i-outline clr-i-outline-path-6" />
            <rect x="11" y="19" width="6" height="6" class="clr-i-outline clr-i-outline-path-7" />
            <rect x="19" y="19" width="6" height="6" class="clr-i-outline clr-i-outline-path-8" />
            <polygon points="28 22 30 22 30 30 22 30 22 28 20 28 20 32 32 32 32 20 28 20 28 22" class="clr-i-outline--alerted clr-i-outline-path-1--alerted" />
            <polygon points="14 30 6 30 6 22 8 22 8 20 4 20 4 32 16 32 16 28 14 28 14 30" class="clr-i-outline--alerted clr-i-outline-path-2--alerted" />
            <polygon points="8 14 6 14 6 6 14 6 14 8 16 8 16 4 4 4 4 16 8 16 8 14" class="clr-i-outline--alerted clr-i-outline-path-3--alerted" />
            <rect x="11" y="11" width="6" height="6" class="clr-i-outline--alerted clr-i-outline-path-4--alerted" />
            <rect x="11" y="19" width="6" height="6" class="clr-i-outline--alerted clr-i-outline-path-5--alerted" />
            <rect x="19" y="19" width="6" height="6" class="clr-i-outline--alerted clr-i-outline-path-6--alerted" />
            <path d="M25,15.4H22.23A3.69,3.69,0,0,1,19,13.56l0-.1V17h6Z" class="clr-i-outline--alerted clr-i-outline-path-7--alerted" />
            <polygon points="22.45 4 20 4 20 8 20.14 8 22.45 4" class="clr-i-outline--alerted clr-i-outline-path-8--alerted" />
            <rect x="28" y="15.4" width="4" height="0.6" class="clr-i-outline--alerted clr-i-outline-path-9--alerted" />
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-outline--alerted clr-i-outline-path-10--alerted clr-i-alert" />
            <polygon points="28 22 30 22 30 30 22 30 22 28 20 28 20 32 32 32 32 20 28 20 28 22" class="clr-i-outline--badged clr-i-outline-path-1--badged" />
            <polygon points="14 30 6 30 6 22 8 22 8 20 4 20 4 32 16 32 16 28 14 28 14 30" class="clr-i-outline--badged clr-i-outline-path-2--badged" />
            <polygon points="8 14 6 14 6 6 14 6 14 8 16 8 16 4 4 4 4 16 8 16 8 14" class="clr-i-outline--badged clr-i-outline-path-3--badged" />
            <rect x="11" y="11" width="6" height="6" class="clr-i-outline--badged clr-i-outline-path-4--badged" />
            <rect x="11" y="19" width="6" height="6" class="clr-i-outline--badged clr-i-outline-path-5--badged" />
            <rect x="19" y="19" width="6" height="6" class="clr-i-outline--badged clr-i-outline-path-6--badged" />
            <path d="M22,6h.5a7.49,7.49,0,0,1,.28-2H20V8h2Z" class="clr-i-outline--badged clr-i-outline-path-7--badged" />
            <path d="M30,13.5V14H28v2h4V13.22A7.49,7.49,0,0,1,30,13.5Z" class="clr-i-outline--badged clr-i-outline-path-8--badged" />
            <path d="M25,11.58a7.53,7.53,0,0,1-.58-.58H19v6h6Z" class="clr-i-outline--badged clr-i-outline-path-9--badged" />
            <circle cx="30" cy="6" r="5"  class="clr-i-outline--badged clr-i-outline-path-10--badged clr-i-badge" />
        </svg>`,

    "certificate": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="can-alert can-badge has-solid">
            <title>certificate</title>

            <path d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H19l.57-.7.93-1.14L20.41,28H4V8H32l0,8.56a8.41,8.41,0,0,1,2,1.81V8A2,2,0,0,0,32,6Z" class="clr-i-outline clr-i-outline-path-1" />
            <rect x="7" y="12" width="17" height="1.6" class="clr-i-outline clr-i-outline-path-2" />
            <rect x="7" y="16" width="11" height="1.6" class="clr-i-outline clr-i-outline-path-3" />
            <rect x="7" y="23" width="10" height="1.6" class="clr-i-outline clr-i-outline-path-4" />
            <path d="M27.46,17.23a6.36,6.36,0,0,0-4.4,11l-1.94,2.37.9,3.61,3.66-4.46a6.26,6.26,0,0,0,3.55,0l3.66,4.46.9-3.61-1.94-2.37a6.36,6.36,0,0,0-4.4-11Zm0,10.68a4.31,4.31,0,1,1,4.37-4.31A4.35,4.35,0,0,1,27.46,27.91Z" class="clr-i-outline clr-i-outline-path-5" />
            <rect x="7" y="16" width="11" height="1.6" class="clr-i-outline--alerted clr-i-outline-path-1--alerted" />
            <rect x="7" y="23" width="10" height="1.6" class="clr-i-outline--alerted clr-i-outline-path-2--alerted" />
            <path d="M27.46,17.23a6.36,6.36,0,0,0-4.4,11l-1.94,2.37.9,3.61,3.66-4.46a6.26,6.26,0,0,0,3.55,0l3.66,4.46.9-3.61-1.94-2.37a6.36,6.36,0,0,0-4.4-11Zm0,10.68a4.31,4.31,0,1,1,4.37-4.31A4.35,4.35,0,0,1,27.46,27.91Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted" />
            <path d="M19,13.56A3.66,3.66,0,0,1,18.57,12H7v1.6H19.07Z" class="clr-i-outline--alerted clr-i-outline-path-4--alerted" />
            <path d="M33.68,15.4H32v1.16a8.41,8.41,0,0,1,2,1.81v-3Z" class="clr-i-outline--alerted clr-i-outline-path-5--alerted" />
            <path d="M4,28V8H20.14l1.15-2H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H19l.57-.7.93-1.14L20.41,28Z" class="clr-i-outline--alerted clr-i-outline-path-6--alerted" />
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-outline--alerted clr-i-outline-path-7--alerted clr-i-alert" />
            <rect x="7" y="12" width="17" height="1.6" class="clr-i-outline--badged clr-i-outline-path-1--badged" />
            <rect x="7" y="16" width="11" height="1.6" class="clr-i-outline--badged clr-i-outline-path-2--badged" />
            <rect x="7" y="23" width="10" height="1.6" class="clr-i-outline--badged clr-i-outline-path-3--badged" />
            <path d="M27.46,17.23a6.36,6.36,0,0,0-4.4,11l-1.94,2.37.9,3.61,3.66-4.46a6.26,6.26,0,0,0,3.55,0l3.66,4.46.9-3.61-1.94-2.37a6.36,6.36,0,0,0-4.4-11Zm0,10.68a4.31,4.31,0,1,1,4.37-4.31A4.35,4.35,0,0,1,27.46,27.91Z" class="clr-i-outline--badged clr-i-outline-path-4--badged" />
            <path d="M32,13.22v3.34a8.41,8.41,0,0,1,2,1.81v-6A7.45,7.45,0,0,1,32,13.22Z" class="clr-i-outline--badged clr-i-outline-path-5--badged" />
            <path d="M4,28V8H22.78a7.49,7.49,0,0,1-.28-2H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H19l.57-.7.93-1.14L20.41,28Z" class="clr-i-outline--badged clr-i-outline-path-6--badged" />
            <circle cx="30" cy="6" r="5"  class="clr-i-outline--badged clr-i-outline-path-7--badged clr-i-badge" />
            <path d="M19,30H4a2,2,0,0,1-2-2V8A2,2,0,0,1,4,6H32a2,2,0,0,1,2,2V18.37a8.34,8.34,0,0,0-13.49,9.79l-.93,1.14ZM7,12v1.6H24V12Zm0,5.6H18V16H7Zm0,7H17V23H7Z" class="clr-i-solid clr-i-solid-path-1" />
            <path d="M33.83,23.59a6.37,6.37,0,1,0-10.77,4.59l-1.94,2.37.9,3.61,3.66-4.46a6.26,6.26,0,0,0,3.55,0l3.66,4.46.9-3.61-1.94-2.37A6.34,6.34,0,0,0,33.83,23.59Zm-10.74,0a4.37,4.37,0,1,1,4.37,4.31A4.35,4.35,0,0,1,23.1,23.59Z" class="clr-i-solid clr-i-solid-path-2" />
            <path d="M33.83,23.59a6.37,6.37,0,1,0-10.77,4.59l-1.94,2.37.9,3.61,3.66-4.46a6.26,6.26,0,0,0,3.55,0l3.66,4.46.9-3.61-1.94-2.37A6.34,6.34,0,0,0,33.83,23.59Zm-10.74,0a4.37,4.37,0,1,1,4.37,4.31A4.35,4.35,0,0,1,23.1,23.59Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted" />
            <path d="M33.68,15.4H29.25a8.36,8.36,0,0,1,4.75,3v-3Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted" />
            <path d="M19.07,13.6H7V12H18.57A3.67,3.67,0,0,1,19,9.89L21.29,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H19l.57-.7.93-1.14A8.34,8.34,0,0,1,25.66,15.4H22.23A3.68,3.68,0,0,1,19.07,13.6ZM17,24.6H7V23H17Zm1-7H7V16H18Z" class="clr-i-solid--alerted clr-i-solid-path-3--alerted" />
            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-solid--alerted clr-i-solid-path-4--alerted clr-i-alert" />
            <path d="M27.46,17.23a6.36,6.36,0,0,0-4.4,11l-1.94,2.37.9,3.61,3.66-4.46a6.26,6.26,0,0,0,3.55,0l3.66,4.46.9-3.61-1.94-2.37a6.36,6.36,0,0,0-4.4-11Zm0,10.68a4.31,4.31,0,1,1,4.37-4.31A4.35,4.35,0,0,1,27.46,27.91Z" class="clr-i-solid--badged clr-i-solid-path-1--badged" />
            <path d="M30,13.5A7.5,7.5,0,0,1,22.5,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H19l.57-.7.93-1.14A8.34,8.34,0,0,1,34,18.37v-6A7.46,7.46,0,0,1,30,13.5ZM17,24.6H7V23H17Zm1-7H7V16H18Zm6-4H7V12H24Z" class="clr-i-solid--badged clr-i-solid-path-2--badged" />
            <circle cx="30" cy="6" r="5"  class="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge" />
        </svg>`,


    "archive": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="has-solid">
            <title>archive</title>

            <path d="M29,32H7V22H5V32a2,2,0,0,0,2,2H29a2,2,0,0,0,2-2V22H29Z" class="clr-i-outline clr-i-outline-path-1" />
            <path d="M14,24a1,1,0,0,0,1,1h6a1,1,0,0,0,0-2H15A1,1,0,0,0,14,24Z" class="clr-i-outline clr-i-outline-path-2" />
            <path d="M14,18H6V14h4a3,3,0,0,1-.68-1.87s0-.09,0-.13H5.5A1.5,1.5,0,0,0,4,13.5V20H16Z" class="clr-i-outline clr-i-outline-path-3" />
            <path d="M30.5,12H26.66s0,.09,0,.13A3,3,0,0,1,26,14h4v4H22l-2,2H32V13.5A1.5,1.5,0,0,0,30.5,12Z" class="clr-i-outline clr-i-outline-path-4" />
            <path d="M18,19.18l6.38-6.35A1,1,0,1,0,23,11.41l-4,3.95V3a1,1,0,1,0-2,0v12.4l-4-3.95a1,1,0,0,0-1.41,1.42Z" class="clr-i-outline clr-i-outline-path-5" />
            <path d="M19.41,20.6,18,22l-1.41-1.4L16,20H5V32a2,2,0,0,0,2,2H29a2,2,0,0,0,2-2V20H20ZM22,24a1,1,0,0,1-1,1H15a1,1,0,0,1,0-2h6A1,1,0,0,1,22,24Z" class="clr-i-solid clr-i-solid-path-1" />
            <path d="M30.5,12H26.66s0,.09,0,.13a3,3,0,0,1-.88,2.12L22,18H32V13.5A1.5,1.5,0,0,0,30.5,12Z" class="clr-i-solid clr-i-solid-path-2" />
            <path d="M10.2,14.25a3,3,0,0,1-.88-2.12s0-.09,0-.13H5.5A1.5,1.5,0,0,0,4,13.5V18H14Z" class="clr-i-solid clr-i-solid-path-3" />
            <path d="M18,19.18l6.38-6.35A1,1,0,1,0,23,11.41l-4,3.95V3a1,1,0,1,0-2,0v12.4l-4-3.95a1,1,0,0,0-1.41,1.42Z" class="clr-i-solid clr-i-solid-path-4" />
        </svg>`,

    "unarchive": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="has-solid">
            <title>unarchive</title>

            <path d="M29,32H7V22H5V32a2,2,0,0,0,2,2H29a2,2,0,0,0,2-2V22H29Z" class="clr-i-outline clr-i-outline-path-1" />
            <path d="M14,24a1,1,0,0,0,1,1h6a1,1,0,0,0,0-2H15A1,1,0,0,0,14,24Z" class="clr-i-outline clr-i-outline-path-2" />
            <path d="M15,18H6V14h9V12H5.5A1.5,1.5,0,0,0,4,13.5V20H15.78A3,3,0,0,1,15,18Z" class="clr-i-outline clr-i-outline-path-3" />
            <path d="M30.5,12H21v2h9v4H21a3,3,0,0,1-.78,2H32V13.5A1.5,1.5,0,0,0,30.5,12Z" class="clr-i-outline clr-i-outline-path-4" />
            <path d="M13,9.55,17,5.6V18a1,1,0,1,0,2,0V5.6l4,3.95a1,1,0,1,0,1.41-1.42L18,1.78,11.61,8.13A1,1,0,0,0,13,9.55Z" class="clr-i-outline clr-i-outline-path-5" />
            <path d="M18,21a3,3,0,0,1-2.22-1H5V32a2,2,0,0,0,2,2H29a2,2,0,0,0,2-2V20H20.21A3,3,0,0,1,18,21Zm4,3a1,1,0,0,1-1,1H15a1,1,0,0,1,0-2h6A1,1,0,0,1,22,24Z" class="clr-i-solid clr-i-solid-path-1" />
            <path d="M15,12H5.5A1.5,1.5,0,0,0,4,13.5V18H15Z" class="clr-i-solid clr-i-solid-path-2" />
            <path d="M30.5,12H21v6H32V13.5A1.5,1.5,0,0,0,30.5,12Z" class="clr-i-solid clr-i-solid-path-3" />
            <path d="M13,9.55,17,5.6V18a1,1,0,1,0,2,0V5.6l4,3.95a1,1,0,1,0,1.41-1.42L18,1.78,11.61,8.13A1,1,0,0,0,13,9.55Z" class="clr-i-solid clr-i-solid-path-4" />
        </svg>`,

    "connect": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="has-solid">
            <title>connect</title>

            <path d="M34,17H28.23A6.25,6.25,0,0,0,22,12H14.15a6.25,6.25,0,0,0-6.21,5H2v2H7.93a6.22,6.22,0,0,0,6.22,5H22a6.22,6.22,0,0,0,6.22-5H34ZM17.08,22H14.15a4.17,4.17,0,0,1-4.31-4,4.17,4.17,0,0,1,4.31-4h2.94ZM22,22H19V14h3a4.17,4.17,0,0,1,4.31,4A4.17,4.17,0,0,1,22,22Z" class="clr-i-outline clr-i-outline-path-1" />
            <path d="M17,12H14.15a6.25,6.25,0,0,0-6.21,5H2v2H7.93a6.22,6.22,0,0,0,6.22,5H17Z" class="clr-i-solid clr-i-solid-path-1" />
            <path d="M28.23,17A6.25,6.25,0,0,0,22,12H19V24h3a6.22,6.22,0,0,0,6.22-5H34V17Z" class="clr-i-solid clr-i-solid-path-2" />
        </svg>`,

    "disconnect": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="has-solid">
            <title>disconnect</title>

            <path d="M12.17,6A6.21,6.21,0,0,0,6,11H2.13v2H6a6.23,6.23,0,0,0,6.21,5H17V6ZM15.1,16H12.17a4.2,4.2,0,0,1-4.31-4,4.17,4.17,0,0,1,4.31-4H15.1Z" class="clr-i-outline clr-i-outline-path-1" />
            <path d="M33.92,23H30.14a6.25,6.25,0,0,0-6.21-5H19v2H14a1,1,0,1,0,0,2h5v4H14a1,1,0,0,0-1,1,1,1,0,0,0,1,1h5v2h4.94a6.23,6.23,0,0,0,6.22-5h3.76Zm-10,5H21V20h2.94a4.17,4.17,0,0,1,4.31,4A4.17,4.17,0,0,1,23.94,28Z" class="clr-i-outline clr-i-outline-path-2" />
            <path d="M12,6a6.21,6.21,0,0,0-6.21,5H2v2H5.83A6.23,6.23,0,0,0,12,18H17V6Z" class="clr-i-solid clr-i-solid-path-1" />
            <path d="M33.79,23H30.14a6.25,6.25,0,0,0-6.21-5H19v2H14a1,1,0,0,0-1,1,1,1,0,0,0,1,1h5v4H14a1,1,0,0,0-1,1,1,1,0,0,0,1,1h5v2h4.94a6.23,6.23,0,0,0,6.22-5h3.64Z" class="clr-i-solid clr-i-solid-path-2" />
        </svg>`,

    "link": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>link</title>

            <path d="M17.6,24.32l-2.46,2.44a4,4,0,0,1-5.62,0,3.92,3.92,0,0,1,0-5.55l4.69-4.65a4,4,0,0,1,5.62,0,3.86,3.86,0,0,1,1,1.71A2,2,0,0,0,21.1,18l1.29-1.28a5.89,5.89,0,0,0-1.15-1.62,6,6,0,0,0-8.44,0L8.1,19.79a5.91,5.91,0,0,0,0,8.39,6,6,0,0,0,8.44,0l3.65-3.62c-.17,0-.33,0-.5,0A8,8,0,0,1,17.6,24.32Z" class="clr-i-outline clr-i-outline-path-1" />
            <path d="M28.61,7.82a6,6,0,0,0-8.44,0l-3.65,3.62c.17,0,.33,0,.49,0h0a8,8,0,0,1,2.1.28l2.46-2.44a4,4,0,0,1,5.62,0,3.92,3.92,0,0,1,0,5.55l-4.69,4.65a4,4,0,0,1-5.62,0,3.86,3.86,0,0,1-1-1.71,2,2,0,0,0-.28.23l-1.29,1.28a5.89,5.89,0,0,0,1.15,1.62,6,6,0,0,0,8.44,0l4.69-4.65a5.92,5.92,0,0,0,0-8.39Z" class="clr-i-outline clr-i-outline-path-2" />
        </svg>`,

    "unlink": `
        <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>unlink</title>

            <path d="M5,5,3.59,6.41l9,9L8.1,19.79a5.91,5.91,0,0,0,0,8.39,6,6,0,0,0,8.44,0L21,23.78l8.63,8.63L31,31ZM15.13,26.76a4,4,0,0,1-5.62,0,3.92,3.92,0,0,1,0-5.55L14,16.79l5.58,5.58Z" class="clr-i-outline clr-i-outline-path-1" />
            <path d="M21.53,9.22a4,4,0,0,1,5.62,0,3.92,3.92,0,0,1,0,5.55l-4.79,4.76L23.78,21l4.79-4.76a5.92,5.92,0,0,0,0-8.39,6,6,0,0,0-8.44,0l-4.76,4.74L16.78,14Z" class="clr-i-outline clr-i-outline-path-2" />
        </svg>`,


};

Object.defineProperty(technologyShapes, "analytics", descriptorConfig(technologyShapes["line-chart"]));
Object.defineProperty(technologyShapes, "server", descriptorConfig(technologyShapes["host"]));
Object.defineProperty(technologyShapes, "command", descriptorConfig(technologyShapes["terminal"]));
Object.defineProperty(technologyShapes, "mobile-phone", descriptorConfig(technologyShapes["mobile"]));
Object.defineProperty(technologyShapes, "license", descriptorConfig(technologyShapes["certificate"]));

if (typeof window !== "undefined" && window.hasOwnProperty("ClarityIcons")) {

    window["ClarityIcons"].add(technologyShapes);
}

export { technologyShapes as TechnologyShapes };
