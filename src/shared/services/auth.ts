import { api } from "../lib/axios"
import type { ApiDataResponse, ApiResponse, AuthResponse } from "../types/api"
import type { SignInBody, SignUpBody } from "../types/forms"
import type { Me } from "../types/schemas"

export async function signUp(body: SignUpBody) {
  const response = await api.post<ApiResponse>("/users/create", { ...body })
  return response.data
}

export async function signIn(body: SignInBody) {
  const response = await api.post<ApiDataResponse<AuthResponse>>(
    "/auth/login",
    { ...body }
  )
  return response.data.data
}

export async function getMe() {
  const response = await api.get<ApiDataResponse<Me>>("/users/me")
  return response.data.data
}
