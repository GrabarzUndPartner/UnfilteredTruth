<template>
  <div class="atoms-info-box" :class="styleClasses">
    <slot>
      <rich-text style-type="info-box" class="info-box__content">
        <h3 v-if="headline && !fade">
          {{ headline }}
        </h3>
        <text-fade v-else-if="headline" tag="h3" :text="headline" />
        <p v-if="text" v-html="text" />
      </rich-text>
    </slot>
    <span v-if="foot" v-font="$getFont('Roboto', 700, 'italic')">{{ foot }}</span>
  </div>
</template>

<script>
import TextFade from '@/components/atoms/TextFade';
import RichText from '@/components/atoms/RichText';
export default {
  components: { TextFade, RichText },
  props: {
    error: {
      type: Boolean,
      default: false
    },
    fade: {
      type: Boolean,
      default: false
    },
    headline: {
      type: String,
      default: 'Info Box Headline'
    },
    text: {
      type: String,
      default: 'Info Box Text'
    },
    foot: {
      type: String,
      default: null
    },
    styleType: {
      type: String,
      default: null
    }
  },
  computed: {
    styleClasses () {
      return {
        [`info-box--${this.styleType}`]: this.styleType,
        'info-box--error': this.error
      };
    }
  }
};
</script>

<style lang="postcss">
.atoms-info-box {
  box-sizing: border-box;
  padding: calc(15 / 320 * 100vw);

  @media (--xs) {
    padding: 15px;
  }

  @media (--sm) {
    padding: 20px;
  }

  & > span {
    position: absolute;
    bottom: calc(10 / 320 * 100vw);
    left: 0;
    width: 100%;
    font-size: calc(12 / 320 * 100vw);
    text-align: center;

    @media (--xs) {
      bottom: 10px;
      font-size: 12px;
    }

    @media (--sm) {
      bottom: 20px;
      font-size: 18px;
    }
  }

  color: var(--color-tertiary);
  background: var(--color-secondary);

  &.info-box--info-slider {
    color: var(--color-tertiary);
    background: none;
  }

  &.info-box--upload-modifier-sucess {
    color: var(--color-tertiary);
    background: var(--color-valid);
  }

  &.info-box--upload-error,
  &.info-box--error {
    color: var(--color-tertiary);
    background: var(--color-invalid);

    & .info-box__content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
    }
  }

}
</style>
