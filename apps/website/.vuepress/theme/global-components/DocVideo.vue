<template>
  <div
    class="video-wrapper"
    :class="{ 'in-pause': !autoplay && !playing }"
    :style="{ 'background-color': bgColor, cursor: autoplay ? 'auto' : 'pointer' }"
    @click="toggleVideo()"
  >
    <div class="video-overlay" v-if="!autoplay">
      <cds-icon
        v-bind:shape="playing ? 'pause' : 'play'"
        class="video-control-icon is-solid is-inverse"
        size="72"
      ></cds-icon>
    </div>
    <video ref="video" v-bind:width="width" v-bind:autoplay="autoplay ? 'autoplay' : null" loop muted>
      <source v-bind:src="src" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  name: 'DocVideo',
  props: {
    src: String,
    autoplay: Boolean,
    width: Number,
    bgColor: { type: String, default: 'transparent' },
  },
  data: function () {
    return {
      playing: null,
    };
  },
  methods: {
    toggleVideo: function () {
      if (this.autoplay) return;
      if (this.playing) {
        this.$refs.video.pause();
      } else {
        this.$refs.video.play();
      }
      this.playing = !this.playing;
    },
  },
};
</script>

<style lang="scss" scoped>
.video-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 1.2rem 0;
  border-radius: 0.15rem;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #fafafa;
    left: 0;
  }

  &:after {
    bottom: 0px;
  }

  .video-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: opacity 0.2s ease-out;
  }

  video {
    max-width: 100%;
    height: auto;
  }

  &.in-pause .video-overlay {
    opacity: 1;
  }

  &:hover .video-overlay {
    opacity: 1;
  }
}
</style>
