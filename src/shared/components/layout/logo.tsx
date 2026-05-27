interface LogoProps {
  apparence?: "light" | "dark"
}

export function Logo({ apparence = "light" }: LogoProps) {
  return (
    <h1
      className={`text-2xl font-extrabold ${apparence === "light" ? "text-zinc-800" : "text-zinc-100"}`}
    >
      <span className="text-primary">P</span>aycore
    </h1>
  )
}
