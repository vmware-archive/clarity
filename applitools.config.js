const theme = process.env.CLARITY_THEME || 'light';

module.exports = {
  appName: `Clarity - ${theme}`,
  browser: [
    { width: 1024, height: 768, left: 0, top: 0, name: 'chrome' },
    { width: 1024, height: 768, left: 0, top: 0, name: 'firefox' },
    { width: 1024, height: 768, left: 0, top: 0, name: 'ie11' },
    { width: 1024, height: 768, left: 0, top: 0, name: 'edge' },
  ],
  concurrency: 5,
};
