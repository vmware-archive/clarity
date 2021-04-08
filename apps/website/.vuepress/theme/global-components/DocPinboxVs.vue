<template>
  <section>
    <div class="pinbox" cds-layout="horizontal align:vertical-stretch wrap:none" cds-text="body">
      <div class="pin" cds-layout="p-x:lg">
        <cds-icon shape="pin" class="pin-icon" size="md"></cds-icon>
      </div>
      <div cds-layout="p:lg align:top">
        <slot name="left">Left</slot>
      </div>
      <div class="versus" cds-layout="align:center"><div class="versus-bubble">vs</div></div>
      <div cds-layout="p:lg align:top">
        <slot name="right">Right</slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DocPinboxVs',
};
</script>

<style scoped>
div.pinbox {
  border-radius: var(----cds-token-global-border-radius, 0.15rem);
  border-style: solid;
  border-width: var(----cds-token-global-border-width, 0.05rem);
  border-color: var(--cds-token-color-neutral-500, #b3b3b3);
  min-height: var(--cds-token-space-size-13, 3.6rem);
  margin: var(--cds-token-layout-space-lg, 1.2rem) 0 var(--cds-token-layout-space-xl, 2.4rem);
  padding: 0;
  width: 100%;
}

div.pinbox > div {
  padding: var(--cds-token-layout-space-md, 0.6rem) var(--cds-token-layout-space-lg, 1.2rem);
  flex-basis: 50%;
}

div.pinbox > div.pin {
  background: var(--cds-global-color-gray-200);
  align-items: center;
  justify-content: center;
  padding: 0;
  display: flex;
  align-self: unset;
  flex-basis: var(--cds-token-space-size-11, 1.8rem);
}

div.pinbox > div.versus {
  flex-basis: var(--cds-token-space-size-11, 1.8rem);
}

div.versus-bubble {
  background: var(--cds-token-color-secondary-action-900, hsl(282, 100%, 22%));
  color: var(--cds-token-color-neutral-0, hsl(198, 0%, 100%));
  height: var(--cds-token-space-size-11, 1.8rem);
  width: var(--cds-token-space-size-11, 1.8rem);
  border-radius: 49%;
  font-size: var(--cds-token-space-size-9, 1rem);
  align-items: center;
  justify-content: center;
  padding: 0;
  display: flex;
}

.pin-icon {
  --color: var(--cds-token-color-secondary-action-900, hsl(282, 100%, 22%));
}

@media (max-width: 992px) {
  div.pinbox {
    flex-direction: column;
  }

  div.pin {
    display: none !important;
  }
}
</style>
