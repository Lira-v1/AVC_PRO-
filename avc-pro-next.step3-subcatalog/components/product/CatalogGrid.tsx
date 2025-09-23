import ProductCard from "./ProductCard";
import type { Product } from "@/data/products";

export default function CatalogGrid({ items }: { items: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.map((p) => <ProductCard key={p.slug} p={p} />)}
    </div>
  );
}
