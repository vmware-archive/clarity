# Clarity Schematics

This contains a schematics project for quickly scaffolding a new project with Clarity.

### Installation

```
npm i -g @angular/cli
```

### Usage

To create a new Clarity project, first create a new Angular project and then add Clarity. This requires using the Angular CLI verson 6.0.0-beta.5 or newer.

```
ng new [project-name]
cd ./project-name
ng add @clr/schematics
```

### Testing

To test locally, install `@angular-devkit/schematics` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with

```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run build
npm publish
```
