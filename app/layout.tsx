import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import { ThemeProvider } from "@/context/theme-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mahmud | Software Engineer",
  description:
    "Personal portfolio of Golam Mahmud, a Software Engineer specializing in PHP, Laravel, and web development.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
        <Script src="https://unpkg.com/framer-motion@10.16.4/dist/framer-motion.js" />
        <Script src="https://unpkg.com/react-type-animation@3.2.0/dist/index.umd.js" />
      </body>
    </html>
  )
}
