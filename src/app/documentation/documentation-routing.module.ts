import {NgModule}             from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {DocumentationComponent} from "./documentation.component";
import {ComponentStatusComponent} from "./component-status/component-status.component";
import {BadgesDemo} from "./demos/badges/badges.demo";
import {AlertsDemo} from "./demos/alert/alerts.demo";
import {AppLayoutDemo} from "./demos/app-layout/app-layout.demo";
import {ButtonsDemo} from "./demos/buttons/buttons.demo";
import {CardsDemo} from "./demos/card/cards.demo";
import {ListsDemo} from "./demos/lists/lists.demo";
import {ProgressBarsDemo} from "./demos/progress-bars/progress-bars.demo";
import {ButtonGroupDemo} from "./demos/button-group/button-group.demo";
import {CheckboxesDemo} from "./demos/checkboxes/checkboxes.demo";
import {CodeHighlightDemo} from "./demos/code/code.demo";
import {ColorDemo} from "./demos/color/color.demo";
import {DatagridDemo} from "./demos/datagrid/datagrid.demo";
import {DropdownsDemo} from "./demos/dropdown/dropdown.demo";
import {FormsDemo} from "./demos/forms/forms.demo";
import {GridDemo} from "./demos/grid/grid.demo";
import {IconsDemo} from "./demos/iconography/icons.demo";
import {InputFieldsDemo} from "./demos/input-fields/input-fields.demo";
import {LabelsDemo} from "./demos/labels/labels.demo";
import {LoginDemo} from "./demos/login/login.demo";
import {ModalDemo} from "./demos/modal/modal.demo";
import {NavigationDemo} from "./demos/nav/navigation.demo";
import {RadiosDemo} from "./demos/radios/radios.demo";
import {SelectsDemo} from "./demos/selects/selects.demo";
import {SpinnerDemo} from "./demos/spinners/spinner.demo";
import {StackViewDemo} from "./demos/stack-view/stack-view.demo";
import {HeaderDemo} from "./demos/header/header.demo";
import {SidenavDemo} from "./demos/sidenav/sidenav.demo";
import {TablesDemo} from "./demos/tables/tables.demo";
import {TabsDemo} from "./demos/tabs/tabs.demo";
import {TogglesDemo} from "app/documentation/demos/toggles/toggles.demo";
import {TooltipsDemo} from "./demos/tooltips/tooltips.demo";
import {TreeViewDemo} from "./demos/tree-view/tree-view.demo";
import {TypographyDemo} from "./demos/typography/typography.demo";
import {WizardDemo} from "./demos/wizard/wizard.demo";
import {DatagridBasicStructureDemo} from "./demos/datagrid/basic-structure/basic-structure";
import {DatagridCustomRenderingDemo} from "./demos/datagrid/custom-rendering/custom-rendering";
import {DatagridSmartIteratorDemo} from "./demos/datagrid/smart-iterator/smart-iterator";
import {DatagridSortingDemo} from "./demos/datagrid/sorting/sorting";
import {DatagridBindingPropertiesDemo} from "./demos/datagrid/binding-properties/binding-properties";
import {DatagridFilteringDemo} from "./demos/datagrid/filtering/filtering";
import {DatagridStringFilteringDemo} from "./demos/datagrid/string-filtering/string-filtering";
import {DatagridPaginationDemo} from "./demos/datagrid/pagination/pagination";
import {DatagridSelectionDemo} from "./demos/datagrid/selection/selection";
import {DatagridSelectionSingleDemo} from "./demos/datagrid/single-selection/single-selection";
import {DatagridBatchActionDemo} from "./demos/datagrid/batch-action/batch-action";
import {DatagridSingleActionDemo} from "./demos/datagrid/single-action/single-action";
import {DatagridServerDrivenDemo} from "./demos/datagrid/server-driven/server-driven";
import {DatagridPlaceholderDemo} from "./demos/datagrid/placeholder/placeholder";
import {DatagridExpandableRowsDemo} from "./demos/datagrid/expandable-rows/expandable-rows";
import {DatagridHideShowColumnsDemo} from "./demos/datagrid/hide-show-columns/hide-show-columns";
import {DatagridFullDemo} from "./demos/datagrid/full/full";
import {SignpostDemo} from "./demos/signposts/signpost.demo";
import {VerticalNavDemo} from "./demos/vertical-nav/vertical-nav.demo";
import {BasicNavStructureDemo} from "./demos/vertical-nav/routes/basic-structure/basic-structure";
import {CharmanderDemo} from "./demos/vertical-nav/routes/pokemons/charmander";
import {JigglypuffDemo} from "./demos/vertical-nav/routes/pokemons/jigglypuff";
import {PikachuDemo} from "./demos/vertical-nav/routes/pokemons/pikachu";
import {RaichuDemo} from "./demos/vertical-nav/routes/pokemons/raichu";
import {SnorlaxDemo} from "./demos/vertical-nav/routes/pokemons/snorlax";
import {PokedexDemo} from "./demos/vertical-nav/routes/credits/pokedex";
import {IconLinksDemo} from "./demos/vertical-nav/routes/icons/icons";
import {NormalPokemonDemo} from "./demos/vertical-nav/routes/pokemon-types/normal";
import {ElectricPokemonDemo} from "./demos/vertical-nav/routes/pokemon-types/electric";
import {PoisonPokemonDemo} from "./demos/vertical-nav/routes/pokemon-types/poison";
import {GrassPokemonDemo} from "./demos/vertical-nav/routes/pokemon-types/grass";
import {FightingPokemonDemo} from "./demos/vertical-nav/routes/pokemon-types/fighting";
import {CollapsibleNavDemo} from "./demos/vertical-nav/routes/collapsible-nav/collapsible-nav";
import {NavGroupsVerticalNavDemo} from "./demos/vertical-nav/routes/nav-groups/nav-groups";
import {FirePokemonDemo} from "./demos/vertical-nav/routes/pokemon-types/fire";
import {PidgeyDemo} from "./demos/vertical-nav/routes/pokemons/pidgey";
import {CharizardDemo} from "./demos/vertical-nav/routes/pokemons/charizard";
import {NoLazyLoadingVerticalNavDemo} from "./demos/vertical-nav/routes/no-lazy-loading/no-lazy-loading";

