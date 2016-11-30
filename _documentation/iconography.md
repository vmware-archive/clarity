---
title: Iconography
permalink: /documentation/iconography
layout: documentation
---

{: .component-summary }
##### Clarity presents pixel-perfect and scalable SVG-based icons. This new icon system gives you complete control over the color, orientation, and size. Additionally, you can access and customize any SVG graphic element inside the icon through standard CSS.

##### 1. Current icon options
<clr-icon-selection-demo></clr-icon-selection-demo>

##### 2. Color options
<clr-icon-colors-demo></clr-icon-colors-demo>

##### Inverse color option
<clr-icon-inverse-colors-demo></clr-icon-inverse-colors-demo>

##### 3. Setting the icon size
<clr-icon-size-demo></clr-icon-size-demo>

##### 4. Orientation options
<clr-icon-orientation-demo></clr-icon-orientation-demo>

{: #guidelines}
### Usage

###### Predefined color classes:

<div class="row">
    <div class="col-xs-12">
        <table class="table table-vertical">
            <tbody>
                <tr>
                    <th>Color options</th>
                    <td class="hidden-xs-down">Class</td>
                    <td>Color code</td>
                    <td>Preview</td>
                </tr>
                <tr>
                    <th>
                        Highlight
                        <div class="hidden-sm-up"><code class="clr-code">.icon-color-highlight</code></div>
                    </th>
                    <td class="hidden-xs-down"><code class="clr-code">.icon-color-highlight</code></td>
                    <td>#007CBB</td>
                    <td><clr-icon shape="info" size="24" class="icon-color-highlight"></clr-icon></td>
                </tr>
                <tr>
                    <th>
                        Danger
                        <div class="hidden-sm-up"><code class="clr-code">.icon-color-danger</code></div>
                    </th>
                    <td class="hidden-xs-down"><code class="clr-code">.icon-color-danger</code></td>
                    <td>#A32100</td>
                    <td><clr-icon shape="info" size="24" class="icon-color-danger"></clr-icon></td>
                </tr>
                <tr>
                    <th>
                        Warning
                        <div class="hidden-sm-up"><code class="clr-code">.icon-color-warning</code></div>
                    </th>
                    <td class="hidden-xs-down"><code class="clr-code">.icon-color-warning</code></td>
                    <td>#E62700</td>
                    <td><clr-icon shape="info" size="24" class="icon-color-warning"></clr-icon></td>
                </tr>
                <tr>
                    <th>
                        Success
                        <div class="hidden-sm-up"><code class="clr-code">.icon-color-success</code></div>
                    </th>
                    <td class="hidden-xs-down"><code class="clr-code">.icon-color-success</code></td>
                    <td>#318700</td>
                    <td><clr-icon shape="info" size="24" class="icon-color-success"></clr-icon></td>
                </tr>
                <tr>
                    <th>
                        Info
                        <div class="hidden-sm-up"><code class="clr-code">.icon-color-info</code></div>
                    </th>
                    <td class="hidden-xs-down"><code class="clr-code">.icon-color-info</code></td>
                    <td>#007CBB</td>
                    <td><clr-icon shape="info" size="24" class="icon-color-info"></clr-icon></td>
                </tr>
                <tr>
                    <th>
                        Inverse
                        <div class="hidden-sm-up"><code class="clr-code">.icon-color-inverse</code></div>
                    </th>
                    <td class="hidden-xs-down"><code class="clr-code">.icon-color-inverse</code></td>
                    <td>#FFFFFF</td>
                    <td style="background-color:#414957"><clr-icon shape="info" size="24" class="icon-color-inverse"></clr-icon></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

###### Icon orientations:

When you set the icon orientation either in the <code class="clr-code">shape</code> or <code class="clr-code">dir</code> attribute of the <code class="clr-code">clr-icon</code>, it rotates its inside SVG graphic element to your specified direction.

<div class="row">
    <div class="col-xs-12">
        <table class="table">
            <thead>
                <tr>
                    <th class="left">Orientation options</th>
                    <th class="left">up</th>
                    <th class="left">right</th>
                    <th class="left">down</th>
                    <th class="left">left</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="left">Rotation</td>
                    <td class="left">0°</td>
                    <td class="left">90°</td>
                    <td class="left">180°</td>
                    <td class="left">270°</td>
                </tr>
                <tr>
                    <td class="left">Preview</td>
                    <td class="left"><clr-icon shape="caret up" size="24"></clr-icon></td>
                    <td class="left"><clr-icon shape="caret right" size="24"></clr-icon></td>
                    <td class="left"><clr-icon shape="caret down" size="24"></clr-icon></td>
                    <td class="left"><clr-icon shape="caret left" size="24"></clr-icon></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>


###### Manipulate any SVG graphic element inside the icon


After adding <code class="clr-code">clr-icon</code> in your HTML, view it using a web inspection tool. You will find that SVG elements are injected inside the <code class="clr-code">clr-icon</code> tag that are responsible for drawing the icon.

You can individually select any of these SVG graphic elements and stylize them through CSS. For easier access to the individual graphic parts of the icon, there are pre-defined selection classes, <code class="clr-code">.outer-shape</code> and <code class="clr-code">.inner-shape</code>.

To select the enclosing path/stroke, use <code class="clr-code">.outer-shape</code> class. For a shape within the enclosing path/stroke, use <code class="clr-code">.inner-shape</code> class.
