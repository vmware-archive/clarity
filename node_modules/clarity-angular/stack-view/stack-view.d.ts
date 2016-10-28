import { EventEmitter } from "@angular/core";
export declare class StackView {
    /**
     * Undocumented experimental feature: inline editing.
     */
    editable: boolean;
    save: EventEmitter<void>;
    private _editMode;
    editingChange: EventEmitter<boolean>;
    editing: boolean;
}
export declare class StackViewCustomTags {
}
