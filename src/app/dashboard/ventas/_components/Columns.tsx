"use client";

//Define cada columna de mi tabla

import { ColumnDef } from "@tanstack/react-table";

import { Venta } from "@/types/model";

import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";

export const columns: ColumnDef<Venta>[] = [
  {
    accessorKey: "fecha_emision",
    header: ({ column }) => {
      return (
        <Button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className='group bg-transparent hover:bg-transparent text-secundary
          hover:text-primary
          cursor-pointer'
        >
          Fecha de emisión
          <ArrowUpDown className='ml-2 h-4 w-4 group-hover:stroke-primary' />
        </Button>
      );
    },
  },
  {
    accessorKey: "nombre",
    header: "Productos",
  },
  {
    accessorKey: "cantidad",
    header: "Cantidad",
  },
  {
    accessorKey: "total",
    header: ({ column }) => {
      return (
        <Button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className='group bg-transparent hover:bg-transparent text-secundary
          hover:text-primary
          cursor-pointer'
        >
          Precio total
          <ArrowUpDown className='ml-2 h-4 w-4 group-hover:stroke-primary' />
        </Button>
      );
    },
  },
];
