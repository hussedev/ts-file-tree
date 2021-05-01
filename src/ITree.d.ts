interface ITree {
  path: string;
  name: string;
  size: number;
  type: 'directory' | 'file' | 'none';
  children?: ITree[];
  extension?: string;
}

export default ITree;
