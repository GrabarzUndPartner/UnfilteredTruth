<template>
  <div ref="waveform" />
</template>

<script>
export default {
  props: {
    video: {
      type: global.HTMLElement,
      default () {
        return null;
      }
    },
    height: {
      type: Number,
      default: 120
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
        height: this.height
      });
    }
  }
};

</script>
