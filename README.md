# Clarity Website

### To create a new version of the docs

* Copy `latest` to new folder by name, such as `v0.11`
* Copy `prerender.ts` from v0.10 into `[new]/prerender.ts` (overwrite it)
* Update `build` and `build:ci` scripts in `[new]/package.json` like you see in v0.10
* Remove directories from `[new]/src/app` that aren't used (`community`, `home`, `icons`, `news`)
* Copy `v0.10/src/app/app.component.html` to `[new]/src/app/app.component.html`
* Copy `v0.10/src/app/app.component.ts` to `[new]/src/app/app.component.ts`
* Copy `v0.10/src/app/documentation/documentation-nav-links.component.ts` to `[new]/src/app/documentation/documentation-nav-links.component.ts`
* Remove the redirect route from `[new]/src/app/documentation/documentation-routing.module.ts`
* Update `.travis.yml` to build all versions
* Add new set of routes to `latest/src/sitemap.xml` for new version
* Copy the `v0.10/src/sitemap.xml` to `[new]/src/sitemap.xml`
* Do a search and replace for `../../../` -> `./` inside of `[new]/src/app/documentation` html files for fixing routes
* Update the HomeComponent where there are several routes to versioned documentation links