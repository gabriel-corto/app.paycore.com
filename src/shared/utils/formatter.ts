export const moneyFormatter = (amount: number) => {
  return new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: "AOA",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

export const dateFormatter = (date: string) => {
  return new Intl.DateTimeFormat("pt-PT", {
    hour: "2-digit",
    minute: "2-digit",
    year: "numeric",
    day: "2-digit",
    month: "2-digit",
  }).format(new Date(date))
}
