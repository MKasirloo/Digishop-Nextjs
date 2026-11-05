import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local'
import "@/app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const shabnam = localFont({
  src: [
    {
      path: "@/app/assets/fonts/Shabnam-Thin-FD.woff2",
      weight: "100",
      style: "normal"
    },
    {
      path: "@/app/assets/fonts/Shabnam-Light-FD.woff2",
      weight: "300",
      style: "normal"
    },
    {
      path: "@/app/assets/fonts/Shabnam-FD.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "@/app/assets/fonts/Shabnam-Medium-FD.woff2",
      weight: "500",
      style: "normal"
    },
    {
      path: "@/app/assets/fonts/Shabnam-Bold-FD.woff2",
      weight: "700",
      style: "normal"
    },
  ],
  variable: "--font-shabnam"
})

const lalezar = localFont({
  src: "@/app/assets/fonts/Lalezar-Regular.ttf",
  variable: "--font-lalezar"Regular
})

export const metadata: Metadata = {
  title: "Digishop",
  description: "Digishop E-commerce website",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${shabnam.variable} ${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
