import React, { useState } from 'react';
import { getTree } from 'Services/ApiClient';
import Folder from 'Components/Folder';
import Form from 'Components/Form';
import ITree from 'types/ITree';
import { ReactComponent as BackIcon } from 'assets/back.svg';

import 'App.css';

const emptyTree: ITree = {
  path: '',
  name: '',
  size: 0,
  type: 'none',
};

const App: React.FC = () => {
  const [tree, setTree] = useState<ITree>(emptyTree);
  const [showForm, setShowForm] = useState<boolean>(true);
  const [formStatus, setFormStatus] = useState<boolean>(true);

  const retrieveTree = (folder: string) => {
    getTree(folder).then((fileTree) => {
      if (fileTree) {
        setFormStatus(true);
        setTree(fileTree);
        setShowForm(false);
      } else {
        setFormStatus(false);
      }
    });
  };

  const handleBack = () => {
    setShowForm(true);
  };

  return (
    <div className='App'>
      <div className='app-container'>
        <BackIcon
          display={showForm ? 'none' : 'initial'}
          className='back-button'
          onClick={handleBack}
        />
        {showForm ? (
          <Form retrieveTree={retrieveTree} formStatus={formStatus} />
        ) : (
          <Folder folder={tree} />
        )}
      </div>
    </div>
  );
};

export default App;
