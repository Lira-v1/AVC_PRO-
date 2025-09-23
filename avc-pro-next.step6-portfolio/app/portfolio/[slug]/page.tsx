import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/ui/Header";
import { portfolio } from "@/data/portfolio";

export async function generateStaticParams() {
  return portfolio.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const item = portfolio.find((x) => x.slug === params.slug);
  return { title: item ? `${item.title} | Портфолио | AVC PRO` : "Кейс | AVC PRO" };
}

export default function PortfolioCasePage({ params }: { params: { slug: string } }) {
  const item = portfolio.find((x) => x.slug === params.slug);
  if (!item) return notFound();

  return (
    <main>
      <Header />
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-5xl mx-auto">
          <Link href="/portfolio" className="text-sm text-gray-300 hover:text-white">← Все кейсы</Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
            <div className="space-y-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.images[0]} alt={item.title} className="w-full rounded-2xl border border-white/10" />
              <div className="grid grid-cols-3 gap-3">
                {item.images.slice(1).map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={i} src={src} alt={`${item.title} ${i+2}`} className="w-full rounded-xl border border-white/10" />
                ))}
              </div>
            </div>

            <div>
              <h1 className="text-3xl font-bold">{item.title}</h1>
              {item.tags && item.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((t, i) => (
                    <span key={i} className="text-xs bg-black text-white rounded-full px-2 py-0.5 border border-white/10">{t}</span>
                  ))}
                </div>
              )}
              {item.content && <p className="text-gray-400 mt-4 leading-relaxed">{item.content}</p>}

              <div className="mt-8">
                <a href={`/contact?service=${encodeURIComponent("Запрос по кейсу: " + item.title)}`}
                   className="px-5 py-2.5 rounded-2xl border border-white/10 bg-emerald-500 text-black hover:bg-emerald-400">
                  Оставить заявку
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
