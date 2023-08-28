import { toTree } from './toTree';

describe('toTree', function () {
  it('should convert flat array to tree structure', function () {
    const flatArray = [
      { id: '1', parentId: '' },
      { id: '2', parentId: '1' },
      { id: '3', parentId: '1' },
      { id: '4', parentId: '2' },
      { id: '5', parentId: '' },
    ];

    expect(toTree(flatArray)).toEqual([
      {
        id: '1',
        parentId: '',
        children: [
          {
            id: '2',
            parentId: '1',
            children: [{ id: '4', parentId: '2', children: [] }],
          },
          { id: '3', parentId: '1', children: [] },
        ],
      },
      { id: '5', parentId: '', children: [] },
    ]);
  });

  it('should support custom rootId', () => {
    const flatArray = [
      { id: 1, parentId: 'root', name: 'Root 1' },
      { id: 2, parentId: 1, name: 'Child 1.1' },
    ];

    const tree = toTree(flatArray, { rootId: 'root' });

    expect(tree).toHaveLength(1);
    expect(tree[0].children).toHaveLength(1);
  });

  it('should support data formatting', () => {
    const flatArray = [
      { id: 1, parentId: '', title: 'Root 1' },
      { id: 2, parentId: 1, title: 'Child 1.1' },
    ];

    const format = (item: any) => ({
      id: item.id,
      parentId: item.parentId,
      name: item.title,
    });

    const tree = toTree(flatArray, { format });

    expect(tree[0].name).toBe('Root 1');
    expect(tree[0].children[0].name).toBe('Child 1.1');
  });
});
