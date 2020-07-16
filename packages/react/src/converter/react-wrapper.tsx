import * as React from 'react';

export function createReactComponent<BaseComponent extends HTMLElement>(elementName: string) {
  return class ReactWrapperComponent extends React.Component<
    Partial<Omit<BaseComponent, 'children'> & React.DOMAttributes<HTMLElement>>
  > {
    ref: React.RefObject<BaseComponent>;

    get _customPropsList() {
      return Object.keys(this.props).filter(prop => !this._propIsReservedReactProp(prop));
    }

    get nativeElement(): Promise<BaseComponent> {
      return (this.ref.current as any).updateComplete.then(() => this.ref.current);
    }

    constructor(props: any) {
      super(props);
      this.ref = React.createRef(); // need to document minimum version of react needed

      if ((window as any)?.CDS?._react?.version) {
        (window as any).CDS._react.version = React.version;
      }
    }

    componentDidMount() {
      this._customPropsList.forEach(prop => {
        if (this._propIsFunction(prop)) {
          this._createCustomElementEvent(prop);
        } else {
          this._updateCustomElementProperty(prop);
        }
      });
    }

    componentDidUpdate(prevProps) {
      this._customPropsList
        .filter(prop => !this._propIsFunction(prop) && prevProps[prop] !== this.props[prop])
        .forEach(prop => this._updateCustomElementProperty(prop));
    }

    render() {
      return React.createElement(elementName, { ref: this.ref }, this.props.children);
    }

    _propIsReservedReactProp(prop) {
      const reactProperties = ['children', 'localName', 'ref', 'style', 'className'];
      return reactProperties.indexOf(prop) !== -1;
    }

    _propIsFunction(prop) {
      return typeof this.props[prop] === 'function';
    }

    _createCustomElementEvent(prop) {
      if (this.ref.current) {
        let eventName = prop.substring(2);
        eventName = eventName.charAt(0).toLowerCase() + eventName.slice(1);
        this.ref.current.addEventListener(eventName, e => this.props[prop](e));
      }
    }

    _updateCustomElementProperty(prop) {
      if (this.ref.current) {
        this.ref.current[prop] = this.props[prop];

        // if prop value is a string we assume to set the attribute on custom element
        if (typeof this.props[prop] === 'string') {
          this.ref.current.setAttribute(prop, this.props[prop]);
        }
      }
    }
  };
}
