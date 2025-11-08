import { ThemeProvider } from "@/lib/theme-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bosco",
  description: "This is the portfolio of Abba Is'haq",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
          <Toaster
            richColors
            position="bottom-right"
            toastOptions={{
              classNames: {
                toast:
                  "rounded-2xl shadow-md border text-sm font-mono bg-background",
                success: "bg-green-100 border-green-500 text-green-800",
                error: "bg-red-100 border-red-500 text-red-800",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
