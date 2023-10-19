import { uuid } from './uuid';

describe(uuid.name, () => {
  test('返回值为字符串', () => {
    expect(uuid()).toBeTypeOf('string');
  });

  test('多次调用返回值不同', () => {
    const id1 = uuid();
    const id2 = uuid();

    expect(id1 === id2).toBeFalsy();
  });
});
