export function isSupportedBrowser (browserSupport) {
  // eslint-disable-next-line security/detect-non-literal-regexp
  return new RegExp(browserSupport.regex).test(global.navigator.userAgent);
}

export default (context, inject) => {
  inject('isDeviceIos', () => isSupportedBrowser(<%= options.detections.ios %>));
  inject('isBrowserSafari', () => navigator.userAgent.toLowerCase().indexOf('safari/') > -1 && navigator.userAgent.toLowerCase().indexOf('fxios/') < 0);

  // inject('isDeviceAndroid', () => isSupportedBrowser(<%= options.detections.android %>));
  inject('isDeviceAndroid', () => global.navigator.userAgent.toLocaleLowerCase().includes('android'));
}
