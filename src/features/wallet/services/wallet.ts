import { api } from "@/shared/lib/axios"
import type { ApiResponse, ApiDataResponse } from "@/shared/types/api"
import type { WalletDepositBody } from "@/shared/types/forms"
import type { WalletBalance, WalletTransaction } from "@/shared/types/schemas"

export const getWalletBalance = async () => {
  const response =
    await api.get<ApiDataResponse<WalletBalance>>("/wallet/balance")

  return response.data.data
}

export const getWalletTransactions = async () => {
  const response = await api.get<ApiDataResponse<WalletTransaction[]>>(
    "/transactions/get-by-wallet"
  )
  return response.data.data
}

export const walletDeposit = async (body: WalletDepositBody) => {
  const response = await api.post<ApiResponse>("/wallet/deposit", body)
  return response.data
}
