/**
 * 判断当前是否是浏览器环境
 */
export const isBrowser = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

/** 判断值是否为一个Boolean */
export const isBoolean = (val: any): val is boolean => typeof val === 'boolean';

/** 判断值是否为一个 Date 对象 */
export const isDate = (val: any): val is Date => val instanceof Date;

/** 判断值是否为一个方法 */
export const isFunction = <T extends Function>(val: any): val is T => typeof val === 'function';

/** 判断值是否为一个数值 */
export const isNumber = (val: any): val is number => typeof val === 'number';

/** 判断值是否为NaN */
export const isNaN = (val: any): val is typeof NaN => val !== val;

/** 判断值是否为一个字符串 */
export const isString = (val: unknown): val is string => typeof val === 'string';

/** 判断值是否为一个 undefined */
export const isUndefined = (val: any): val is undefined => typeof val === 'undefined';

/** 判断值是否为 null */
export const isNull = (val: any): val is null => val === null;

/** 判断值是否为数组 */
export const isArray = (val: any): val is Array<any> => val instanceof Array;

/** 判断值是否为 window 对象 */
export const isWindow = (val: any): val is Window =>
  typeof window !== 'undefined' && toString.call(val) === '[object Window]';

/** 判断是否是IOS系统 */
export const isIOS =
  isBrowser && window?.navigator?.userAgent && /iP(ad|hone|od)/.test(window.navigator.userAgent);

const protocolAndDomainRE = /^(?:\w+:)?\/\/(\S+)$/;

const localhostDomainRE = /^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/;
const nonLocalhostDomainRE = /^[^\s\.]+\.\S{2,}$/;

/**
 * 检查字符串是否是 url
 *
 * @param value 要检查的值
 * @returns `value` 是 Url 返回 `true`，否则返回 `false`
 * @example
 * ```ts
 * isUrl('https://www.baidu.com') // => true
 * ```
 */
export default function isUrl(value: string) {
  if (!isString(value)) {
    return false;
  }

  const match = value.match(protocolAndDomainRE);
  if (!match) {
    return false;
  }

  const everythingAfterProtocol = match[1];
  if (!everythingAfterProtocol) {
    return false;
  }

  if (
    localhostDomainRE.test(everythingAfterProtocol) ||
    nonLocalhostDomainRE.test(everythingAfterProtocol)
  ) {
    return true;
  }

  return false;
}
