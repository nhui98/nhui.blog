"use server";

import { FormValidator, FormValues } from "./validator";

type FormState = {
  status: "success" | "error";
  errors?: {
    [Key in keyof FormValues]?: string[];
  };
} | null;

export async function FormAction(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  console.log("server");

  const parsedData = FormValidator.safeParse(Object.fromEntries(formData));

  if (!parsedData.success) {
    return {
      status: "error",
      errors: parsedData.error.flatten().fieldErrors,
    };
  }

  return { status: "success" };
}
