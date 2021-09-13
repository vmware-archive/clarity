<template>
  <div class="space-grid-container" cds-layout="m-t:xl">
    <div cds-layout="horizontal gap:lg m-t:lg" class="vertical-grid">
      <div class="size-1"></div>
      <div class="size-2"></div>
      <div class="size-3"></div>
      <div class="size-4"></div>
      <div class="size-5"></div>
      <div class="size-6"></div>
      <div class="size-7"></div>
      <div class="size-8"></div>
      <div class="size-9"></div>
      <div class="size-10"></div>
      <div class="size-11"></div>
      <div class="size-12"></div>
      <div class="size-13"></div>
    </div>

    <div cds-layout="vertical gap:lg m-t:lg" class="horizontal-grid">
      <div class="size-1"></div>
      <div class="size-2"></div>
      <div class="size-3"></div>
      <div class="size-4"></div>
      <div class="size-5"></div>
      <div class="size-6"></div>
      <div class="size-7"></div>
      <div class="size-8"></div>
      <div class="size-9"></div>
      <div class="size-10"></div>
      <div class="size-11"></div>
      <div class="size-12"></div>
      <div class="size-13"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocSpaceSpace',
  mounted: function () {
    this.$nextTick(function () {
      const sizes = Array.from({ length: 13 }, (_, i) => i + 1);

      const width =
        sizes
          .map(size => document.querySelector(`.space-grid-container .size-${size}`).offsetWidth)
          .reduce((prev, current) => prev + current) +
        (sizes.length - 1) * 24;

      document.querySelector('.space-grid-container .vertical-grid').style.width = `${width}px`;
      document.querySelector('.space-grid-container .horizontal-grid').style.width = `${width}px`;
      document.querySelector('.space-grid-container').style.width = `${width}px`;
      document.querySelector('.space-grid-container').style.height = `${width + 96}px`;

      sizes.forEach(size => {
        document.querySelector(`.space-grid-container .vertical-grid .size-${size}`).style.height = `${width}px`;
        document.querySelector(`.space-grid-container .horizontal-grid .size-${size}`).style.width = `${width}px`;
      });
    });
  },
};
</script>

<style lang="scss">
@mixin makeSize($size, $format) {
  [class~='size-#{$size}'] {
    @if $format == 'vertical' {
      width: var(--cds-global-space-#{$size});
    } @else {
      height: var(--cds-global-space-#{$size});
    }
    &::after {
      content: '#{$size}';
    }
  }
}
$sizes: (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13);

.space-grid-container {
  position: relative;
  margin: 0 auto;

  .vertical-grid,
  .horizontal-grid {
    top: 0;
    left: 0;
    font-size: 0.5rem;
    position: absolute;
  }

  .vertical-grid {
    [class*='size-'] {
      background-color: hsla(283, 80%, 36%, 0.5); // cds-alias-status-alt with opacity

      &::after {
        top: -1rem;
        position: absolute;
        font-size: 0.5rem;
        line-height: 0.7rem;
        z-index: 999;
      }
    }
    @each $size in $sizes {
      @include makeSize($size, 'vertical');
    }
  }

  .horizontal-grid {
    [class*='size-'] {
      background-color: hsla(324, 100%, 30%, 0.5); // cds-global-color-pink-700 with opacity

      &::after {
        right: -2rem;
        min-width: 1.7rem;
        position: absolute;
        font-size: 0.5rem;
        line-height: 0.7rem;
        z-index: 999;
      }
    }
    @each $size in $sizes {
      @include makeSize($size, 'horizontal');
    }
  }
}
</style>
