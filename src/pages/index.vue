<template>
  <div>
    <intro critical v-bind="intro" />
    <audio-modifier critical v-bind="audioModifier" />
    <info v-bind="info" />
  </div>
</template>

<script>

export default {
  components: {
    Intro: () => import('@/components/organisms/Intro'),
    AudioModifier: () => import('@/components/organisms/AudioModifier'),
    Info: () => import('@/components/organisms/Info')
  },

  asyncData () {
    return {

      intro: {
        headline: {
          primary: '<span>#</span>Unfiltered',
          secondary: 'Truth'
        },
        subline: 'A basic tool to protect a basic right.'
      },
      info: {

        tickerContent: 'No trackers, no cookies. No video data is sent out. This tool is open-source.',
        buttonLabel: 'Our promise',
        buttonLayer: 'privacyPromise'

      },

      audioModifier: {

        infoListItems: [
          {
            headline: null,
            text: 'Recently, US police officers started to play music to prevent citizens from documenting and sharing their actions.<br><br>The music triggers social media copyright filters and prevents recordings from being shared. This tool provides a fast and simple way to hide the video’s soundtrack from these filters – for fast and simple sharing.'
          }
        ],
        infoSliderItems: [
          {
            headline: 'We heard the news:',
            text: 'Officials abuse copyright regulations to stop videos of possible misconduct being shared.'
          },
          {
            headline: 'We believe:',
            text: 'Everybody should be able to share video evidence with the world – unobstructed by copyright filters.'
          },
          {
            headline: 'We want to help:',
            text: 'We provide this simple tool. It processes video footage to reduce the risk of it getting blocked.'
          }
        ]

      }
    };
  }
};

</script>
