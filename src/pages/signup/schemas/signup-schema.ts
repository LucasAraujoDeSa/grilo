import { z } from "zod";

export const signupSchema = z
  .object({
    email: z.string().email({ message: "Invalid email address." }),
    name: z.string({ message: "Name must be provided." }),
    password: z
      .string({ message: "Password must be provided." })
      .min(8, { message: "Password must be at least 8 characters long." })
      .regex(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must be at least 8 characters long, including at least one uppercase letter, one number, and one special character"
      ),
    passwordConfirmation: z
      .string({ message: "Password confirmation must be provided." })
      .min(8, { message: "Password must be at least 8 characters long." }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: ["passwordConfirmation"],
  });
