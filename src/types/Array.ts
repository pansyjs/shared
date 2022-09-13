/**
 * 任意数组。
 */
export type AnyArray<T = any> = Array<T> | ReadonlyArray<T>;

/**
 * 同 `T | T[]`。
 *
 * @example
 * ```typescript
 * type X = OneOrMore<number> // => number | number[]
 * ```
 */
export type ArrayOrSingle<T> = T | T[];

/**
 * 推断给定数组 `<T>` 的长度。
 */
export type TupleLength<T extends readonly unknown[]> = T extends { readonly length: infer L }
  ? L
  : never;

/**
 * 获取数组第一个元素的类型
 */
export type Head<T extends AnyArray> = T['length'] extends 0 ? never : T[0];

/**
 * 获取数组除第一个元素的其他元素类型
 */
export type Tail<T extends AnyArray> = T extends [any, ...infer Rest] ? Rest : never;
