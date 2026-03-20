"use client";

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary"
}

export const Button = ({ children, onClick, variant = "primary" }: ButtonProps) => {
  const base =
    "w-full text-left px-4 py-2 rounded-lg font-medium transition"

  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700 active:scale-95 shadow-md cursor-pointer"
      : "bg-gray-100 text-gray-800 hover:bg-gray-200 cursor-pointer"

  return (
    <button onClick={onClick} className={`${base} ${styles}`}>
      {children}
    </button>
  )
}