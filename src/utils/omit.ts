/**
 * 排除对象中指定的属性
 * @param input
 * @param fields
 * @returns
 */
export function omit<T extends object, K extends keyof T>(
  input: T,
  fields: K[] | readonly K[],
): Omit<T, K> {
  const clone = { ...input };

  if (Array.isArray(fields)) {
    fields.forEach((key) => {
      delete clone[key];
    });
  }

  return clone;
}
