import LeadForm from "@/components/forms/LeadForm";

export const metadata = {
  title: "Заявка | AVC PRO",
  description: "Оставьте заявку и мы свяжемся с вами",
};

export default function ContactPage() {
  return (
    <main className="px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Оставить заявку</h1>
        <p className="text-gray-400 mb-8">
          Опишите задачу — ответим в рабочее время. Письмо на почту и (при настройке) уведомление в Telegram приходят мгновенно.
        </p>
        <LeadForm variant="card" />
      </div>
    </main>
  );
}
