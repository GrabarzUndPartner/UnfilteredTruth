<template>
  <div>
    <div ref="waveform" />
  </div>
</template>

<script>
export default {
  props: {
    stats: {
      type: Object,
      default () {
        return null;
      }
    },

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
    console.log(this.video);
    const videos = await Promise.all([
      this.video, createVideoElement(this.stats.blob)
    ]);
    videos.forEach(async (el) => {
      const wavesurfer = await this.initializeWavesurfer();
      wavesurfer.load(el);
      this.list.push(wavesurfer);
    });
  },

  methods: {
    async initializeWavesurfer () {
      const WaveSurfer = (await import('wavesurfer.js')).default;
      return WaveSurfer.create({
        container: this.$refs.waveform,
        waveColor: '#A8DBA8',
        progressColor: '#3B8686',
        splitChannels: false,
        interact: false,
        backend: 'MediaElement'
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
