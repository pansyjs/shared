import type { ITreeListItem, ITreeKey, IChildrenKey, ITree } from './types';

interface IToTreeProps {
  rootId?: ITreeKey;
  /**
   * 格式化数据为统一数据格式
   * @param item
   * @returns
   */
  format?: (item: any) => ITreeListItem;
}

/**
 * 将数组转换为树结构
 * @param list
 * @param opts
 * @returns
 */
export function toTree<T extends IChildrenKey = 'children'>(
  list: any[] = [],
  opts: IToTreeProps = {},
): ITree<T> {
  const { rootId = '', format } = opts;

  if (!Array.isArray(list)) {
    throw new TypeError('Expected an array but got an invalid argument');
  }

  const map = new Map<ITreeKey, ITreeListItem>();
  const roots: any[] = [];

  // 构建节点的映射关系
  list.forEach((item) => {
    const itemData = format ? format(item) : item;
    map.set(itemData.id, { ...itemData, children: [] });
  });

  // 构建树结构
  list.forEach((item) => {
    const itemData = format ? format(item) : item;
    const node = map.get(itemData.id);

    if (itemData.parentId === rootId) {
      roots.push(node);
    } else if (map.get(itemData.parentId)) {
      map.get(itemData.parentId)!.children.push(node);
    }
  });

  return roots as ITree<T>;
}
