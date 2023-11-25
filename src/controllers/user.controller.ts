import type { Request, Response } from 'express';

import { createUserService } from '@/services/user.service';

export const createUserController = (req: Request, res: Response): void => {
  const user = req.body;
  try {
    createUserService();
    res.json({
      message: 'User created successfully!',
      user
    });
  } catch (error) {
    res.status(500).json({
      message: 'Could not create user',
      error
    });
  }
};
