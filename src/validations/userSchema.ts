import { z } from 'zod';
import validator from 'validator';

export const userSchema = z
  .object({
    name: z
      .string()
      .min(3, {
        message: 'El nombre debe tener mínimo 3 caracteres'
      })
      .max(200, {
        message: 'El nombre no puede superar los 200 caracteres'
      }),
    email: z.string().email({
      message: 'Ingrese un e-mail válido'
    }),
    password: z.string().min(6, {
      message: 'La contraseña debe tener un mínimo de 6 caracteres'
    }),
    confirmPassword: z.string().min(6, {
      message: 'La contraseña debe tener un mínimo de 6 caracteres'
    }),
    phoneNumber: z.string().refine(validator.isMobilePhone, {
      message: 'Número invalido'
    })
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'La contraseña no coincide',
    path: ['confirmPassword']
  });
