import Header from "@/components/ui/Header";
import FAQItem from "@/components/faq/FAQItem";
import { faq } from "@/data/faq";

export const metadata = {
  title: "FAQ | AVC PRO",
  description: "Часто задаваемые вопросы",
};

export default function FAQPage() {
  return (
    <main>
      <Header />
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">FAQ</h1>
          <div className="space-y-3">
            {faq.map((item, i) => (
              <FAQItem key={i} item={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
