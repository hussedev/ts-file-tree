import React, { useEffect, useState } from 'react';
import ApiClient from './Services/ApiClient';
import ITree from './ITree';
import './App.css';

export const TreeContext = React.createContext({});

const emptyTree: ITree = {
  path: '',
  name: '',
  size: 0,
  type: 'none',
};

const App: React.FC = () => {
  const [tree, setTree] = useState<ITree>(emptyTree);

  useEffect(() => {
    ApiClient.getTree().then((fileTree) => {
      console.log('fileTree', fileTree);
      setTree(fileTree);
      console.log('tree', tree);
    });
  }, []);

  return (
    <div className='App'>
      <TreeContext.Provider value={{ tree }}>{tree.path}</TreeContext.Provider>
    </div>
  );
};

export default App;
