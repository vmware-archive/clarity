<template>
  <footer class="doc-footer" cds-layout="m-t:md">
    <div :class="{ 'footer-wrapper': true, 'has-separator': !isHomePage }">
      <div class="vmware-source-wrapper">
        <div class="copyright-content-wraper">
          <div class="powered-by-wrapper">Powered by VMware, Inc &copy; {{ year }}. All rights reserved.</div>
          <div class="code-license-wrapper">
            Code licensed by
            <a href="https://opensource.org/licenses/MIT" target="_blank" class="mit-link">MIT License</a>
            <a href="https://www.vmware.com/help/privacy.html" target="_blank">Privacy Policy</a>
          </div>
        </div>

        <div class="social-media-links">
          <a
            aria-label="Clarity on GitHub"
            href="https://github.com/vmware/clarity"
            target="_blank"
            class="sm-icon-link"
          >
            <img src="/images/footer/github.svg" alt="Clarity Github" />
          </a>
          <a
            aria-label="Clarity on twitter"
            href="https://twitter.com/VMwareClarity"
            target="_blank"
            class="sm-icon-link"
          >
            <img src="/images/footer/twitter.svg" alt="Clarity Twitter" />
          </a>
          <a
            aria-label="Clarity on Medium"
            href="https://medium.com/claritydesignsystem"
            target="_blank"
            class="sm-icon-link"
          >
            <img src="/images/footer/medium.svg" alt="Clarity Medium" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    isHomePage() {
      return this.$frontmatter.home ? true : false;
    },
  },
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped lang="scss">
.doc-footer {
  margin-top: auto;
}
.footer-wrapper {
  position: relative;
  padding: var(--cds-token-space-size-9) 0 var(--cds-token-space-size-12);
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
  &.has-separator {
    &:before {
      border-top: 1px solid #ccc;
    }
  }
}
.vmware-source-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;

  .social-media-links {
    display: flex;
    margin-left: auto;
    width: 7.2rem;
    justify-content: flex-end;
    align-self: start;
    a.sm-icon-link {
      display: inline-block;
      width: 1.8rem;
      height: 1.8rem;
      margin-left: 0.6rem;
    }
    .sm-icon-link img {
      opacity: 0.5;
    }
  }
}
.mit-link {
  margin-right: 0.6rem;
}
.copyright {
  margin-top: 0.6rem;
}
</style>
