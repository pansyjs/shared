export type Fn = () => void;

/**
 * Gets keys from a type. Similar to `keyof` but this one also works for union types.
 */
export type KeysOfUnion<T> = T extends T ? keyof T : never;
