<template>
  <div class="doc-modal-wrapper">
    <div class="modal static">
      <div
        class="modal-dialog"
        :class="{ 'modal-sm': size === 'sm', 'modal-lg': size === 'lg', 'modal-xl': size === 'xl' }"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-content">
          <div class="modal-header">
            <button aria-label="Close" class="close" type="button">
              <clr-icon aria-hidden="true" shape="close"></clr-icon>
            </button>
            <h3 class="modal-title">I have a nice title</h3>
          </div>
          <div class="modal-body">
            <p>But not much to say...</p>
          </div>
          <div class="modal-footer">
            <button class="btn btn-outline" type="button">Cancel</button>
            <button class="btn btn-primary" type="button">Ok</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop" aria-hidden="true"></div>
  </div>
</template>

<script>
export default {
  name: 'DocModalWrapper',
  props: {
    size: String,
  },
  methods: {
    getSizeClass: function () {
      if (this.size) {
        return 'modal-' + size;
      }
    },
  },
};
</script>

<style lang="scss">
.doc-modal-wrapper {
  position: relative;
  padding: 1.2rem;
  margin: 1.2rem 0;
}

.modal.static {
  position: relative;
  padding: 3.6rem;
}

.modal-backdrop {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
