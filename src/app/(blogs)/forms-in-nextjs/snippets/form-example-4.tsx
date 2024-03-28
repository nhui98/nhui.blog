"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { useForm, UseFormRegister } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { FormAction } from "./form-example-3.action";
import { useIsHydrated } from "./use-is-hydrated";
import { FormValidator, FormValues } from "./validator";

export function FormExample4() {
  const isHydrated = useIsHydrated();

  const { handleSubmit, register, formState } = useForm<FormValues>({
    resolver: zodResolver(FormValidator),
    defaultValues: { email: "", username: "" },
  });

  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(FormAction, null);

  const onSubmit = () => {
    handleSubmit(() => formRef.current?.requestSubmit())();
  };

  const emailError =
    formState.errors.email?.message || state?.errors?.email?.[0];
  const usernameError =
    formState.errors.username?.message || state?.errors?.username?.[0];

  return (
    <form ref={formRef} action={formAction} noValidate={isHydrated}>
      <Label htmlFor="honeypot" className="sr-only">
        Please leave this field blank
      </Label>
      <Input id="honeypot" name="honeypot" type="hidden" value="" />

      {/* Form Inputs */}
    </form>
  );
}
