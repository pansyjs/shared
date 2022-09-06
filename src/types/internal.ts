/**
 * 从类型中获取键，类似于 `keyof` 但这个也适用于联合类型。
 */
export type KeysOfUnion<T> = T extends T ? keyof T : never;

/**
 * 推断给定数组 `<T>` 的长度。
 */
export type TupleLength<T extends readonly unknown[]> = T extends { readonly length: infer L }
  ? L
  : never;

/** 判断两个给定类型是否相等 */
export type IsEqual<T, U> = (<G>() => G extends T ? 1 : 2) extends <G>() => G extends U ? 1 : 2
  ? true
  : false;
