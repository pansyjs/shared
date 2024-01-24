import { nanoid } from './nanoid';

describe('nanoid', function () {
  it('should be defined', () => {
    expect(nanoid).toBeDefined();
  });

  it('return type is string', () => {
    expect(typeof nanoid()).toBe('string');
  });
});
