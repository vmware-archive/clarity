/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface ElementDoc {
  name: string;
  description: string;
  jsDoc: string;
  attributes: { name: string; description: string; type: string }[];
  properties: { name: string; description: string; jsDoc: string; type: string }[];
  events: { name: string; description: string; type: string }[];
  slots: { name: string; description: string }[];
  cssProperties: { name: string }[];
}

interface Docs {
  version: number;
  tags: ElementDoc[];
}

// This a prototype/experimental component used to render API docs for custom elements
@Component({
  selector: 'app-element-api',
  templateUrl: './element-api.component.html',
  styleUrls: ['./element-api.component.scss'],
})
export class ElementApiComponent implements OnInit {
  @Input('element') tag = '';
  element: Observable<ElementDoc>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.element = this.http.get<Docs>(`/api/${this.tag}.json`).pipe(map(v => v.tags[0]));
  }
}
