/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ClarityIconsApi } from './clr-icons-api';
import { ShapeTemplateObserver } from './utils/shape-template-observer';

/* CLR-ICON CUSTOM ELEMENT */

let clrIconId = 0;
const offScreenSpan = document.createElement('span');
offScreenSpan.className = 'is-off-screen';

let parentConstructor = function (this: any) {
  // eslint-disable-next-line prefer-rest-params
  return HTMLElement.apply(this, arguments);
};
if (typeof Reflect === 'object') {
  parentConstructor = function () {
    // eslint-disable-next-line prefer-rest-params
    return (Reflect as any).construct(HTMLElement, arguments, this.constructor);
  };
}

export function ClarityIconElement(this: any) {
  'use strict';

  // eslint-disable-next-line prefer-rest-params
  const _instance = (parentConstructor as any).apply(this, arguments);

  _instance.clrIconUniqId = '_clr_icon_' + clrIconId;
  clrIconId++;

  return _instance;
}

(ClarityIconElement as any).observedAttributes = ['shape', 'size', 'title'];

ClarityIconElement.prototype = Object.create(HTMLElement.prototype, {
  constructor: { configurable: true, writable: true, value: ClarityIconElement },
});

ClarityIconElement.prototype.constructor = ClarityIconElement;

ClarityIconElement.prototype._appendCustomTitle = function () {
  const cloneOffScreenSpan = offScreenSpan.cloneNode(false) as HTMLElement;
  cloneOffScreenSpan.id = this.clrIconUniqId;
  cloneOffScreenSpan.textContent = this.currentTitleAttrVal;
  this.appendChild(cloneOffScreenSpan);
};

ClarityIconElement.prototype._setIconSize = function (size: string) {
  if (!Number(size) || Number(size) < 0) {
    this.style.width = null; // fallback to the original stylesheet value
    this.style.height = null; // fallback to the original stylesheet value
  } else {
    this.style.width = size + 'px';
    this.style.height = size + 'px';
  }
};

ClarityIconElement.prototype._normalizeShape = function (value: string): string {
  return value.split(/\s/)[0].toLowerCase();
};

ClarityIconElement.prototype.connectedCallback = function () {
  // One thing to note here is that the attributeChangedCallback method is called for every attribute first
  // before this connectedCallback method called only once when the custom element is inserted into the DOM.
  // So we could check whether the attribute values really changed or not.
  // If not, we don't need to execute the same codes again.

  // We want to hide the custom element from screen readers but allow the svg/img content to still be read inline
  // Adding role=none allows the screen reader to skip the custom element as if it were a div or span.
  // https://www.scottohara.me/blog/2018/05/05/hidden-vs-none.html
  if (!this.getAttribute('role')) {
    this.setAttribute('role', 'none');
  }

  if (this.hasAttribute('size')) {
    const sizeAttrValue = this.getAttribute('size');

    if (this.currentSizeAttrVal !== sizeAttrValue) {
      this.currentSizeAttrVal = sizeAttrValue;
      this._setIconSize(sizeAttrValue);
    }
  }

  // Note: the size attribute is irrelevant from the shape template;
  // That's why the size checking placed before detecting changes in shape and title attributes.
  // This means even if the shape is not found, the injected shape will have the user-given size.

  if (this.hasAttribute('shape')) {
    const shapeAttrValue = this._normalizeShape(this.getAttribute('shape'));

    this._shapeTemplateSubscription = ShapeTemplateObserver.instance.subscribeTo(
      shapeAttrValue,
      (updatedTemplate: string) => {
        this._injectTemplate(updatedTemplate);
      }
    );

    this.currentShapeAttrVal = shapeAttrValue;

    if (ClarityIconsApi.instance.has(this.currentShapeAttrVal)) {
      const currentShapeTemplate = ClarityIconsApi.instance.get(this.currentShapeAttrVal);
      if (currentShapeTemplate === this.currentShapeTemplate) {
        return;
      } else {
        this.currentShapeTemplate = currentShapeTemplate;
      }
    } else {
      this._injectErrorTemplate();
      return;
    }
  }

  if (this.hasAttribute('title')) {
    const titleAttrValue = this.getAttribute('title');

    if (this.currentTitleAttrVal !== titleAttrValue) {
      this.currentTitleAttrVal = titleAttrValue;
    }

    if (!this.currentShapeAttrVal) {
      return;
    }
  }

  this._injectTemplate();
};

ClarityIconElement.prototype.attributeChangedCallback = function (
  attributeName: string,
  _oldValue: string,
  newValue: string
) {
  if (attributeName === 'size') {
    this._setIconSize(newValue);
  }

  // Note: the size attribute is irrelevant from the shape template;
  // That's why the size checking placed before detecting changes in shape and title attributes.
  // This means even if the shape is not found, the injected shape will have the user-given size.

  if (attributeName === 'shape') {
    this.currentShapeAttrVal = this._normalizeShape(newValue);

    // transfer change handler callback to new shape name
    if (this._shapeTemplateSubscription) {
      // remove the existing change handler callback on the old shape name
      this._shapeTemplateSubscription();
      // create a new subscription on the new shape name
      this._shapeTemplateSubscription = ShapeTemplateObserver.instance.subscribeTo(
        this.currentShapeAttrVal,
        (updatedTemplate: string) => {
          this._injectTemplate(updatedTemplate);
        }
      );
    }

    if (ClarityIconsApi.instance.has(this.currentShapeAttrVal)) {
      this.currentShapeTemplate = ClarityIconsApi.instance.get(this.currentShapeAttrVal);
    } else {
      this._injectErrorTemplate();
      return;
    }
  }
  if (attributeName === 'title') {
    this.currentTitleAttrVal = newValue;

    if (!this.currentShapeAttrVal) {
      return;
    }
  }

  this._injectTemplate();
};

ClarityIconElement.prototype.disconnectedCallback = function () {
  // as the icon element is removed from the DOM,
  // remove its listener callback function as well.
  if (this._shapeTemplateSubscription) {
    this._shapeTemplateSubscription();
  }
};

ClarityIconElement.prototype._setAriaLabelledBy = function () {
  const existingAriaLabelledBy: string = this.getAttribute('aria-labelledby');
  const svgElement: SVGElement = this.querySelector('svg');
  const elementToSet = svgElement ? svgElement : this;

  if (!existingAriaLabelledBy) {
    elementToSet.setAttribute('aria-labelledby', this.clrIconUniqId);
  } else if (existingAriaLabelledBy && existingAriaLabelledBy.indexOf(this.clrIconUniqId) < 0) {
    elementToSet.setAttribute('aria-labelledby', existingAriaLabelledBy + ' ' + this.clrIconUniqId);
  }
};

ClarityIconElement.prototype._injectTemplate = function (shapeTemplate?: string) {
  // Accepting the argument, shapeTemplate, will help us to update the shape template
  // right before the injection.
  if (shapeTemplate && shapeTemplate !== this.currentShapeTemplate) {
    this.currentShapeTemplate = shapeTemplate;
  }

  this.innerHTML = this.currentShapeTemplate;

  if (this.currentTitleAttrVal) {
    this._setAriaLabelledBy();
    this._appendCustomTitle();
  }
};

ClarityIconElement.prototype._injectErrorTemplate = function () {
  this.currentShapeTemplate = ClarityIconsApi.instance.get('error');
  this._injectTemplate();
};
