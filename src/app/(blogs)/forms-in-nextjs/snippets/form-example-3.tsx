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

export function FormExample3() {
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
      <FormInputs
        emailError={emailError}
        usernameError={usernameError}
        onSubmit={onSubmit}
        register={register}
      />
    </form>
  );
}

function FormInputs({
  emailError,
  usernameError,
  onSubmit,
  register,
}: {
  emailError: string | undefined;
  usernameError: string | undefined;
  onSubmit: () => void;
  register: UseFormRegister<FormValues>;
}) {
  const { pending } = useFormStatus();

  return (
    <>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          {...register("email")}
          id="email"
          name="email"
          type="email"
          required
          aria-invalid={!!emailError || undefined}
          aria-describedby={!!emailError ? "email-error" : undefined}
          aria-disabled={pending}
          disabled={pending}
        />
        <div id="email-error" className="min-h-5">
          {emailError && (
            <p role="alert" className="text-sm text-red-500">
              {emailError}
            </p>
          )}
        </div>
      </div>

      <div className="mt-1">
        <Label htmlFor="username">Username</Label>
        <Input
          {...register("username")}
          id="username"
          name="username"
          type="text"
          required
          minLength={3}
          aria-invalid={!!usernameError || undefined}
          aria-describedby={!!usernameError ? "username-error" : undefined}
          aria-disabled={pending}
          disabled={pending}
        />
        <div id="username-error" className="min-h-5">
          {usernameError && (
            <p role="alert" className="text-sm text-red-500">
              {usernameError}
            </p>
          )}
        </div>
      </div>

      <Button
        type="button"
        className="mt-4"
        onClick={onSubmit}
        aria-disabled={pending}
        disabled={pending}
      >
        Submit
      </Button>
    </>
  );
}
