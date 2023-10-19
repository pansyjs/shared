import { isBoolean } from './isBoolean';

describe(isBoolean.name, () => {
  test('不是 Boolean', () => {
    for (const value of ['a', 1, [], undefined, null, {}]) {
      expect(isBoolean(value)).toBeFalsy();
    }
  });

  test('是 Boolean', () => {
    for (const value of [true, false]) {
      expect(isBoolean(value)).not.toBeFalsy();
    }
  });
});
