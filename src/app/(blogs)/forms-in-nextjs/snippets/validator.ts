import { z } from "zod";

export const FormValidator = z.object({
  email: z.string().email(),
  username: z.string().min(3),
});

export type FormValues = z.infer<typeof FormValidator>;
