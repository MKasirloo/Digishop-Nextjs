import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

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
      path: "./assets/fonts/Shabnam-Thin-FD.woff2",
      weight: "100",
      style: "thin"
    },
    {
      path: "./assets/fonts/Shabnam-Light-FD.woff2",
      weight: "300",
      style: "light"
    },
    {
      path: "./assets/fonts/Shabnam-FD.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "./assets/fonts/Shabnam-Medium-FD.woff2",
      weight: "500",
      style: "medium"
    },
    {
      path: "./assets/fonts/Shabnam-Bold-FD.woff2",
      weight: "700",
      style: "bold"
    },
  ],
  variable: "--font-shabnam"
})

const lalezar = localFont({
  src: "./assets/fonts/Lalezar-Regular.ttf",
  variable: "--font-lalezar"
})

export const metadata: Metadata = {
  title: "دیجی شاپ",
  description: "فروشگاه اینترنتی دیجی شاپ",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${shabnam.variable} ${geistSans.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#4D00FF" />
      </head>
      <body className="min-h-full flex flex-col">
        <NextTopLoader
          color="#4D00FF"
          height={3}
          showSpinner={false}
          crawlSpeed={200}
          speed={300}
          shadow="0 0 10px #4D00FF, 0 0 20px #4D00FF, 0 0 30px #4D00FF"
          zIndex={9999999}
        />
        {children}
      </body>
    </html>
  );
}
