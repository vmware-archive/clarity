import { EventEmitter } from "@angular/core";
export declare class Alert {
    isSmall: boolean;
    type: string;
    closable: boolean;
    isAppLevel: boolean;
    _closed: boolean;
    _closedChanged: EventEmitter<boolean>;
    private alertTypes;
    close(): void;
    open(): void;
    readonly alertType: string;
}
