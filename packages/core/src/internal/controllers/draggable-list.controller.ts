import { ReactiveController, ReactiveElement } from 'lit';
import { querySelectorRoots } from '../utils/dom.js';
import { onChildListMutation, onFirstInteraction } from '../utils/events.js';
import { createId } from '../utils/identity.js';
import { KeyNavigationListController } from './key-navigation-list.controller.js';

let dragSrcEl: HTMLElement | null = null;

export type DraggableItem = HTMLElement & { cdsDraggableItem?: 'item' | 'dropzone' };

/**
 * Provides support for HTML5 native drag and drop to a component
 */
export function draggableList<T extends ReactiveElement>(config?: DraggableListControllerConfig): ClassDecorator {
  return (target: any) => target.addInitializer((instance: T) => new DraggableListController(instance, config));
}

export interface DraggableListControllerConfig {
  layout?: 'both' | 'horizontal' | 'vertical';
  item?: string;
  dropZone?: string;
  manageFocus?: boolean;
  manageTabindex?: boolean;
}

export type CdsDraggableChangeType = 'grabbed' | 'dropped' | 'reordered';

export type CdsDraggableInteractionType = 'touch' | 'key';

export class DraggableListController<T extends ReactiveElement> implements ReactiveController {
  private get items() {
    return querySelectorRoots<DraggableItem>(this.host, `${this.config.item as string}[draggable="true"]`);
  }

  private get dropZones() {
    return querySelectorRoots<DraggableItem>(this.host, `${this.config.dropZone as string}[draggable="false"]`);
  }

  private observer: MutationObserver;

  private config: DraggableListControllerConfig;

  private id = `__${createId()}`;

  constructor(private host: T, config?: DraggableListControllerConfig) {
    this.host.addController(this);
    this.config = {
      layout: 'both',
      item: '',
      dropZone: '',
      manageFocus: true,
      manageTabindex: false,
      ...config,
    };
  }

  async hostConnected() {
    await this.host.updateComplete;

    onFirstInteraction(this.host).then(() => {
      this.addDragEventListeners(this.items);
      this.initializeKeyListController();

      this.host.addEventListener('click', async (e: any) => this.clickItem(e));
      this.host.addEventListener('cdsKeyChange', (e: any) => this.focusItem(e));
      this.host.shadowRoot?.addEventListener('click', async (e: any) => this.clickItem(e));
      this.host.shadowRoot?.addEventListener('cdsKeyChange', (e: any) => this.focusItem(e));

      this.observer = onChildListMutation(this.host, mutation => {
        if (mutation) {
          const items = (Array.from(mutation.addedNodes) as HTMLElement[]).filter(i => i.draggable) as DraggableItem[];
          if (items.length) {
            this.addDragEventListeners(items);
          }
        }
      });
    });
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
      manageTabindex: this.config.manageTabindex,
    });
  }

  private clickItem(e: any) {
    const handle = Array.from(e.composedPath()).find(
      (e: any) => e.getAttribute && e.getAttribute('cds-draggable') === 'handle'
    ) as HTMLElement;
    const from = e.composedPath()[0].closest('[draggable]');
    if (handle && from) {
      if (handle.ariaPressed === 'true') {
        from.setAttribute('cds-draggable', 'active');
        dispatchDraggableChange(e.currentTarget, from, null, 'grabbed', 'touch');
      } else if (handle.ariaPressed === 'false') {
        from.removeAttribute('cds-draggable');
        dispatchDraggableChange(e.currentTarget, from, null, 'dropped', 'touch');
      }
    }
  }

  private focusItem(e: any) {
    if (
      e.detail.keyListItems === this.id &&
      e.detail.previousItem?.closest('[draggable]').getAttribute('cds-draggable') === 'active'
    ) {
      const from = e.detail.previousItem?.closest('[draggable]');
      const target = e.detail.activeItem.closest('[draggable]');

      if (e.detail.activeItem.getAttribute('cds-draggable') === 'handle' && from !== target) {
        e.detail.previousItem.ariaPressed = 'false';
        e.detail.activeItem.ariaPressed = 'true';
        e.detail.previousItem.pressed = false;
        e.detail.activeItem.pressed = true;
        from.removeAttribute('cds-draggable');
        target.setAttribute('cds-draggable', 'active');
        dispatchDraggableChange(e.detail.activeItem, from, target, 'reordered', 'key');
      }
    }
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

async function dispatchDraggableChange(
  host: HTMLElement,
  from: HTMLElement | null | undefined,
  target: HTMLElement | null | undefined,
  type: CdsDraggableChangeType,
  interaction: CdsDraggableInteractionType
) {
  if ((host as any)?.updateComplete) {
    await (host as any).updateComplete;
  }
  host.dispatchEvent(
    new CustomEvent('cdsDraggableChange', { detail: { from, target, type, interaction }, bubbles: true })
  );
}

function handleDragStart(e: any) {
  dragSrcEl = e.currentTarget;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setDragImage(e.currentTarget, 0, 0);
  e.currentTarget.setAttribute('cds-draggable', 'active');
  dispatchDraggableChange(e.currentTarget, e.currentTarget, null, 'grabbed', 'touch');
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
  const from = dragSrcEl;
  const target = e.currentTarget;
  from?.removeAttribute('cds-draggable');
  target?.removeAttribute('cds-draggable');
  dispatchDraggableChange(e.currentTarget, from, target, 'reordered', 'touch');
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
