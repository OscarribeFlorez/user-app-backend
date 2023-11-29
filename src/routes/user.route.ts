import { Router } from 'express';

import {
  createUserController,
  loginController,
  getUsersController
} from '@/controllers/user.controller';
import { authMiddleware } from '@/middlewares/auth.middleware';

const userRouter = Router();

// crear usuario
userRouter.post('/', createUserController);

// obtener usuarios
userRouter.get('/', authMiddleware, getUsersController);

// login
userRouter.post('/login', loginController);

export default userRouter;
