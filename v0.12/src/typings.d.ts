declare module '*.html' {
    var _: string;
    export default _;
}
declare module '!raw-loader!*' {
    const contents: string;
    export = contents;
  }