import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/providers";
import { Header } from "@/app/browse/header";
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeX | Pair Programming",
  description: "An Application to help pair Programming with rendom devs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      
      <body className={inter.className}>
          <Providers>
            <Toaster/>
            <NextTopLoader
            showSpinner={false}
            />
            <Header/>
            {children}
          </Providers>
        </body>
    </html>
  );
}
