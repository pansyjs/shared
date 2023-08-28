export type ITreeKey = string | number;

export type IChildrenKey = ITreeKey;

export type ITree<T extends IChildrenKey = 'children'> = {
  [key in T]?: ITree<T>[];
} & {
  [key in ITreeKey]: any;
};

export interface ITreeListItem {
  id: ITreeKey;
  parentId: ITreeKey;
  [key: string]: any;
}

const tree: ITree = [{ id: '', children: [] }];
