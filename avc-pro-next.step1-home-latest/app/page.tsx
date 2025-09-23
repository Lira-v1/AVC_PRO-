import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { site } from "@/data/site";

export const metadata = {
  title: "Главная | A.V.C. PRO",
  description: "Металлоконструкции, КНС, шкафы управления, модульные решения — Алматы и РК",
};

export default function HomePage() {
  return (
    <main>
      <Header />

      {/* HERO */}
      <section className="px-4 sm:px-6 lg:px-8 pt-8">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl border border-white/10 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={site.hero.image}
              alt={site.brand}
              className="w-full aspect-[16/7] object-cover opacity-90"
            />
            <div className="p-6 sm:p-8 bg-white/5">
              <h1 className="text-3xl font-bold">{site.hero.title}</h1>
              <p className="text-gray-400 mt-2">{site.hero.subtitle}</p>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href="/catalog"
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-2.5 border border-white/10 bg-emerald-500 text-black hover:bg-emerald-400"
                >
                  Перейти в каталог
                </a>
                <a
                  href={site.hero.cta.href}
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-2.5 border border-white/10 bg-white/10 hover:bg-white/20"
                >
                  {site.hero.cta.label}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Что делаем</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {site.services.map((s, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.image} alt={s.title} className="w-full aspect-[16/10] object-cover" />
                <div className="p-4">
                  <div className="text-lg font-semibold">{s.title}</div>
                  <p className="text-sm text-gray-400 mt-1">{s.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* INFO TILES */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {site.infoTiles.map((t, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-gray-300">
                {t.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
