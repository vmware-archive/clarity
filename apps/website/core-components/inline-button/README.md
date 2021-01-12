---
title: Overview
toc: true
---

::: component-summary

Inline buttons are used inside and alongside textual content within Clarity components.

:::

::: component-section-level-one-title

## Usage

:::

:::component-section-level-one

Inline buttons give action buttons a less prominent, yet familiar, visual presence. Use them with caution, however, because they can be easily confused with links.

:::

<DocInset cds-layout="m-b:xl">
<p cds-text="body">
    This is a paragraph of text. This paragraph of text is going to be extended so that we can show how an inline button would fit into textual content. The inline button at the end of this paragraph looks like a link. But it is actually a button! <cds-inline-button>This is an inline button</cds-inline-button>
</p>
</DocInset>

::: component-section-level-two-title

### Buttons vs. Links

:::

:::component-section-level-two

Inline buttons look like links. Clarity recommends avoiding the use of inline buttons outside of paragraphs and text content. Because the inline buttons look so much like links, it can be easy to confuse users.

:::

::: component-section-level-two-title

### Button Text

:::

:::component-section-level-two

Clarity recommends using a clear call-to-action within the inline button because of the increased likelihood of confusing users with links vs. buttons.

:::

::: component-section-level-two-title

### Placement

:::

:::component-section-level-two

Clarity recommends placing inline buttons at the end of a paragraph or block of text. Placing an inline button inside of a paragraph or by itself is not recommended.

:::

<DocDoDont cds-layout="m-b:xxl">
<DocDo summary="Use buttons outside of blocks of text and only use inline buttons inside blocks of text as needed." demoHeight="280">
<div cds-layout="horizontal align:center p:lg">
    <div class="card-like" cds-layout="horizontal gap:lg p:md align:stretch">
        <div cds-layout="align:stretch p-t:sm">
            <p cds-text="body">Inline buttons should be used alongside blocks of text. The ideal placement is at the end of a paragraph. <cds-inline-button>This is an inline button</cds-inline-button></p>
        </div>
        <div cds-layout="vertical align:right">
            <cds-button>ok</cds-button>
        </div>
    </div>
</div>
</DocDo>
<DocDont slot="dont" summary="Use inline buttons outside of text content or in place of regular buttons." demoHeight="280">
<div cds-layout="horizontal gap:sm align:center">
    <div class="card-like" cds-layout="horizontal gap:lg p:md align:stretch">
        <div cds-layout="align:stretch p-t:sm">
            <p cds-text="body">Inline buttons should be used alongside blocks of text.</p>
        </div>
        <div><cds-inline-button>This inline button may not make sense here</cds-inline-button></div>
        <div style="width: 100%">
            <cds-inline-button cds-layout="align:right">OK</cds-inline-button>
        </div>
    </div>
</div>
</DocDont>
</DocDoDont>
