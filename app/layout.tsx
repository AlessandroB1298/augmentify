import '@/app/ui/global.css'
import {inter} from "@/app/ui/fonts"
import { ClerkProvider } from '@clerk/nextjs'
export default function RootLayout({
  children,}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider
            publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
        >
            <html lang="en">
            <body
                className={`${inter.className} antialiased bg-gradient-to-r from-rose-400 to-red-100`}>
            {children}
            </body>
            </html>
        </ClerkProvider>

    );
}
