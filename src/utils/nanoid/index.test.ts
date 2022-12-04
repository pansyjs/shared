import { nanoid } from './';

describe('nanoid', function () {
  it('return type is string', function () {
    expect(typeof nanoid()).toBe('string');
  });
});
