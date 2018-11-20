import { Component } from '@angular/core';


const ICONS_IMPORTS_ALL = `
<!--CLARITY ICONS STYLE-->
<link rel="stylesheet" href="path/to/node_modules/@clr/icons/clr-icons.min.css">

<!--CLARITY ICONS DEPENDENCY: CUSTOM ELEMENTS POLYFILL-->
<script src="path/to/node_modules/@webcomponents/custom-elements/custom-elements.min.js"></script>

<!--CLARITY ICONS API & ALL ICON SETS-->
<script src="path/to/node_modules/@clr/icons/clr-icons-all.min.js"></script>
`;

const ICONS_IMPORTS_SOME = `
<!--CLARITY ICONS STYLE-->
<link rel="stylesheet" href="path/to/node_modules/@clr/icons/clr-icons.min.css">

<!--CLARITY ICONS DEPENDENCY: CUSTOM ELEMENTS POLYFILL-->
<script src="path/to/node_modules/@webcomponents/custom-elements/custom-elements.min.js"></script>

<!--CLARITY ICONS API-->
<script src="path/to/node_modules/@clr/icons/clr-icons.min.js"></script>

<!--ICON SETS-->
<script src="path/to/node_modules/@clr/icons/shapes/social.min.js"></script>
<script src="path/to/node_modules/@clr/icons/shapes/travel.min.js"></script>
`;

const ICONS_IMPORTS_TS_CORE = `
import { ClarityIcons } '@clr/icons';

// To initialize without adding any icons
ClarityIcons.init();

`;

const ICONS_IMPORTS_TS_SOME = `
import { ClarityIcons, EssentialShapes, TechnologyShapes } '@clr/icons';

// To initialize with an icon set
ClarityIcons.init(EssentialShapes);

// To add more shapes
ClarityIcons.add(TechnologyShapes);
`;

const ICONS_IMPORTS_TS_ALL = `
import { ClarityIcons, AllShapes } '@clr/icons';

// To initialize with all icons
ClarityIcons.init(AllShapes);
`;

const ICONS_NODE_IMPORTS = `
"styles": [
    ...
    "../node_modules/@clr/icons/clr-icons.min.css",
    ...
],
"scripts": [
    ...
    "../node_modules/@webcomponents/custom-elements/custom-elements.min.js",
    "../node_modules/@clr/icons/clr-icons-all.min.js"
    ...
]`;

const ICONS_TS_IMPORTS = `
    import '@clr/icons';
import '@clr/icons/shapes/essential';
`;

const ICONS_OPTIMIZATION = `
import { ClarityIcons, ClrShapePin, ClrShapeStar, ClrShapeCar } from "@clr/icons";

// Assuming ClarityIcons.init() has been called before
ClarityIcons.add(ClrShapePin);
ClarityIcons.add(ClrShapeStar);
ClarityIcons.add(ClrShapeCar);
`

@Component({
    selector: 'icons-get-started',
    templateUrl: './icons-get-started.component.html',
    styleUrls: ['./icons-get-started.component.scss']
})
export class IconsGetStartedComponent {

    public iconsImportsAllExample = ICONS_IMPORTS_ALL;
    public iconsImportsSomeExample = ICONS_IMPORTS_SOME;
    public iconsImportsTSCoreExample = ICONS_IMPORTS_TS_CORE;
    public iconsImportsTSSomeExample = ICONS_IMPORTS_TS_SOME;
    public iconsImportsTSAllExample = ICONS_IMPORTS_TS_ALL;
    public iconsOptimizationExample = ICONS_OPTIMIZATION;

}
