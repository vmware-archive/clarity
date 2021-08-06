import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { DetailComponent } from './detail/detail.component';
import { FilteringComponent } from './filtering/filtering.component';
import { HideShowColumnComponent } from './hide-show-column/hide-show-column.component';
import { MultiActionComponent } from './multi-action/multi-action.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PinColumnsComponent } from './pin-columns/pin-columns.component';
import { SingleActionComponent } from './single-action/single-action.component';
import { SingleSelectComponent } from './single-select/single-select.component';
import { SortingComponent } from './sorting/sorting.component';
import { DatagridComponent } from './datagrid.component';
import { FullAsyncComponent } from './full-async/full-async.component';

const routes: Routes = [
  {
    path: '',
    component: DatagridComponent,
    children: [
      { path: '', component: BasicComponent },
      { path: 'basic', component: BasicComponent },
      { path: 'detail', component: DetailComponent },
      { path: 'filtering', component: FilteringComponent },
      { path: 'full-async', component: FullAsyncComponent },
      { path: 'hide-show-column', component: HideShowColumnComponent },
      { path: 'multi-action', component: MultiActionComponent },
      { path: 'multi-select', component: MultiSelectComponent },
      { path: 'pagination', component: PaginationComponent },
      { path: 'pin-columns', component: PinColumnsComponent },
      { path: 'single-action', component: SingleActionComponent },
      { path: 'single-select', component: SingleSelectComponent },
      { path: 'sorting', component: SortingComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatagridRoutingModule {}
