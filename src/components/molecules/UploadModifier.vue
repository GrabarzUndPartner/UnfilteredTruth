<template>
  <div class="molecule_upload-modifier">
    <div class="container">
      <atom-upload @files-change="onFilesChange" />
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
    <span v-if="!stats.progress">{{ stats.info }}</span>
    <span>{{ stats.error }}</span>
    <a v-if="stats.blob" :href="stats.blob" :download="stats.upload.name">Download</a>
  </div>
</template>

<script>
import AtomUpload from '@/components/atoms/Upload';
import AtomProgress from '@/components/atoms/Progress';
// import { disguiseFile } from '@/service/ffmpeg';
import { disguiseFile } from '@/service/ffmpegVideoConverter';
import File from '@/classes/File';

export default {
  components: {
    AtomUpload,
    AtomProgress
  },

  props: {
    id: {
      type: String,
      default: null
    }
  },

  data () {
    return {
      process: false,
      stats: this.resetStats()
    };
  },

  methods: {
    resetStats () {
      return {
        blob: null,
        info: null,
        error: null,
        progress: 0,
        upload: null
      };
    },

    async onFilesChange (files) {
      this.process = true;
      await Promise.all(Array.from(files).map(async (file) => {
        const upload = new File(file);
        this.stats.upload = await upload.getObjectUrl();
        return this.observeConversion(await disguiseFile(upload));
      }));
      this.$emit('ready', { id: this.id, stats: this.stats });
    },

    observeConversion (observers) {
      observers.start.subscribe(e => console.log(e));
      observers.progress.subscribe((progress) => {
        this.stats.progress = progress * 100;
        console.log(progress);
      });
      observers.info.subscribe((info) => {
        this.stats.info = info;
      });
      observers.error.subscribe((e) => {
        this.stats.error = e;
      });
      return new Promise((resolve) => {
        observers.done.subscribe((blob) => {
          this.process = false;
          this.stats.blob = blob;
          resolve();
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
  }

  & .progress {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  & .preview {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

</style>
