<template>
  <Layout :is404="true">
    <div cds-layout="vertical gap:md align:vertical-center">
      <p cds-text="message semibold">404 ERROR</p>

      <h1 cds-text="heading" cds-layout="m-y:md">Page not found</h1>

      <p cds-layout="m-b:md">The link is broken or the page has moved.</p>
      <button class="btn" cds-layout="m-b:md m-b@sm:xl" style="color: #000;">
        <!-- hard coded for now, css overrides were not working. Anywhere. -->
        <router-link to="/">Back to home page</router-link>
      </button>
    </div>
    <div>
      <img cds-layout="container:fill" src="/images/404.svg" alt="" />
    </div>
  </Layout>
</template>

<script>
export default {};
</script>
