/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export interface MaskDefinition {
    matchPattern: any;
}

/**
 * Specification for the mask definition pattern
 * Currently supported patterns are, 
 * a. '#' to represent the numbers
 * b. 'A' to represent any character in a-z and A-Z
 * c. '*' to represent any character in a-z, A-Z and 0-9 
 */
export class DefaultMaskDefinition implements MaskDefinition {
    matchPattern: any = {
        "#" : /^[0-9]?$/, // to indicate only numbers
        "9" : /^[0-9]?$/, // to indicate only numbers
        "A" : /^[a-zA-Z]?$/, // to indicate any character a-z and A-Z
        "*" : /^[a-zA-z0-9]?$/, // to indicate any character a-z, A-Z and 0-9
        "OPTIONAL_CHAR" : "?"
    };
};