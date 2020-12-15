---
title: Internationalization
toc: true
---

Easily translate internal Clarity text into multiple languages.

## Internal language strings

Clarity has a list of text strings that it uses internally for things such as icon alt text or button text. When possible, Clarity avoids using text strings that have to be translated, and rarely changes this list. Any Angular application that needs to support multiple languages can create a different translation and use it for each language.

In order to improve accessibility of its components, Clarity added a default English title to all icons or non-text interactive elements internal to its components. In order to internationalize them we rely on a `ClrCommonStringsService` service that allows you to provide localized strings for your entire app, which will override our default titles.

## How to Localize

First, you need to make a new object that has a key value pair for each string you want to localize. You only need to define the strings that you need for your application. Then Inject the customized strings into the service.

<doc-code>
<<< .vuepress/code/demos/i18n/localize-ng.ts
</doc-code>

It is possible to call the `ClrCommonStringsService.localize()` method at anytime and change the translation. You could call a backend service to load these translation strings as well and then update them on the fly when a user changes translations in your app.

<doc-code>
<<< .vuepress/code/demos/i18n/translate-ng.ts
</doc-code>

### Localization Strings

The list of strings available to configure can be found by simply looking at the declaration of the `ClrCommonStrings` interface, which is found below.

<DocLocalizationStrings />

## Updating

If you used the original implementation of `ClrCommonStrings` found in versions prior to v1.2.1 and v2.1.1, you need to follow these steps to update to the new API that is used from v1.2.1 on in Clarity.

First, remove the provider from your `AppModule`. It should look something like the following.

<doc-code>
<<< .vuepress/code/demos/i18n/update-step-1.ts
</doc-code>

Second, convert your string service class to an object. This is optional but makes for easier formatting. If you skip this step, you'll have to create a new instance of your class to convert it to an object.

<doc-code>
<<< .vuepress/code/demos/i18n/update-step-2.ts
</doc-code>

Finally, you can now inject the `ClrCommonStringsService` into your `AppComponent` and pass in the localized strings, as shown above.

The previous implementation was broken because unless each application declared the provider themselves, none of the localization strings would remain after a production build and tree shaking. The refactoring that was done keeps the defaults inside of Clarity so they do not get removed, and allows applications the ability to still provide custom language strings for localization.
