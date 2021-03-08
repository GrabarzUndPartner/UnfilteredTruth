export function isSupportedBrowser (browserSupport) {
  // eslint-disable-next-line security/detect-non-literal-regexp
  return new RegExp(browserSupport.regex).test(global.navigator.userAgent);
}

export default (context, inject) => {
  inject('isDeviceIos', () => isSupportedBrowser(<%= options.detections.ios %>));
  inject('isBrowserSafari', () => isBrowserSafari());
  inject('isDeviceAndroid', () => global.navigator.userAgent.toLocaleLowerCase().includes('android'));
}

function isBrowserSafari(){
  const userAgent = navigator.userAgent.toLowerCase();
  return userAgent.indexOf('safari/') > -1 &&
  userAgent.indexOf('fxios/') < 0 &&
  userAgent.indexOf('edgios/') < 0 &&
  userAgent.indexOf('crios/') < 0 &&
  userAgent.indexOf('opios/') < 0 &&
  userAgent.indexOf('puffin/') < 0
}

