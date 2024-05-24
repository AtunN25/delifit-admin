import { Stringifier } from "postcss";

export interface Usuario {
  id_usuario: string | number;
  nombre: string;
  apellido: string;
  telefono: string;
  documento: string;
  tipo_doc: "DNI" | "pasaporte" | "otro";
  puntos: number;
  img_url: string;
  fecha_registro: Date | string;
  validacion: boolean;
}

export interface Personal {
  id_personal: string;
  img_url: string;
  nombre: string;
  apellido: string;
  telefono: string;
  password: string;
  documento: string;
  tipo_doc: "DNI" | "pasaporte" | "otro";
  rol: "admin" | "vendedor";
}

export interface Factura {
  id_factura: string;
  id_personal: string;
  id_usuario: string;
  fecha_emision: Date;
  subtotal: number;
  desc_promocion: number;
  desc_puntos: number;
  impuesto: number;
  total: number;
}

export interface Lista_Promocion {
  id_promocion: string;
  id_factura: string;
  cantidad: number;
  precio_cantidad: number;
  nombre: string;
}

export interface Lista_Producto {
  id_factura: string;
  id_producto: string;
  cantidad: number;
  precio_cantidad: number;
  nombre: string;
}

export interface Insumo {
  id_insumo: string;
  img_url: string;
  nombre: string;
  cantidad: number;
  categoria: "1" | "2" | "3";
  medida: "unidad" | "kilogramo" | "litro";
}

export interface Producto {
  id_produto: string;
  img_url: string;
  nombre: string;
  descripcion: string;
  precio_base: number;
  categoria: "1" | "2" | "3";
}

export interface Promocion {
  if_promocion: string;
  img_url: string;
  nombre: string;
  descripcion: string;
  precio_base: number;
  precio_oferta: number;
  estado_promocion: boolean;
  fecha_inicio: Date;
  fecha_fin: Date;
  categoria: "1" | "2" | "3";
  dia_promocion:
    | "lunes"
    | "martes"
    | "miércoles"
    | "jueves"
    | "viernes"
    | "sábado"
    | "domingo";
}

export interface Ins_Prod {
  id_insumo: string;
  id_producto: string;
  cantidad: number;
}

export interface Prod_Prom {
  id_producto: string;
  id_promocion: string;
  cantidad: number;
}
