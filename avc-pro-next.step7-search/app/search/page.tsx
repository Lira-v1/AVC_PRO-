"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Header from "@/components/ui/Header";
import { products } from "@/data/products";
import { portfolio } from "@/data/portfolio";

export default function SearchPage() {
  const [q, setQ] = useState("");

  const productResults = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return [];
    return products.filter(p =>
      p.title.toLowerCase().includes(s) || (p.excerpt || "").toLowerCase().includes(s)
    );
  }, [q]);

  const portfolioResults = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return [];
    return portfolio.filter(p =>
      p.title.toLowerCase().includes(s) || (p.excerpt || "").toLowerCase().includes(s)
    );
  }, [q]);

  return (
    <main>
      <Header />
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Поиск</h1>
          <input
            value={q}
            onChange={(e)=>setQ(e.target.value)}
            placeholder="Найти товар или кейс..."
            className="w-full rounded-xl border border-white/10 bg-transparent px-3 py-2 text-gray-100 placeholder:text-gray-500 focus:ring-2"
          />

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="text-sm text-gray-400 mb-2">Товары</div>
              <div className="space-y-2">
                {q && productResults.length === 0 && <div className="text-sm text-gray-500">Ничего не найдено</div>}
                {productResults.map(p => (
                  <Link key={p.slug} href={`/catalog/${p.category}/${p.slug}`} className="block rounded-xl border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10">
                    <div className="font-medium text-gray-100">{p.title}</div>
                    {p.excerpt && <div className="text-sm text-gray-400">{p.excerpt}</div>}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-400 mb-2">Портфолио</div>
              <div className="space-y-2">
                {q && portfolioResults.length === 0 && <div className="text-sm text-gray-500">Ничего не найдено</div>}
                {portfolioResults.map(p => (
                  <Link key={p.slug} href={`/portfolio/${p.slug}`} className="block rounded-xl border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10">
                    <div className="font-medium text-gray-100">{p.title}</div>
                    {p.excerpt && <div className="text-sm text-gray-400">{p.excerpt}</div>}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
