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
export interface AuthResponse {
  walletId: string
  userId: string
}
