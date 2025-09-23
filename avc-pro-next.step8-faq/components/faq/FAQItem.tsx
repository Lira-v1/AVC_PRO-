"use client";

import { useState } from "react";
import type { FaqItem } from "@/data/faq";

export default function FAQItem({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left px-4 py-3 flex items-center justify-between hover:bg-white/10"
        aria-expanded={open}
      >
        <span className="font-medium">{item.q}</span>
        <span className="text-gray-400">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="px-4 pb-4 text-sm text-gray-300 leading-relaxed">
          {item.a}
        </div>
      )}
    </div>
  );
}
