import React, { useEffect, useState } from 'react';
import ITree from 'types/ITree';
import IFileType from 'types/IFileType';
import { BASE_URL } from 'Services/ApiClient';
import TextView from 'Components/Viewers/TextView';
import { parseExtension } from 'utils/extensionParser';
import { renderIcon } from 'utils/iconRenderer';
import { parseSize } from 'utils/sizeParser';
import 'Components/Row.css';

const File: React.FC<{ file: ITree }> = ({ file }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [fileType, setFileType] = useState<IFileType>('unknown');
  const path = `${BASE_URL}/file${file.path.slice(6)}`;
  useEffect(() => {
    if (file.extension) setFileType(parseExtension(file.extension));
  }, [file.extension]);

  const handleClick = () => {
    setOpen(!open);
  };

  const showViewer = () => {
    if (fileType === 'text')
      return (
        <div className='viewer'>
          <TextView path={path} setOpen={setOpen} />
        </div>
      );
    return;
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='title' onClick={handleClick}>
          {renderIcon(fileType)}
          <div className='path'>{file.name}</div>
        </div>
        <div className='size'>{parseSize(file.size)}</div>
      </div>
      {open ? showViewer() : ''}
    </div>
  );
};

export default File;
