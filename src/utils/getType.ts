import type { LiteralUnion } from 'type-fest';

export type GetTypeReturn = LiteralUnion<
  | 'Undefined'
  | 'Null'
  | 'Array'
  | 'String'
  | 'Arguments'
  | 'Function'
  | 'Error'
  | 'Boolean'
  | 'Number'
  | 'Date'
  | 'RegExp'
  | 'Object'
  | 'JSON'
  | 'Math'
  | 'Symbol'
  | 'Map'
  | 'Set'
  | 'WeakMap'
  | 'WeakSet',
  string
>;

/**
 * 检测 `value` 的类型
 *
 * @since 0.1.1
 * @param value 要检测的值
 * @returns 返回检测值的类型
 * @example
 * ```ts
 *  getType(1) // => 'Number'
 *  getType(true) // => 'Boolean'
 * ```
 */
export function getType(value: any): GetTypeReturn {
  return Object.prototype.toString.call(value).slice(8, -1);
}
