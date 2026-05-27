import { Button } from "@/shared/components/ui/button"
import { Input } from "@/shared/components/ui/input"
import { Field, FieldGroup, FieldLabel } from "@/shared/components/ui/field"

import { Loading02Icon, Login01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Link } from "react-router"
import { useAuth } from "@/shared/hooks/useAuth"
import { signInSchema, type SignInFormData } from "../schemas/sign-in"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { FormErrorMessage } from "@/shared/components/form-error-message"

export function SignInPage() {
  const { signInFn, isSignInPending } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  })

  const onSubmit = async (data: SignInFormData) => {
    await signInFn(data)
  }

  return (
    <form
      className="flex w-full flex-col gap-y-12 lg:w-sm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col items-center gap-y-3">
        <h3 className="text-4xl font-extrabold tracking-tight text-foreground">
          Welcome back
        </h3>
        <p className="text-sm font-medium text-muted-foreground">
          Enter your e-mail and password to access your account
        </p>
      </div>

      <FieldGroup className="gap-y-6">
        <Field>
          <FieldLabel
            htmlFor="email"
            className="font-semibold text-foreground/80"
          >
            E-mail
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
          <div className="flex items-center justify-between">
            <FieldLabel
              htmlFor="password"
              className="text-xs font-semibold text-foreground/80"
            >
              Password
            </FieldLabel>
            <Button
              variant="link"
              className="h-fit p-0 text-xs font-bold text-primary"
            >
              Forgot password?
            </Button>
          </div>
          <Input
            type="password"
            id="password"
            className="h-12 border-white/5 bg-white/5 transition-all focus:border-primary/50 focus:bg-white/10"
            placeholder="********"
            {...register("password")}
          />
          {errors.password && (
            <FormErrorMessage message={errors.password.message} />
          )}
        </Field>

        <Field className="mt-4">
          <Button
            type="submit"
            disabled={isSignInPending}
            className="h-12 w-full text-base font-bold text-white transition-all active:scale-[0.98] dark:text-white"
          >
            {isSignInPending ? (
              <>
                <HugeiconsIcon
                  icon={Loading02Icon}
                  className="size-5 animate-spin"
                />
                <span>Signing in...</span>
              </>
            ) : (
              <>
                <HugeiconsIcon icon={Login01Icon} className="size-5" />
                <span>Sign In</span>
              </>
            )}
          </Button>
        </Field>

        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 font-bold text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>

        <Field>
          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Button
              variant="link"
              className="p-0 text-sm font-bold text-primary"
              asChild
            >
              <Link to="/a/sign-up">Register now</Link>
            </Button>
          </p>
        </Field>
      </FieldGroup>
    </form>
  )
}
