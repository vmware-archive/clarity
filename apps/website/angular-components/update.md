# Updating Clarity

In order to keep up with Clarity, you can use ng update to automatically update Clarity to the latest version in your Angular project. This will also run any migration schematics, which can update code for you or warn you about changes in Clarity that affect your application. It usually helps to update Angular first, then Clarity.

```bash
ng update @angular/core @angular/cli
ng update @clr/angular
```

If you want to update to a prerelease version, you can do so by running:

```bash
ng update @angular/core@next @angular/cli@next
ng update @clr/angular@next
```
