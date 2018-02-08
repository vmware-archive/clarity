/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild } from "@angular/core";
import { ClrWizard, ClrWizardPage, ÇlrFocusTrapTracker } from "@clr/angular";
import { DisableFocusTrap } from "../../utils/disable-focus-trap";


@Component({
    selector: "clr-wizard-design-demo",
    templateUrl: "./wizard-design.demo.html",
    host: {
        "[class.in-place-takeover]": "true",
        "[class.is-large]": "true"
    },
    providers: [{provide: ÇlrFocusTrapTracker, useClass: DisableFocusTrap}],
    styles: [
        `
            .wizdemo-color-block-row {
                margin-left: 0 !important;
                margin-right: 0 !important;
            }
        `,
        `
            .wizdemo-color-block {
                float: left;
                width: 80px;
                height: 80px;
                background-color: black;
                border: 3px solid white;
                box-shadow: inset 5px -5px 0px 0px white, inset -5px 5px 0px 0px white;
                cursor: pointer;
            }
        `,
        `
            .wizdemo-color-block.is-icon {
                background: none;
                text-align: center;
                padding-top: 12px;
            }
        `,
        `
            .wizdemo-color-block.is-icon clr-icon {
                height: 48px;
                width: 48px;
            }
        `,
        `
            .wizdemo-color-block.is-icon.active {
                border-color: #fff;
                color: #fff;
                background: #007cbb;
            }
        `,
        `
            .wizdemo-color-block.is-icon.active:hover {
                border-color: #007cbb;
            }
        `,
        `
            .wizdemo-color-block.is-icon.disabled {
                opacity: 0.4;
                cursor: not-allowed;
            }
        `,
        `
            .wizdemo-color-block.is-icon.disabled:hover {
                border-color: #fff;
            }
        `,
        `
            .wizdemo-color-block:hover {
                border-color: #D9E4EA;
            }
        `,
        `
            .wizdemo-color-block-wrapper {
                padding: 5px 0;
            }
        `,
        `
            .wizdemo-color-block.active {
                border-color: #565656;
            }
        `
    ]
})
export class WizardDesignDemo {
    @ViewChild("wizard") wizard: ClrWizard;
    @ViewChild("number") numberField: any;

    open: boolean = true;

    reset(val: boolean): void {
        this.open = val;

        if (val === false) {
            this.model.name = "";
            this.model.favorite = "";
            this.model.number = "";
            this.model.ht_feet = "1 ft.";
            this.model.ht_inches = "0 in.";
            this.model.weight = "";
            this.model.gender = "Male";
            this.model.color = "blue";
            this.model.power = "happy-face";
            this.model.weakness = "lightbulb";
            this.model.ranking = 12;

            this.wizard.reset();
        }
    }

    colorList = [
        "blue",
        "red",
        "black",
        "orange",
        "limegreen",
        "purple",
        "fuchsia",
        "indigo"
    ];

    powerSources = [
        "happy-face",
        "cloud",
        "lightbulb",
        "eye",
        "bolt",
        "bullseye",
        "star",
        "hourglass",
        "talk-bubbles",
        "shield-x",
        "upload-cloud",
        "sad-face",
        "balance",
        "share",
        "wifi",
        "dashboard",
        "flame"
    ];

    model = {
        name: "",
        favorite: "",
        number: "",
        ht_feet: "1 ft.",
        ht_inches: "0 in.",
        weight: "",
        gender: "Male",
        color: "blue",
        power: "happy-face",
        weakness: "lightbulb",
        ranking: 12
    };

    get formPageOneValid(): boolean {
        return this.model.name !== "" && this.model.weight !== "";
    }

    get formPageThreeValid(): boolean {
        return this.model.power !== this.model.weakness;
    }

    get textsplanationOfPower(): string {
        return this.powerText[this.powerSources.indexOf(this.model.power)];
    }

    get textsplanationOfWeakness(): string {
        return this.weaknessText[this.powerSources.indexOf(this.model.weakness)];
    }

    get colorLabel(): string {
        return this.colorLabels[this.colorList.indexOf(this.model.color)];
    }

    get powerLabel(): string {
        return this.shortPowerLabels[this.powerSources.indexOf(this.model.power)];
    }

    get weaknessLabel(): string {
        return this.shortPowerLabels[this.powerSources.indexOf(this.model.weakness)];
    }

    powerText = [
        "has the power of boundless optimism",
        "has the power to control the weather",
        "has light powers",
        "can shoot lasers out of its eyes",
        "can control lightning",
        "has the power of archery",
        "has the power of fame and likeability",
        "has the power of time management",
        "has the power of linguistics",
        "has protective powers",
        "can fly",
        "has the power of ennui",
        "has a law degree",
        "can make duplicates of itself",
        "has the power of wifi",
        "can run at superspeed",
        "can shoot flames out of the side of its face"
    ];

