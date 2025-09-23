import "./globals.css";
import type { Metadata } from "next";
import { CartProvider } from "@/components/cart/CartContext";

export const metadata: Metadata = {
  title: "AVC PRO",
  description: "AVC PRO сайт",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="bg-[#0f1216] text-gray-100">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
