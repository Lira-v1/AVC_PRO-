import Header from "@/components/ui/Header";
import PortfolioCard from "@/components/portfolio/PortfolioCard";
import { portfolio } from "@/data/portfolio";

export const metadata = {
  title: "Портфолио | AVC PRO",
  description: "Примеры работ: металлоконструкции, КНС, модульные здания",
};

export default function PortfolioPage() {
  return (
    <main>
      <Header />
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Портфолио</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {portfolio.map((item) => (
              <PortfolioCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
