import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.scss'],
})
export class DatagridComponent implements OnInit {
  expandedAccessibility = false;
  expandedDevNotes = false;
  showDevNotes = false;
  constructor() {}

  ngOnInit(): void {}
}
