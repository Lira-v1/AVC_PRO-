import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(2, "Минимум 2 символа"),
  phone: z.string().min(6, "Укажите телефон").max(32, "Слишком длинный номер"),
  email: z.string().email("Неверный email").optional().or(z.literal("").transform(() => undefined)),
  service: z.string().optional(),
  message: z.string().max(2000, "Слишком длинное сообщение").optional(),
  website: z.string().max(0).optional(), // honeypot
});

export type LeadInput = z.infer<typeof leadSchema>;

export function normalize(input: LeadInput) {
  const t = (s?: string) => (s ?? "").trim().replace(/\s+/g, " ");
  return {
    name: t(input.name),
    phone: t(input.phone),
    email: input.email ? t(input.email) : undefined,
    service: input.service ? t(input.service) : undefined,
    message: input.message ? input.message.trim() : undefined,
    website: input.website,
  } as LeadInput;
}
