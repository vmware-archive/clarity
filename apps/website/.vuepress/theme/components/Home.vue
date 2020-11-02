<style scoped lang="scss">
.need-style-fix > a {
  color: #fff;
}

.home-container {
  row-gap: var(--cds-token-layout-space-xxl);
}

.whats-new {
  background-color: #dbe9f0;
  width: 500%;
  margin-left: -200%;
  padding-left: 200%;
}

.tinted {
  &.action-light {
    background-color: hsl(198, 44, 93);
  }
  &.action-dark {
    background-color: hsl(198, 95, 40);
  }
}

.home-section {
  max-width: 960px;
  column-gap: var(--cds-token-layout-space-lg);
}

.section-column-wrapper {
  display: flex;
  @media only screen and (max-width: 576px) {
    display: grid;
  }

  &.alternated {
    flex-direction: row-reverse;
  }
}

.inverse-font {
  color: var(--cds-token-color-neutral-0);
}

.docs-red {
  color: hsl(22, 95, 40);
}

.hero-text {
  z-index: 100; // needs to be above the hero image
}

.orange-accent {
  height: 2px;
  background-color: hsl(24, 100, 58);
}
</style>
<template>
  <main cds-layout="vertical align:horizontal-stretch">
    <!-- hero -->
    <section cds-layout="p-l:md p-l@sm:xl p-r:md p-r@sm:xl p-y:lg p-y@sm:xxl">
      <div cds-layout="vertical" class="">
        <h1 cds-text="display">Enterprise-Ready Consumer-Simple</h1>
        <div cds-layout="grid cols:12 cols@sm:6 m-t:xl">
          <p cds-text="section expanded">
            Clarity is a scalable, customizable, open source design system bolstered by the people that build with it,
            the people we build it for, and the community that makes us who we are.
          </p>
        </div>
        <router-link to="/get-started" cds-layout="m-t:lg">
          <cds-button>
            Get Started using Clarity
          </cds-button>
        </router-link>
        <div cds-layout="grid">
          <div cds-layout="col@sm:start-4 col@sm:end-12">
            <img
              style="max-width: 720px;"
              cds-layout="fill"
              src="/images/home/img_hero.svg"
              alt="A man riding a singled wheeled skateboard surrounded by Clarity components and tools."
            />
          </div>
        </div>
      </div>
    </section>
    <!-- release notes -->
    <section cds-layout="p-l:md p-l@sm:xl p-r:md p-r@sm:none p-t:lg p-y@sm:xl" class="tinted action-light">
      <div class="home-section">
        <WhatsNew version="latest" />
      </div>
    </section>
    <!-- just like you -->
    <section cds-layout="p-l:md p-l@sm:xl p-r:md p-r@sm:none p-y:lg p-y@sm:xl" class="tinted action-dark">
      <div class="home-section">
        <h1 cds-text="heading" class="inverse-font">Clarity is all about people, just like you</h1>
      </div>
    </section>
    <!-- designers -->
    <section cds-layout="p-l:md p-l@sm:xl p-r:md p-r@sm:none p-t:lg p-t@sm:xxl">
      <div class="home-section section-column-wrapper" cds-layout="grid cols@sm:12 cols@md:6 align:vertical-center">
        <div cds-layout="vertical align:vertical-center">
          <div aria-hidden="true" class="accent-wrapper" cds-layout="grid gap:md m-t:md m-t@sm:none">
            <div class="orange-accent" cds-layout="col:3"></div>
          </div>
          <h1 class="accented" cds-text="subsection uppercase expanded" cds-layout="m-t:lg">
            Clarity is all about people, like designers
          </h1>
          <h2 cds-text="heading" cds-layout="m-t:lg">Design with confidence</h2>
          <p cds-text="section expanded" cds-layout="m-t:xl">
            Our toolkit is Figma. Every component, pattern, and guideline we ship is rooted in real customer
            interactions. As a result, you can rely on Clarity for 30+ components and over 200 icons so you can focus on
            product-specific user problems.
          </p>
          <router-link to="/get-started/design" cds-layout="m-t:lg" cds-text="subsection expanded"
            >Get Started</router-link
          >
          <router-link to="/get-started/design#figma-libraries" cds-layout="m-t:md" cds-text="subsection expanded"
            >Browse our Figma libraries</router-link
          >
        </div>
        <div cds-layout="vertical m-t:md">
          <img src="/images/home/img_design_w_confidence.svg" alt="placeholder image" cds-layout="fill" />
        </div>
      </div>
    </section>
    <!-- developers -->
    <section cds-layout="p-l:md p-l@sm:xl p-r:md p-r@sm:none p-t:lg p-t@sm:xxl">
      <div
        class="home-section section-column-wrapper alternated"
        cds-layout="grid cols@sm:12 cols@md:6 align:vertical-center"
      >
        <div cds-layout="vertical align:vertical-center">
          <div aria-hidden="true" class="accent-wrapper" cds-layout="grid gap:md">
            <div class="orange-accent" cds-layout="col:3"></div>
          </div>
          <h1 cds-text="subsection uppercase expanded" cds-layout="m-t:lg">
            Clarity is all about people, like developers
          </h1>
          <h2 cds-text="heading" cds-layout="m-t:lg">Build framework agnostic</h2>
          <p cds-text="section expanded" cds-layout="m-t:xl">
            The first folx that built Clarity from scratch were a scrappy team of developers, designers, and content
            creators. Clarity has continued to grow on that strong start by supporting the big three: Angular, React and
            Vue. Our latest web components provide support for them all. Clarity provides code examples and detailed API
            documentation that guide you as you build your next application.
          </p>
          <router-link to="/get-started/angular" cds-layout="m-t:lg" cds-text="subsection expanded"
            >Get started with Angular</router-link
          >
          <a target="_blank" href="/storybook/core" cds-layout="m-t:md">Get started with web components</a>
          <a target="_blank" href="https://github.com/vmware/clarity" cds-layout="m-t:md" cds-text="subsection expanded"
            >Explore our Github</a
          >
        </div>
        <div cds-layout="vertical ">
          <img src="/images/home/img_build_framework.svg" alt="placeholder image" cds-layout="fill" />
        </div>
      </div>
    </section>
    <!-- users -->
    <section cds-layout="p-l:md p-l@sm:xl p-r:md p-r@sm:none p-t:lg p-t@sm:xxl">
      <div class="home-section section-column-wrapper" cds-layout="grid cols@sm:12 cols@md:6 align:vertical-center">
        <div cds-layout="vertical align:vertical-center">
          <div aria-hidden="true" class="accent-wrapper" cds-layout="grid gap:md">
            <div class="orange-accent" cds-layout="col:3"></div>
          </div>
          <h1 cds-text="subsection uppercase expanded" cds-layout="m-t:lg">
            Clarity is all about people, like all of our users
          </h1>
          <h2 cds-text="heading" cds-layout="m-t:lg">Backed by performant components</h2>
          <p cds-text="section expanded" cds-layout="m-t:xl">
            When Clarity customers speak, we listen. One of our most requested components, datagrid, can support more
            than a dozen features and handle thousands of data entries. Let us build performant components so you can
            focus on building applications.
          </p>
          <router-link to="/components/" cds-layout="m-t:lg" cds-text="subsection expanded"
            >Browse all components</router-link
          >
        </div>
        <div cds-layout="vertical ">
          <img src="/images/home/img_performant_components.svg" alt="placeholder image" cds-layout="fill" />
        </div>
      </div>
    </section>
    <!-- accessibility -->
    <section cds-layout="p-l:md p-l@sm:xl p-y:lg p-y@sm:xxl">
      <div cds-layout="grid cols:12" class="home-section">
        <h1 cds-text="heading" cds-layout="m-t:md">Accessible applications start here</h1>
        <img
          src="/images/home/img_accessible_applications.svg"
          alt="placeholder image"
          cds-layout="col:start-2 col:10 fill m-t:xl"
        />
        <p cds-text="section expanded" cds-layout="m-t:xl">
          We’ve integrated accessibility into the design and development of the Clarity assets. Accessibility is a
          priority, and we work closely with a dedicated accessibility team following the WCAG 2.1 AA guidelines. Use
          Clarity to leverage all the built-in accessibility features and follow our accessibility guidelines to make
          your application not only compliant but loved by users of all abilities.
        </p>
        <!-- TODO: uncomment this after accessibility content is added to the website -->
        <!-- first link needs m-t:lg, second needs m-t:sm -->
        <!-- <router-link cds-layout="m-t:lg" to="/accessibility/">View our accessibility guidelines</router-link>-->
        <a
          cds-layout="m-t:lg"
          target="_blank"
          href="https://www.vmware.com/content/dam/digitalmarketing/vmware/en/pdf/product/vpat/vmware-clarity-design-system-vpat-2.2.pdf"
          >View our VPAT</a
        >
      </div>
    </section>
    <!-- Join us -->
    <section cds-layout="p-l:md p-l@sm:xl p-r:md p-r@sm:none p-y:lg p-y@sm:xxl" class="tinted action-light">
      <div cds-layout="grid cols:12" class="home-section">
        <h1 cds-text="subsection uppercase expanded" cds-layout="m-t:lg">Together, we are the Clarity community</h1>
        <h2 cds-text="heading" cds-layout="m-t:lg">Join us and we can build better products together</h2>
        <p cds-text="section expanded" cds-layout="m-t:xl">
          Great design systems have a great community behind it. We open sourced Clarity early in our journey because we
          believe in the importance of community. It is foundational to our story. We are open about our roadmap and
          priorities. We are proud of what we have running under the hood. Check out our Github and take a look at our
          priority list, our code, our documentation, and join our community.
        </p>
        <router-link to="/get-started">
          <cds-button cds-layout="m-t:lg" action="outline">
            Join the community
          </cds-button>
        </router-link>
        <img src="/images/home/img_join_us.svg" alt="placeholder image" cds-layout="col:start-2 col:10 fill m-t:xl" />
        <div cds-layout="horizontal gap:xl gap@sm:lg align:horizontal-center wrap@sm:none col:start-2 col:10 m-t:xl">
          <div>
            <h3 cds-text="display center" class="docs-red">2M+</h3>
            <p cds-text="body expanded center" cds-layout="m-t:lg">downloads since the beginning of Clarity</p>
          </div>
          <div>
            <h3 cds-text="display center" class="docs-red">2700+</h3>
            <p cds-text="body expanded center" cds-layout="m-t:lg">Github repositories depending on Clarity</p>
          </div>
          <div>
            <h3 cds-text="display center" class="docs-red">300+</h3>
            <p cds-text="body expanded center" cds-layout="m-t:lg">
              releases for new features and continuous improvements
            </p>
          </div>
        </div>
        <p cds-text="section expanded" cds-layout="m-t:xl">
          Clarity firmly believes that the best products are built by those who form a rich, varied community. We invite
          all forms of feedback or ideas that allow us, together, to create better experiences for all users.
        </p>

        <div cds-layout="horizontal gap:lg align:center col:start-2 col:10 m-t:xl m-t@sm:lg">
          <router-link to="/get-started/angular">
            <cds-button action="outline">
              Get started developing
            </cds-button>
          </router-link>
          <router-link to="/get-started/design">
            <cds-button action="outline">
              Get started designing
            </cds-button>
          </router-link>
        </div>
      </div>
    </section>
    <Footer cds-layout="p-x:md p-x@sm:xl"></Footer>
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
  },
};
</script>
