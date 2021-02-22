<template>
  <div>
    <button @click="togglePlay">
      {{ buttonText }}
    </button>
    <div ref="waveform">
      <div id="wave-timeline" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    video: {
      type: global.HTMLElement,
      default () {
        return null;
      }
    }
  },

  data () {
    return {
      wavesurfer: null,
      playing: false
    };
  },

  computed: {
    buttonText () {
      if (this.playing) {
        return 'Pause';
      } else {
        return 'Play';
      }
    }
  },

  async mounted () {
    const WaveSurfer = (await import('wavesurfer.js')).default;
    const TimelinePlugin = (await import('wavesurfer.js/dist/plugin/wavesurfer.timeline.min.js')).default;

    this.wavesurfer = WaveSurfer.create({
      container: this.$refs.waveform,
      plugins: [
        TimelinePlugin.create({
          container: '#wave-timeline'
        })
      ],
      waveColor: '#A8DBA8',
      progressColor: '#3B8686',
      splitChannels: true,
      backend: 'MediaElement'
    });

    this.wavesurfer.load(this.video);
    this.wavesurfer.on('play', () => { this.playing = true; });
    this.wavesurfer.on('pause', () => { this.playing = false; });
  },

  methods: {
    togglePlay () {
      this.wavesurfer.playPause();
    }
  }
};
</script>

<style>

</style>
