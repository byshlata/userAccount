import { RcFile } from 'antd/es/upload/interface';

export const getBase64 = (img: RcFile, callback: (url: string) => void): void => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};
