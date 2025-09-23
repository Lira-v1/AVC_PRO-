import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/ui/Header";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import CatalogGrid from "@/components/product/CatalogGrid";

export async function generateStaticParams() {
  return categories.map((c) => ({ category: c.key }));
}

export function generateMetadata({ params }: { params: { category: string } }) {
  const cat = categories.find((x) => x.key === params.category);
  return { title: cat ? `${cat.title} | Каталог | AVC PRO` : "Каталог | AVC PRO" };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const cat = categories.find((x) => x.key === params.category);
  if (!cat) return notFound();
  const items = products.filter((p) => p.category === cat.key);

  return (
    <main>
      <Header />
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">{cat.title}</h1>
            <Link href="/catalog" className="text-sm text-gray-300 hover:text-white">← Все категории</Link>
          </div>
          <CatalogGrid items={items} />
        </div>
      </section>
    </main>
  );
}
