<template>
  <div class="organism-info">
    <text-ticker :content="tickerContent" class="organism-info__ticker" />
    <lost-container>
      <div class="organism-info__button">
        <base-button :label="buttonLabel" @click="onClickButton" />
      </div>
    </lost-container>
  </div>
</template>

<script>
import LostContainer from '@/components/layouts/LostContainer';
import BaseButton from '@/components/atoms/BaseButton';
import TextTicker from '@/components/atoms/TextTicker';
import layerControl from '@/service/layerControl';
export default {
  components: {
    LostContainer,
    BaseButton,
    TextTicker
  },
  props: {
    tickerContent: {
      type: String,
      default: TextTicker.props.content.default
    },
    buttonLabel: {
      type: String,
      default: BaseButton.props.label.default
    },
    buttonLayer: {
      type: String,
      default: BaseButton.props.label.default
    }
  },
  methods: {
    onClickButton () {
      layerControl.show(this.buttonLayer);
    }
  }
};
</script>

<style lang="postcss">
.organism-info {
  & .organism-info__ticker {
    margin-bottom: calc(20 / 320 * 100vw);

    @media (--xs) {
      margin-bottom: 20px;
    }
  }

  & .organism-info__button {
    display: flex;
    lost-column: 12/12;
    justify-content: center;
  }
}
</style>
