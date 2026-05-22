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
      className="flex flex-col gap-y-10 lg:w-sm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col items-center gap-y-2">
        <h3 className="text-3xl font-bold text-zinc-800">Register</h3>
        <p className="text-xs text-zinc-600 lg:text-sm">
          Fill in the fields below to create your account
        </p>
      </div>

      <FieldGroup className="min-w-xs gap-y-4">
        <Field>
          <FieldLabel htmlFor="nif">NIF</FieldLabel>
          <Input
            type="text"
            id="nif"
            className="h-11"
            placeholder="Your NIF"
            {...register("nif")}
          />
          {errors.nif && <FormErrorMessage message={errors.nif.message} />}
        </Field>

        <Field>
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <Input
            type="text"
            id="name"
            className="h-11"
            placeholder="Your name"
            {...register("name")}
          />
          {errors.name && <FormErrorMessage message={errors.name.message} />}
        </Field>

        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
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
            placeholder="Create a password"
            {...register("password")}
          />
          {errors.password && (
            <FormErrorMessage message={errors.password.message} />
          )}
        </Field>

        <Field orientation="horizontal">
          <Button
            type="submit"
            disabled={isSignUpPending}
            className="h-11 w-full font-semibold text-white"
          >
            {isSignUpPending ? (
              <>
                <HugeiconsIcon icon={Loading02Icon} className="animate-spin" />
                Loading...
              </>
            ) : (
              <>
                <HugeiconsIcon icon={UserAdd01Icon} />
                Register
              </>
            )}
          </Button>
        </Field>

        <Field>
          <p className="text-center text-xs text-zinc-600">
            Do you already have an account?{" "}
            <Button variant="link" className="p-0 text-xs">
              <Link to="/a/sign-in">Login</Link>
            </Button>
          </p>
        </Field>
      </FieldGroup>
    </form>
  )
}
