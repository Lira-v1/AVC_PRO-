import type { CategoryKey } from "@/data/categories";

export type Product = {
  slug: string;
  category: CategoryKey;
  title: string;
  excerpt?: string;
  price?: number; // ₸
  images: string[];
};

// Демо-товары — замени на свои (пути из /public/images/).
// === EDIT HERE ===
export const products: Product[] = [
  // Насосные станции
  {
    slug: "kns-vsct-10-70",
    category: "pumping",
    title: "КНС VSCT 10-70 (2 насоса)",
    excerpt: "Проект, монтаж, ПНР. Шкаф управления, КИПиА, документация.",
    price: 7200000,
    images: ["/images/placeholder-1200x800.jpg"],
  },
  {
    slug: "kns-mini-5-30",
    category: "pumping",
    title: "КНС Mini 5-30",
    excerpt: "Компактная станция для частного сектора. Поставка и монтаж.",
    price: 3500000,
    images: ["/images/placeholder-1200x800.jpg"],
  },

  // Металлоконструкции
  {
    slug: "frame-12x24",
    category: "metal",
    title: "Металлокаркас 12×24 м",
    excerpt: "Проектирование, изготовление, монтаж. Окраска/оцинкование.",
    price: 12500000,
    images: ["/images/placeholder-1200x800.jpg"],
  },
  {
    slug: "canopy-3x6",
    category: "metal",
    title: "Навес модульный 3×6 м",
    excerpt: "Профтруба 80×80, поликарбонат 8 мм, монтаж под ключ.",
    price: 1850000,
    images: ["/images/placeholder-1200x800.jpg"],
  },

  // Шкафы КИПиА
  {
    slug: "panel-pump",
    category: "automation",
    title: "Щит управления насосами (ЩУН)",
    excerpt: "Сборка, настройка, ввод. ПНР на объекте.",
    price: 1200000,
    images: ["/images/placeholder-1200x800.jpg"],
  },

  // Блочно-модульные котельные
  {
    slug: "boiler-1mw",
    category: "boiler",
    title: "БМК 1 МВт",
    excerpt: "Проект, монтаж, ПНР. Автоматика, документация, обучение.",
    price: 30000000,
    images: ["/images/placeholder-1200x800.jpg"],
  },

  // Блочно-модульные здания
  {
    slug: "modular-office-3x9",
    category: "modular",
    title: "Модульное здание 3×9 (офис)",
    excerpt: "Тёплый блок, отделка, электрика. Доставка и монтаж.",
    price: 8900000,
    images: ["/images/placeholder-1200x800.jpg"],
  },
];
