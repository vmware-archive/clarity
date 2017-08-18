import { Component, OnInit, Input } from '@angular/core';
import { ClarityIcons } from 'clarity-icons'

import { COMMON_PATH } from '../../icons.component';

@Component({
    selector: 'icon-detail-card',
    templateUrl: './icon-detail-card.component.html',
    styleUrls: ['./icon-detail-card.component.scss']
})
export class IconDetailCardComponent {

    constructor() { }

    commonPath = COMMON_PATH;

    private _clrIcon: string;
    private _clrIconSet: string;
    private _clrIconTemplate: string;
    private _clrIconAliases: string[];
    private _activeVariantClasses: string;

    get clrIconSet(): string {
        return this._clrIconSet;
    }

    get activeVariantClasses(): string {
        return this._activeVariantClasses;
    }

    set activeVariantClasses(value: string) {
        this._activeVariantClasses = value;
    }

    variants: string[];

    private _canAlert: boolean;
    private _canBadge: boolean;
    private _hasSolid: boolean;

    get canAlert(): boolean {
        return this._canAlert;
    }

    set canAlert(value: boolean) {
        if (value) {
            this.variants.push("has-alert");
        }
        this._canAlert = value;
    }

    get canBadge(): boolean {
        return this._canBadge;
    }

    set canBadge(value: boolean) {
        if (value) {
            this.variants.push("has-badge");
        }
        this._canBadge = value;
    }

    get hasSolid(): boolean {
        return this._hasSolid;
    }

    set hasSolid(value: boolean) {

        if (value) {
            this.variants.push("is-solid");

            if (this.variants.indexOf("has-alert") > -1) {
                this.variants.push("has-alert is-solid");
            }

            if (this.variants.indexOf("has-badge") > -1) {
                this.variants.push("has-badge is-solid");
            }
        }
        this._hasSolid = value;
    }

    get clrIcon(): string {
        return this._clrIcon;
    }

    get clrIconAliases(): string[] {
        return this._clrIconAliases || [];
    }

    @Input() set clrIcon(value: string) {

        this._activeVariantClasses = "";
        this.variants = [];
        this._clrIcon = value;
        this._clrIconTemplate = ClarityIcons.get(this._clrIcon);
        this.canAlert = this._clrIconTemplate.indexOf("can-alert") > -1;
        this.canBadge = this._clrIconTemplate.indexOf("can-badge") > -1;
        this.hasSolid = this._clrIconTemplate.indexOf("has-solid") > -1;
    }

    @Input() set clrIconSet(setName: string) {
        this._clrIconSet = setName;
    };

    @Input() set clrIconAliases(aliases: string[]) {
        this._clrIconAliases = aliases;
    };

    get downloadPath() {

        let variant = {
            "": "-line",
            "has-alert": "-outline-alerted",
            "has-badge": "-outline-badged",
            "is-solid": "-solid",
            "has-alert is-solid": "-solid-alerted",
            "has-badge is-solid": "-solid-badged"
        };


        return `${this.commonPath}${this.clrIconSet}/${this.clrIcon}${variant[this.activeVariantClasses]}.svg`;

    }


}
