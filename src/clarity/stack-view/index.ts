import {Type} from "@angular/core";
import {StackView, StackViewCustomTags} from "./stack-view";
import {StackHeader} from "./stack-header";
import {StackBlock} from "./stack-block";
import {StackInput} from "./stack-input";
import {StackSelect} from "./stack-select";

export const STACK_VIEW_DIRECTIVES: Type<any>[] = [
    StackView,
    StackHeader,
    StackBlock,
    StackViewCustomTags,
    /**
     * Undocumented experimental feature: inline editing.
     */
    StackInput,
    StackSelect
    /**
     * End of undocumented experimental feature.
     */
];