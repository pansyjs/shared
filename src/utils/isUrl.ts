import { isString } from './isString';

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
export function isUrl(path: string) {
  if (!path || !isString(path)) {
    return false;
  }

  const match = path.match(protocolAndDomainRE);
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
