import type React from "react"

export default function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      auth
      {children}
    </div>
  )
}
