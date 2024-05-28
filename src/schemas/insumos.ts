import { z } from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const crearInsumoSchema = z.object({
  nombre: z
    .string()
    .min(2, "Debe tener al menos 2 caracteres")
    .max(50, "Debe tener menos de 50 caracteres"),
  categoria: z.enum(["categoria1", "categoria2", "categoria3"]),
  cantidad: z.number().positive(),
  medida: z.enum(["unidad", "kilogramo", "litro"]),
  file_image: z
    .any()
    .refine(
      (file) => file?.size < MAX_FILE_SIZE,
      "La imagen debe pesar menos de 7MB"
    )
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Solo se permiten formatos .jpg, .jpeg, .png y .webp."
    ),
});

export type crearInsumoSchemaType = z.infer<typeof crearInsumoSchema>;
