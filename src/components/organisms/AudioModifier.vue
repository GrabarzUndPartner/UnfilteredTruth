<template>
  <div>
    <ul>
      <li v-for="({id, stats, video}, index) in conversions" :key="index">
        <molecule-upload-modifier :id="id" @ready="onReady" />
        <molecule-wavesurfer v-if="stats" :stats="stats" :video="video" />
      </li>
    </ul>
  </div>
</template>

<script>
import MoleculeUploadModifier from '@/components/molecules/UploadModifier';
import MoleculeWavesurfer from '@/components/molecules/Wavesurfer';
import { getRandomString } from '@/utils/random';

export default {
  components: {
    MoleculeUploadModifier,
    MoleculeWavesurfer
  },

  data () {
    return {
      conversions: [
        { id: getRandomString(), stats: null, video: null }
      ]
    };
  },

  methods: {
    onReady (result) {
      console.log(result);
      const entry = this.conversions.find(({ id }) => id === result.id);
      entry.stats = result.stats;
      entry.video = result.video;
      this.conversions.push({ id: getRandomString(), stats: null });
    }
  }
};
</script>

<style lang="postcss" scoped>
div {
  margin-top: 100px;

  & ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
}
</style>
