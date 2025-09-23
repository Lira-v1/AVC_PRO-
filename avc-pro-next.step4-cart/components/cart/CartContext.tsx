"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Product } from "@/data/products";

export type CartItem = { product: Product; qty: number };

type CartContextType = {
  items: CartItem[];
  add: (p: Product) => void;
  remove: (slug: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem("cart");
    if (raw) setItems(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const add = (p: Product) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.slug === p.slug);
      if (existing) {
        return prev.map((i) =>
          i.product.slug === p.slug ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { product: p, qty: 1 }];
    });
  };

  const remove = (slug: string) => {
    setItems((prev) => prev.filter((i) => i.product.slug !== slug));
  };

  const clear = () => setItems([]);

  return (
    <CartContext.Provider value={{ items, add, remove, clear }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
