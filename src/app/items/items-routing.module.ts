import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListItemsComponent } from './containers/list-items/list-items.component';

const itemsRoutes: Routes = [
  { path: 'list', component: ListItemsComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(itemsRoutes) ],
  exports: [ RouterModule ]
})
export class ItemsRoutingModule { }
