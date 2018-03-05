import * as BrowserDetector from "detect-browser";
const browser = BrowserDetector.detect();

export const itIgnore = (browsers: string[], should: string, test: any, focus?: boolean) => {
  if (browsers.length && browsers.indexOf(browser.name) >= 0) {
    return xit(should, test);
  }

  return (focus) ? fit(should, test) : it(should, test);
};

export const fitIgnore = (browsers: string[], should: string, test: any) => {
  itIgnore(browsers, should, test, true);
}