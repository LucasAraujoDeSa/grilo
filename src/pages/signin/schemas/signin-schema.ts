import { z } from "zod";

export const signinSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string({ message: "Password must be provided." })
    .min(8, { message: "Password must be at least 8 characters long." })
    .regex(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must be at least 8 characters long, including at least one uppercase letter, one number, and one special character"
    ),
});
