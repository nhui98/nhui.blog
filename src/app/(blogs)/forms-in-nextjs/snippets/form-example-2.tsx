"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useIsHydrated } from "./use-is-hydrated";
import { FormValidator, FormValues } from "./validator";

export function FormExample2() {
  const isHydrated = useIsHydrated();

  const { handleSubmit, register, formState } = useForm<FormValues>({
    resolver: zodResolver(FormValidator),
    defaultValues: { email: "", username: "" },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  const emailError = formState.errors.email?.message;
  const usernameError = formState.errors.username?.message;

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate={isHydrated}>
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
        />
        <div id="username-error" className="min-h-5">
          {usernameError && (
            <p role="alert" className="text-sm text-red-500">
              {usernameError}
            </p>
          )}
        </div>
      </div>

      <Button type="submit" className="mt-4">
        Submit
      </Button>
    </form>
  );
}
