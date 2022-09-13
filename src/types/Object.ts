import type { IsNever } from './IsNever';

/**
 * 任意对象。
 */
export type AnyObject = Record<any, any>;

/**
 * 判断 `T` 是否是空对象。
 *
 * @example
 * ```typescript
 * type X = IsEmptyObject<{}>
 * // => true
 * ```
 */
export type IsEmptyObject<T> = T extends Object ? IsNever<keyof T> : false;
