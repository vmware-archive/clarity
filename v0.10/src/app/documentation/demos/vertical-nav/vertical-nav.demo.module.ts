/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "@clr/angular";
import {VerticalNavDemo} from "./vertical-nav.demo";
import {DocWrapperModule} from "../_doc-wrapper/doc-wrapper.module";
import {RouterModule, Routes} from "@angular/router";
import {UtilsModule} from "../../../utils/utils.module";
import {BasicNavDemo} from "./basic-nav/basic-nav";
import {BasicNavUsage} from "./basic-nav-usage/basic-nav-usage";
import {JustNavsDemo} from "./just-navs/just-navs";
import {VerticalNavIconsDemo} from "./icons/icons";
import {NavGroupsDemo} from "./nav-groups/nav-groups";
import {CollapsibleVerticalNavDemo} from "./collapsible-nav/collapsible-nav";
import {CharmanderDemo} from "./routes/pokemons/charmander";
import {JigglypuffDemo} from "./routes/pokemons/jigglypuff";
import {PikachuDemo} from "./routes/pokemons/pikachu";
import {RaichuDemo} from "./routes/pokemons/raichu";
import {SnorlaxDemo} from "./routes/pokemons/snorlax";
import {BasicNavStructureDemo} from "./routes/basic-structure/basic-structure";
import {PokedexDemo} from "./routes/credits/pokedex";
import {PokemonDemo} from "./routes/credits/pokemon";
import {IconLinksDemo} from "./routes/icons/icons";
import {ElectricPokemonDemo} from "./routes/pokemon-types/electric";
import {NormalPokemonDemo} from "./routes/pokemon-types/normal";
import {GrassPokemonDemo} from "./routes/pokemon-types/grass";
import {PoisonPokemonDemo} from "./routes/pokemon-types/poison";
import {FightingPokemonDemo} from "./routes/pokemon-types/fighting";
import {CollapsibleNavDemo} from "./routes/collapsible-nav/collapsible-nav";
import {CharizardDemo} from "./routes/pokemons/charizard";
import {PidgeyDemo} from "./routes/pokemons/pidgey";
import {FirePokemonDemo} from "./routes/pokemon-types/fire";
import {NavGroupsParentLinksVerticalNavDemo} from "./routes/nav-groups-with-parent-links/nav-groups";
import {NoLazyLoadingVerticalNavDemo} from "./routes/no-lazy-loading-with-parent-links/no-lazy-loading";
import {LazyLoadingNavGroupsVerticalNavDemo} from "./routes/lazy-loading-nav-groups/lazy-loading-nav-groups";
import {VerticalNavGroupsDemo} from "./routes/nav-groups/nav-groups";

const routes: Routes = [
  {
    path: "",
    component: VerticalNavDemo,
    children: [
      {
        path: "",
        redirectTo: "basic-structure",
        pathMatch: "full"
      },
      {
        path: "basic-structure",
        component: BasicNavStructureDemo,
        children: [
          {
            path: "",
            redirectTo: "charmander",
            pathMatch: "full"
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
            redirectTo: "normal",
            pathMatch: "full"
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
            redirectTo: "normal",
            pathMatch: "full"
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
        component: VerticalNavGroupsDemo,
        children: [
          {
            path: "",
            redirectTo: "normal/pidgey",
            pathMatch: "full"
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
            path: "electric/pikachu",
            component: PikachuDemo
          },
          {
            path: "electric/raichu",
            component: RaichuDemo
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
          demoName: "Vertical Nav Groups"
        }
      },
      {
        path: "lazy-loading-nav-links",
        component: LazyLoadingNavGroupsVerticalNavDemo,
        children: [
          {
            path: "",
            redirectTo: "normal/pidgey",
            pathMatch: "full"
          },
          {
            path: "normal",
            component: PidgeyDemo
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
            component: PikachuDemo
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
            component: CharmanderDemo
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
          demoName: "Lazy Loading Links In Nav Groups"
        }
      }
      /*,
                // Commented because these demos are deprecated (Nav Groups with Parent Links)
                // Keeping them commented just in case we decide to add them back.
                {
                    path: "nav-groups",
                    component: NavGroupsParentLinksVerticalNavDemo,
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
                */
    ]
  }
];

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        DocWrapperModule,
        RouterModule.forChild(routes),
        UtilsModule
    ],
    declarations: [
        VerticalNavDemo,
        BasicNavDemo,
        BasicNavUsage,
        JustNavsDemo,
        VerticalNavIconsDemo,
        NavGroupsDemo,
        CollapsibleVerticalNavDemo,
        BasicNavStructureDemo,
        IconLinksDemo,
        CollapsibleNavDemo,
        NavGroupsParentLinksVerticalNavDemo,
        NoLazyLoadingVerticalNavDemo,
        LazyLoadingNavGroupsVerticalNavDemo,
        VerticalNavGroupsDemo,

        CharmanderDemo,
        JigglypuffDemo,
        PikachuDemo,
        RaichuDemo,
        SnorlaxDemo,
        PidgeyDemo,
        CharizardDemo,
        PokedexDemo,
        PokemonDemo,
        ElectricPokemonDemo,
        NormalPokemonDemo,
        GrassPokemonDemo,
        PoisonPokemonDemo,
        FightingPokemonDemo,
        FirePokemonDemo
    ],
    exports: [
        VerticalNavDemo
    ]
})
export class VerticalNavDemoModule {}
