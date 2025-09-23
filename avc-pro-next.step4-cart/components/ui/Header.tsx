"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/data/site";
import { categories } from "@/data/categories";
import { useCart } from "@/components/cart/CartContext";
import CartDrawer from "@/components/cart/CartDrawer";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const { items } = useCart();

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-[#0f1216]/70 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-extrabold tracking-tight text-xl">
          <span className="text-white">{site.brand}</span>{" "}
          <span className="text-emerald-400">{site.subbrand}</span>
        </Link>

        <nav className="relative flex items-center gap-4 text-sm">
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu(true)}
            onMouseLeave={() => setOpenMenu(false)}
          >
            <Link href="/catalog" className="text-gray-200 hover:text-white">Каталог</Link>
            {openMenu && (
              <div className="absolute right-0 mt-2 w-72 rounded-2xl border border-white/10 bg-white/5 p-2 shadow-sm">
                {categories.map((c) => (
                  <Link
                    key={c.key}
                    href={`/catalog/${c.key}`}
                    className="block rounded-xl px-3 py-2 hover:bg-white/10 text-gray-200"
                  >
                    {c.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href={site.links.contact} className="text-gray-200 hover:text-white">Заявка</Link>

          <button onClick={() => setOpenCart(true)} className="relative text-gray-200 hover:text-white">
            🛒
            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-emerald-500 text-black text-xs rounded-full px-1.5">
                {items.reduce((sum, i) => sum + i.qty, 0)}
              </span>
            )}
          </button>
        </nav>
      </div>

      <CartDrawer open={openCart} onClose={() => setOpenCart(false)} />
    </header>
  );
}
