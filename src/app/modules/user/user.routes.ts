import express, { Request, Response, NextFunction } from 'express';
import { UserController } from './user.controller';
import { FileUploadHelper } from '../../../helpers/fileUploaderHelper';
import { UserValidation } from './user.validatopm';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.post(
  '/create-student',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  FileUploadHelper.upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = UserValidation.createStudent.parse(JSON.parse(req.body.data));
    return UserController.createStudent(req, res, next);
  }
);

router.post(
  '/create-faculty',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  FileUploadHelper.upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = UserValidation.createFaculty.parse(JSON.parse(req.body.data));
    return UserController.createFaculty(req, res, next);
  }
);

router.post(
  '/create-admin',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  FileUploadHelper.upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = UserValidation.createAdmin.parse(JSON.parse(req.body.data));
    return UserController.createAdmin(req, res, next);
  }
);

export const userRoutes = router;
