"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Usuario } from "@/types/db";

import {
  MoreHorizontal,
  ArrowUpDown,
  ClipboardCopy,
  Trash,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export const columns: ColumnDef<Usuario>[] = [
  {
    id: "Imagen",
    accessorKey: "img_url",
    header: "Imagen",
    cell: ({ row }) => {
      const usuario = row.original;
      return (
        <Avatar>
          <AvatarImage
            src={usuario.img_url}
            alt={usuario.nombre}
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
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
    accessorKey: "apellido",
    header: "Apellidos",
  },
  {
    accessorKey: "puntos",
    header: ({ column }) => {
      return (
        <Button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className='group bg-transparent hover:bg-transparent text-secundary
          hover:text-primary
          cursor-pointer'
        >
          Puntos
          <ArrowUpDown className='ml-2 h-4 w-4 group-hover:stroke-primary' />
        </Button>
      );
    },
  },
  {
    accessorKey: "documento",
    header: "Documento",
  },
  {
    id: "Tipo de doc.",
    accessorKey: "tipo_doc",
    header: "Tipo de documento",
  },
  {
    accessorKey: "telefono",
    header: "Teléfono",
  },
  {
    accessorKey: "fecha_registro",
    header: "Fecha de registro",
    cell: ({ row }) => {
      const usuario = row.original;
      return new Date(usuario.fecha_registro).toLocaleString();
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const usuario = row.original;

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
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(
                  `Nombre: ${usuario.nombre} ${usuario.apellido}\nTeléfono: ${usuario.telefono}`
                )
              }
            >
              <ClipboardCopy className='mr-2 h-4 w-4' />
              Copiar Contacto
            </DropdownMenuItem>
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
