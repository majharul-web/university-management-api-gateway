import { Request, Response, NextFunction } from 'express';
import { FileUploadHelper } from '../../../helpers/fileUploaderHelper';
import { IUploadFile } from '../../../interfaces/file';

const createStudent = async (req: Request) => {
  const file = req.file as IUploadFile;
  const uploadedImage = await FileUploadHelper.uploadToCloudinary(file);

  if (uploadedImage) {
    req.body.profileImage = uploadedImage.secure_url;
  }

  console.log(req.body);
};

export const UserService = {
  createStudent
};
