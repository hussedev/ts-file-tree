import { ReactComponent as AudioIcon } from 'assets/audio.svg';
import { ReactComponent as CodeIcon } from 'assets/code.svg';
import { ReactComponent as CompressedIcon } from 'assets/compressed.svg';
import { ReactComponent as ExcelIcon } from 'assets/excel.svg';
import { ReactComponent as FileIcon } from 'assets/file.svg';
import { ReactComponent as ImageIcon } from 'assets/image.svg';
import { ReactComponent as PdfIcon } from 'assets/pdf.svg';
import { ReactComponent as PowerPointIcon } from 'assets/powerpoint.svg';
import { ReactComponent as TextIcon } from 'assets/text.svg';
import { ReactComponent as VideoIcon } from 'assets/video.svg';
import { ReactComponent as WordIcon } from 'assets/word.svg';
import { ReactComponent as FolderIcon } from 'assets/folder.svg';
import { ReactComponent as FolderOpenIcon } from 'assets/folder-open.svg';
import IFileType from 'types/IFileType';

const extTypes = {
  audio: <AudioIcon className='icon' />,
  code: <CodeIcon className='icon' />,
  compressed: <CompressedIcon className='icon' />,
  excel: <ExcelIcon className='icon' />,
  image: <ImageIcon className='icon' />,
  pdf: <PdfIcon className='icon' />,
  powerpoint: <PowerPointIcon className='icon' />,
  text: <TextIcon className='icon' />,
  video: <VideoIcon className='icon' />,
  word: <WordIcon className='icon' />,
  unknown: <FileIcon className='icon' />,
  folder: <FolderIcon className='icon' />,
  openedFolder: <FolderOpenIcon className='icon' />,
};

export const renderIcon = (iconType: IFileType): JSX.Element =>
  extTypes[iconType];
