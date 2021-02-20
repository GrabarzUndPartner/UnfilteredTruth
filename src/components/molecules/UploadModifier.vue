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
import { disguiseFile } from '@/service/ffmpeg';
// import { disguise } from '@/service/ffmpegTest';

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
      const result = await Promise.all(Array.from(files).map((file) => {
        this.stats.name = file.name;
        return disguiseFile(file, this.stats);
        // return disguise(file, this.stats);
      }));
      this.process = false;
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
