---
title: Code Highlight
permalink: /documentation/code-highlight
layout: documentation
hideTab: true
---

{: .component-summary }
##### Code Highlight is a custom directive to highlight code blocks using [Prism](http://prismjs.com/).

Highlighting languages other than HTML, CSS, and JavaScript requires <code class="clr-code">prism.css</code> and <code class="clr-code">prism.js</code> to be included in the page.

<clr-code-highlight-imports-demo></clr-code-highlight-imports-demo>

To highlight a code block, add the <code class="clr-code">clr-code-highlight</code> directive to the
<code class="clr-code">code</code> tag with the value set to the <code class="clr-code">language-*</code> style classes
from PrismJS. Refer to the [Prism documentation](http://prismjs.com/#languages-list) for the list of supported languages.

###### Example

<clr-code-highlight-snippet-demo></clr-code-highlight-snippet-demo>
