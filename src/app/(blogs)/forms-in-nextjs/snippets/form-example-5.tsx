"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { useForm, UseFormRegister } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { FormAction } from "./form-example-3.action";
import { useIsHydrated } from "./use-is-hydrated";
import { FormValidator, FormValues } from "./validator";

export function FormExample5() {
  const isHydrated = useIsHydrated();

  const { handleSubmit, register, formState } = useForm<FormValues>({
    resolver: zodResolver(FormValidator),
    defaultValues: { email: "", username: "" },
  });

  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(FormAction, null);

  useEffect(() => {
    if (!formRef.current || state?.status !== "error") return;

    const formEl = formRef.current;
    const firstInvalidField = formEl.querySelector('[aria-invalid="true"]');

    if (firstInvalidField instanceof HTMLElement) {
      firstInvalidField.focus();
    }
  }, [state]);

  const onSubmit = () => {
    handleSubmit(() => formRef.current?.requestSubmit())();
  };

  const emailError =
    formState.errors.email?.message || state?.errors?.email?.[0];
  const usernameError =
    formState.errors.username?.message || state?.errors?.username?.[0];

  return (
    <form ref={formRef} action={formAction} noValidate={isHydrated}>
      {/* Form Inputs */}
    </form>
  );
}
