declare module '*.scss' {
  const content: import('lit').CSSResultGroup;
  export = content;
}

declare module '*.json' {
  const value: any;
  export default value;
}

declare module '*.svg' {
  const value: any;
  export default value;
}

declare module '*.png' {
  const value: any;
  export default value;
}
