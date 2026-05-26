import { api } from "@/shared/lib/axios"
import type { ApiDataResponse } from "@/shared/types/api"
import type { WalletBalance } from "@/shared/types/schemas"

export const getWalletBalance = async () => {
  const response =
    await api.get<ApiDataResponse<WalletBalance>>("/wallet/balance")

  return response.data.data
}
