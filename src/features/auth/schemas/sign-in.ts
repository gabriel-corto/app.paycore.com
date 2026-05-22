import * as zod from "zod"

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export const signInSchema = zod.object({
  email: zod.string().regex(EMAIL_REGEX, "Invalid email"),
  password: zod.string().min(6, "Password must be at least 6 characters long"),
})
export type SignInFormData = zod.infer<typeof signInSchema>
