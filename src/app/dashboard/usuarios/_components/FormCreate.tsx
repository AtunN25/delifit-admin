"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  crearUsuarioSchema,
  type crearUsuarioSchemaType,
} from "@/schemas/usuarios";

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

import { CrearUsuario } from "@/data/Usuario";
//import { FormAlert } from "@/components/auth/FormAlert";
//import { loginAction } from "@/actions/login";

export function FormCreate() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<crearUsuarioSchemaType>({
    resolver: zodResolver(crearUsuarioSchema),
    defaultValues: {
      nombre: "",
      apellido: "",
      telefono: "",
      documento: "",
      tipo_doc: "DNI",
      img_url: "",
    },
  });

  const onSubmit = (values: crearUsuarioSchemaType) => {
    setError("");
    setSuccess("");

    startTransition(async () => {
      console.log(values);
      const result = await CrearUsuario(values);
      form.reset();
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

  return (
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
                    placeholder='Hernan Ander'
                    type='text'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='apellido'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Apellidos</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder='Chambilla Ch.'
                    type='text'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='telefono'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Teléfono</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder='987654321'
                    type='text'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='documento'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Documento</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder='12345678'
                    type='text'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='tipo_doc'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo de documento</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select a verified email to display' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='DNI'>DNI</SelectItem>
                    <SelectItem value='CI'>CI</SelectItem>
                    <SelectItem value='Pasaporte'>Pasaporte</SelectItem>
                    <SelectItem value='Otros'>Otros</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='img_url'
            render={({ field }) => (
              <FormItem>
                <FormLabel>URL de imagen</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder='https://example.com/image.jpg'
                    type='text'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* <FormAlert
          type='Error'
          message={error || errorUrl}
        />
        <FormAlert
          type='Success'
          message={success}
        /> */}
        <Button
          type='submit'
          disabled={isPending}
          className='w-full'
        >
          Crear Usuario
        </Button>
      </form>
    </Form>
  );
}
