import "@/app/ui/global.css";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Augmentify",
  description: "dataset generator application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
        </head>
        <body
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
