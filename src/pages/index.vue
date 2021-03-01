<template>
  <div>
    <intro critical />
    <audio-modifier critical v-bind="audioModifier" />
    <info v-bind="info" />
    <!-- <animated-headline v-bind="animatedHeadline" />
    <quote-fader v-bind="QuoteFader" /> -->
  </div>
</template>

<script>

export default {
  components: {
    Intro: () => import('@/components/organisms/Intro'),
    AudioModifier: () => import('@/components/organisms/AudioModifier'),
    Info: () => import('@/components/organisms/Info')
    // QuoteFader: () => import('@/components/organisms/QuoteFader')
  },

  asyncData () {
    return {

      intro: {},
      info: {

        tickerContent: 'We don’t track you. No video or data is sent out. This tool is open source. We don’t track you. No video or data is sent out.',
        buttonLabel: 'Our privacy promise…',
        buttonLayer: 'privacyPromise'

      },

      audioModifier: {

        infoListItems: [
          {
            headline: null,
            text: 'Recently, police officers started to play music while their actions were filmed. Thus, trying to trigger social media’s copyright filters to block these documents from being viewed and shared.'
          },
          {
            headline: null,
            text: 'This tool provides a fast and simple way to hide the video’s soundtrack from these filters. For fast and simple sharing.'
          }
        ],
        infoSliderItems: [
          {
            headline: 'We noticed:​',
            text: 'Officials abuse copyright regulations to stop the spread of videos of possible misconduct.​'
          },
          {
            headline: 'We believe:​',
            text: 'Everybody should be able to share video evidence with the world. Unobstructed by content filter.'
          },
          {
            headline: 'We want to help:​​',
            text: 'We provide this simple tool. It processes video footage to reduce the risk of getting detected on upload.​'
          }
        ]

      },
      QuoteFader: {
        list: [
          {
            headline: 'We noticed:​',
            text: 'Officials abuse copyright regulations to stop the spread of videos of possible misconduct.​'
          },
          {
            headline: 'We believe:​',
            text: 'Everybody should be able to share video evidence with the world. Unobstructed by content filter.'
          },
          {
            headline: 'We want to help:​​',
            text: 'We provide this simple tool. It processes video footage to reduce the risk of getting detected on upload.​'
          }
        ]
      }
    };
  }

};

</script>

<style lang="postcss" scoped>

</style>
