import IFileType from 'types/IFileType';

const extTypes = {
  audio: ['.mp3', '.wav'],
  code: ['.js', '.jsx', '.ts', '.tsx'],
  compressed: ['.zip', '.rar', '.7z', '.tar'],
  excel: ['.xls'],
  image: ['.jpg', '.jpeg', '.gif', '.png', '.svg'],
  pdf: ['.pdf'],
  powerpoint: ['.ppt'],
  text: ['.txt', '.md'],
  video: ['.avi', '.mp4', '.mpeg', '.mov', '.mkv'],
  word: ['.doc', '.docx'],
};

export const parseExtension = (extension: string): IFileType => {
  for (let [key, value] of Object.entries(extTypes)) {
    if (value.includes(extension)) return key as IFileType;
  }
  return 'unknown';
};
