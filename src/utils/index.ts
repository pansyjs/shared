export * from './is';
export * from './rect';
export { isDev } from './isDev';

/** 空方法 */
export const noop = () => {};
export const now = () => Date.now();
export const timestamp = () => +Date.now();

export { nanoid } from './nanoid';
export { classNames } from './classNames';
export { numberFormat } from './numberFormat';
export { KeyCode } from './KeyCode';
export { isUrl } from './isUrl';
