/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Observable, of } from 'rxjs';
import { RecursiveTreeNodeModel } from './recursive-tree-node.model';
import { fakeAsync, tick } from '@angular/core/testing';
import { delay } from 'rxjs/operators';

function synchronousChildren(node: string): string[] {
  return [node + 'A', node + 'B'];
}

function promiseChildren(node: string): Promise<string[]> {
  return Promise.resolve(synchronousChildren(node));
}

function observableChildren(node: string): Observable<string[]> {
  return of(synchronousChildren(node));
}

export default function(): void {
  describe('RecursiveTreeNodeModel', () => {
    it('fetches children through the given function', function() {
      const root = new RecursiveTreeNodeModel('A', null, synchronousChildren);
      expect(root.children.map(c => c.model)).toEqual(['AA', 'AB']);
    });

    it('offers a fetchChildren() method that fetches the children only once', function() {
      let nbFetch = 0;
      const root = new RecursiveTreeNodeModel('A', null, node => {
        nbFetch++;
        return synchronousChildren(node);
      });
      expect(nbFetch).toBe(0);
      root.fetchChildren();
      expect(nbFetch).toBe(1);
      root.fetchChildren();
      expect(nbFetch).toBe(1);
    });

    it('declares itself as parent for created children', function() {
      const root = new RecursiveTreeNodeModel('A', null, synchronousChildren);
      expect(root.children.map(c => c.parent)).toEqual([root, root]);
    });

    it(
      'can unwrap a Promise for the children',
      fakeAsync(function() {
        const root = new RecursiveTreeNodeModel('A', null, promiseChildren);
        root.fetchChildren();
        tick();
        expect(root.children.map(c => c.model)).toEqual(['AA', 'AB']);
      })
    );

    it('can unwrap an Observable for the children', function() {
      const root = new RecursiveTreeNodeModel('A', null, observableChildren);
      expect(root.children.map(c => c.model)).toEqual(['AA', 'AB']);
    });

    it(
      'marks itself as loading while waiting for children from a Promise',
      fakeAsync(function() {
        const root = new RecursiveTreeNodeModel('A', null, promiseChildren);
        root.fetchChildren();
        expect(root.loading).toBeTrue();
        tick();
        expect(root.loading).toBeFalse();
      })
    );

    it(
      'marks itself as loading while waiting for children from an Observable',
      fakeAsync(function() {
        const root = new RecursiveTreeNodeModel('A', null, node => observableChildren(node).pipe(delay(0)));
        root.fetchChildren();
        expect(root.loading).toBeTrue();
        tick();
        expect(root.loading).toBeFalse();
      })
    );
  });
}
