import { message } from 'antd';
import { RcFile } from 'antd/es/upload/interface';

const SIZE_IMAGE = 1024;
const MAX_SIZE = 2;

export const beforeUpload = (file: RcFile): boolean => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / SIZE_IMAGE / SIZE_IMAGE < MAX_SIZE;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};
