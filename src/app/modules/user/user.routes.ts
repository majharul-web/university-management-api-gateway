import express, { Request, Response, NextFunction } from 'express';
import { UserController } from './user.controller';
import { FileUploadHelper } from '../../../helpers/fileUploaderHelper';
import { UserValidation } from './user.validatopm';

const router = express.Router();

router.post(
  '/create-student',
  FileUploadHelper.upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = UserValidation.createStudent.parse(JSON.parse(req.body.data));
    return UserController.createStudent(req, res, next);
  }
);

export const userRoutes = router;
