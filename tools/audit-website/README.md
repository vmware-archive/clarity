# Audit Website

This tool scrapes the website URLs from the domain `sitemap.xml` and then runs Lighthouse against each page. This can take some time, so be prepared for it to run a little while for each page.

This is useful to allow you to quickly score and measure performance and other metrics from Lighthouse.

## Usage

By default, it is configured to run against https://clarity.design.

`node index`

If you want to run against a different site, you will just pass the `--url` like this.

`node index --url https://example.com`

## Reports

It will generate a report for each page and a consolidated summary CSV file that has just the metrics for each page.

Reports are generated in `/reports/audit-website/`.
