import type { Request, Response } from 'express';
import Joi from 'joi';
import bcrypt from 'bcrypt';

import { createUserService } from '@/services/user.service';

const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
}).messages({
  'any.required': 'El campo {{#label}} es obligatorio',
  'string.email': 'El campo email debe ser un email válido',
  'string.min': 'El campo {{#label}} debe tener al menos 6 caracteres'
});

export const createUserController = async (
  req: Request,
  res: Response
): Promise<void> => {
  // obtenemos el body de la request
  const user = req.body;

  // validamos el body de la request
  const { error } = userSchema.validate(user, {
    abortEarly: false
  });

  if (error) {
    res.status(400).json({
      message: 'Could not create user',
      error: error.details
    });
    return;
  }

  // hasheamos la contraseña
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(user.password, salt);

  const newUser = {
    ...user,
    password: hashedPassword
  };

  try {
    // creamos el usuario
    const createdUser = await createUserService(newUser);
    res.status(201).json({
      message: 'User created successfully!',
      user: createdUser
    });
  } catch (error) {
    res.status(500).json({
      message: 'Could not create user',
      error
    });
  }
};
