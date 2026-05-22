import { api } from "../lib/axios"
import type { ApiAuthResponse, ApiResponse } from "../types/api"
import type { SignInBody, SignUpBody } from "../types/forms"

export async function signUp(body: SignUpBody) {
  const response = await api.post<ApiResponse>("/users/create", { ...body })
  return response.data
}

export async function signIn(body: SignInBody) {
  const response = await api.post<ApiAuthResponse>("/auth/sign-in", { ...body })
  return response.data
}
