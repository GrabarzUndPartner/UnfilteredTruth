<template>
  <div class="organism-audio-modifier">
    <upload-modifier class="audio-modifier__upload" v-bind="uploadModifier" @reset="onReset" @ready="onReady" @info="onChangeInfo" />
    <lost-container v-if="!complete" class="audio-modifier" direction="column">
      <info-slider v-if="processing" class="audio-modifier__info-slider" :items="infoSliderItems" />
      <info-list v-if="!processing" class="audio-modifier__info-list" :items="infoListItems" />
    </lost-container>
  </div>
</template>

<script>
import UploadModifier from '@/components/molecules/UploadModifier';
import InfoList from '@/components/molecules/InfoList';
import InfoSlider from '@/components/molecules/InfoSlider';
// import { getRandomString } from '@/utils/random';
import { CONVERSION_COMPLETE, CONVERSION_START } from '@/classes/FFMPEGWorker';
import LostContainer from '../layouts/LostContainer';

export default {
  components: {
    LostContainer,
    UploadModifier,
    InfoList,
    InfoSlider
  },

  props: {

    uploadModifier: {
      type: Object,
      default () {
        return {
          info: 'Do not leave your browser or close this tab'
        };
      }
    },

    infoListItems: {
      type: Array,
      default: InfoSlider.props.items.default
    },
    infoSliderItems: {
      type: Array,
      default: InfoList.props.items.default
    }
  },

  data () {
    return {
      complete: false,
      processing: false

    };
  },

  methods: {
    onChangeInfo (info) {
      switch (info) {
        case CONVERSION_START:
          this.processing = true;
          break;
        case CONVERSION_COMPLETE:
          this.processing = false;
          break;
      }
    },
    onReset () {
      this.complete = false;
    },
    onReady () {
      this.complete = true;
    }
  }
};
</script>

<style lang="postcss" scoped>
div {
  & ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  & .audio-modifier__upload + * {
    margin-top: calc(40 / 320 * 100vw);

    @media (--xs) {
      margin-top: 40px;
    }

    @media (--sm) {
      margin-top: 60px;
    }
  }

  /* & .audio-modifier__upload {

  } */

  & .audio-modifier__info-slider,
  & .audio-modifier__info-list {
    lost-offset: 1/12;
    lost-column: 10/12;

    @media (--md) {
      lost-offset: 1.4/12;
      lost-column: 9.2/12;
    }
  }

}
</style>
