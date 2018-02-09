import * as Browser from "detect-browser";

export const itIgnore = (browsers: string[], should: string, test: any, focus?: boolean) => {
  if (browsers.length && browsers.indexOf(Browser.name) >= 0) {
    return;
  }

  return (focus) ? fit(should, test) : it(should, test);
};

export const fitIgnore = (browsers: string[], should: string, test: any) => {
  itIgnore(browsers, should, test, true);
}