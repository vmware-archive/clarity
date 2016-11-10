---
title: Toggle Switches
permalink: /documentation/toggle-switches
layout: documentation
---

{: .component-summary }
#### A toggle switch changes on and off states of a single setting.

To create a toggle switch, wrap an <code class="clr-code">input[type="checkbox"]</code> element and a <code class="clr-code">label</code> element in a block-level wrapper (like a <code class="clr-code">div</code>) with the <code class="clr-code">.toggle-switch</code> classname. To use a toggle without any label, keep the <code class="clr-code">label</code> tag empty.
The default toggle is gray in its “off” state and green in its “on” state. The user can change states by clicking on either the toggle or its accompanying label.


### Disabled Toggles

To disable a toggle switch, add the <code class="clr-code">disabled</code> attribute to the toggle's <code class="clr-code">checkbox</code> input.
When disabled, the toggle appears gray. The user cannot change the state of the toggle. And the present state is reflected in both the location of the toggle switch and by the “on” state being a slightly darker gray.


<clr-toggles-demo></clr-toggles-demo>

{% comment %}
    Design guidelines start here...
{% endcomment %}

### Usage

Use a toggle switch when you need the sole options of “on” and “off.”

Toggle switches take up less space than an “on/off” [radio button group]({{ site.baseurl }}/documentation/radios) and communicate their intended purpose better than a [checkbox]({{ site.baseurl }}/documentation/checkboxes) that toggles functionality.

#### Toggle States

Toggle switches do not include "ON" and "OFF" text because these states are clearly implied.

#### Label

The label should clearly describe the setting.  Although Clarity supports a toggle switch without a label, use this approach only if the purpose of the control is made clear elsewhere, for example, in a group label or section header.
