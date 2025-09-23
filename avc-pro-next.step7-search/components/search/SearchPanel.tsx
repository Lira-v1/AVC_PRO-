"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import { portfolio } from "@/data/portfolio";

export default function SearchPanel({ onClose }: { onClose: () => void }) {
  const [q, setQ] = useState("");

  const productResults = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return [];
    return products.filter(p =>
      p.title.toLowerCase().includes(s) || (p.excerpt || "").toLowerCase().includes(s)
    ).slice(0, 10);
  }, [q]);

  const portfolioResults = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return [];
    return portfolio.filter(p =>
      p.title.toLowerCase().includes(s) || (p.excerpt || "").toLowerCase().includes(s)
    ).slice(0, 10);
  }, [q]);

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div className="mx-auto mt-24 max-w-2xl rounded-2xl border border-white/10 bg-[#0f1216] p-4"
           onClick={(e)=>e.stopPropagation()}>
        <div className="flex items-center gap-2">
          <input
            autoFocus
            value={q}
            onChange={(e)=>setQ(e.target.value)}
            placeholder="Найти товар или кейс..."
            className="w-full rounded-xl border border-white/10 bg-transparent px-3 py-2 text-gray-100 placeholder:text-gray-500 focus:ring-2"
          />
          <button onClick={onClose} className="text-gray-400 hover:text-gray-200">Закрыть</button>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 max-h-[60vh] overflow-auto">
          {/* Products */}
          {q && (
            <div>
              <div className="text-xs uppercase tracking-wide text-gray-400 mb-2">Товары</div>
              {productResults.length === 0 && <div className="text-sm text-gray-500">Ничего не найдено</div>}
              <div className="space-y-2">
                {productResults.map(p => (
                  <Link
                    key={p.slug}
                    href={`/catalog/${p.category}/${p.slug}`}
                    className="block rounded-xl border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10"
                    onClick={onClose}
                  >
                    <div className="font-medium text-gray-100">{p.title}</div>
                    {p.excerpt && <div className="text-sm text-gray-400">{p.excerpt}</div>}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Portfolio */}
          {q && (
            <div>
              <div className="text-xs uppercase tracking-wide text-gray-400 mb-2">Портфолио</div>
              {portfolioResults.length === 0 && <div className="text-sm text-gray-500">Ничего не найдено</div>}
              <div className="space-y-2">
                {portfolioResults.map(p => (
                  <Link
                    key={p.slug}
                    href={`/portfolio/${p.slug}`}
                    className="block rounded-xl border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10"
                    onClick={onClose}
                  >
                    <div className="font-medium text-gray-100">{p.title}</div>
                    {p.excerpt && <div className="text-sm text-gray-400">{p.excerpt}</div>}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
