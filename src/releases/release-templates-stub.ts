/*
 * This is a sad hack until we figure out a way to do dynamic requires with angular-cli.
 * It works fine with webpack, but angular-cli breaks them. See https://github.com/angular/angular-cli/issues/3306
 */
export const TEMPLATES = {
  "0.8.3": require("./0.8/0.8.3.html"),
  "0.8.2": require("./0.8/0.8.2.html"),
  "0.8.1": require("./0.8/0.8.1.html"),
  "0.8.0": require("./0.8/0.8.0.html"),

  "0.7.6": require("./0.7/0.7.6.html"),
  "0.7.5": require("./0.7/0.7.5.html"),
  "0.7.4": require("./0.7/0.7.4.html"),
  "0.7.3": require("./0.7/0.7.3.html"),
  "0.7.2": require("./0.7/0.7.2.html"),
  "0.7.1": require("./0.7/0.7.1.html"),
  "0.7.0": require("./0.7/0.7.0.html"),

  "0.6.4": require("./0.6/0.6.4.html"),
  "0.6.3": require("./0.6/0.6.3.html"),
  "0.6.2": require("./0.6/0.6.2.html"),
  "0.6.1": require("./0.6/0.6.1.html"),
  "0.6.0": require("./0.6/0.6.0.html"),

  "0.5.6": require("./0.5/0.5.6.html"),
  "0.5.5": require("./0.5/0.5.5.html"),
  "0.5.4": require("./0.5/0.5.4.html"),
  "0.5.3": require("./0.5/0.5.3.html"),
  "0.5.2": require("./0.5/0.5.2.html"),
  "0.5.1": require("./0.5/0.5.1.html"),
  "0.5.0": require("./0.5/0.5.0.html"),

  "0.4.3": require("./0.4/0.4.3.html"),
  "0.4.2": require("./0.4/0.4.2.html"),
  "0.4.1": require("./0.4/0.4.1.html"),
  "0.4.0": require("./0.4/0.4.0.html"),

  "0.3.6": require("./0.3/0.3.6.html"),
  "0.3.5": require("./0.3/0.3.5.html"),
  "0.3.4": require("./0.3/0.3.4.html"),
  "0.3.3": require("./0.3/0.3.3.html"),
  "0.3.2": require("./0.3/0.3.2.html"),
  "0.3.1": require("./0.3/0.3.1.html"),
  "0.3.0": require("./0.3/0.3.0.html"),

  "0.2.10": require("./0.2/0.2.10.html"),
  "0.2.9": require("./0.2/0.2.9.html"),
  "0.2.8": require("./0.2/0.2.8.html"),
  "0.2.7": require("./0.2/0.2.7.html"),
  "0.2.6": require("./0.2/0.2.6.html"),
  "0.2.5": require("./0.2/0.2.5.html"),
  "0.2.4": require("./0.2/0.2.4.html"),
  "0.2.3": require("./0.2/0.2.3.html")
};
