import Link from "next/link";
import type { Product } from "@/data/products";

export default function ProductCard({ p }: { p: Product }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden flex flex-col">
      <div className="aspect-[16/10] bg-gray-900/40">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.images[0]} alt={p.title} className="w-full h-full object-cover opacity-90" />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-base font-semibold">{p.title}</h3>
        {p.excerpt && <p className="text-sm text-gray-400 mt-1 flex-1">{p.excerpt}</p>}
        <div className="mt-3 flex items-center justify-between">
          {typeof p.price === "number" ? (
            <span className="text-sm bg-white text-black px-3 py-1 rounded-full">
              {p.price.toLocaleString()} ₸
            </span>
          ) : <span />}
          <Link
            href={`/catalog/${p.category}/${p.slug}`}
            className="ml-auto text-sm px-3 py-1.5 rounded-xl border border-white/10 bg-white/10 hover:bg-white/20"
          >
            Подробнее
          </Link>
        </div>
      </div>
    </div>
  );
}