    weaknessText = [
        "is hopelessly optimistic",
        "is afraid of clouds",
        "is afraid of the dark",
        "is afraid of eye-lasers",
        "is afraid of lightning",
        "has very bad aim",
        "is consumed with achieving fame and glory",
        "can only perform one task at a time",
        "cannot understand what you say",
        "is squishy",
        "cannot fly but thinks it can",
        "suffers from depression",
        "is a wanted fugitive",
        "has an evil twin",
        "requires a wifi connection",
        "is slower than a turtle",
        "is afraid of fire"
    ];

    shortPowerLabels = [
        "Optimism",
        "Weather",
        "Light",
        "Eye Lasers",
        "Lightning",
        "Archery/Marksmanship",
        "Fame",
        "Time Management",
        "Language",
        "Armor/Protection",
        "Flight",
        "Ennui",
        "Law",
        "Duplicate",
        "Wifi",
        "Speed",
        "Fire"
    ];

    colorLabels = [
        "Blue",
        "Red",
        "Black",
        "Orange",
        "Lime Green",
        "Purple",
        "Fuchsia",
        "Indigo"
    ];

    showPowerError = false;

    setPower(pwrSource: string): void {
        if (!pwrSource) {
            return;
        }

        if (pwrSource === this.model.weakness) {
            this.showPowerError = true;
            return;
        }

        this.model.power = pwrSource;
        this.showPowerError = false;
    }

    setWeakness(pwrSource: string): void {
        if (!pwrSource) {
            return;
        }

        if (pwrSource === this.model.power) {
            this.showPowerError = true;
            return;
        }

        this.model.weakness = pwrSource;
        this.showPowerError = false;
    }

    @ViewChild("pageOne") pageOne: ClrWizardPage;

    get pageOneTitle(): string {
        if (this.pageOne.completed) {
            return "Name: " + this.model.name;
        }
        return "Basic Information";
    }

    @ViewChild("pageTwo") pageTwo: ClrWizardPage;

    get pageTwoTitle(): string {
        if (this.pageTwo.completed) {
            return "Color: " + this.colorLabel;
        }
        return "Color";
    }

    @ViewChild("pageThree") pageThree: ClrWizardPage;

    get pageThreeTitle(): string {
        if (this.pageThree.completed) {
            return "Power: " + this.powerLabel;
        }
        return "Power";
    }

    @ViewChild("pageFour") pageFour: ClrWizardPage;

    get pageFourTitle(): string {
        if (this.pageFour.completed) {
            return "Weakness: " + this.weaknessLabel;
        }
        return "Weakness";
    }

    createRanking(): void {
        this.model.ranking = Math.floor(Math.random() * (100 - 12)) + 12;;
    }

    get textsplanationOfRanking(): string {
        const prefix = "Your pokemon ";
        const ranking = this.model.ranking;
        let returnsplain = "";

        switch (true) {
            case ranking < 15:
                returnsplain = "is weak and sickly. It will suffer a short lifetime of " +
                    "exorbitant veterinary bills, humiliation, and defeat.";
                break;
            case ranking < 24:
                returnsplain = "is timid and soft. It will be a lovable pet whose loss will " +
                    "create a heartbreaking vacuum in your soul when it is destroyed in combat " +
                    "by its superiors.";
                break;
            case ranking < 51:
                returnsplain = "is average in every way. Its survival depends entirely " +
                    "on your competency as a trainer and blind luck. Eventually, it will meet " +
                    "its doom and reveal the weakness of your instruction.";
                break;
            case ranking < 63:
                returnsplain = "has a fighting chance. With proper training, this creature " +
                    "may be capable of facing greater foes and earning glory for you.";
                break;
            case ranking < 79:
                returnsplain = "is a superior specimen. It will gain you much glory. " +
                    "Victory is assured!";
                break;
            case ranking < 91:
                returnsplain = "is a uniquely powerful creature. It will dominate all but " +
                    "the most legendary of opponents and crush your enemies! Its innate " +
                    "superiority will bring you much glory and renown.";
                break;
            case ranking < 101:
                returnsplain = "is one of the most powerful creatures of its kind. " +
                    "It will dominate any and all opponents until such time as it grows " +
                    "bored of victory. It will annihilate all in its path! Victory is yours " +
                    "for many lifetimes. Congratulations on creating such a formidable pokemon";
                break;
        };

        return prefix + returnsplain;
    }

    get powerRankingPunctuation(): string {
        return (this.model.ranking > 62) ? "!" : ".";
    }
}
