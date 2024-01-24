export type Fn = () => void;

export type NodeJSTimeout = ReturnType<typeof setTimeout>;
export type NodeJSTimer = ReturnType<typeof setInterval>;

export type { Brand } from './Brand';
export * from './Array';
export * from './AnyFunction';
export * from './Object';
export * from './Internal';
export * from './IsAny';
export * from './IsNever';
export * from './IsUnknown';
export * from './Trim';

export type {
  LiteralUnion,
  AsyncReturnType,
  FixedLengthArray,
  PackageJson,
  TsConfigJson,
  JsonValue,
  JsonArray,
  JsonObject,
  CamelCase,
  SnakeCase,
  KebabCase,
  PascalCase,
  DelimiterCase,
  ScreamingSnakeCase as ConstantCase,
  Class,
  Asyncify,
  UnionToIntersection,
  Integer,
  NegativeInteger,
  NonNegativeInteger,
  Negative,
  NonNegative,
  Finite,
  PositiveInfinity,
  NegativeInfinity,
  Simplify,
  RequireAtLeastOne,
  RequireExactlyOne,
  RequireAllOrNone,
} from 'type-fest';
