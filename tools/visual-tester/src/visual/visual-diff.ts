import path from 'path';
import mkdirp from 'mkdirp';
import fs from 'mz/fs';

import puppeteer, { Page, Browser } from 'puppeteer';
// @ts-ignore - missing d.ts
import ResemblejsCompareImages from 'resemblejs/compareImages';

import { VisualExpectError } from './visual-error';

export interface VisualDiffSetup {
  basePath: string;
  currentPath: string;
  diffPath: string;
  updateSnapshots: boolean;
}

export interface BrowserOptions {
  incognito?: boolean;
}

export class VisualDiffContext {
  options: VisualDiffSetup = {
    basePath: path.join(process.cwd(), 'images/base'),
    currentPath: path.join(process.cwd(), 'images/current'),
    diffPath: path.join(process.cwd(), 'images/diff'),
    updateSnapshots: false,
  };

  puppetConfig: any = {
    defaultViewport: {
      width: 1240,
      height: 1600,
    },
  };

  resembleConfig: any = {
    output: {
      errorColor: {
        red: 255,
        green: 0,
        blue: 255,
      },
      errorType: 'flat',
      transparency: 0.3,
      outputDiff: true,
    },
    scaleToSameSize: false,
  };

  COMPARE_IMAGE_DIFF_PERCENTAGE = 0;

  constructor(root: string, runnerOptions: Partial<VisualDiffSetup> = {}) {
    // @NOTE convert some-file.js to some-file
    const folder = path.basename(root, '.js');

    if (runnerOptions) {
      // Could overwrite if needed
      this.options = {
        ...this.options,
        ...runnerOptions,
      };
    }

    this.options = {
      ...this.options,
      basePath: path.join(this.options.basePath as string, folder),
      currentPath: path.join(this.options.currentPath as string, folder),
      diffPath: path.join(this.options.diffPath as string, folder),
    };
  }

  /**
   * PRIVATE
   */

  private _anyToImageName(url: string): string {
    let s = url
      .replace(/[^\w\s-]/g, '--')
      .trim()
      .toLowerCase();
    s = s.replace(/[-\s]+/g, '-');
    return `${s}.png`;
  }

  private async _isImageInBase(image: string, overwrite = false): Promise<void> {
    if (!fs.existsSync(path.join(this.options.basePath, image)) || overwrite) {
      await fs.copyFileSync(path.join(this.options.currentPath, image), path.join(this.options.basePath, image));
    }
  }

  private async _createDiffImage(buffer: any, name: string): Promise<void> {
    await fs.writeFile(path.join(this.options.diffPath, name), buffer);
  }

  private async _imageFrom(name: string, type: 'base' | 'diff' | 'current'): Promise<any> {
    const f = {
      base: this.options.basePath,
      current: this.options.currentPath,
      diff: this.options.diffPath,
    };
    return await fs.readFile(path.join(f[type], name));
  }

  /**
   * PUBLIC
   */

  /**
   * This will be best to be part of the constructor - but constructors could
   * not run async task.
   */
  async prepare() {
    // Drop current and diff folder for every run
    await fs.rmdir(this.options.currentPath, { recursive: true });
    await fs.rmdir(this.options.diffPath, { recursive: true });

    // Make sure that we got folders to put the images later on.
    mkdirp(this.options.basePath);
    mkdirp(this.options.currentPath);
    mkdirp(this.options.diffPath);
  }

  async createBrowser(options: BrowserOptions = { incognito: true }) {
    const puppy = await puppeteer.launch(this.puppetConfig);
    if (options && !options.incognito) {
      return puppy;
    }
    return await puppy.createIncognitoBrowserContext();
  }

  async goto(url: string, puppet: Browser): Promise<Page> {
    try {
      const page: Page = await puppet.newPage();
      await page.goto(url, { waitUntil: ['load', 'domcontentloaded'] });
      return page;
    } catch (couldNotVisit) {
      console.log(`Could not open: ${url}`);
      throw couldNotVisit;
    }
  }

  async visitAndCompareWithBase(url: string, selector: string, snapshotName: string, browser: Browser): Promise<void> {
    const page = await this.goto(url, browser);
    const screenshot = await this.screenshot(
      {
        name: snapshotName,
        selector: selector,
      },
      page
    );
    await page.close(); // we don't need the page object anymore.
    await this.expectToMatchBase(screenshot);
  }

  async emptyPage(puppet: Browser): Promise<Page> {
    try {
      return await puppet.newPage();
    } catch (failToCreatePage) {
      throw new Error('Fail to create empty page');
    }
  }

  async screenshot(
    params: { name: string; selector?: any },
    page: Page,
    // By default read global prop, but could be change if needed
    overwrite?: boolean
  ): Promise<string> {
    const imageName = this._anyToImageName(params.name);

    // Time to disabled animations - do it by default
    // @NOTE this will be done on every screenshot so could be optimize to be execute only once
    // @NOTE some animation still run - not sure why?
    await page.addStyleTag({
      content: `
      *,
      *::after,
      *::before {
          transition-delay: 0s !important;
          transition-duration: 0s !important;
          animation-delay: -0.0001s !important;
          animation-duration: 0s !important;
          animation-play-state: paused !important;
          caret-color: transparent !important;
          color-adjust: exact !important;
      }
    `,
    });

    if (params.selector) {
      await page.waitForSelector(params.selector);
      const selectorDOM = await page.$(params.selector);
      if (selectorDOM) {
        // setting as any to skip one `if` block
        const clipZone: any = await selectorDOM.boundingBox();

        await page.screenshot({
          path: path.join(this.options.currentPath, imageName),
          clip: clipZone,
        });
      } else {
        throw new Error(`Selector ${params.selector} was not found`);
      }
    } else {
      // Fullscreen
      await page.screenshot({
        path: path.join(this.options.currentPath, imageName),
        fullPage: true,
      });
    }

    /**
     * If image is not part of the base images just move it there
     */
    await this._isImageInBase(imageName, overwrite || this.options.updateSnapshots);

    return imageName;
  }

  async compareSnapshots(imageA: string, imageB: string, options: any = {}) {
    const diff = await ResemblejsCompareImages(imageA, imageB, {
      ...this.resembleConfig,
      ...{
        ignoreBoxes: options.ignoreBoxes || [],
      },
    });

    return diff;
  }

  async expectToMatchBase(testCondition: string): Promise<void> {
    // testCondition must be image name.
    const sideA = await this._imageFrom(testCondition as string, 'base');
    const sideB = await this._imageFrom(testCondition as string, 'current');

    const diff = await this.compareSnapshots(sideA, sideB);

    if (diff.rawMisMatchPercentage > this.COMPARE_IMAGE_DIFF_PERCENTAGE) {
      await this._createDiffImage(diff.getBuffer(), testCondition);
      throw new VisualExpectError(`Screenshot don't match with base image: ${diff.misMatchPercentage}% miss-match\n`, {
        diff: { ...diff },
        basePath: path.join(this.options.basePath, testCondition),
        currentPath: path.join(this.options.currentPath, testCondition),
        diffImage: path.join(this.options.diffPath, testCondition),
      });
    }
  }
}