const documentationRoutes: Routes = [
    {
        path: "",
        component: DocumentationComponent,
        data: {
            bodyClass: "layout-documentation",
            browserTitle: "Documentation"
        },
        children: [
            {
                path: "",
                component: ComponentStatusComponent,
                data: {
                    bodyClass: "page-documentation",
                    browserTitle: "Documentation"
                }
            },
            {
                path: "alerts",
                component: AlertsDemo,
                data: {
                    bodyClass: "page-alerts",
                    browserTitle: "Alerts"
                }
            },
            {
                path: "app-layout",
                component: AppLayoutDemo,
                data: {
                    bodyClass: "page-app-layout",
                    browserTitle: "Application Layout"
                }
            },
            {
                path: "badges",
                component: BadgesDemo,
                data: {
                    bodyClass: "page-badges",
                    browserTitle: "Badges"
                }
            },
            {
                path: "buttons",
                component: ButtonsDemo,
                data: {
                    bodyClass: "page-buttons",
                    browserTitle: "Buttons"
                }
            },
            {
                path: "button-group",
                component: ButtonGroupDemo,
                data: {
                    bodyClass: "page-button-group",
                    browserTitle: "Button Group"
                }
            },
            {
                path: "cards",
                component: CardsDemo,
                data: {
                    bodyClass: "page-cards",
                    browserTitle: "Cards"
                }
            },
            {
                path: "checkboxes",
                component: CheckboxesDemo,
                data: {
                    bodyClass: "page-checkboxes",
                    browserTitle: "Checkboxes"
                }
            },
            {
                path: "code-highlight",
                component: CodeHighlightDemo,
                data: {
                    bodyClass: "page-code-highlight",
                    browserTitle: "Code Highlight"
                }
            },
            {
                path: "color",
                component: ColorDemo,
                data: {
                    bodyClass: "page-color",
                    browserTitle: "Color Palette"
                }
            },
            {
                path: "datagrid",
                component: DatagridDemo,
                children: [
                    {
                        path: "",
                        redirectTo: "structure"
                    },
                    {
                        path: "structure",
                        component: DatagridBasicStructureDemo,
                        data: {
                            demoName: "Basic Structure"
                        }
                    },
                    {
                        path: "custom-rendering",
                        component: DatagridCustomRenderingDemo,
                        data: {
                            demoName: "Custom Cell Rendering"
                        }
                    },
                    {
                        path: "smart-iterator",
                        component: DatagridSmartIteratorDemo,
                        data: {
                            demoName: "Smart Iterator"
                        }
                    },
                    {
                        path: "binding-properties",
                        component: DatagridBindingPropertiesDemo,
                        data: {
                            demoName: "Binding Properties"
                        }
                    },
                    {
                        path: "custom-sorting",
                        component: DatagridSortingDemo,
                        data: {
                            demoName: "Custom Sorting"
                        }
                    },
                    {
                        path: "custom-filtering",
                        component: DatagridFilteringDemo,
                        data: {
                            demoName: "Custom Filtering"
                        }
                    },
                    {
                        path: "string-filtering",
                        component: DatagridStringFilteringDemo,
                        data: {
                            demoName: "String Filtering"
                        }
                    },
                    {
                        path: "pagination",
                        component: DatagridPaginationDemo,
                        data: {
                            demoName: "Pagination"
                        }
                    },
                    {
                        path: "selection",
                        component: DatagridSelectionDemo,
                        data: {
                            demoName: "Selection"
                        }
                    },
                    {
                        path: "selection-single",
                        component: DatagridSelectionSingleDemo,
                        data: {
                            demoName: "Single Selection"
                        }
                    },
                    {
                        path: "batch-action",
                        component: DatagridBatchActionDemo,
                        data: {
                            demoName: "Batch Action"
                        }
                    },
                    {
                        path: "single-action",
                        component: DatagridSingleActionDemo,
                        data: {
                            demoName: "Single Action"
                        }
                    },
                    {
                        path: "server-driven",
                        component: DatagridServerDrivenDemo,
                        data: {
                            demoName: "Server Driven"
                        }
                    },
                    {
                        path: "placeholder",
                        component: DatagridPlaceholderDemo,
                        data: {
                            demoName: "Placeholder"
                        }
                    },
                    {
                        path: "expandable-rows",
                        component: DatagridExpandableRowsDemo,
                        data: {
                            demoName: "Expandable Rows"
                        }
                    },
                    {
                        path: "hide-show",
                        component: DatagridHideShowColumnsDemo,
                        data: {
                            demoName: "Hide/Show"
                        }
                    },
                    {
                        path: "full",
                        component: DatagridFullDemo,
                        data: {
                            demoName: "Full Demo"
                        }
                    }
                ],
                data: {
                    bodyClass: "page-datagrid",
                    browserTitle: "Datagrid"
                }
            },
            {
                path: "dropdowns",
                component: DropdownsDemo,
                data: {
                    bodyClass: "page-dropdowns",
                    browserTitle: "Dropdowns"
                }
            },
            {
                path: "forms",
                component: FormsDemo,
                data: {
                    bodyClass: "page-forms",
                    browserTitle: "Forms"
                }
            },
            {
                path: "grid",
                component: GridDemo,
                data: {
                    bodyClass: "page-grid",
                    browserTitle: "Grid"
                }
            },
            {
                path: "header",
                component: HeaderDemo,
                data: {
                    bodyClass: "page-header",
                    browserTitle: "Header"
                }
            },
            {
                path: "input-fields",
                component: InputFieldsDemo,
                data: {
                    bodyClass: "input-fields",
                    browserTitle: "Input Fields"
                }
            },
            {
                path: "labels",
                component: LabelsDemo,
                data: {
                    bodyClass: "page-labels",
                    browserTitle: "Labels"
                }
            },
            {
                path: "lists",
                component: ListsDemo,
                data: {
                    bodyClass: "page-lists",
                    browserTitle: "Lists"
                }
            },
            {
                path: "login",
                component: LoginDemo,
                data: {
                    bodyClass: "page-login",
                    browserTitle: "Login Page"
                }
            },
            {
                path: "modals",
                component: ModalDemo,
                data: {
                    bodyClass: "page-modals",
                    browserTitle: "Modals"
                }
            },
            {
                path: "navigation",
                component: NavigationDemo,
                data: {
                    bodyClass: "page-navigation",
                    browserTitle: "Navigation"
                }
            },
            {
                path: "progress",
                component: ProgressBarsDemo,
                data: {
                    bodyClass: "page-progress",
                    browserTitle: "Progress Bars"
                }
            },
            {
                path: "radios",
                component: RadiosDemo,
                data: {
                    bodyClass: "page-radios",
                    browserTitle: "Radio Buttons"
                }
            },
            {
                path: "select-boxes",
                component: SelectsDemo,
                data: {
                    bodyClass: "page-select-boxes",
                    browserTitle: "Select Boxes"
                }
            },
            {
                path: "sidenav",
                component: SidenavDemo,
                data: {
                    bodyClass: "page-sidenav",
                    browserTitle: "Sidenav"
                }
            },
            {
                path: "signposts",
                component: SignpostDemo,
                data: {
                    bodyClass: "page-signposts",
                    browserTitle: "Signposts"
                }
            },
            {
                path: "spinners",
                component: SpinnerDemo,
                data: {
                    bodyClass: "page-spinners",
                    browserTitle: "Spinners"
                }
            },
            {
                path: "stack-view",
                component: StackViewDemo,
                data: {
                    bodyClass: "page-stack-view",
                    browserTitle: "Stack View"
                }
            },
            {
                path: "tables",
                component: TablesDemo,
                data: {
                    bodyClass: "page-tables",
                    browserTitle: "Tables"
                }
            },
            {
                path: "tabs",
                component: TabsDemo,
                data: {
                    bodyClass: "page-tables",
                    browserTitle: "Tables"
                }
            },
            {
                path: "toggle-switches",
                component: TogglesDemo,
                data: {
                    bodyClass: "page-toggle-switches",
                    browserTitle: "Toggle Switches"
                }
            },
            {
                path: "tooltips",
                component: TooltipsDemo,
                data: {
                    bodyClass: "page-tooltips",
                    browserTitle: "Tooltips"
                }
            },
            {
                path: "tree-view",
                component: TreeViewDemo,
                data: {
                    bodyClass: "page-tree-view",
                    browserTitle: "Tree View"
                }
            },
            {
                path: "typography",
                component: TypographyDemo,
                data: {
                    bodyClass: "page-typography",
                    browserTitle: "Typography"
                }
            },
            {
                path: "vertical-nav",
                component: VerticalNavDemo,
                children: [
                    {
                        path: "",
                        redirectTo: "basic-structure"
                    },
                    {
                        path: "basic-structure",
                        component: BasicNavStructureDemo,
                        children: [
                            {
                                path: "",
                                redirectTo: "charmander"
                            },
                            {
                                path: "charmander",
                                component: CharmanderDemo
                            },
                            {
                                path: "jigglypuff",
                                component: JigglypuffDemo
                            },
                            {
                                path: "pikachu",
                                component: PikachuDemo
                            },
                            {
                                path: "raichu",
                                component: RaichuDemo
                            },
                            {
                                path: "snorlax",
                                component: SnorlaxDemo
                            },
                            {
                                path: "credit",
                                component: PokedexDemo
                            }
                        ],
                        data: {
                            demoName: "Basic Structure"
                        }
                    },
                    {
                        path: "icon-links",
                        component: IconLinksDemo,
                        children: [
                            {
                                path: "",
                                redirectTo: "normal"
                            },
                            {
                                path: "normal",
                                component: NormalPokemonDemo
                            },
                            {
                                path: "electric",
                                component: ElectricPokemonDemo
                            },
                            {
                                path: "poison",
                                component: PoisonPokemonDemo
                            },
                            {
                                path: "grass",
                                component: GrassPokemonDemo
                            },
                            {
                                path: "fighting",
                                component: FightingPokemonDemo
                            },
                            {
                                path: "credit",
                                component: PokedexDemo
                            }
                        ],
                        data: {
                            demoName: "Icon Links"
                        }
                    },
                    {
                        path: "collapsible-nav",
                        component: CollapsibleNavDemo,
                        children: [
                            {
                                path: "",
                                redirectTo: "normal"
                            },
                            {
                                path: "normal",
                                component: NormalPokemonDemo
                            },
                            {
                                path: "electric",
                                component: ElectricPokemonDemo
                            },
                            {
                                path: "poison",
                                component: PoisonPokemonDemo
                            },
                            {
                                path: "grass",
                                component: GrassPokemonDemo
                            },
                            {
                                path: "fighting",
                                component: FightingPokemonDemo
                            },
                            {
                                path: "credit",
                                component: PokedexDemo
                            }
                        ],
                        data: {
                            demoName: "Collapsible Vertical Nav"
                        }
                    },
                    {
                        path: "nav-groups",
                        component: NavGroupsVerticalNavDemo,
                        children: [
                            {
                                path: "",
                                redirectTo: "normal"
                            },
                            {
                                path: "normal",
                                component: NormalPokemonDemo
                            },
                            {
                                path: "normal/snorlax",
                                component: SnorlaxDemo
                            },
                            {
                                path: "normal/pidgey",
                                component: PidgeyDemo
                            },
                            {
                                path: "electric",
                                component: ElectricPokemonDemo
                            },
                            {
                                path: "electric/pikachu",
                                component: PikachuDemo
                            },
                            {
                                path: "electric/raichu",
                                component: RaichuDemo
                            },
                            {
                                path: "fire",
                                component: FirePokemonDemo
                            },
                            {
                                path: "fire/charmander",
                                component: CharmanderDemo
                            },
                            {
                                path: "fire/charizard",
                                component: CharizardDemo
                            },
                            {
                                path: "credit",
                                component: PokedexDemo
                            }
                        ],
                        data: {
                            demoName: "Nav Groups"
                        }
                    },
                    {
                        path: "no-lazy-loading",
                        component: NoLazyLoadingVerticalNavDemo,
                        children: [
                            {
                                path: "",
                                redirectTo: "normal"
                            },
                            {
                                path: "normal",
                                component: NormalPokemonDemo
                            },
                            {
                                path: "snorlax",
                                component: SnorlaxDemo
                            },
                            {
                                path: "pidgey",
                                component: PidgeyDemo
                            },
                            {
                                path: "electric",
                                component: ElectricPokemonDemo
                            },
                            {
                                path: "pikachu",
                                component: PikachuDemo
                            },
                            {
                                path: "raichu",
                                component: RaichuDemo
                            },
                            {
                                path: "fire",
                                component: FirePokemonDemo
                            },
                            {
                                path: "charmander",
                                component: CharmanderDemo
                            },
                            {
                                path: "charizard",
                                component: CharizardDemo
                            },
                            {
                                path: "credit",
                                component: PokedexDemo
                            }
                        ],
                        data: {
                            demoName: "Unstructured Routes"
                        }
                    }
                ],
                data: {
                    bodyClass: "page-vertical-nav",
                    browserTitle: "Vertical Nav"
                }
            },
            {
                path: "wizards",
                component: WizardDemo,
                data: {
                    bodyClass: "page-wizards",
                    browserTitle: "Wizards"
                }
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(documentationRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class DocumentationRoutingModule {
}
