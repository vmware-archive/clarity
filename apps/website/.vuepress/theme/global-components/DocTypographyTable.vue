<template>
  <section>
    <table cds-table cds-text="align:left" cds-layout="m-t:lg">
      <thead>
        <tr>
          <th>Class</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td cds-layout="p-t:lg p-b:lg"><p cds-text="display">Display</p></td>
          <td cds-layout="p-t:lg p-b:lg"><p cds-text="display">40px Medium</p></td>
        </tr>
        <tr>
          <td cds-layout="p-t:lg p-b:lg"><p cds-text="heading">Heading</p></td>
          <td cds-layout="p-t:lg p-b:lg"><p cds-text="heading">32px Medium</p></td>
        </tr>
        <tr>
          <td cds-layout="p-t:lg p-b:lg"><p cds-text="title">Title</p></td>
          <td cds-layout="p-t:lg p-b:lg"><p cds-text="title">24px Medium</p></td>
        </tr>
        <tr>
          <td cds-layout="p-t:lg p-b:lg"><p cds-text="section">Section</p></td>
          <td cds-layout="p-t:lg p-b:lg"><p cds-text="section">20px Medium</p></td>
        </tr>
        <tr>
          <td cds-layout="p-t:lg p-b:lg"><p cds-text="subsection">Subsection</p></td>
          <td cds-layout="p-t:lg p-b:lg"><p cds-text="subsection">16px Medium</p></td>
        </tr>
        <tr>
          <td cds-layout="p-t:lg p-b:lg"><p cds-text="message">Message</p></td>
          <td cds-layout="p-t:lg p-b:lg"><p cds-text="message">16px Regular</p></td>
        </tr>
        <tr>
          <td cds-layout="p-t:lg p-b:lg"><p cds-text="body">Body-rg, Body-me, Body-sb</p></td>
          <td cds-layout="p-t:lg p-b:lg"><p cds-text="body">14px Regular, 14px Medium, 14px Semibold</p></td>
        </tr>
        <tr>
          <td cds-layout="p-t:lg p-b:lg"><p cds-text="secondary">Secondary-rg, Secondary-md, Secondary-sb</p></td>
          <td cds-layout="p-t:lg p-b:lg"><p cds-text="secondary">13px Regular, 13px Medium, 13px Semibol</p></td>
        </tr>
        <tr>
          <td cds-layout="p-t:lg p-b:lg"><p cds-text="button">Button</p></td>
          <td cds-layout="p-t:lg p-b:lg"><p cds-text="button">13px Semibold</p></td>
        </tr>
        <tr>
          <td cds-layout="p-t:lg p-b:lg"><p cds-text="caption">CaptionLarge</p></td>
          <td cds-layout="p-t:lg p-b:lg"><p cds-text="caption">11px Regular</p></td>
        </tr>
        <tr>
          <td cds-layout="p-t:lg p-b:lg"><p cds-text="smallcaption">CaptionSmall</p></td>
          <td cds-layout="p-t:lg p-b:lg"><p cds-text="smallcaption">10px Medium</p></td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: 'DocTypographyTable',
  props: {
    table: '',
  },
};
</script>

<style lang="scss" scoped></style>
