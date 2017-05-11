/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Mask} from "../interfaces/mask";
import {MaskDefinition} from "../interfaces/mask-definition";

export class DataMask <T extends MaskDefinition> implements Mask {

    private EMPTY_CHAR: string = "";

    private OPTIONAL_CHAR: string;

    private _mask: string;

    private _inputValue: string;

    private _maskedValue: string[];

    private _maskDefinition: T;

    isValid: boolean;

    validationMessage: string;

    constructor(maskDefinition: T) {
        this._maskDefinition = maskDefinition;
    }

    applyMask(mask: string, inputValue: string): string {
        this._mask = mask;
        this._inputValue = inputValue;
        this._maskedValue = [];
        this.OPTIONAL_CHAR = this._maskDefinition.matchPattern["OPTIONAL_CHAR"];
        this.mapInputWithMaskDefinition(mask, inputValue);

        return this._maskedValue.join(this.EMPTY_CHAR);
    }

    private mapInputWithMaskDefinition(maskChars: string,
                                       inputValueChars: string): boolean {
        //base case
        if (maskChars.length === 0 || inputValueChars.length === 0) {
            this.isValid = true;
            this.validationMessage = "";
            return true;
        }
        let mask = maskChars.charAt(0);
        let inputChar = inputValueChars.charAt(0);
        let regexPattern = this._maskDefinition.matchPattern[mask];
        //if the first character is optional character
        if (maskChars.charAt(1) === this.OPTIONAL_CHAR) {
            let tmpMaskedValue: string[] =  this._maskedValue.slice();
            //include the optional char and validate
            let isValid: boolean = this.mapInputWithMaskDefinition((maskChars.charAt(0) + maskChars.substring(2)),
                                                                   inputValueChars.substring(0));
            //if invalidate exclude the optional char and validate
            if (!isValid) {
                //store the temp mask val to take the BEST match incase both validations fail
                let tmpMask: string[] = this._maskedValue.slice();
                this._maskedValue = tmpMaskedValue;
                isValid = this.mapInputWithMaskDefinition(maskChars.substring(2),
                                                          inputValueChars.substring(0));
                if (!isValid) {
                    //if there are invalids, select the BEST match possible by comparing
                    //the lengths
                    this._maskedValue = (tmpMask.length >= this._maskedValue.length) ?
                                        tmpMask :
                                        this._maskedValue;
                }
            }

            return isValid;
        } else if (mask === inputChar) {
            this._maskedValue.push(mask);
            return this.mapInputWithMaskDefinition(maskChars.substring(1),
                                                   inputValueChars.substring(1));
        } else if (regexPattern && regexPattern.test(inputChar)) {
            this._maskedValue.push(inputChar);
            return this.mapInputWithMaskDefinition(maskChars.substring(1),
                                                   inputValueChars.substring(1));
        } else if (!regexPattern) {
            this._maskedValue.push(mask);
            return this.mapInputWithMaskDefinition(maskChars.substring(1),
                                                   inputValueChars.substring(0));
        } else {
            //stop the processing, if the regex does not match, log the error message
            //catch only the last validation error message
            this.isValid = false;
            if (!this.validationMessage) {
                this.validationMessage = "Input character '" + inputChar + "' does not match the mask pattern";
            }
            return false;
        }
    }
}