import axios from "axios"
import { session } from "../utils/session-storage"

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "x-wallet-id": session.get().walletId,
    "x-user-id": session.get().userId,
  },
})

api.interceptors.request.use((config) => {
  const { walletId, userId } = session.get()

  if (walletId) config.headers["x-wallet-id"] = walletId
  if (userId) config.headers["x-user-id"] = userId

  return config
})

api.interceptors.request.use(async (config) => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return config
})
