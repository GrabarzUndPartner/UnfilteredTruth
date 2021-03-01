<template>
  <div>
    <div ref="waveform" />
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
      list: [],
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
    this.wavesurfer = await this.initializeWavesurfer();
    this.wavesurfer.load(this.video);
  },

  methods: {
    getHeight () {
      if (global.matchMedia('(min-width: 1200px)').matches) {
        return 120;
      } else if (global.matchMedia('(min-width: 992px)').matches) {
        return 70;
      } else if (global.matchMedia('(min-width: 768px)').matches) {
        return 80;
      } else if (global.matchMedia('(min-width: 576px)').matches) {
        return 80;
      } else {
        return (40 / 320 * window.innerWidth);
      }
    },
    async initializeWavesurfer () {
      const WaveSurfer = (await import('wavesurfer.js')).default;
      return WaveSurfer.create({
        cursorColor: 'transparent',
        container: this.$refs.waveform,
        backgroundColor: '#ebefff',
        waveColor: '#230ce5',
        progressColor: 'transparent',
        splitChannels: false,
        interact: false,
        backend: 'MediaElement',
        height: this.getHeight()
      });
    }
  }
};

</script>
