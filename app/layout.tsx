import type { Metadata } from "next";
import { Bitter, Dosis } from "next/font/google";

import "./globals.css";
import QueryProvider from "@/lib/QueryProvider";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
// import { ScreenSize } from "./components/ScreenSize";

const dosis = Dosis({ subsets: ["latin"] });
const bitter = Bitter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meal Finder",
  description: "Find the best recipes for your next meal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dosis.className} ${bitter.className} antialiased`}>
        <QueryProvider>
          <Header />
          {children}
          <Footer />
          {/* <ScreenSize /> */}
        </QueryProvider>
      </body>
    </html>
  );
}
