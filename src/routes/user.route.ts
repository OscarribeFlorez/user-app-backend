import { Router } from 'express';

import {
  createUserController,
  loginController,
  getUsersController
} from '@/controllers/user.controller';

const userRouter = Router();

userRouter.post('/', createUserController);

userRouter.get('/', getUsersController);

userRouter.post('/login', loginController);

export default userRouter;
