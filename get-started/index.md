---
layout: get-started
permalink: /get-started/index.html
---

{:#introduction}
# Clarity Design System

### Collaborative, Open, Evolving

The Clarity design system brings user experience, implementation, tools, and guidelines together. Clarity reflects solid design thinking and incorporates best practices from consumer and enterprise software. Patterns and components are tested and tuned for ease of development and user confidence.

#### Clarity is ...

###### Forward-Looking

Clarity is based on analytics, research, and best practices. A living framework, Clarity embraces continual research and new technologies.  Design principles, workflows, and patterns are always evolving to create the best user experience possible.

###### Engaging

More than an appealing color palette and layout, Clarity design considers interactions, workflows, voice and tone, vertical rhythm, and more. Engaging the user with every interaction is of upmost importance.  It builds trust.

###### Sustainable

Built for today, and tomorrow, Clarity designs are responsive, accessible, and reusable.  Clarity strives for a small footprint, using only the necessary resources. This makes Clarity a good citizen.

###### Focused

Clarity is a good steward of users’ attention. Clarity helps  users attain their goals by reinforcing focus with the consistent use of components, interaction, design, color, and motion. Minimal and clean, Clarity pays attention to the details so that end-users and developers don't have to.

###### Communicative

Disciplined, flexible, precise.  Clarity instills discoverability and feedback, clearly articulating calls to action and highlighting what's immediate.

### More Than a Style Guide

More than a mere style guide or look and feel, Clarity is an open, holistic design system with a dedicated team and a community of developers and designers.  The design system includes:

{: .list}
- Patterns
- Components
- Sample code
- Guidelines
- Build environment
- Accessibility testing
- Angular 2


### Workstreams

The design system is orchestrated across four cross-functional workstreams.



<section class="home-cards">
    <div class="home-cards-container clearfix">
        {% for ws in site.data.workstreams.workstreams %}
            <div class="home-card-wrapper">
                <div class="home-card home-card-{{ forloop.index }}">
                    <div class="home-card-bug">
                        <div class="valign">
                            <div>
                                <img src="{{ site.baseurl }}{{ site.data.global.images_path }}{{ site.data.workstreams.gsImgPath }}{{ ws.gsBug }}" alt="{{ ws.prettyName }}">
                            </div>
                        </div>
                    </div>
                    <h4 class="home-card-title">
                        <div class="valign">
                            <div>{{ ws.name }}</div>
                        </div>
                    </h4>
                    <div class="home-card-text">
                        <div class="valign">
                            <div>{{ ws.gsDescription }}</div>
                        </div>
                    </div>
                </div>
            </div>
        {% endfor %}
    </div>
</section>

<hr>

{: #howToUse}
# How to Use Clarity

We offer three approaches for consuming Clarity.

###### UX

Consuming Clarity at the visual specification level works well for quickly styling applications that must be maintained and yet must move to a modern look and feel.  This limited approach, however, has challenges in staying current with the framework as Clarity evolves.  Anyone who uses the UX path must also have a plan to adopt the UI and NG paths.

###### UX + UI

For products that are not Angular based, we recommend using Clarity's HTML and CCS. This tool combination makes Clarity updates more easily available.

###### Full Clarity (UX + UI + NG)

For the most complete integration with Clarity, consume the framework at the Angular 2 level.

{: #sketchTemplate}
## Using the Clarity Template for Sketch

The Clarity Sketch template contains a library of components to help jumpstart your project. The template is versioned alongside other products in Clarity’s ecosystem (Clarity UI, Clarity Angular, Clarity Web). Download the most current version to ensure you have the most up-to-date components.

Note that in order to design with the Sketch template, the open-source Metropolis font by Chris M. Simpson will need to be installed.

- [Download the latest Sketch template]({{ site.baseurl }}{{ site.data.global.template_link }}){: target='_blank' }
- [Download the Metropolis font](https://github.com/chrismsimpson/Metropolis){: target='_blank' }

{: #seedProjectClarity}
## Starting With a Clarity Seed Project (Recommended)

For a new project, the best approach is to clone the Clarity seed project and modify it to fit your needs. The seed project is integrated with clarity-ui and clarity-angular, so you don’t need to install Clarity separately. 

<p></p>
<ol class="list">
<li>Clone the seed app:
<pre>
    <code class="clr-code">
        git@github.com:vmware/clarity-seed.git
    </code>
</pre>
</li>
<li>Install the dependencies:
<pre>
    <code class="clr-code">
       npm install
    </code>
</pre>
</li>
<li>Run the seed app:
<pre>
	<code class="clr-code">
       npm start
    </code>
</pre>
</li>
</ol>

{: #seedProjectAngular}
## Starting With an Angular Seed Project

You can build an Angular 2 app, then install Clarity onto your project.

### Step 1: Build an Angular 2 App
<p></p>
<ol class="list">
<li>Look at the Angular 2 documentation, starting with <a href="https://angular.io/docs/ts/latest/quickstart.html">the 5 Min Quickstart</a>.</li>
<li>Save and modify the example structure and build, or use one of the Angular seeds:
<ul class="list">
<li><a href="https://github.com/angular/angular-cli">https://github.com/angular/angular-cli</a> (in Beta)</li>
<li><a href="https://github.com/mgechev/angular2-seed">https://github.com/mgechev/angular2-seed</a></li>
<li><a href="https://github.com/angular/angular2-seed">https://github.com/angular/angular2-seed</a> </li>
<li><a href="https://github.com/AngularClass/angular2-webpack-starter">https://github.com/AngularClass/angular2-webpack-starter</a></li>
</ul>
</li>
</ol>

{: #installing}
### Step 2:  Install Clarity

Clarity is published as three separate packages on NPM:

<a id="clarity_icons"></a>
<ul class="list">
<li><b>clarity-icons.</b> Contains the custom element icons.</li>
<li><b>clarity-ui.</b> Contains the static styles for building HTML components.</li>
<li><b>clarity-angular.</b> Contains the Angular 2 components. This package depends on clarity-ui for styles.
</li>
</ul>

#### Install Clarity Icons
<p></p>

<ol class="list">
<li>Install the Clarity Icons package through npm:
<pre>
    <code class="clr-code">
       npm install clarity-icons
    </code>
</pre>
</li>
<li>Install the polyfill for Custom Elements: 
<pre>
    <code class="clr-code">
        npm install github:webcomponents/custom-elements.git#v1.0.0-alpha.3
    </code>
</pre>
</li>
<li>If your application supports IE10, the polyfill requires the MutationObserver shim to work. If your application does not support IE10, you can skip the following installation:
<pre>
    <code class="clr-code">
        npm install mutationobserver-shim@0.3.2
    </code>
</pre>
</li>
<li>
Include clarity-icons.min.css and clarity-icons.min.js in your HTML. Because custom-elements.min.js is dependent on the Custom Elements polyfill, you must include it before clarity-icons.min.js. If your app supports IE10, include mutationobserver.min.js before the polyfill:
<pre>
    <code class="language-html">
        &lt;link rel=&quot;stylesheet&quot; href=&quot;path/to/node_modules/clarity-icons/clarity-icons.min.css&quot;&gt;
        
   &lt;script src=&quot;path/to/node_modules/mutationobserver-shim/dist/mutationobserver.min.js&quot;&gt;&lt;/script&gt;
        &lt;script src=&quot;path/to/node_modules/@webcomponents/custom-elements/custom-elements.min.js&quot;&gt;&lt;/script&gt;
        &lt;script src=&quot;path/to/node_modules/clarity-icons/clarity-icons.min.js&quot;&gt;&lt;/script&gt;
    </code>
</pre>
</li>
</ol>

#### Install Clarity UI

<p></p>
<ol class="list">
<li>Install Clarity UI package through npm:
<pre>
    <code class="clr-code">
       npm install clarity-ui
    </code>
</pre>
</li>
<li>Install FontAwesome:
<pre>
    <code class="clr-code">
       npm install font-awesome
    </code>
</pre>
</li>
<li>Include font-awesome.css and clarity-ui.min.css in your HTML file:
<pre>
    <code class="language-html">
	&lt;link rel="stylesheet" href="path/to/node_modules/font-awesome/css/font-awesome.min.css"&gt;
	&lt;link rel="stylesheet" href="path/to/node_modules/clarity-ui/clarity-ui.min.css"&gt;    
</code>
</pre>
</li>
<li>Write your HTML with the Clarity CSS class names and markup.</li>
</ol>

#### Install Clarity Angular

<p></p>
<ol class="list">
<li>If you haven't already, complete steps 1 and 2 for installing Clarity UI in the preceding section.
</li>
<li>Install the clarity-angular package through npm:
<pre>
    <code class="clr-code">
       npm install clarity-angular
    </code>
</pre>
</li>
<li>Install the clarity-angular package through npm:
<pre>
    <code class="language-html">
       import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        ClarityModule,
        ....
     ],
     declarations: [ AppComponent ],
     bootstrap: [ AppComponent ]
})
export class AppModule {    }
    </code>
</pre>
</li>
</ol>


### Step 3: Run Your App

<pre>
    <code class="clr-code">
        npm start
    </code>
</pre>


{: #browserSupport}
## Device and Browser Support

{: .bump-down}
![Device and Browser Support]({{ site.baseurl }}/images/get-started/device_support.png?{{ site.time | date: '%s%N' }})

<hr>


{: #contribute_guidelines}
# Contributing to Clarity

The Clarity team welcomes contributions from the community.  See our [contribution guidelines](https://github.com/vmware/clarity//blob/master/CONTRIBUTING.md){: target='_blank' } on GitHub.

<hr>


{: #reportingBugs}
## Reporting an Issue

Ongoing work and feature requests are tracked using [GitHub Issues](https://github.com/vmware/clarity/issues){: target='_blank' }. Please feel free to file an issue.

<hr>


{: #attributions }
# Attributions

See the [legal attributions](https://github.com/vmware/clarity/blob/master/ATTRIBUTION.md){: target='_blank' } for third party software included in Clarity.

<div style="visibility: hidden; height: 50vh;">This is a spacer to force sidenav highlighting on scroll</div>
