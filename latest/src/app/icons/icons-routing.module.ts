import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IconsComponent } from "./icons.component";
import { IconsGetStartedComponent } from './icons-get-started/icons-get-started.component';
import { IconsHowToUseComponent } from './icons-how-to-use/icons-how-to-use.component';
import { IconsApiComponent } from './icons-api/icons-api.component';
import { IconsSetsComponent } from "./icons-sets/icons-sets.component";


const routes: Routes = [
    {
        path: '',
        component: IconsComponent,
        children: [
            {path: '', redirectTo: 'clarity-icons'},
            {path: 'clarity-icons', component: IconsGetStartedComponent},
            {path: 'how-to-use', component: IconsHowToUseComponent},
            {path: 'api', component: IconsApiComponent},
            {path: 'icon-sets', component: IconsSetsComponent}
        ]
    }
];

export const IconsRouting: ModuleWithProviders = RouterModule.forChild(routes);