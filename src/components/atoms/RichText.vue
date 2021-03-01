<template>
  <div
    v-font="[
      $getFont('Alfa Slab One', 400, 'normal', {selector: 'h2, h3'}),
      $getFont('Roboto', 400, 'italic', {selector: 'p'})
    ]"
    class="atom-rich-text"
    :class="styleClasses"
  >
    <div
      v-if="!$slots.default"
      v-html="content"
    />
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    styleType: {
      type: String,
      default: 'default'
    },
    content: {
      type: String,
      required: false,
      default: 'Lorem ipsum <strong>dolor sit</strong> amet, consetetur <a href=\'https://grabarzundpartner.de\'>sadipscing elitr</a>, sed diam nonumy eirmod <i>tempor invidunt ut labore</i> et dolore magna aliquyam erat, <u>sed diam voluptua.</u> At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
    }
  },
  computed: {
    styleClasses () {
      return {
        [`rich-text--${this.styleType}`]: this.styleType
      };
    }
  }
};
</script>

<style lang="postcss" scoped>
.atom-rich-text {
  & h2,
  & >>> h2 {
    margin: 0;
    font-size: calc(41 / 320 * 100vw);
    line-height: 1;
    color: var(--color-primary);
    text-align: center;

    @media (--xs) {
      font-size: 41px;
    }

    @media (--sm) {
      font-size: 71px;
    }
  }

  & h3,
  & >>> h3 {
    margin: 0;
    font-size: calc(22 / 320 * 100vw);
    text-align: center;

    @media (--xs) {
      font-size: 22px;
    }

    @media (--sm) {
      font-size: 32px;
    }
  }

  & p,
  & >>> p {
    margin: 0;
    font-size: calc(18 / 320 * 100vw);

    @media (--xs) {
      font-size: 18px;
    }

    @media (--sm) {
      font-size: 24px;
    }

  }

  &.rich-text--audio-check {
    text-align: center;

    & h3,
    & >>> h3 {
      margin-bottom: calc(10 / 320 * 100vw);
      text-transform: uppercase;

      @media (--xs) {
        margin-bottom: 10px;
      }

      @media (--sm) {
        padding: 0 10%;
        margin-bottom: 30px;
      }
    }

    & p,
    & >>> p {
      margin-top: calc(10 / 320 * 100vw);
      margin-bottom: calc(5 / 320 * 100vw);

      @media (--xs) {
        margin-top: 10px;
        margin-bottom: 5px;
      }

      @media (--sm) {
        margin-top: 20px;
        margin-bottom: 10px;
      }

    }

    /*
    & h3,
    & >>> h3 {
      @media (--xs) {
        margin-bottom: 10px;
      }

      @media (--sm) {
        margin-bottom: 30px;
      }
    }
*/
  }

  &.rich-text--upload-modifier {
    text-align: center;

    & h3,
    & >>> h3 {
      margin-bottom: calc(10 / 320 * 100vw);
      text-transform: uppercase;

      @media (--xs) {
        margin-bottom: 10px;
      }

      @media (--sm) {
        margin-bottom: 30px;
      }
    }

    & p,
    & >>> p {
      font-size: calc(18 / 320 * 100vw);

      @media (--xs) {
        font-size: 18px;
      }

      @media (--sm) {
        font-size: 24px;
      }

    }
  }

  &.rich-text--info-box {
    & h3,
    & >>> h3 {
      margin-bottom: calc(16 / 320 * 100vw);
      text-align: center;
      text-transform: uppercase;

      @media (--xs) {
        margin-bottom: 16px;
      }

      @media (--sm) {
        margin-bottom: 16px;
      }
    }
  }

  &.rich-text--text-layer {
    text-align: center;

    & h2,
    & >>> h2 {
      margin-bottom: calc(30 / 320 * 100vw);

      @media (--xs) {
        margin-bottom: 30px;
      }

      @media (--sm) {
        margin-bottom: 50px;
      }
    }

    & h3,
    & >>> h3 {
      margin-top: calc(30 / 320 * 100vw);
      margin-bottom: calc(10 / 320 * 100vw);

      @media (--xs) {
        margin-top: 30px;
        margin-bottom: 10px;
      }

      @media (--sm) {
        margin-top: 50px;
        margin-bottom: 30px;
      }
    }

    & p,
    & >>> p {
      margin: 0;
      font-size: calc(18 / 320 * 100vw);

      @media (--xs) {
        font-size: 18px;
      }

      @media (--sm) {
        font-size: 24px;
      }

    }
  }

}
</style>
