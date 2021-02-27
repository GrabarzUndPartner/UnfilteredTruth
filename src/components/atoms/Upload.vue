<template>
  <div
    class="atom-upload"
    :class="{highlight}"
    @dragenter="hover(true)"
    @dragover="hover(true)"
    @dragleave="hover(false)"
    @drop="hover(false)"
  >
    <input type="file" @change="onChange">
    <div>
      <span>Drag &amp; Drop File</span>
      <atom-text-toggle :text="error" />
    </div>
    <video
      v-for="(file, index) in files"
      :key="index"
      :src="getObjectUrl(file)"
      autoplay
      muted
      @loadedmetadata="({target}) => onLoad(target, file)"
    />
  </div>
</template>

<script>
import File from '@/classes/File';
import AtomTextToggle from '@/components/atoms/TextToggle';

export default {
  components: {
    AtomTextToggle
  },

  data () {
    return {
      files: [],
      error: null,
      highlight: false
    };
  },

  methods: {
    getObjectUrl (file) {
      return global.URL.createObjectURL(file);
    },

    onChange ({ target: { files } }) {
      this.files = files;
    },

    async onLoad ({ duration }, uploadedFile) {
      const file = new File(uploadedFile, duration);
      if (await file.hasValidMimeType()) {
        if (duration <= 120) {
          this.$emit('files-change', file);
        } else {
          this.error = 'your video is too long';
        }
      } else {
        this.error = 'wrong file format';
      }
    },

    hover (value) {
      this.highlight = value;
    }
  }
};
</script>

<style lang="postcss" scoped>
.atom-upload {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  background-color: lightgray;

  &:hover,
  &.highlight {
    background-color: gray;
  }

  & input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
  }

  & span {
    display: block;
  }

  & video {
    visibility: hidden;
  }
}
</style>
