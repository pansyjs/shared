import type { IsAny } from './IsAny';

/**
 * 判断 `T` 是否是 `unknown` 类型。
 *
 * @example
 * ```typescript
 * type X = IsUnknown<unknown>
 * // => true
 * ```
 */
export type IsUnknown<T> = IsAny<T> extends true ? false : unknown extends T ? true : false;
