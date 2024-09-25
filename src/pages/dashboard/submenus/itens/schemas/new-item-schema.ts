import { z } from "zod";

export const newItemFormSchema = z.object({
  title: z.string().min(1, {
    message: "Title must be informed.",
  }),
  price: z.string().transform((value) => Number(value)),
  quantity: z.string().transform((value) => Number(value)),
});
