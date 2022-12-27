import { Brand } from './Brand';

/**
 * 字面量联合类型。
 *
 * @example
 * ```ts
 * // before: China, American 将得不到类型提示
 * type Country = 'China' | 'American' | string
 * // after: China, American 将得到类型提示
 * type Country = LiteralUnion<'China' | 'American', string>
 * ```
 */
export type LiteralUnion<L, B> = L | Brand<B, never>;
