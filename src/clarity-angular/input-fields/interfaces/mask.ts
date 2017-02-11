/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export interface Mask {
    /*
	 * isValid is true if the mask is successful
	 */
    isValid: boolean;

    /*
	 * Contains the validation error message, if the isValid flag is set to false
	 */
    validationMessage: string;

	/*
	 * Applies mask to the input value and returns the masked value
	 */
    applyMask(mask: string, inputValue: string): string;
}

