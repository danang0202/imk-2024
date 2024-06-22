import { z } from "zod";

export const loginSchema = z.object({
    username: z
        .string()
        .email("Alamat email tidak valid")
        .min(1, "Username tidak boleh kosong"),
    password: z.string().min(8, "Password setidaknya harus terdiri dari 8 karakter"),
});
