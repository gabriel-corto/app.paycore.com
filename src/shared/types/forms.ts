export interface SignUpBody {
  nif: string
  name: string
  email: string
  password: string
}

export interface SignInBody {
  email: string
  password: string
}

export interface WalletDepositBody {
  amount: number
}

export interface WalletP2PBody {
  amount: number
  recipient: string
}
