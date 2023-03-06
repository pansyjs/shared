import { omit } from './omit';

describe('omit function', () => {
  it('should omit specified fields from the input object', () => {
    const input = { a: 1, b: 2, c: 3 };
    const expectedOutput = { a: 1, b: 2 };

    const output = omit(input, ['c']);

    expect(output).toEqual(expectedOutput);
  });

  it('should not modify the original input object', () => {
    const input = { a: 1, b: 2, c: 3 };

    omit(input, ['c']);

    expect(input).toEqual({ a: 1, b: 2, c: 3 });
  });
});
