![Unfiltered Truth][logo]

# Unfiltered Truth

[![main][github-workflow-main-src]][github-workflow-main-href]
[![develop][github-workflow-develop-src]][github-workflow-develop-href]


[![Renovate - Status][renovate-status-src]][renovate-status-href]
[![License][license-src]][license-href]

[✨ &nbsp;&nbsp;**Release Notes**](./CHANGELOG.md)

`#UnfilteredTruth` is a basic tool to protect a basic right. Recently, US police officers started to play music to prevent citizens from documenting and sharing their actions. The music triggers social media copyright filters and prevents recordings from being shared. This tool provides a fast and simple way to hide the video’s soundtrack from these filters – for fast and simple sharing.

## Try it
You can find this tool on the web: [unfilteredtruth.cc](https://unfilteredtruth.cc)

## Process
This tool changes your video as carefully as possible. The audio information is hidden in an infrasound frequency (as outlined by Todd Jeremy Treece), then the pitch is changed a little so it is less easily recognised by automated upload filters. However, it cannot be 100 per cent guaranteed that the processed video will not be blocked by upload filters and the platform’s filtering software might learn to recognise any such modifications. 
## Want to support this idea? 
Everybody should be able to share video evidence with the world – unobstructed by copyright filters. This tool is just a first, quick take on an urgent topic. 
- Consider sharing it on your website or on social media.
- If you want to improve the code, fork it and do your magic.
---
## Development

1. Clone this repository
2. Install dependencies using `npm install` or `yarn install`
3. Start development server using `npm run dev` or `yarn dev`

Learn more about [NuxtJS](https://nuxtjs.org/)

<a href="https://nuxtjs.org/" target="_blank"><img src="https://nuxtjs.org/logos/built-with-nuxt.svg" width="240" /></a>

---
## ToDos
- [ ] full android support
- [ ] exploring other audio attacks to prevent blocking by upload filters
- [ ] optimized loading states
- [ ] increase time limits
- [ ] PWA support
- [ ] i18n support

## Thanks to:
[videoconverter.js](https://github.com/bgrins/videoconverter.js/)

## License

[LGPL-2.1 License](./LICENSE)

<!-- Badges -->
[logo]: https://user-images.githubusercontent.com/8287751/109680685-09c58480-7b7d-11eb-8c35-b88889559fd4.jpg

[license-src]: https://img.shields.io/github/license/GrabarzUndPartner/UnfilteredTruth.svg
[license-href]: https://github.com/GrabarzUndPartner/UnfilteredTruth/blob/main/LICENSE

[renovate-status-src]: <https://img.shields.io/badge/renovate-enabled-brightgreen>
[renovate-status-href]: <https://renovate.whitesourcesoftware.com/>

[github-workflow-main-src]: <https://github.com/GrabarzUndPartner/UnfilteredTruth/workflows/Main/badge.svg?branch=main>
[github-workflow-main-href]: <https://github.com/GrabarzUndPartner/UnfilteredTruth/actions?query=workflow%3AMain>
[github-workflow-develop-src]: <https://github.com/GrabarzUndPartner/UnfilteredTruth/workflows/Test/badge.svg?branch=develop>
[github-workflow-develop-href]: <https://github.com/GrabarzUndPartner/UnfilteredTruth/actions?query=workflow%3ATest>
