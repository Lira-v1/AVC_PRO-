import Link from "next/link";
import type { PortfolioItem } from "@/data/portfolio";

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <Link href={`/portfolio/${item.slug}`} className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:bg-white/10 block">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={item.images[0]} alt={item.title} className="w-full aspect-[16/10] object-cover" />
      <div className="p-4">
        <div className="text-lg font-semibold">{item.title}</div>
        {item.excerpt && <p className="text-sm text-gray-400 mt-1">{item.excerpt}</p>}
        {item.tags && item.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {item.tags.slice(0, 3).map((t, i) => (
              <span key={i} className="text-xs bg-black text-white rounded-full px-2 py-0.5 border border-white/10">{t}</span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
