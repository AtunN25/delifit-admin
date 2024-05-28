"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  crearInsumoSchema,
  type crearInsumoSchemaType,
} from "@/schemas/insumos";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import axios from "axios";
import { useRouter } from "next/navigation";

export function FormCreate() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const [dialogOpen, setDialogOpen] = useState(false);
  const router = useRouter();

  const form = useForm<crearInsumoSchemaType>({
    resolver: zodResolver(crearInsumoSchema),
    defaultValues: {
      nombre: "",
      categoria: "categoria1",
      cantidad: 0,
      medida: "unidad",
      file_image: null,
    },
  });

  const onSubmit = (values: crearInsumoSchemaType) => {
    setError("");
    setSuccess("");

    startTransition(async () => {
      const formaData = new FormData();

      formaData.append("nombre", values.nombre);
      formaData.append("categoria", values.categoria);
      formaData.append("cantidad", values.cantidad.toString());
      formaData.append("medida", values.medida);
      formaData.append("file_image", values.file_image);

      const response = await axios.post("/api/insumo", formaData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      form.reset();
      router.refresh();
      setDialogOpen(false);
    });
  };

  const file_image = form.watch("file_image");

  return (
    <Dialog
      open={dialogOpen}
      onOpenChange={setDialogOpen}
    >
      <DialogTrigger asChild>
        <Button variant='secondary'>Crear Insumo</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Crear Insumo</DialogTitle>
          <DialogDescription>
            Llena los campos para crear un nuevo insumo
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-6'
          >
            <div className='space-y-4'>
              <FormField
                control={form.control}
                name='nombre'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombres</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder='Nuevo insumo'
                        type='text'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='categoria'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Categoria</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Selecciona una Categoria' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value='categoria1'>Categoria 1</SelectItem>
                        <SelectItem value='categoria2'>Categoria 2</SelectItem>
                        <SelectItem value='categoria3'>Categoria 3</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='cantidad'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cantidad</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        type='number'
                        placeholder='0'
                        onChange={(e) => {
                          field.onChange(Number(e.target.value));
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='medida'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tipo de documento</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Selecciona una medida' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value='unidad'>Unidad</SelectItem>
                        <SelectItem value='kilogramo'>Kilogramo</SelectItem>
                        <SelectItem value='litro'>Litro</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='file_image'
                render={({ field: { value, onChange, ...fieldProps } }) => (
                  <FormItem>
                    <FormLabel>Picture</FormLabel>
                    <FormControl>
                      <Input
                        {...fieldProps}
                        placeholder='Picture'
                        type='file'
                        accept='image/*'
                        onChange={(event) =>
                          onChange(event.target.files && event.target.files[0])
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {file_image && (
              <img
                className='w-10 object-contain mx-auto my-4'
                src={URL.createObjectURL(file_image)}
                alt='imagen de insumo'
              />
            )}
            <Button
              type='submit'
              disabled={isPending}
              variant='default'
            >
              Guardar
            </Button>
          </form>
        </Form>
        <DialogFooter className=' flex items-center justify-end gap-x-2'>
          <DialogClose asChild>
            <Button
              type='button'
              disabled={isPending}
              variant='secondary'
            >
              Cancelar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
