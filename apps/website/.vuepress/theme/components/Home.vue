<style>
.need-style-fix > a {
  color: #fff;
}
</style>
<template>
  <!--  <div class="home-wrapper">-->
  <main class="page-home">
    <div class="section-wrapper" cds-layout="vertical gap:md gap@sm:xxl">
      <!-- Hero -->
      <section class="home-hero" cds-layout="vertical align:horizontal-center">
        <h1 cds-text="display center semibold" cds-layout="m-t:x">Meet Clarity</h1>
        <div cds-layout="grid cols@sm:10 cols@xs:12">
          <div cds-layout="col@sm:start-2">
            <h2 cds-text="title center medium" cds-layout="m-t:xl m-x@sm:sm">
              We didn’t invent design systems - we just made the best one. Clarity is an open source, enterprise-focused
              design system with a core value of accessibility.
            </h2>
          </div>
        </div>
        <button class="btn hero-btn" cds-layout="m-t:xl" style="color: #000;">
          <!-- hard coded for now, css overrides were not working. Anywhere. -->
          <router-link style="color: #000;" class="hero-btn-link" to="/get-started">Get Started</router-link>
        </button>
        <img aria-hidden="true" cds-layout="m-t:xl container:fill" src="/images/home/img-hero.svg" />
      </section>
      <!-- image spacer -->
      <section class="hero-spacer" cds-layout="horizontal align:horizontal-stretch m-t:none">
        <img cds-layout="container:fill" aria-hidden="true" src="/images/home/bg-graphic1-fullwidth.svg" alt="" />
      </section>
      <!-- whats new -->
      <section class="whats-new" cds-layout="grid gap:sm">
        <div cds-layout="col:start-2 col:10">
          <WhatsNew version="latest" />
        </div>
        <div cds-layout="col:12">
          <div cds-layout="grid cols:auto align:horizontal-center">
            <cds-button class="btn-link" action="outline" cds-layout="m-t:xl m-b:sm m-b:md">
              <a href="/releases/v4">View Details</a>
            </cds-button>
          </div>
        </div>
      </section>
      <!-- spacer image -->
      <section class="section-spacer" cds-layout="m:none">
        <img cds-layout="container:fill" aria-hidden="true" src="/images/home/bg-graphic2-L-align.svg" />
      </section>
      <!-- design+dev section -->
      <section>
        <h3 cds-text="display center semibold" cds-layout="m-b:xl">
          Build inclusive and consistent products with Clarity
        </h3>
        <div cds-layout="grid cols@sm:10 cols@xs:12">
          <div cds-layout="col@sm:start-2">
            <div cds-layout="m-t:xl grid gap:sm cols@sm:6 cols@xs:12 ">
              <div class="image-cell" cds-layout="horizontal align:right">
                <img cds-layout="container:fill" src="/images/home/img-design-dev.svg" aria-hidden="true" />
              </div>
              <div class="content-cell" cds-layout="vertical gap:sm align:center m@xs:xs">
                <h4 cds-text="heading" cds-layout="p-b:lg">Design, Development and Deploy</h4>
                <p class="section-block" cds-text="message">
                  Our design guidelines, component library, and front end assets are built by working directly within
                  product teams. Use Clarity to enable your developers and designers to deliver the best experience
                  possible to your users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- a11y section -->
      <section>
        <div cds-layout="grid cols@sm:10 cols@xs:12">
          <div cds-layout="col@sm:start-2">
            <div cds-layout="grid gap:sm cols@sm:6 cols@xs:12 ">
              <div class="content-cell" cds-layout="vertical gap:sm align:center m@xs:xs">
                <h4 cds-text="heading" cds-layout="p-b:lg">Accessible</h4>
                <p class="section-block" cds-text="message">
                  We are continually investing heavily in accessibility. Use Clarity to address the needs of a large and
                  diverse user base.
                </p>
              </div>
              <div class="image-cell" cds-layout="horizontal align:right">
                <img cds-layout="container:fill" src="/images/home/img-accessibility.svg" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- enterprise section -->
      <section>
        <div cds-layout="grid cols@sm:10 cols@xs:12">
          <div cds-layout="col@sm:start-2">
            <div cds-layout="grid gap:sm cols@sm:6 cols@xs:12 ">
              <div class="image-cell" cds-layout="horizontal align:right">
                <img cds-layout="container:fill" src="/images/home/img-enterprise-ready.svg" aria-hidden="true" />
              </div>
              <div class="content-cell" cds-layout="vertical gap:sm align:center m@xs:xs">
                <h4 cds-text="heading" cds-layout="p-b:lg">Enterprise Ready</h4>
                <p class="section-block" cds-text="message">
                  Many Fortune 500 companies rely on us to support demanding, high-performance environments. Use Clarity
                  for your high stakes, data intensive applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- open source section -->
      <section>
        <div cds-layout="grid cols@sm:10 cols@xs:12">
          <div cds-layout="col@sm:start-2">
            <div cds-layout="grid gap:sm cols@sm:6 cols@xs:12 ">
              <div class="content-cell" cds-layout="vertical gap:sm align:center m@xs:xs">
                <h4 cds-text="heading" cds-layout="p-b:lg">Open Source</h4>
                <p class="section-block" cds-text="message">
                  Our vision since inception has been focused on supporting a community of designers and developers
                  working together. Clarity is supported by the community through 15k downloads a week.
                </p>
              </div>
              <div class="image-cell" cds-layout="horizontal align:right">
                <img cds-layout="container:fill" src="/images/home/img-open-source.svg" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- resources section -->
      <section>
        <h3 cds-text="display center medium" cds-layout="m-b:xl">Popular Resources</h3>
        <div cds-layout="grid cols@sm:10 cols@xs:12">
          <div cds-layout="col@sm:start-2">
            <div cds-layout="m-y:xl grid gap:sm cols@sm:6 cols@xs:12">
              <div class="image-cell" cds-layout="m-b:xxl m-b@xs:none horizontal align:left">
                <img cds-layout="container:fill" src="/images/home/img-pr-components.svg" aria-hidden="true" />
                <h4 cds-text="title medium" cds-layout="m-t:lg">Components</h4>
                <p cds-text="message medium" cds-layout="m-t:md">
                  Access UX guidelines and developer documentation for interactive components.
                </p>
              </div>
              <div class="image-cell" cds-layout="horizontal align:left m-t@xs:sm m-t@sm:none">
                <img cds-layout="container:fill" src="/images/home/img-pr-icons.svg" aria-hidden="true" />
                <h4 cds-text="title medium" cds-layout="m-t:lg">Icons</h4>
                <p cds-text="message medium" cds-layout="m-t:md">
                  Over 380 flexible and easy to use SVG icons, complete with variations to meet your design needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section cds-layout="m-l:lg m-b:lg">
      <Footer></Footer>
    </section>
  </main>
  <!--  </div>-->
</template>

<style>
.content-cell,
image-cell {
  height: 100%;
}

.page-home {
  max-width: 960px;
}

.hero-btn {
  background-color: hsl(198, 69%, 69%);
}
</style>

<script>
import Footer from '@theme/components/Footer';
export default {
  components: { Footer },
  name: 'Home',

  computed: {
    data() {
      return this.$page.frontmatter;
    },

    currentSeason() {
      const now = new Date();
      const currentYear = now.getFullYear();
      let season = 'winter';

      if (now < new Date(currentYear, 2, 1)) {
        season = 'winter'; // Jan 1 - Mar 1
      } else if (now < new Date(currentYear, 5, 1)) {
        season = 'spring'; // Mar 1 - Jun 1
      } else if (now < new Date(currentYear, 8, 1)) {
        season = 'summer'; // Jun 1 - Sep 1
      } else if (now < new Date(currentYear, 11, 1)) {
        season = 'autumn'; // Sep 1 - Dec 1
      }

      return `bg-img-${season}`;
    },
  },
};
</script>
