<template>
  <div class="molecule_upload-modifier">
    <div class="container">
      <atom-upload v-if="!stats.upload" class="upload" :max-length="120" @files-change="onFilesChange" />
      <atom-text-toggle v-if="!stats.progress" :text="stats.info" />
      <atom-progress v-if="stats.progress" class="progress" :stroke="5" :radius="60" :progress="stats.progress" />
      <video
        v-if="stats.blob"
        ref="video"
        class="preview"
        :src="stats.blob"
        controls
        playsinline
      />
    </div>
    <a v-if="stats.blob" :href="stats.blob" :download="stats.upload.name">Download</a>
  </div>
</template>

<script>
import AtomUpload from '@/components/atoms/Upload';
import AtomProgress from '@/components/atoms/Progress';
import AtomTextToggle from '@/components/atoms/TextToggle';
import { disguiseFile } from '@/service/ffmpegVideoConverter';

export default {
  components: {
    AtomUpload,
    AtomProgress,
    AtomTextToggle
  },

  props: {
    id: {
      type: String,
      default: null
    }
  },

  data () {
    return {
      stats: this.resetStats()
    };
  },

  methods: {
    resetStats (error) {
      return {
        blob: null,
        info: null,
        error,
        progress: 0,
        upload: null
      };
    },

    async onFilesChange (file) {
      const stats = this.stats = this.resetStats();
      stats.upload = file;
      const updateStats = await this.observeConversion(await disguiseFile(file), stats);
      this.$emit('ready', { id: this.id, stats: updateStats });
    },

    observeConversion (observers, stats) {
      observers.start.subscribe((e) => { console.log(e); });
      observers.progress.subscribe((progress) => { stats.progress = progress * 100; });
      observers.info.subscribe((info) => { stats.info = info; });
      observers.error.subscribe((error) => {
        this.stats = this.resetStats(error);
      });
      return new Promise((resolve) => {
        observers.done.subscribe((blob) => {
          stats.blob = blob;
          resolve(stats);
        });
      });
    }
  }
};
</script>

<style lang="postcss" scoped>
.molecule_upload-modifier {
  & .container {
    position: relative;
    width: 200px;
    height: 200px;
    overflow: hidden;
    background-color: black;
    border: 2px solid red;
    border-radius: 20px;
  }

  & .progress {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

  }

  & .preview {
    width: 100%;
    height: 100%;
    transform: translateY(-100%);
    object-fit: cover;
  }
}

</style>
