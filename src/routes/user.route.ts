import { Router } from 'express';

import { createUserController } from '@/controllers/user.controller';

const userRouter = Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
userRouter.post('/', createUserController);

export default userRouter;
