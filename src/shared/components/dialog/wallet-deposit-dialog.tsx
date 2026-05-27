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
import { WalletOverviewCard } from "../card/wallet-overview-card"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight02Icon, Loading02Icon } from "@hugeicons/core-free-icons"

import CurrencyInput from "react-currency-input-field"
import { useEffect, useState } from "react"
import { useWallet } from "@/features/wallet/hooks/useWallet"
import { toast } from "react-toastify"

interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function WalletDepositDialog({ open, onOpenChange }: Props) {
  const { walletDepositFn, isWalletDepositLoading } = useWallet()

  const [depositAmount, setDepositAmount] = useState<number>(0)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!depositAmount || Number(depositAmount) <= 0) {
      toast.error("Please enter a deposit amount")
      return
    }

    await walletDepositFn({ amount: Number(depositAmount) })
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
            <DialogTitle>Wallet Deposit</DialogTitle>
            <DialogDescription>
              Deposit money into your wallet to start using our services.
            </DialogDescription>
          </DialogHeader>

          <div>
            <WalletOverviewCard className="col-span-4 h-32 min-h-32" />
          </div>

          <FieldGroup>
            <Field>
              <Label htmlFor="amount">
                Deposit Amount <span className="text-red-500">*</span>
              </Label>
              <CurrencyInput
                className="w-full gap-x-3 rounded-md border border-border p-3 focus:border-primary focus:outline-none"
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
              {isWalletDepositLoading ? (
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
                  <span>Confirm Deposit</span>
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
