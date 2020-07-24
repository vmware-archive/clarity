<template>
  <footer class="doc-footer">
    <div class="footer-wrapper">
      <div class="vmware-source-wrapper">
        <div class="copyright-content-wraper">
          <div class="powered-by-wrapper">Powered by VMware, Inc &copy; {{ year }}. All rights reserved.</div>
          <div class="code-license-wrapper">
            Code licensed by
            <a href="https://opensource.org/licenses/MIT" target="_blank" class="mit-link">MIT License</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>

        <div class="social-media-links">
          <a href="https://github.com/vmware/clarity" target="_blank" class="sm-icon-link">
            <img src="/images/footer/github.svg" alt="Clarity Github" />
          </a>
          <a href="https://twitter.com/VMwareClarity" target="_blank" class="sm-icon-link">
            <img src="/images/footer/twitter.svg" alt="Clarity Twitter" />
          </a>
          <a href="https://medium.com/claritydesignsystem" target="_blank" class="sm-icon-link">
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
  margin-top: 3rem;
  padding: var(--cds-token-space-size-9) 0 var(--cds-token-space-size-12);
  &:before {
    content: '';
    position: absolute;
    width: calc(100% + 2.4rem);
    top: 0;
    left: -1.2rem;
    border-top: 1px solid #ccc;
  }
}
.vmware-source-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;

  .code-license-wrapper {
    margin-top: var(--cds-token-space-size-6);
  }

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
