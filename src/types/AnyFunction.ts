/**
 * 任意函数。
 */
export type AnyFunction = Record<any, any> & {
  (...args: any[]): any;
};
