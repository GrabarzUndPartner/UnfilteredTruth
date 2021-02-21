<template>
  <div class="molecule_upload-modifier">
    <div class="container">
      <atom-upload @files-change="onFilesChange" />
      <atom-progress v-if="process" class="progress" :stroke="5" :radius="60" :progress="stats.progress" />
      <video v-if="stats.blob" class="preview" :src="stats.blob" controls autoplay />
    </div>
    <span>{{ stats.info }}</span>
    <a v-if="stats.blob" :href="stats.blob" :download="stats.name">Download</a>
  </div>
</template>

<script>
import AtomUpload from '@/components/atoms/Upload';
import AtomProgress from '@/components/atoms/Progress';
// import { disguiseFile } from '@/service/ffmpeg';
import { disguiseFile } from '@/service/ffmpegVideoConverter';

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
      stats: {
        name: null,
        blob: null,
        info: null,
        progress: 0
      }
    };
  },

  methods: {
    async onFilesChange (files) {
      this.process = true;
      const result = await Promise.all(Array.from(files).map(async (file) => {
        this.stats.name = file.name;

        const observers = await disguiseFile(file);

        observers.start.subscribe(e => console.log(e));
        observers.stdout.subscribe((e) => {
          this.stats.progress = e * 100;
          console.log(e);
        });
        return new Promise((resolve) => {
          observers.done.subscribe((e) => {
            this.process = false;
            this.stats.blob = e;
            resolve();
          });
        });
      }));

      this.$emit('ready', { id: this.id, stats: result });
    }
  }
};
</script>

<style lang="postcss" scoped>
.molecule_upload-modifier {
  & .container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .progress {
    position: absolute;
    top: 0;
    left: 0;
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
