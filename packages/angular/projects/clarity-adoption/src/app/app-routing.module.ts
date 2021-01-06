import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertPage } from './pages/alert/alert.page';
import { ButtonPage } from './pages/button/button.page';
import { GettingStartedPage } from './pages/getting-started/getting-started.page';
import { BadgePage } from './pages/badge/badge.page';
import { LabelPage } from './pages/label/label.page';
import { ListPage } from './pages/list/list.page';
import { IconsPage } from './pages/icons/icons.page';

const routes: Routes = [
  { path: '', redirectTo: '/getting-started', pathMatch: 'full' },
  { path: 'getting-started', component: GettingStartedPage },
  { path: 'alert', component: AlertPage },
  { path: 'badge', component: BadgePage },
  { path: 'icons', component: IconsPage },
  { path: 'button', component: ButtonPage },
  { path: 'label', component: LabelPage },
  { path: 'list', component: ListPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
