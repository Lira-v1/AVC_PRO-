"use client";

import { useEffect, useState } from "react";

type Props = { variant?: "plain" | "card" };

export default function LeadForm({ variant = "card" }: Props) {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<boolean | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [servicePrefill, setServicePrefill] = useState<string>("");

  useEffect(() => {
    try {
      const url = new URL(window.location.href);
      const s = url.searchParams.get("service");
      if (s) setServicePrefill(s);
    } catch {}
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true); setOk(null); setErr(null);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as any;

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        const firstErr =
          json?.errors && Object.values(json.errors).find((arr: any) => Array.isArray(arr) && arr.length)?.[0];
        throw new Error(firstErr || json?.error || "Ошибка отправки");
      }
      setOk(true); form.reset(); setServicePrefill("");
    } catch (e: any) {
      setOk(false); setErr(e.message || "Ошибка отправки");
    } finally {
      setLoading(false);
    }
  }

  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    variant === "card"
      ? <div className="max-w-xl mx-auto rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm">{children}</div>
      : <>{children}</>;

  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Имя*</label>
            <input name="name" type="text" required
              className="w-full rounded-xl border border-white/10 bg-transparent px-3 py-2 text-gray-100 placeholder:text-gray-500 focus:ring-2"
              placeholder="Как к вам обращаться" /> {/* === EDIT HERE === */}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Телефон*</label>
            <input name="phone" type="tel" required
              className="w-full rounded-xl border border-white/10 bg-transparent px-3 py-2 text-gray-100 placeholder:text-gray-500 focus:ring-2"
              placeholder="+7 ..." />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input name="email" type="email"
              className="w-full rounded-xl border border-white/10 bg-transparent px-3 py-2 text-gray-100 placeholder:text-gray-500 focus:ring-2"
              placeholder="name@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Услуга</label>
            <input name="service" type="text" defaultValue={servicePrefill}
              className="w-full rounded-xl border border-white/10 bg-transparent px-3 py-2 text-gray-100 placeholder:text-gray-500 focus:ring-2"
              placeholder="Например: КНС, котельная, навес" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Комментарий</label>
          <textarea name="message" rows={4}
            className="w-full rounded-xl border border-white/10 bg-transparent px-3 py-2 text-gray-100 placeholder:text-gray-500 focus:ring-2"
            placeholder="Коротко о задаче" />
        </div>

        {/* Honeypot */}
        <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

        <button type="submit" disabled={loading}
          className="w-full sm:w-auto inline-flex items-center justify-center rounded-2xl px-5 py-2.5 border border-white/10 bg-emerald-500 text-black hover:bg-emerald-400 disabled:opacity-60">
          {loading ? "Отправка..." : "Отправить заявку"}
        </button>

        {ok === true && <p className="text-emerald-400 text-sm">Заявка отправлена. Мы скоро свяжемся с вами!</p>}
        {ok === false && err && <p className="text-red-300 text-sm">{err}</p>}
      </form>
    </Wrapper>
  );
}
