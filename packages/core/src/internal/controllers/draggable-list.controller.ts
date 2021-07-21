import { ReactiveController, ReactiveElement } from 'lit';
import { onChildListMutation } from '../utils/events.js';
import { createId } from '../utils/identity.js';
import { KeyNavigationListController } from './key-navigation-list.controller.js';

let dragSrcEl: HTMLElement | null = null;

export type DraggableItem = HTMLElement & { cdsDraggableItem?: 'item' | 'dropzone' };

export interface DraggableListControllerConfig {
  shadowRoot?: boolean;
  layout?: 'both' | 'horizontal' | 'vertical';
  item?: string;
  dropZone?: string;
  manageFocus?: boolean;
}

export enum CdsDraggableChangeType {
  Grabbed = 'grabbed',
  Dropped = 'dropped',
  Reordered = 'reordered',
}

async function dispatchDraggableChange(
  host: HTMLElement,
  from: HTMLElement,
  target: HTMLElement,
  type: CdsDraggableChangeType
) {
  if ((host as any)?.updateComplete) {
    await (host as any).updateComplete;
  }
  host.dispatchEvent(new CustomEvent('cdsDraggableChange', { detail: { from, target, type }, bubbles: true }));
}

/**
 * Provides support for HTML5 native drag and drop to a component
 */
export class DraggableListController<T extends ReactiveElement> implements ReactiveController {
  private get items() {
    return Array.from(this.hostRoot.querySelectorAll<DraggableItem>(`${this.config.item}[draggable=true]`));
  }

  private get dropZones() {
    return Array.from(this.hostRoot.querySelectorAll<DraggableItem>(`${this.config.dropZone}[draggable=false]`));
  }

  private get hostRoot() {
    return this.config.shadowRoot ? this.host.shadowRoot : this.host;
  }

  private observer: MutationObserver;

  private config: DraggableListControllerConfig;

  private id = `__${createId()}`;

  constructor(private host: T, config: DraggableListControllerConfig) {
    this.config = { shadowRoot: false, layout: 'both', item: '', dropZone: '', manageFocus: true, ...config };
    host.addController(this);
  }

  async hostConnected() {
    await this.host.updateComplete;

    if (this.hostRoot.querySelector('[draggable]')) {
      this.addDragEventListeners(this.items);
      this.addKeyboardEventListeners();
      this.initializeKeyListController();
      this.observer = onChildListMutation(this.host, mutation => {
        const items = (Array.from(mutation.addedNodes) as HTMLElement[]).filter(i => i.draggable) as DraggableItem[];
        if (items.length) {
          this.addDragEventListeners(items);
        }
      });
    }
  }

  hostDisconnected() {
    this.observer?.disconnect();
  }

  private initializeKeyListController() {
    Object.defineProperty(this.host, this.id, { get: () => this.items.map(i => i.querySelector('[cds-draggable]')) });
    new KeyNavigationListController(this.host, {
      layout: this.config.layout,
      keyListItems: this.id,
      manageFocus: this.config.manageFocus,
    });
  }

  private addKeyboardEventListeners() {
    this.hostRoot.addEventListener('click', async (e: any) => {
      const handle = Array.from(e.composedPath()).find(
        (e: any) => e.getAttribute && e.getAttribute('cds-draggable') === 'handle'
      ) as HTMLElement;
      const from = e.composedPath()[0].closest('[draggable]');
      if (handle && from) {
        if (handle.ariaPressed === 'true') {
          from.setAttribute('cds-draggable', 'active');
          dispatchDraggableChange(e.currentTarget, from, null, CdsDraggableChangeType.Grabbed);
        } else if (handle.ariaPressed === 'false') {
          from.removeAttribute('cds-draggable');
          dispatchDraggableChange(e.currentTarget, from, null, CdsDraggableChangeType.Dropped);
        }
      }
    });

    this.hostRoot.addEventListener('cdsKeyChange', (e: any) => {
      if (
        e.detail.keyListItems === this.id &&
        e.detail.previousItem?.closest('[draggable]').getAttribute('cds-draggable') === 'active'
      ) {
        const from = e.detail.previousItem?.closest('[draggable]');
        const target = e.detail.activeItem.closest('[draggable]');

        if (e.detail.activeItem.getAttribute('cds-draggable') === 'handle' && from !== target) {
          e.detail.previousItem.ariaPressed = 'false';
          e.detail.activeItem.ariaPressed = 'true';
          from.removeAttribute('cds-draggable');
          target.setAttribute('cds-draggable', 'active');
          dispatchDraggableChange(e.detail.activeItem, from, target, CdsDraggableChangeType.Reordered);
        }
      }
    });
  }

  private addDragEventListeners(items: DraggableItem[]) {
    items.filter(i => !i.cdsDraggableItem).forEach(item => addHandlers(item));
    this.dropZones
      .filter(i => !i.cdsDraggableItem)
      .forEach(elem => {
        elem.addEventListener('dragover', handleDragOver, false);
        elem.addEventListener('dragleave', handleDragLeave, false);
        elem.addEventListener('drop', handleDrop, false);
        elem.cdsDraggableItem = 'dropzone';
      });
  }
}

function handleDragStart(e: any) {
  dragSrcEl = e.currentTarget;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setDragImage(e.currentTarget, 0, 0);
  e.currentTarget.setAttribute('cds-draggable', 'active');
  dispatchDraggableChange(e.currentTarget, e.currentTarget, null, CdsDraggableChangeType.Grabbed);
}

function handleDragOver(e: any) {
  if (e.preventDefault) {
    e.preventDefault();
  }

  e.dataTransfer.dropEffect = 'move';

  if (dragSrcEl !== e.currentTarget) {
    e.currentTarget.setAttribute('cds-draggable', 'target');
  }

  return false;
}

function handleDrop(e: any) {
  const items: DraggableItem[] = Array.from(e.currentTarget.parentElement.querySelectorAll('[draggable]'));
  const from = dragSrcEl;
  const target = items.find(i => i === e.currentTarget);
  from.removeAttribute('cds-draggable');
  target.removeAttribute('cds-draggable');
  dispatchDraggableChange(e.currentTarget, from, target, CdsDraggableChangeType.Reordered);
  return false;
}

function handleDragLeave(e: any) {
  if (e.currentTarget.getAttribute('cds-draggable') === 'target') {
    e.currentTarget.removeAttribute('cds-draggable');
  }
}

function addHandlers(elem: any) {
  elem.cdsDraggableItem = 'item';
  elem.addEventListener('dragstart', handleDragStart, false);
  elem.addEventListener('dragover', handleDragOver, false);
  elem.addEventListener('drop', handleDrop, false);
  elem.addEventListener('dragleave', handleDragLeave, false);
  elem.addEventListener('dragend', (e: any) => e.currentTarget.removeAttribute('cds-draggable'), false);
}
