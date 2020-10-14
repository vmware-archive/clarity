import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertPage } from './pages/alert/alert.page';
import { ButtonPage } from './pages/button/button.page';
import { HomePage } from './pages/home/home.page';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'alert', component: AlertPage },
  { path: 'button', component: ButtonPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
