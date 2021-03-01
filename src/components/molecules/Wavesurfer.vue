<template>
  <div>
    <div ref="waveform" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: [Object, String],
      default: null
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
    const wavesurfer = await this.initializeWavesurfer();
    wavesurfer.load(createVideoElement(this.src));
    this.list.push(wavesurfer);
  },

  methods: {
    getHeight () {
      if (global.matchMedia('(min-width: 1200px)').matches) {
        return 200;
      } else if (global.matchMedia('(min-width: 992px)').matches) {
        return 70;
      } else if (global.matchMedia('(min-width: 768px)').matches) {
        return 70;
      } else {
        return (40 / 320 * window.innerWidth);
      }
    },
    async initializeWavesurfer () {
      const WaveSurfer = (await import('wavesurfer.js')).default;
      return WaveSurfer.create({
        cursorColor: 'transparent',
        container: this.$refs.waveform,
        backgroundColor: '#ffffff',
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

function createVideoElement (blob) {
  const video = global.document.createElement('video');
  video.src = blob;
  return video;
}
</script>

<style>

</style>
