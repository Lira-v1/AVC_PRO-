export type PortfolioItem = {
  slug: string;
  title: string;
  excerpt?: string;
  images: string[]; // пути из /public/images/
  tags?: string[];
  content?: string; // основной текст кейса (коротко)
};

// Демо-данные — замени на свои.
// === EDIT HERE ===
export const portfolio: PortfolioItem[] = [
  {
    slug: "canopy-business-center",
    title: "Навес у бизнес-центра, 4×12 м",
    excerpt: "Стальной каркас, поликарбонат 8 мм. Монтаж 3 дня.",
    images: ["/images/placeholder-1200x800.jpg"],
    tags: ["Навес", "Монтаж", "Поликарбонат"],
    content: "Изготовили и смонтировали навес 4×12 м. Каркас — профтруба, покрытие — поликарбонат 8 мм."
  },
  {
    slug: "kns-industrial-70",
    title: "КНС 70 м³/ч, промышленный объект",
    excerpt: "2 насоса, шкаф управления, ПНР и документация.",
    images: ["/images/placeholder-1200x800.jpg"],
    tags: ["КНС", "Автоматика", "ПНР"],
    content: "Поставка, монтаж и пусконаладка КНС 70 м³/ч. Установили шкаф, провели ПНР и обучение персонала."
  },
  {
    slug: "modular-office-two-blocks",
    title: "Модульный офис из 2 блоков",
    excerpt: "Тёплая оболочка, отделка, электрика, мебель.",
    images: ["/images/placeholder-1200x800.jpg"],
    tags: ["Модульные здания", "Отделка"],
    content: "Собрали офис из двух блоков 3×6 м. Внутренняя отделка, электрика, сдача под ключ."
  }
];
