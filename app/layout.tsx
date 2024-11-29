import '@/app/ui/global.css'
import {inter} from "@/app/ui/fonts"
import { ClerkProvider } from '@clerk/nextjs'
import Navbar from "@/app/ui/components/navbar";
export default function RootLayout({
  children,}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <html lang="en">
            <body

                className={`${inter.className} antialiased bg-gradient-to-r from-rose-400 to-red-100`}>
            <Navbar/>
            {children}
            </body>
            </html>
        </ClerkProvider>

    );
}