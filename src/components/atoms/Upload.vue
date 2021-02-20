<template>
  <div class="atom-upload">
    <input type="file" @change="onChange">
    <span>Drag &amp; Drop File</span>
  </div>
</template>

<script>
export default {
  methods: {
    onChange ({ target: { files } }) {
      this.$emit('files-change', files);
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

  &:hover {
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
}
</style>
