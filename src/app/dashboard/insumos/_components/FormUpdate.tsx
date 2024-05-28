"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

/* import {
  crearUsuarioSchema,
  type crearUsuarioSchemaType,
} from "@/schemas/usuarios"; */

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

//import { CrearUsuario } from "@/data/Usuario";

//import { FormAlert } from "@/components/auth/FormAlert";
//import { loginAction } from "@/actions/login";

import { z } from "zod";
import { crearUsuarioSchemaType } from "@/schemas/usuarios";
import axios from "axios";
import { useRouter } from "next/navigation";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const crearInsumoSchema = z.object({
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

type crearInsumoSchemaType = z.infer<typeof crearInsumoSchema>;

interface FormUpdateProps {
  id_insumo: number;
}

export function FormUpdate({ id_insumo }: FormUpdateProps) {
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
      // Cerrar el Dialog al finalizar

      //const result = await CrearUsuario(values);

      /* loginAction(values, callbackUrl)
        .then((data) => {
          if (data?.error) {
            form.reset();
            setError(data.error);
          }

          if (data?.success) {
            form.reset();
            setSuccess(data.success);
          }

          if (data?.twoFactor) {
            setShowTwoFactor(true);
          }
        })
        .catch(() => setError("Something went wrong!")); */
    });
  };

  const file_image = form.watch("file_image");

  return (
    <Dialog
      open={dialogOpen}
      onOpenChange={setDialogOpen}
    >
      <DialogTrigger>
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
            {/* 
            <FormAlert
              type='Error'
              message={error || errorUrl}
            />
            <FormAlert
              type='Success'
              message={success}
            /> 
            */}
            <Button
              type='submit'
              disabled={isPending}
              variant='default'
            >
              Guardar
            </Button>
          </form>
        </Form>
        {/* <DialogFooter className=' flex items-center justify-end gap-x-2'>
          <DialogClose asChild>
            <Button
              type='button'
              disabled={isPending}
              variant='secondary'
            >
              Cancelar
            </Button>
          </DialogClose>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
