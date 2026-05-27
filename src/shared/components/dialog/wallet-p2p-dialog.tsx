import { Button } from "@/shared/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shared/components/ui/dialog"
import { Field, FieldGroup } from "@/shared/components/ui/field"
import { Label } from "@/shared/components/ui/label"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight02Icon, Loading02Icon } from "@hugeicons/core-free-icons"

import CurrencyInput from "react-currency-input-field"
import { useEffect, useState } from "react"
import { useWallet } from "@/features/wallet/hooks/useWallet"
import { toast } from "react-toastify"
import { Input } from "../ui/input"

interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function WalletP2PDialog({ open, onOpenChange }: Props) {
  const { walletP2PFn, isWalletP2PLoading } = useWallet()
  const [depositAmount, setDepositAmount] = useState<number>(0)
  const [recipient, setRecipient] = useState<string>("")

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!depositAmount || Number(depositAmount) <= 0) {
      toast.error("Please enter a deposit amount")
      return
    }

    if (!recipient || recipient === "") {
      toast.error("Please enter a recipient email")
      return
    }

    await walletP2PFn({ amount: Number(depositAmount), recipient })
    onOpenChange(false)
  }

  useEffect(() => {
    console.log(depositAmount)
  }, [depositAmount])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <form onSubmit={onSubmit}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Wallet P2P</DialogTitle>
            <DialogDescription>
              Transfer money from your wallet to another user
            </DialogDescription>
          </DialogHeader>

          <div className="rounded-xl bg-linear-to-br from-[#7e57c2] via-[#673ab7] to-[#4527a0] p-6 text-white">
            <h1 className="text-center text-2xl font-semibold">
              Paycore Wallet P2P
            </h1>
          </div>

          <FieldGroup>
            <Field>
              <Label htmlFor="amount">
                Transfer Amount <span className="text-red-500">*</span>
              </Label>
              <CurrencyInput
                className="h-9 w-full min-w-0 rounded-md border border-transparent bg-input/20 px-3 py-1 text-base transition-[color,box-shadow,background-color] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40"
                name="amount"
                placeholder="0.00 AOA"
                suffix=" AOA"
                decimalsLimit={2}
                decimalSeparator="."
                groupSeparator=","
                formatValueOnBlur
                onValueChange={(value) => setDepositAmount(Number(value))}
              />
            </Field>

            <Field>
              <Label htmlFor="recipient">
                Recipient Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="recipient"
                name="recipient"
                placeholder="recipient@email.com"
                type="email"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </DialogClose>

            <Button
              onClick={onSubmit}
              type="submit"
              className="font-semibold text-white"
            >
              {isWalletP2PLoading ? (
                <>
                  <HugeiconsIcon
                    icon={Loading02Icon}
                    className="animate-spin"
                  />
                  <span>Confirming...</span>
                </>
              ) : (
                <>
                  <HugeiconsIcon icon={ArrowRight02Icon} />
                  <span>Confirm Transfer</span>
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
