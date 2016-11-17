---
title: Iconography
permalink: /documentation/iconography
layout: documentation
---

{: .component-summary }
##### Clarity presents pixel-perfect and scalable SVG-based icons. This new icon system gives you complete control over the color, orientation, and size with pre-defined class names. Plus, you can access and customize any SVG graphic element inside the icon through standard CSS.

<div class="alert alert-info">
    <div class="alert-item">
        <span class="alert-text">
            We are currently working on an icon set.  We will update this page when the icons are ready.
        </span>
    </div>
</div>


<clr-iconography-demo></clr-iconography-demo>

{: #guidelines}
### Usage

Use the <code class="clr-code">clr-icon</code> tag and specify your desired icon shape inside its <code class="clr-code">shape</code> attribute.

##### Example:

<pre>
    <code clr-code-highlight="language-html">
        &lt;clr-icon shape=&quot;info&quot;&gt;&lt;/clr-icon&gt;
    </code>
</pre>

**Result:** <clr-icon shape="info" class="icon-size-sm"></clr-icon>

You can easily modify the size, the orientation, and the color of your Clarity Icons by specifying them in the class attribute.

<pre>
    <code clr-code-highlight="language-html">
        &lt;clr-icon shape=&quot;info&quot; class=&quot;icon-size-[sm/md/lg]&quot;&gt;&lt;/clr-icon&gt;
        &lt;clr-icon shape=&quot;info&quot; class=&quot;icon-orient-[up/right/down/left]&quot;&gt;&lt;/clr-icon&gt;
        &lt;clr-icon shape=&quot;info&quot; class=&quot;icon-color-[highlight/inverse/success/danger/warning/info]&quot;&gt;&lt;/clr-icon&gt;
    </code>
</pre>

{: .spacious}
To modify the size of your icon, choose one of these size classes:

<div class="row">
    <div class="col-xs-12">
        <table class="table">
            <thead>
                <tr>
                    <th class="left">Size options</th>
                    <th class="left">Small (default)</th>
                    <th class="left">Medium</th>
                    <th class="left">Large</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="left">Class</td>
                    <td class="left"><code class="clr-code">.icon-size-sm</code></td>
                    <td class="left"><code class="clr-code">.icon-size-md</code></td>
                    <td class="left"><code class="clr-code">.icon-size-lg</code></td>
                </tr>
                <tr>
                    <td class="left">Dimensions</td>
                    <td class="left">16px / 16px</td>
                    <td class="left">36px / 36px</td>
                    <td class="left">72px / 72px</td>
                </tr>
                <tr>
                    <td class="left">Preview</td>
                    <td class="left"><clr-icon shape="info" class="icon-size-sm"></clr-icon></td>
                    <td class="left"><clr-icon shape="info" class="icon-size-md"></clr-icon></td>
                    <td class="left"><clr-icon shape="info" class="icon-size-lg"></clr-icon></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

{: .spacious}
To modify the orientation of your icon, choose one of these orientation classes:

<div class="row">
    <div class="col-xs-12">
        <table class="table">
            <thead>
                <tr>
                    <th class="left">Orientation options</th>
                    <th class="left">Up (default)</th>
                    <th class="left">Right</th>
                    <th class="left">Down</th>
                    <th class="left">Left</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="left">Class</td>
                    <td class="left"><code class="clr-code">.icon-orient-up</code></td>
                    <td class="left"><code class="clr-code">.icon-orient-right</code></td>
                    <td class="left"><code class="clr-code">.icon-orient-down</code></td>
                    <td class="left"><code class="clr-code">.icon-orient-left</code></td>
                </tr>
                <tr>
                    <td class="left">Rotation</td>
                    <td class="left">0°</td>
                    <td class="left">90°</td>
                    <td class="left">180°</td>
                    <td class="left">270°</td>
                </tr>
                <tr>
                    <td class="left">Preview</td>
                    <td class="left"><clr-icon shape="info" class="icon-orient-up"></clr-icon></td>
                    <td class="left"><clr-icon shape="info" class="icon-orient-right"></clr-icon></td>
                    <td class="left"><clr-icon shape="info" class="icon-orient-down"></clr-icon></td>
                    <td class="left"><clr-icon shape="info" class="icon-orient-left"></clr-icon></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

{: .spacious}
To modify the color of your icon, choose one of these color classes:

<div class="row">
    <div class="col-xs-12">
        <table class="table table-vertical">
            <tbody>
                <tr>
                    <th>Color options</th>
                    <td>Class</td>
                    <td>Color code</td>
                    <td>Preview</td>
                </tr>
                <tr>
                    <th>Highlight</th>
                    <td><code class="clr-code">.icon-color-highlight</code></td>
                    <td>#007CBB</td>
                    <td><clr-icon shape="info" class="icon-color-highlight"></clr-icon></td>
                </tr>
                <tr>
                    <th>Danger</th>
                    <td><code class="clr-code">.icon-color-danger</code></td>
                    <td>#A32100</td>
                    <td><clr-icon shape="info" class="icon-color-danger"></clr-icon></td>
                </tr>
                <tr>
                    <th>Warning</th>
                    <td><code class="clr-code">.icon-color-warning</code></td>
                    <td>#E62700</td>
                    <td><clr-icon shape="info" class="icon-color-warning"></clr-icon></td>
                </tr>
                <tr>
                    <th>Success</th>
                    <td><code class="clr-code">.icon-color-success</code></td>
                    <td>#318700</td>
                    <td><clr-icon shape="info" class="icon-color-success"></clr-icon></td>
                </tr>
                <tr>
                    <th>Info</th>
                    <td><code class="clr-code">.icon-color-info</code></td>
                    <td>#007CBB</td>
                    <td><clr-icon shape="info" class="icon-color-info"></clr-icon></td>
                </tr>
                <tr>
                    <th>Inverse</th>
                    <td><code class="clr-code">.icon-color-inverse</code></td>
                    <td>#FFFFFF</td>
                    <td style="background-color:#414957"><clr-icon shape="info" class="icon-color-inverse"></clr-icon></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

##### Manipulate any SVG graphic element inside the icon

After adding <code class="clr-code">clr-icon</code> in your HTML, view it using a web inspection tool. You will find that SVG elements are injected inside the <code class="clr-code">clr-icon</code> tag that are responsible for drawing the icon.

You can individually select any of these SVG graphic elements and stylize them through CSS. For easier access to the individual graphic parts of the icon, there are pre-defined selection classes, <code class="clr-code">.outer-shape</code> and <code class="clr-code">.inner-shape</code>.

To select the enclosing path/stroke, use <code class="clr-code">.outer-shape</code> class. For a shape within the enclosing path/stroke, use <code class="clr-code">.inner-shape</code> class.
