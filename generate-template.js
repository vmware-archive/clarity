const fs = require("fs");
const converter = require("xml-js");
const path = require("path");

const RELEASE_TEMPLATES = require("./src/releases/release-template-stub.json");

const NEWS_TEMPLATE_PATH = "./src/releases/final-template/news-template.html";
const FINAL_COMPONENT_TEMPLATE_PATH = "./src/releases/final-template/auto-generated-news.component.html";

const WRAPPER_TEMPLATE = '\n\n<!-- Release Template ${releaseNo}-->\n\n<ng-template [clrRelease]="\'${releaseNo}\'">\n\n${content}\n</ng-template>\n\n';
const RELEASE_TEMPLATE_ARR = [];

const FINAL_ROUTES_PATH = "./src/releases/final-template/auto-generated-routes.ts";
const ROUTES_TEMPLATE = "export const AUTO_GENERATED_ROUTES = [${routes}];"

/* Calls */
console.log("Auto generating release notes!");

generateReleaseTemplateArr();
generateTemplates(initializeTemplateFile);

initializeRoutesFile();
generateSitemapNewsUrls();

/* Functions */
function generateReleaseTemplateArr() {
    for (var release in RELEASE_TEMPLATES) {
        RELEASE_TEMPLATE_ARR.push({
            number: release,
            path: RELEASE_TEMPLATES[release]
        });
    }
}

function generateTemplates(callback) {
    var templates = [];
    var length = Object.keys(RELEASE_TEMPLATES).length;
    var error = [];

    RELEASE_TEMPLATE_ARR.forEach(function(release) {
        fs.readFile(release.path, "utf8", function (err, data) {
            length--;
            if (err) {
                error.push( {
                    release: release,
                    error: err
                });
            } else {
                var generatedTemplate = WRAPPER_TEMPLATE.replace("${releaseNo}", release.number);
                generatedTemplate = generatedTemplate.replace("${releaseNo}", release.number);
                generatedTemplate = generatedTemplate.replace("${content}", data);
                templates.push(generatedTemplate);
            }
            if (length === 0) {
                callback(templates, error);
            }
        });
    });
}

function initializeTemplateFile(templates, error) {
    if (error.length > 0) {
        console.log(error);
        throw new Error("Error while reading the templates", error);
    }
    if (fs.existsSync(FINAL_COMPONENT_TEMPLATE_PATH)) {
        fs.unlinkSync(FINAL_COMPONENT_TEMPLATE_PATH);
    }
    fs.writeFileSync(FINAL_COMPONENT_TEMPLATE_PATH, "");
    writeToFile(templates);
}

function writeToFile(templates) {
    fs.readFile(NEWS_TEMPLATE_PATH, "utf8", function (err, data) {
        if (err) {
           return console.log("Cannot read News template file", err);
        }
        fs.appendFileSync(FINAL_COMPONENT_TEMPLATE_PATH, data);
        templates.forEach(function(template) {
            fs.appendFileSync(FINAL_COMPONENT_TEMPLATE_PATH, template);
        });
    });
}

function initializeRoutesFile() {
    if (fs.existsSync(FINAL_ROUTES_PATH)) {
        fs.unlinkSync(FINAL_ROUTES_PATH);
    }
    generateRoutes();
}

function generateRoutes() {
    var routeTemplate = '\n{\n\tpath: "${releaseNo}",\n\tdata: {\n\t\tbrowserTitle: "${releaseNo}"\n\t}\n}';
    var routes = "";
    var stopComma = RELEASE_TEMPLATE_ARR.length - 1;
    RELEASE_TEMPLATE_ARR.forEach(function(release, k) {
        var temp = routeTemplate.replace("${releaseNo}", release.number);
        routes = routes + temp.replace("${releaseNo}", release.number);
        if (k < stopComma) {
            routes = routes + ",";
        }
    });
    var final_routes = ROUTES_TEMPLATE.replace("${routes}", routes);
    fs.writeFileSync(FINAL_ROUTES_PATH, final_routes);
}

function generateSitemapNewsUrls() {
    const baseUrl = 'https://vmware.github.io/clarity/news/';
    const sitemapPath = path.join(process.cwd(), "src", "sitemap.xml");
    const sitemapFile = fs.readFileSync(sitemapPath, {encoding: 'utf8'});
    const sitemap = converter.xml2js(sitemapFile, {compact: true});
    
    // Build an array of routes and paths
    const urls = sitemap.urlset.url
        .filter(item => !item.loc._text.startsWith(baseUrl));
    let releases = Object.values(RELEASE_TEMPLATES)
        .map(item => item.replace(/src\/releases\/(.*?)\/(.*?)\.html/i, '$2'));

    releases.forEach(release => {
        urls.push({
            loc: {
                _text: baseUrl + release
            },
            changefreq: {
                _text: 'daily'
            }
        });
    });
    sitemap.urlset.url = urls;

    fs.writeFileSync(sitemapPath, converter.js2xml(sitemap, {compact: true, spaces: 4}), {encoding: 'utf8'});
}