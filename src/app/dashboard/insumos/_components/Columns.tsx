"use client";

import Image from "next/image";

import { ColumnDef } from "@tanstack/react-table";

import { Insumo } from "@/types/db";

import { MoreHorizontal, ArrowUpDown, Trash } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export const columns: ColumnDef<Insumo>[] = [
  {
    id: "Imagen",
    accessorKey: "img_url",
    header: "Imagen",
    cell: ({ row }) => {
      const insumo = row.original;
      return (
        <Image
          src={insumo.img_url}
          alt={insumo.nombre}
          height='64'
          width='64'
          className='aspect-square rounded-md object-cover'
        />
      );
    },
  },
  {
    accessorKey: "nombre",
    header: ({ column }) => {
      return (
        <Button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className='group bg-transparent hover:bg-transparent text-secundary
          hover:text-primary
          cursor-pointer'
        >
          Nombres
          <ArrowUpDown className='ml-2 h-4 w-4 group-hover:stroke-primary' />
        </Button>
      );
    },
  },
  {
    accessorKey: "categoria",
    header: ({ column }) => {
      return (
        <Button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className='group bg-transparent hover:bg-transparent text-secundary
          hover:text-primary
          cursor-pointer'
        >
          Categoria
          <ArrowUpDown className='ml-2 h-4 w-4 group-hover:stroke-primary' />
        </Button>
      );
    },
  },
  {
    accessorKey: "cantidad",
    header: "Cantidad",
  },
  {
    accessorKey: "medida",
    header: "Medida",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const insumo = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant='ghost'
              className='h-8 w-8 p-0'
            >
              <span className='sr-only'>Open menu</span>
              <MoreHorizontal className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Ver Detalles</DropdownMenuItem>
            <DropdownMenuItem>Actualizar Dato</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='text-red-500 focus:bg-red-50 focus:text-red-500'>
              <Trash className='mr-2 h-4 w-4' />
              <span>Eliminar</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
