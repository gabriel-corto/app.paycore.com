import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import {
  getWalletBalance,
  getWalletTransactions,
  walletDeposit,
} from "../services/wallet"
import { session } from "@/shared/utils/session-storage"
import { API_CONFIG } from "@/shared/constants/constants"
import { toast } from "react-toastify"
import { handleApiError } from "@/shared/utils/error-handler"

export const useWallet = () => {
  const queryClient = useQueryClient()

  const { data: walletBalance, isLoading: isWalletBalanceLoading } = useQuery({
    queryKey: ["wallet-balance", session.get().walletId],
    queryFn: getWalletBalance,
    staleTime: API_CONFIG.STALE_TIME,
  })

  const { data: walletTransactions, isLoading: isWalletTransactionsLoading } =
    useQuery({
      queryKey: ["wallet-transactions", session.get().walletId],
      queryFn: getWalletTransactions,
      staleTime: API_CONFIG.STALE_TIME,
    })

  const { mutateAsync: walletDepositFn, isPending: isWalletDepositLoading } =
    useMutation({
      mutationFn: walletDeposit,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["wallet-balance", session.get().walletId],
        })
        queryClient.invalidateQueries({
          queryKey: ["wallet-transactions", session.get().walletId],
        })
        toast.success("Wallet deposit successful")
      },
      onError: (error) => {
        toast.error(handleApiError(error))
      },
    })

  return {
    walletBalance,
    isWalletBalanceLoading,
    walletTransactions,
    isWalletTransactionsLoading,
    walletDepositFn,
    isWalletDepositLoading,
  }
}
