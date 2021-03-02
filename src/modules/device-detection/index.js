
const path = require('path');
const { getUserAgentRegExp } = require('browserslist-useragent-regexp');
const serialize = require('serialize-to-js');

export default function () {
  const detections = {
    android: serialize({
      regex: getUserAgentRegExp({
        browsers: ['and_chr 70'],
        allowHigherVersions: true,
        allowZeroSubversions: true
      })
    }),
    ios: serialize({
      regex: getUserAgentRegExp({
        browsers: ['ios_saf 13'],
        allowHigherVersions: true,
        allowZeroSubversions: true
      })
    })
  };

  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    fileName: 'plugin.js',
    options: { detections }
  });
}
