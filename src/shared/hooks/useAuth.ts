import { useMutation, useQuery } from "@tanstack/react-query"
import { toast } from "react-toastify"

import { getMe, signIn, signUp } from "../services/auth"
import { handleApiError } from "../utils/error-handler"
import { useNavigate } from "react-router"
import { session } from "../utils/session-storage"

export function useAuth() {
  const navigate = useNavigate()

  const { data: user, isLoading: isUserLoading } = useQuery({
    queryKey: ["me"],
    queryFn: getMe,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  })

  const { mutateAsync: signUpFn, isPending: isSignUpPending } = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      toast.success("Account created successfully")
    },
    onError: (error) => {
      toast.error(handleApiError(error))
    },
  })

  const { mutateAsync: signInFn, isPending: isSignInPending } = useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      session.save(data.walletId, data.userId)
      navigate("/", { replace: true })
    },
    onError: (error) => {
      toast.error(handleApiError(error))
    },
  })

  return {
    signUpFn,
    isSignUpPending,
    signInFn,
    isSignInPending,
    user,
    isUserLoading,
  }
}
