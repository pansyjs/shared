import { isBrowser } from './isBrowser';

/** 判断是否是IOS系统 */
export const isIOS =
  isBrowser && window?.navigator?.userAgent && /iP(ad|hone|od)/.test(window.navigator.userAgent);
