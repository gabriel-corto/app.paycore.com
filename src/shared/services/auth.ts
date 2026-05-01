import { api } from "../lib/axios"
import type { ApiResponse } from "../types/api"
import type { SignUpBody } from "../types/forms"

export async function signUp(body: SignUpBody) {
  const response = await api.post<ApiResponse>("/users/create", body)
  return response.data
}
