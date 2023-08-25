export * from './rect';
export { isIOS } from './isIOS';
export { isBrowser } from './isBrowser';
export { isUrl } from './isUrl';
export { isNil } from './isNil';
export { isNaN } from './isNaN';
export { isDate } from './isDate';
export { isNull } from './isNull';
export { isUndefined } from './isUndefined';
export { isNumber } from './isNumber';
export { isString } from './isString';
export { isArray } from './isArray';
export { isWindow } from './isWindow';
export { isBoolean } from './isBoolean';
export { isFunction } from './isFunction';
export { omit } from './omit';
export { isEqual } from './isEqual';
export { noop } from './noop';

export * as warning from './warning';
export const now = () => Date.now();
export const timestamp = () => +Date.now();

export { getType } from './getType';
export { nanoid } from './nanoid';
export { classNames } from './classNames';
export { numberFormat } from './numberFormat';
export { KeyCode } from './KeyCode';
