import Header from "@/components/ui/Header";
import MapEmbed from "@/components/contacts/MapEmbed";
import Requisites from "@/components/contacts/Requisites";
import { contactsData } from "@/data/contacts";

export const metadata = {
  title: "Контакты | AVC PRO",
  description: "Контакты, карта и реквизиты",
};

export default function ContactsPage() {
  const d = contactsData;
  return (
    <main>
      <Header />
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Контакты</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Контакты */}
            <div className="lg:col-span-1 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-lg font-semibold">{d.company}</div>
                <div className="text-sm text-gray-400 mt-1">{d.address}</div>
                <div className="mt-3 space-y-1">
                  <div><span className="text-gray-400">Телефон:</span> <a href={`tel:${d.phone}`} className="hover:text-white">{d.phone}</a></div>
                  <div><span className="text-gray-400">Email:</span> <a href={`mailto:${d.email}`} className="hover:text-white">{d.email}</a></div>
                  <div className="text-gray-400">Время работы: {d.workingHours}</div>
                </div>
                <div className="mt-3 flex gap-3 text-sm">
                  <a href={d.telegram} className="rounded-2xl border border-white/10 px-3 py-1.5 bg-white/10 hover:bg-white/20">Telegram</a>
                  <a href={d.whatsapp} className="rounded-2xl border border-white/10 px-3 py-1.5 bg-white/10 hover:bg-white/20">WhatsApp</a>
                </div>
              </div>

              <Requisites items={d.requisites} />
            </div>

            {/* Карта */}
            <div className="lg:col-span-2">
              <MapEmbed src={d.mapIframeUrl} />
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4 flex items-center justify-between">
            <div>
              <div className="text-lg font-semibold">Есть задача? Опишите в заявке — ответим в рабочее время.</div>
              <div className="text-sm text-gray-400">Заявка попадёт на почту и в Telegram (если настроено).</div>
            </div>
            <a href="/contact" className="px-5 py-2.5 rounded-2xl border border-white/10 bg-emerald-500 text-black hover:bg-emerald-400">
              Оставить заявку
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
