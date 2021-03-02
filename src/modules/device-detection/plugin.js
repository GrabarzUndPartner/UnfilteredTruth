export function isSupportedBrowser (browserSupport) {
  console.log('isSupportedBrowser',global.navigator.userAgent)
  // eslint-disable-next-line security/detect-non-literal-regexp
  return new RegExp(browserSupport.regex).test(global.navigator.userAgent);
}

console.log(<%= options.detections.ios %>, <%= options.detections.android %>)

export default (context, inject) => {
  inject('isDeviceIos', () => isSupportedBrowser(<%= options.detections.ios %>));
  // inject('isDeviceAndroid', () => isSupportedBrowser(<%= options.detections.android %>));
  inject('isDeviceAndroid', () => global.navigator.userAgent.toLocaleLowerCase().includes('android'));
}
