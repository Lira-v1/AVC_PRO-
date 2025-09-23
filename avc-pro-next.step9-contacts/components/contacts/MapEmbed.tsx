export default function MapEmbed({ src }: { src?: string }) {
  const envSrc = process.env.NEXT_PUBLIC_MAP_IFRAME_URL;
  const url = envSrc || src;
  if (!url) return null;
  return (
    <div className="rounded-2xl border border-white/10 overflow-hidden bg-white/5">
      <iframe
        src={url}
        className="w-full h-[360px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
