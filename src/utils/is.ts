export const isClient = typeof window !== 'undefined';

/** 判断值是否为一个Boolean */
export const isBoolean = (val: any): val is boolean => typeof val === 'boolean';

/** 判断值是否为一个方法 */
export const isFunction = <T extends Function>(val: any): val is T => typeof val === 'function';

/** 判断值是否为一个数值 */
export const isNumber = (val: any): val is number => typeof val === 'number';

/** 判断值是否为一个字符串 */
export const isString = (val: unknown): val is string => typeof val === 'string';

/** 判断值是否为 window 对象 */
export const isWindow = (val: any): val is Window =>
  typeof window !== 'undefined' && toString.call(val) === '[object Window]';

/** 空方法 */
export const noop = () => {};

/** 判断是否是IOS系统 */
export const isIOS =
  isClient && window?.navigator?.userAgent && /iP(ad|hone|od)/.test(window.navigator.userAgent);
