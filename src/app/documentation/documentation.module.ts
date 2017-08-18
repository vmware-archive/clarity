import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {ClarityModule} from "clarity-angular";

import {UtilsModule} from "../utils/utils.module";
import {DocumentationRoutingModule} from "./documentation-routing.module";
import {DocumentationComponent} from "./documentation.component";
import {DocumentationNavLinksComponent} from "./documentation-nav-links.component";
import {ComponentStatusComponent} from "./component-status/component-status.component";
import {NewLayoutAlertComponent} from "./utils/new-layout-alert.component";
import {StatusDotComponent} from "./component-status/status-dot.component";
import {BadgesDemoModule} from "./demos/badges/badges.demo.module";
import {AlertsDemoModule} from "./demos/alert/alerts.demo.module";
import {AppLayoutDemoModule} from "./demos/app-layout/app-layout.demo.module";
import {ButtonsDemoModule} from "./demos/buttons/buttons.demo.module";
import {CardsDemoModule} from "./demos/card/cards.demo.module";
import {ListsDemoModule} from "./demos/lists/lists.demo.module";
import {ProgressBarsDemoModule} from "./demos/progress-bars/progress-bars.demo.module";
import {ButtonGroupDemoModule} from "./demos/button-group/button-group.demo.module";
import {CheckboxesDemoModule} from "./demos/checkboxes/checkboxes.demo.module";
import {CodeHighlightDemoModule} from "./demos/code/code-highlight.demo.module";
import {ColorDemoModule} from "./demos/color/color.demo.module";
import {DatagridDemoModule} from "./demos/datagrid/datagrid.demo.module";
import {FormsDemoModule} from "./demos/forms/forms.demo.module";
import {GridDemoModule} from "./demos/grid/grid.demo.module";
import {DropdownDemoModule} from "./demos/dropdown/dropdown.demo.module";
import {LabelsDemoModule} from "./demos/labels/labels.demo.module";
import {InputFieldsDemoModule} from "./demos/input-fields/input-fields.demo.module";
import {LoginDemoModule} from "./demos/login/login.demo.module";
import {ModalDemoModule} from "./demos/modal/modal.demo.module";
import {NavDemoModule} from "./demos/nav/nav.demo.module";
import {RadiosDemoModule} from "./demos/radios/radios.demo.module";
import {SelectsDemoModule} from "./demos/selects/selects.demo.module";
import {SpinnersDemoModule} from "./demos/spinners/spinners.demo.module";
import {StackViewDemoModule} from "./demos/stack-view/stack-view.demo.module";
import {HeaderDemoModule} from "./demos/header/header.demo.module";
import {SidenavDemoModule} from "./demos/sidenav/sidenav.demo.module";
import {TablesDemoModule} from "./demos/tables/tables.demo.module";
import {TabsDemoModule} from "./demos/tabs/tabs.demo.module";
import {TogglesDemoModule} from "./demos/toggles/toggles.demo.module";
import {TooltipsDemoModule} from "./demos/tooltips/tooltips.demo.module";
import {TreeDemoModule} from "./demos/tree-view/tree-view.demo.module";
import {TypographyDemoModule} from "./demos/typography/typography.demo.module";
import {WizardDemoModule} from "./demos/wizard/wizard.demo.module";
import {SignpostDemoModule} from "./demos/signposts/signpost.demo.module";
import {VerticalNavDemoModule} from "./demos/vertical-nav/vertical-nav.demo.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        UtilsModule,
        ClarityModule.forChild(),
        AlertsDemoModule,
        AppLayoutDemoModule,
        BadgesDemoModule,
        ButtonsDemoModule,
        ButtonGroupDemoModule,
        CardsDemoModule,
        CheckboxesDemoModule,
        CodeHighlightDemoModule,
        ColorDemoModule,
        DatagridDemoModule,
        DropdownDemoModule,
        FormsDemoModule,
        GridDemoModule,
        HeaderDemoModule,
        InputFieldsDemoModule,
        LabelsDemoModule,
        ListsDemoModule,
        LoginDemoModule,
        ModalDemoModule,
        NavDemoModule,
        RadiosDemoModule,
        ProgressBarsDemoModule,
        SelectsDemoModule,
        SidenavDemoModule,
        SignpostDemoModule,
        SpinnersDemoModule,
        StackViewDemoModule,
        TablesDemoModule,
        TabsDemoModule,
        TogglesDemoModule,
        TooltipsDemoModule,
        TreeDemoModule,
        TypographyDemoModule,
        VerticalNavDemoModule,
        WizardDemoModule,
        DocumentationRoutingModule
    ],
    declarations: [
        DocumentationComponent,
        DocumentationNavLinksComponent,
        ComponentStatusComponent,
        StatusDotComponent,
        NewLayoutAlertComponent
    ]
})
export class DocumentationModule {
}
