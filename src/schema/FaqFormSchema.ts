import { z } from "zod";

export const faqSchema = z.object({
    email: z
        .string()
        .superRefine((val, ctx) => {
            if (val.trim().length === 0) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Alamat email tidak boleh kosong",
                });
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Alamat email tidak valid",
                });
            }
        }),
    name: z
        .string()
        .superRefine((val, ctx) => {
            if (val.trim().length === 0) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Nama tidak boleh kosong",
                });
            } else if (!/^[a-zA-Z\s]+$/.test(val)) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Nama hanya terdiri dari alphabet",
                });
            }
        }),
    question: z.string().min(1, "Pertanyaan tidak boleh kosong"),
});
