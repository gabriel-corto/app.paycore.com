export const getAvatarFallback = (name: string | undefined) => {
  if (!name) return "U"
  return name.charAt(0).toUpperCase()
}
