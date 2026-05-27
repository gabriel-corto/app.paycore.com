export const getAvatarFallback = (name: string | undefined) => {
  if (!name) return "U"
  return name.charAt(0).toUpperCase()
}
export const getFirstName = (name: string | undefined) => {
  if (!name) return "User"
  return name.split(" ")[0]
}
