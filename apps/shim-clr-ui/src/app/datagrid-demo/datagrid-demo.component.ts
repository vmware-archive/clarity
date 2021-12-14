import { Component } from '@angular/core';
import { Inventory } from './inventory/inventory';
import { User } from './inventory/user';

@Component({
  selector: 'app-datagrid-demo',
  providers: [Inventory],
  templateUrl: './datagrid-demo.component.html',
})
export class DatagridDemoComponent {
  users: User[];

  constructor(inventory: Inventory) {
    inventory.size = 10;
    inventory.reset();
    this.users = inventory.all;
  }
}
