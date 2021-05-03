/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import ITree from 'types/ITree';
import File from 'Components/File';
import { renderIcon } from 'utils/iconRenderer';
import { parseSize } from 'utils/sizeParser';
import 'Components/Row.css';

const Folder: React.FC<{ folder: ITree }> = ({ folder }) => {
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {}, []);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='title' onClick={handleClick}>
          {open ? renderIcon('openedFolder') : renderIcon('folder')}
          <div className='path'>{folder.name}</div>
        </div>
        <div className='size'>{parseSize(folder.size)}</div>
      </div>
      <div className='children'>
        {open && folder.children
          ? folder.children
              .sort((a, b) => {
                if (a.type === 'directory' && b.type === 'file') return -1;
                return 0;
              })
              .map((child) =>
                child.type === 'directory' ? (
                  <div key={child.path} className='child'>
                    <Folder folder={child} />
                  </div>
                ) : (
                  <div key={child.path} className='child'>
                    <File file={child} />
                  </div>
                )
              )
          : null}
      </div>
    </div>
  );
};

export default Folder;
