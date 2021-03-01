<template>
  <transition name="layer-toggle">
    <lost-container
      v-if="visible"
      tag="aside"
      class="layout-layer"
      :class="styleClasses"
    >
      <div>
        <div class="layer__close">
          <button
            v-if="closeButton"
            class="close"
            @click="onClickClose"
          >
            <svg-icon-close />
          </button>
        </div>
        <slot />
      </div>
    </lost-container>
  </transition>
</template>

<script>
import svgIconClose from '@/assets/svg/icons/close.svg?vue-template';
import LostContainer from '@/components/layouts/LostContainer.vue';

import layerControl from '@/service/layerControl';

export default {
  components: { LostContainer, svgIconClose },
  props: {
    name: {
      type: String,
      required: true
    },
    closeButton: {
      type: Boolean,
      default: true
    }

  },

  data () {
    return {
      visible: false
    };
  },
  computed: {
    styleClasses () {
      return {
        'js--visible': this.visible
      };
    }
  },
  mounted () {
    layerControl.add(this.name, this);
  },
  destroyed () {
    layerControl.remove(this.name);
  },
  methods: {
    onClickClose () {
      layerControl.close(this.name);
    }
  }
};
</script>

<style lang="postcss" scoped>
.layout-layer {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  background: var(--color-white);

  & >>> .lost-flex-container {
    position: relative;
    min-height: 100%;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 100%;
  }

  & .layer__close {
    position: sticky;
    top: 0;
    padding-top: calc(25 / 320 * 100%);
    clear: fix;

    @media (--xs) {
      padding-top: 25px;
    }

    @media (--sm) {
      padding-top: 50px;
    }

    @media (--xs-max) {
      lost-column: 10/12;
      lost-offset: 1/12;
    }

    & button {
      display: block;
      float: right;
      padding: 0;
      cursor: pointer;
      background: transparent;
      border: none;
      outline: none;
      appearance: none;
      opacity: 1;
      transition: opacity 0.2s linear, transform 0.2s linear;

      @media (hover: none) {
        &:active {
          opacity: 0.8;
          transform: scale(0.9);
        }
      }

      @media (hover: hover) {
        &:hover {
          opacity: 0.8;
          transform: scale(0.9);
        }
      }
    }

    & svg {
      display: block;
      width: calc(30 / 375 * 100vw);
      height: calc(30 / 375 * 100vw);
      fill: var(--color-primary);

      @media (--xs) {
        width: 30px;
        height: 30px;
      }

      @media (--sm) {
        width: 40px;
        height: 40px;
      }
    }
  }
}

.layer-toggle-enter-active,
.layer-toggle-leave-active {
  transition: transform 0.15s ease-out, opacity 0.15s linear;
}

.layer-toggle-enter,
.layer-toggle-leave-to {
  opacity: 0;
  transition: transform 0.15s ease-in, opacity 0.15s linear;
  transform: scale(0.6);
}
</style>