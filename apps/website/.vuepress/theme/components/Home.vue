<style>
.need-style-fix > a {
  color: #fff;
}
</style>
<template>
  <main cds-layout="grid cols:12 gap:sm">
    <!-- hero -->
    <section class="hero-wrapper" cds-layout="horizontal cols:12 cols@sm:8 align:horizontal-center">
      <div class="hero" cds-layout="vertical align:horizontal-center p:md">
        <h1 cds-text="display center semibold" cds-layout="m-t:md m-t@sm:xl">Meet Clarity</h1>
        <div cds-layout="m-y:lg m-y@sm:xl">
          <!--          <div>-->
          <h2 cds-text="title center medium">
            We didn’t invent design systems - we just made the best one. Clarity is an open source, enterprise-focused
            design system with a core value of accessibility.
          </h2>
          <!--          </div>-->
        </div>
        <button class="btn hero-btn" cds-layout="p-x:lg">
          <!-- hard coded for now, css overrides were not working. -->
          <router-link class="hero-btn-link" to="/get-started">Get Started</router-link>
        </button>
        <img
          class="image-override-80"
          alt="Abstract picture with a browser, plant growth and a hand holding a pencil."
          cds-layout="container:fill m-t:xl"
          src="/images/home/img-hero.svg"
        />
      </div>
    </section>
    <div cds-layout="grid cols:12 cols@sm:8 p:sm p@sm:none">
      <!-- hero -->
      <section cds-layout="grid col:start-1 col@sm:start-3 m-t:xl m-t@sm:xxl p:sm p@sm:none">
        <section class="section-content whats-new" cds-layout="col:12">
          <div>
            <WhatsNew version="latest" />
          </div>
          <div cds-layout="col:12">
            <div cds-layout="grid cols:auto align:left">
              <cds-button class="btn-link" action="outline" cds-layout="m-t:xl m-b:md">
                <router-link to="/releases/v4">
                  View Details
                </router-link>
              </cds-button>
            </div>
          </div>
        </section>
      </section>
      <!-- Design, Dev, Deploy -->
      <section
        cds-layout="vertical col:start-1 col@sm:start-3 align:horizontal-center m-t:xl m-t@sm:xxl p:sm p@sm:none"
      >
        <h3 cds-text="display center semibold">
          Build inclusive and consistent products with Clarity
        </h3>
        <div class="home-block" cds-layout="m-t:lg m-t@sm:xxl">
          <div class="image-cell" cds-layout="horizontal align:horizontal-center">
            <img
              class="image-override-70"
              cds-layout="container:fill"
              src="/images/home/img-design-dev.svg"
              alt="A pencil, orange triangle and abstract view of html code."
            />
          </div>
          <div class="content-cell" cds-layout="vertical gap:sm align:vertical-center m@sm:lg">
            <h4 cds-text="heading" cds-layout="p-b:lg p-t:lg p-t@sm:none">Design, Develop and Deploy</h4>
            <p class="section-block" cds-text="message">
              Our design guidelines, component library, and front end assets are built by working directly within
              product teams. Use Clarity to enable your developers and designers to deliver the best experience possible
              to your users.
            </p>
          </div>
        </div>
      </section>
      <!-- a11y -->
      <section
        cds-layout="vertical col:start-1 col@sm:start-3 align:horizontal-center m-t:xl m-t@sm:xxl p:sm p@sm:none"
      >
        <div class="home-block alternate">
          <div class="image-cell" cds-layout="horizontal align:horizontal-center">
            <img
              class="image-override-70"
              cds-layout="container:fill"
              src="/images/home/img-accessibility.svg"
              alt="A hand, a vision test eye chart and a speaker emitting sound waves."
            />
          </div>
          <div class="content-cell" cds-layout="vertical gap:sm align:vertical-center m@sm:lg">
            <h4 cds-text="heading" cds-layout="p-b:lg p-t:lg p-t@sm:none">Accessible</h4>
            <p cds-text="message">
              We are continually investing heavily in accessibility. Use Clarity to address the needs of a large and
              diverse user base.
            </p>
          </div>
        </div>
      </section>
      <!-- Enterprise -->
      <section
        cds-layout="vertical col:start-1 col@sm:start-3 align:horizontal-center m-t:xl m-t@sm:xxl p:sm p@sm:none"
      >
        <div class="home-block">
          <div class="image-cell" cds-layout="horizontal align:horizontal-center">
            <img
              class="image-override-70"
              cds-layout="container:fill"
              src="/images/home/img-enterprise-ready.svg"
              alt="A blue and orange commercial building with small trees."
            />
          </div>
          <div class="content-cell" cds-layout="vertical gap:sm align:vertical-center m@sm:lg">
            <h4 cds-text="heading" cds-layout="p-b:lg p-t:lg p-t@sm:none">Enterprise Ready</h4>
            <p class="section-block" cds-text="message">
              Many Fortune 500 companies rely on us to support demanding, high-performance environments. Use Clarity for
              your high stakes, data intensive applications.
            </p>
          </div>
        </div>
      </section>
      <!-- open source -->
      <section
        cds-layout="vertical col:start-1 col@sm:start-3 align:horizontal-center m-t:xl m-t@sm:xxl p:sm p@sm:none"
      >
        <div class="home-block alternate">
          <div class="image-cell" cds-layout="horizontal align:horizontal-center">
            <img
              class="image-override-70"
              cds-layout="container:fill"
              src="/images/home/img-open-source.svg"
              alt="The clarity icon in a circle with radial lines pointing to code, a grey circle, a blue triangle and a grid of dots."
            />
          </div>
          <div class="content-cell" cds-layout="vertical gap:sm align:vertical-center m@sm:lg">
            <h4 cds-text="heading" cds-layout="p-b:lg p-t:lg p-t@sm:none">Open Source</h4>
            <p class="section-block" cds-text="message">
              Our vision since inception has been focused on supporting a community of designers and developers working
              together. Clarity is supported by the community through 15k downloads a week.
            </p>
          </div>
        </div>
      </section>
      <!-- Popular resources -->
      <section
        cds-layout="vertical col:start-1 col@sm:start-3 align:horizontal-center m-t:xl m-t@sm:xxl p:sm p@sm:none"
      >
        <h3 cds-text="display medium" cds-layout="m-b:xl">Popular Resources</h3>
        <div cds-layout="grid gap:lg cols@xs:12 cols@sm:6">
          <div class="image-cell" cds-layout="vertical">
            <router-link to="/components/accordion/">
              <img cds-layout="container:fill" src="/images/home/img-pr-components.svg" aria-hidden="true" />
            </router-link>
            <router-link to="/components/accordion/">
              <h4 cds-text="title medium" cds-layout="m-t:lg">Components</h4>
            </router-link>
            <p cds-text="message regular" cds-layout="m-t:md">
              Access UX guidelines and developer documentation for interactive components.
            </p>
          </div>
          <div class="image-cell" cds-layout="vertical">
            <router-link to="/foundation/icons/">
              <img cds-layout="container:fill" src="/images/home/img-pr-icons.svg" aria-hidden="true" />
            </router-link>
            <router-link to="/foundation/icons/">
              <h4 cds-text="title medium" cds-layout="m-t:lg">
                Icons
              </h4>
            </router-link>
            <p cds-text="message regular" cds-layout="m-t:md">
              Over 380 flexible and easy to use SVG icons, complete with variations to meet your design needs.
            </p>
          </div>
        </div>
      </section>
    </div>
    <Footer cds-layout="p:lg" cds-token="p-x:md m-t:xl m-t@sm:xxl p:sm p@sm:none"></Footer>
  </main>
</template>

<style lang="scss">
// the design request is to scale hero image to 80% of its orig size
.image-override-80 {
  max-width: 80%;
}

.image-override-70 {
  max-width: 70%;
}

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

.hero-wrapper {
  background-color: #002f44;
  width: 100%;
  clip-path: polygon(0 0, 100% 0%, 100% calc(100% - 7rem), 0% 100%);
  color: #ffffff;
  padding-bottom: 7rem;
  @media only screen and (max-width: 576px) {
    clip-path: polygon(0 0, 100% 0%, 100% calc(100% - 3rem), 0% 100%);
    padding-bottom: 3rem;
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
  height: 2.4rem;
  color: var(--cds-token-color-neutral-1000);
  margin: 0;
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
