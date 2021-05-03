export const parseSize = (size: number): string => {
  let res = '';
  if (size < 1e6) {
    res += (size / 1e3).toFixed(1);
    res += ' KB';
  } else if (size < 1e9) {
    res += (size / 1e6).toFixed(1);
    res += ' MB';
  } else if (size < 1e12) {
    res += (size / 1e9).toFixed(1);
    res += ' GB';
  } else {
    res += (size / 1e12).toFixed(1);
    res += ' TB';
  }
  return res;
};
