export type Fn = () => void;

export type NodeJSTimeout = ReturnType<typeof setTimeout>;
export type NodeJSTimer = ReturnType<typeof setInterval>;

export type { Brand } from './Brand';
export type { LiteralUnion } from './LiteralUnion';
export * from './Array';
export * from './AnyFunction';
export * from './Object';
export * from './Internal';
export * from './IsAny';
export * from './IsNever';
export * from './IsUnknown';
export * from './Trim';
