/**
 * 删除左侧的空格
 */
type TrimLeft<V extends string> = V extends ` ${infer R}` ? TrimLeft<R> : V;

/**
 * 删除右侧的空格
 */
type TrimRight<V extends string> = V extends `${infer R} ` ? TrimRight<R> : V;

/**
 * 删除头尾的空格
 */
export type Trim<V extends string> = TrimLeft<TrimRight<V>>;
