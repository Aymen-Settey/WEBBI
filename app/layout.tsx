import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ITALCAR Analytics",
  description: "ITALCAR Dashboard Services",
};

// Footer component

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <head>
          <link rel="icon" href="/images/logo5.png" />
        </head>
        <body className={inter.className}>
          <Toaster />
          <main className="h-full">
            {children}
            <Footer />
          </main>
        </body>
      </html>
    </SessionProvider>
  );
}
