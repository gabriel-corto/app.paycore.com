import type { TransactionOperationEnum, TransactionTypeEnum } from "./enums"

export interface Me {
  id: string
  nif: string
  name: string
  email: string
}

export interface WalletBalance {
  balance: number
}

export interface WalletTransaction {
  id: string
  amount: number
  operation: TransactionOperationEnum
  type: TransactionTypeEnum
  createdAt: string
  walletId: string
}
