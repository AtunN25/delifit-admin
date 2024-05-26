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
  visibilidad: boolean;
}

export interface Personal {
  id_personal: string | number;
  img_url: string;
  nombre: string;
  apellido: string;
  telefono: string;
  password: string;
  documento: string;
  tipo_doc: "DNI" | "pasaporte" | "otro";
  rol: "admin" | "vendedor";
  visibilidad: boolean;
}

export interface Pedido {
  id_factura: string | number;
  id_usuario: string | number;
  fecha_emision: Date | string;
  subtotal: number;
  desc_promocion: number;
  desc_puntos: number;
  impuesto: number;
  total: number;
}

export interface Factura {
  id_factura: string | number;
  id_pedido: string | number;
  id_personal: string | number;
  fecha_recepcion: Date | string;
}

export interface Lista_Promocion {
  id_promocion: string | number;
  id_factura: string | number;
  cantidad: number;
  precio_cantidad: number;
  nombre: string;
}

export interface Lista_Producto {
  id_factura: string | number;
  id_producto: string | number;
  cantidad: number;
  precio_cantidad: number;
  nombre: string;
}

export interface Insumo {
  id_insumo: string | number;
  img_url: string;
  nombre: string;
  cantidad: number;
  categoria: "1" | "2" | "3";
  medida: "unidad" | "kilogramo" | "litro";
  visibilidad: boolean;
}

export interface Producto {
  id_produto: string | number;
  img_url: string;
  nombre: string;
  descripcion: string;
  precio_base: number;
  categoria: "1" | "2" | "3";
  visibilidad: boolean;
}

export interface Promocion {
  id_promocion: string | number;
  img_url: string;
  nombre: string;
  descripcion: string;
  precio_base: number;
  precio_oferta: number;
  estado_promocion: boolean;
  fecha_inicio: Date | string;
  fecha_fin: Date | string;
  categoria: "1" | "2" | "3";
  dia_promocion:
    | "lunes"
    | "martes"
    | "miércoles"
    | "jueves"
    | "viernes"
    | "sábado"
    | "domingo";
  visibilidad: boolean;
}

export interface Ins_Prod {
  id_insumo: string | number;
  id_producto: string | number;
  cantidad: number;
}

export interface Prod_Prom {
  id_producto: string | number;
  id_promocion: string | number;
  cantidad: number;
}

export interface Venta {
  id_venta: string | number;
  id_pedido: string | number;
  id_factura: string | number;
  id_usuario: string | number;
  id_personal: string | number;
  nombre_personal: string;
  nombre_usuario: string;
  total: number;
  fecha_recepcion: Date | string;
}
