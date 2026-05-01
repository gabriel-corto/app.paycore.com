import { Button } from "@/shared/components/ui/button"
import { Input } from "@/shared/components/ui/input"
import { Field, FieldGroup, FieldLabel } from "@/shared/components/ui/field"

import { Login01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Link } from "react-router"

export function SignInPage() {
  return (
    <form className="flex flex-col gap-y-10 lg:w-sm">
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
          />
        </Field>

        <Field className="relative">
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input
            type="password"
            id="password"
            className="h-11"
            placeholder="********"
          />
        </Field>

        <Field orientation="horizontal">
          <Button variant="link" className="p-0 text-right text-xs">
            Forgot your password?
          </Button>
        </Field>

        <Field orientation="horizontal">
          <Button
            type="submit"
            className="h-11 w-full font-semibold text-white"
          >
            <HugeiconsIcon icon={Login01Icon} />
            Login
          </Button>
        </Field>

        <Field>
          <p className="text-center text-xs text-zinc-600">
            Do not have an account?{" "}
            <Button variant="link" className="p-0 text-xs">
              <Link to="/sign-up">Register</Link>
            </Button>
          </p>
        </Field>
      </FieldGroup>
    </form>
  )
}
