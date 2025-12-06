import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import StoreProvider from "@/lib/store-provider";
import ProgressBarProvider from "@/components/Navigation/ProgressBarProvider";
import Navbar from "@/components/Navbar";
import CartSummary from "@/components/CartSummary";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

const inter = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "FurniFlex",
  description: "FurniFlex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ProgressBarProvider>
          <StoreProvider>
            <Navbar />
            <div className="flex-1">
              {children}
              <CartSummary />
            </div>
            <Footer />
          </StoreProvider>
        </ProgressBarProvider>
      </body>
    </html>
  );
}
