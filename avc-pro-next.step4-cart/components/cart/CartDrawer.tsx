"use client";

import { useCart } from "./CartContext";
import Link from "next/link";

export default function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { items, remove, clear } = useCart();

  return (
    <div className={`fixed inset-0 z-50 ${open ? "" : "pointer-events-none"}`}>
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />
      <div
        className={`absolute right-0 top-0 h-full w-80 bg-[#0f1216] border-l border-white/10 transform transition-transform ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-4 flex justify-between items-center border-b border-white/10">
          <h2 className="text-lg font-semibold">Корзина</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">✕</button>
        </div>

        <div className="p-4 space-y-3 overflow-y-auto h-[calc(100%-140px)]">
          {items.length === 0 && <p className="text-gray-400">Корзина пуста</p>}
          {items.map((i) => (
            <div key={i.product.slug} className="flex justify-between items-center border border-white/10 rounded-xl p-2">
              <span className="text-sm">{i.product.title}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm">× {i.qty}</span>
                <button onClick={() => remove(i.product.slug)} className="text-red-400 hover:text-red-300">Удалить</button>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-white/10">
          <Link
            href="/contact?cart=1"
            className="block w-full text-center px-4 py-2 rounded-xl bg-emerald-500 text-black hover:bg-emerald-400"
          >
            Оформить заявку
          </Link>
          {items.length > 0 && (
            <button onClick={clear} className="mt-2 w-full text-sm text-gray-400 hover:text-white">
              Очистить корзину
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
