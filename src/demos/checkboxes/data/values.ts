/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Server } from "./server";

export const SERVERS: Server[] = [
    {
        ip: "192.168.1.42",
        running: false,
        name: "Crystal View",
        disabled: true,
        inline: true
    }, {
        ip: "192.268.1.19",
        running: true,
        name: "Turbulent Foam",
        disabled: false,
        inline: true
    }, {
        ip: "192.268.1.11",
        running: false,
        name: "Bright Sunshine",
        disabled: false,
        inline: false
    }, {
        ip: "192.268.1.3",
        running: true,
        name: "Scary Numbers",
        disabled: true,
        inline: false
    }, {
        ip: "192.268.1.180",
        running: false,
        name: "Loud Silence",
        disabled: false,
        inline: false
    },
];
