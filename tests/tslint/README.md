# no-barrel-imports

This is a custom TSLint rule that checks that any relative imports are not imported from the barrel (or in other words
not from an `index.ts` file). This forces all relative imports to target the full file path.

Since our Angular build has issues when you import from a barrel, this is the solution to catch it with the linter.

### Build

The source is in `src` and it compiles in to the `dist` directory. From the root of this repo, you can run
`npx tsc -p tests/tslint/tsconfig.json` to compile the rule. However, we don't need to commit the `dist` directory,
because its recompiled before any run of tslint (assuming you use `npm run test:lint`).

### References

* https://palantir.github.io/tslint/develop/custom-rules/
* https://github.com/Microsoft/tslint-microsoft-contrib
* https://github.com/eranshabi/tslint-custom-rules-boilerplate
