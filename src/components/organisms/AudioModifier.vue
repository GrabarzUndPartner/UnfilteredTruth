<template>
  <div class="organism-audio-modifier">
    <transition name="fade" mode="out-in">
      <lost-container v-if="isAndroid" class="audio-modifier__device-notification" direction="column">
        <info-box v-bind="deviceNotification" style-type="error" />
      </lost-container>
    </transition>
    <upload-modifier class="audio-modifier__upload" v-bind="uploadModifier" @reset="onReset" @ready="onReady" @info="onChangeInfo" />
    <lost-container v-if="!complete" class="audio-modifier" direction="column">
      <transition name="fade" mode="out-in">
        <info-slider v-if="processing" class="audio-modifier__info-slider" :items="infoSliderItems" />
        <info-list v-if="!processing" class="audio-modifier__info-list" :items="infoListItems" />
      </transition>
    </lost-container>
  </div>
</template>

<script>
import UploadModifier from '@/components/molecules/UploadModifier';
import InfoList from '@/components/molecules/InfoList';
import InfoSlider from '@/components/molecules/InfoSlider';
import { CONVERSION_COMPLETE, CONVERSION_START } from '@/classes/FFMPEGWorker';
import LostContainer from '@/components/layouts/LostContainer';
import InfoBox from '@/components/atoms/InfoBox';

export default {
  components: {
    LostContainer,
    UploadModifier,
    InfoList,
    InfoSlider,
    InfoBox
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
      isAndroid: false,
      complete: false,
      processing: false
    };
  },

  computed: {
    deviceNotification () {
      return {
        headline: null,
        text: 'Android support is experimental. <br>In case of problems, switch to another device.'
      };
    }
  },

  mounted () {
    this.isAndroid = this.$isDeviceAndroid();
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
.organism-audio-modifier {
  & ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  & .audio-modifier__device-notification {
    lost-column: 12/12;
    lost-offset: 0/12;
    margin-top: -20px;
    margin-bottom: 40px;

    @media (--sm) {
      lost-column: 10/12;
      lost-offset: 1/12;
    }

    @media (--md) {
      lost-column: 8/12;
      lost-offset: 2/12;
    }

    @media (--lg) {
      lost-column: 6/12;
      lost-offset: 3/12;
    }
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
