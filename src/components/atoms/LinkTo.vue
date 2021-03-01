<template>
  <nuxt-link
    v-if="!isExternal && !layer"
    :to="url"
    :title="title"
  >
    <slot>{{ title }}</slot>
  </nuxt-link>
  <button
    v-else-if="layer"
    @click="onClick"
  >
    <slot>{{ title }}</slot>
  </button>
  <a
    v-else
    :download="download"
    :href="url"
    :target="target || '_blank'"
    rel="noopener"
    :title="title"
  >
    <slot>{{ title }}</slot>
  </a>
</template>

<script>
import layerControl from '@/service/layerControl';
export default {
  props: {
    url: {
      type: [
        // Type Object for Route Objects { path: '/page' }
        String, Object
      ],
      default: '#'
    },
    title: {
      type: String,
      default: null
    },
    download: {
      type: String,
      default: null
    },
    layer: {
      type: String,
      default: null
    },
    target: {
      type: String,
      default: '_blank'
    }
  },

  computed: {
    isExternal () {
      if (this.url.startsWith('blob')) {
        return true;
      } else if (typeof this.url === 'string') {
        return /^(http(s)?|ftp):\/\//.test(this.url) || this.url.startsWith('#');
      }
      return false;
    }
  },

  methods: {
    onClick () {
      layerControl.show(this.layer);
    }

  }
};
</script>
