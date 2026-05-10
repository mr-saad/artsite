import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { getCachedCategories } from "@/lib/server/getCachedCategories"

export const metadata = {
  title: "ArtSite",
  description: "Where Silence meets Serenity",
}

export default async function RootLayout({ children }) {
  const navCts = await getCachedCategories()

  return (
    <html lang="en" className={`h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..600;1,14..32,100..600&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Arapey:ital@0;1&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full">
        <Navbar categories={navCts} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
