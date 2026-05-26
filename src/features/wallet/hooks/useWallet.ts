import { useQuery } from "@tanstack/react-query"
import { getWalletBalance } from "../services/wallet"
import { API_CONFIG } from "@/shared/constants/constants"

export const useWallet = () => {
  const { data: walletBalance, isLoading: isWalletBalanceLoading } = useQuery({
    queryKey: ["wallet-balance"],
    queryFn: getWalletBalance,
    staleTime: API_CONFIG.STALE_TIME,
    refetchOnWindowFocus: false,
  })

  return { walletBalance, isWalletBalanceLoading }
}
