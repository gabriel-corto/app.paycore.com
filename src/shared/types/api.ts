import type { Me } from "./schemas"

export interface ApiDataResponse<T> {
  data: T
  message?: string
}
export interface ApiResponse {
  message?: string
}

export interface ApiErrorResponse {
  message: string
  status: string
}
export interface ApiAuthResponse {
  data: Me
  accessToken: string
}
