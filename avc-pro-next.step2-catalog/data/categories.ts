export type CategoryKey = "pumping" | "metal" | "automation" | "boiler" | "modular";

export type Category = {
  key: CategoryKey;
  title: string;
  image: string; // === EDIT HERE === путь к картинке плитки из /public/images/
  blurb?: string;
};

export const categories: Category[] = [
  { key: "pumping",   title: "Насосные станции",           image: "/images/cat-pumping.jpg" },   // === EDIT HERE ===
  { key: "metal",     title: "Металлоконструкции",         image: "/images/cat-metal.jpg" },     // === EDIT HERE ===
  { key: "automation",title: "Шкафы управления КИПиА",     image: "/images/cat-automation.jpg" },// === EDIT HERE ===
  { key: "boiler",    title: "Блочно-модульные котельные", image: "/images/cat-boiler.jpg" },    // === EDIT HERE ===
  { key: "modular",   title: "Блочно-модульные здания",    image: "/images/cat-modular.jpg" },   // === EDIT HERE ===
];
