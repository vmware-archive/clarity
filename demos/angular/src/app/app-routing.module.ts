import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo:'/datagrid', pathMatch: 'full' },
  { path: 'datagrid', loadChildren: () => import('./datagrid/datagrid.module').then(m => m.DatagridModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
