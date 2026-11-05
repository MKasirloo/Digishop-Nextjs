import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local'
import "../globals.css";

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
      path: "../assets/fonts/Shabnam-Thin-FD.woff2",
      weight: "100",
      style: "normal"
    },
    {
      path: "../assets/fonts/Shabnam-Light-FD.woff2",
      weight: "300",
      style: "normal"
    },
    {
      path: "../assets/fonts/Shabnam-FD.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../assets/fonts/Shabnam-Medium-FD.woff2",
      weight: "500",
      style: "normal"
    },
    {
      path: "../assets/fonts/Shabnam-Bold-FD.woff2",
      weight: "700",
      style: "normal"
    },
  ],
  variable: "--font-shabnam"
})

const lalezar = localFont({
  src: "../assets/fonts/Lalezar-Regular.ttf",
  variable: "--font-lalezar"
})

export const metadata: Metadata = {
  title: "Digishop",
  description: "Digishop E-commerce website",
};

export default function AuthLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${shabnam.variable} ${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
