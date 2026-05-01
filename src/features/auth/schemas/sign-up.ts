import * as zod from "zod"

const ANGOLAN_NIF_REGEX = /^[0-9]{9}[A-Z]{2}[0-9]{3}$/
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export const signUpSchema = zod.object({
  nif: zod.string().regex(ANGOLAN_NIF_REGEX, "Invalid NIF"),
  name: zod.string().min(3, "Name must be at least 3 characters long"),
  email: zod.string().regex(EMAIL_REGEX, "Invalid email"),
  password: zod.string().min(6, "Password must be at least 6 characters long"),
})
export type SignUpFormData = zod.infer<typeof signUpSchema>
