<template>
  <div>
    <ul>
      <li v-for="({id}, index) in conversions" :key="index">
        <molecule-upload-modifier :id="id" @ready="onReady" />
      </li>
    </ul>
  </div>
</template>

<script>
import MoleculeUploadModifier from '@/components/molecules/UploadModifier';

export default {
  components: {
    MoleculeUploadModifier
  },

  data () {
    return {
      conversions: [
        { id: getRandomString() }
      ]
    };
  },

  methods: {
    onReady (result) {
      this.conversions.find(({ id }) => id === result.id).stats = result.stats;
      this.conversions.push({ id: getRandomString() });
    }
  }
};

function getRandomString () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
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
