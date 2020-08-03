<style>
.need-style-fix > a {
  color: #fff;
}
</style>
<template>
  <!--  <div class="home-wrapper">-->
  <main cds-layout="vertical align:horizontal-center gap:xl gap@sm:xxl">
    <!-- hero -->
    <section class="hero-wrapper" cds-layout="horizontal align:horizontal-center">
      <div class="hero" cds-layout="vertical align:horizontal-center p:md">
        <h1 cds-text="display center semibold" cds-layout="m-y:md m-y@sm:xl">Meet Clarity</h1>
        <div cds-layout="grid cols@sm:10 cols@xs:12 m-b:md m-b@sm:xl">
          <div cds-layout="col@sm:start-2">
            <h2 cds-text="title center medium">
              We didn’t invent design systems - we just made the best one. Clarity is an open source, enterprise-focused
              design system with a core value of accessibility.
            </h2>
          </div>
        </div>
        <button class="btn hero-btn" cds-layout="m-b:md m-b@sm:xl" style="color: #000;">
          <!-- hard coded for now, css overrides were not working. Anywhere. -->
          <router-link style="color: #000;" class="hero-btn-link" to="/get-started">Get Started</router-link>
        </button>
        <img aria-hidden="true" cds-layout="container:fill" src="/images/home/img-hero.svg" />
      </div>
    </section>
    <!-- whats new -->
    <section class="section-content whats-new" cds-layout="grid p:sm">
      <div cds-layout="col:12 m@sm:lg">
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
    <!-- design+dev section -->
    <section cds-layout="p:sm" class="section-content">
      <h3 cds-text="display center semibold">
        Build inclusive and consistent products with Clarity
      </h3>
      <div class="home-block" cds-layout="m-t:md m-t@sm:xxl">
        <div class="image-cell" cds-layout="horizontal align:right">
          <img cds-layout="container:fill" src="/images/home/img-design-dev.svg" aria-hidden="true" />
        </div>
        <div class="content-cell" cds-layout="vertical gap:sm align:center m@sm:lg">
          <h4 cds-text="heading" cds-layout="p-b:lg">Design, Develop and Deploy</h4>
          <p class="section-block" cds-text="message">
            Our design guidelines, component library, and front end assets are built by working directly within product
            teams. Use Clarity to enable your developers and designers to deliver the best experience possible to your
            users.
          </p>
        </div>
      </div>
    </section>
    <!-- a11y section -->
    <section cds-layout="p:sm" class="section-content">
      <div class="home-block alternate">
        <div class="image-cell" cds-layout="horizontal align:center">
          <img cds-layout="container:fill" src="/images/home/img-accessibility.svg" aria-hidden="true" />
        </div>
        <div class="content-cell" cds-layout="vertical gap:sm align:center m@sm:lg">
          <h4 cds-text="heading" cds-layout="p-b:lg">Accessible</h4>
          <p cds-text="message">
            We are continually investing heavily in accessibility. Use Clarity to address the needs of a large and
            diverse user base.
          </p>
        </div>
      </div>
    </section>
    <!-- enterprise section -->
    <section cds-layout="p:sm" class="section-content">
      <div class="home-block">
        <div class="image-cell" cds-layout="horizontal align:right">
          <img cds-layout="container:fill" src="/images/home/img-design-dev.svg" aria-hidden="true" />
        </div>
        <div class="content-cell" cds-layout="vertical gap:sm align:center m@sm:lg">
          <h4 cds-text="heading" cds-layout="p-b:lg">Enterprise Ready</h4>
          <p class="section-block" cds-text="message">
            Many Fortune 500 companies rely on us to support demanding, high-performance environments. Use Clarity for
            your high stakes, data intensive applications.
          </p>
        </div>
      </div>
    </section>
    <!-- open source section -->
    <section cds-layout="p:sm" class="section-content">
      <div class="home-block alternate">
        <div class="image-cell" cds-layout="horizontal align:right">
          <img cds-layout="container:fill" src="/images/home/img-open-source.svg" aria-hidden="true" />
        </div>
        <div class="content-cell" cds-layout="vertical gap:sm align:center m@sm:lg">
          <h4 cds-text="heading" cds-layout="p-b:lg">Open Source</h4>
          <p class="section-block" cds-text="message">
            Our vision since inception has been focused on supporting a community of designers and developers working
            together. Clarity is supported by the community through 15k downloads a week.
          </p>
        </div>
      </div>
    </section>
    <!-- popular resources section -->
    <section cds-layout="vertical p:sm" class="section-content">
      <h3 cds-text="display center medium" cds-layout="m-b:xl">Popular Resources</h3>
      <div cds-layout="grid gap:lg cols@xs:12 cols@sm:6">
        <div class="image-cell" cds-layout="m-b:sm m-b@sm:xxl">
          <router-link to="/components/accordion/">
            <img cds-layout="container:fill" src="/images/home/img-pr-components.svg" aria-hidden="true" />
          </router-link>
          <router-link to="/components/accordion/">
            <h4 cds-text="title medium" cds-layout="m-t:lg">Components</h4>
          </router-link>
          <p cds-text="message medium" cds-layout="m-t:md">
            Access UX guidelines and developer documentation for interactive components.
          </p>
        </div>
        <div class="image-cell" cds-layout="m-b:xxl m-b@xs:none">
          <router-link to="/foundation/icons/">
            <img cds-layout="container:fill" src="/images/home/img-pr-icons.svg" aria-hidden="true" />
          </router-link>
          <router-link to="/foundation/icons/">
            <h4 cds-text="title medium" cds-layout="m-t:lg">
              Icons
            </h4>
          </router-link>
          <p cds-text="message medium" cds-layout="m-t:md">
            Over 380 flexible and easy to use SVG icons, complete with variations to meet your design needs.
          </p>
        </div>
      </div>
    </section>
    <section class="footer-wrapper" cds-layout="p-x:md">
      <Footer class="footer" cds-token="p-x:md"></Footer>
    </section>
  </main>
  <!--  </div>-->
</template>

<style lang="scss">
//.content-cell, image-cell {
//  height: 100%;
//}

.home-block {
  display: flex;

  &.alternate {
    flex-direction: row-reverse;
  }

  .content-cell {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .content-cell,
  .image-cell {
    flex-basis: 50%;
  }

  @media only screen and (max-width: 576px) {
    display: block;
  }
}

.section-content {
  max-width: 960px;
}

.footer-wrapper {
  width: 100%;
}

.hero-wrapper {
  background-color: #002f44;
  width: 100%;
  clip-path: polygon(0 0, 100% 0%, 100% calc(100% - 10rem), 0% 100%);
  color: #ffffff;
  padding-bottom: 10rem;
  @media only screen and (max-width: 576px) {
    clip-path: polygon(0 0, 100% 0%, 100% calc(100% - 5rem), 0% 100%);
    padding-bottom: 5rem;
  }
  .hero {
    max-width: 960px;
  }
}

.footer-wrapper {
  max-width: 100%;
}

.hero-btn {
  background-color: hsl(198, 69%, 69%);
}
</style>

<script>
import Footer from '@theme/components/Footer';
export default {
  components: {
    Footer,
  },
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
