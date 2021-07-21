// TC39 Decorators proposal
export interface ClassDescriptor {
  kind: 'class';
  elements: ClassElement[];
  finisher?: <T>(classDef: Constructor<T>) => undefined | Constructor<T>;
}

export interface ClassElement {
  kind: 'field' | 'method';
  key: PropertyKey;
  placement: 'static' | 'prototype' | 'own';
  initializer?: any;
  extras?: ClassElement[];
  finisher?: <T>(classDef: Constructor<T>) => undefined | Constructor<T>;
  descriptor?: PropertyDescriptor;
}

export type Constructor<T> = {
  new (...args: any[]): T;
};

// TC39 Decorators proposal
export const classStandardDecorator = (
  value: any,
  descriptor: ClassDescriptor,
  fn: (value: any, classDef: Constructor<HTMLElement>) => any
) => {
  const { kind, elements } = descriptor;
  return {
    kind,
    elements,
    finisher(classDef: Constructor<HTMLElement>) {
      fn(value, classDef);
    },
  };
};

// Legacy TS Decorator
export const classLegacyDecorator = (
  value: any,
  classDef: Constructor<HTMLElement>,
  fn: (value: any, classDef: Constructor<HTMLElement>) => any
) => {
  fn(value, classDef);
  return classDef as any;
};
