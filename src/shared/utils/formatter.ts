export const moneyFormatter = (amount: number) => {
  return new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: "AOA",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}
