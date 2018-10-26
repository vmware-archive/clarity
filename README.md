# Clarity Website

### To create a new version of the docs

* Add new version to `latest/src/settings/versions.json`
* Update the `latest/src/environments/environment.prod.ts` with versions
* Copy `latest` to new folder by name, such as `v0.13`
* Copy `prerender.ts` from v0.12 into `[new]/prerender.ts` (overwrite it)
* Update `deploy` and `deploy:ci` scripts in `[new]/package.json` like you see in v0.12
* Remove directories from `[new]/src/app` that aren't used (`community`, `home`, `icons`, `news`)
* Copy `v0.12/src/app/app.component.html` to `[new]/src/app/app.component.html`
* Copy `v0.12/src/app/app.component.ts` to `[new]/src/app/app.component.ts`
* Copy `v0.12/src/app/app.module.ts` to `[new]/src/app/app.module.ts`
* Copy `v0.12/src/app/app-routing.module.ts` to `[new]/src/app/app-routing.module.ts`
* Copy `v0.12/src/app/documentation/documentation-nav-links.component.ts` to `[new]/src/app/documentation/documentation-nav-links.component.ts`
* Copy `v0.12/src/app/documentation/documentation.component.html` to `[new]/src/app/documentation/documentation.component.html`
* Copy the `v0.12/src/sitemap.xml` to `[new]/src/sitemap.xml`
* Remove the redirect route from `[new]/src/app/documentation/documentation-routing.module.ts`, and change the path to `""` for the root route
* Update `.travis.yml` to build all versions
* Add new set of routes to `latest/src/sitemap.xml` for new version
* Do a search and replace for `../../../` -> `./` inside of `[new]/src/app/documentation` html files for fixing routes
* Update the HomeComponent where there are several routes to versioned documentation links

### Caches

Old versions of documentation are cached, so `v0.10` directory contains the source and `v0.10-cache` contains the built assets. During the build it will now copy the cache over instead of building, since this version of the documentation should be changed rarely.

To make a cache, simply run `npm run deploy:ci` and then copy the `deploy/documentation/{version}` to the main root and rename it like `v0.11-cache`. The in `travis.yml` update the commands so it doesn't build that version but copies it to the correct location.