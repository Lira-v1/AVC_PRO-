import Link from "next/link";
import Header from "@/components/ui/Header";
import { categories } from "@/data/categories";

export const metadata = {
  title: "Каталог | AVC PRO",
  description: "Категории каталога",
};

export default function CatalogPage() {
  return (
    <main>
      <Header />
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Каталог товаров</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((c) => (
              <div key={c.key} className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.image} alt={c.title} className="w-full aspect-[16/10] object-cover" />
                <div className="p-4 flex items-center justify-between">
                  <div className="text-lg font-semibold">{c.title}</div>
                  {/* Ссылки на подкаталог появятся в Step 3 */}
                </div>
              </div>
            ))}
          </div>

          {/* Инфо-подсказка */}
          <p className="text-sm text-gray-400 mt-6">
            Выберите нужное направление. На следующем шаге появятся подкаталоги и страницы товаров.
          </p>
        </div>
      </section>
    </main>
  );
}
