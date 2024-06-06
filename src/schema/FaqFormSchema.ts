import { z } from "zod";

export const faqSchema = z.object({
    email: z.string().email("Invalid email address"),
    name: z
        .string()
        .regex(/^[a-zA-Z\s]+$/, "Name must only contain letters and spaces"),
    question: z.string().min(1, "Question cannot be empty"),
});