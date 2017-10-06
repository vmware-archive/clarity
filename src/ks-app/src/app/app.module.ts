/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
    ClarityModule,
    ClrAlertModule,
    ClrButtonGroupModule,
    ClrDataModule,
    ClrFormsModule,
    ClrIconModule,
    ClrLayoutModule,
    ClrModalModule,
    ClrPopoverModule,
    ClrWizardModule
} from "clarity-angular";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {KSButtonGroups} from "./containers/buttons/button-groups.component";
import {KSButtons} from "./containers/buttons/buttons.component";
import {KSCards} from "./containers/cards/cards.component";
import {KSColors} from "./containers/colors/colors.component";
import {KSDatagrid} from "./containers/data/datagrid.component";
import {FakeLoader} from "./containers/data/fake-loader";
import {KSStackView} from "./containers/data/stackview.component";
import {KSTreeView} from "./containers/data/tree-view.component";
import {KSAlerts} from "./containers/emphasis/alerts.component";
import {KSBadges} from "./containers/emphasis/badges.component";
import {KSLabels} from "./containers/emphasis/labels.component";
import {KSCheckboxes} from "./containers/forms/checkboxes.component";
import {KSForms} from "./containers/forms/forms.component";
import {KSInputs} from "./containers/forms/inputs.component";
import {KSRadios} from "./containers/forms/radios.component";
import {KSSelects} from "./containers/forms/selects.component";
import {KSLists} from "./containers/lists/lists.component";
import {KSLogin} from "./containers/login/login.component";
import {KSModals} from "./containers/modal/modals.component";
import {KSAbbeyRoadDemo} from "./containers/nav/beatles/abbey-road";
import {KSBeatlesDemo} from "./containers/nav/beatles/beatles";
import {KSRevolverDemo} from "./containers/nav/beatles/revolver";
import {KSRubberSoulDemo} from "./containers/nav/beatles/rubber-soul";
import {KSTabs} from "./containers/nav/tabs.component";
import {KSDayAndAgeDemo} from "./containers/nav/the-killers/day-and-age";
import {KSHotFussDemo} from "./containers/nav/the-killers/hot-fuss";
import {KSSamsTownDemo} from "./containers/nav/the-killers/sams-town";
import {KSKillersDemo} from "./containers/nav/the-killers/the-killers";
import {KSVerticalNav} from "./containers/nav/vertical-nav.component";
import {KSWikipediaDemo} from "./containers/nav/wikipedia/wikipedia";
import {KSDropdowns} from "./containers/popover/dropdowns.component";
import {KSSignposts} from "./containers/popover/signposts.component";
import {KSTooltips} from "./containers/popover/tooltips.component";
import {KSProgressBars} from "./containers/progress/progress-bars.component";
import {KSSpinners} from "./containers/spinners/spinners.component";
import {KSTables} from "./containers/tables/tables.component";
import {KSTypography} from "./containers/typography/typography.component";
import {KSWizards} from "./containers/wizard/wizards.component";

@NgModule({
    declarations: [
        AppComponent,   KSAlerts,         KSBadges,        KSButtons,       KSButtonGroups,  KSColors,
        KSDatagrid,     KSStackView,      KSTreeView,      KSLabels,        KSCheckboxes,    KSForms,
        KSInputs,       KSLists,          KSRadios,        KSSelects,       KSModals,        KSTabs,
        KSVerticalNav,  KSDropdowns,      KSSignposts,     KSTooltips,      KSTypography,    KSWizards,
        KSCards,        FakeLoader,       KSLogin,         KSWikipediaDemo, KSAbbeyRoadDemo, KSBeatlesDemo,
        KSRevolverDemo, KSRubberSoulDemo, KSDayAndAgeDemo, KSSamsTownDemo,  KSKillersDemo,   KSHotFussDemo,
        KSProgressBars, KSSpinners,       KSTables,        KSTooltips
    ],
    imports: [
        BrowserModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, ClarityModule,
        ClrLayoutModule,  // Includes MainContainer, Navigation, & Tabs
        ClrIconModule, ClrButtonGroupModule, ClrDataModule, ClrFormsModule, ClrAlertModule, ClrPopoverModule,
        ClrModalModule, ClrWizardModule, AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
