/**
 * 检查 `value` 是否是 `null` 或 `undefined`
 *
 * @param value 要检查的值
 * @returns `value` 是 `null` 或 `undefined` 返回 `true`，否则返回 `false`
 * @example
 * ```ts
 * isNil(null) // => true
 * isNil(undefined) // => true
 * ```
 */
export function isNil(value: any): value is null | undefined {
  return value === undefined || value === null;
}
