import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"

import { signUp } from "../services/auth"
import { handleApiError } from "../utils/error-handler"

export function useAuth() {
  const { mutateAsync: signUpFn, isPending: isSignUpPending } = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      toast.success("Account created successfully")
    },
    onError: (error) => {
      toast.error(handleApiError(error))
    },
  })

  return { signUpFn, isSignUpPending }
}
