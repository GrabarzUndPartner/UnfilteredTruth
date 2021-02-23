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
      error: null,
      highlight: false
    };
  },

  methods: {
    onChange ({ target: { files } }) {
      Array.from(files).map(file => new File(file)).map(async (file) => {
        if (await file.hasValidMimeType()) {
          if (await file.hasValidLength()) {
            if (file.hasValidSize()) {
              this.$emit('files-change', file);
            } else {
              this.error = 'file is too big';
            }
          } else {
            this.error = 'your video is too long';
          }
        } else {
          this.error = 'wrong file format';
        }
      });
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
}
</style>
