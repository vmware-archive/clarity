# Link Checker

This is a simple tool that allows you to run a 404 scanner on a URL and it will scan the entire website and report any broken URLs.

Some URLs may come back as broken but are not, depending on how they are handled on the server (such as file downloads). This should be improved at a later date.

## Usage

By default, it is configured to run against https://clarity.design.

`node index`

If you want to run against a different site, you will just pass the `--url` like this.

`node index --url https://example.com`

## Reports

Reports are generated in `/reports/link-checker/reports.csv`.
