"use client";

import { z } from "zod";

export const crearUsuarioSchema = z.object({
  nombre: z
    .string()
    .min(2, "Debe tener al menos 2 caracteres")
    .max(50, "Debe tener menos de 50 caracteres"),
  apellido: z
    .string()
    .min(2, "Debe tener al menos 2 caracteres")
    .max(50, "Debe tener menos de 50 caracteres"),
  telefono: z
    .string()
    .min(6, "Debe tener al menos 6 caracteres")
    .max(20, "Debe tener menos de 20 caracteres"),
  documento: z
    .string()
    .min(6, "Debe tener al menos 6 caracteres")
    .max(20, "Debe tener menos de 20 caracteres"),
  tipo_doc: z.enum(["DNI", "CI", "Pasaporte", "Otros"]),
  img_url: z
    .string()
    .url("Debe ser una URL válida")
    .max(255, "Debe tener menos de 255 caracteres"),
});

export type crearUsuarioSchemaType = z.infer<typeof crearUsuarioSchema>;
