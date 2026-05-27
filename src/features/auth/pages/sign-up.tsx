import { Button } from "@/shared/components/ui/button"
import { Input } from "@/shared/components/ui/input"

import { Field, FieldGroup, FieldLabel } from "@/shared/components/ui/field"
import { FormErrorMessage } from "@/shared/components/form-error-message"

import { Loading02Icon, UserAdd01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Link } from "react-router"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signUpSchema, type SignUpFormData } from "../schemas/sign-up"
import { useAuth } from "@/shared/hooks/useAuth"

export function SignUpPage() {
  const { signUpFn, isSignUpPending } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  })

  const onSubmit = async (data: SignUpFormData) => {
    await signUpFn(data)
  }

  return (
    <form
      className="flex w-full flex-col gap-y-12 lg:w-sm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col items-center gap-y-3">
        <h3 className="text-4xl font-extrabold tracking-tight text-foreground">
          Create account
        </h3>
        <p className="text-sm font-medium text-muted-foreground">
          Fill in the fields below to create your account
        </p>
      </div>

      <FieldGroup className="min-w-xs gap-y-6">
        <Field>
          <FieldLabel
            htmlFor="nif"
            className="text-xs font-semibold text-foreground/80"
          >
            NIF
          </FieldLabel>
          <Input
            type="text"
            id="nif"
            className="h-12 border-white/5 bg-white/5 transition-all focus:border-primary/50 focus:bg-white/10"
            placeholder="Your NIF"
            {...register("nif")}
          />
          {errors.nif && <FormErrorMessage message={errors.nif.message} />}
        </Field>

        <Field>
          <FieldLabel
            htmlFor="name"
            className="text-xs font-semibold text-foreground/80"
          >
            Name
          </FieldLabel>
          <Input
            type="text"
            id="name"
            className="h-12 border-white/5 bg-white/5 transition-all focus:border-primary/50 focus:bg-white/10"
            placeholder="Your full name"
            {...register("name")}
          />
          {errors.name && <FormErrorMessage message={errors.name.message} />}
        </Field>

        <Field>
          <FieldLabel
            htmlFor="email"
            className="text-xs font-semibold text-foreground/80"
          >
            Email
          </FieldLabel>
          <Input
            type="email"
            id="email"
            className="h-12 border-white/5 bg-white/5 transition-all focus:border-primary/50 focus:bg-white/10"
            placeholder="your@email.com"
            {...register("email")}
          />
          {errors.email && <FormErrorMessage message={errors.email.message} />}
        </Field>

        <Field className="relative">
          <FieldLabel
            htmlFor="password"
            className="text-xs font-semibold text-foreground/80"
          >
            Password
          </FieldLabel>
          <Input
            type="password"
            id="password"
            className="h-12 border-white/5 bg-white/5 transition-all focus:border-primary/50 focus:bg-white/10"
            placeholder="Create a strong password"
            {...register("password")}
          />
          {errors.password && (
            <FormErrorMessage message={errors.password.message} />
          )}
        </Field>

        <Field className="mt-4">
          <Button
            type="submit"
            disabled={isSignUpPending}
            className="h-12 w-full text-base font-bold text-white transition-all dark:text-white"
          >
            {isSignUpPending ? (
              <>
                <HugeiconsIcon
                  icon={Loading02Icon}
                  className="size-5 animate-spin"
                />
                <span>Creating account...</span>
              </>
            ) : (
              <>
                <HugeiconsIcon icon={UserAdd01Icon} className="size-5" />
                <span>Register</span>
              </>
            )}
          </Button>
        </Field>

        <Field>
          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Button
              variant="link"
              className="p-0 text-sm font-bold text-primary"
              asChild
            >
              <Link to="/a/sign-in">Login here</Link>
            </Button>
          </p>
        </Field>
      </FieldGroup>
    </form>
  )
}
