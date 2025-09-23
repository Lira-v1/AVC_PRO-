import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/ui/Header";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

export async function generateStaticParams() {
  return products.map((p) => ({ category: p.category, slug: p.slug }));
}

export function generateMetadata({ params }: { params: { category: string; slug: string } }) {
  const p = products.find((x) => x.slug === params.slug);
  return { title: p ? `${p.title} | AVC PRO` : "Товар | AVC PRO" };
}

export default function ProductPage({ params }: { params: { category: string; slug: string } }) {
  const cat = categories.find((x) => x.key === params.category);
  const p = products.find((x) => x.slug === params.slug && x.category === cat?.key);
  if (!cat || !p) return notFound();

  return (
    <main>
      <Header />
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-5xl mx-auto">
          <Link href={`/catalog/${cat.key}`} className="text-sm text-gray-300 hover:text-white">← {cat.title}</Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
            <div className="space-y-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.images[0]} alt={p.title} className="w-full rounded-2xl border border-white/10" />
              <div className="grid grid-cols-3 gap-3">
                {p.images.slice(1).map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={i} src={src} alt={`${p.title} ${i+2}`} className="w-full rounded-xl border border-white/10" />
                ))}
              </div>
            </div>

            <div>
              <h1 className="text-3xl font-bold">{p.title}</h1>
              {typeof p.price === "number" && (
                <div className="mt-2 inline-block bg-white text-black rounded-full px-4 py-1 text-sm">
                  {p.price.toLocaleString()} ₸
                </div>
              )}
              {p.excerpt && <p className="text-gray-400 mt-4">{p.excerpt}</p>}

              <div className="mt-8 flex gap-3">
                <a href={`/contact?service=${encodeURIComponent(p.title)}`} className="px-5 py-2.5 rounded-2xl border border-white/10 bg-emerald-500 text-black hover:bg-emerald-400">
                  Оставить заявку
                </a>
                <Link href={`/catalog/${cat.key}`} className="px-5 py-2.5 rounded-2xl border border-white/10 hover:bg-white/10">
                  В каталог
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
