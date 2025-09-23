export default function Requisites({ items }: { items: { label: string; value: string }[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-lg font-semibold mb-3">Реквизиты</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
        {items.map((it, i) => (
          <div key={i} className="flex justify-between gap-3">
            <span className="text-gray-400">{it.label}</span>
            <span className="text-gray-100">{it.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
