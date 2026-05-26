export const session = {
  save: (walletId: string, userId: string) => {
    localStorage.setItem("walletId", walletId)
    localStorage.setItem("userId", userId)
  },

  get: () => ({
    walletId: localStorage.getItem("walletId"),
    userId: localStorage.getItem("userId"),
  }),

  clear: () => {
    localStorage.removeItem("walletId")
    localStorage.removeItem("userId")
  },
}
