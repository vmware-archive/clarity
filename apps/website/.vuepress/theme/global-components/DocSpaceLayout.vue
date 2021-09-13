<template>
  <div class="layout-grid-container">
    <div cds-layout="horizontal gap:xl m-t:xl" class="vertical-grid">
      <div class="size-xxs"></div>
      <div class="size-xs"></div>
      <div class="size-sm"></div>
      <div class="size-md"></div>
      <div class="size-lg"></div>
      <div class="size-xl"></div>
      <div class="size-xxl"></div>
    </div>

    <div cds-layout="vertical gap:xl m-t:xl" class="horizontal-grid">
      <div class="size-xxs"></div>
      <div class="size-xs"></div>
      <div class="size-sm"></div>
      <div class="size-md"></div>
      <div class="size-lg"></div>
      <div class="size-xl"></div>
      <div class="size-xxl"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocSpaceLayout',
  mounted: function () {
    this.$nextTick(function () {
      const sizes = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

      const width =
        sizes
          .map(size => document.querySelector(`.layout-grid-container .size-${size}`).offsetWidth)
          .reduce((prev, current) => prev + current) +
        (sizes.length - 1) * 48;

      document.querySelector('.layout-grid-container .vertical-grid').style.width = `${width}px`;
      document.querySelector('.layout-grid-container .horizontal-grid').style.width = `${width}px`;
      document.querySelector('.layout-grid-container').style.width = `${width}px`;
      document.querySelector('.layout-grid-container').style.height = `${width + 96}px`;

      sizes.forEach(size => {
        document.querySelector(`.layout-grid-container .vertical-grid .size-${size}`).style.height = `${width}px`;
        document.querySelector(`.layout-grid-container .horizontal-grid .size-${size}`).style.width = `${width}px`;
      });
    });
  },
};
</script>

<style lang="scss">
.layout-grid-container {
  position: relative;
  margin: 0 auto;

  .vertical-grid {
    font-size: 0.5rem;
    position: absolute;

    [class*='size-'] {
      background-color: hsla(198, 100%, 34%, 0.5); // cds-alias-status-info with opacity

      &::after {
        position: absolute;
        top: -1rem;
        font-size: 0.5rem;
        line-height: 0.7rem;
        display: flex;
        place-items: center;
        place-content: center;
        z-index: 999;
      }
    }

    [class~='size-xxs'] {
      width: var(--cds-global-layout-space-xxs);
      &::after {
        content: 'XXS';
      }
    }
    [class~='size-xs'] {
      width: var(--cds-global-layout-space-xs);
      &::after {
        content: 'XS';
      }
    }
    [class~='size-sm'] {
      width: var(--cds-global-layout-space-sm);
      &::after {
        content: 'SM';
      }
    }
    [class~='size-md'] {
      width: var(--cds-global-layout-space-md);
      &::after {
        content: 'MD';
      }
    }
    [class~='size-lg'] {
      width: var(--cds-global-layout-space-lg);
      &::after {
        content: 'LG';
      }
    }
    [class~='size-xl'] {
      width: var(--cds-global-layout-space-xl);
      &::after {
        content: 'XL';
      }
    }
    [class~='size-xxl'] {
      width: var(--cds-global-layout-space-xxl);
      &::after {
        content: 'XXL';
      }
    }
  }

  .horizontal-grid {
    top: 0;
    left: 0;
    font-size: 0.5rem;
    position: absolute;

    [class*='size-'] {
      background-color: hsla(93, 80%, 28%, 0.5); // cds-alias-status-success with opacity

      &::after {
        position: absolute;
        right: -2rem;
        min-width: 1.7rem;
        font-size: 0.5rem;
        line-height: 0.7rem;
        z-index: 999;
      }
    }

    [class~='size-xxs'] {
      height: var(--cds-global-layout-space-xxs);
      &::after {
        content: 'XXS';
      }
    }
    [class~='size-xs'] {
      height: var(--cds-global-layout-space-xs);
      &::after {
        content: 'XS';
      }
    }
    [class~='size-sm'] {
      height: var(--cds-global-layout-space-sm);
      &::after {
        content: 'SM';
      }
    }
    [class~='size-md'] {
      height: var(--cds-global-layout-space-md);
      &::after {
        content: 'MD';
      }
    }
    [class~='size-lg'] {
      height: var(--cds-global-layout-space-lg);
      &::after {
        content: 'LG';
      }
    }
    [class~='size-xl'] {
      height: var(--cds-global-layout-space-xl);
      &::after {
        content: 'XL';
      }
    }
    [class~='size-xxl'] {
      height: var(--cds-global-layout-space-xxl);
      &::after {
        content: 'XXL';
      }
    }
  }
}
</style>
