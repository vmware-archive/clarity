# Clarity Website Documentation

The Clarity website is powered by Vuepress, and also loads Storybook in an iframe for interactive demos.

## Run the website locally

To run the website, you can run `yarn website:start` to start the local Vuepress server. If you want to view the Storybook stories at the same time, you'll have to run a second tab with the command `yarn website:storybook` at the same time to have both servers running.

## Validate markdown

The documentation has a markdown linter setup that can help find little potential issues. Run `yarn website:lint` to check if the files are correct.

## How to generate images

When you generate images using a Macbook with Retina, we need to resize the images before we upload them.
