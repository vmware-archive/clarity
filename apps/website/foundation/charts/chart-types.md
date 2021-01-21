---
title: Chart Types
toc: true

area_chart_options:
  title:
    text: Area chart with negative values
  chart:
    type: area
  xAxis:
    categories:
      - Apples
      - Oranges
      - Pears
      - Grapes
      - Bananas
    gridLineWidth: 0
  series:
    - name: John
      data:
        - 5
        - 3
        - 4
        - 7
        - 2
    - name: Joe
      data:
        - 3
        - 4
        - 4
        - -2
        - 5
    - name: Jane
      data:
        - 2
        - -2
        - -3
        - 2
        - 1

bar_chart_options:
  title:
    text: Stacked bar chart
  chart:
    type: bar
  xAxis:
    categories:
      - Apples
      - Oranges
      - Pears
      - Grapes
      - Bananas
    gridLineWidth: 0
  yAxis:
    min: 0
    title:
      text: Total fruit consumption
  plotOptions:
    series:
      stacking: normal
  legend:
    - reversed: true
  series:
    - name: John
      data:
        - 5
        - 3
        - 4
        - 7
        - 2
    - name: Jane
      data:
        - 2
        - 2
        - 3
        - 2
        - 1
    - name: Joe
      data:
        - 3
        - 4
        - 4
        - 2
        - 5

pie_chart_options:
  title:
    text: Pie Chart
  chart:
    type: pie
  series:
    - name: Fruits
      colorByPoint: true
      data:
        - name: Apples
          y: 61.41
        - name: Oranges
          y: 11.84
        - name: Pears
          y: 10.85
        - name: Grapes
          y: 4.67
        - name: Bananas
          y: 4.18
        - name: Others
          y: 7.05
---

::: component-section-level-one-title

## Chart Types

:::

::: component-section-level-two-title

### Area Chart

:::

::: component-section-level-two

<div>
  <doc-charts-ChartThemeSelector>
    <template v-slot="{ themeId, darkTheme }">
        <doc-charts-HighChart
          :options="$frontmatter.area_chart_options"
          :theme="themeId"
        />
    </template>
  </doc-charts-ChartThemeSelector>
</div>

An area chart is basically a line chart, but the space between the x-axis and
the line is filled with a color or pattern. It is useful for showing part-to-whole
relations, such as showing individual sales reps' contribution to total sales for
a year. It helps you analyze both overall and individual trend information.

:::

::: component-section-level-two-title

### Design Best Practices for Area Charts:

:::

::: component-section-level-two

- Use transparent colors so information isn't obscured in the background.
- Don't display more than four categories to avoid clutter.
- Organize highly variable data at the top of the chart to make it easy to read.

:::

::: component-section-level-two-title

### Bar chart

:::

::: component-section-level-two

<div>
  <doc-charts-ChartThemeSelector>
    <template v-slot="{ themeId, darkTheme }">
        <doc-charts-HighChart
          :options="$frontmatter.bar_chart_options"
          :theme="themeId"
          :darkTheme="darkTheme"
        />
    </template>
  </doc-charts-ChartThemeSelector>
</div>

A bar graph, basically a horizontal column chart, should be used to avoid
clutter when one data label is long or if you have more than 10 items to
compare. This type of visualization can also be used to display negative numbers.

:::

::: component-section-level-two-title

### Design Best Practices for Bar Graphs:

:::

::: component-section-level-two

- Use consistent colors throughout the chart, selecting accent colors to highlight
  meaningful data points or changes over time.
- Use horizontal labels to improve readability.
- Start the y-axis at 0 to appropriately reflect the values in your graph.
- When creating a stacked column chart always separate the segments with a
  stroke, the same color as the background.

:::

::: component-section-level-two-title

### Pie chart

:::

::: component-section-level-two

<div>
  <doc-charts-ChartThemeSelector>
    <template v-slot="{ themeId, darkTheme }">
        <doc-charts-HighChart
          :options="$frontmatter.pie_chart_options"
          :theme="themeId"
          :darkTheme="darkTheme"
        />
    </template>
  </doc-charts-ChartThemeSelector>
</div>

A pie chart shows a static number and how categories represent part of a whole.
A pie chart represents numbers in percentages, and the total sum of all segments needs to equal 100%.

:::

::: component-section-level-two-title

### Design Best Practices for Pie Charts:

:::

::: component-section-level-two

- Don't illustrate too many categories to ensure differentiation between slices.
  Best pie charts consist of not more than 6-8 variables. If you need to show more than that,
  consider using a bar or a column chart.
- Ensure that the slice values add up to 100%.
- Order slices according to their size.

:::

::: component-section-level-two-title

### Column chart

:::

::: component-section-level-two

A column chart is used to show a comparison among different items, or it can
show a comparison of items over time. You could use this format to see the
revenue per landing page or customers by close date.

:::

::: component-section-level-two-title

### Design Best Practices for Column Charts:

:::

::: component-section-level-two

- Use consistent colors throughout the chart, selecting accent colors to
  highlight meaningful data points or changes over time.
- Use horizontal labels to improve readability.
- Start the y-axis at 0 to appropriately reflect the values in your graph.

:::

::: component-section-level-two-title

### Line chart

:::

::: component-section-level-two

A line graph reveals trends or progress over time and can be used to
show many different categories of data. You should use it when you chart a continuous data set.

Design Best Practices for Line Graphs:

- Use solid lines only.
- Don't plot more than four lines to avoid visual distractions.
- Use the right height so that the lines take up roughly 2/3 of the y-axis' height.

:::
