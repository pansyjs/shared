/**
 * 判断 `T` 是否是 `any` 类型。
 *
 * @example
 * ```typescript
 * type X = IsAny<any>
 * // => true
 * ```
 */
export type IsAny<T> = 0 extends 1 & T ? true : false;
