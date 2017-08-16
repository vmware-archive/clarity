/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "clarity-angular";
import {VerticalNavDemo} from "./vertical-nav.demo";
import {DocWrapperModule} from "../_doc-wrapper/doc-wrapper.module";
import {RouterModule} from "@angular/router";
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
import {NavGroupsVerticalNavDemo} from "./routes/nav-groups/nav-groups";
import {NoLazyLoadingVerticalNavDemo} from "./routes/no-lazy-loading/no-lazy-loading";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule.forChild(),
        DocWrapperModule,
        RouterModule,
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
        NavGroupsVerticalNavDemo,
        NoLazyLoadingVerticalNavDemo,

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
export class VerticalNavDemoModule {
}
