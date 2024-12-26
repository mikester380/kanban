import { z } from 'zod'

const validateEmail = z
  .string()
  .email({ message: 'Enter a valid email!' })

const validateNewUser = z
  .object({
    emailAddress: validateEmail,
    password: z.string().min(8, {
      message:
        'Password must contain atleast 8 characters!',
    }),
    confirm: z.string(),
  })
  .refine((data) => data.confirm === data.password, {
    message: 'Passwords do not match!',
    path: ['confirm'],
  })

export { validateNewUser, validateEmail }
