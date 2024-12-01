import '@/app/ui/global.css'
import {inter} from "@/app/ui/fonts"
import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Augmentify',
    description: 'dataset generator application',
}

export default function RootLayout({
  children,}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <html lang="en">
            <body
                className={`${inter.className} antialiased bg-gradient-to-r from-rose-400 to-red-100`}>
            {children}
            </body>
            </html>
        </ClerkProvider>

    );
}
