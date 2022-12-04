import React, { ReactElement, useState } from 'react';

import 'antd/dist/antd.css';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';

import style from './Account.module.sass';

import { beforeUpload, getBase64 } from 'utils';

type UploadImageType = {
  onGetImage: (value: RcFile) => void;
  isLoading: boolean;
};

export const UploadImage = ({ onGetImage, isLoading }: UploadImageType): ReactElement => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const [file, setFile] = useState<RcFile>();
  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      setFile(info.file.originFileObj);
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj as RcFile, url => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const onChangeAvatar = (): void => {
    if (file) {
      onGetImage(file);
    }
    setImageUrl('');
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <div className={style.container}>
      <Upload
        style={{ display: 'flex', justifyContent: 'center' }}
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
        ) : (
          uploadButton
        )}
      </Upload>
      <Button type="primary" onClick={onChangeAvatar} disabled={!imageUrl || isLoading}>
        Change Avatar
      </Button>
    </div>
  );
};
