"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Usuario } from "@/types/model";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
/* export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
}; */

export const columns: ColumnDef<Usuario>[] = [
  {
    accessorKey: "nombre",
    header: "Nombres",
  },
  {
    accessorKey: "apellido",
    header: "Apellidos",
  },
  {
    accessorKey: "puntos",
    header: "Puntos",
  },
  {
    accessorKey: "documento",
    header: "Documento",
  },
  {
    accessorKey: "tipo_doc",
    header: "Tipo de documento",
  },
  {
    accessorKey: "telefono",
    header: "Teléfono",
  },
  {
    accessorKey: "img_url",
    header: "Imagen",
  },
];
