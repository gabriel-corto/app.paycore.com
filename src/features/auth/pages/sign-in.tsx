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
      className="flex flex-col gap-y-10 lg:w-sm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col items-center gap-y-2">
        <h3 className="text-3xl font-bold text-zinc-800">Welcome back</h3>
        <p className="text-xs text-zinc-600 lg:text-sm">
          Enter your e-mail and password to acess yout account
        </p>
      </div>

      <FieldGroup className="gap-y-4">
        <Field>
          <FieldLabel htmlFor="email">E-mail</FieldLabel>
          <Input
            type="email"
            id="email"
            className="h-11"
            placeholder="your@email.com"
            {...register("email")}
          />
          {errors.email && <FormErrorMessage message={errors.email.message} />}
        </Field>

        <Field className="relative">
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input
            type="password"
            id="password"
            className="h-11"
            placeholder="********"
            {...register("password")}
          />
          {errors.password && (
            <FormErrorMessage message={errors.password.message} />
          )}
        </Field>

        <Field orientation="horizontal">
          <Button variant="link" className="p-0 text-right text-xs">
            Forgot your password?
          </Button>
        </Field>

        <Field orientation="horizontal">
          <Button
            type="submit"
            disabled={isSignInPending}
            className="h-11 w-full font-semibold text-white"
          >
            {isSignInPending ? (
              <>
                <HugeiconsIcon icon={Loading02Icon} className="animate-spin" />
                Loading...
              </>
            ) : (
              <>
                <HugeiconsIcon icon={Login01Icon} />
                Login
              </>
            )}
          </Button>
        </Field>

        <Field>
          <p className="text-center text-xs text-zinc-600">
            Do not have an account?{" "}
            <Button variant="link" className="p-0 text-xs">
              <Link to="/a/sign-up">Register</Link>
            </Button>
          </p>
        </Field>
      </FieldGroup>
    </form>
  )
}
